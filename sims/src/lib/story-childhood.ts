import type { StoryNode } from './types';

export const childhoodNodes: StoryNode[] = [
  // ===== 三种出身，随机开局 =====
  {
    id: 'c01a',
    stage: 'childhood',
    description: '你出生在书香门第，满屋书籍取代了玩具。父亲是大学教授，母亲是知名编辑，餐桌上的话题永远是文学与哲学。墨香浸透了你的童年。',
    atmosphere: 'day',
    options: [
      { text: '趴在书堆里翻看百科全书', effects: { knowledge: 8, mood: 3, health: -3 }, nextNode: 'c03' },
      { text: '偷偷溜到楼下找小朋友玩', effects: { interpersonal: 6, health: 4, knowledge: -2 }, nextNode: 'c02' },
      { text: '缠着妈妈讲故事到入睡', effects: { interpersonal: 5, knowledge: 4, mood: 2 }, nextNode: 'c04' },
    ],
  },
  {
    id: 'c01b',
    stage: 'childhood',
    description: '你出生在富裕的商人家庭，家里从不缺零花钱。大房子空荡荡的，父母常年出差，保姆阿姨是你最熟悉的大人。金丝鸟笼也有寂寞。',
    atmosphere: 'day',
    options: [
      { text: '拿零花钱买一大堆零食分给邻居小孩', effects: { wealth: -6, interpersonal: 8, mood: 5 }, nextNode: 'c02' },
      { text: '一个人在房间里搭乐高城堡', effects: { knowledge: 4, mood: 3, interpersonal: -4 }, nextNode: 'c03' },
      { text: '给妈妈打电话说想她了', effects: { interpersonal: 5, mood: 4, health: -1 }, nextNode: 'c04' },
    ],
  },
  {
    id: 'c01c',
    stage: 'childhood',
    description: '你出生在小城工人家庭，父亲在工厂倒班，母亲在校门口摆早餐摊。日子不富裕但热闹，邻居们常串门，你从小就知道生活的分量。',
    atmosphere: 'day',
    options: [
      { text: '帮妈妈在早餐摊招呼客人', effects: { interpersonal: 7, health: 4, mood: -2 }, nextNode: 'c04' },
      { text: '跑到工厂门口等爸爸下班', effects: { interpersonal: 5, health: 5, knowledge: -2 }, nextNode: 'c02' },
      { text: '在学校图书馆蹭书看', effects: { knowledge: 8, wealth: 2, mood: 2 }, nextNode: 'c03' },
    ],
  },
  // ===== 主线故事 =====
  {
    id: 'c01',
    stage: 'childhood',
    description: '你出生在一座小城，父亲是工厂工人，母亲是小学教师。清晨阳光透过老旧窗帘洒在你稚嫩的脸上，新世界在眼前缓缓展开。',
    atmosphere: 'day',
    options: [
      { text: '跑到院子里追蝴蝶', effects: { health: 8, mood: 5, knowledge: -2 }, nextNode: 'c02' },
      { text: '窝在沙发翻看画册', effects: { knowledge: 6, mood: 3, health: -2 }, nextNode: 'c03' },
      { text: '帮妈妈收拾早餐碗筷', effects: { interpersonal: 6, health: 3, mood: -1 }, nextNode: 'c04' },
    ],
  },
  {
    id: 'c02',
    stage: 'childhood',
    description: '幼儿园里一群孩子争抢唯一的积木城堡。角落里有个女孩安静地翻看画册，窗外的梧桐叶在风中摇曳。',
    atmosphere: 'day',
    options: [
      { text: '冲上去抢积木城堡', effects: { health: 5, mood: -3, interpersonal: -8 }, nextNode: 'c05' },
      { text: '走过去和女孩一起看画册', effects: { interpersonal: 8, knowledge: 3, health: -1 }, nextNode: 'c06' },
      { text: '用零食跟别人换积木', effects: { wealth: -6, mood: 5, interpersonal: 3 }, nextNode: 'c07' },
    ],
  },
  {
    id: 'c03',
    stage: 'childhood',
    description: '妈妈问你想要学什么兴趣班。墙上贴着钢琴、绘画、跆拳道的招生海报，色彩斑斓如你的童心。',
    atmosphere: 'day',
    options: [
      { text: '选钢琴，想象自己在舞台上', effects: { knowledge: 7, mood: 5, wealth: -4, health: -2 }, nextNode: 'c05' },
      { text: '选跆拳道，想变强壮', effects: { health: 8, mood: 3, knowledge: -2 }, nextNode: 'c08' },
      { text: '选绘画，喜欢涂涂画画', effects: { knowledge: 5, mood: 6, health: -1 }, nextNode: 'c09' },
    ],
  },
  {
    id: 'c04',
    stage: 'childhood',
    description: '外婆从乡下赶来，带来一篮土鸡蛋和一包皱巴巴的零花钱。她粗糙的手紧紧握着你柔软的小手。',
    atmosphere: 'day',
    options: [
      { text: '拉着外婆去街上买糖', effects: { mood: 7, wealth: 3, health: -3, knowledge: -2 }, nextNode: 'c07' },
      { text: '听外婆讲乡下故事', effects: { knowledge: 5, interpersonal: 7, health: -1 }, nextNode: 'c09' },
      { text: '把零花钱存进小猪存钱罐', effects: { wealth: 8, mood: 2, interpersonal: -2 }, nextNode: 'c10' },
    ],
  },
  {
    id: 'c05',
    stage: 'childhood',
    description: '学校运动会上你站在400米起跑线，对面看台父母在人群中挥手，阳光晒得跑道发烫，哨声即将响起。',
    atmosphere: 'day',
    options: [
      { text: '拼尽全力冲刺', effects: { health: 8, mood: 5, interpersonal: 3, knowledge: -3 }, nextNode: 'c11', requires: [{ stat: 'health', min: 50 }] },
      { text: '稳稳跑完全程就好', effects: { health: 4, mood: 3 }, nextNode: 'c12' },
      { text: '假装摔倒好让同学赢', effects: { interpersonal: 8, mood: -4, health: -3 }, nextNode: 'c13', requires: [{ stat: 'interpersonal', min: 45 }] },
    ],
  },
  {
    id: 'c06',
    stage: 'childhood',
    description: '放学路上你发现一只受伤的小猫蜷缩在纸箱里瑟瑟发抖，天空飘起细雨，路人匆匆走过无人停留。',
    atmosphere: 'night',
    options: [
      { text: '把小猫抱回家偷偷养', effects: { interpersonal: 7, mood: 6, health: -4, wealth: -3 }, nextNode: 'c11' },
      { text: '找大人来帮忙', effects: { interpersonal: 4, knowledge: 3, mood: -2 }, nextNode: 'c12' },
      { text: '留下一把伞给小猫遮雨', effects: { mood: 5, interpersonal: 4, wealth: -4, health: -2 }, nextNode: 'c14' },
    ],
  },
  {
    id: 'c07',
    stage: 'childhood',
    description: '表哥带来一台游戏机，屏幕上的像素世界闪烁着迷人的光芒，你的零花钱只够买两块电池。',
    atmosphere: 'night',
    options: [
      { text: '沉迷游戏打到天亮', effects: { mood: 8, health: -8, knowledge: -5, wealth: -3 }, nextNode: 'c12' },
      { text: '和表哥轮流玩，约定时间', effects: { interpersonal: 5, mood: 5, health: -2 }, nextNode: 'c13' },
      { text: '看了一会儿就去看书', effects: { knowledge: 7, mood: -4, interpersonal: -2 }, nextNode: 'c14' },
    ],
  },
  {
    id: 'c08',
    stage: 'childhood',
    description: '语文课上老师让每个人朗读自己的作文。你写了一篇关于星星的故事，手心沁出细密的汗珠。',
    atmosphere: 'day',
    options: [
      { text: '大声朗读，声情并茂', effects: { knowledge: 6, mood: 5, interpersonal: 3, health: -2 }, nextNode: 'c11', requires: [{ stat: 'knowledge', min: 40 }] },
      { text: '小声读完赶紧坐下', effects: { knowledge: 3, mood: -4, interpersonal: -2 }, nextNode: 'c15' },
      { text: '鼓励旁边紧张的同学先读', effects: { interpersonal: 8, mood: 3, knowledge: -1 }, nextNode: 'c16', requires: [{ stat: 'mood', min: 45 }] },
    ],
  },
  {
    id: 'c09',
    stage: 'childhood',
    description: '放学路上几个高年级学生围住一个小胖子，他们嬉笑着推搡，周围的人都在看热闹没人上前。',
    atmosphere: 'danger',
    options: [
      { text: '冲上去制止他们', effects: { health: -6, interpersonal: 8, mood: 3, knowledge: -2 }, nextNode: 'c13', requires: [{ stat: 'health', min: 55 }] },
      { text: '跑去告诉老师', effects: { knowledge: 3, interpersonal: 5, mood: -2 }, nextNode: 'c15' },
      { text: '默默走开装没看见', effects: { mood: -10, interpersonal: -5, health: 2 }, nextNode: 'c16' },
    ],
  },
  {
    id: 'c10',
    stage: 'childhood',
    description: '生日那天爸爸说只能选一个礼物：一辆红色自行车或一套厚厚的百科全书，橱窗里两样东西都在发光。',
    atmosphere: 'day',
    options: [
      { text: '选自行车，自由驰骋', effects: { health: 7, mood: 6, knowledge: -3 }, nextNode: 'c14' },
      { text: '选百科全书，探索世界', effects: { knowledge: 8, mood: 3, health: -2 }, nextNode: 'c16' },
      { text: '让爸爸自己决定', effects: { interpersonal: 5, mood: -3 }, nextNode: 'c17' },
    ],
  },
  {
    id: 'c11',
    stage: 'childhood',
    description: '暑假到了，奶奶邀你去乡下住一个月。城市里还有暑期补习班等你，报名表就压在电话机下。',
    atmosphere: 'day',
    options: [
      { text: '去乡下，追蜻蜓摘果子', effects: { health: 7, mood: 7, knowledge: -5 }, nextNode: 'c18' },
      { text: '留在城市上补习班', effects: { knowledge: 8, mood: -5, health: -2 }, nextNode: 'c19' },
      { text: '一半时间乡下，一半时间学习', effects: { health: 3, knowledge: 4, mood: 3, wealth: -2 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c12',
    stage: 'childhood',
    description: '你在同学家第一次看到电脑，屏幕上五颜六色的游戏画面让你目不转睛，鼠标在手中沉甸甸的。',
    atmosphere: 'night',
    options: [
      { text: '迷上电脑，开始自学编程', effects: { knowledge: 8, wealth: 2, health: -5, mood: -2 }, nextNode: 'c18' },
      { text: '和同学一起玩游戏', effects: { mood: 7, interpersonal: 5, health: -3, knowledge: -2 }, nextNode: 'c19' },
      { text: '玩了一会儿就回家写作业', effects: { knowledge: 4, mood: -3, interpersonal: -2 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c13',
    stage: 'childhood',
    description: '倾盆大雨你没带伞，同桌小红犹豫了一下把她的伞分给你一半，两个书包挤在伞下，雨声很响。',
    atmosphere: 'night',
    options: [
      { text: '真诚说谢谢，约好明天一起走', effects: { interpersonal: 9, mood: 5, health: -2 }, nextNode: 'c18' },
      { text: '觉得不好意思，下次带零食给她', effects: { interpersonal: 6, wealth: -4, mood: 4 }, nextNode: 'c19' },
      { text: '默默接受，不知道说什么', effects: { interpersonal: 3, mood: -3 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c14',
    stage: 'childhood',
    description: '学校春游去植物园，温室里的热带兰花散发着奇异香气。你发现一株从未见过的紫色花朵藏在角落。',
    atmosphere: 'day',
    options: [
      { text: '仔细观察，把特征记在本子上', effects: { knowledge: 7, mood: 4, interpersonal: -2 }, nextNode: 'c18' },
      { text: '喊同学们一起来看', effects: { interpersonal: 6, mood: 5, knowledge: -2 }, nextNode: 'c19' },
      { text: '偷偷摘一朵带回家', effects: { mood: 3, knowledge: -4, interpersonal: -5, health: -2 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c15',
    stage: 'childhood',
    description: '邻居家的哥哥考上了重点中学，整条街都在放鞭炮庆祝。红色纸屑铺满巷子，空气中弥漫着火药味。',
    atmosphere: 'day',
    options: [
      { text: '暗下决心，我也要考上', effects: { knowledge: 6, mood: 3, health: -2, interpersonal: -2 }, nextNode: 'c18' },
      { text: '羡慕但不觉得自己能行', effects: { mood: -5, knowledge: 2, interpersonal: -1 }, nextNode: 'c19' },
      { text: '去帮邻居搬东西沾沾喜气', effects: { interpersonal: 5, mood: 5, wealth: 2, health: -3 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c16',
    stage: 'childhood',
    description: '你在阁楼翻到一本泛黄旧书，封面画着一只展翅凤凰。书页间夹着一张褪色的老照片，背面写着一行小字。',
    atmosphere: 'night',
    options: [
      { text: '如饥似渴地读完整本书', effects: { knowledge: 9, mood: 3, health: -3, interpersonal: -2 }, nextNode: 'c19' },
      { text: '拿去问长辈这本书的来历', effects: { interpersonal: 5, knowledge: 4, mood: -1 }, nextNode: 'c20' },
      { text: '把老照片小心收好', effects: { mood: 5, interpersonal: 3, knowledge: -1 }, nextNode: 'c18' },
    ],
  },
  {
    id: 'c17',
    stage: 'childhood',
    description: '爸爸带你去钓鱼，河边芦苇丛中传来蛙鸣。浮漂一动不动，水面上倒映着流云，远处有白鹭掠过。',
    atmosphere: 'day',
    options: [
      { text: '耐心等待，享受宁静时光', effects: { mood: 8, health: 3, interpersonal: -2, knowledge: -2 }, nextNode: 'c18' },
      { text: '缠着爸爸讲他小时候的事', effects: { interpersonal: 8, knowledge: 3, mood: -1 }, nextNode: 'c19' },
      { text: '偷偷跑到河边捉蝌蚪', effects: { health: 5, mood: 6, interpersonal: -3, wealth: -2 }, nextNode: 'c20' },
    ],
  },
  {
    id: 'c18',
    stage: 'childhood',
    description: '期末考试出成绩了，你的数学满分但语文不及格。老师的目光从惊讶变成无奈，妈妈沉默了很久。',
    atmosphere: 'danger',
    options: [
      { text: '暑假补语文，迎头赶上', effects: { knowledge: 6, mood: -5, health: -3 }, nextNode: 'y01' },
      { text: '不管了，数学才是王道', effects: { knowledge: 3, mood: 3, interpersonal: -3 }, nextNode: 'y02' },
      { text: '找语文好的同学互帮互助', effects: { interpersonal: 6, knowledge: 4, mood: -2 }, nextNode: 'y03' },
    ],
  },
  {
    id: 'c19',
    stage: 'childhood',
    description: '过年时亲戚围坐一堂，大人们让你表演节目，有人塞红包有人问你长大想做什么。电视里春晚在响，空气里有饺子香。',
    atmosphere: 'day',
    options: [
      { text: '大声说我想当科学家', effects: { knowledge: 5, mood: 4, interpersonal: -2, health: -1 }, nextNode: 'y01' },
      { text: '红着脸唱了一首歌', effects: { interpersonal: 5, mood: 3, health: 2, knowledge: -1 }, nextNode: 'y02' },
      { text: '收完红包就溜去放烟花', effects: { mood: 8, wealth: 5, health: -5, interpersonal: -3 }, nextNode: 'y03' },
    ],
  },
  {
    id: 'c20',
    stage: 'childhood',
    description: '童年在蝉鸣中悄然落幕。你站在小学校门口回望那棵老槐树，阳光穿过树叶洒下斑驳光影。新的旅程即将开始。',
    atmosphere: 'day',
    options: [
      { text: '满怀期待，奔向未来', effects: { mood: 7, health: 3, knowledge: -2 }, nextNode: 'y01' },
      { text: '暗暗发誓出人头地', effects: { knowledge: 4, wealth: 3, mood: -3, interpersonal: -2 }, nextNode: 'y02' },
      { text: '回头看了很久，才慢慢转身', effects: { interpersonal: 5, mood: 3, wealth: -2 }, nextNode: 'y03' },
    ],
  },
];
