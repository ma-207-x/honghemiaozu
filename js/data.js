// 红河苗族服饰数据（五地）
// 修改内容只动本文件；parts 的 part key: head/top/waist/skirt/silver/leg
var REGIONS = [
  {
    key: 'pingbian', name: '屏边', motto: '看头饰',
    subtitle: '屏边 · 尖头青纱与白衣白裙',
    thumb: 'images/pingbian/thumb.jpg',
    avatar: 'images/pingbian/avatar.jpg',
    video: 'videos/pingbian/intro.mp4',
    desc: '屏边是全国唯一的苗族自治县。头饰是支系的身份证——尖头青纱高高耸起，越高越显庄重。白苗白衣白裙素雅纯净，托肩绣满花木鸟兽，服色分五支，一针一线诉说着迁徙史诗。',
    hotspots: [
      {part:'head', left:50, top:14},
      {part:'top',  left:50, top:36},
      {part:'waist',left:50, top:54},
      {part:'skirt',left:50, top:74},
      {part:'silver',left:68, top:34}
    ],
    parts: {
      head:  {name:'尖头青纱头饰', sub:'支系身份标志', img:'images/pingbian/parts/head.jpg',
        desc:'<p><strong>形制：</strong>青纱缠绕成高耸尖头，配绣花头带与彩色流苏。</p><p><strong>含义：</strong>头饰越高越显庄重，是辨识屏边各支系最直观的标志。</p><p><strong>工艺：</strong>青纱编织结合彩绣，白珠点缀。</p>'},
      top:   {name:'白衣托肩刺绣', sub:'素雅中见匠心', img:'images/pingbian/parts/top.jpg',
        desc:'<p><strong>形制：</strong>白色长袖斜襟上衣，托肩与袖口绣花木鸟兽。</p><p><strong>含义：</strong>白苗支系以白衣为典型，素雅纯净。</p><p><strong>工艺：</strong>平绣、挑花结合，线条细腻。</p>'},
      waist: {name:'红腰带', sub:'收束与装饰', img:'images/pingbian/parts/waist.jpg',
        desc:'<p><strong>形制：</strong>红色织带束腰，简洁利落。</p><p><strong>含义：</strong>兼作固定上衣与围腰的实用部件。</p>'},
      skirt: {name:'白色百褶裙', sub:'蜡染裙摆', img:'images/pingbian/parts/skirt.jpg',
        desc:'<p><strong>形制：</strong>白色百褶长裙，裙摆带淡淡蜡染纹样。</p><p><strong>工艺：</strong>蜡染与百褶定型，行走时裙摆舒展。</p>'},
      silver:{name:'银饰', sub:'项圈与手镯', img:'images/pingbian/parts/silver.jpg',
        desc:'<p><strong>形制：</strong>银项圈、银手镯搭配。</p><p><strong>含义：</strong>银饰象征吉祥与财富。</p>'}
    }
  },
  {
    key: 'jinping', name: '金平', motto: '看色彩',
    subtitle: '金平 · 蓝巾红腰与竖条纹百褶',
    thumb: 'images/jinping/thumb.jpg',
    avatar: 'images/jinping/avatar.jpg',
    video: 'videos/jinping/intro.mp4',
    desc: '金平苗族支系繁多，号称"民族服饰大观园"。亮蓝头巾、醒目红腰带、蓝黑白竖条纹百褶裙，色彩对比强烈。花苗的红裙与黑苗的蜡染在此交汇，五支系服饰百花齐放。',
    hotspots: [
      {part:'head', left:50, top:14},
      {part:'top',  left:50, top:36},
      {part:'waist',left:50, top:54},
      {part:'skirt',left:50, top:74},
      {part:'silver',left:68, top:34}
    ],
    parts: {
      head:  {name:'亮蓝流苏头巾', sub:'色彩大胆', img:'images/jinping/parts/head.jpg',
        desc:'<p><strong>形制：</strong>亮蓝色头巾包裹，垂彩色流苏。</p><p><strong>含义：</strong>头巾色泽是金平服饰最鲜明的视觉符号。</p>'},
      top:   {name:'黑底几何刺绣上衣', sub:'蓝袖口彩绣', img:'images/jinping/parts/top.jpg',
        desc:'<p><strong>形制：</strong>黑色V领上衣，蓝色袖口配几何刺绣。</p><p><strong>工艺：</strong>几何纹样规整，色彩饱和。</p>'},
      waist: {name:'红腰带', sub:'醒目束腰', img:'images/jinping/parts/waist.jpg',
        desc:'<p><strong>形制：</strong>宽大红色腰带束腰。</p><p><strong>含义：</strong>红色在深色系服饰中格外抢眼，是金平盛装的点睛之笔。</p>'},
      skirt: {name:'竖条纹百褶裙', sub:'蓝黑白三色', img:'images/jinping/parts/skirt.jpg',
        desc:'<p><strong>形制：</strong>蓝、黑、白大胆竖条纹百褶长裙。</p><p><strong>工艺：</strong>蜡染结合彩色织带。</p>'},
      silver:{name:'银耳坠', sub:'点缀', img:'images/jinping/parts/silver.jpg',
        desc:'<p><strong>形制：</strong>银质耳坠点缀耳边。</p>'}
    }
  },
  {
    key: 'hekou', name: '河口', motto: '看头饰',
    subtitle: '河口 · 圆盘帽与交领盛装',
    thumb: 'images/hekou/thumb.jpg',
    avatar: 'images/hekou/avatar.jpg',
    video: 'videos/hekou/intro.mp4',
    desc: '河口苗族（青苗/花苗支系）的盛装以深色底配彩色刺绣与蜡染几何纹为典型。黑底圆盘帽垂银珠流苏，深色交领上衣绣满繁花，红腰带束起拼接百褶长裙，银饰叮当。',
    hotspots: [
      {part:'head', left:50, top:13},
      {part:'top',  left:50, top:35},
      {part:'waist',left:50, top:54},
      {part:'skirt',left:50, top:74},
      {part:'silver',left:72, top:30}
    ],
    parts: {
      head:  {name:'黑底条纹圆盘帽', sub:'垂银珠流苏', img:'images/hekou/parts/head.jpg',
        desc:'<p><strong>形制：</strong>黑底圆盘帽，帽沿红白蓝条纹，垂银珠流苏与珠串。</p><p><strong>含义：</strong>河口地区极具辨识度的头饰。</p>'},
      top:   {name:'深色交领刺绣上衣', sub:'花卉几何纹', img:'images/hekou/parts/top.jpg',
        desc:'<p><strong>形制：</strong>深藏青交叉立领上衣，衣襟袖口满布彩色刺绣。</p><p><strong>工艺：</strong>平绣、锁绣结合几何纹样。</p>'},
      waist: {name:'红腰带', sub:'束起拼接裙', img:'images/hekou/parts/waist.jpg',
        desc:'<p><strong>形制：</strong>亮红色宽腰带。</p>'},
      skirt: {name:'拼接百褶裙', sub:'蓝黑白褐红', img:'images/hekou/parts/skirt.jpg',
        desc:'<p><strong>形制：</strong>多层拼接百褶长裙，蓝、黑、褐红相间，裙摆几何刺绣。</p><p><strong>工艺：</strong>蜡染与拼布结合。</p>'},
      silver:{name:'银饰', sub:'耳环项圈手镯', img:'images/hekou/parts/silver.jpg',
        desc:'<p><strong>形制：</strong>大银耳坠、银项圈、白手镯。</p><p><strong>含义：</strong>银饰叮当，象征吉祥与财富。</p>'}
    }
  },
  {
    key: 'mile', name: '弥勒', motto: '看色彩',
    subtitle: '弥勒 · 粉紫圆盘帽与绚丽刺绣',
    thumb: 'images/mile/thumb.jpg',
    avatar: 'images/mile/avatar.jpg',
    video: 'videos/mile/intro.mp4',
    desc: '弥勒苗族盛装如穿在身上的调色盘。粉紫圆盘帽下，上衣绣满玫红与翠绿的花朵，喇叭袖轻扬蕾丝花边，亮粉围腰绽放繁花，粉色刺绣绑腿系带，尽显绚丽匠心。',
    hotspots: [
      {part:'head', left:50, top:13},
      {part:'top',  left:50, top:35},
      {part:'waist',left:50, top:54},
      {part:'leg',  left:30, top:72},
      {part:'silver',left:70, top:34}
    ],
    parts: {
      head:  {name:'粉紫螺旋纹圆盘帽', sub:'垂白珠流苏', img:'images/mile/parts/head.jpg',
        desc:'<p><strong>形制：</strong>粉紫圆筒帽，螺旋纹饰，帽沿垂黑白流苏。</p>'},
      top:   {name:'玫红绿叶刺绣上衣', sub:'喇叭袖蕾丝', img:'images/mile/parts/top.jpg',
        desc:'<p><strong>形制：</strong>立领长袖，满布红绿粉黑几何与花卉刺绣，喇叭袖带蕾丝花边。</p><p><strong>工艺：</strong>彩绣密集，色彩明快。</p>'},
      waist: {name:'花卉刺绣围腰', sub:'绿底红花', img:'images/mile/parts/waist.jpg',
        desc:'<p><strong>形制：</strong>宽腰带加前片围裙，中央绿底红花。</p>'},
      leg:   {name:'粉色刺绣绑腿', sub:'系带靴套', img:'images/mile/parts/leg.jpg',
        desc:'<p><strong>形制：</strong>粉紫花纹绑腿靴套，系带固定。</p>'},
      silver:{name:'银耳饰', sub:'点缀', img:'images/mile/parts/silver.jpg',
        desc:'<p><strong>形制：</strong>银耳饰搭配。</p>'}
    }
  },
  {
    key: 'mengzi', name: '蒙自', motto: '看盛装',
    subtitle: '蒙自 · 圆盘帽与繁花盛装',
    thumb: 'images/mengzi/thumb.jpg',
    avatar: 'images/mengzi/avatar.jpg',
    video: 'videos/mengzi/intro.mp4',
    desc: '蒙自苗族（歪梳苗/蒙刷支系）盛装华丽。宽檐黑帽配白色流苏与彩色坠饰，深紫绒面立领上衣配彩色几何刺绣，大面积花卉刺绣围腰与蓝紫百褶裙交相辉映，精致绑腿点缀。',
    hotspots: [
      {part:'head', left:50, top:13},
      {part:'top',  left:50, top:35},
      {part:'waist',left:50, top:54},
      {part:'skirt',left:50, top:74},
      {part:'leg',  left:30, top:76}
    ],
    parts: {
      head:  {name:'宽檐黑帽', sub:'白流苏彩坠', img:'images/mengzi/parts/head.jpg',
        desc:'<p><strong>形制：</strong>宽檐黑帽，帽沿饰白色流苏与彩色坠饰。</p>'},
      top:   {name:'深紫绒面刺绣上衣', sub:'彩色几何纹', img:'images/mengzi/parts/top.jpg',
        desc:'<p><strong>形制：</strong>深紫立领长袖，粉紫青彩色刺绣，肩胸垂多彩流苏。</p>'},
      waist: {name:'花卉刺绣围腰', sub:'几何彩条', img:'images/mengzi/parts/waist.jpg',
        desc:'<p><strong>形制：</strong>黑色长裙配粉色花卉刺绣、几何纹与横向彩条，底部粉红流苏。</p>'},
      skirt: {name:'黑色长裙', sub:'彩条流苏', img:'images/mengzi/parts/skirt.jpg',
        desc:'<p><strong>形制：</strong>黑色长裙，腰腹至裙摆有彩条与流苏。</p>'},
      leg:   {name:'彩色刺绣绑腿', sub:'配套点缀', img:'images/mengzi/parts/leg.jpg',
        desc:'<p><strong>形制：</strong>紫粉花纹绑腿，呼应上衣色彩。</p>'}
    }
  }
];
