// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { //required first slide
    title: "Start Here", 
    subtitle: "Introduction to daily activities and conversations", 
    icon: "📍"
    },
    { 
        title: "日常生活", 
        subtitle: "Daily Routine", 
        icon: "🏠"
    },
    { 
        title: "運動愛好", 
        subtitle: "Sports & Hobbies", 
        icon: "⚽"
    },
    { 
        title: "網路時代", 
        subtitle: "Internet Age", 
        icon: "💻"
    },
    { 
        title: "娛樂活動", 
        subtitle: "Entertainment Activities", 
        icon: "🎬"
    },
    { 
        title: "社交聊天", 
        subtitle: "Social Chatting", 
        icon: "💬"
    },
    { 
        title: "時間表達", 
        subtitle: "Time Expressions", 
        icon: "🕒"
    },
    { 
        title: "禮貌用語", 
        subtitle: "Polite Expressions", 
        icon: "🙏"
    },
    { 
        title: "郵寄與銀行", 
        subtitle: "Post Office & Bank", 
        icon: "🏦"
    },
    { 
        title: "幫助與支持", 
        subtitle: "Help & Support", 
        icon: "🤝"
    },
    { 
        title: "認識新朋友", 
        subtitle: "Meeting New Friends", 
        icon: "👋"
    },
    { 
        title: "最近的生活", 
        subtitle: "Recent Life", 
        icon: "📅"
    },
    { 
        title: "遇到問題", 
        subtitle: "Encountering Problems", 
        icon: "🤔"
    },
    { 
        title: "周末計劃", 
        subtitle: "Weekend Plans", 
        icon: "📋"
    },
    { 
        title: "搬家故事", 
        subtitle: "Moving Story", 
        icon: "📦"
    },
    { 
        title: "新年慶祝", 
        subtitle: "New Year Celebration", 
        icon: "🎊"
    },
    { 
        title: "體育比賽", 
        subtitle: "Sports Competition", 
        icon: "🏆"
    },
    { 
        title: "網絡習慣", 
        subtitle: "Internet Habits", 
        icon: "📱"
    },
    { 
        title: "日常生活對話", 
        subtitle: "Daily Life Conversation", 
        icon: "🗣️"
    },
    { //required review slide
        title: "Vocabulary Review", 
        subtitle: "80 Words Mastery", 
        icon: "📖" 
    },
    { //required last slide
        title: "Course Complete", 
        subtitle: "Congratulations!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    { chinese: "洗澡", pinyin: "xǐzǎo", english: "to take a bath/shower", audio: "audio/part4/words/xizao.mp3" },
    { chinese: "有空/有空兒", pinyin: "yǒu kòng/yǒu kòngr", english: "to have free time", audio: "audio/part4/words/youkong.mp3" },
    { chinese: "發現", pinyin: "fāxiàn", english: "to discover", audio: "audio/part4/words/faxian.mp3" },
    { chinese: "餐", pinyin: "cān", english: "meal", audio: "audio/part4/words/can.mp3" },
    { chinese: "搬", pinyin: "bān", english: "to move (house)", audio: "audio/part4/words/ban.mp3" },
    { chinese: "掛", pinyin: "guà", english: "to hang", audio: "audio/part4/words/gua.mp3" },
    { chinese: "脫", pinyin: "tuō", english: "to take off", audio: "audio/part4/words/tuo.mp3" },
    { chinese: "過年", pinyin: "guònián", english: "to celebrate Chinese New Year", audio: "audio/part4/words/guonian.mp3" },
    { chinese: "新年", pinyin: "xīnnián", english: "New Year", audio: "audio/part4/words/xinnian.mp3" },
    { chinese: "游泳", pinyin: "yóuyǒng", english: "to swim", audio: "audio/part4/words/youyong.mp3" },
    { chinese: "跑/跑步", pinyin: "pǎo/pǎobù", english: "to run/running", audio: "audio/part4/words/paobu.mp3" },
    { chinese: "踢", pinyin: "tī", english: "to kick", audio: "audio/part4/words/ti.mp3" },
    { chinese: "足球", pinyin: "zúqiú", english: "soccer/football", audio: "audio/part4/words/zuqiu.mp3" },
    { chinese: "籃球", pinyin: "lánqiú", english: "basketball", audio: "audio/part4/words/lanqiu.mp3" },
    { chinese: "網球", pinyin: "wǎngqiú", english: "tennis", audio: "audio/part4/words/wangqiu.mp3" },
    { chinese: "棒球", pinyin: "bàngqiú", english: "baseball", audio: "audio/part4/words/bangqiu.mp3" },
    { chinese: "比賽", pinyin: "bǐsài", english: "competition/match", audio: "audio/part4/words/bisai.mp3" },
    { chinese: "開始", pinyin: "kāishǐ", english: "to start", audio: "audio/part4/words/kaishi.mp3" },
    { chinese: "騎", pinyin: "qí", english: "to ride", audio: "audio/part4/words/qi.mp3" },
    { chinese: "腳踏車/自行車", pinyin: "jiǎotàchē/zìxíngchē", english: "bicycle", audio: "audio/part4/words/jiaotache.mp3" },
    { chinese: "上網", pinyin: "shàngwǎng", english: "to surf the internet", audio: "audio/part4/words/shangwang.mp3" },
    { chinese: "網路", pinyin: "wǎnglù", english: "internet/network", audio: "audio/part4/words/wanglu.mp3" },
    { chinese: "網站", pinyin: "wǎngzhàn", english: "website", audio: "audio/part4/words/wangzhan.mp3" },
    { chinese: "報紙", pinyin: "bàozhǐ", english: "newspaper", audio: "audio/part4/words/baozhi.mp3" },
    { chinese: "次", pinyin: "cì", english: "times/occurrence", audio: "audio/part4/words/ci.mp3" },
    { chinese: "電影院", pinyin: "diànyǐngyuàn", english: "cinema/movie theater", audio: "audio/part4/words/dianyingyuan.mp3" },
    { chinese: "部", pinyin: "bù", english: "measure word for movies", audio: "audio/part4/words/bu.mp3" },
    { chinese: "場", pinyin: "chǎng", english: "measure word for events/games", audio: "audio/part4/words/chang.mp3" },
    { chinese: "音樂", pinyin: "yīnyuè", english: "music", audio: "audio/part4/words/yinyue.mp3" },
    { chinese: "票", pinyin: "piào", english: "ticket", audio: "audio/part4/words/piao.mp3" },
    { chinese: "活動", pinyin: "huódòng", english: "activity/event", audio: "audio/part4/words/huodong.mp3" },
    { chinese: "故事", pinyin: "gùshi", english: "story", audio: "audio/part4/words/gushi.mp3" },
    { chinese: "聊天/聊天兒", pinyin: "liáotiān/liáotiānr", english: "to chat", audio: "audio/part4/words/liaotian.mp3" },
    { chinese: "有時候/有時", pinyin: "yǒu shíhòu/yǒu shí", english: "sometimes", audio: "audio/part4/words/youshihou.mp3" },
    { chinese: "平常", pinyin: "píngcháng", english: "usually/ordinarily", audio: "audio/part4/words/pingchang.mp3" },
    { chinese: "總是", pinyin: "zǒngshì", english: "always", audio: "audio/part4/words/zongshi.mp3" },
    { chinese: "已經", pinyin: "yǐjīng", english: "already", audio: "audio/part4/words/yijing.mp3" },
    { chinese: "後來", pinyin: "hòulái", english: "later/afterwards", audio: "audio/part4/words/houlai.mp3" },
    { chinese: "各", pinyin: "gè", english: "each/every", audio: "audio/part4/words/ge.mp3" },
    { chinese: "變", pinyin: "biàn", english: "to change", audio: "audio/part4/words/bian.mp3" },
    { chinese: "才", pinyin: "cái", english: "only then", audio: "audio/part4/words/cai.mp3" },
    { chinese: "客人", pinyin: "kèrén", english: "guest/visitor", audio: "audio/part4/words/keren.mp3" },
    { chinese: "客氣", pinyin: "kèqi", english: "polite", audio: "audio/part4/words/keqi.mp3" },
    { chinese: "不客氣", pinyin: "bú kèqi", english: "you're welcome", audio: "audio/part4/words/bukeqi.mp3" },
    { chinese: "不好意思", pinyin: "bù hǎo yìsi", english: "excuse me/sorry", audio: "audio/part4/words/buhaoyisi.mp3" },
    { chinese: "喂", pinyin: "wéi", english: "hello (on phone)", audio: "audio/part4/words/wei2.mp3" },
    { chinese: "喂", pinyin: "wèi", english: "hey (to get attention)", audio: "audio/part4/words/wei4.mp3" },
    { chinese: "麻煩", pinyin: "máfan", english: "troublesome", audio: "audio/part4/words/mafan.mp3" },
    { chinese: "禮物", pinyin: "lǐwù", english: "gift/present", audio: "audio/part4/words/liwu.mp3" },
    { chinese: "歡迎", pinyin: "huānyíng", english: "welcome", audio: "audio/part4/words/huanying.mp3" },
    { chinese: "寄", pinyin: "jì", english: "to send/mail", audio: "audio/part4/words/ji.mp3" },
    { chinese: "接", pinyin: "jiē", english: "to receive/pick up", audio: "audio/part4/words/jie.mp3" },
    { chinese: "郵局", pinyin: "yóujú", english: "post office", audio: "audio/part4/words/youju.mp3" },
    { chinese: "銀行", pinyin: "yínháng", english: "bank", audio: "audio/part4/words/yinhang.mp3" },
    { chinese: "壞", pinyin: "huài", english: "bad/broken", audio: "audio/part4/words/huai.mp3" },
    { chinese: "幫忙", pinyin: "bāngmáng", english: "to help/help", audio: "audio/part4/words/bangmang.mp3" },
    { chinese: "幫助", pinyin: "bāngzhù", english: "to help/assistance", audio: "audio/part4/words/bangzhu.mp3" },
    { chinese: "小朋友", pinyin: "xiǎo péngyǒu", english: "child/kids", audio: "audio/part4/words/xiaopengyou.mp3" },
    { chinese: "信", pinyin: "xìn", english: "letter", audio: "audio/part4/words/xin.mp3" },
    { chinese: "信封", pinyin: "xìnfēng", english: "envelope", audio: "audio/part4/words/xinfeng.mp3" },
    { chinese: "認識", pinyin: "rènshi", english: "to know/recognize", audio: "audio/part4/words/renshi.mp3" },
    { chinese: "最近", pinyin: "zuìjìn", english: "recently/lately", audio: "audio/part4/words/zuijin.mp3" },
    { chinese: "聽說", pinyin: "tīngshuō", english: "to hear of/about", audio: "audio/part4/words/tingshuo.mp3" },
    { chinese: "見面", pinyin: "jiànmiàn", english: "to meet", audio: "audio/part4/words/jianmian.mp3" },
    { chinese: "事情", pinyin: "shìqing", english: "matter/affair", audio: "audio/part4/words/shiqing.mp3" },
    { chinese: "幫", pinyin: "bāng", english: "to help", audio: "audio/part4/words/bang.mp3" },
    { chinese: "錢包", pinyin: "qiánbāo", english: "wallet", audio: "audio/part4/words/qianbao.mp3" },
    { chinese: "拉", pinyin: "lā", english: "to pull", audio: "audio/part4/words/la.mp3" },
    { chinese: "啊", pinyin: "a", english: "ah/oh (exclamation)", audio: "audio/part4/words/a.mp3" },
    { chinese: "怎麼辦", pinyin: "zěnmebàn", english: "what to do/how to handle", audio: "audio/part4/words/zenmeban.mp3" },
    { chinese: "車站", pinyin: "chēzhàn", english: "station (bus/train)", audio: "audio/part4/words/chezhan.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "忙碌的早晨",
        titleTranslation: "Busy Morning",
        context: "Two friends discussing their morning routines",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='平常'>平常</span>早上六點<span class='vocab-highlight' data-word='起床'>起床</span>，先<span class='vocab-highlight' data-word='洗澡'>洗澡</span>，然後吃早<span class='vocab-highlight' data-word='餐'>餐</span>。",
                pinyin: "Wǒ píngcháng zǎoshang liù diǎn qǐchuáng, xiān xǐzǎo, ránhòu chī zǎocān.",
                english: "I usually get up at 6 AM, first take a shower, then eat breakfast.",
                audio: "audio/part4/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='總是'>總是</span>七點才起來。今天<span class='vocab-highlight' data-word='發現'>發現</span>鬧鐘壞了，<span class='vocab-highlight' data-word='已經'>已經</span>遲到了。",
                pinyin: "Wǒ zǒngshì qī diǎn cái qǐlái. Jīntiān fāxiàn nàozhōng huài le, yǐjīng chídào le.",
                english: "I always get up at 7. Today I discovered my alarm clock was broken, I'm already late.",
                audio: "audio/part4/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "下午<span class='vocab-highlight' data-word='有空'>有空</span>嗎？我們可以一起去<span class='vocab-highlight' data-word='跑步'>跑步</span>。",
                pinyin: "Xiàwǔ yǒu kòng ma? Wǒmen kěyǐ yīqǐ qù pǎobù.",
                english: "Are you free this afternoon? We can go running together.",
                audio: "audio/part4/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好啊，我<span class='vocab-highlight' data-word='後來'>後來</span><span class='vocab-highlight' data-word='發現'>發現</span>運動讓身體<span class='vocab-highlight' data-word='變'>變</span>健康了。",
                pinyin: "Hǎo a, wǒ hòulái fāxiàn yùndòng ràng shēntǐ biàn jiànkāng le.",
                english: "Great, I later discovered that exercise makes the body become healthier.",
                audio: "audio/part4/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "運動愛好",
        titleTranslation: "Sports Hobbies",
        context: "Talking about different sports preferences",
        lines: [
            {
                speaker: "A",
                chinese: "你喜歡什麼運動？我<span class='vocab-highlight' data-word='平常'>平常</span>喜歡<span class='vocab-highlight' data-word='游泳'>游泳</span>和<span class='vocab-highlight' data-word='踢'>踢</span><span class='vocab-highlight' data-word='足球'>足球</span>。",
                pinyin: "Nǐ xǐhuān shénme yùndòng? Wǒ píngcháng xǐhuān yóuyǒng hé tī zúqiú.",
                english: "What sports do you like? I usually like swimming and playing soccer.",
                audio: "audio/part4/dialogue2/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我更喜歡<span class='vocab-highlight' data-word='籃球'>籃球</span>和<span class='vocab-highlight' data-word='網球'>網球</span>。<span class='vocab-highlight' data-word='有時候'>有時候</span>也看<span class='vocab-highlight' data-word='棒球'>棒球</span><span class='vocab-highlight' data-word='比賽'>比賽</span>。",
                pinyin: "Wǒ gèng xǐhuān lánqiú hé wǎngqiú. Yǒu shíhòu yě kàn bàngqiú bǐsài.",
                english: "I prefer basketball and tennis. Sometimes I also watch baseball games.",
                audio: "audio/part4/dialogue2/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "這周末有<span class='vocab-highlight' data-word='一場'>一場</span><span class='vocab-highlight' data-word='足球'>足球</span><span class='vocab-highlight' data-word='比賽'>比賽</span>，<span class='vocab-highlight' data-word='開始'>開始</span>時間是下午三點。",
                pinyin: "Zhè zhōumò yǒu yī chǎng zúqiú bǐsài, kāishǐ shíjiān shì xiàwǔ sān diǎn.",
                english: "There's a soccer game this weekend, starting at 3 PM.",
                audio: "audio/part4/dialogue2/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我可以<span class='vocab-highlight' data-word='騎'>騎</span><span class='vocab-highlight' data-word='腳踏車'>腳踏車</span>去體育場。你<span class='vocab-highlight' data-word='總是'>總是</span>走路去嗎？",
                pinyin: "Wǒ kěyǐ qí jiǎotàchē qù tǐyùchǎng. Nǐ zǒngshì zǒulù qù ma?",
                english: "I can ride my bicycle to the stadium. Do you always walk there?",
                audio: "audio/part4/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "網路時代",
        titleTranslation: "Internet Age",
        context: "Discussing internet usage habits",
        lines: [
            {
                speaker: "A",
                chinese: "你<span class='vocab-highlight' data-word='平常'>平常</span>用<span class='vocab-highlight' data-word='網路'>網路</span>做什麼？我<span class='vocab-highlight' data-word='總是'>總是</span>看新聞<span class='vocab-highlight' data-word='網站'>網站</span>。",
                pinyin: "Nǐ píngcháng yòng wǎnglù zuò shénme? Wǒ zǒngshì kàn xīnwén wǎngzhàn.",
                english: "What do you usually do online? I always read news websites.",
                audio: "audio/part4/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='上網'>上網</span>看電影和<span class='vocab-highlight' data-word='聊天'>聊天</span>。<span class='vocab-highlight' data-word='有時候'>有時候</span>也買東西。你<span class='vocab-highlight' data-word='已經'>已經</span>不看<span class='vocab-highlight' data-word='報紙'>報紙</span>了嗎？",
                pinyin: "Wǒ shàngwǎng kàn diànyǐng hé liáotiān. Yǒu shíhòu yě mǎi dōngxi. Nǐ yǐjīng bù kàn bàozhǐ le ma?",
                english: "I go online to watch movies and chat. Sometimes I also shop. Do you no longer read newspapers?",
                audio: "audio/part4/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "很少看了。<span class='vocab-highlight' data-word='最近'>最近</span><span class='vocab-highlight' data-word='發現'>發現</span>很多新聞<span class='vocab-highlight' data-word='網站'>網站</span>更快。一<span class='vocab-highlight' data-word='次'>次</span>可以看很多<span class='vocab-highlight' data-word='故事'>故事</span>。",
                pinyin: "Hěn shǎo kàn le. Zuìjìn fāxiàn hěn duō xīnwén wǎngzhàn gèng kuài. Yī cì kěyǐ kàn hěn duō gùshi.",
                english: "Rarely. Recently I discovered many news websites are faster. At one time I can read many stories.",
                audio: "audio/part4/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "對，科技讓生活<span class='vocab-highlight' data-word='變'>變</span>方便了。但<span class='vocab-highlight' data-word='有時候'>有時候</span>我還是喜歡紙的<span class='vocab-highlight' data-word='報紙'>報紙</span>。",
                pinyin: "Duì, kējì ràng shēnghuó biàn fāngbiàn le. Dàn yǒu shíhòu wǒ háishì xǐhuān zhǐ de bàozhǐ.",
                english: "Right, technology makes life more convenient. But sometimes I still like paper newspapers.",
                audio: "audio/part4/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "周末計劃",
        titleTranslation: "Weekend Plans",
        context: "Making plans for the weekend",
        lines: [
            {
                speaker: "A",
                chinese: "周末<span class='vocab-highlight' data-word='有空'>有空</span>嗎？我們去看一<span class='vocab-highlight' data-word='部'>部</span>電影吧。",
                pinyin: "Zhōumò yǒu kòng ma? Wǒmen qù kàn yī bù diànyǐng ba.",
                english: "Are you free this weekend? Let's go watch a movie.",
                audio: "audio/part4/dialogue4/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "好啊！哪個<span class='vocab-highlight' data-word='電影院'>電影院</span>？<span class='vocab-highlight' data-word='最近'>最近</span><span class='vocab-highlight' data-word='發現'>發現</span>新開了一間。",
                pinyin: "Hǎo a! Nǎge diànyǐngyuàn? Zuìjìn fāxiàn xīn kāi le yī jiān.",
                english: "Great! Which cinema? Recently I discovered a new one just opened.",
                audio: "audio/part4/dialogue4/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "中心<span class='vocab-highlight' data-word='車站'>車站</span>旁邊那間。我們可以買下午的<span class='vocab-highlight' data-word='票'>票</span>。",
                pinyin: "Zhōngxīn chēzhàn pángbiān nà jiān. Wǒmen kěyǐ mǎi xiàwǔ de piào.",
                english: "The one next to the central station. We can buy afternoon tickets.",
                audio: "audio/part4/dialogue4/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "太好了！<span class='vocab-highlight' data-word='後來'>後來</span>我們還可以吃晚<span class='vocab-highlight' data-word='餐'>餐</span>。我<span class='vocab-highlight' data-word='總是'>總是</span>喜歡那裡的餐廳。",
                pinyin: "Tài hǎo le! Hòulái wǒmen hái kěyǐ chī wǎncān. Wǒ zǒngshì xǐhuān nàlǐ de cāntīng.",
                english: "Great! Later we can also have dinner. I always like the restaurants there.",
                audio: "audio/part4/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "音樂會門票",
        titleTranslation: "Concert Tickets",
        context: "Discussing buying tickets for a music event",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='聽說'>聽說</span>下個月有<span class='vocab-highlight' data-word='一場'>一場</span><span class='vocab-highlight' data-word='音樂'>音樂</span>會，你想去嗎？",
                pinyin: "Tīngshuō xià gè yuè yǒu yī chǎng yīnyuè huì, nǐ xiǎng qù ma?",
                english: "I heard there's a concert next month, do you want to go?",
                audio: "audio/part4/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "當然！<span class='vocab-highlight' data-word='已經'>已經</span>可以買<span class='vocab-highlight' data-word='票'>票</span>了嗎？這種<span class='vocab-highlight' data-word='活動'>活動</span><span class='vocab-highlight' data-word='總是'>總是</span>很快賣完。",
                pinyin: "Dāngrán! Yǐjīng kěyǐ mǎi piào le ma? Zhè zhǒng huódòng zǒngshì hěn kuài mài wán.",
                english: "Of course! Can we buy tickets already? This kind of activity always sells out quickly.",
                audio: "audio/part4/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "明天<span class='vocab-highlight' data-word='開始'>開始</span>賣票。我們可以<span class='vocab-highlight' data-word='上網'>上網</span>買。",
                pinyin: "Míngtiān kāishǐ mài piào. Wǒmen kěyǐ shàngwǎng mǎi.",
                english: "Tickets go on sale tomorrow. We can buy them online.",
                audio: "audio/part4/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，我<span class='vocab-highlight' data-word='平常'>平常</span>都這樣買票。我們買兩<span class='vocab-highlight' data-word='次'>次</span>吧，<span class='vocab-highlight' data-word='各'>各</span>一張。",
                pinyin: "Hǎo de, wǒ píngcháng dōu zhèyàng mǎi piào. Wǒmen mǎi liǎng cì ba, gè yī zhāng.",
                english: "OK, I usually buy tickets this way. Let's buy two times, one each.",
                audio: "audio/part4/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "社交聊天",
        titleTranslation: "Social Chatting",
        context: "Talking about social habits and meeting people",
        lines: [
            {
                speaker: "A",
                chinese: "你<span class='vocab-highlight' data-word='平常'>平常</span>喜歡跟朋友<span class='vocab-highlight' data-word='聊天'>聊天</span>嗎？",
                pinyin: "Nǐ píngcháng xǐhuān gēn péngyǒu liáotiān ma?",
                english: "Do you usually like chatting with friends?",
                audio: "audio/part4/dialogue6/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='有時候'>有時候</span>。<span class='vocab-highlight' data-word='最近'>最近</span><span class='vocab-highlight' data-word='發現'>發現</span>很多人在網上<span class='vocab-highlight' data-word='聊天'>聊天</span>。",
                pinyin: "Yǒu shíhòu. Zuìjìn fāxiàn hěn duō rén zài wǎng shàng liáotiān.",
                english: "Sometimes. Recently I discovered many people chat online.",
                audio: "audio/part4/dialogue6/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='總是'>總是</span>喜歡面對面<span class='vocab-highlight' data-word='見面'>見面</span>。這樣可以聽很多有趣的<span class='vocab-highlight' data-word='故事'>故事</span>。",
                pinyin: "Wǒ zǒngshì xǐhuān miàn duì miàn jiànmiàn. Zhèyàng kěyǐ tīng hěn duō yǒuqù de gùshi.",
                english: "I always prefer meeting face to face. This way I can hear many interesting stories.",
                audio: "audio/part4/dialogue6/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "對，<span class='vocab-highlight' data-word='後來'>後來</span>我還記得那些<span class='vocab-highlight' data-word='故事'>故事</span>。明天我們一起喝咖啡<span class='vocab-highlight' data-word='聊天'>聊天</span>吧。",
                pinyin: "Duì, hòulái wǒ hái jìdé nàxiē gùshi. Míngtiān wǒmen yīqǐ hē kāfēi liáotiān ba.",
                english: "Right, later I can still remember those stories. Let's have coffee and chat tomorrow.",
                audio: "audio/part4/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "時間表達",
        titleTranslation: "Time Expressions",
        context: "Discussing schedules and time management",
        lines: [
            {
                speaker: "A",
                chinese: "你<span class='vocab-highlight' data-word='總是'>總是</span>很忙嗎？<span class='vocab-highlight' data-word='有時候'>有時候</span>打電話給你，你<span class='vocab-highlight' data-word='已經'>已經</span>睡了。",
                pinyin: "Nǐ zǒngshì hěn máng ma? Yǒu shíhòu dǎ diànhuà gěi nǐ, nǐ yǐjīng shuì le.",
                english: "Are you always busy? Sometimes when I call you, you're already asleep.",
                audio: "audio/part4/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='平常'>平常</span>工作到很晚。<span class='vocab-highlight' data-word='後來'>後來</span>我<span class='vocab-highlight' data-word='發現'>發現</span>早點睡比較好。",
                pinyin: "Píngcháng gōngzuò dào hěn wǎn. Hòulái wǒ fāxiàn zǎo diǎn shuì bǐjiào hǎo.",
                english: "Usually I work until late. Later I discovered it's better to sleep earlier.",
                audio: "audio/part4/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對，健康很重要。你<span class='vocab-highlight' data-word='什麼時候'>什麼時候</span><span class='vocab-highlight' data-word='有空'>有空</span>？我們可以早點<span class='vocab-highlight' data-word='見面'>見面</span>。",
                pinyin: "Duì, jiànkāng hěn zhòngyào. Nǐ shénme shíhòu yǒu kòng? Wǒmen kěyǐ zǎo diǎn jiànmiàn.",
                english: "Right, health is important. When are you free? We can meet earlier.",
                audio: "audio/part4/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "周末早上我<span class='vocab-highlight' data-word='總是'>總是</span><span class='vocab-highlight' data-word='有空'>有空</span>。那時候人少，很安靜。",
                pinyin: "Zhōumò zǎoshang wǒ zǒngshì yǒu kòng. Nà shíhòu rén shǎo, hěn ānjìng.",
                english: "I'm always free on weekend mornings. At that time there are few people, very quiet.",
                audio: "audio/part4/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "禮貌用語",
        titleTranslation: "Polite Expressions",
        context: "Using polite expressions in conversation",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='喂'>喂</span>，你好！<span class='vocab-highlight' data-word='最近'>最近</span>好嗎？",
                pinyin: "Wéi, nǐ hǎo! Zuìjìn hǎo ma?",
                english: "Hello, how are you! How have you been recently?",
                audio: "audio/part4/dialogue8/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "很好，謝謝！你太<span class='vocab-highlight' data-word='客氣'>客氣</span>了。今天來我家吃飯吧，我<span class='vocab-highlight' data-word='歡迎'>歡迎</span>你來。",
                pinyin: "Hěn hǎo, xièxie! Nǐ tài kèqi le. Jīntiān lái wǒ jiā chīfàn ba, wǒ huānyíng nǐ lái.",
                english: "Very good, thank you! You're too polite. Come to my house for dinner today, I welcome you.",
                audio: "audio/part4/dialogue8/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='不好意思'>不好意思</span>，我今天<span class='vocab-highlight' data-word='已經'>已經</span>有安排了。下次吧！",
                pinyin: "Bù hǎo yìsi, wǒ jīntiān yǐjīng yǒu ānpái le. Xià cì ba!",
                english: "Sorry, I already have plans today. Next time!",
                audio: "audio/part4/dialogue8/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "沒關係！<span class='vocab-highlight' data-word='不客氣'>不客氣</span>！你<span class='vocab-highlight' data-word='什麼時候'>什麼時候</span><span class='vocab-highlight' data-word='有空'>有空</span>再告訴我。",
                pinyin: "Méi guānxi! Bú kèqi! Nǐ shénme shíhòu yǒu kòng zài gàosu wǒ.",
                english: "No problem! You're welcome! Let me know when you're free.",
                audio: "audio/part4/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "郵寄事情",
        titleTranslation: "Mailing Matters",
        context: "At the post office sending packages",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='喂'>喂</span>，我想<span class='vocab-highlight' data-word='寄'>寄</span>這封信和這個<span class='vocab-highlight' data-word='禮物'>禮物</span>。",
                pinyin: "Wèi, wǒ xiǎng jì zhè fēng xìn hé zhège lǐwù.",
                english: "Hey, I want to mail this letter and this gift.",
                audio: "audio/part4/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "好的。請寫好<span class='vocab-highlight' data-word='信封'>信封</span>。這個包裹要<span class='vocab-highlight' data-word='掛'>掛</span>號嗎？",
                pinyin: "Hǎo de. Qǐng xiě hǎo xìnfēng. Zhège bāoguǒ yào guàhào ma?",
                english: "OK. Please write the envelope properly. Do you want to send this package by registered mail?",
                audio: "audio/part4/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "要。<span class='vocab-highlight' data-word='最近'>最近</span><span class='vocab-highlight' data-word='聽說'>聽說</span><span class='vocab-highlight' data-word='郵局'>郵局</span>服務<span class='vocab-highlight' data-word='變'>變</span>快了。",
                pinyin: "Yào. Zuìjìn tīngshuō yóujú fúwù biàn kuài le.",
                english: "Yes. Recently I heard the post office service has become faster.",
                audio: "audio/part4/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "對，現在<span class='vocab-highlight' data-word='各'>各</span>種服務都好了。你的朋友很快可以<span class='vocab-highlight' data-word='接'>接</span>到<span class='vocab-highlight' data-word='禮物'>禮物</span>。",
                pinyin: "Duì, xiànzài gè zhǒng fúwù dōu hǎo le. Nǐ de péngyǒu hěn kuài kěyǐ jiē dào lǐwù.",
                english: "Right, now all kinds of services are better. Your friend can receive the gift soon.",
                audio: "audio/part4/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "銀行業務",
        titleTranslation: "Banking Business",
        context: "At the bank handling financial matters",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='不好意思'>不好意思</span>，我想存錢。這是我第一<span class='vocab-highlight' data-word='次'>次</span>來這個<span class='vocab-highlight' data-word='銀行'>銀行</span>。",
                pinyin: "Bù hǎo yìsi, wǒ xiǎng cún qián. Zhè shì wǒ dì yī cì lái zhège yínháng.",
                english: "Excuse me, I want to deposit money. This is my first time at this bank.",
                audio: "audio/part4/dialogue10/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='歡迎'>歡迎</span>！請先填表。你<span class='vocab-highlight' data-word='已經'>已經</span>有我們的卡了嗎？",
                pinyin: "Huānyíng! Qǐng xiān tián biǎo. Nǐ yǐjīng yǒu wǒmen de kǎ le ma?",
                english: "Welcome! Please fill out the form first. Do you already have our card?",
                audio: "audio/part4/dialogue10/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "還沒有。我<span class='vocab-highlight' data-word='發現'>發現</span>我的舊<span class='vocab-highlight' data-word='銀行'>銀行</span>服務不好，所以<span class='vocab-highlight' data-word='變'>變</span>了銀行。",
                pinyin: "Hái méiyǒu. Wǒ fāxiàn wǒ de jiù yínháng fúwù bù hǎo, suǒyǐ biàn le yínháng.",
                english: "Not yet. I discovered my old bank's service wasn't good, so I changed banks.",
                audio: "audio/part4/dialogue10/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我們的服務<span class='vocab-highlight' data-word='總是'>總是</span>很好。以後你也可以<span class='vocab-highlight' data-word='上網'>上網</span>處理<span class='vocab-highlight' data-word='事情'>事情</span>。",
                pinyin: "Wǒmen de fúwù zǒngshì hěn hǎo. Yǐhòu nǐ yě kěyǐ shàngwǎng chǔlǐ shìqing.",
                english: "Our service is always good. Later you can also handle matters online.",
                audio: "audio/part4/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "幫助朋友",
        titleTranslation: "Helping Friends",
        context: "Offering help to a friend in need",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='喂'>喂</span>，我<span class='vocab-highlight' data-word='發現'>發現</span>你的電腦<span class='vocab-highlight' data-word='壞'>壞</span>了，需要<span class='vocab-highlight' data-word='幫忙'>幫忙</span>嗎？",
                pinyin: "Wèi, wǒ fāxiàn nǐ de diànnǎo huài le, xūyào bāngmáng ma?",
                english: "Hey, I discovered your computer is broken, do you need help?",
                audio: "audio/part4/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "太好了！我<span class='vocab-highlight' data-word='已經'>已經</span>試了好幾<span class='vocab-highlight' data-word='次'>次</span>。<span class='vocab-highlight' data-word='怎麼辦'>怎麼辦</span>？",
                pinyin: "Tài hǎo le! Wǒ yǐjīng shì le hǎo jǐ cì. Zěnmebàn?",
                english: "Great! I've already tried several times. What should I do?",
                audio: "audio/part4/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "讓我看看。<span class='vocab-highlight' data-word='有時候'>有時候</span>只是小問題。我可以<span class='vocab-highlight' data-word='幫'>幫</span>你修。",
                pinyin: "Ràng wǒ kànkan. Yǒu shíhòu zhǐshì xiǎo wèntí. Wǒ kěyǐ bāng nǐ xiū.",
                english: "Let me take a look. Sometimes it's just a small problem. I can help you fix it.",
                audio: "audio/part4/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝你的<span class='vocab-highlight' data-word='幫助'>幫助</span>！你<span class='vocab-highlight' data-word='總是'>總是</span>這麼好。我<span class='vocab-highlight' data-word='後來'>後來</span>請你吃飯。",
                pinyin: "Xièxie nǐ de bāngzhù! Nǐ zǒngshì zhème hǎo. Wǒ hòulái qǐng nǐ chīfàn.",
                english: "Thank you for your help! You're always so nice. I'll treat you to a meal later.",
                audio: "audio/part4/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "小朋友的故事",
        titleTranslation: "Children's Story",
        context: "Talking about children and family",
        lines: [
            {
                speaker: "A",
                chinese: "你家的<span class='vocab-highlight' data-word='小朋友'>小朋友</span><span class='vocab-highlight' data-word='最近'>最近</span>好嗎？我<span class='vocab-highlight' data-word='聽說'>聽說</span>他很喜歡運動。",
                pinyin: "Nǐ jiā de xiǎo péngyǒu zuìjìn hǎo ma? Wǒ tīngshuō tā hěn xǐhuān yùndòng.",
                english: "How is your child recently? I heard he really likes sports.",
                audio: "audio/part4/dialogue12/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對，他<span class='vocab-highlight' data-word='平常'>平常</span>喜歡<span class='vocab-highlight' data-word='跑步'>跑步</span>和<span class='vocab-highlight' data-word='游泳'>游泳</span>。<span class='vocab-highlight' data-word='有時候'>有時候</span>也<span class='vocab-highlight' data-word='踢'>踢</span><span class='vocab-highlight' data-word='足球'>足球</span>。",
                pinyin: "Duì, tā píngcháng xǐhuān pǎobù hé yóuyǒng. Yǒu shíhòu yě tī zúqiú.",
                english: "Yes, he usually likes running and swimming. Sometimes he also plays soccer.",
                audio: "audio/part4/dialogue12/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "很好！運動讓身體健康。他<span class='vocab-highlight' data-word='已經'>已經</span>會<span class='vocab-highlight' data-word='騎'>騎</span><span class='vocab-highlight' data-word='腳踏車'>腳踏車</span>了嗎？",
                pinyin: "Hěn hǎo! Yùndòng ràng shēntǐ jiànkāng. Tā yǐjīng huì qí jiǎotàchē le ma?",
                english: "Great! Exercise makes the body healthy. Can he already ride a bicycle?",
                audio: "audio/part4/dialogue12/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "還不會。<span class='vocab-highlight' data-word='後來'>後來</span>我打算教他。他<span class='vocab-highlight' data-word='總是'>總是</span>學得很快。",
                pinyin: "Hái bù huì. Hòulái wǒ dǎsuàn jiāo tā. Tā zǒngshì xué dé hěn kuài.",
                english: "Not yet. Later I plan to teach him. He always learns quickly.",
                audio: "audio/part4/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "認識新鄰居",
        titleTranslation: "Meeting New Neighbors",
        context: "Getting to know new neighbors",
        lines: [
            {
                speaker: "A",
                chinese: "你好！我是新搬來的。很高興<span class='vocab-highlight' data-word='認識'>認識</span>你！",
                pinyin: "Nǐ hǎo! Wǒ shì xīn bān lái de. Hěn gāoxìng rènshi nǐ!",
                english: "Hello! I'm new here. Nice to meet you!",
                audio: "audio/part4/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='歡迎'>歡迎</span>！<span class='vocab-highlight' data-word='歡迎'>歡迎</span>！<span class='vocab-highlight' data-word='最近'>最近</span>很多人<span class='vocab-highlight' data-word='搬'>搬</span>來這裡。",
                pinyin: "Huānyíng! Huānyíng! Zuìjìn hěn duō rén bān lái zhèlǐ.",
                english: "Welcome! Welcome! Recently many people have moved here.",
                audio: "audio/part4/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對，我<span class='vocab-highlight' data-word='發現'>發現</span>這裡環境很好。<span class='vocab-highlight' data-word='平常'>平常</span>你在哪裡買東西？",
                pinyin: "Duì, wǒ fāxiàn zhèlǐ huánjìng hěn hǎo. Píngcháng nǐ zài nǎlǐ mǎi dōngxi?",
                english: "Yes, I discovered the environment here is good. Where do you usually shop?",
                audio: "audio/part4/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='車站'>車站</span>旁邊有超市。你有<span class='vocab-highlight' data-word='空'>空</span>的時候我們可以一起去。",
                pinyin: "Chēzhàn pángbiān yǒu chāoshì. Nǐ yǒu kòng de shíhòu wǒmen kěyǐ yīqǐ qù.",
                english: "There's a supermarket next to the station. When you have time we can go together.",
                audio: "audio/part4/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "最近的生活",
        titleTranslation: "Recent Life",
        context: "Catching up on recent events",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='最近'>最近</span>怎麼樣？<span class='vocab-highlight' data-word='聽說'>聽說</span>你換工作了。",
                pinyin: "Zuìjìn zěnmeyàng? Tīngshuō nǐ huàn gōngzuò le.",
                english: "How have you been recently? I heard you changed jobs.",
                audio: "audio/part4/dialogue14/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對，<span class='vocab-highlight' data-word='已經'>已經</span>開始新工作兩個月了。<span class='vocab-highlight' data-word='後來'>後來</span>發現更適合我。",
                pinyin: "Duì, yǐjīng kāishǐ xīn gōngzuò liǎng gè yuè le. Hòulái fāxiàn gèng shìhé wǒ.",
                english: "Yes, I already started the new job two months ago. Later I discovered it suits me better.",
                audio: "audio/part4/dialogue14/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "太好了！生活有沒有<span class='vocab-highlight' data-word='變'>變</span>？你<span class='vocab-highlight' data-word='平常'>平常</span>還<span class='vocab-highlight' data-word='游泳'>游泳</span>嗎？",
                pinyin: "Tài hǎo le! Shēnghuó yǒu méiyǒu biàn? Nǐ píngcháng hái yóuyǒng ma?",
                english: "Great! Has life changed? Do you still swim regularly?",
                audio: "audio/part4/dialogue14/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='有時候'>有時候</span>去，但沒有以前那麼多<span class='vocab-highlight' data-word='次'>次</span>。工作<span class='vocab-highlight' data-word='總是'>總是</span>很忙。",
                pinyin: "Yǒu shíhòu qù, dàn méiyǒu yǐqián nàme duō cì. Gōngzuò zǒngshì hěn máng.",
                english: "Sometimes I go, but not as many times as before. Work is always busy.",
                audio: "audio/part4/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "遇到麻煩",
        titleTranslation: "Encountering Trouble",
        context: "Dealing with a problem situation",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='啊'>啊</span>！我的<span class='vocab-highlight' data-word='錢包'>錢包</span>不見了！<span class='vocab-highlight' data-word='怎麼辦'>怎麼辦</span>？",
                pinyin: "A! Wǒ de qiánbāo bù jiàn le! Zěnmebàn?",
                english: "Ah! My wallet is missing! What should I do?",
                audio: "audio/part4/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "別著急。你<span class='vocab-highlight' data-word='最近'>最近</span><span class='vocab-highlight' data-word='發現'>發現</span>它不見的？我們一起找找。",
                pinyin: "Bié zháojí. Nǐ zuìjìn fāxiàn tā bù jiàn de? Wǒmen yīqǐ zhǎozhao.",
                english: "Don't panic. When did you recently discover it was missing? Let's look together.",
                audio: "audio/part4/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='剛才'>剛才</span>在<span class='vocab-highlight' data-word='車站'>車站</span>還看到。可能<span class='vocab-highlight' data-word='拉'>拉</span>在這裡了。",
                pinyin: "Wǒ gāngcái zài chēzhàn hái kàndào. Kěnéng lā zài zhèlǐ le.",
                english: "I just saw it at the station. Maybe I left it here.",
                audio: "audio/part4/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "看！在那個椅子下面。下次要小心。<span class='vocab-highlight' data-word='總是'>總是</span>檢查一下。",
                pinyin: "Kàn! Zài nàge yǐzi xiàmiàn. Xià cì yào xiǎoxīn. Zǒngshì jiǎnchá yīxià.",
                english: "Look! Under that chair. Be careful next time. Always check.",
                audio: "audio/part4/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "新年計劃",
        titleTranslation: "New Year Plans",
        context: "Discussing plans for the upcoming new year",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='新年'>新年</span>快到了！你打算怎麼<span class='vocab-highlight' data-word='過年'>過年</span>？",
                pinyin: "Xīnnián kuài dào le! Nǐ dǎsuàn zěnme guònián?",
                english: "New Year is coming soon! How do you plan to celebrate?",
                audio: "audio/part4/dialogue16/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='總是'>總是</span>回家跟家人一起過。<span class='vocab-highlight' data-word='各'>各</span>種好吃的菜和有趣的<span class='vocab-highlight' data-word='活動'>活動</span>。",
                pinyin: "Wǒ zǒngshì huí jiā gēn jiārén yīqǐ guò. Gè zhǒng hǎo chī de cài hé yǒuqù de huódòng.",
                english: "I always go home to celebrate with family. All kinds of delicious food and fun activities.",
                audio: "audio/part4/dialogue16/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "真好！我今年想<span class='vocab-highlight' data-word='變'>變</span>一下，去旅行過年。<span class='vocab-highlight' data-word='聽說'>聽說</span>南方很暖和。",
                pinyin: "Zhēn hǎo! Wǒ jīnnián xiǎng biàn yīxià, qù lǚxíng guònián. Tīngshuō nánfāng hěn nuǎnhuo.",
                english: "Great! I want to change it up this year, travel for New Year. I heard the south is very warm.",
                audio: "audio/part4/dialogue16/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！<span class='vocab-highlight' data-word='後來'>後來</span>告訴我你的旅行<span class='vocab-highlight' data-word='故事'>故事</span>。新年快樂！",
                pinyin: "Hǎo zhǔyì! Hòulái gàosu wǒ nǐ de lǚxíng gùshi. Xīnnián kuàilè!",
                english: "Good idea! Tell me your travel stories later. Happy New Year!",
                audio: "audio/part4/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue16/dialogue.mp3"
    },
    {
        id: 17,
        title: "運動比賽",
        titleTranslation: "Sports Competition",
        context: "Watching and discussing a sports game",
        lines: [
            {
                speaker: "A",
                chinese: "昨天的<span class='vocab-highlight' data-word='籃球'>籃球</span><span class='vocab-highlight' data-word='比賽'>比賽</span>你看了嗎？太精彩了！",
                pinyin: "Zuótiān de lánqiú bǐsài nǐ kàn le ma? Tài jīngcǎi le!",
                english: "Did you watch yesterday's basketball game? It was amazing!",
                audio: "audio/part4/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "看了！我<span class='vocab-highlight' data-word='總是'>總是</span>看他們的<span class='vocab-highlight' data-word='比賽'>比賽</span>。這次<span class='vocab-highlight' data-word='開始'>開始</span>的時候很緊張。",
                pinyin: "Kàn le! Wǒ zǒngshì kàn tāmen de bǐsài. Zhè cì kāishǐ de shíhòu hěn jǐnzhāng.",
                english: "I did! I always watch their games. This time it was very tense at the beginning.",
                audio: "audio/part4/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對，<span class='vocab-highlight' data-word='後來'>後來</span>才<span class='vocab-highlight' data-word='變'>變</span>好。那個三分的球太厲害了！",
                pinyin: "Duì, hòulái cái biàn hǎo. Nàge sān fēn de qiú tài lìhài le!",
                english: "Yes, it only got better later. That three-point shot was incredible!",
                audio: "audio/part4/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "下<span class='vocab-highlight' data-word='次'>次</span><span class='vocab-highlight' data-word='比賽'>比賽</span>我們一起去現場看吧。在<span class='vocab-highlight' data-word='網站'>網站</span>上買<span class='vocab-highlight' data-word='票'>票</span>很方便。",
                pinyin: "Xià cì bǐsài wǒmen yīqǐ qù xiànchǎng kàn ba. Zài wǎngzhàn shàng mǎi piào hěn fāngbiàn.",
                english: "Let's go watch the next game live together. Buying tickets on the website is very convenient.",
                audio: "audio/part4/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue17/dialogue.mp3"
    },
    {
        id: 18,
        title: "網路購物",
        titleTranslation: "Online Shopping",
        context: "Discussing online shopping experiences",
        lines: [
            {
                speaker: "A",
                chinese: "你<span class='vocab-highlight' data-word='平常'>平常</span>在<span class='vocab-highlight' data-word='網站'>網站</span>上買東西嗎？<span class='vocab-highlight' data-word='最近'>最近</span>我<span class='vocab-highlight' data-word='發現'>發現</span>很多好東西。",
                pinyin: "Nǐ píngcháng zài wǎngzhàn shàng mǎi dōngxi ma? Zuìjìn wǒ fāxiàn hěn duō hǎo dōngxi.",
                english: "Do you usually buy things on websites? Recently I discovered many good things.",
                audio: "audio/part4/dialogue18/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='有時候'>有時候</span>買。但<span class='vocab-highlight' data-word='總是'>總是</span>擔心東西<span class='vocab-highlight' data-word='壞'>壞</span>了<span class='vocab-highlight' data-word='怎麼辦'>怎麼辦</span>。",
                pinyin: "Yǒu shíhòu mǎi. Dàn zǒngshì dānxīn dōngxi huài le zěnmebàn.",
                english: "Sometimes I buy. But I always worry about what to do if things break.",
                audio: "audio/part4/dialogue18/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "現在服務<span class='vocab-highlight' data-word='變'>變</span>好了。<span class='vocab-highlight' data-word='各'>各</span>個<span class='vocab-highlight' data-word='網站'>網站</span>都可以退貨。我<span class='vocab-highlight' data-word='已經'>已經</span>退過幾<span class='vocab-highlight' data-word='次'>次</span>。",
                pinyin: "Xiànzài fúwù biàn hǎo le. Gè gè wǎngzhàn dōu kěyǐ tuìhuò. Wǒ yǐjīng tuì guò jǐ cì.",
                english: "Now service has become better. All websites allow returns. I've already returned things several times.",
                audio: "audio/part4/dialogue18/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "那很好。下次我也試試。先買小的東西。",
                pinyin: "Nà hěn hǎo. Xià cì wǒ yě shìshi. Xiān mǎi xiǎo de dōngxi.",
                english: "That's good. Next time I'll try too. First buy small things.",
                audio: "audio/part4/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue18/dialogue.mp3"
    },
    {
        id: 19,
        title: "日常生活總結",
        titleTranslation: "Daily Life Summary",
        context: "Reflecting on daily life and habits",
        lines: [
            {
                speaker: "A",
                chinese: "學習了<span class='vocab-highlight' data-word='這些'>這些</span>詞彙，我對<span class='vocab-highlight' data-word='日常'>日常</span>生活有了更深的理解。<span class='vocab-highlight' data-word='平常'>平常</span>的<span class='vocab-highlight' data-word='活動'>活動</span>都有特別的詞。",
                pinyin: "Xuéxí le zhèxiē cíhuì, wǒ duì rìcháng shēnghuó yǒu le gèng shēn de lǐjiě. Píngcháng de huódòng dōu yǒu tèbié de cí.",
                english: "After learning these vocabulary words, I have deeper understanding of daily life. Ordinary activities all have special words.",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。從<span class='vocab-highlight' data-word='洗澡'>洗澡</span>、<span class='vocab-highlight' data-word='吃飯'>吃飯</span>到<span class='vocab-highlight' data-word='運動'>運動</span>，每個<span class='vocab-highlight' data-word='事情'>事情</span>都很重要。語言讓我們能更好地<span class='vocab-highlight' data-word='聊天'>聊天</span>和<span class='vocab-highlight' data-word='見面'>見面</span>。",
                pinyin: "Wǒ tóngyì. Cóng xǐzǎo, chīfàn dào yùndòng, měi gè shìqing dōu hěn zhòngyào. Yǔyán ràng wǒmen néng gèng hǎo de liáotiān hé jiànmiàn.",
                english: "I agree. From showering, eating to exercising, every matter is important. Language lets us chat and meet better.",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，無論是<span class='vocab-highlight' data-word='傳統'>傳統</span>的<span class='vocab-highlight' data-word='過年'>過年</span>還是<span class='vocab-highlight' data-word='現代'>現代</span>的<span class='vocab-highlight' data-word='上網'>上網</span>，我們都學會了怎麼表達。這些詞讓生活更豐富。",
                pinyin: "Shì de, wúlùn shì chuántǒng de guònián háishì xiàndài de shàngwǎng, wǒmen dōu xuéhuì le zěnme biǎodá. Zhèxiē cí ràng shēnghuó gèng fēngfù.",
                english: "Yes, whether it's traditional New Year celebration or modern internet surfing, we've learned how to express. These words make life richer.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "讓我們繼續學習，不僅知道詞，還要會用。每次<span class='vocab-highlight' data-word='發現'>發現</span>新詞都是快樂的<span class='vocab-highlight' data-word='事情'>事情</span>。一起<span class='vocab-highlight' data-word='加油'>加油</span>吧！",
                pinyin: "Ràng wǒmen jìxù xuéxí, bùjǐn zhīdào cí, hái yào huì yòng. Měi cì fāxiàn xīn cí dōu shì kuàilè de shìqing. Yīqǐ jiāyóu ba!",
                english: "Let's continue learning, not just know words, but also know how to use them. Every time discovering new words is a happy matter. Let's keep it up together!",
                audio: "audio/part4/dialogue19/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue19/dialogue.mp3"
    }
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20, 
    SWIPE_THRESHOLD: 50,
    AUDIO: false,
    AUDIO_DELAY: 300
};