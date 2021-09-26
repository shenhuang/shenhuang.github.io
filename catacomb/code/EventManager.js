var level = -1
var EventPool = []
var CurrentEventDialog
var EVENT_PENDING = false

function EventInit()
{
    window.addEventListener('click', () => {
        if(!EVENT_PENDING)
            NextEvent()
    })
}

function NextEvent()
{
    if(!CharacterStatus.ALIVE)
        return
    level++
    if(level == 0)
    {
        LoadDialog("\n\n你\n开\n始\n了\n你\n的\n旅\n程\n\n\n")
        return
    }
    UpdateEventPool()
    let e = GetNextEvent()
    CurrentEventDialog = LoadEvent(e)
    ProcessEvent(e)
    ProcessCharacter()
}

function UpdateEventPool()
{
    EventPool = []
    for(i in EVENTS)
    {
        if(ValidEvent(EVENTS[i]))
            EventPool.push(EVENTS[i])
    }
}

function LoadEvent(event)
{
    return LoadEventDialog(`第${level}层`, event["描述"])
}

function GetNextEvent()
{
    return EventPool[Math.floor(Math.random() * EventPool.length)]
}

function ProcessEvent(event)
{
    if(!CharacterStatus.ALIVE)
        return
    EVENT_PENDING = false
    if(event == null)
    {
        console.error("NULL EVENT ENCOUNTERED!!!")
        return
    }
    ProcessStatsChange(event)
    ProcessStatusChange(event)
    if(event["依赖"] != null)
    {
        ProcessDependency(event)
    }
    if(event["敌人战力"] != null)
    {
        ProcessBattle(event["敌人战力"])
    }
    if(event["好结果"] != null || event["坏结果"] != null)
    {
        ProcessDualResult(event)
        return
    }
    if(event["选项"] != null)
    {
        ProcessChoices(event)
        return
    }
}

function ProcessDependency(event)
{
    CurrentEventDialog.appendChild(NewEventDialogContent(event["描述"]))
    ScrollToBottom()
}

function ProcessDualResult(event)
{
    EVENT_PENDING = true
    let result = GetEventResult(event)
    
    window.addEventListener('click', () => {
        setTimeout(() => {
            ProcessEvent(result)
        }, 1)
    }, {once : true})
    
}

function GetEventResult(event)
{
    if(Math.random() > 100 / (CharacterStats.LUCK + 100))
    {
        return EVENTS[event["好结果"]]
    }
    return EVENTS[event["坏结果"]]
}

function ProcessChoices(event)
{
    EVENT_PENDING = true
    let choiceEvents = GetChoiceEvents(event)
    let choiceEventsTrait = GetChoiceEventsTrait(event)
    LoadChoiceEvents(choiceEvents, choiceEventsTrait)
}

function GetChoiceEvents(event)
{
    let choiceEvents = []
    if(event["选项"] == null)
        return choiceEvents
    let choiceIDs = event["选项"].split(',').map(Number)
    for(i in choiceIDs)
    {
        let e = EVENTS[choiceIDs[i]]
        if(ValidSubEvent(e))
            choiceEvents.push(e)
    }
    return choiceEvents
}

function GetChoiceEventsTrait(event)
{
    let choiceEventsTrait = []
    if(event["天赋选项"] == null)
        return choiceEventsTrait
    let choiceConfigs = event["天赋选项"].split(',').map((data) => {
        let s = data.split('#')
        let c = {
            eid : parseInt(s[0]),
            tid : parseInt(s[1]),
        }
        return c
    })
    for(i in choiceConfigs)
    {
        let choiceConfig = choiceConfigs[i]
        let e = EVENTS[choiceConfig.eid]
        let t = TRAITS[choiceConfig.tid]
        let choiceEventTrait = 
        {
            event   : e,
            trait   : t,
        }
        if(ValidSubEvent(e) && CharacterTraits.includes(t))
            choiceEventsTrait.push(choiceEventTrait)
    }
    return choiceEventsTrait
}

