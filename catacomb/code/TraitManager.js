const MAX_SEL_TRAIT = 3
const MAX_GEN_TRAIT = 10

var SelectedTraits = new Set()

var traitRairtyWeights = {
	[1] : 100,
	[2] : 60,
	[3] : 30,
	[4] : 10,
	[5] : 1,
}

var traitRairtyColors = {
	[1] : "#C7C7C7",
	[2] : "#ADE687",
	[3] : "#8791E6",
	[4] : "#C587E6",
	[5] : "#E6BB87",
}

var traitAttributes = [
	"体质",
	"金钱",
	"食物",
	"战斗力",
	"运气",
]

function LoadTraits()
{
	let traitObjects = []
	let showTraits = GetShowTraits()
	for(i in showTraits)
	{
		traitObjects.push(LoadTrait(showTraits[i]))
	}
	return traitObjects
}

function LoadAllTraits()
{
	let traitObjects = []
	for(i in TRAITS)
	{
		traitObjects.push(LoadTrait(TRAITS[i]))
	}
	return traitObjects
}

function GetShowTraits()
{
	let traitRairtyOdds = GetTraitRairtyOdds(traitRairtyWeights)
	let thresh = GetTraitRairtyThresh(traitRairtyOdds)
	let traitsByRairty = GetTraitsByRairty()
	let showTraits = []
	for(i = 0; i < MAX_GEN_TRAIT; i++)
	{
		let randn = Math.random()
		let rairty = 0
		for(r in thresh)
		{
			if(randn > thresh[r])
			{
				rairty = r
			}
		}
		showTraits.push(GetRandomTrait(traitsByRairty[rairty]))
	}
	return showTraits
}

function GetTraitRairtyOdds(weights)
{
	let d = 0
	for(i in weights)
	{
		d += weights[i]
	}
	let odds = []
	for(i in weights)
	{
		odds[i] = weights[i] / d
	}
	return odds
}

function GetTraitRairtyThresh(odds)
{
	thresh = []
	s = 0
	for(i in odds)
	{
		thresh[i] = s
		s += odds[i]
	}
	return thresh
}

function GetTraitsByRairty()
{
	let tbr = {}
	for(i in TRAITS)
	{
		let trait = TRAITS[i]
		if(trait["稀有度"] != null)
		{
			if(tbr[trait["稀有度"]] == null)
				tbr[trait["稀有度"]] = []
			tbr[trait["稀有度"]].push(trait)
		}
	}
	return tbr
}

function GetRandomTrait(traitList)
{
	let index = Math.floor(Math.random() * TRAITS.length)
	return traitList.splice(index, 1)[0]
}

function LoadTrait(trait)
{
	let color = traitRairtyColors[trait["稀有度"]]
	if(color == null || trait["名称"] == null)
		return
	let traitObject = {
		div		: LoadBar(GetTraitText(trait), color),
		sel		: false,
		content	: trait,
	}
	traitObject.div.addEventListener('click', function(event)
	{
		SelectTrait(traitObject, !trait.selected)
	})
	return traitObject
}

function GetTraitText(trait)
{
	let text = trait["名称"]
	let desc = GetTraitDesc(trait)
	if(desc != " ()")
	{
		text = text + desc
	}
	return text
}

function GetTraitDesc(trait)
{
	let desc = " ("
	if(trait["描述"] != null)
	{
		desc = desc + trait["描述"]
		
	}
	else
	{
		for(i of traitAttributes)
		{
			if(trait[i] != null)
			{
				desc = desc + i
				if(trait[i] >= 0)
				{
					desc = desc + "+"
				}
				desc = desc + trait[i] + " "
			}
		}
	}
	desc = desc.trimEnd()
	desc = desc + ")"
	return desc
}

function SelectTrait(traitObject, select)
{
	if(traitObject.sel == true)
	{
		traitObject.div.setAttribute('class', 'barDeselect')
		traitObject.sel = false
		SelectedTraits.delete(traitObject)
	}
	else
	{
		if(SelectedTraits.size < MAX_SEL_TRAIT)
		{
			traitObject.div.setAttribute('class', 'barSelect')
			traitObject.sel = true
			SelectedTraits.add(traitObject)	
		}
	}
}