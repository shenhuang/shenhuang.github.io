//Autogen by dataconv.py on 2021-09-27 20:43:08.140092
var EVENTS = {
	[2] : {
		"描述" : "这一层什么也没有",
	},
	[3] : {
		"描述" : "你捡到了一元钱",
		"金钱" : 1,
	},
	[4] : {
		"描述" : "你捡到了10块钱",
		"金钱" : 10,
	},
	[5] : {
		"描述" : "你发现了一些罐装食物",
		"食物" : 5,
	},
	[6] : {
		"描述" : "你休息了片刻，回复了1点体力",
		"体力" : 1.0,
	},
	[7] : {
		"描述" : "你不小心触发了古墓内遗留下来的机关",
		"好结果" : 8.0,
		"坏结果" : 9.0,
	},
	[8] : {
		"描述" : "幸运的是，机关已经非常陈旧了，所以并没有任何作用",
		"依赖" : 7,
	},
	[9] : {
		"描述" : "你被机关伤到！",
		"依赖" : 7,
		"体力" : -10.0,
	},
	[10] : {
		"描述" : "你来到了一个祭坛，这里供奉着古代神明，你可以向神明祈祷：",
		"选项" : "11, 12, 13, 14",
	},
	[11] : {
		"名称" : "祈求平安",
		"描述" : "你祈求平安，你的体力上限提升了！",
		"依赖" : 10,
		"体力上限" : 10.0,
	},
	[12] : {
		"名称" : "祈求富贵",
		"描述" : "你祈求富贵，你获得了一些金币！",
		"依赖" : 10,
		"金钱" : 50,
	},
	[13] : {
		"名称" : "祈求好运",
		"描述" : "你祈求好运，你的运气增加了！",
		"依赖" : 10,
		"运气" : 10.0,
	},
	[14] : {
		"名称" : "离开",
		"描述" : "你选择了离开，什么事情也没有发生",
		"依赖" : 10,
	},
	[15] : {
		"描述" : "你发现了一些生长在遗迹内的野生蘑菇，是否要尝尝看？",
		"选项" : "16, 19",
		"天赋选项" : "20#46, 21#29, 21#33, 22#9",
	},
	[16] : {
		"名称" : "品尝",
		"描述" : "你采了一颗蘑菇尝了尝",
		"依赖" : 14,
		"好结果" : 17.0,
		"坏结果" : 18.0,
	},
	[17] : {
		"描述" : "蘑菇没有任何问题，而且味道非常鲜美。于是你又多采了一些，方便之后食用",
		"依赖" : 16,
		"食物" : 5,
	},
	[18] : {
		"描述" : "你吃完蘑菇后顿时感觉头晕目眩，你中毒了！",
		"依赖" : 16,
		"中毒时间" : 5.0,
		"中毒效果" : 5.0,
	},
	[19] : {
		"名称" : "不尝",
		"描述" : "你觉得这些野生蘑菇不靠谱，于是就没有再碰它们",
		"依赖" : 14,
	},
	[20] : {
		"名称" : "带走",
		"描述" : "你百毒不侵，毒蘑菇对你来说也是食物，于是你把蘑菇都采了带到路上吃",
		"依赖" : 14,
		"食物" : 8,
	},
	[21] : {
		"名称" : "挑选",
		"描述" : "你经常食用各种类型的蘑菇，所以对蘑菇非常了解。你挑选出了那些没有毒的蘑菇作为储备食物。",
		"依赖" : 14,
		"食物" : 5,
	},
	[22] : {
		"名称" : "加工",
		"描述" : "你是炊事部长，所以你很清楚如何挑选与加工野生蘑菇。你挑选出了一些合适的蘑菇并加工成了美食。",
		"依赖" : 14,
		"食物" : 7,
	},
	[23] : {
		"描述" : "你遇到了遗迹的守卫者前哨，是否要与其战斗？",
		"选项" : "24, 25",
	},
	[24] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者前哨战斗！",
		"依赖" : 23,
		"好结果" : 28.0,
		"坏结果" : 28.0,
		"敌人战力" : 125,
	},
	[25] : {
		"名称" : "逃跑",
		"描述" : "你选择逃跑！",
		"依赖" : 23,
		"好结果" : 26.0,
		"坏结果" : 27.0,
	},
	[26] : {
		"描述" : "你成功逃脱！",
		"依赖" : 25,
	},
	[27] : {
		"描述" : "你没能成功逃脱，被迫和守卫者前哨战斗！",
		"依赖" : 25,
		"好结果" : 28.0,
		"坏结果" : 28.0,
		"敌人战力" : 125,
	},
	[28] : {
		"描述" : "你战胜了守卫者前哨，在它的身上搜刮到了一些金币！",
		"依赖" : "24, 27",
		"金钱" : 5,
	},
	[29] : {
		"描述" : "你遇到了遗迹的守卫者盾卫，是否要与其战斗？",
		"选项" : "30, 31",
	},
	[30] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者盾卫战斗！",
		"依赖" : 29,
		"好结果" : 32.0,
		"坏结果" : 32.0,
		"敌人战力" : 120,
	},
	[31] : {
		"名称" : "逃跑",
		"描述" : "守卫者盾卫行动缓慢，你轻松逃脱！",
		"依赖" : 29,
	},
	[32] : {
		"描述" : "你继续和守卫者盾卫战斗！",
		"依赖" : 30,
		"好结果" : 33.0,
		"坏结果" : 33.0,
		"敌人战力" : 120,
	},
	[33] : {
		"描述" : "你继续和守卫者盾卫战斗！",
		"依赖" : 32,
		"好结果" : 34.0,
		"坏结果" : 34.0,
		"敌人战力" : 120,
	},
	[34] : {
		"描述" : "你战胜了守卫者盾卫，在它的身上搜刮到了一些金币！",
		"依赖" : 33,
		"金钱" : 8,
	},
	[35] : {
		"描述" : "你遇到了一头奶牛，它看起来很不一般，你选择：",
		"选项" : "36, 37",
	},
	[36] : {
		"名称" : "宰了它",
		"描述" : "你靠近了这头奶牛，它感觉到了杀意，于是突然站了起来，掏出了一把武器开始对你反击！",
		"依赖" : 35,
		"好结果" : 38.0,
		"坏结果" : 38.0,
	},
	[37] : {
		"名称" : "不理会",
		"描述" : "你觉得这头奶牛很是诡异，于是你决定离开",
		"依赖" : 35,
	},
	[38] : {
		"描述" : "你和奶牛战斗！",
		"依赖" : 36,
		"好结果" : 39.0,
		"坏结果" : 39.0,
		"敌人战力" : "&5|+125",
	},
	[39] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 38,
		"好结果" : 40.0,
		"坏结果" : 40.0,
		"敌人战力" : "&5|+125",
	},
	[40] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 39,
		"好结果" : 41.0,
		"坏结果" : 41.0,
		"敌人战力" : "&5|+125",
	},
	[41] : {
		"描述" : "你战胜了这头奇怪的奶牛！",
		"依赖" : 40,
		"获得天赋" : 100.0,
	},
	[42] : {
		"描述" : "你又遇到了一头看起来很不一般的奶牛，你选择：",
		"选项" : "43, 44",
		"天赋触发" : 100.0,
	},
	[43] : {
		"名称" : "战斗",
		"描述" : "你靠近了这头奶牛，奶牛见到来者不善，马上掏出了武器进行反击！",
		"依赖" : 42,
		"好结果" : 45.0,
		"坏结果" : 45.0,
	},
	[44] : {
		"名称" : "离开",
		"描述" : "你不太想和这头奶牛交战，于是你转身离开了这里",
		"依赖" : 42,
	},
	[45] : {
		"描述" : "你和奶牛战斗！",
		"依赖" : 43,
		"好结果" : 46.0,
		"坏结果" : 46.0,
		"敌人战力" : "&10|+150",
	},
	[46] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 45,
		"好结果" : 47.0,
		"坏结果" : 47.0,
		"敌人战力" : "&10|+150",
	},
	[47] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 46,
		"好结果" : 48.0,
		"坏结果" : 48.0,
		"敌人战力" : "&10|+150",
	},
	[48] : {
		"描述" : "你战胜了这头奇怪的奶牛！",
		"依赖" : 47,
		"获得天赋" : 101.0,
	},
	[49] : {
		"描述" : "你再一次遇到了一头看起来很不一般的奶牛，它的手里还握着武器，眼神中充满愤怒，似乎在寻找什么，你选择：",
		"选项" : "50, 51",
		"天赋触发" : 101.0,
	},
	[50] : {
		"名称" : "宰了它",
		"描述" : "这头奶牛见到你宛如见到了杀父仇人，握紧了手里的武器，红着眼冲了过来！",
		"依赖" : 49,
		"好结果" : 52.0,
		"坏结果" : 52.0,
	},
	[51] : {
		"名称" : "放过它",
		"描述" : "你决定放过这头奶牛，于是你悄悄离开了这里",
		"依赖" : 49,
	},
	[52] : {
		"描述" : "你和奶牛战斗！",
		"依赖" : 50,
		"好结果" : 53.0,
		"坏结果" : 53.0,
		"敌人战力" : "&10|+200",
	},
	[53] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 52,
		"好结果" : 54.0,
		"坏结果" : 54.0,
		"敌人战力" : "&10|+200",
	},
	[54] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 53,
		"好结果" : 55.0,
		"坏结果" : 55.0,
		"敌人战力" : "&10|+200",
	},
	[55] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 54,
		"好结果" : 56.0,
		"坏结果" : 56.0,
		"敌人战力" : "&10|+200",
	},
	[56] : {
		"描述" : "你战胜了这头奇怪的奶牛！",
		"依赖" : 55,
		"获得天赋" : 102.0,
	},
	[57] : {
		"描述" : "你来到一个空旷的地方，像是一个祭坛，祭坛的中央有一尊牛形的雕塑，你选择：",
		"选项" : "58, 59, 60",
		"天赋选项" : "61#102",
	},
	[58] : {
		"名称" : "休息",
		"描述" : "你在这里休息了片刻，感觉精神不少，恢复了5点体力",
		"依赖" : 57,
		"体力" : 5.0,
	},
	[59] : {
		"名称" : "用餐",
		"描述" : "你在这里美餐了一顿，感觉浑身充满力量，恢复了25点体力",
		"依赖" : 57,
		"体力" : 25.0,
		"食物" : -10,
		"最小食物" : 10.0,
	},
	[60] : {
		"名称" : "离开",
		"描述" : "你想要专心赶路，所以选择了离开",
		"依赖" : 57,
	},
	[61] : {
		"名称" : "羞辱雕像",
		"描述" : "你竖起中指，对着眼前的牛形雕像做起了挑衅的姿势……",
		"依赖" : 57,
		"好结果" : 62.0,
		"坏结果" : 63.0,
	},
	[62] : {
		"描述" : "雕像突然开始震动，随后，一道传送门被缓缓打开……",
		"依赖" : 61,
		"好结果" : 64.0,
		"坏结果" : 64.0,
	},
	[63] : {
		"描述" : "雕像突然开始震动，随后，一道闪电劈了下来，刚好劈在了你的身上……",
		"依赖" : 61,
		"体力" : -50.0,
	},
	[64] : {
		"描述" : "传送门稳定了下来，你选择：",
		"依赖" : 62,
		"选项" : "65, 66",
	},
	[65] : {
		"名称" : "进入",
		"描述" : "你进入了传送门……",
		"依赖" : 64,
		"好结果" : 67.0,
		"坏结果" : 67.0,
	},
	[66] : {
		"名称" : "离开",
		"描述" : "你担心这个传送门有些危险，于是转身离开",
		"依赖" : 64,
	},
	[67] : {
		"描述" : "你被传送到了另一个地方，这里似乎是一个农场……",
		"依赖" : 65,
		"好结果" : 68.0,
		"坏结果" : 68.0,
	},
	[68] : {
		"描述" : "周围有许多手拿武器的奶牛，你选择：",
		"依赖" : 67,
		"选项" : "69, 70",
	},
	[69] : {
		"名称" : "战斗",
		"描述" : "你选择战斗！",
		"依赖" : 68,
		"好结果" : 73.0,
		"坏结果" : 73.0,
	},
	[70] : {
		"名称" : "离开",
		"描述" : "你选择离开，你从传送门穿越了回去……",
		"依赖" : 68,
		"好结果" : 71.0,
		"坏结果" : 71.0,
	},
	[71] : {
		"描述" : "你回到了最开始的地方，看着那尊牛形雕像，你瞬间感觉有些愧疚……",
		"依赖" : 69,
		"好结果" : 72.0,
		"坏结果" : 72.0,
	},
	[72] : {
		"描述" : "但是你没有多想，便又继续踏上了你的探险旅程……",
		"依赖" : 71,
	},
	[73] : {
		"描述" : "你和奶牛战斗！",
		"依赖" : 69,
		"好结果" : 74.0,
		"坏结果" : 74.0,
		"敌人战力" : "&10|+200",
	},
	[74] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 73,
		"好结果" : 75.0,
		"坏结果" : 75.0,
		"敌人战力" : "&10|+200",
	},
	[75] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 74,
		"好结果" : 76.0,
		"坏结果" : 76.0,
		"敌人战力" : "&10|+200",
	},
	[76] : {
		"描述" : "你继续和奶牛战斗！",
		"依赖" : 75,
		"好结果" : 77.0,
		"坏结果" : 77.0,
		"敌人战力" : "&10|+200",
	},
	[77] : {
		"描述" : "你战胜了奶牛！",
		"依赖" : 76,
		"好结果" : 68.0,
		"坏结果" : 68.0,
		"金钱" : "1, 10",
		"食物" : "75, 100",
	},
	[78] : {
		"描述" : "你来到了一个古代文明的自动售货机，里面有各式各样的食物，你选择：",
		"选项" : "79, 80, 81, 82",
		"天赋选项" : "83#42, 83#43",
	},
	[79] : {
		"名称" : "离开",
		"描述" : "你没有买任何东西，选择了离开",
		"依赖" : 78,
	},
	[80] : {
		"名称" : "薯片（¥10）",
		"描述" : "你花费¥10买了一袋薯片（食物+10）",
		"依赖" : 78,
		"金钱" : -10,
		"食物" : 10,
		"最小金钱" : 10.0,
	},
	[81] : {
		"名称" : "便当（¥25）",
		"描述" : "你花费¥25买了一盒便当（食物+30）",
		"依赖" : 78,
		"金钱" : -25,
		"食物" : 30,
		"最小金钱" : 25.0,
	},
	[82] : {
		"名称" : "烤鸡（¥50）",
		"描述" : "你花费¥50买了一只烤鸡（食物+75）",
		"依赖" : 78,
		"金钱" : -50,
		"食物" : 75,
		"最小金钱" : 50.0,
	},
	[83] : {
		"名称" : "抢劫",
		"描述" : "你对机器一顿疯狂输出……",
		"依赖" : 78,
		"好结果" : 84.0,
		"坏结果" : 85.0,
	},
	[84] : {
		"描述" : "机器被你拆开，你获得了一些食物和零钱",
		"依赖" : 83,
		"金钱" : "5, 10",
		"食物" : "5, 10",
	},
	[85] : {
		"描述" : "机器发生了爆炸，将你炸伤！所幸还残留了一些食物和零钱",
		"依赖" : 83,
		"体力" : -10.0,
		"金钱" : "1, 5",
		"食物" : "1, 10",
	},
	[86] : {
		"描述" : "你来到了一个古代文明的医院，这里有全自动的医疗设备，但是需要收费，你选择：",
		"选项" : "87, 88, 89, 90",
		"天赋选项" : "91#47, 92#42, 92#43",
	},
	[87] : {
		"名称" : "离开",
		"描述" : "你没有进行任何治疗，选择了离开",
		"依赖" : 86,
	},
	[88] : {
		"名称" : "普通治疗（¥50）",
		"描述" : "你购买了普通治疗服务，恢复了25点体力",
		"依赖" : 86,
		"体力" : 25.0,
		"金钱" : -50,
		"最小金钱" : 50.0,
	},
	[89] : {
		"名称" : "全面治疗（¥100）",
		"描述" : "你购买了全面治疗服务，恢复了50点体力",
		"依赖" : 86,
		"体力" : 50.0,
		"金钱" : -100,
		"最小金钱" : 100.0,
	},
	[90] : {
		"名称" : "豪华治疗（¥150）",
		"描述" : "你购买了豪华治疗服务，恢复了100点体力",
		"依赖" : 86,
		"体力" : 100.0,
		"金钱" : -150,
		"最小金钱" : 150.0,
	},
	[91] : {
		"名称" : "自己动手（¥35）",
		"描述" : "身为医生的你购买了一些医疗工具和材料，为自己恢复了50点体力",
		"依赖" : 86,
		"体力" : 50.0,
		"金钱" : -35,
		"最小金钱" : 35.0,
	},
	[92] : {
		"名称" : "抢劫",
		"描述" : "你开始寻找值钱的东西……",
		"依赖" : 86,
		"好结果" : 93.0,
		"坏结果" : 94.0,
	},
	[93] : {
		"描述" : "你搜刮了整个医院，找到了些许值钱的东西",
		"依赖" : 92,
		"金钱" : "10, 50",
	},
	[94] : {
		"描述" : "你搜刮了整个医院，但是什么值钱的东西都没有找到",
		"依赖" : 92,
	},
	[95] : {
		"描述" : "你遇到了一个衣衫褴褛的老头，他自称是一名江湖大侠，因为躲避江湖恩怨逃到了这里。",
		"好结果" : 96.0,
		"坏结果" : 122.0,
	},
	[96] : {
		"描述" : "他已经饿了好几天了，你如果愿意给他一些吃的，他就能教你几招他的绝学。",
		"依赖" : 95,
		"选项" : "97, 98, 99, 100, 101",
		"天赋选项" : "102#42, 102#43, 103#42, 103#43",
	},
	[97] : {
		"名称" : "离开",
		"描述" : "你不想给这个老头任何食物，于是决定离开",
		"依赖" : 96,
	},
	[98] : {
		"名称" : "练身法（20食物）",
		"描述" : "你给了这个老头一些吃的，他教了你几招（战斗力+10）",
		"依赖" : 96,
		"食物" : -20,
		"战斗力" : 10.0,
		"最小食物" : 20.0,
		"最大战力" : 200.0,
	},
	[99] : {
		"名称" : "练身法（50食物）",
		"描述" : "你给了这个老头很多吃的，他非常感动，悉心教导了你好一会儿（战斗力+20）",
		"依赖" : 96,
		"食物" : -50,
		"战斗力" : 20.0,
		"最小食物" : 50.0,
		"最大战力" : 500.0,
	},
	[100] : {
		"名称" : "练内功（20食物）",
		"描述" : "你给了这个老头一些吃的，他教了你几招（体力上限+10）",
		"依赖" : 96,
		"食物" : -20,
		"战斗力" : 10.0,
		"最小食物" : 20.0,
	},
	[101] : {
		"名称" : "练内功（50食物）",
		"描述" : "你给了这个老头很多吃的，他非常感动，悉心教导了你好一会儿（体力上限+20）",
		"依赖" : 96,
		"食物" : -50,
		"战斗力" : 20.0,
		"最小食物" : 50.0,
	},
	[102] : {
		"名称" : "抢劫",
		"描述" : "你试图打劫你眼前的这个老头",
		"依赖" : 96,
		"好结果" : 104.0,
		"坏结果" : 105.0,
		"最大战力" : 299.0,
	},
	[103] : {
		"名称" : "抢劫",
		"描述" : "你试图打劫你眼前的这个老头",
		"依赖" : 96,
		"好结果" : 105.0,
		"坏结果" : 105.0,
		"最小战力" : 300.0,
	},
	[104] : {
		"描述" : "他武功高强，几招便制服了你。但是他也没有计较，把你放走了",
		"依赖" : 102,
	},
	[105] : {
		"描述" : "你和江湖大侠战斗！",
		"依赖" : 102,
		"好结果" : 106.0,
		"坏结果" : 106.0,
		"敌人战力" : 500,
	},
	[106] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 105,
		"好结果" : 107.0,
		"坏结果" : 107.0,
		"敌人战力" : "&5|+550",
	},
	[107] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 106,
		"好结果" : 108.0,
		"坏结果" : 108.0,
		"敌人战力" : "&10|+600",
	},
	[108] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 107,
		"好结果" : 109.0,
		"坏结果" : 109.0,
		"敌人战力" : "&15|+650",
	},
	[109] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 108,
		"好结果" : 110.0,
		"坏结果" : 110.0,
		"敌人战力" : "&20|+700",
	},
	[110] : {
		"描述" : "你们过了几招，还未分出胜负，是否继续战斗？",
		"依赖" : 109,
		"选项" : "111, 112",
	},
	[111] : {
		"名称" : "战斗",
		"描述" : "你决定继续和他战斗！",
		"依赖" : 110,
		"好结果" : 115.0,
		"坏结果" : 115.0,
	},
	[112] : {
		"名称" : "逃跑",
		"描述" : "你决定逃跑！",
		"依赖" : 111,
		"好结果" : 113.0,
		"坏结果" : 114.0,
	},
	[113] : {
		"描述" : "你逃跑成功！",
		"依赖" : 112,
	},
	[114] : {
		"描述" : "你逃跑失败！",
		"依赖" : 112,
		"好结果" : 115.0,
		"坏结果" : 115.0,
	},
	[115] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 114,
		"好结果" : 116.0,
		"坏结果" : 116.0,
		"敌人战力" : "&30|+800",
	},
	[116] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 115,
		"好结果" : 117.0,
		"坏结果" : 117.0,
		"敌人战力" : "&40|+900",
	},
	[117] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 116,
		"好结果" : 118.0,
		"坏结果" : 118.0,
		"敌人战力" : "&50|+1000",
	},
	[118] : {
		"描述" : "你继续和江湖大侠战斗！",
		"依赖" : 117,
		"好结果" : 119.0,
		"坏结果" : 119.0,
		"敌人战力" : "&100|+1500",
	},
	[119] : {
		"描述" : "你战胜了江湖大侠！",
		"依赖" : 118,
		"好结果" : 120.0,
		"坏结果" : 121.0,
		"获得天赋" : 103.0,
	},
	[120] : {
		"描述" : "你战胜了江湖大侠，突然发现无敌是多么的寂寞和空虚……",
		"依赖" : 119,
	},
	[121] : {
		"描述" : "江湖大侠临死前投出了一枚毒镖，你不幸被其命中！",
		"依赖" : 119,
		"中毒时间" : 10.0,
		"中毒效果" : 100.0,
	},
	[122] : {
		"描述" : "他已经饿了好几天了，你如果愿意给他一些吃的，他就能教你几招他的绝学。",
		"依赖" : 95,
		"选项" : "123, 124, 125, 126, 127",
		"天赋选项" : "128#42, 128#43, 129#18, 129#19",
	},
	[123] : {
		"名称" : "离开",
		"描述" : "你不想给这个老头任何食物，于是决定离开",
		"依赖" : 122,
	},
	[124] : {
		"名称" : "练身法（20食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 122,
		"食物" : -20,
		"最小食物" : 20.0,
	},
	[125] : {
		"名称" : "练身法（50食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 122,
		"食物" : -50,
		"最小食物" : 50.0,
	},
	[126] : {
		"名称" : "练内功（20食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 122,
		"食物" : -20,
		"最小食物" : 20.0,
	},
	[127] : {
		"名称" : "练内功（50食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 122,
		"食物" : -50,
		"最小食物" : 50.0,
	},
	[128] : {
		"名称" : "抢劫",
		"描述" : "你从老头身上抢到了一些钱，这个所谓的江湖大侠好像也不是很强的样子？",
		"依赖" : 122,
		"金钱" : "1, 10",
	},
	[129] : {
		"名称" : "识破",
		"描述" : "常年习武的你一眼就看出来这个人不是真正的江湖大侠，于是你便拆穿了他。他出于羞愧给了你一元钱，然后就离开了……",
		"依赖" : 122,
		"金钱" : 1,
	},
}