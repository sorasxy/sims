import type { Ending, RandomEvent } from './types';

export const endings: Ending[] = [
  {
    id: 'health',
    title: '老当益壮',
    description: '你用一生诠释了身体是革命的本钱。当同龄人被病痛折磨时，你依然健步如飞。清晨的公园里，你打完太极还绕湖跑了一圈。所有馈赠都有标价，而你选择用汗水和自律为健康买单。',
    dominantStat: 'health',
  },
  {
    id: 'knowledge',
    title: '学富五车',
    description: '你一生都在求知，从摇篮到摇椅，从未停下思考的脚步。书架上满是批注的藏书，案头是未完成的论文。当别人叹息虚度光阴时，你的精神世界比星辰更辽阔。知识的馈赠标价是孤独，而你甘之如饴。',
    dominantStat: 'knowledge',
  },
  {
    id: 'wealth',
    title: '富可敌国',
    description: '你深谙财富之道，从白手起家到身家丰厚。银行账户的数字是过往决策的勋章，但你也深知每一分钱背后的代价。当金光照耀你的生活时，你偶尔会想起那些用别的珍宝换来的时刻。',
    dominantStat: 'wealth',
  },
  {
    id: 'interpersonal',
    title: '呼朋唤友',
    description: '你用真心编织了一张温暖的人际网络。无论顺境逆境，身边总有愿意伸出援手的人。你为感情付出的时间和精力，都在这些陪伴中得到了回报。这份馈赠的标价是牺牲，而你从不后悔。',
    dominantStat: 'interpersonal',
  },
  {
    id: 'mood',
    title: '岁月静好',
    description: '你选择做一个快乐的人，在风雨中依然微笑。或许不是最富有的、最聪明的、最健康的，但你活得最通透。你明白所有馈赠都有标价，而快乐本身就是最好的回报。人间值得，因为你值得。',
    dominantStat: 'mood',
  },
  {
    id: 'balanced',
    title: '四平八稳',
    description: '你的人生没有哪一项特别出彩，但也没有明显的短板。像一个稳健的行者，你在健康、知识、财富、感情和心情之间找到了微妙的平衡。这并非平庸，而是另一种智慧——知足常乐，中庸之道。',
    dominantStat: 'balanced',
  },
];

