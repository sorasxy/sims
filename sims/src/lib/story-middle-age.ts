import type { StoryNode } from './types';

export const middleAgeNodes: StoryNode[] = [
  {
    id: 'm01',
    stage: 'middle-age',
    description: '三十岁生日那天你一个人在出租屋里吃了碗面。窗外的城市灯火通明，手机上零星的祝福消息像远处的烟花。',
    atmosphere: 'night',
    options: [
      { text: '发条朋友圈庆祝一下', effects: { interpersonal: 4, mood: 2, knowledge: -1 }, nextNode: 'm04' },
      { text: '给自己买了一份礼物', effects: { mood: 5, wealth: -4, health: 1 }, nextNode: 'm05' },
      { text: '加班，三十岁不过生日', effects: { wealth: 4, knowledge: 2, mood: -5, health: -3 }, nextNode: 'm06' },
    ],
  },
  {
    id: 'm02',
    stage: 'middle-age',
    description: '公司裁员名单上有你的名字。收拾工位时，那个马克杯、那盆绿萝、那些加班的夜晚，都装不进纸箱里。',
    atmosphere: 'danger',
    options: [
      { text: '立刻投简历，重新出发', effects: { knowledge: 4, wealth: -5, mood: -4, health: -2 }, nextNode: 'm04' },
      { text: '趁机休息，想想真正想做什么', effects: { mood: 4, health: 3, wealth: -8, interpersonal: -3 }, nextNode: 'm05' },
      { text: '联系猎头和老同学找机会', effects: { interpersonal: 6, wealth: 2, knowledge: -2 }, nextNode: 'm06', requires: [{ stat: 'interpersonal', min: 65 }] },
    ],
  },
  {
    id: 'm03',
    stage: 'middle-age',
    description: '有人拉你投资一个新项目，回报率诱人。酒桌上觥筹交错，合同就在面前，但你总觉得哪里不对。',
    atmosphere: 'night',
    options: [
      { text: '搏一把，不入虎穴焉得虎子', effects: { wealth: -10, mood: 5, knowledge: 4, health: -3 }, nextNode: 'm07' },
      { text: '先小规模试水', effects: { wealth: -5, knowledge: 5, mood: 2, health: -1 }, nextNode: 'm08' },
      { text: '找行业大佬帮忙评估', effects: { wealth: -2, knowledge: 6, interpersonal: 5, health: -2 }, nextNode: 'm09', requires: [{ stat: 'interpersonal', min: 80 }] },
    ],
  },
  {
    id: 'm04',
    stage: 'middle-age',
    description: '同学聚会上你看到了当年的风云人物，也看到了曾经的差生开豪车来。酒杯碰撞间，谁也不提当年的梦想。',
    atmosphere: 'night',
    options: [
      { text: '坦然面对，各有各的活法', effects: { mood: 5, interpersonal: 4, knowledge: -2 }, nextNode: 'm10' },
      { text: '暗自比较，心有不甘', effects: { mood: -7, wealth: 2, knowledge: 2, health: -2 }, nextNode: 'm11' },
      { text: '跟大家约好以后常联系', effects: { interpersonal: 8, mood: 4, wealth: -3 }, nextNode: 'm12', requires: [{ stat: 'interpersonal', min: 65 }] },
    ],
  },
  {
    id: 'm05',
    stage: 'middle-age',
    description: '体检报告上出现了几个红色箭头，医生用平静的语气说要注意。你盯着那张纸，走廊里消毒水的味道格外刺鼻。',
    atmosphere: 'danger',
    options: [
      { text: '开始跑步，改变生活方式', effects: { health: 8, mood: 3, wealth: -3, knowledge: -2 }, nextNode: 'm10', requires: [{ stat: 'health', min: 40 }] },
      { text: '忙完这阵再说', effects: { health: -5, wealth: 3, knowledge: 2, mood: -2 }, nextNode: 'm11' },
      { text: '买一堆保健品先吃着', effects: { wealth: -6, health: 2, mood: 1, knowledge: -1 }, nextNode: 'm12' },
    ],
  },
  {
    id: 'm06',
    stage: 'middle-age',
    description: '孩子出生了，产房外的走廊漫长又短暂。你第一次当父母，手足无措又满心欢喜。生命在哭声中延续。',
    atmosphere: 'day',
    options: [
      { text: '减少工作，多陪家人', effects: { interpersonal: 8, mood: 6, wealth: -6, knowledge: -2, health: -1 }, nextNode: 'm13' },
      { text: '拼命赚钱，给孩子最好的', effects: { wealth: 8, health: -5, mood: -2, interpersonal: -3, knowledge: 2 }, nextNode: 'm14' },
      { text: '和伴侣商量分工合作', effects: { interpersonal: 5, wealth: 3, mood: 3, health: -2 }, nextNode: 'm15', requires: [{ stat: 'interpersonal', min: 60 }] },
    ],
  },
  {
    id: 'm07',
    stage: 'middle-age',
    description: '公司给了你一个升职机会，但意味着长期出差。家人在餐桌前沉默，孩子的画里爸爸总是在飞机上。',
    atmosphere: 'night',
    options: [
      { text: '接受提拔，家里的事再想办法', effects: { wealth: 8, knowledge: 4, interpersonal: -7, health: -4, mood: -3 }, nextNode: 'm13' },
      { text: '婉拒，家庭更重要', effects: { interpersonal: 8, mood: 3, wealth: -5, knowledge: -2 }, nextNode: 'm14' },
      { text: '试着谈判，找折中方案', effects: { interpersonal: 3, wealth: 4, knowledge: 3, mood: 2, health: -2 }, nextNode: 'm15', requires: [{ stat: 'interpersonal', min: 70 }] },
    ],
  },
  {
    id: 'm08',
    stage: 'middle-age',
    description: '你的房子突然增值了不少，中介电话一个接一个。卖掉换小的赚差价，还是继续住着等更高？',
    atmosphere: 'day',
    options: [
      { text: '卖掉换小房，落袋为安', effects: { wealth: 8, mood: 2, interpersonal: -3, health: -1 }, nextNode: 'm13', requires: [{ stat: 'wealth', min: 50 }] },
      { text: '继续持有，还会涨', effects: { wealth: 4, mood: -1, knowledge: 2 }, nextNode: 'm14' },
      { text: '抵押贷款再买一套', effects: { wealth: -5, knowledge: 3, mood: -3, health: -2 }, nextNode: 'm15' },
    ],
  },
  {
    id: 'm09',
    stage: 'middle-age',
    description: '老朋友邀你合伙开店，他说位置都看好了，就差你这个人。餐桌上的菜凉了，你们的谈话越来越热。',
    atmosphere: 'day',
    options: [
      { text: '投入积蓄，一起干', effects: { wealth: -8, interpersonal: 5, knowledge: 4, mood: 3, health: -3 }, nextNode: 'm16' },
      { text: '只出技术不出钱', effects: { knowledge: 5, interpersonal: 3, wealth: 1, mood: -1 }, nextNode: 'm17' },
      { text: '抱歉，不冒这个险', effects: { interpersonal: -4, wealth: 2, mood: -2, knowledge: -1 }, nextNode: 'm18' },
    ],
  },
  {
    id: 'm10',
    stage: 'middle-age',
    description: '你在深夜的办公室加班，突然胸口一阵闷痛。窗外城市的灯火在模糊，你想起今天还没给家里打电话。',
    atmosphere: 'danger',
    options: [
      { text: '赶紧回家休息', effects: { health: 5, mood: 2, wealth: -3, knowledge: -2 }, nextNode: 'm16' },
      { text: '吃颗药顶一顶，项目要交了', effects: { wealth: 4, health: -8, mood: -4, interpersonal: -2 }, nextNode: 'm17', requires: [{ stat: 'health', min: 55 }] },
      { text: '叫同事送你去医院', effects: { health: 3, interpersonal: 4, wealth: -2, knowledge: -1 }, nextNode: 'm18' },
    ],
  },
  {
    id: 'm11',
    stage: 'middle-age',
    description: '孩子上学了，每天接送辅导作业，你忽然理解了当年父母的焦躁。灯下孩子的字歪歪扭扭但很认真。',
    atmosphere: 'night',
    options: [
      { text: '耐心陪伴，循循善诱', effects: { interpersonal: 7, mood: 3, knowledge: 2, health: -2 }, nextNode: 'm16', requires: [{ stat: 'mood', min: 50 }] },
      { text: '报最好的辅导班', effects: { knowledge: 5, wealth: -7, mood: -2, interpersonal: -2 }, nextNode: 'm17' },
      { text: '放养，童年就该快乐', effects: { mood: 4, knowledge: -3, interpersonal: 2, health: 1 }, nextNode: 'm18' },
    ],
  },
  {
    id: 'm12',
    stage: 'middle-age',
    description: '你接到老家电话，父亲住院了。电话那头母亲的声音很平静但手在抖。你放下手中的工作，手心沁出冷汗。',
    atmosphere: 'danger',
    options: [
      { text: '立刻请假回去', effects: { interpersonal: 8, health: -2, wealth: -4, mood: -3, knowledge: -1 }, nextNode: 'm16' },
      { text: '先转钱回去，忙完再回', effects: { wealth: -5, interpersonal: -3, mood: -5, knowledge: 2 }, nextNode: 'm17' },
      { text: '让兄弟姐妹先照顾着', effects: { interpersonal: -4, wealth: -2, mood: -4, health: 1 }, nextNode: 'm18' },
    ],
  },
  {
    id: 'm13',
    stage: 'middle-age',
    description: '公司空降了一个年轻领导，开会时你突然发现自己成了被管理的那个。年轻人的PPT做得比你好。',
    atmosphere: 'day',
    options: [
      { text: '虚心学习新东西', effects: { knowledge: 6, mood: -2, interpersonal: 2, health: -1 }, nextNode: 'm19', requires: [{ stat: 'knowledge', min: 55 }] },
      { text: '不服，凭经验说话', effects: { interpersonal: -4, knowledge: 2, mood: -4, wealth: 1 }, nextNode: 'm20' },
      { text: '开始考虑自己是不是该换个赛道', effects: { mood: 2, knowledge: 3, wealth: -2, interpersonal: -2 }, nextNode: 'm19' },
    ],
  },
  {
    id: 'm14',
    stage: 'middle-age',
    description: '伴侣抱怨你总是不在家，争吵声越来越大。邻居的狗开始叫，孩子把自己关在房间里。客厅的灯忽明忽暗。',
    atmosphere: 'danger',
    options: [
      { text: '先道歉，倾听对方的心里话', effects: { interpersonal: 7, mood: -1, wealth: -1, knowledge: -1 }, nextNode: 'm19', requires: [{ stat: 'interpersonal', min: 55 }] },
      { text: '你也不容易，凭什么只怪我', effects: { mood: -5, interpersonal: -6, health: -2, wealth: 1 }, nextNode: 'm20' },
      { text: '沉默出门走走冷静一下', effects: { mood: 2, interpersonal: -3, health: 1, knowledge: -1 }, nextNode: 'm19' },
    ],
  },
  {
    id: 'm15',
    stage: 'middle-age',
    description: '你决定考个证书提升自己，但每天下班后只想瘫在沙发上。书桌上落了一层灰，台灯在等你开。',
    atmosphere: 'night',
    options: [
      { text: '逼自己每天学两小时', effects: { knowledge: 8, health: -4, mood: -3, wealth: -2 }, nextNode: 'm19', requires: [{ stat: 'knowledge', min: 50 }] },
      { text: '周末集中学，平时太累', effects: { knowledge: 4, health: 1, mood: 1, wealth: -1 }, nextNode: 'm20' },
      { text: '算了，不考也能活', effects: { mood: 2, knowledge: -3, interpersonal: -1 }, nextNode: 'm19' },
    ],
  },
  {
    id: 'm16',
    stage: 'middle-age',
    description: '四十岁了。你站在镜子前，看到了父亲当年的影子。两鬓有了白发，腰围也粗了一圈。时间不等人。',
    atmosphere: 'day',
    options: [
      { text: '办了健身卡，认真锻炼', effects: { health: 7, wealth: -4, mood: 3, knowledge: -2, interpersonal: -1 }, nextNode: 'm19' },
      { text: '中年就该认命，接受变化', effects: { mood: -3, health: -3, interpersonal: 2, knowledge: 1 }, nextNode: 'm20' },
      { text: '买辆摩托车，来次远行', effects: { mood: 8, health: -4, wealth: -6, interpersonal: -3, knowledge: 1 }, nextNode: 'm19', requires: [{ stat: 'health', min: 50 }] },
    ],
  },
  {
    id: 'm17',
    stage: 'middle-age',
    description: '朋友的公司上市了，他请你去庆功宴。水晶灯下觥筹交错，你举着酒杯觉得自己来错了地方。',
    atmosphere: 'night',
    options: [
      { text: '真心为他高兴', effects: { interpersonal: 5, mood: -2, knowledge: 2 }, nextNode: 'm19' },
      { text: '酸了，凭什么不是我', effects: { mood: -6, wealth: 2, interpersonal: -3, health: -2 }, nextNode: 'm20' },
      { text: '借机拓展人脉', effects: { interpersonal: 7, wealth: 3, mood: -1, knowledge: 1, health: -2 }, nextNode: 'm19', requires: [{ stat: 'interpersonal', min: 60 }] },
    ],
  },
  {
    id: 'm18',
    stage: 'middle-age',
    description: '你开始失眠，凌晨三点盯着天花板。手机屏幕的光映在你脸上，朋友圈里都是别人精彩的生活。',
    atmosphere: 'night',
    options: [
      { text: '起来看书，把焦虑变动力', effects: { knowledge: 5, health: -4, mood: -1, interpersonal: -2 }, nextNode: 'm19' },
      { text: '数羊，强迫自己入睡', effects: { health: 2, mood: -3, knowledge: -1 }, nextNode: 'm20' },
      { text: '给老朋友发消息聊聊天', effects: { interpersonal: 5, mood: 3, health: -2, wealth: -1 }, nextNode: 'm19' },
    ],
  },
  {
    id: 'm19',
    stage: 'middle-age',
    description: '中年的最后一个冬天，你站在办公室窗前看雪。玻璃上映出一个疲惫但还算坚定的面孔。下一个十年会怎样？',
    atmosphere: 'night',
    options: [
      { text: '还有梦没追完，继续走', effects: { mood: 5, knowledge: 3, health: -2, wealth: -2 }, nextNode: 'e01' },
      { text: '该放慢脚步了', effects: { health: 4, mood: 2, knowledge: -1, wealth: -1 }, nextNode: 'e02' },
      { text: '想和在乎的人多待一些', effects: { interpersonal: 6, mood: 3, wealth: -3, health: -1 }, nextNode: 'e03' },
    ],
  },
  {
    id: 'm20',
    stage: 'middle-age',
    description: '你收到一封旧情人的信，她说要来这座城市出差。信纸上有淡淡的香水味，咖啡厅的名字你很熟悉。',
    atmosphere: 'day',
    options: [
      { text: '去见一面，就当老朋友', effects: { mood: 4, interpersonal: -5, health: -2, knowledge: -1 }, nextNode: 'e01' },
      { text: '不去了，有些事翻篇了', effects: { interpersonal: 4, mood: -3, knowledge: 1 }, nextNode: 'e02' },
      { text: '跟伴侣坦白这件事', effects: { interpersonal: -3, mood: -2, health: 1, knowledge: 1 }, nextNode: 'e03', requires: [{ stat: 'interpersonal', min: 60 }] },
    ],
  },
];
