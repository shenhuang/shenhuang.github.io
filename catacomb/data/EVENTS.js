//Autogen by dataconv.py on 2021-09-29 02:18:58.296896
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
		"体力" : 1,
	},
	[7] : {
		"描述" : "你不小心触发了古墓内遗留下来的机关",
		"好结果" : 8.0,
		"坏结果" : 9.0,
		"最大层数" : 99.0,
	},
	[8] : {
		"描述" : "幸运的是，机关已经非常陈旧了，所以并没有任何作用",
		"依赖" : 7,
		"最大层数" : 99.0,
	},
	[9] : {
		"描述" : "你被机关伤到！",
		"依赖" : 7,
		"体力" : -10,
		"最大层数" : 99.0,
	},
	[10] : {
		"描述" : "你来到了一个祭坛，这里供奉着古代神明，你可以向神明祈祷：",
		"选项" : "11, 12, 13, 14",
		"最大层数" : 99.0,
	},
	[11] : {
		"名称" : "祈求平安",
		"描述" : "你祈求平安，你的体力上限提升了！",
		"依赖" : 10,
		"体力上限" : 10,
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
		"天赋选项" : "20#46, 21#29, 21#33, 22#9, 202#30, 202#50, 203#30",
		"最大层数" : 99.0,
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
		"食物" : 10,
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
		"食物" : 20,
	},
	[21] : {
		"名称" : "挑选",
		"描述" : "你经常食用各种类型的蘑菇，所以对蘑菇非常了解。你挑选出了那些没有毒的蘑菇作为储备食物。",
		"依赖" : 14,
		"食物" : 10,
	},
	[22] : {
		"名称" : "加工",
		"描述" : "你是炊事部长，所以你很清楚如何挑选与加工野生蘑菇。你挑选出了一些合适的蘑菇并加工成了美食。",
		"依赖" : 14,
		"食物" : 15,
	},
	[23] : {
		"描述" : "你遇到了遗迹的守卫者前哨，是否要与其战斗？",
		"选项" : "24, 25",
		"最小层数" : 5.0,
		"最大层数" : 99.0,
	},
	[24] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者前哨战斗！",
		"依赖" : 23,
		"好结果" : 28.0,
		"坏结果" : 28.0,
		"敌人战力" : 150,
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
		"敌人战力" : 150,
	},
	[28] : {
		"描述" : "你战胜了守卫者前哨，在它的身上搜刮到了一些金币！",
		"依赖" : "24, 27",
		"金钱" : "5, 10",
	},
	[29] : {
		"描述" : "你遇到了遗迹的守卫者盾卫，是否要与其战斗？",
		"选项" : "30, 31",
		"最大层数" : 99.0,
	},
	[30] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者盾卫战斗！",
		"依赖" : 29,
		"好结果" : 32.0,
		"坏结果" : 32.0,
		"敌人战力" : 125,
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
		"敌人战力" : 125,
	},
	[33] : {
		"描述" : "你继续和守卫者盾卫战斗！",
		"依赖" : 32,
		"好结果" : 34.0,
		"坏结果" : 34.0,
		"敌人战力" : 125,
	},
	[34] : {
		"描述" : "你战胜了守卫者盾卫，在它的身上搜刮到了一些金币！",
		"依赖" : 33,
		"金钱" : "5, 10",
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
		"体力" : 5,
	},
	[59] : {
		"名称" : "用餐",
		"描述" : "你在这里美餐了一顿，感觉浑身充满力量，恢复了25点体力",
		"依赖" : 57,
		"体力" : 25,
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
		"体力" : -50,
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
		"最小层数" : 5.0,
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
		"食物" : "5, 20",
	},
	[85] : {
		"描述" : "机器发生了爆炸，将你炸伤！所幸还残留了一些食物和零钱",
		"依赖" : 83,
		"体力" : -10,
		"金钱" : "1, 5",
		"食物" : "1, 10",
	},
	[86] : {
		"描述" : "你来到了一个古代文明的医院，这里有全自动的医疗设备，但是需要收费，你选择：",
		"选项" : "87, 88, 89, 90",
		"天赋选项" : "91#47, 92#42, 92#43",
		"最小层数" : 5.0,
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
		"体力" : 25,
		"金钱" : -50,
		"最小金钱" : 50.0,
	},
	[89] : {
		"名称" : "全面治疗（¥100）",
		"描述" : "你购买了全面治疗服务，恢复了50点体力",
		"依赖" : 86,
		"体力" : 50,
		"金钱" : -100,
		"最小金钱" : 100.0,
	},
	[90] : {
		"名称" : "豪华治疗（¥150）",
		"描述" : "你购买了豪华治疗服务，恢复了100点体力",
		"依赖" : 86,
		"体力" : 100,
		"金钱" : -150,
		"最小金钱" : 150.0,
	},
	[91] : {
		"名称" : "自己动手（¥35）",
		"描述" : "身为医生的你购买了一些医疗工具和材料，为自己恢复了50点体力",
		"依赖" : 86,
		"体力" : 50,
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
		"描述" : "你遇到了一位衣衫褴褛的老头，他自称是一名江湖大侠，因为躲避江湖恩怨逃到了这里。",
		"好结果" : 96.0,
		"坏结果" : 124.0,
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
		"描述" : "你给了这个老头一些吃的，他教了你几招（体力上限+25）",
		"依赖" : 96,
		"食物" : -20,
		"战斗力" : 10.0,
		"最小食物" : 20.0,
	},
	[101] : {
		"名称" : "练内功（50食物）",
		"描述" : "你给了这个老头很多吃的，他非常感动，悉心教导了你好一会儿（体力上限+50）",
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
		"描述" : "你继续和江湖大侠战斗，江湖大侠的实力在快速增长！",
		"依赖" : 114,
		"好结果" : 116.0,
		"坏结果" : 116.0,
		"敌人战力" : "&30|+800",
	},
	[116] : {
		"描述" : "你继续和江湖大侠战斗，江湖大侠的实力在快速增长！",
		"依赖" : 115,
		"好结果" : 117.0,
		"坏结果" : 117.0,
		"敌人战力" : "&40|+900",
	},
	[117] : {
		"描述" : "你继续和江湖大侠战斗，江湖大侠的实力在快速增长！",
		"依赖" : 116,
		"好结果" : 118.0,
		"坏结果" : 118.0,
		"敌人战力" : "&50|+1000",
	},
	[118] : {
		"描述" : "江湖大侠使用了他最后的绝招：",
		"依赖" : 117,
		"好结果" : 119.0,
		"坏结果" : 119.0,
	},
	[119] : {
		"描述" : "独孤六脉七伤葵花黯然销魂九阴阳乾坤太极十八打狗掌……",
		"依赖" : 118,
		"好结果" : 120.0,
		"坏结果" : 120.0,
	},
	[120] : {
		"描述" : "接龟派界王武装色火之呼吸认真模式旋风冲锋伽马电磁螺旋丸！",
		"依赖" : 119,
		"好结果" : 121.0,
		"坏结果" : 121.0,
		"敌人战力" : "&100|+2000",
	},
	[121] : {
		"描述" : "你接住了江湖大侠的绝招，并给了他最后的致命一击！",
		"依赖" : 120,
		"好结果" : 120.0,
		"坏结果" : 121.0,
		"获得天赋" : 103.0,
	},
	[122] : {
		"描述" : "你战胜了江湖大侠，突然发现无敌是多么的寂寞和空虚……",
		"依赖" : 121,
	},
	[123] : {
		"描述" : "江湖大侠临死前投出了一枚毒镖，你不幸被其命中！",
		"依赖" : 121,
		"中毒时间" : 10.0,
		"中毒效果" : 100.0,
	},
	[124] : {
		"描述" : "他已经饿了好几天了，你如果愿意给他一些吃的，他就能教你几招他的绝学。",
		"依赖" : 95,
		"选项" : "125, 126, 127, 128, 129",
		"天赋选项" : "130#42, 130#43, 131#18, 131#19",
	},
	[125] : {
		"名称" : "离开",
		"描述" : "你不想给这个老头任何食物，于是决定离开",
		"依赖" : 124,
	},
	[126] : {
		"名称" : "练身法（20食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 124,
		"食物" : -20,
		"最小食物" : 20.0,
	},
	[127] : {
		"名称" : "练身法（50食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 124,
		"食物" : -50,
		"最小食物" : 50.0,
	},
	[128] : {
		"名称" : "练内功（20食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 124,
		"食物" : -20,
		"最小食物" : 20.0,
	},
	[129] : {
		"名称" : "练内功（50食物）",
		"描述" : "老头吃了你的食物，借口要去上厕所，你等了很久后觉得不对劲，发现老头已经跑了……",
		"依赖" : 124,
		"食物" : -50,
		"最小食物" : 50.0,
	},
	[130] : {
		"名称" : "抢劫",
		"描述" : "你从老头身上抢到了一些钱，这个所谓的江湖大侠好像也不是很强的样子？",
		"依赖" : 124,
		"金钱" : "1, 10",
	},
	[131] : {
		"名称" : "识破",
		"描述" : "常年习武的你一眼就看出来这个人不是真正的江湖大侠，于是你便拆穿了他。他出于羞愧给了你一元钱，然后就离开了……",
		"依赖" : 124,
		"金钱" : 1,
	},
	[132] : {
		"描述" : "你饥肠辘辘，遇到了一位好心人，他给了你一些食物",
		"食物" : "5, 10",
		"最大食物" : 0.0,
	},
	[133] : {
		"描述" : "你饥肠辘辘，遇见了一位愿意卖给你食物的人，你选择：",
		"选项" : "134, 135, 136",
		"天赋选项" : "137#42, 137#43",
		"最大食物" : 0.0,
	},
	[134] : {
		"名称" : "购买10食物（¥15）",
		"描述" : "你购买了10食物",
		"依赖" : 133,
		"金钱" : -15,
		"食物" : 10,
	},
	[135] : {
		"名称" : "购买20食物（¥20）",
		"描述" : "你购买了20食物",
		"依赖" : 133,
		"金钱" : -20,
		"食物" : 20,
	},
	[136] : {
		"名称" : "购买30食物（¥25）",
		"描述" : "你购买了30食物",
		"依赖" : 133,
		"金钱" : -25,
		"食物" : 30,
	},
	[137] : {
		"名称" : "抢劫",
		"描述" : "你抢劫了他，获得了一些食物和零钱 ",
		"依赖" : 133,
		"金钱" : "1, 10",
		"食物" : "5, 10",
	},
	[138] : {
		"描述" : "你遇到了一位美国的军火贩子，你可以从他这里买到军火:",
		"好结果" : 139.0,
		"坏结果" : 139.0,
	},
	[139] : {
		"描述" : "手枪（¥100）\n步枪（¥200）\n加特林（¥500）\n火箭筒（¥1200）",
		"依赖" : 138,
		"选项" : "140, 141, 142, 143, 144",
		"天赋选项" : "145#4, 145#20, 146#4, 146#20, 147#42, 147#43",
	},
	[140] : {
		"名称" : "什么也不买",
		"描述" : "你表示什么也不想买，于是他离开了",
		"依赖" : 139,
	},
	[141] : {
		"名称" : "买手枪",
		"描述" : "你买了一把手枪（战斗力+50）",
		"依赖" : 139,
		"金钱" : -100,
		"最小金钱" : 100.0,
		"天赋免疫" : 104.0,
		"获得天赋" : 104.0,
	},
	[142] : {
		"名称" : "买步枪",
		"描述" : "你买了一把步枪（战斗力+100）",
		"依赖" : 139,
		"金钱" : -200,
		"最小金钱" : 200.0,
		"天赋免疫" : 105.0,
		"获得天赋" : 105.0,
	},
	[143] : {
		"名称" : "买加特林",
		"描述" : "你买了一个加特林（战斗力+250）",
		"依赖" : 139,
		"金钱" : -500,
		"最小金钱" : 500.0,
		"天赋免疫" : 106.0,
		"获得天赋" : 106.0,
	},
	[144] : {
		"名称" : "买火箭筒",
		"描述" : "你买了一支火箭筒（战斗力+600）",
		"依赖" : 139,
		"金钱" : -1200,
		"最小金钱" : 1200.0,
		"天赋免疫" : 107.0,
		"获得天赋" : 107.0,
	},
	[145] : {
		"名称" : "买高级手枪",
		"描述" : "你对枪械的理解让你买到了一把更高级的手枪（战斗力+65）",
		"依赖" : 139,
		"金钱" : -100,
		"最小金钱" : 100.0,
		"天赋免疫" : 108.0,
		"获得天赋" : 108.0,
	},
	[146] : {
		"名称" : "买高级步枪",
		"描述" : "你对枪械的理解让你买到了一把更高级的步枪（战斗力+125）",
		"依赖" : 139,
		"金钱" : -200,
		"最小金钱" : 200.0,
		"天赋免疫" : 109.0,
		"获得天赋" : 109.0,
	},
	[147] : {
		"名称" : "抢劫",
		"描述" : "你想要打劫军火商，他拿出一颗手雷决定和你同归于尽！（你受到了1000点伤害）",
		"依赖" : 139,
		"好结果" : 148.0,
		"坏结果" : 148.0,
		"体力" : -1000,
	},
	[148] : {
		"描述" : "你没有被炸死，但是他的军火也在爆炸中尽毁……",
		"依赖" : 147,
	},
	[149] : {
		"描述" : "你路过了一个古代文明的老虎机",
		"好结果" : 150.0,
		"坏结果" : 150.0,
		"最大层数" : 99.0,
	},
	[150] : {
		"描述" : "你可以选择下注：",
		"依赖" : 149,
		"选项" : "151, 152, 153, 162",
		"天赋选项" : "154#42, 154#43",
	},
	[151] : {
		"名称" : "下注¥10",
		"描述" : "你下注¥10",
		"依赖" : 150,
		"好结果" : 159.0,
		"坏结果" : 159.0,
		"金钱" : -10,
		"最小金钱" : 10.0,
	},
	[152] : {
		"名称" : "下注¥50",
		"描述" : "你下注¥50",
		"依赖" : 150,
		"好结果" : 160.0,
		"坏结果" : 160.0,
		"金钱" : -50,
		"最小金钱" : 50.0,
	},
	[153] : {
		"名称" : "下注¥100",
		"描述" : "你下注¥100",
		"依赖" : 150,
		"好结果" : 161.0,
		"坏结果" : 161.0,
		"金钱" : -100,
		"最小金钱" : 100.0,
	},
	[154] : {
		"名称" : "抢劫",
		"描述" : "你摧毁了机器，获得了一些金币",
		"依赖" : 150,
		"好结果" : 158.0,
		"坏结果" : 158.0,
		"金钱" : "10, 25",
	},
	[155] : {
		"描述" : "是否继续？",
		"依赖" : 151,
		"选项" : "156, 157",
		"天赋选项" : "154#42, 154#43",
	},
	[156] : {
		"名称" : "是",
		"描述" : "你选择继续赌博",
		"依赖" : 155,
		"好结果" : 150.0,
		"坏结果" : 150.0,
	},
	[157] : {
		"名称" : "否",
		"描述" : "你选择放弃赌博",
		"依赖" : 155,
	},
	[158] : {
		"描述" : "机器已经毁坏，你只能离开",
		"依赖" : 154,
	},
	[159] : {
		"描述" : "机器开奖",
		"依赖" : 151,
		"好结果" : 155.0,
		"坏结果" : 155.0,
		"金钱" : "0, 20",
	},
	[160] : {
		"描述" : "机器开奖",
		"依赖" : 152,
		"好结果" : 155.0,
		"坏结果" : 155.0,
		"金钱" : "0, 100",
	},
	[161] : {
		"描述" : "机器开奖",
		"依赖" : 153,
		"好结果" : 155.0,
		"坏结果" : 155.0,
		"金钱" : "0, 200",
	},
	[162] : {
		"名称" : "离开",
		"描述" : "你不想赌博，选择了离开",
		"依赖" : 150,
	},
	[163] : {
		"描述" : "你遇到了遗迹的守卫者剑士，是否要与其战斗？",
		"选项" : "164, 166",
		"最小层数" : 30.0,
	},
	[164] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者剑士战斗！",
		"依赖" : 163,
		"好结果" : 165.0,
		"坏结果" : 165.0,
		"敌人战力" : 200,
	},
	[165] : {
		"描述" : "你继续和守卫者剑士战斗！",
		"依赖" : 164,
		"好结果" : 169.0,
		"坏结果" : 169.0,
		"敌人战力" : 200,
	},
	[166] : {
		"名称" : "逃跑",
		"描述" : "你选择逃跑！",
		"依赖" : 163,
		"好结果" : 167.0,
		"坏结果" : 168.0,
	},
	[167] : {
		"描述" : "你成功逃脱！",
		"依赖" : 166,
	},
	[168] : {
		"描述" : "你没能成功逃脱，被迫和守卫者剑士战斗！",
		"依赖" : 166,
		"好结果" : 165.0,
		"坏结果" : 165.0,
		"敌人战力" : 200,
	},
	[169] : {
		"描述" : "你战胜了守卫者剑士，在它的身上搜刮到了一些金币！",
		"依赖" : 165,
		"金钱" : "20, 30",
	},
	[170] : {
		"描述" : "你遇到了遗迹的守卫者刺客，是否要与其战斗？",
		"选项" : "171, 172",
		"最小层数" : 35.0,
	},
	[171] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者刺客战斗！",
		"依赖" : 170,
		"好结果" : 175.0,
		"坏结果" : 175.0,
		"敌人战力" : "&10|+250",
	},
	[172] : {
		"名称" : "逃跑",
		"描述" : "你选择逃跑！",
		"依赖" : 170,
		"好结果" : 173.0,
		"坏结果" : 174.0,
	},
	[173] : {
		"描述" : "你成功逃脱！",
		"依赖" : 172,
	},
	[174] : {
		"描述" : "你没能成功逃脱，被迫和守卫者刺客战斗！",
		"依赖" : 172,
		"好结果" : 175.0,
		"坏结果" : 175.0,
		"敌人战力" : "&10|+250",
	},
	[175] : {
		"描述" : "你战胜了守卫者刺客，在它的身上搜刮到了一些金币！",
		"依赖" : 171,
		"金钱" : "25, 30",
	},
	[176] : {
		"描述" : "你路过了一片上古神树的树根，你选择：",
		"选项" : "177, 178, 179, 180",
		"天赋选项" : "181#8, 181#29",
		"最小层数" : 20.0,
		"最大层数" : 99.0,
	},
	[177] : {
		"名称" : "离开",
		"描述" : "你不愿停留，匆忙上路，继续你的探险",
		"依赖" : 176,
	},
	[178] : {
		"名称" : "休息",
		"描述" : "你选择在这里休息片刻，恢复了5点体力",
		"依赖" : 176,
		"体力" : 5,
	},
	[179] : {
		"名称" : "用餐",
		"描述" : "你选择在这里用餐，恢复了25点体力",
		"依赖" : 176,
		"体力" : 25,
		"食物" : -10,
	},
	[180] : {
		"名称" : "搜索",
		"描述" : "你选择搜索",
		"依赖" : 176,
		"好结果" : 182.0,
		"坏结果" : 183.0,
	},
	[181] : {
		"名称" : "搜索",
		"描述" : "你敏锐的发现了藏在树根下的上古神仙果，体力上限+25",
		"依赖" : 176,
		"体力上限" : 25,
	},
	[182] : {
		"描述" : "你在树根周围搜索了很久，却什么也没有找到",
		"依赖" : 180,
	},
	[183] : {
		"描述" : "你找到了一颗上古神仙果，体力上限+25",
		"依赖" : 180,
		"体力上限" : 25,
	},
	[184] : {
		"描述" : "你遇到了一位饥肠辘辘的人，他愿意用钱换你的食物，你选择：",
		"选项" : "185, 186, 187, 188",
		"天赋选项" : "189#42, 189#43",
	},
	[185] : {
		"名称" : "离开",
		"描述" : "你不想给他任何食物",
		"依赖" : 184,
	},
	[186] : {
		"名称" : "给10食物",
		"描述" : "你给了他一点食物",
		"依赖" : 184,
		"金钱" : "10, 20",
		"食物" : -10,
		"最小食物" : 10.0,
	},
	[187] : {
		"名称" : "给25食物",
		"描述" : "你给了他一些食物",
		"依赖" : 184,
		"金钱" : "25, 40",
		"食物" : -25,
		"最小食物" : 25.0,
	},
	[188] : {
		"名称" : "给50食物",
		"描述" : "你给了他许多食物",
		"依赖" : 184,
		"金钱" : "50, 70",
		"食物" : -50,
		"最小食物" : 50.0,
	},
	[189] : {
		"名称" : "打劫",
		"描述" : "你打劫了这个可怜人",
		"依赖" : 184,
		"金钱" : "10, 20",
	},
	[190] : {
		"描述" : "你路过了一个异族村落，你可以选择花一些钱获得他们的帮助：",
		"选项" : "191, 192, 193, 204",
		"天赋选项" : "194#42, 194#43",
		"最小层数" : 25.0,
	},
	[191] : {
		"名称" : "购买食物（¥25）",
		"描述" : "村里的商贩给了你一些食物",
		"依赖" : 190,
		"金钱" : -25,
		"食物" : "25, 30",
		"最小食物" : 25.0,
	},
	[192] : {
		"名称" : "雇佣医生（¥50）",
		"描述" : "村里的医生细心为你包扎伤口",
		"依赖" : 190,
		"金钱" : -50,
		"食物" : "25, 50",
		"最小食物" : 50.0,
	},
	[193] : {
		"名称" : "接受训练（¥100）",
		"描述" : "村里的战士教会了你一些战斗技巧",
		"依赖" : 190,
		"体力上限" : "10, 20",
		"金钱" : -100,
		"战斗力" : 10.0,
		"最小食物" : 100.0,
		"最大战力" : 300.0,
	},
	[194] : {
		"名称" : "打劫",
		"描述" : "你想要打劫，但是寡不敌众，被村民轰了出去",
		"依赖" : 190,
	},
	[195] : {
		"描述" : "你来到了一个祭坛，这里供奉着古代邪神，你可以向神明祈祷：",
		"选项" : "196, 197, 198, 199",
		"天赋选项" : "213#49",
		"最小层数" : 20.0,
	},
	[196] : {
		"名称" : "祈求平安",
		"描述" : "你祈求平安，你的体力上限被扣除！",
		"依赖" : 195,
		"体力上限" : -10,
	},
	[197] : {
		"名称" : "祈求富贵",
		"描述" : "你祈求富贵，你损失了一些金币！",
		"依赖" : 195,
		"金钱" : -50,
	},
	[198] : {
		"名称" : "祈求好运",
		"描述" : "你祈求好运，你的运气降低了！",
		"依赖" : 195,
		"运气" : -10.0,
	},
	[199] : {
		"名称" : "离开",
		"描述" : "你选择了离开，什么事情也没有发生",
		"依赖" : 195,
	},
	[200] : {
		"描述" : "你来到一片地下湖泊，这里景色优美，你在这里休息后恢复了2点体力！",
		"体力" : 2,
		"最小层数" : 20.0,
		"最大层数" : 99.0,
	},
	[201] : {
		"描述" : "你发现了一些野生梅子，你饱餐了一顿，并采了一些带道路上吃",
		"食物" : "5, 15",
		"最小层数" : 20.0,
		"最大层数" : 99.0,
	},
	[202] : {
		"名称" : "绿色蘑菇",
		"描述" : "身为资深玩家的你找到了一颗绿色蘑菇！",
		"依赖" : 15,
		"天赋免疫" : 110.0,
		"获得天赋" : 110.0,
	},
	[203] : {
		"名称" : "红色蘑菇",
		"描述" : "身为资深玩家的你找到了一颗红色蘑菇！",
		"依赖" : 15,
		"天赋免疫" : 111.0,
		"获得天赋" : 111.0,
	},
	[204] : {
		"名称" : "离开",
		"描述" : "你忙着赶路，选择了离开",
		"依赖" : 190,
	},
	[205] : {
		"描述" : "突然天（古墓天花板）色异变，你感到一股神力注入了自己体内！",
		"体力上限" : 50,
		"金钱" : 100,
		"食物" : 75,
		"战斗力" : 75.0,
		"运气" : -5.0,
		"天赋免疫" : 49.0,
		"天赋触发" : 48.0,
		"获得天赋" : 112.0,
	},
	[206] : {
		"描述" : "你路过一条地下河流，河水里似乎还有鱼在游来游去……",
		"选项" : "207, 208, 209",
		"天赋选项" : "210#29, 211#33, 211#48, 212#8, 212#9",
		"最大层数" : 99.0,
	},
	[207] : {
		"名称" : "离开",
		"描述" : "你忙着赶路，选择了离开",
		"依赖" : 206,
	},
	[208] : {
		"名称" : "休息",
		"描述" : "你选择在此休息片刻，恢复了5点体力",
		"依赖" : 206,
		"体力" : 5,
	},
	[209] : {
		"名称" : "钓鱼",
		"描述" : "你钓上来一条鱼！",
		"依赖" : 206,
		"食物" : "10, 15",
	},
	[210] : {
		"名称" : "钓鱼",
		"描述" : "经常钓鱼的你经验丰富，你钓上来一条大鱼！",
		"依赖" : 206,
		"食物" : "15, 25",
	},
	[211] : {
		"名称" : "抓鱼",
		"描述" : "经常流浪的你早已掌握抓鱼的本领，你抓到了一条大鱼！",
		"依赖" : 206,
		"食物" : "15, 25",
	},
	[212] : {
		"名称" : "做刺身",
		"描述" : "你钓上来一条鱼！\n你将鱼做成了刺身，美餐一顿以后心情大好，恢复了10点体力！",
		"依赖" : 206,
		"体力" : 10,
		"食物" : "10, 15",
	},
	[213] : {
		"名称" : "离开",
		"描述" : "身为考古学家的你一眼就发现这个祭坛不对劲，你立马离开了祭坛",
		"依赖" : 195,
	},
	[214] : {
		"描述" : "你来到一座古代文明的宫殿，各种华丽的装饰豪迈的炫耀着那个文明曾经的辉煌，而此时却早已人去楼空，你选择：",
		"选项" : "215, 216, 217",
		"天赋选项" : "218#42, 218#43, 219#49",
		"最小层数" : 10.0,
	},
	[215] : {
		"名称" : "离开",
		"描述" : "宫殿非常豪华，但是你无心驻足，你继续踏上了探险的旅途",
		"依赖" : 214,
	},
	[216] : {
		"名称" : "休息",
		"描述" : "你选择在这里休息了片刻，宫殿的环境很舒适，你恢复了一些体力",
		"依赖" : 214,
		"体力" : "5, 10",
	},
	[217] : {
		"名称" : "用餐",
		"描述" : "你选择在这里用餐，辉煌的宫殿让你感觉不错，你恢复了不少体力",
		"依赖" : 214,
		"体力" : "25, 50",
		"食物" : -15,
		"最小食物" : 15.0,
	},
	[218] : {
		"名称" : "打劫",
		"描述" : "你试图扣下宫殿装饰物上的珠宝，但是它们被固定的非常好，无奈之下你只能顺走桌上的一些铜器",
		"依赖" : 214,
		"金钱" : "10, 25",
	},
	[219] : {
		"名称" : "寻宝",
		"描述" : "身为考古学家的你能够读懂宫殿的文字，你在一间房间的角落里找到了一张藏宝图",
		"依赖" : 214,
		"获得天赋" : 122.0,
	},
	[220] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 221.0,
		"坏结果" : 222.0,
		"天赋免疫" : 114.0,
		"天赋触发" : 113.0,
	},
	[221] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 220,
	},
	[222] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 220,
		"获得天赋" : 114.0,
	},
	[223] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 224.0,
		"坏结果" : 225.0,
		"天赋免疫" : 115.0,
		"天赋触发" : 114.0,
	},
	[224] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 223,
	},
	[225] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 223,
		"获得天赋" : 115.0,
	},
	[226] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 227.0,
		"坏结果" : 228.0,
		"天赋免疫" : 116.0,
		"天赋触发" : 115.0,
	},
	[227] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 226,
	},
	[228] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 226,
		"获得天赋" : 116.0,
	},
	[229] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 230.0,
		"坏结果" : 231.0,
		"天赋免疫" : 117.0,
		"天赋触发" : 116.0,
	},
	[230] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 229,
	},
	[231] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 229,
		"获得天赋" : 117.0,
	},
	[232] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 233.0,
		"坏结果" : 234.0,
		"天赋免疫" : 118.0,
		"天赋触发" : 117.0,
	},
	[233] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 232,
	},
	[234] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小箱子。你把箱子挖了出来，里面是一件上古神器！",
		"依赖" : 232,
		"获得天赋" : 125.0,
	},
	[235] : {
		"描述" : "你遇到了一位身穿斗篷的神秘人，他小声招呼你过去，然后给你展示了他的藏品……",
		"好结果" : 236.0,
		"坏结果" : 236.0,
		"最小层数" : 10.0,
	},
	[236] : {
		"描述" : "你可以购买：",
		"依赖" : 235,
		"选项" : "237, 238, 239, 240, 291, 292, 293, 294, 295, 296, 297",
		"天赋选项" : "241#34, 242#30, 242#50, 243#42, 243#43",
	},
	[237] : {
		"名称" : "离开",
		"描述" : "你没有什么可买的，商人喊了一句咒语，嘭！的一声就从你眼前消失了……",
		"依赖" : 236,
	},
	[238] : {
		"名称" : "藏宝图（¥100）",
		"描述" : "你从商人那里买了一张藏宝图",
		"依赖" : 236,
		"金钱" : -100,
		"最小金钱" : 100.0,
		"天赋免疫" : 122.0,
		"获得天赋" : 122.0,
	},
	[239] : {
		"名称" : "高级藏宝图（¥500）",
		"描述" : "你从商人那里买了一张高级藏宝图",
		"依赖" : 236,
		"金钱" : -500,
		"最小金钱" : 500.0,
		"天赋免疫" : 113.0,
		"获得天赋" : 113.0,
	},
	[240] : {
		"名称" : "四叶草（¥25）",
		"描述" : "你从商人那里买了一颗四叶草",
		"依赖" : 236,
		"金钱" : -25,
		"最小金钱" : 25.0,
		"天赋免疫" : 120.0,
		"获得天赋" : 120.0,
	},
	[241] : {
		"名称" : "蓝色药丸（¥50）",
		"描述" : "你从商人那里买了一颗蓝色药丸",
		"依赖" : 236,
		"金钱" : -50,
		"最小金钱" : 50.0,
		"天赋免疫" : 121.0,
		"获得天赋" : 121.0,
	},
	[242] : {
		"名称" : "游戏币（¥666）",
		"描述" : "你从商人那里买了一枚游戏币",
		"依赖" : 236,
		"金钱" : -666,
		"最小金钱" : 666.0,
		"天赋免疫" : 119.0,
		"获得天赋" : 119.0,
	},
	[243] : {
		"名称" : "打劫",
		"描述" : "商人发现了你打劫的意图，喊出了一句咒语，嘭！的一声就从你眼前消失了……",
		"依赖" : 236,
	},
	[244] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 227.0,
		"坏结果" : 228.0,
		"天赋免疫" : 123.0,
		"天赋触发" : 122.0,
	},
	[245] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 226,
	},
	[246] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 226,
		"获得天赋" : 123.0,
	},
	[247] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 230.0,
		"坏结果" : 231.0,
		"天赋免疫" : 124.0,
		"天赋触发" : 123.0,
	},
	[248] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 229,
	},
	[249] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个小盒子，里面藏着另一张藏宝图",
		"依赖" : 229,
		"获得天赋" : 124.0,
	},
	[250] : {
		"描述" : "你按照藏宝图的提示来到了指定地点……",
		"好结果" : 233.0,
		"坏结果" : 234.0,
		"天赋免疫" : 118.0,
		"天赋触发" : 124.0,
	},
	[251] : {
		"描述" : "你挖了半天，却一无所获，可能是你搞错了位置",
		"依赖" : 232,
	},
	[252] : {
		"描述" : "你挖了很久，突然你碰到了一个坚硬的物体，是一个大箱子。你费劲九牛二虎之力把箱子挖了出来，里面装满了金银财宝！",
		"依赖" : 232,
		"金钱" : "800, 1000",
		"获得天赋" : 118.0,
	},
	[253] : {
		"描述" : "你来到了一片地下森林，这里甚至栖息着一些野生动物……",
		"选项" : "254, 255, 256",
		"天赋选项" : "257#51",
		"最小层数" : 5.0,
		"最大层数" : 99.0,
	},
	[254] : {
		"名称" : "离开",
		"描述" : "你急着赶路，于是你快速穿过了森林",
		"依赖" : 253,
	},
	[255] : {
		"名称" : "休息",
		"描述" : "你选择在这里休息，恢复了少量体力",
		"依赖" : 253,
		"体力" : "1, 10",
	},
	[256] : {
		"名称" : "狩猎",
		"描述" : "你选择在这里狩猎",
		"依赖" : 253,
		"好结果" : 258.0,
		"坏结果" : 259.0,
	},
	[257] : {
		"名称" : "狩猎",
		"描述" : "你是一个猎人，你选择在这里狩猎，收获了很多猎物",
		"依赖" : 253,
		"食物" : "20, 30",
	},
	[258] : {
		"描述" : "你花费了很多时间……最后，你捕到了一只猎物",
		"依赖" : 256,
		"食物" : "10, 25",
	},
	[259] : {
		"描述" : "你在森林里浪费了很多时间，但是一无所获",
		"依赖" : 256,
	},
	[260] : {
		"描述" : "你遇到了遗迹的守卫者法师，是否要与其战斗？",
		"选项" : "261, 263",
		"最小层数" : 60.0,
	},
	[261] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者法师战斗！",
		"依赖" : 260,
		"好结果" : 262.0,
		"坏结果" : 262.0,
		"敌人战力" : "&30|+300",
	},
	[262] : {
		"描述" : "你继续和守卫者法师战斗！",
		"依赖" : 261,
		"好结果" : 266.0,
		"坏结果" : 266.0,
		"敌人战力" : "&30|+300",
	},
	[263] : {
		"名称" : "逃跑",
		"描述" : "你选择逃跑！",
		"依赖" : 260,
		"好结果" : 264.0,
		"坏结果" : 265.0,
	},
	[264] : {
		"描述" : "你成功逃脱！",
		"依赖" : 263,
	},
	[265] : {
		"描述" : "你没能成功逃脱，被迫和守卫者法师战斗！",
		"依赖" : 263,
		"好结果" : 262.0,
		"坏结果" : 262.0,
		"敌人战力" : "&30|+300",
	},
	[266] : {
		"描述" : "你战胜了守卫者法师，在它的身上搜刮到了一些金币！",
		"依赖" : 262,
		"金钱" : "50, 100",
	},
	[267] : {
		"描述" : "你遇到了遗迹的守卫者术士，是否要与其战斗？",
		"选项" : "268, 270",
		"最小层数" : 65.0,
	},
	[268] : {
		"名称" : "战斗",
		"描述" : "你选择和守卫者法师术士！",
		"依赖" : 267,
		"好结果" : 269.0,
		"坏结果" : 269.0,
		"敌人战力" : "&10|+270",
	},
	[269] : {
		"描述" : "你继续和守卫者术士战斗！",
		"依赖" : 268,
		"好结果" : 273.0,
		"坏结果" : 273.0,
		"敌人战力" : "&10|+270",
	},
	[270] : {
		"名称" : "逃跑",
		"描述" : "你选择逃跑！",
		"依赖" : 267,
		"好结果" : 271.0,
		"坏结果" : 272.0,
	},
	[271] : {
		"描述" : "你成功逃脱！",
		"依赖" : 270,
	},
	[272] : {
		"描述" : "你没能成功逃脱，被迫和守卫者术士战斗！",
		"依赖" : 270,
		"好结果" : 269.0,
		"坏结果" : 269.0,
		"敌人战力" : "&10|+270",
	},
	[273] : {
		"描述" : "和守卫者术士的战斗中你被下毒！",
		"依赖" : 272,
		"好结果" : 274.0,
		"坏结果" : 274.0,
		"中毒时间" : 5.0,
		"中毒效果" : 20.0,
	},
	[274] : {
		"描述" : "你战胜了守卫者术士，在它的身上搜刮到了一些金币！",
		"依赖" : 273,
		"金钱" : "50, 100",
	},
	[275] : {
		"描述" : "你遇到了遗迹的岩石巨人，是否要与其战斗？",
		"选项" : "276, 277",
		"最小层数" : 70.0,
	},
	[276] : {
		"名称" : "战斗",
		"描述" : "你选择和岩石巨人战斗！",
		"依赖" : 275,
		"好结果" : 278.0,
		"坏结果" : 278.0,
		"敌人战力" : "&10|+300",
	},
	[277] : {
		"名称" : "逃跑",
		"描述" : "岩石巨人行动缓慢，你轻松逃脱！",
		"依赖" : 275,
	},
	[278] : {
		"描述" : "你继续和岩石巨人战斗！",
		"依赖" : 276,
		"好结果" : 279.0,
		"坏结果" : 279.0,
		"敌人战力" : "&10|+300",
	},
	[279] : {
		"描述" : "你继续和岩石巨人战斗！",
		"依赖" : 278,
		"好结果" : 280.0,
		"坏结果" : 280.0,
		"敌人战力" : "&10|+300",
	},
	[280] : {
		"描述" : "你继续和岩石巨人战斗！",
		"依赖" : 279,
		"好结果" : 281.0,
		"坏结果" : 281.0,
		"敌人战力" : "&10|+300",
	},
	[281] : {
		"描述" : "你继续和岩石巨人战斗！",
		"依赖" : 280,
		"好结果" : 282.0,
		"坏结果" : 282.0,
		"敌人战力" : "&10|+300",
	},
	[282] : {
		"描述" : "你战胜了岩石巨人，在它的残骸中搜刮到了一些金子！",
		"依赖" : 281,
		"金钱" : "80, 120",
	},
	[283] : {
		"描述" : "你遇到了遗迹的宝石巨人，是否要与其战斗？",
		"选项" : "284, 285",
		"最小层数" : 75.0,
	},
	[284] : {
		"名称" : "战斗",
		"描述" : "你选择和宝石巨人战斗！",
		"依赖" : 283,
		"好结果" : 286.0,
		"坏结果" : 286.0,
		"敌人战力" : "&15|+300",
	},
	[285] : {
		"名称" : "逃跑",
		"描述" : "宝石巨人行动缓慢，你轻松逃脱！",
		"依赖" : 283,
	},
	[286] : {
		"描述" : "你继续和宝石巨人战斗！",
		"依赖" : 284,
		"好结果" : 287.0,
		"坏结果" : 287.0,
		"敌人战力" : "&15|+325",
	},
	[287] : {
		"描述" : "你继续和宝石巨人战斗！",
		"依赖" : 286,
		"好结果" : 288.0,
		"坏结果" : 288.0,
		"敌人战力" : "&15|+325",
	},
	[288] : {
		"描述" : "你继续和宝石巨人战斗！",
		"依赖" : 287,
		"好结果" : 289.0,
		"坏结果" : 289.0,
		"敌人战力" : "&15|+325",
	},
	[289] : {
		"描述" : "你继续和宝石巨人战斗！",
		"依赖" : 288,
		"好结果" : 290.0,
		"坏结果" : 290.0,
		"敌人战力" : "&15|+325",
	},
	[290] : {
		"描述" : "你战胜了宝石巨人，在它的残骸中搜刮到了一些珍贵的宝石！",
		"依赖" : 289,
		"金钱" : "200, 250",
	},
	[291] : {
		"名称" : "武功秘籍（¥25）",
		"描述" : "你从商人那里买了一本武功秘籍",
		"依赖" : 236,
		"金钱" : -25,
		"最小金钱" : 25.0,
		"天赋免疫" : 128.0,
		"获得天赋" : 128.0,
	},
	[292] : {
		"名称" : "武功秘籍（¥50）",
		"描述" : "你从商人那里买了一本武功秘籍",
		"依赖" : 236,
		"金钱" : -50,
		"最小金钱" : 50.0,
		"天赋免疫" : 129.0,
		"获得天赋" : 129.0,
	},
	[293] : {
		"名称" : "武功秘籍（¥125）",
		"描述" : "你从商人那里买了一本武功秘籍",
		"依赖" : 236,
		"金钱" : -125,
		"最小金钱" : 125.0,
		"天赋免疫" : 130.0,
		"获得天赋" : 130.0,
	},
	[294] : {
		"名称" : "武功秘籍（¥300）",
		"描述" : "你从商人那里买了一本武功秘籍",
		"依赖" : 236,
		"金钱" : -300,
		"最小金钱" : 300.0,
		"天赋免疫" : 131.0,
		"获得天赋" : 131.0,
	},
	[295] : {
		"名称" : "咒语卷轴（¥125）",
		"描述" : "你从商人那里买了一个咒语卷轴",
		"依赖" : 236,
		"金钱" : -125,
		"最小金钱" : 125.0,
		"天赋免疫" : 132.0,
		"获得天赋" : 132.0,
	},
	[296] : {
		"名称" : "咒语卷轴（¥125）",
		"描述" : "你从商人那里买了一个咒语卷轴",
		"依赖" : 236,
		"金钱" : -125,
		"最小金钱" : 125.0,
		"天赋免疫" : 133.0,
		"获得天赋" : 133.0,
	},
	[297] : {
		"名称" : "月光饭盒（¥800）",
		"描述" : "你从商人那里买了一个月光饭盒",
		"依赖" : 236,
		"金钱" : -800,
		"最小金钱" : 800.0,
		"天赋免疫" : 134.0,
		"获得天赋" : 134.0,
	},
	[298] : {
		"描述" : "你遇到了一位驮着龟壳的老头，他看你独自一人在古墓探险不容易，决定指点你几招",
		"体力上限" : 10,
		"战斗力" : 10.0,
		"最小层数" : 25.0,
		"最大战力" : 200.0,
	},
	[299] : {
		"描述" : "你遇到了一位银发少年，他可以指点你几招，只要给他足够的报酬",
		"选项" : "300, 301",
		"最小层数" : 25.0,
		"最小金钱" : 25.0,
		"最大战力" : 200.0,
	},
	[300] : {
		"名称" : "离开",
		"描述" : "你并不想要他的指点，转身离开了",
		"依赖" : 299,
	},
	[301] : {
		"名称" : "寻求指点（¥25）",
		"描述" : "他满意的收下了你的报酬，你获得了他的指点，实力提升不少！",
		"依赖" : 299,
		"体力上限" : 25,
		"金钱" : -25,
		"战斗力" : 25.0,
	},
	[302] : {
		"描述" : "你遇到了一位身穿铠甲的男人，你听不太懂他说的外语，好像是卖农药的",
		"好结果" : 303.0,
		"坏结果" : 303.0,
		"最小层数" : 25.0,
	},
	[303] : {
		"描述" : "他给你展示了他的商品：",
		"依赖" : 302,
		"选项" : "304, 305, 306, 307, 308, 309",
	},
	[304] : {
		"名称" : "离开",
		"描述" : "你什么也不想买，选择了离开",
		"依赖" : 303,
	},
	[305] : {
		"名称" : "咸鱼的庇护（¥600）",
		"描述" : "你购买了咸鱼的庇护",
		"依赖" : 303,
		"金钱" : -600,
		"最小金钱" : 600.0,
		"天赋免疫" : 135.0,
		"获得天赋" : 135.0,
	},
	[306] : {
		"名称" : "名刀 - 思妹（¥490）",
		"描述" : "你购买了名刀 - 思妹",
		"依赖" : 303,
		"金钱" : -490,
		"最小金钱" : 490.0,
		"天赋免疫" : 136.0,
		"获得天赋" : 136.0,
	},
	[307] : {
		"名称" : "爸者重装（¥300）",
		"描述" : "你购买了爸者重装",
		"依赖" : 303,
		"金钱" : -300,
		"最小金钱" : 300.0,
		"天赋免疫" : 137.0,
		"获得天赋" : 137.0,
	},
	[308] : {
		"名称" : "石皮车（¥300）",
		"描述" : "你购买了石皮车",
		"依赖" : 303,
		"金钱" : -300,
		"最小金钱" : 300.0,
		"天赋免疫" : 138.0,
		"获得天赋" : 138.0,
	},
	[309] : {
		"名称" : "学渣宝石（¥50）",
		"描述" : "你购买了学渣宝石",
		"依赖" : 303,
		"金钱" : -50,
		"最小金钱" : 50.0,
		"天赋免疫" : 139.0,
		"获得天赋" : 139.0,
	},
}