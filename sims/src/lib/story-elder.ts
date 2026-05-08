import type { StoryNode } from './types';

export const elderNodes: StoryNode[] = [
  {
    id: 'e01',
    stage: 'elder',
    description: '退休那天你最后一个离开办公室，回头看了一眼坐了二十年的位子。走廊很长，脚步声回荡在空旷的楼道里。',
    atmosphere: 'day',
    options: [
      { text: '释然，终于自由了', effects: { mood: 7, health: 2, wealth: -2, knowledge: -2 }, nextNode: 'e04' },
      { text: '失落，不知道明天干什么', effects: { mood: -5, knowledge: 2, health: -1, interpersonal: -2 }, nextNode: 'e05' },
      { text: '约老同事吃顿散伙饭', effects: { interpersonal: 6, mood: 3, wealth: -4, health: -1 }, nextNode: 'e06' },
    ],
  },
  {
    id: 'e02',
    stage: 'elder',
    description: '清晨公园里太极拳的音乐缓缓响起，你站在人群中不知所措。旁边的老人笑眯眯地递来一杯茶。',
    atmosphere: 'day',
    options: [
      { text: '跟着学打太极拳', effects: { health: 6, mood: 4, knowledge: 1, interpersonal: 2 }, nextNode: 'e04' },
      { text: '沿湖边散步，享受清静', effects: { health: 3, mood: 5, interpersonal: -2, knowledge: -1 }, nextNode: 'e05' },
      { text: '跟大家聊天交朋友', effects: { interpersonal: 7, mood: 4, health: 1, wealth: -1 }, nextNode: 'e06', requires: [{ stat: 'interpersonal', min: 50 }] },
    ],
  },
  {
    id: 'e03',
    stage: 'elder',
    description: '你翻出了年轻时的老相册，黑白照片里那个意气风发的青年让你愣住了。原来你也曾那样年轻过。',
    atmosphere: 'night',
    options: [
      { text: '把照片扫描存到电脑里', effects: { knowledge: 4, mood: 3, health: -1, interpersonal: -1 }, nextNode: 'e04' },
      { text: '打电话给照片里的老朋友', effects: { interpersonal: 7, mood: 5, health: -2, wealth: -1 }, nextNode: 'e05', requires: [{ stat: 'interpersonal', min: 55 }] },
      { text: '合上相册，过去了就过去了', effects: { mood: -4, health: 1, knowledge: -2 }, nextNode: 'e06' },
    ],
  },
  {
    id: 'e04',
    stage: 'elder',
    description: '老同学走了一个，葬礼上大家都沉默了。回来的路上你一言不发，忽然很想见见那些还在的老朋友。',
    atmosphere: 'night',
    options: [
      { text: '主动联系老友，组织聚会', effects: { interpersonal: 8, mood: 5, wealth: -4, health: -2 }, nextNode: 'e07', requires: [{ stat: 'interpersonal', min: 70 }] },
      { text: '回家翻看老照片怀念', effects: { mood: 3, knowledge: 2, interpersonal: -1, health: 1 }, nextNode: 'e08' },
      { text: '写一篇回忆录记录那些年', effects: { knowledge: 7, mood: 4, health: -3, interpersonal: -2 }, nextNode: 'e09' },
    ],
  },
  {
    id: 'e05',
    stage: 'elder',
    description: '收到一封远方来信，是年轻时的故人。信里只有一句话：还记得那年夏天的萤火虫吗？你的手微微颤抖。',
    atmosphere: 'night',
    options: [
      { text: '回一封长信，聊聊这些年的事', effects: { interpersonal: 8, mood: 7, knowledge: 2, health: -2 }, nextNode: 'e10', requires: [{ stat: 'interpersonal', min: 60 }] },
      { text: '只回了一句：当然记得', effects: { interpersonal: 4, mood: 5, health: -1 }, nextNode: 'e11' },
      { text: '把信收好，有些事就留在心里', effects: { mood: 4, interpersonal: -2, knowledge: 1, health: 1 }, nextNode: 'e12' },
    ],
  },
  {
    id: 'e06',
    stage: 'elder',
    description: '孙子孙女来家里过周末，客厅里充满笑声和跑跳声。茶几上的糖果罐很快就见了底。',
    atmosphere: 'day',
    options: [
      { text: '给他们讲你年轻时的故事', effects: { knowledge: 5, interpersonal: 6, mood: 5, health: -1 }, nextNode: 'e07', requires: [{ stat: 'knowledge', min: 55 }] },
      { text: '带他们去公园玩', effects: { health: -3, mood: 6, interpersonal: 5, wealth: -3 }, nextNode: 'e08' },
      { text: '安静看着他们笑就好', effects: { mood: 5, health: 1, interpersonal: 2, knowledge: -1 }, nextNode: 'e09' },
    ],
  },
  {
    id: 'e07',
    stage: 'elder',
    description: '医院走廊的白光刺眼，你做了一次全面体检。医生的眉头皱了皱，说需要进一步检查。走廊很长，你走得很慢。',
    atmosphere: 'danger',
    options: [
      { text: '积极配合治疗', effects: { health: 5, wealth: -8, mood: -3, knowledge: 2 }, nextNode: 'e10', requires: [{ stat: 'wealth', min: 40 }] },
      { text: '先观察一段时间再说', effects: { health: -5, mood: 2, wealth: -1, interpersonal: -1 }, nextNode: 'e11' },
      { text: '开始认真调整生活方式', effects: { health: 4, mood: 3, wealth: -3, knowledge: 1, interpersonal: -1 }, nextNode: 'e12' },
    ],
  },
  {
    id: 'e08',
    stage: 'elder',
    description: '社区办了老年大学，课程表上有书法、园艺、历史。教室的窗户对着花园，阳光暖洋洋的。',
    atmosphere: 'day',
    options: [
      { text: '报书法课，修心养性', effects: { knowledge: 5, mood: 4, health: 1, interpersonal: -1 }, nextNode: 'e10' },
      { text: '报园艺课，种花种菜', effects: { health: 4, mood: 5, knowledge: 2, wealth: -2 }, nextNode: 'e11' },
      { text: '报历史课，以史为鉴', effects: { knowledge: 7, mood: 3, health: -1, interpersonal: -2 }, nextNode: 'e12', requires: [{ stat: 'knowledge', min: 50 }] },
    ],
  },
  {
    id: 'e09',
    stage: 'elder',
    description: '你想学用智能手机，孙子教了你三遍你还是忘了。他有点不耐烦了，你假装没注意到。',
    atmosphere: 'day',
    options: [
      { text: '自己慢慢琢磨，不麻烦孩子', effects: { knowledge: 4, mood: -2, interpersonal: -2, health: -1 }, nextNode: 'e10' },
      { text: '笑着说你再教我一次嘛', effects: { interpersonal: 5, mood: 2, knowledge: 3, health: -1 }, nextNode: 'e11', requires: [{ stat: 'mood', min: 50 }] },
      { text: '算了，不用也行', effects: { knowledge: -3, mood: -4, interpersonal: -3, health: 1 }, nextNode: 'e12' },
    ],
  },
  {
    id: 'e10',
    stage: 'elder',
    description: '老朋友邀你一起报旅行团，目的地是你年轻时想去没去成的地方。旅行社的彩页上风景如画。',
    atmosphere: 'day',
    options: [
      { text: '去！趁还走得动', effects: { mood: 8, health: -4, wealth: -6, knowledge: 2, interpersonal: 3 }, nextNode: 'e13', requires: [{ stat: 'health', min: 40 }] },
      { text: '太贵了，看电视旅游节目也一样', effects: { wealth: 2, mood: -4, health: 1, interpersonal: -3 }, nextNode: 'e14' },
      { text: '约几个朋友自驾去近处转转', effects: { interpersonal: 5, mood: 4, health: -2, wealth: -3 }, nextNode: 'e15', requires: [{ stat: 'interpersonal', min: 55 }] },
    ],
  },
  {
    id: 'e11',
    stage: 'elder',
    description: '你开始整理一生的物件，抽屉里有旧车票、干花、一封没寄出的信。每样东西都连着一段记忆。',
    atmosphere: 'night',
    options: [
      { text: '写一本回忆录留给后人', effects: { knowledge: 7, mood: 4, health: -3, interpersonal: -1 }, nextNode: 'e13', requires: [{ stat: 'knowledge', min: 55 }] },
      { text: '把东西分送给相关的人', effects: { interpersonal: 8, mood: 3, health: -1, wealth: -1 }, nextNode: 'e14' },
      { text: '舍不得，都留着', effects: { mood: -2, health: 1, knowledge: -1, wealth: 1 }, nextNode: 'e15' },
    ],
  },
  {
    id: 'e12',
    stage: 'elder',
    description: '老伴身体也不好了，你们一起坐在阳台上晒太阳。她织着毛衣，你看着报纸，谁也不说话但很安心。',
    atmosphere: 'day',
    options: [
      { text: '握住她的手', effects: { interpersonal: 8, mood: 6, health: -1, knowledge: -1 }, nextNode: 'e13' },
      { text: '给她倒杯热水', effects: { interpersonal: 4, health: -1, mood: 3, knowledge: 1 }, nextNode: 'e14' },
      { text: '聊起年轻时第一次约会', effects: { interpersonal: 7, mood: 7, health: -2, wealth: -1 }, nextNode: 'e15', requires: [{ stat: 'mood', min: 55 }] },
    ],
  },
  {
    id: 'e13',
    stage: 'elder',
    description: '你接到通知，老房子要拆迁了。那扇你从小进出的木门、那棵院子里的枣树，都将不复存在。',
    atmosphere: 'danger',
    options: [
      { text: '拿补偿款，住新房子', effects: { wealth: 8, mood: -3, health: -1, interpersonal: -2, knowledge: -1 }, nextNode: 'e16', requires: [{ stat: 'wealth', min: 30 }] },
      { text: '回去看最后一眼', effects: { mood: -5, knowledge: 2, health: -2, interpersonal: 3 }, nextNode: 'e17' },
      { text: '跟老邻居们一起商量对策', effects: { interpersonal: 6, mood: 2, wealth: -2, health: -2, knowledge: 2 }, nextNode: 'e18', requires: [{ stat: 'interpersonal', min: 55 }] },
    ],
  },
  {
    id: 'e14',
    stage: 'elder',
    description: '社区组织志愿者活动，帮助独居老人。你想了想，自己其实也算独居老人了。但你还走得动。',
    atmosphere: 'day',
    options: [
      { text: '报名当志愿者', effects: { interpersonal: 7, mood: 5, health: -3, knowledge: 2 }, nextNode: 'e16', requires: [{ stat: 'health', min: 35 }] },
      { text: '觉得自己也需要被帮助', effects: { mood: -3, health: 1, interpersonal: -1 }, nextNode: 'e17' },
      { text: '组织更多老人一起参加', effects: { interpersonal: 9, mood: 4, health: -3, wealth: -2 }, nextNode: 'e18', requires: [{ stat: 'interpersonal', min: 60 }] },
    ],
  },
  {
    id: 'e15',
    stage: 'elder',
    description: '你梦见了一片金色麦田，风吹过来像小时候外婆家的味道。醒来时枕头湿了一片，窗外天刚亮。',
    atmosphere: 'day',
    options: [
      { text: '给还在的人打个电话', effects: { interpersonal: 6, mood: 4, health: -1 }, nextNode: 'e16' },
      { text: '起来写点什么', effects: { knowledge: 4, mood: 2, health: -1, interpersonal: -1 }, nextNode: 'e17' },
      { text: '去阳台看日出', effects: { mood: 6, health: 1, knowledge: 1, interpersonal: -1 }, nextNode: 'e18' },
    ],
  },
  {
    id: 'e16',
    stage: 'elder',
    description: '你在社区象棋比赛上遇到了一个老对手，年轻时你们谁也不服谁。棋盘上厮杀正酣，观战的人越来越多。',
    atmosphere: 'day',
    options: [
      { text: '全力以赴，赢了这局', effects: { knowledge: 4, mood: 5, health: -2, interpersonal: 3 }, nextNode: 'e19', requires: [{ stat: 'knowledge', min: 50 }] },
      { text: '故意让了一步，和气为贵', effects: { interpersonal: 5, mood: 3, knowledge: -1, health: 1 }, nextNode: 'e20' },
      { text: '棋逢对手，输赢无所谓', effects: { mood: 4, interpersonal: 3, health: -1, knowledge: 1 }, nextNode: 'e19' },
    ],
  },
  {
    id: 'e17',
    stage: 'elder',
    description: '你翻出一张年轻时写的清单：要去看海、要学画画、要写一本书。打勾的只有两三项，其余的墨迹都淡了。',
    atmosphere: 'night',
    options: [
      { text: '现在去完成，还来得及', effects: { mood: 7, health: -4, knowledge: 3, wealth: -4 }, nextNode: 'e19', requires: [{ stat: 'mood', min: 45 }] },
      { text: '人生哪能事事如愿', effects: { mood: -3, health: 1, knowledge: 2 }, nextNode: 'e20' },
      { text: '划掉旧的，写下新的', effects: { mood: 5, knowledge: 4, health: -2, interpersonal: -1 }, nextNode: 'e19' },
    ],
  },
  {
    id: 'e18',
    stage: 'elder',
    description: '冬天来了，你感冒了一直不好。儿女们打电话催你去大医院，你嘴上说没事其实也有点害怕。',
    atmosphere: 'danger',
    options: [
      { text: '听孩子们的话去检查', effects: { health: 4, wealth: -5, mood: -2, interpersonal: 3, knowledge: 1 }, nextNode: 'e19' },
      { text: '小毛病扛扛就过去了', effects: { health: -6, mood: 1, wealth: 1, interpersonal: -3 }, nextNode: 'e20' },
      { text: '去看了中医调理', effects: { health: 2, wealth: -3, knowledge: 2, mood: 1 }, nextNode: 'e19', requires: [{ stat: 'knowledge', min: 45 }] },
    ],
  },
  {
    id: 'e19',
    stage: 'elder',
    description: '你决定把一些积蓄捐给社区的图书角。搬书的时候你翻开一本，扉页上写着"赠给爱读书的孩子们"。',
    atmosphere: 'day',
    options: [
      { text: '多捐一些，书应该被读到', effects: { knowledge: 5, wealth: -6, mood: 5, interpersonal: 4 }, nextNode: 'e_end', requires: [{ stat: 'wealth', min: 40 }] },
      { text: '留够自己的，量力而行', effects: { wealth: 2, mood: 2, knowledge: 1, interpersonal: -1 }, nextNode: 'e_end' },
      { text: '也捐些时间，去做读书志愿者', effects: { interpersonal: 7, knowledge: 4, health: -3, wealth: -2, mood: 3 }, nextNode: 'e_end', requires: [{ stat: 'health', min: 35 }] },
    ],
  },
  {
    id: 'e20',
    stage: 'elder',
    description: '夕阳透过窗帘洒在摇椅上，你慢慢坐下来。一生的画面像走马灯在眼前闪过，嘴角不自觉地上扬。',
    atmosphere: 'day',
    options: [
      { text: '在摇椅上闭眼微笑', effects: { mood: 9, health: 2, knowledge: -1 }, nextNode: 'e_end' },
      { text: '翻开相册从头到尾看一遍', effects: { interpersonal: 5, mood: 6, knowledge: 2, health: -2 }, nextNode: 'e_end' },
      { text: '拨通那个最想说话的号码', effects: { interpersonal: 8, mood: 7, health: -2, wealth: -1 }, nextNode: 'e_end', requires: [{ stat: 'interpersonal', min: 70 }] },
    ],
  },
];
