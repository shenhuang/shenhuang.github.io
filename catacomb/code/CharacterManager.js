const FOOD_LOSS_PER_TURN = 1
const HUNGER_HP_LOSS = 5
const PROCESS_DEATH_DELAY = 1000

var CharacterTraits
var CharacterStatus
var CharacterStats
var CharacterBoard

var CharacterStatsUpdateTable = {
    ["体力上限"] : UpdateHPMAX,
    ["体力"] : UpdateHP,
    ["金钱"] : UpdateMONEY,
    ["食物"] : UpdateFOOD,
    ["战斗力"] : UpdatePOWER,
    ["运气"] : UpdateLUCK,
}

function CharacterInit()
{
    CharacterStatus = InitCharacterStatus()
    CharacterStats = InitCharacterStats()
    CharacterBoard = LoadCharacterBoard()
    ApplyTraitSelection()
    ApplySelectedTraitStats()
}

function InitCharacterStatus()
{
    CharacterStatus = []
    CharacterStatus.ALIVE = true
    CharacterStatus.POISON = []
    return CharacterStatus
}

function InitCharacterStats()
{   
    CharacterStats = []
    CharacterStats.HPMAX = 100
    CharacterStats.HP = 100
    CharacterStats.MONEY = 100
    CharacterStats.FOOD = 100
    CharacterStats.POWER = 100
    CharacterStats.LUCK = 100
    return CharacterStats
}

function GetCharacterHPString()
{
    s = `体力：${CharacterStats.HP} / ${CharacterStats.HPMAX}\n`
    return s
}

function GetCharacterMONEYString()
{
    s = `金钱：${CharacterStats.MONEY}\n`
    return s
}

function GetCharacterFOODString()
{
    s = `食物：${CharacterStats.FOOD}\n`
    return s
}

function UpdateHPMAX(delta, flashScreen = true)
{
    CharacterStats.HPMAX = CharacterStats.HPMAX + delta
    CharacterStats.HP = CharacterStats.HP + delta
    if(flashScreen && delta < 0)
        FlashScreen('red')
    if(CharacterStats.HPMAX < 1)
    {
        CharacterStats.HPMAX = 1
    }
    if(CharacterStats.HP < 1)
    {
        CharacterStats.HP = 1
    }
    CharacterBoard.CharacterHPText.textContent = GetCharacterHPString()
}

function UpdateHP(delta, flashScreen = true)
{
    CharacterStats.HP = CharacterStats.HP + delta
    if(flashScreen && delta < 0)
        FlashScreen('red')
    if(CharacterStats.HP < 1)
    {
        CharacterDead()
    }
    if(CharacterStats.HP > CharacterStats.HPMAX)
    {
        CharacterStats.HP = CharacterStats.HPMAX
    }
    CharacterBoard.CharacterHPText.textContent = GetCharacterHPString()
}

function UpdateMONEY(delta)
{
    CharacterStats.MONEY = CharacterStats.MONEY + delta
    if(CharacterStats.MONEY < 0)
    {
        CharacterStats.MONEY = 0
    }
    CharacterBoard.CharacterMONEYText.textContent = GetCharacterMONEYString()
}

function UpdateFOOD(delta)
{
    CharacterStats.FOOD = CharacterStats.FOOD + delta
    if(CharacterStats.FOOD < 0)
    {
        CharacterStats.FOOD = 0
    }
    CharacterBoard.CharacterFOODText.textContent = GetCharacterFOODString()   
}

function UpdatePOWER(delta)
{
    CharacterStats.POWER = CharacterStats.POWER + delta
    if(CharacterStats.POWER < 0)
    {
        CharacterStats.POWER = 0
    }
}

function UpdateLUCK(delta)
{
    CharacterStats.LUCK = CharacterStats.LUCK + delta
    if(CharacterStats.LUCK < 0)
    {
        CharacterStats.LUCK = 0
    }
}

function ApplyTraitSelection()
{
    CharacterTraits = []
    for(traitObject of SelectedTraits)
    {
        CharacterTraits.push(traitObject.content)
    }
}

function ApplySelectedTraitStats()
{
    for(trait of CharacterTraits)
    {
        ApplyTraitStats(trait)
    }
}

function ProcessCharacter()
{
    ProcessCharacterPoison()
    ProcessCharacterHunger()
}

function ProcessCharacterPoison()
{
    let totalDamage = 0
    let leftOver = []
    for(i in CharacterStatus.POISON)
    {
        let poison = CharacterStatus.POISON[i]
        if(poison.duration > 0)
        {
            poison.duration--
            totalDamage += poison.strength
            leftOver.push(poison)
        }
    }
    CharacterStatus.POISON.push(leftOver)
    if(totalDamage > 0)
    {
        alert(`你因为中毒流失了${totalDamage}点体力!`)
        UpdateHP(-totalDamage)
    }
}

function ProcessCharacterHunger()
{
    if(CharacterStats.FOOD >= FOOD_LOSS_PER_TURN)
    {
        UpdateFOOD(-FOOD_LOSS_PER_TURN)
    }
    else
    {
        let totalDamage = (FOOD_LOSS_PER_TURN - CharacterStats.FOOD) * HUNGER_HP_LOSS
        alert(`你因为饥饿流失了${totalDamage}点体力!`)
        UpdateHP(-totalDamage)
        CharacterStats.FOOD = 0
    }
}

function CharacterDead()
{
    setTimeout(() => {
        alert('你💀了!')
        setTimeout(() => {
            ProcessDeath()
        }, PROCESS_DEATH_DELAY)
    }, 1)
    CharacterStatus.ALIVE = false
}