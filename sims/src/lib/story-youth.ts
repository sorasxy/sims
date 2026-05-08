import type { StoryNode } from './types';

export const youthNodes: StoryNode[] = [
  {
    id: 'y01',
    stage: 'youth',
    description: '初中开学第一天，陌生的走廊里到处是新面孔。你握紧书包带子，寻找自己的教室，心跳得很快。',
    atmosphere: 'day',
    options: [
      { text: '主动跟旁边的人打招呼', effects: { interpersonal: 7, mood: 4, knowledge: -2 }, nextNode: 'y04' },
      { text: '安静坐下，翻看新课本', effects: { knowledge: 6, mood: 1, interpersonal: -3 }, nextNode: 'y05' },
      { text: '寻找小学同学扎堆', effects: { interpersonal: 3, mood: 3, knowledge: -2 }, nextNode: 'y06' },
    ],
  },
  {
    id: 'y02',
    stage: 'youth',
    description: '你考进了重点班，课桌上堆满了参考书。窗外操场上有人在打篮球，欢呼声隔着玻璃传来。',
    atmosphere: 'day',
    options: [
      { text: '埋头苦读，目标第一', effects: { knowledge: 9, health: -5, mood: -4, interpersonal: -3 }, nextNode: 'y04' },
      { text: '课间去操场活动一下', effects: { health: 5, mood: 4, knowledge: -2 }, nextNode: 'y05' },
      { text: '跟同桌边学边聊', effects: { interpersonal: 5, knowledge: 4, health: -1 }, nextNode: 'y06' },
    ],
  },
  {
    id: 'y03',
    stage: 'youth',
    description: '普通班的教室很吵闹，后排有人打扑克。你坐在中间，老师在讲台上敲黑板但没几个人听。',
    atmosphere: 'night',
    options: [
      { text: '戴上耳塞认真听课', effects: { knowledge: 7, mood: -4, interpersonal: -3 }, nextNode: 'y04' },
      { text: '跟后排同学混熟了', effects: { interpersonal: 7, mood: 4, knowledge: -5 }, nextNode: 'y05' },
      { text: '找老师申请调到前排', effects: { knowledge: 5, interpersonal: -4, mood: -2 }, nextNode: 'y06' },
    ],
  },
  {
    id: 'y04',
    stage: 'youth',
    description: '课间你发现公告栏上贴着社团招新海报：文学社、篮球队、机器人社。每张海报都画满了梦想的形状。',
    atmosphere: 'day',
    options: [
      { text: '加入文学社，以笔为剑', effects: { knowledge: 7, mood: 5, health: -2 }, nextNode: 'y07' },
      { text: '加入篮球队，挥洒汗水', effects: { health: 8, interpersonal: 4, knowledge: -3 }, nextNode: 'y08' },
      { text: '加入机器人社，敲代码', effects: { knowledge: 8, wealth: 2, health: -4, mood: -1 }, nextNode: 'y09' },
    ],
  },
  {
    id: 'y05',
    stage: 'youth',
    description: '月考成绩出来了，你的排名让父母非常不满。晚饭桌上气氛凝重，筷子碰碗的声音格外刺耳。',
    atmosphere: 'danger',
    options: [
      { text: '承诺下次一定考好', effects: { knowledge: 3, mood: -6, interpersonal: 3, health: -2 }, nextNode: 'y07' },
      { text: '反问为什么只看成绩', effects: { mood: 2, interpersonal: -8, health: -2 }, nextNode: 'y08' },
      { text: '默默吃完回房间偷偷哭', effects: { mood: -8, health: -3, interpersonal: -2 }, nextNode: 'y09' },
    ],
  },
  {
    id: 'y06',
    stage: 'youth',
    description: '放学后你路过琴房，听到有人弹吉他。推开门，一个扎马尾的女生正低声吟唱，阳光落在她的琴弦上。',
    atmosphere: 'day',
    options: [
      { text: '鼓掌说唱得真好', effects: { interpersonal: 7, mood: 6, knowledge: -2 }, nextNode: 'y07' },
      { text: '悄悄关上门不打扰', effects: { mood: 3, knowledge: 1, interpersonal: -2 }, nextNode: 'y08' },
      { text: '问她能不能教自己弹', effects: { knowledge: 5, interpersonal: 5, mood: 4, wealth: -3 }, nextNode: 'y09', requires: [{ stat: 'mood', min: 40 }] },
    ],
  },
  {
    id: 'y07',
    stage: 'youth',
    description: '暑假你得到一个参加夏令营的机会，但费用不菲。同学们讨论着行程，你看着口袋里的零花钱默默盘算。',
    atmosphere: 'day',
    options: [
      { text: '跟父母商量，争取支持', effects: { interpersonal: 4, knowledge: 6, wealth: -7, mood: -2 }, nextNode: 'y10' },
      { text: '自己打工攒钱去', effects: { health: -5, wealth: 3, knowledge: 4, mood: -2 }, nextNode: 'y11' },
      { text: '算了，在家自学也行', effects: { knowledge: 5, mood: -5, interpersonal: -3 }, nextNode: 'y12' },
    ],
  },
  {
    id: 'y08',
    stage: 'youth',
    description: '好朋友小王被高年级学生勒索，他红着眼眶找到你。走廊尽头那几个人还在嬉笑。',
    atmosphere: 'danger',
    options: [
      { text: '陪他去找老师', effects: { interpersonal: 7, knowledge: 2, mood: -3 }, nextNode: 'y10' },
      { text: '拉着几个朋友一起去对峙', effects: { interpersonal: 5, health: -6, mood: 3 }, nextNode: 'y11', requires: [{ stat: 'interpersonal', min: 50 }] },
      { text: '安慰他但不敢介入', effects: { mood: -7, interpersonal: -5 }, nextNode: 'y12' },
    ],
  },
  {
    id: 'y09',
    stage: 'youth',
    description: '深夜你偷偷爬上天台看星星，城市灯火在远处闪烁。你第一次认真思考：我到底想过怎样的人生？',
    atmosphere: 'night',
    options: [
      { text: '想成为一个有学问的人', effects: { knowledge: 7, mood: 3, wealth: -3 }, nextNode: 'y10' },
      { text: '想赚很多钱，不再受苦', effects: { wealth: 5, mood: 2, interpersonal: -3 }, nextNode: 'y11' },
      { text: '想和喜欢的人在一起就好', effects: { interpersonal: 5, mood: 5, knowledge: -2 }, nextNode: 'y12' },
    ],
  },
  {
    id: 'y10',
    stage: 'youth',
    description: '高中分科的十字路口，文科班的窗外是竹林，理科班的黑板上写满了公式。你的笔在志愿表上悬停。',
    atmosphere: 'day',
    options: [
      { text: '选理科，走技术的路', effects: { knowledge: 7, wealth: 3, mood: -2 }, nextNode: 'y13' },
      { text: '选文科，追寻人文之光', effects: { knowledge: 5, mood: 4, wealth: -3 }, nextNode: 'y14' },
      { text: '听父母的话选好就业的', effects: { interpersonal: 3, wealth: 4, mood: -5, knowledge: -2 }, nextNode: 'y15' },
    ],
  },
  {
    id: 'y11',
    stage: 'youth',
    description: '学校举办才艺大赛，你准备了很久的节目。后台很紧张，化妆间的灯泡忽明忽暗，手心全是汗。',
    atmosphere: 'night',
    options: [
      { text: '深呼吸，全力以赴上台', effects: { mood: 7, knowledge: 3, health: -3, interpersonal: 2 }, nextNode: 'y13', requires: [{ stat: 'mood', min: 40 }] },
      { text: '拉着朋友一起上台壮胆', effects: { interpersonal: 6, mood: 5, knowledge: -2 }, nextNode: 'y14' },
      { text: '临阵退缩，让给别人', effects: { mood: -8, interpersonal: -2, knowledge: -1 }, nextNode: 'y15' },
    ],
  },
  {
    id: 'y12',
    stage: 'youth',
    description: '你在旧书摊淘到一本哲学入门，翻开第一页就被深深吸引。摊主是个白发老人，笑眯眯地看着你。',
    atmosphere: 'day',
    options: [
      { text: '买下这本书，通宵读完', effects: { knowledge: 8, mood: 4, health: -5, wealth: -3 }, nextNode: 'y13' },
      { text: '跟老人聊起人生哲学', effects: { knowledge: 5, interpersonal: 5, mood: 4, wealth: -2 }, nextNode: 'y14' },
      { text: '翻了几页放下，还是做题要紧', effects: { knowledge: 3, mood: -4, interpersonal: -1 }, nextNode: 'y15' },
    ],
  },
  {
    id: 'y13',
    stage: 'youth',
    description: '高三如炼狱，每天凌晨才睡，闹钟五点准时响起。课桌上堆满了试卷，咖啡杯永远空着。窗外四季变换你无暇顾及。',
    atmosphere: 'night',
    options: [
      { text: '拼了，目标名校', effects: { knowledge: 10, health: -8, mood: -6, interpersonal: -4 }, nextNode: 'y16' },
      { text: '保证睡眠，适度学习', effects: { health: 3, knowledge: 5, mood: 2, interpersonal: -2 }, nextNode: 'y17' },
      { text: '跟同学组队互相监督', effects: { interpersonal: 5, knowledge: 5, mood: 2, health: -3 }, nextNode: 'y18' },
    ],
  },
  {
    id: 'y14',
    stage: 'youth',
    description: '暗恋的人突然递给你一张纸条，上面写着"放学等我"。心跳加速到几乎能听见，整节课都在走神。',
    atmosphere: 'day',
    options: [
      { text: '放学赴约，脸红心跳', effects: { interpersonal: 9, mood: 8, knowledge: -5, health: -2 }, nextNode: 'y16' },
      { text: '假装没看见，专心高考', effects: { knowledge: 5, mood: -7, interpersonal: -4 }, nextNode: 'y17' },
      { text: '把纸条给好朋友看求助', effects: { interpersonal: 3, mood: 2, knowledge: -2 }, nextNode: 'y18' },
    ],
  },
  {
    id: 'y15',
    stage: 'youth',
    description: '模拟考失利，成绩跌到了谷底。班主任找你谈话，说以你的水平不应该这样。走廊的风很凉。',
    atmosphere: 'danger',
    options: [
      { text: '分析错题，逐个攻克', effects: { knowledge: 7, mood: -4, health: -3 }, nextNode: 'y16' },
      { text: '找心理老师聊聊', effects: { mood: 5, health: 2, interpersonal: 3, knowledge: -1 }, nextNode: 'y17' },
      { text: '摆烂了，爱咋咋地', effects: { mood: -5, knowledge: -7, health: 2, interpersonal: -3 }, nextNode: 'y18' },
    ],
  },
  {
    id: 'y16',
    stage: 'youth',
    description: '高考结束的铃声响起，你放下笔走出考场。阳光刺眼得让人想哭，三年青春浓缩成一张答题卡。',
    atmosphere: 'day',
    options: [
      { text: '跟同学们狂欢到天亮', effects: { interpersonal: 8, mood: 9, health: -5, wealth: -4 }, nextNode: 'y19' },
      { text: '回家倒头大睡三天', effects: { health: 8, mood: 5, interpersonal: -3 }, nextNode: 'y20' },
      { text: '开始规划大学要做的事', effects: { knowledge: 4, mood: 4, interpersonal: -2 }, nextNode: 'y19' },
    ],
  },
  {
    id: 'y17',
    stage: 'youth',
    description: '志愿填报的深夜，电脑屏幕的蓝光映在你脸上。城市、学校、专业，三个维度交织成命运的分叉口。',
    atmosphere: 'night',
    options: [
      { text: '选大城市的热门专业', effects: { wealth: 5, knowledge: 3, mood: -2, interpersonal: -3 }, nextNode: 'y19' },
      { text: '选自己喜欢的冷门专业', effects: { mood: 7, knowledge: 4, wealth: -4 }, nextNode: 'y20', requires: [{ stat: 'mood', min: 45 }] },
      { text: '选离家近的学校', effects: { interpersonal: 5, health: 3, knowledge: -2, wealth: -2 }, nextNode: 'y19' },
    ],
  },
  {
    id: 'y18',
    stage: 'youth',
    description: '暑假里你做了人生第一份兼职，在奶茶店打工。配方表背了三天，手上被烫了好几个红印。',
    atmosphere: 'day',
    options: [
      { text: '坚持干完整个暑假', effects: { wealth: 7, health: -5, mood: 2, knowledge: -2 }, nextNode: 'y19' },
      { text: '干了一个月就辞了', effects: { wealth: 3, mood: 2, interpersonal: -2 }, nextNode: 'y20' },
      { text: '跟同事成了好朋友', effects: { interpersonal: 6, wealth: 3, mood: 4, health: -2 }, nextNode: 'y19' },
    ],
  },
  {
    id: 'y19',
    stage: 'youth',
    description: '出发去大学的那天，妈妈在行李箱里塞了太多东西。火车缓缓启动，站台上她的身影越来越小，你忽然有点想哭。',
    atmosphere: 'day',
    options: [
      { text: '挥手告别，强忍泪水', effects: { interpersonal: 5, mood: -3, health: 2 }, nextNode: 'a01' },
      { text: '发消息说到了就打电话', effects: { interpersonal: 6, mood: 2, knowledge: -1 }, nextNode: 'a02' },
      { text: '兴奋地看着窗外的新风景', effects: { mood: 7, health: 2, interpersonal: -2 }, nextNode: 'a03' },
    ],
  },
  {
    id: 'y20',
    stage: 'youth',
    description: '少年的最后一个夜晚，你躺在老家屋顶看星星。萤火虫在稻田间飞舞，远处传来虫鸣蛙叫。你知道，明天将完全不同。',
    atmosphere: 'night',
    options: [
      { text: '许下一个关于远方的愿望', effects: { mood: 6, knowledge: 2, wealth: -2 }, nextNode: 'a01' },
      { text: '拍一张照片留作纪念', effects: { mood: 4, interpersonal: 2, knowledge: -1 }, nextNode: 'a02' },
      { text: '在日记本上写下这段时光', effects: { knowledge: 4, mood: 4, interpersonal: -2 }, nextNode: 'a03' },
    ],
  },
];
