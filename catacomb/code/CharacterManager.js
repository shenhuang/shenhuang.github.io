var characterStats = []
var characterBoard = []

function CharacterInit()
{
    characterStats = InitCharacterStats()
    characterBoard = LoadCharacterBoard()
    ApplyTraitStats()
}

function InitCharacterStats()
{
    characterStats.ALIVE = true
    characterStats.HPMAX = 100
    characterStats.HP = 100
    characterStats.MONEY = 100
    characterStats.FOOD = 100
    characterStats.POWER = 100
    characterStats.LUCK = 100
    return characterStats
}

function GetCharacterHPString()
{
    s = `体力：${characterStats.HP} / ${characterStats.HPMAX}\n`
    return s
}

function GetCharacterMONEYString()
{
    s = `金钱：${characterStats.MONEY}\n`
    return s
}

function GetCharacterFOODString()
{
    s = `食物：${characterStats.FOOD}\n`
    return s
}

function UpdateHPMAX(delta)
{
    characterStats.HPMAX = characterStats.HPMAX + delta
    characterStats.HP = characterStats.HP + delta
    if(characterStats.HPMAX < 1)
    {
        characterStats.HPMAX = 1
    }
    if(characterStats.HP < 1)
    {
        characterStats.HP = 1
    }
    characterBoard.characterHPText.textContent = GetCharacterHPString()
}

function UpdateHP(delta)
{
    characterStats.HP = characterStats.HP + delta
    if(characterStats.HP < 1)
    {
        CharacterDead()
    }
    if(characterStats.HP > characterStats.HPMAX)
    {
        characterStats.HP = characterStats.HPMAX
    }
    characterBoard.characterHPText.textContent = GetCharacterHPString()
}

function UpdateMONEY(delta)
{
    characterStats.MONEY = characterStats.MONEY + delta
    if(characterStats.MONEY < 0)
    {
        characterStats.MONEY = 0
    }
    characterBoard.characterMONEYText.textContent = GetCharacterMONEYString()
}

function UpdateFOOD(delta)
{
    characterStats.FOOD = characterStats.FOOD + delta
    if(characterStats.FOOD < 0)
    {
        characterStats.FOOD = 0
    }
    characterBoard.characterFOODText.textContent = GetCharacterFOODString()   
}

function UpdatePOWER(delta)
{
    characterStats.POWER = characterStats.POWER + delta
    if(characterStats.POWER < 0)
    {
        characterStats.POWER = 0
    }
}

function UpdateLUCK(delta)
{
    characterStats.LUCK = characterStats.LUCK + delta
    if(characterStats.LUCK < 0)
    {
        characterStats.LUCK = 0
    }
}

function ApplyTraitStats()
{
    for(traitObject of SelectedTraits)
    {
        trait = traitObject.content
        if(trait["体质"] != null)
        {
            UpdateHPMAX(trait["体质"])
        }
        if(trait["金钱"] != null)
        {
            UpdateMONEY(trait["金钱"])
        }
        if(trait["食物"] != null)
        {
            UpdateFOOD(trait["食物"])
        }
        if(trait["战斗力"] != null)
        {
            UpdatePOWER(trait["战斗力"])
        }
        if(trait["运气"] != null)
        {
            UpdateLUCK(trait["运气"])
        }
    }
}

function ProcessCharacter()
{
    console.log("TODO: PROCESS CHARACTER")
}

function CharacterDead()
{
    alert('你💀了!')
    characterStats.ALIVE = false
}