export const randomEvents: RandomEvent[] = [
  {
    id: 're01',
    description: '天上掉馅饼！你意外中了一笔奖金，数额不小。银行短信在手机上闪烁，你反复确认了三遍。',
    options: [
      { text: '存起来以备不时之需', effects: { wealth: 10, mood: -1 }, nextNode: '' },
      { text: '请朋友们好好庆祝一番', effects: { wealth: -5, interpersonal: 6, mood: 5 }, nextNode: '' },
    ],
  },
  {
    id: 're02',
    description: '股市突然崩盘，你的投资缩水了一大截。看着绿色的一片数字，你深呼吸试图冷静。',
    options: [
      { text: '咬牙持有，等待反弹', effects: { wealth: -10, mood: -5 }, nextNode: '' },
      { text: '及时止损，认亏出局', effects: { wealth: -6, mood: -2, health: -1 }, nextNode: '' },
    ],
  },
  {
    id: 're03',
    description: '你被推荐参加一个高端论坛，与业界大佬同台交流。名片夹瞬间厚了一倍。',
    options: [
      { text: '积极社交，拓展人脉', effects: { interpersonal: 8, knowledge: 3, mood: 2, health: -2 }, nextNode: '' },
      { text: '低调倾听，暗中学习', effects: { knowledge: 7, mood: 2, interpersonal: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're04',
    description: '一场突如其来的暴雨困住了你，刚好遇到多年未见的老朋友。你们在屋檐下聊了整整一小时。',
    options: [
      { text: '互加联系方式，约好再聚', effects: { interpersonal: 7, mood: 5, health: -1 }, nextNode: '' },
      { text: '聊完各走各路，珍惜这刻就好', effects: { mood: 4, interpersonal: 2 }, nextNode: '' },
    ],
  },
  {
    id: 're05',
    description: '社区组织免费体检，医生说你身体有个隐患需要注意。不算严重，但也不能忽视。',
    options: [
      { text: '立刻去大医院复查', effects: { health: 5, wealth: -4, mood: -3 }, nextNode: '' },
      { text: '先调整生活习惯看看', effects: { health: 2, mood: -2, knowledge: -1 }, nextNode: '' },
    ],
  },
  {
    id: 're06',
    description: '你偶然发现一个绝佳的学习机会，在线课程限时免费。知识的大门就在眼前。',
    options: [
      { text: '抓住机会认真学完', effects: { knowledge: 10, health: -3, mood: 2, interpersonal: -2 }, nextNode: '' },
      { text: '收藏了但没时间看', effects: { knowledge: 1, mood: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're07',
    description: '有人向你借钱，理由让人动容。你了解对方的为人，但数目不小。',
    options: [
      { text: '借了，朋友有难要帮', effects: { wealth: -8, interpersonal: 7, mood: 2 }, nextNode: '' },
      { text: '委婉拒绝，自己也不宽裕', effects: { interpersonal: -4, wealth: 2, mood: -3 }, nextNode: '' },
    ],
  },
  {
    id: 're08',
    description: '你在一个二手市场淘到了一件宝贝，转手就能赚不少。但卖家看起来并不知情。',
    options: [
      { text: '如实告诉卖家实情', effects: { mood: 5, interpersonal: 4, wealth: -6 }, nextNode: '' },
      { text: '悄悄买下，这是运气', effects: { wealth: 10, mood: -3, interpersonal: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're09',
    description: '一位老朋友突然来访，带着好酒好菜。你们从傍晚聊到深夜，笑中带泪。',
    options: [
      { text: '畅饮畅聊，难得这么开心', effects: { mood: 8, interpersonal: 6, health: -4 }, nextNode: '' },
      { text: '适量饮酒，多聊聊心事', effects: { mood: 5, interpersonal: 5, health: -1 }, nextNode: '' },
    ],
  },
  {
    id: 're10',
    description: '你在路上捡到一个钱包，里面有现金和证件。四下无人，但失主一定很着急。',
    options: [
      { text: '交到派出所', effects: { mood: 5, interpersonal: 3, wealth: -1 }, nextNode: '' },
      { text: '按证件信息联系失主', effects: { interpersonal: 6, mood: 6, health: -1 }, nextNode: '' },
    ],
  },
  {
    id: 're11',
    description: '你被邀请参加一档电视节目的录制，出镜机会难得。但你需要当众发言，紧张到手心冒汗。',
    options: [
      { text: '勇敢上台，展示自己', effects: { mood: 6, interpersonal: 5, knowledge: 2, health: -2 }, nextNode: '' },
      { text: '婉拒，不太适应聚光灯', effects: { mood: -2, health: 1, interpersonal: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're12',
    description: '宠物突然生病了，医药费不便宜。它用那双大眼睛看着你，尾巴还在微微摇动。',
    options: [
      { text: '花多少钱都要治', effects: { wealth: -7, interpersonal: 5, mood: 3, health: -1 }, nextNode: '' },
      { text: '先去平价医院看看', effects: { wealth: -4, interpersonal: 3, mood: 1 }, nextNode: '' },
    ],
  },
  {
    id: 're13',
    description: '你的手机摔碎了，换屏幕要花不少钱。看着裂成蛛网的屏幕，你叹了口气。',
    options: [
      { text: '换新手机，一劳永逸', effects: { wealth: -6, mood: 3 }, nextNode: '' },
      { text: '凑合用，能打电话就行', effects: { wealth: -1, mood: -4, knowledge: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're14',
    description: '邻居装修连着吵了一周，你整夜整夜睡不好。黑眼圈越来越重，脾气也越来越差。',
    options: [
      { text: '上门沟通协商施工时间', effects: { interpersonal: 3, health: 2, mood: -1 }, nextNode: '' },
      { text: '买耳塞忍着', effects: { wealth: -1, health: -3, mood: -4, interpersonal: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're15',
    description: '公司突然降薪了，理由是行业不景气。你看着工资条上少了一截的数字，攥紧了拳头。',
    options: [
      { text: '接受现实，节衣缩食', effects: { wealth: -5, mood: -4, health: -2 }, nextNode: '' },
      { text: '开始找副业贴补家用', effects: { wealth: 2, health: -4, mood: -2, knowledge: 2 }, nextNode: '' },
    ],
  },
  {
    id: 're16',
    description: '你感染了一场流感，高烧三天不退。迷迷糊糊中你想喝水却没人递，才意识到独居的代价。',
    options: [
      { text: '硬撑着自己去医院', effects: { health: -5, wealth: -3, mood: -3 }, nextNode: '' },
      { text: '打电话请朋友帮忙', effects: { interpersonal: 4, health: -3, mood: -1 }, nextNode: '' },
    ],
  },
  {
    id: 're17',
    description: '你被诈骗电话骗走了一笔钱，数目不大但让人窝火。报警后警察说追回希望渺茫。',
    options: [
      { text: '当买个教训，提高警惕', effects: { wealth: -5, knowledge: 3, mood: -4 }, nextNode: '' },
      { text: '越想越气，好几天缓不过来', effects: { mood: -6, wealth: -5, health: -2 }, nextNode: '' },
    ],
  },
  {
    id: 're18',
    description: '你发现自己信任的人背后说了你的坏话，传得人尽皆知。茶水间的目光让你如坐针毡。',
    options: [
      { text: '当面问清楚，不憋着', effects: { interpersonal: -5, mood: 2, health: -1 }, nextNode: '' },
      { text: '装不知道，远离此人', effects: { interpersonal: -3, mood: -5, knowledge: 1 }, nextNode: '' },
    ],
  },
];
