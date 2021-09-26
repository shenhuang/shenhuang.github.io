function ClearPage()
{
	document.body.innerHTML = ""
}

function LoadText(text, align = "center")
{
	let textObject = NewText(text, align)
	document.body.appendChild(textObject)
	return textObject
}

function NewText(text, align = "center")
{
	let textObject = document.createElement("DIV")
	textObject.textContent = text
	textObject.style.textAlign = align
	return textObject
}

function LoadBoard()
{
	let boardObject = NewBoard()
	document.body.appendChild(boardObject)
	return boardObject
}

function NewBoard()
{
	let boardObject = document.createElement("DIV")
	boardObject.setAttribute('class', 'board')
	return boardObject
}

function LoadBar(text, color)
{
	let barObject = NewBar(text, color)
	document.body.appendChild(barObject)
	return barObject
}

function NewBar(text, color)
{
	let barObject = document.createElement("DIV")
	barObject.textContent = text
	barObject.setAttribute('class', 'barDeselect')
	barObject.style.borderColor = color
	return barObject
}

function LoadButton(text, action)
{
	let buttonObject = NewButton(text, action)
	document.body.appendChild(buttonObject)
	return buttonObject
}

function NewButton(text, action)
{
	let buttonObject = document.createElement("DIV")
	buttonObject.textContent = text
	buttonObject.setAttribute('class', 'button')
	buttonObject.addEventListener('click', action)
	return buttonObject
}

function LoadCharacterBoard()
{
	let board = LoadBoard()
	let CharacterHPText = NewText(GetCharacterHPString(), "left")
	board.appendChild(CharacterHPText)
	let CharacterFOODText = NewText(GetCharacterFOODString(), "left")
	board.appendChild(CharacterFOODText)
	let CharacterMONEYText = NewText(GetCharacterMONEYString(), "left")
	board.appendChild(CharacterMONEYText)
	let boardObject = {
		board				: board,
		CharacterHPText		: CharacterHPText,
		CharacterFOODText	: CharacterFOODText,
		CharacterMONEYText	: CharacterMONEYText,
	}
	return boardObject
}

function LoadDialog(text)
{
	let dialogObject = NewDialog(text)
	document.body.appendChild(dialogObject)
	return dialogObject
}

function NewDialog(text)
{
	let dialogObject = document.createElement("DIV")
	dialogObject.textContent = text
	dialogObject.setAttribute('class', 'dialog')
	return dialogObject
}

function LoadEventDialog(title, content, choices = [])
{
	let eventDialogObject = NewEventDialog(title, content, choices)
	document.body.appendChild(eventDialogObject)
	ScrollToBottom()
	return eventDialogObject
}

function NewEventDialog(title, content, choices = [])
{
	let eventDialogObject = document.createElement("DIV")
	eventDialogObject.setAttribute('class', 'dialog')
	let textTitle = NewEventDialogTitle(title)
	let textContent = NewEventDialogContent(content)
	eventDialogObject.appendChild(textTitle)
	eventDialogObject.appendChild(textContent)
	return eventDialogObject
}

function NewEventDialogTitle(text)
{
	let textObject = document.createElement("DIV")
	textObject.textContent = text
	textObject.setAttribute('class', 'dialogTitle')
	return textObject
}

function NewEventDialogContent(text)
{
	let textObject = document.createElement("DIV")
	textObject.textContent = text
	textObject.setAttribute('class', 'dialogContent')
	return textObject
}

function NewEventDialogChoice(text, action)
{
	let choiceObject = document.createElement("DIV")
	choiceObject.textContent = text
	choiceObject.setAttribute('class', 'choice')
	choiceObject.action = action
	choiceObject.addEventListener('click', choiceObject.action)
	return choiceObject
}

function NewEventTraitDialogChoice(eText, tText, action)
{
	let choiceObject = document.createElement("DIV")
	let eventText = document.createElement("DIV")
	eventText.textContent = eText
	eventText.setAttribute('class', 'choiceTraitEText')
	choiceObject.appendChild(eventText)
	let traitText = document.createElement("DIV")
	traitText.textContent = `(${tText})`
	traitText.setAttribute('class', 'choiceTraitTText')
	choiceObject.appendChild(traitText)
	choiceObject.setAttribute('class', 'choice')
	choiceObject.action = action
	choiceObject.addEventListener('click', choiceObject.action)
	return choiceObject
}

function DisableEventDialogChoice(choiceObject, showSelected)
{
	choiceObject.removeEventListener('click', choiceObject.action)
	if(showSelected)
	{
		choiceObject.setAttribute('class', 'choiceSelected')
	}
}

function ScrollToBottom()
{
	window.scrollTo(0, document.body.scrollHeight)
}