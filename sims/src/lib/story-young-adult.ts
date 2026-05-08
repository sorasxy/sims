import type { StoryNode } from './types';

export const youngAdultNodes: StoryNode[] = [
  {
    id: 'a01',
    stage: 'young-adult',
    description: '大学宿舍第一天，你推开门看到三个陌生人。上铺的哥们正在贴海报，对床的姐妹在整理书架，空气里弥漫着新被褥的味道。',
    atmosphere: 'day',
    options: [
      { text: '主动自我介绍，请大家吃零食', effects: { interpersonal: 8, wealth: -4, mood: 5 }, nextNode: 'a04' },
      { text: '安静整理自己的床铺', effects: { knowledge: 3, mood: 1, interpersonal: -3 }, nextNode: 'a05' },
      { text: '挨个问他们老家是哪的', effects: { interpersonal: 5, knowledge: 2, mood: 3 }, nextNode: 'a06' },
    ],
  },
  {
    id: 'a02',
    stage: 'young-adult',
    description: '军训场上烈日当头，你的迷彩服早已湿透。教官的哨声尖锐刺耳，旁边有人摇摇欲坠。',
    atmosphere: 'danger',
    options: [
      { text: '咬牙坚持，不能丢人', effects: { health: 5, mood: -3, knowledge: -1 }, nextNode: 'a04' },
      { text: '扶住快倒的同学', effects: { interpersonal: 7, health: -2, mood: 3 }, nextNode: 'a05' },
      { text: '假装晕倒混进医务室', effects: { health: 2, mood: -2, interpersonal: -4, knowledge: 2 }, nextNode: 'a06' },
    ],
  },
  {
    id: 'a03',
    stage: 'young-adult',
    description: '社团招新日，百团大战热闹非凡。吉他社的旋律、辩论社的口号、创业社的横幅，每个摊位前都挤满了人。',
    atmosphere: 'day',
    options: [
      { text: '加入辩论社，锻炼口才', effects: { knowledge: 6, interpersonal: 4, mood: -2 }, nextNode: 'a04' },
      { text: '加入吉他社，学一门乐器', effects: { mood: 7, knowledge: 3, wealth: -4 }, nextNode: 'a05' },
      { text: '加入创业社，志在四方', effects: { wealth: 4, knowledge: 3, health: -3, mood: -1 }, nextNode: 'a06' },
    ],
  },
  {
    id: 'a04',
    stage: 'young-adult',
    description: '期末考试周，图书馆一座难求。你抱着课本在走廊里背知识点，楼下传来有人在弹吉他唱歌的声音。',
    atmosphere: 'night',
    options: [
      { text: '全力以赴做到最好', effects: { knowledge: 7, wealth: 5, health: -7, mood: -3 }, nextNode: 'a07' },
      { text: '适可而止，身体要紧', effects: { health: 4, knowledge: 3, wealth: 2, mood: 2 }, nextNode: 'a08' },
      { text: '拉更多人分工协作', effects: { interpersonal: 6, knowledge: 4, wealth: 3, health: -2 }, nextNode: 'a09', requires: [{ stat: 'interpersonal', min: 55 }] },
    ],
  },
  {
    id: 'a05',
    stage: 'young-adult',
    description: '你收到了面试通知，明天上午十点。室友帮你挑了衬衫，镜子里的人看起来有那么点社会人的样子了。',
    atmosphere: 'day',
    options: [
      { text: '自信回答每个问题', effects: { wealth: 6, knowledge: 3, mood: 4, health: -2 }, nextNode: 'a07', requires: [{ stat: 'knowledge', min: 50 }] },
      { text: '太紧张说了几句结巴话', effects: { mood: -5, knowledge: 2, interpersonal: -2 }, nextNode: 'a08' },
      { text: '跟旁边候场的人聊天减压', effects: { interpersonal: 5, mood: 3, wealth: -1 }, nextNode: 'a09', requires: [{ stat: 'interpersonal', min: 50 }] },
    ],
  },
  {
    id: 'a06',
    stage: 'young-adult',
    description: '室友过生日，大家凑钱订了蛋糕。烛光映在每个人脸上，你忽然意识到，这就是大学的味道。',
    atmosphere: 'night',
    options: [
      { text: '喝多了抱着室友说心里话', effects: { interpersonal: 8, mood: 5, health: -4, wealth: -3 }, nextNode: 'a07' },
      { text: '默默许了个愿', effects: { mood: 4, knowledge: 1 }, nextNode: 'a08' },
      { text: '提议以后每月都聚一次', effects: { interpersonal: 7, wealth: -2, mood: 3 }, nextNode: 'a09', requires: [{ stat: 'mood', min: 50 }] },
    ],
  },
  {
    id: 'a07',
    stage: 'young-adult',
    description: '大三了，该决定毕业去向。考研、工作、出国，三条路像三扇门，每扇门后都是不同的人生。',
    atmosphere: 'day',
    options: [
      { text: '考研深造，学术为上', effects: { knowledge: 8, wealth: -5, health: -3 }, nextNode: 'a10', requires: [{ stat: 'knowledge', min: 60 }] },
      { text: '直接工作，早日独立', effects: { wealth: 5, health: -2, knowledge: -1 }, nextNode: 'a11' },
      { text: '出国留学，开拓视野', effects: { knowledge: 6, wealth: -8, interpersonal: -4, mood: 3 }, nextNode: 'a12', requires: [{ stat: 'wealth', min: 55 }] },
    ],
  },
  {
    id: 'a08',
    stage: 'young-adult',
    description: '你谈恋爱了。校园里的梧桐树下，第一次牵手的掌心都是汗。你觉得自己是世界上最幸运的人。',
    atmosphere: 'day',
    options: [
      { text: '全情投入，轰轰烈烈', effects: { interpersonal: 9, mood: 8, knowledge: -4, wealth: -5, health: -2 }, nextNode: 'a10' },
      { text: '保持平衡，爱情学业两不误', effects: { interpersonal: 5, mood: 4, knowledge: 2 }, nextNode: 'a11' },
      { text: '有点害怕，不敢太认真', effects: { mood: -3, interpersonal: 2, health: -1 }, nextNode: 'a12' },
    ],
  },
  {
    id: 'a09',
    stage: 'young-adult',
    description: '实习公司里你见识了真正的职场。格子间、会议、加班，咖啡续命，比想象中残酷得多。',
    atmosphere: 'night',
    options: [
      { text: '拼命表现，争取转正', effects: { wealth: 6, knowledge: 4, health: -6, mood: -3 }, nextNode: 'a10' },
      { text: '摸鱼学技术，闷声发大财', effects: { knowledge: 5, wealth: 2, interpersonal: -3 }, nextNode: 'a11' },
      { text: '跟同事搞好关系最重要', effects: { interpersonal: 7, wealth: 2, knowledge: -2, health: -2 }, nextNode: 'a12', requires: [{ stat: 'interpersonal', min: 55 }] },
    ],
  },
  {
    id: 'a10',
    stage: 'young-adult',
    description: '毕业典礼上你穿着学士服，帽子扔向天空的瞬间眼眶发酸。四年太快了，快到你觉得刚来就走了。',
    atmosphere: 'day',
    options: [
      { text: '跟每个朋友合影留念', effects: { interpersonal: 7, mood: 5, health: -1 }, nextNode: 'a13' },
      { text: '独自在校园走最后一圈', effects: { mood: 6, knowledge: 2, interpersonal: -2 }, nextNode: 'a14' },
      { text: '已经开始想下一步了', effects: { knowledge: 4, wealth: 3, mood: -3, interpersonal: -3 }, nextNode: 'a15' },
    ],
  },
  {
    id: 'a11',
    stage: 'young-adult',
    description: '第一份工作的工资到账了，数字比你想象的小。扣完房租水电生活费，所剩无几，你盯着屏幕看了很久。',
    atmosphere: 'night',
    options: [
      { text: '省吃俭用，强制储蓄', effects: { wealth: 7, mood: -4, health: -3, interpersonal: -2 }, nextNode: 'a13' },
      { text: '投资自己，花钱学技能', effects: { knowledge: 6, wealth: -6, mood: 2 }, nextNode: 'a14', requires: [{ stat: 'knowledge', min: 55 }] },
      { text: '该花花，年轻人不能太苦', effects: { mood: 5, wealth: -5, health: 2, interpersonal: 3 }, nextNode: 'a15' },
    ],
  },
  {
    id: 'a12',
    stage: 'young-adult',
    description: '合租屋很小，但第一次有了自己的空间。隔壁住着一对情侣经常吵架，楼下火锅店的油烟味飘上来。',
    atmosphere: 'night',
    options: [
      { text: '精心布置，把小屋变温馨', effects: { mood: 6, wealth: -4, health: 1 }, nextNode: 'a13' },
      { text: '只当睡觉的地方，省下钱来', effects: { wealth: 4, mood: -3, interpersonal: -2 }, nextNode: 'a14' },
      { text: '邀请朋友来做客', effects: { interpersonal: 7, mood: 4, wealth: -5, health: -2 }, nextNode: 'a15', requires: [{ stat: 'interpersonal', min: 50 }] },
    ],
  },
  {
    id: 'a13',
    stage: 'young-adult',
    description: '公司年会你被推上台表演节目。同事们起哄，领导在下面鼓掌，聚光灯晃得你看不清人脸。',
    atmosphere: 'night',
    options: [
      { text: '大方表演，引爆全场', effects: { interpersonal: 8, mood: 6, knowledge: -2 }, nextNode: 'a16', requires: [{ stat: 'mood', min: 55 }] },
      { text: '硬着头皮随便应付', effects: { mood: -4, interpersonal: 2 }, nextNode: 'a17' },
      { text: '拉着同事一起上', effects: { interpersonal: 6, mood: 3, health: -1 }, nextNode: 'a18' },
    ],
  },
  {
    id: 'a14',
    stage: 'young-adult',
    description: '你看到同事被领导当众羞辱，办公室里鸦雀无声。你低下头，键盘声格外响亮。',
    atmosphere: 'danger',
    options: [
      { text: '事后安慰同事', effects: { interpersonal: 7, mood: -2, knowledge: -1 }, nextNode: 'a16' },
      { text: '替同事说了一句话', effects: { interpersonal: 5, wealth: -3, mood: 3 }, nextNode: 'a17', requires: [{ stat: 'interpersonal', min: 60 }] },
      { text: '明哲保身，当没看见', effects: { wealth: 2, mood: -6, interpersonal: -3 }, nextNode: 'a18' },
    ],
  },
  {
    id: 'a15',
    stage: 'young-adult',
    description: '父母打电话说老家房子要拆了，问你要不要回来。电话那头是沉默和期待，你捏着手机站在出租屋的阳台上。',
    atmosphere: 'night',
    options: [
      { text: '回去，家人比事业重要', effects: { interpersonal: 7, health: 3, wealth: 4, knowledge: -3, mood: -2 }, nextNode: 'a16' },
      { text: '留下，大城市才有机会', effects: { wealth: 5, knowledge: 3, interpersonal: -5, mood: -3 }, nextNode: 'a17' },
      { text: '把父母接来一起住', effects: { interpersonal: 8, wealth: -6, health: 2, mood: 2 }, nextNode: 'a18', requires: [{ stat: 'wealth', min: 50 }] },
    ],
  },
  {
    id: 'a16',
    stage: 'young-adult',
    description: '你存了点钱，朋友拉你一起创业。咖啡馆里他画了个饼，说三年上市。窗外的梧桐叶被风吹落一地。',
    atmosphere: 'day',
    options: [
      { text: '全力投入，拼一把', effects: { wealth: -8, mood: 5, knowledge: 4, health: -4, interpersonal: 3 }, nextNode: 'a19' },
      { text: '小规模试水，先观望', effects: { wealth: -3, knowledge: 5, mood: 2 }, nextNode: 'a20' },
      { text: '婉拒，风险太大', effects: { wealth: 2, interpersonal: -4, mood: -2 }, nextNode: 'a19' },
    ],
  },
  {
    id: 'a17',
    stage: 'young-adult',
    description: '你在相亲角被硬塞了一个号码，对面坐着一个彬彬有礼的人。咖啡馆的爵士乐在两人沉默间显得格外大声。',
    atmosphere: 'day',
    options: [
      { text: '坦诚相待，聊真实想法', effects: { interpersonal: 6, mood: 3, knowledge: -1 }, nextNode: 'a19' },
      { text: '走个过场，回去再说', effects: { mood: -3, interpersonal: -2, wealth: 2 }, nextNode: 'a20' },
      { text: '觉得还行，试试看', effects: { interpersonal: 5, mood: 4, wealth: -3, health: -1 }, nextNode: 'a19' },
    ],
  },
  {
    id: 'a18',
    stage: 'young-adult',
    description: '公司通知加班赶项目，连续一周没有休息。凌晨三点的办公室只剩下你和咖啡机嗡嗡的声音。',
    atmosphere: 'night',
    options: [
      { text: '咬牙撑完这个项目', effects: { wealth: 7, knowledge: 4, health: -8, mood: -5, interpersonal: -3 }, nextNode: 'a19', requires: [{ stat: 'health', min: 50 }] },
      { text: '跟领导谈减少工作量', effects: { interpersonal: 3, health: 2, wealth: -3, mood: -1 }, nextNode: 'a20' },
      { text: '辞职，身体才是本钱', effects: { health: 5, mood: 3, wealth: -8, knowledge: -2 }, nextNode: 'a19' },
    ],
  },
  {
    id: 'a19',
    stage: 'young-adult',
    description: '你意外收到一笔奖金，数字不小。街对面就是商场，手机里是基金开户广告，手心有点发痒。',
    atmosphere: 'day',
    options: [
      { text: '投资自己，报个进修课程', effects: { knowledge: 8, wealth: -7, mood: -1 }, nextNode: 'm01', requires: [{ stat: 'knowledge', min: 55 }] },
      { text: '存起来，为将来做打算', effects: { wealth: 7, mood: 2, interpersonal: -2 }, nextNode: 'm02' },
      { text: '请朋友们好好吃一顿', effects: { interpersonal: 7, wealth: -6, mood: 6, health: -1 }, nextNode: 'm03', requires: [{ stat: 'interpersonal', min: 60 }] },
    ],
  },
  {
    id: 'a20',
    stage: 'young-adult',
    description: '青年时代的最后一个雨夜，你淋着雨走回家，没有打伞。雨水混着什么从脸上流下来，分不清是雨还是别的什么。',
    atmosphere: 'night',
    options: [
      { text: '给远方的朋友打了个电话', effects: { interpersonal: 6, mood: 4, health: -3 }, nextNode: 'm01' },
      { text: '回家洗个热水澡，早点睡', effects: { health: 5, mood: -2, knowledge: -1 }, nextNode: 'm02' },
      { text: '在雨里站了一会儿才回去', effects: { mood: 3, health: -4, knowledge: 2 }, nextNode: 'm03' },
    ],
  },
];
