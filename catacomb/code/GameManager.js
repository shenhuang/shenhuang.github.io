function LoadGame()
{
    LoadText("你路过了一座古代地下遗迹")
    LoadText("你决定进去探险")
    LoadText("请选择最多三个初始天赋")
    InitTraits()
    LoadTraits()
    LoadButton("开始冒险", () => {
		ClearPage()
        CharacterInit()
        EventInit()
    })
}

function ProcessDeath()
{
    ClearPage()
    LoadText(`这次探险你到了第${level}层`)
    LoadText(`你在探险中获得了以下天赋`)
    LoadTraitList(CharacterTraits)
    LoadButton("再来一轮", () => {
        ClearPage()
		LoadGame()
    })
}