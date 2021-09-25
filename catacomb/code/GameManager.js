function LoadGame()
{
    LoadText("你路过了一座古墓")
    LoadText("你决定进去探险")
    LoadText("请选择最多三个初始天赋")
    LoadTraits()
    LoadButton("开始冒险", () => {
		ClearPage()
        CharacterInit()
        EventInit()
    })
}