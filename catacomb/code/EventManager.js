level = -1
EventPool = []
MAKING_CHOICE = false

function EventInit()
{
    window.addEventListener('click', () => {
        if(!MAKING_CHOICE)
            ProcessNextEvent()
    })
}

function ProcessNextEvent()
{
    if(!characterStats.ALIVE)
        return
    level++
    if(level == 0)
    {
        LoadDialog("\n\n你\n开\n始\n了\n你\n的\n旅\n程\n\n\n")
        return
    }
    UpdateEventPool()
    LoadNextEvent()
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

function LoadNextEvent()
{
    let t = `第${level}层`
    let e = GetNextEvent()
    let c = e["描述"]
    LoadEventDialog(t, c)
}

function GetNextEvent()
{
    return EventPool[Math.floor(Math.random() * EventPool.length)]
}

function ValidEvent(e)
{
    if(e["最小层数"] > level)
        return false
    if(e["最大层数"] < level)
        return false
    if(e["最小生命"] > characterStats.HP)
        return false
    if(e["最大生命"] < characterStats.HP)
        return false
    if(e["%最小生命"] > characterStats.HP * 100 / characterStats.HPMAX)
        return false
    if(e["%最大生命"] < characterStats.HP * 100 / characterStats.HPMAX)
        return false
    if(e["最小金钱"] > characterStats.MONEY)
        return false
    if(e["最大金钱"] < characterStats.MONEY)
        return false
    if(e["最小战力"] > characterStats.POWER)
        return false
    if(e["最大战力"] < characterStats.POWER)
        return false
    if(e["最小运气"] > characterStats.LUCK)
        return false
    if(e["最大运气"] < characterStats.LUCK)
        return false
    return true
}