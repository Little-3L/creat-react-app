import React, { Component } from 'react'
import FilterableComicTable from
  '../FilterTable/FilterableComicTable'

//SearchBar组件数据
const COMIC = [
  { category: '治愈', unfinished: true, Rtype: false, name: '夏目友人帐 陆', Ustate: '完结', Udate: '全11话', Ctype: '日漫', TextIntro: '从小就能看见妖怪的少年夏目贵志。自从他从祖母玲子那里继承了与妖怪成为主从并将其名字书写在上的契约书“友人帐”以来，便与自称为保镖的妖怪猫咪老师一同，开始了将名字返还给妖怪的每一天。夏目与各种各样的妖怪与善良人们相遇，在构筑温暖的场所同时，也反复寄托着想要守护重要之物的想法。' },
  { category: '治愈', unfinished: false, Rtype: true, name: '一禅小和尚', Ustate: '更新至82话', Udate: '每周一更新', Ctype: '国漫', TextIntro: '讲述了小和尚一禅和师父以及身边各种人和事，并从中领悟人生的道理，领会身处尘世的芸芸众生的喜怒哀乐，怨憎会爱别离与求不得。用小和尚的视角看世界，用老和尚的话语去阐述人生的各种道理。' },
  { category: '治愈', unfinished: false, Rtype: true, name: '罗小黑战记', Ustate: '更新至27话', Udate: '每年瞎更新', Ctype: '国漫', TextIntro: '猫妖盗取天明珠被谛听发现，被打回原形重伤而逃。在流落街头的时候被罗小白带回了家，起名罗小黑。故事就这样开始了…' },
  { category: '搞笑', unfinished: true, Rtype: false, name: '在下版本，有何贵干？', Ustate: '完结', Udate: '全13话', Ctype: '日漫', TextIntro: '于日本县立学文高中之中，有一名叫坂本的全能高中生，平常总是用著各种超乎常理的无厘头行为来完成各种琐事，导致周遭所有女性同学都对他钦佩绝倒，同时也引起所有男性同学的无限嫉妒。但不管面对其他人如何刁难，坂本总是能用各种帅气方式来让他人甘拜下风。' },
  { category: '搞笑', unfinished: false, Rtype: true, name: '十万个冷笑话第三季', Ustate: '更新至番外篇', Udate: '不定期更新', Ctype: '国漫', TextIntro: '很多经典篇章将继续延续他们的故事，比如哪吒篇、一代宗师篇、金斧头银斧头篇，而那些我们熟悉或不熟悉的主人公们（哪吒、李靖、小金刚、白雪公主，马拉马，杰克，爱丽丝等）也会以全新的姿态演绎属于自己的传奇搞笑故事' },
  { category: '搞笑', unfinished: true, Rtype: false, name: '月刊少女野崎君', Ustate: '完结', Udate: '全12话', Ctype: '日漫', TextIntro: '一张签名引发的血案…每周一次腹肌炼成！不一样的少（dou）女（bi）番！ 高中女生佐仓千代好不容易提起勇气向同年级的野崎梅太郎告白，得到的却是野崎的亲笔签名，和“要不要来我家？”的邀请。佐仓虽然对意料之外的展开感到困惑，却还是带着期待来到野崎家，没想到等着她的却是漫画原稿；不知不觉间就顺着野崎的指示开始进行涂黑作业。到这时佐仓才发现野崎是知名少女漫画家梦野咲子。' },
  { category: '搞笑', unfinished: false, Rtype: false, name: '银魂', Ustate: '更新至341话', Udate: '每周一更新', Ctype: '日漫', TextIntro: '江户时代末期，被称为“天人”的谜之异星人来袭。于是地球人与天人之间的战争瞬即爆发，为数众多的武士和攘夷派志士都参与与天人的战斗。 幕府见识到天人强大的实力后，最终向天人低头，放弃武士不管，擅自与天人签订不平等条约，准许他们入国。其后更颁布了“废刀令”，夺走了武士的刀，使他们无力反抗。自此，天人横行霸道，幕府为天人所影响，甚至被控制，成为了“傀儡政权”。 在这样的时代，有一个武士与同伴愉快地过着异想天开的生活。' },
  { category: '搞笑', unfinished: true, Rtype: false, name: '银仙', Ustate: '完结', Udate: '全12话', Ctype: '日漫', TextIntro: '一人独自生活的市松小雏是个缺乏常识的电波族，某天她在玩弄银仙的过程中，召唤来了一把年纪的狐耳男性——自称“银松”的帅哥妖怪。妖怪对自称“人偶”的电波族市松的不健康生活形态感到担心，忍不住留下来来照顾她……一场超虚脱系又不可思议的搞笑故事就此开演。' },
  { category: '热血', unfinished: true, Rtype: true, name: '镇魂街第一季', Ustate: '完结', Udate: '全24话', Ctype: '国漫', TextIntro: '普通的应届大学毕业生夏铃在求职之际，收到了一条奇怪的面试通知，因此误入罗刹街并遭到了危险，幸而被镇魂将曹焱兵搭救。然而接触中，曹焱兵却发现，夏铃也是寄灵人。与此同时，夏铃开始遭到不明身份刺客的追杀，曹焱兵亦被卷入其中，二人的命运从此开始了交集，而在这一切的背后，似乎还隐藏着某些更加危险的秘密……' },
  { category: '热血', unfinished: true, Rtype: true, name: '画江湖之不良人', Ustate: '完结', Udate: '全54话', Ctype: '国漫', TextIntro: '这部动画描述了交织着战乱与黑暗的唐末时期，几位主角于乱世里经历了青春与爱情、背叛与忠诚的沧桑变幻、悲喜轮回 ，最终成为了终结这个时代开创新纪元的决定性力量，是一段浪漫辉煌的中国式武侠历史传奇故事。' },
  { category: '热血', unfinished: true, Rtype: false, name: '宝石之国', Ustate: '完结', Udate: '全12话', Ctype: '日漫', TextIntro: '以遥远的未来为舞台，地上的生物沉入了海底，被微生物吃掉成为无机物体。由于长时间的结晶变成宝石生命体的存在。那个拥有宝石身体的28人，与袭击他们打算将其作为装饰品的月人展开了一场又一场的战斗。' },
  { category: '热血', unfinished: true, Rtype: true, name: '全职高手', Ustate: '完结', Udate: '全12话', Ctype: '国漫', TextIntro: '根据蝴蝶蓝同名电子游戏竞技小说改编，一个被战队驱逐的超级职业选手离开老东家，进入网吧自行组建战队，结识了形形色色的优秀队员，打挑战赛杀回了《荣耀》的职业联盟，并获得了最高的荣誉重回巅峰。' },
  { category: '热血', unfinished: true, Rtype: true, name: '画江湖之灵主', Ustate: '完结', Udate: '全41话', Ctype: '国漫', TextIntro: '世人分为两种，一种为活人办事的普通人，而另一种为死人办差的活死人。他们活着只是为生前留有遗憾而死不瞑目的亡灵完成未偿的遗愿。这部动画定名为《画江湖之灵主》是因为整个故事都围绕着“灵主”这一名词展开，随着故事的推进，“灵主”的秘密也渐渐被揭开。' },
  { category: '萌系', unfinished: true, Rtype: false, name: '小林家的龙女仆', Ustate: '完结', Udate: '全13话', Ctype: '日漫', TextIntro: '在单身的辛苦OL小林身边突然出现的女仆装束的美少女托尔。 长着角和尾巴的她的身姿正是所谓的龙娘。 在醉酒的小林邀请下说要到家里去的托尔，鬼使神差地开始以小林家女仆的身份工作……！？ “女仆”+“龙”=“女仆龙”有着笨手笨脚的可爱之处！ 龙娘与人类之间基本上很温暖、偶尔有些黑暗的异种族间交流喜剧！！' },
  { category: '萌系', unfinished: true, Rtype: false, name: '干物妹！小埋', Ustate: '完结', Udate: '全12话', Ctype: '日漫', TextIntro: '我的妹妹小埋16岁，完美的妹妹，完美的高中生，但在家里却是个超懒的干物妹。 然而妹妹在家的一切她生活中的朋友并不知道，居住在同一栋楼的天然少女，以及无意间来到我家的冷酷少女，她们会发现小埋的真实面目吗？' },
]

class Search extends Component {
  render() {
    return (
      <div>
        < FilterableComicTable comics={COMIC} />
      </div>
    );
  }
};

export default Search