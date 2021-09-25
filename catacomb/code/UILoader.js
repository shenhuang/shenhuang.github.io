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
	let characterHPText = NewText(GetCharacterHPString(), "left")
	board.appendChild(characterHPText)
	let characterFOODText = NewText(GetCharacterFOODString(), "left")
	board.appendChild(characterFOODText)
	let characterMONEYText = NewText(GetCharacterMONEYString(), "left")
	board.appendChild(characterMONEYText)
	let boardObject = {
		board				: board,
		characterHPText		: characterHPText,
		characterFOODText	: characterFOODText,
		characterMONEYText	: characterMONEYText,
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
	window.scrollTo(0, document.body.scrollHeight)
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