function LoadChoiceEvents(events, eventsTrait)
{
    let choiceObjectList = []
    for(i in events)
    {
        let event = events[i]
        let choiceObject = NewEventDialogChoice(event["名称"], () => {
            setTimeout(() => {
                for(j in choiceObjectList)
                {
                    DisableEventDialogChoice(choiceObjectList[j], choiceObjectList[j] == choiceObject)    
                }
                ProcessEvent(event)
            }, 1)
        })
        choiceObjectList.push(choiceObject)
        CurrentEventDialog.appendChild(choiceObject)
    }
    for(i in eventsTrait)
    {
        let event = eventsTrait[i].event
        let trait = eventsTrait[i].trait
        let choiceObject = NewEventTraitDialogChoice(event["名称"], trait["名称"], () => {
            setTimeout(() => {
                for(j in choiceObjectList)
                {
                    DisableEventDialogChoice(choiceObjectList[j], choiceObjectList[j] == choiceObject)    
                }
                ProcessEvent(event)
            }, 1)
        })
        choiceObjectList.push(choiceObject)
        CurrentEventDialog.appendChild(choiceObject)       
    }
    ScrollToBottom()
}

function ProcessStatsChange(event)
{
    if(event["体力上限"] != null)
        UpdateHPMAX(event["体力上限"])
    if(event["体力"] != null)
        UpdateHP(event["体力"])
    if(event["金钱"] != null)
        UpdateMONEY(event["金钱"])
    if(event["食物"] != null)
        UpdateFOOD(event["食物"])
    if(event["战斗力"] != null)
        UpdatePOWER(event["战斗力"])
    if(event["运气"] != null)
        UpdateLUCK(event["运气"])    
}

function ProcessStatusChange(event)
{
    ProcessPoisonStatus(event)
}

function ProcessPoisonStatus(event)
{
    if(event["中毒时间"] != null && event["中毒效果"] != null)
    {
        let bias = GetPoisonTraitBias(CharacterTraits)
        console.log(bias.chance)
        if(Math.random() > bias.chance)
            return
        let poison = {
            duration    : Math.floor(event["中毒时间"] * bias.weaken),
            strength    : event["中毒效果"],
        }
        console.log(poison)
        CharacterStatus.POISON.push(poison)
    }
}

function GetPoisonTraitBias(traits)
{
    let c = 1
    let w = 1
    for(i in traits)
    {
        if(SPECIAL_TRAITS_POISON[trait["名称"]] != null)
        {
            c = c * SPECIAL_TRAITS_POISON[trait["名称"]].chance
            w = w * SPECIAL_TRAITS_POISON[trait["名称"]].weaken
        }
    }
    return {chance : c, weaken : w}
}

function ValidEvent(event)
{
    if(event["依赖"] != null)
        return false
    return ValidSubEvent(event)
}

function ValidSubEvent(event)
{
    if(event["最小层数"] > level)
        return false
    if(event["最大层数"] < level)
        return false
    if(event["最小生命"] > CharacterStats.HP)
        return false
    if(event["最大生命"] < CharacterStats.HP)
        return false
    if(event["%最小生命"] > CharacterStats.HP * 100 / CharacterStats.HPMAX)
        return false
    if(event["%最大生命"] < CharacterStats.HP * 100 / CharacterStats.HPMAX)
        return false
    if(event["最小金钱"] > CharacterStats.MONEY)
        return false
    if(event["最大金钱"] < CharacterStats.MONEY)
        return false
    if(event["最小战力"] > CharacterStats.POWER)
        return false
    if(event["最大战力"] < CharacterStats.POWER)
        return false
    if(event["最小运气"] > CharacterStats.LUCK)
        return false
    if(event["最大运气"] < CharacterStats.LUCK)
        return false
    return true
}