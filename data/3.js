// Slide Titles Database
const slideTitles = [
    { 
    title: "Start Here", 
    subtitle: "Introduction to what you'll learn", 
    icon: "📍"
    },
    { 
        title: "天氣與環境", 
        subtitle: "Weather and Environment", 
        icon: "🌤️" 
    },
    { 
        title: "日常生活與個人護理", 
        subtitle: "Daily Life and Personal Care", 
        icon: "🏠" 
    },
    { 
        title: "家居物品與整理", 
        subtitle: "Household Items and Organization", 
        icon: "🧹" 
    },
    { 
        title: "週末活動", 
        subtitle: "Weekend Activities", 
        icon: "🌳" 
    },
    { 
        title: "休閒娛樂", 
        subtitle: "Leisure and Entertainment", 
        icon: "🎬" 
    },
    { 
        title: "音樂與樂器", 
        subtitle: "Music and Instruments", 
        icon: "🎵" 
    },
    { 
        title: "運動與鍛煉", 
        subtitle: "Sports and Exercise", 
        icon: "⚽" 
    },
    { 
        title: "社交活動", 
        subtitle: "Social Activities", 
        icon: "👥" 
    },
    { 
        title: "溝通與關係", 
        subtitle: "Communication and Relationships", 
        icon: "💬" 
    },
    { 
        title: "派對與慶祝", 
        subtitle: "Parties and Celebrations", 
        icon: "🎉" 
    },
    { 
        title: "信件與郵件", 
        subtitle: "Correspondence and Mail", 
        icon: "✉️" 
    },
    { 
        title: "日常行動與情況", 
        subtitle: "Daily Actions and Situations", 
        icon: "🔄" 
    },
    { 
        title: "問題與解決", 
        subtitle: "Problems and Solutions", 
        icon: "❓" 
    },
    { 
        title: "時間管理", 
        subtitle: "Time Management", 
        icon: "⏰" 
    },
    { 
        title: "個人成長與夢想", 
        subtitle: "Personal Growth and Dreams", 
        icon: "🌟" 
    },
    { 
        title: "保護與安全", 
        subtitle: "Protection and Safety", 
        icon: "🛡️" 
    },
    { 
        title: "錯誤與改正", 
        subtitle: "Mistakes and Corrections", 
        icon: "✏️" 
    },
    { 
        title: "完成與結束", 
        subtitle: "Completion and Endings", 
        icon: "✅" 
    },
    { 
        title: "最後想法與連接", 
        subtitle: "Final Thoughts and Connections", 
        icon: "🤔" 
    },
    { 
        title: "Vocabulary Review", 
        subtitle: "80 Words Mastery", 
        icon: "📖" 
    },
    { 
        title: "Course Complete", 
        subtitle: "Congratulations!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - All 80 words from your HTML
const vocabularyDB = [
    { chinese: "度", pinyin: "dù", english: "degree (temperature/angle)", audio: "audio/part3/words/du.mp3" },
    { chinese: "颱風", pinyin: "táifēng", english: "typhoon", audio: "audio/part3/words/taifeng.mp3" },
    { chinese: "季節", pinyin: "jìjié", english: "season", audio: "audio/part3/words/jijie.mp3" },
    { chinese: "環保", pinyin: "huánbǎo", english: "environmental protection", audio: "audio/part3/words/huanbao.mp3" },
    { chinese: "垃圾", pinyin: "lèsè", english: "garbage, trash", audio: "audio/part3/words/lese.mp3" },
    { chinese: "汙染", pinyin: "wūrǎn", english: "pollution", audio: "audio/part3/words/wuran.mp3" },
    { chinese: "底", pinyin: "dǐ", english: "bottom", audio: "audio/part3/words/di.mp3" },
    { chinese: "底下", pinyin: "dǐxià", english: "underneath, below", audio: "audio/part3/words/dixia.mp3" },
    { chinese: "內", pinyin: "nèi", english: "inside, within", audio: "audio/part3/words/nei.mp3" },
    { chinese: "深", pinyin: "shēn", english: "deep", audio: "audio/part3/words/shen.mp3" },
    { chinese: "淺", pinyin: "qiǎn", english: "shallow", audio: "audio/part3/words/qian.mp3" },
    { chinese: "發生", pinyin: "fāshēng", english: "happen, occur", audio: "audio/part3/words/fasheng.mp3" },
    { chinese: "照顧", pinyin: "zhàogù", english: "take care of", audio: "audio/part3/words/zhaogu.mp3" },
    { chinese: "生活", pinyin: "shēnghuó", english: "life, living", audio: "audio/part3/words/shenghuo.mp3" },
    { chinese: "日記", pinyin: "rìjì", english: "diary", audio: "audio/part3/words/riji.mp3" },
    { chinese: "流", pinyin: "liú", english: "flow", audio: "audio/part3/words/liu.mp3" },
    { chinese: "流汗", pinyin: "liú hàn", english: "sweat", audio: "audio/part3/words/liuhan.mp3" },
    { chinese: "夢", pinyin: "mèng", english: "dream", audio: "audio/part3/words/meng.mp3" },
    { chinese: "枕頭", pinyin: "zhěntou", english: "pillow", audio: "audio/part3/words/zhentou.mp3" },
    { chinese: "鬧鐘", pinyin: "nàozhōng", english: "alarm clock", audio: "audio/part3/words/naozhong.mp3" },
    { chinese: "拖鞋", pinyin: "tuōxié", english: "slippers", audio: "audio/part3/words/tuoxie.mp3" },
    { chinese: "毛巾", pinyin: "máojīn", english: "towel", audio: "audio/part3/words/maojin.mp3" },
    { chinese: "刷(子)", pinyin: "shuā(zi)", english: "brush", audio: "audio/part3/words/shua.mp3" },
    { chinese: "肥皂", pinyin: "féizào", english: "soap", audio: "audio/part3/words/feizao.mp3" },
    { chinese: "牙膏", pinyin: "yágāo", english: "toothpaste", audio: "audio/part3/words/yagao.mp3" },
    { chinese: "衛生紙", pinyin: "wèishēngzhǐ", english: "toilet paper", audio: "audio/part3/words/weishengzhi.mp3" },
    { chinese: "籃(子)", pinyin: "lán(zi)", english: "basket", audio: "audio/part3/words/lanzi.mp3" },
    { chinese: "假日", pinyin: "jiàrì", english: "holiday, vacation day", audio: "audio/part3/words/jiari.mp3" },
    { chinese: "結束", pinyin: "jiéshù", english: "end, finish", audio: "audio/part3/words/jieshu.mp3" },
    { chinese: "完", pinyin: "wán", english: "finish, complete", audio: "audio/part3/words/wan.mp3" },
    { chinese: "散步", pinyin: "sànbù", english: "take a walk", audio: "audio/part3/words/sanbu.mp3" },
    { chinese: "慢跑", pinyin: "mànpǎo", english: "jog", audio: "audio/part3/words/manpao.mp3" },
    { chinese: "野餐", pinyin: "yěcān", english: "picnic", audio: "audio/part3/words/yecan.mp3" },
    { chinese: "爬", pinyin: "pá", english: "climb", audio: "audio/part3/words/pa.mp3" },
    { chinese: "拍", pinyin: "pāi", english: "pat, clap, take (photo)", audio: "audio/part3/words/pai.mp3" },
    { chinese: "抓", pinyin: "zhuā", english: "grab, catch", audio: "audio/part3/words/zhua.mp3" },
    { chinese: "座位", pinyin: "zuòwèi", english: "seat", audio: "audio/part3/words/zuowei.mp3" },
    { chinese: "新聞", pinyin: "xīnwén", english: "news", audio: "audio/part3/words/xinwen.mp3" },
    { chinese: "體育", pinyin: "tǐyù", english: "sports, physical education", audio: "audio/part3/words/tiyu.mp3" },
    { chinese: "經常", pinyin: "jīngcháng", english: "often, frequently", audio: "audio/part3/words/jingchang.mp3" },
    { chinese: "雜誌", pinyin: "zázhì", english: "magazine", audio: "audio/part3/words/zazhi.mp3" },
    { chinese: "美術", pinyin: "měishù", english: "art, fine arts", audio: "audio/part3/words/meishu.mp3" },
    { chinese: "畫家", pinyin: "huàjiā", english: "painter, artist", audio: "audio/part3/words/huajia.mp3" },
    { chinese: "興趣", pinyin: "xìngqù", english: "interest, hobby", audio: "audio/part3/words/xingqu.mp3" },
    { chinese: "收", pinyin: "shōu", english: "receive, collect", audio: "audio/part3/words/shou.mp3" },
    { chinese: "談", pinyin: "tán", english: "talk, discuss", audio: "audio/part3/words/tan.mp3" },
    { chinese: "聊", pinyin: "liáo", english: "chat", audio: "audio/part3/words/liao.mp3" },
    { chinese: "遲到", pinyin: "chídào", english: "be late", audio: "audio/part3/words/chidao.mp3" },
    { chinese: "樂器", pinyin: "yuèqì", english: "musical instrument", audio: "audio/part3/words/yueqi.mp3" },
    { chinese: "吉他", pinyin: "jítā", english: "guitar", audio: "audio/part3/words/jita.mp3" },
    { chinese: "可怕", pinyin: "kěpà", english: "scary, terrible", audio: "audio/part3/words/kepa.mp3" },
    { chinese: "輕鬆", pinyin: "qīngsōng", english: "relaxed, easy", audio: "audio/part3/words/qingsong.mp3" },
    { chinese: "情形", pinyin: "qíngxíng", english: "situation, circumstances", audio: "audio/part3/words/qingxing.mp3" },
    { chinese: "消息", pinyin: "xiāoxi", english: "news, message", audio: "audio/part3/words/xiaoxi.mp3" },
    { chinese: "看起來", pinyin: "kàn qǐlái", english: "looks like, appears", audio: "audio/part3/words/kanqilai.mp3" },
    { chinese: "舞", pinyin: "wǔ", english: "dance", audio: "audio/part3/words/wu.mp3" },
    { chinese: "游", pinyin: "yóu", english: "swim", audio: "audio/part3/words/you.mp3" },
    { chinese: "游泳池", pinyin: "yóuyǒngchí", english: "swimming pool", audio: "audio/part3/words/youyongchi.mp3" },
    { chinese: "遊戲", pinyin: "yóuxì", english: "game", audio: "audio/part3/words/youxi.mp3" },
    { chinese: "茶館", pinyin: "cháguǎn", english: "teahouse", audio: "audio/part3/words/chaguan.mp3" },
    { chinese: "門票", pinyin: "ménpiào", english: "admission ticket", audio: "audio/part3/words/menpiao.mp3" },
    { chinese: "陪", pinyin: "péi", english: "accompany", audio: "audio/part3/words/pei.mp3" },
    { chinese: "利用", pinyin: "lìyòng", english: "utilize, make use of", audio: "audio/part3/words/liyong.mp3" },
    { chinese: "好處", pinyin: "hǎochù", english: "benefit, advantage", audio: "audio/part3/words/haochu.mp3" },
    { chinese: "壞處", pinyin: "huàichù", english: "disadvantage, harm", audio: "audio/part3/words/huaichu.mp3" },
    { chinese: "目的", pinyin: "mùdì", english: "purpose, goal", audio: "audio/part3/words/mudi.mp3" },
    { chinese: "要求", pinyin: "yāoqiú", english: "request, demand", audio: "audio/part3/words/yaoqiu.mp3" },
    { chinese: "合作", pinyin: "hézuò", english: "cooperate, cooperation", audio: "audio/part3/words/hezuo.mp3" },
    { chinese: "主人", pinyin: "zhǔrén", english: "host, owner", audio: "audio/part3/words/zhuren.mp3" },
    { chinese: "請客", pinyin: "qǐngkè", english: "treat (someone), invite", audio: "audio/part3/words/qingke.mp3" },
    { chinese: "約", pinyin: "yuē", english: "arrange, make an appointment", audio: "audio/part3/words/yue.mp3" },
    { chinese: "約會", pinyin: "yuēhuì", english: "appointment, date", audio: "audio/part3/words/yuehui.mp3" },
    { chinese: "派對", pinyin: "pàiduì", english: "party", audio: "audio/part3/words/paidui.mp3" },
    { chinese: "祝", pinyin: "zhù", english: "wish, congratulate", audio: "audio/part3/words/zhu.mp3" },
    { chinese: "留", pinyin: "liú", english: "stay, leave behind", audio: "audio/part3/words/liu2.mp3" },
    { chinese: "封", pinyin: "fēng", english: "measure word for letters", audio: "audio/part3/words/feng.mp3" },
    { chinese: "信箱", pinyin: "xìnxiāng", english: "mailbox", audio: "audio/part3/words/xinxiang.mp3" },
    { chinese: "郵票", pinyin: "yóupiào", english: "stamp", audio: "audio/part3/words/youpiao.mp3" },
    { chinese: "回信", pinyin: "huíxìn", english: "reply letter", audio: "audio/part3/words/huixin.mp3" },
    { chinese: "郵件", pinyin: "yóujiàn", english: "mail, postal matter", audio: "audio/part3/words/youjian.mp3" },
    { chinese: "弄", pinyin: "nòng", english: "do, make, handle", audio: "audio/part3/words/nong.mp3" },
    { chinese: "放心", pinyin: "fàngxīn", english: "feel at ease, rest assured", audio: "audio/part3/words/fangxin.mp3" },
    { chinese: "偷", pinyin: "tōu", english: "steal", audio: "audio/part3/words/tou.mp3" },
    { chinese: "滿", pinyin: "mǎn", english: "full", audio: "audio/part3/words/man.mp3" },
    { chinese: "丟", pinyin: "diū", english: "lose, throw away", audio: "audio/part3/words/diu.mp3" },
    { chinese: "換", pinyin: "huàn", english: "change, exchange", audio: "audio/part3/words/huan.mp3" },
    { chinese: "一塊", pinyin: "yīkuài", english: "together, one piece", audio: "audio/part3/words/yikuai.mp3" },
    { chinese: "同時", pinyin: "tóngshí", english: "at the same time, meanwhile", audio: "audio/part3/words/tongshi.mp3" },
    { chinese: "保護", pinyin: "bǎohù", english: "protect", audio: "audio/part3/words/baohu.mp3" },
    { chinese: "出門", pinyin: "chūmén", english: "go out, leave home", audio: "audio/part3/words/chumen.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
    // Add more audio files here as needed
};

// Dialogue Database - All 19 dialogues from your HTML
const dialoguesDB = [
    // Dialogue 1: Weather and Environment
    {
        id: 1,
        title: "天氣與環境",
        titleTranslation: "Weather and Environment",
        context: "Two friends discussing weather and environmental issues",
        lines: [
            {
                speaker: "A",
                chinese: "今天氣溫有三十<span class='vocab-highlight' data-word='度'>度</span>，真是太熱了！聽說明天有<span class='vocab-highlight' data-word='颱風'>颱風</span>要來。",
                pinyin: "Jīntiān qìwēn yǒu sānshí dù, zhēnshi tài rè le! Tīng shuō míngtiān yǒu táifēng yào lái.",
                english: "Today's temperature is 30 degrees, it's so hot! I heard a typhoon is coming tomorrow.",
                audio: "audio/part3/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是啊，這個<span class='vocab-highlight' data-word='季節'>季節</span>的變化真大。我們應該多注意<span class='vocab-highlight' data-word='環保'>環保</span>，減少製造<span class='vocab-highlight' data-word='垃圾'>垃圾</span>，避免環境<span class='vocab-highlight' data-word='汙染'>汙染</span>。",
                pinyin: "Shì a, zhège jìjié de biànhuà zhēn dà. Wǒmen yīnggāi duō zhùyì huánbǎo, jiǎnshǎo zhìzào lèsè, bìmiǎn huánjìng wūrǎn.",
                english: "Yes, the changes in this season are really big. We should pay more attention to environmental protection, reduce creating garbage, and avoid environmental pollution.",
                audio: "audio/part3/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我發現很多河流的<span class='vocab-highlight' data-word='底'>底</span><span class='vocab-highlight' data-word='底下'>底下</span>都有很多垃圾。這些垃圾會影響水的質量，造成嚴重的汙染。",
                pinyin: "Nǐ shuō dé duì. Wǒ fāxiàn hěnduō héliú de dǐ dǐxià dōu yǒu hěnduō lèsè. Zhèxiē lèsè huì yǐngxiǎng shuǐ de zhìliàng, zàochéng yánzhòng de wūrǎn.",
                english: "You're right. I've found that at the bottom of many rivers there's a lot of garbage. This garbage affects water quality and causes serious pollution.",
                audio: "audio/part3/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，河流<span class='vocab-highlight' data-word='內'>內</span>的汙染會影響整個生態系統。我們應該從自身做起，做好分類回收。",
                pinyin: "Shì de, héliú nèi de wūrǎn huì yǐngxiǎng zhěnggè shēngtài xìtǒng. Wǒmen yīnggāi cóng zìshēn zuò qǐ, zuò hǎo fēnlèi huíshōu.",
                english: "Yes, pollution inside rivers affects the entire ecosystem. We should start with ourselves and do good classification and recycling.",
                audio: "audio/part3/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue1/dialogue.mp3"
    },
    // Dialogue 2: Daily Life and Personal Care
    {
        id: 2,
        title: "日常生活與個人護理",
        titleTranslation: "Daily Life and Personal Care",
        context: "Roommates discussing daily routines and personal care items",
        lines: [
            {
                speaker: "B",
                chinese: "我每天早上都會<span class='vocab-highlight' data-word='發生'>發生</span>一樣的事：被<span class='vocab-highlight' data-word='鬧鐘'>鬧鐘</span>吵醒，然後去刷牙洗臉。",
                pinyin: "Wǒ měitiān zǎoshang dōu huì fāshēng yīyàng de shì: Bèi nào zhōng chǎo xǐng, ránhòu qù shuāyá xǐliǎn.",
                english: "The same thing happens to me every morning: I'm awakened by the alarm clock, then go brush my teeth and wash my face.",
                audio: "audio/part3/dialogue2/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我也是。我需要好好<span class='vocab-highlight' data-word='照顧'>照顧</span>自己，保持健康的<span class='vocab-highlight' data-word='生活'>生活</span>習慣。對了，你有寫<span class='vocab-highlight' data-word='日記'>日記</span>的習慣嗎？",
                pinyin: "Wǒ yěshì. Wǒ xūyào hǎohǎo zhàogù zìjǐ, bǎochí jiànkāng de shēnghuó xíguàn. Duì le, nǐ yǒu xiě rìjì de xíguàn ma?",
                english: "Me too. I need to take good care of myself and maintain healthy lifestyle habits. By the way, do you have the habit of writing a diary?",
                audio: "audio/part3/dialogue2/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "有時候會寫。早上起床後，我會用<span class='vocab-highlight' data-word='牙刷'>牙刷</span>和<span class='vocab-highlight' data-word='牙膏'>牙膏</span>刷牙，用<span class='vocab-highlight' data-word='毛巾'>毛巾</span>洗臉，然後用<span class='vocab-highlight' data-word='肥皂'>肥皂</span>洗手。",
                pinyin: "Yǒu shíhòu huì xiě. Zǎoshang qǐchuáng hòu, wǒ huì yòng yáshuā hé yágāo shuāyá, yòng máojīn xǐliǎn, ránhòu yòng féizào xǐshǒu.",
                english: "Sometimes I write. After getting up in the morning, I use a toothbrush and toothpaste to brush my teeth, use a towel to wash my face, then use soap to wash my hands.",
                audio: "audio/part3/dialogue2/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "我習慣晚上洗澡後寫日記。我會把<span class='vocab-highlight' data-word='拖鞋'>拖鞋</span>放在床邊，把<span class='vocab-highlight' data-word='枕頭'>枕頭</span>整理好，然後坐在床上寫日記。",
                pinyin: "Wǒ xíguàn wǎnshang xǐzǎo hòu xiě rìjì. Wǒ huì bǎ tuōxié fàng zài chuáng biān, bǎ zhěntou zhěnglǐ hǎo, ránhòu zuò zài chuáng shàng xiě rìjì.",
                english: "I'm used to writing my diary after showering at night. I put my slippers by the bed, arrange my pillow, then sit on the bed to write my diary.",
                audio: "audio/part3/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue2/dialogue.mp3"
    },
    // Dialogue 3: Household Items and Organization
    {
        id: 3,
        title: "家居物品與整理",
        titleTranslation: "Household Items and Organization",
        context: "Discussing bathroom organization and household items",
        lines: [
            {
                speaker: "A",
                chinese: "我剛買了一個新的<span class='vocab-highlight' data-word='刷(子)'>刷子</span>，用來清潔浴室。我還需要買一些<span class='vocab-highlight' data-word='衛生紙'>衛生紙</span>和<span class='vocab-highlight' data-word='肥皂'>肥皂</span>。",
                pinyin: "Wǒ gāng mǎi le yīgè xīn de shuāzi, yòng lái qīngjié yùshì. Wǒ hái xūyào mǎi yīxiē wèishēngzhǐ hé féizào.",
                english: "I just bought a new brush to clean the bathroom. I also need to buy some toilet paper and soap.",
                audio: "audio/part3/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我們可以把這些東西放在浴室的<span class='vocab-highlight' data-word='櫃(子)'>櫃子</span>裡。我有一個<span class='vocab-highlight' data-word='籃(子)'>籃子</span>，專門放洗澡用的東西。",
                pinyin: "Wǒmen kěyǐ bǎ zhèxiē dōngxī fàng zài yùshì de guìzi lǐ. Wǒ yǒu yīgè lánzi, zhuānmén fàng xǐzǎo yòng de dōngxī.",
                english: "We can put these things in the bathroom cabinet. I have a basket specifically for showering items.",
                audio: "audio/part3/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！這樣浴室就不會太<span class='vocab-highlight' data-word='亂'>亂</span>。對了，你平時怎麼處理用過的<span class='vocab-highlight' data-word='毛巾'>毛巾</span>？",
                pinyin: "Hǎo zhǔyì! Zhèyàng yùshì jiù bù huì tài luàn. Duì le, nǐ píngshí zěnme chǔlǐ yòng guò de máojīn?",
                english: "Good idea! This way the bathroom won't be too messy. By the way, how do you usually handle used towels?",
                audio: "audio/part3/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我會把用過的毛巾放在洗衣<span class='vocab-highlight' data-word='籃(子)'>籃子</span>裡，等<span class='vocab-highlight' data-word='滿'>滿</span>了再一起洗。這樣比較節省水和電。",
                pinyin: "Wǒ huì bǎ yòng guò de máojīn fàng zài xǐyī lánzi lǐ, děng mǎn le zài yīqǐ xǐ. Zhèyàng bǐjiào jiéshěng shuǐ hé diàn.",
                english: "I put used towels in the laundry basket, and wash them together when it's full. This saves more water and electricity.",
                audio: "audio/part3/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue3/dialogue.mp3"
    },
    // Dialogue 4: Weekend Activities
    {
        id: 4,
        title: "週末活動",
        titleTranslation: "Weekend Activities",
        context: "Planning weekend activities with friends",
        lines: [
            {
                speaker: "B",
                chinese: "這個<span class='vocab-highlight' data-word='假日'>假日</span>你有什麼計劃嗎？我的工作明天就<span class='vocab-highlight' data-word='結束'>結束</span>了，我想好好放鬆一下。",
                pinyin: "Zhège jiàrì nǐ yǒu shénme jìhuà ma? Wǒ de gōngzuò míngtiān jiù jiéshù le, wǒ xiǎng hǎohǎo fàngsōng yīxià.",
                english: "Do you have any plans for this holiday? My work ends tomorrow, I want to relax properly.",
                audio: "audio/part3/dialogue4/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我想去公園<span class='vocab-highlight' data-word='散步'>散步</span>或者<span class='vocab-highlight' data-word='慢跑'>慢跑</span>。最近工作壓力大，需要運動來放鬆。你喜歡運動嗎？",
                pinyin: "Wǒ xiǎng qù gōngyuán sànbù huòzhě mànpǎo. Zuìjìn gōngzuò yālì dà, xūyào yùndòng lái fàngsōng. Nǐ xǐhuān yùndòng ma?",
                english: "I want to go to the park for a walk or jog. Recently work pressure has been high, need exercise to relax. Do you like exercise?",
                audio: "audio/part3/dialogue4/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "我比較喜歡輕鬆的活動，比如和朋友去<span class='vocab-highlight' data-word='野餐'>野餐</span>。我們可以帶些食物，在草地上吃飯、<span class='vocab-highlight' data-word='聊'>聊</span>天。",
                pinyin: "Wǒ bǐjiào xǐhuān qīngsōng de huódòng, bǐrú hé péngyǒu qù yěcān. Wǒmen kěyǐ dài xiē shíwù, zài cǎodì shàng chīfàn, liáo tiān.",
                english: "I prefer relaxed activities, like going on a picnic with friends. We can bring some food, eat on the grass, and chat.",
                audio: "audio/part3/dialogue4/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "聽起來不錯！我們可以約幾個朋友一起去。我還想試試<span class='vocab-highlight' data-word='爬'>爬</span>山，山上的空氣很好，風景也很美。",
                pinyin: "Tīng qǐlái bùcuò! Wǒmen kěyǐ yuē jǐ gè péngyǒu yīqǐ qù. Wǒ hái xiǎng shì shì pá shān, shān shàng de kōngqì hěn hǎo, fēngjǐng yě hěn měi.",
                english: "That sounds good! We can invite a few friends to go together. I also want to try mountain climbing, the air on the mountain is good, and the scenery is beautiful too.",
                audio: "audio/part3/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue4/dialogue.mp3"
    },
    // Dialogue 5: Leisure and Entertainment
    {
        id: 5,
        title: "休閒娛樂",
        titleTranslation: "Leisure and Entertainment",
        context: "Discussing hobbies and entertainment activities",
        lines: [
            {
                speaker: "A",
                chinese: "我最近對攝影很有<span class='vocab-highlight' data-word='興趣'>興趣</span>，喜歡<span class='vocab-highlight' data-word='拍'>拍</span>照記錄生活中的美好時刻。你有什麼愛好嗎？",
                pinyin: "Wǒ zuìjìn duì shèyǐng hěn yǒu xìngqù, xǐhuān pāi zhào jìlù shēnghuó zhōng de měihǎo shíkè. Nǐ yǒu shénme àihào ma?",
                english: "I've recently been very interested in photography, like taking photos to record beautiful moments in life. Do you have any hobbies?",
                audio: "audio/part3/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我喜歡看<span class='vocab-highlight' data-word='新聞'>新聞</span>和<span class='vocab-highlight' data-word='雜誌'>雜誌</span>，特別是關於<span class='vocab-highlight' data-word='體育'>體育</span>和<span class='vocab-highlight' data-word='美術'>美術</span>的內容。有時候我也會去看<span class='vocab-highlight' data-word='畫家'>畫家</span>的展覽。",
                pinyin: "Wǒ xǐhuān kàn xīnwén hé zázhì, tèbié shì guānyú tǐyù hé měishù de nèiróng. Yǒu shíhòu wǒ yě huì qù kàn huàjiā de zhǎnlǎn.",
                english: "I like watching news and reading magazines, especially content about sports and art. Sometimes I also go see painters' exhibitions.",
                audio: "audio/part3/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我也<span class='vocab-highlight' data-word='經常'>經常</span>看新聞，了解社會上<span class='vocab-highlight' data-word='發生'>發生</span>的事情。對了，你喜歡看電影嗎？我們可以找時間一起去看。",
                pinyin: "Wǒ yě jīngcháng kàn xīnwén, liǎojiě shèhuì shàng fāshēng de shìqíng. Duì le, nǐ xǐhuān kàn diànyǐng ma? Wǒmen kěyǐ zhǎo shíjiān yīqǐ qù kàn.",
                english: "I also often watch news to understand what's happening in society. By the way, do you like watching movies? We can find time to go together.",
                audio: "audio/part3/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好啊！看電影的時候，我喜歡選擇好的<span class='vocab-highlight' data-word='座位'>座位</span>。中間的位置通常比較好，看得清楚，聽得也清楚。",
                pinyin: "Hǎo a! Kàn diànyǐng de shíhòu, wǒ xǐhuān xuǎnzé hǎo de zuòwèi. Zhōngjiān de wèizhì tōngcháng bǐjiào hǎo, kàn dé qīngchǔ, tīng dé yě qīngchǔ.",
                english: "Great! When watching movies, I like choosing good seats. Middle positions are usually better, you can see clearly and hear clearly.",
                audio: "audio/part3/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue5/dialogue.mp3"
    },
    // Dialogue 6: Music and Instruments
    {
        id: 6,
        title: "音樂與樂器",
        titleTranslation: "Music and Instruments",
        context: "Talking about music learning and performance",
        lines: [
            {
                speaker: "B",
                chinese: "我最近在學習彈<span class='vocab-highlight' data-word='吉他'>吉他</span>，這是一種很受歡迎的<span class='vocab-highlight' data-word='樂器'>樂器</span>。雖然一開始很難，但現在越來越<span class='vocab-highlight' data-word='輕鬆'>輕鬆</span>了。",
                pinyin: "Wǒ zuìjìn zài xuéxí tán jítā, zhè shì yī zhǒng hěn shòu huānyíng de yuèqì. Suīrán yī kāishǐ hěn nán, dàn xiànzài yuè lái yuè qīngsōng le.",
                english: "I've recently been learning to play the guitar, it's a very popular musical instrument. Although it was difficult at first, now it's getting easier.",
                audio: "audio/part3/dialogue6/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "真厲害！我小時候學過鋼琴，但現在都<span class='vocab-highlight' data-word='忘記'>忘記</span>了。學習樂器需要很多耐心，不能太<span class='vocab-highlight' data-word='急'>急</span>。",
                pinyin: "Zhēn lìhài! Wǒ xiǎoshíhòu xuéguò gāngqín, dàn xiànzài dōu wàngjì le. Xuéxí yuèqì xūyào hěnduō nàixīn, bùnéng tài jí.",
                english: "That's amazing! I learned piano as a child, but now I've forgotten everything. Learning an instrument requires a lot of patience, can't be too rushed.",
                audio: "audio/part3/dialogue6/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，每天練習一點點，慢慢就會進步。對了，你喜歡聽什麼類型的音樂？我比較喜歡<span class='vocab-highlight' data-word='輕鬆'>輕鬆</span>的音樂，可以幫助我放鬆。",
                pinyin: "Shì de, měitiān liànxí yīdiǎndiǎn, mànmàn jiù huì jìnbù. Duì le, nǐ xǐhuān tīng shénme lèixíng de yīnyuè? Wǒ bǐjiào xǐhuān qīngsōng de yīnyuè, kěyǐ bāngzhù wǒ fàngsōng.",
                english: "Yes, practicing a little every day, slowly you'll improve. By the way, what type of music do you like listening to? I prefer relaxed music, it helps me relax.",
                audio: "audio/part3/dialogue6/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "我喜歡各種音樂，但<span class='vocab-highlight' data-word='可怕'>可怕</span>的音樂我不太喜歡。音樂應該讓人感到愉快，而不是緊張或害怕。",
                pinyin: "Wǒ xǐhuān gè zhǒng yīnyuè, dàn kěpà de yīnyuè wǒ bù tài xǐhuān. Yīnyuè yīnggāi ràng rén gǎndào yúkuài, ér bùshì jǐnzhāng huò hàipà.",
                english: "I like all kinds of music, but scary music I don't really like. Music should make people feel happy, not tense or afraid.",
                audio: "audio/part3/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue6/dialogue.mp3"
    },
    // Dialogue 7: Sports and Exercise
    {
        id: 7,
        title: "運動與鍛煉",
        titleTranslation: "Sports and Exercise",
        context: "Discussing different sports activities and experiences",
        lines: [
            {
                speaker: "A",
                chinese: "我最近開始學習跳<span class='vocab-highlight' data-word='舞'>舞</span>，雖然一開始動作不協調，但現在越來越好了。運動後經常會<span class='vocab-highlight' data-word='流汗'>流汗</span>，感覺很舒服。",
                pinyin: "Wǒ zuìjìn kāishǐ xuéxí tiào wǔ, suīrán yī kāishǐ dòngzuò bù xiétiáo, dàn xiànzài yuè lái yuè hǎo le. Yùndòng hòu jīngcháng huì liú hàn, gǎnjué hěn shūfu.",
                english: "I recently started learning to dance, although the movements were uncoordinated at first, now it's getting better. Often sweating after exercise feels very comfortable.",
                audio: "audio/part3/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "跳舞是很好的運動！我喜歡去<span class='vocab-highlight' data-word='游泳池'>游泳池</span><span class='vocab-highlight' data-word='游'>游</span>泳，水的<span class='vocab-highlight' data-word='深'>深</span><span class='vocab-highlight' data-word='淺'>淺</span>不同，可以選擇適合自己的區域。",
                pinyin: "Tiàowǔ shì hěn hǎo de yùndòng! Wǒ xǐhuān qù yóuyǒngchí yóu yǒng, shuǐ de shēn qiǎn bùtóng, kěyǐ xuǎnzé shìhé zìjǐ de qūyù.",
                english: "Dancing is great exercise! I like going to the swimming pool to swim, the water depth varies, you can choose an area suitable for yourself.",
                audio: "audio/part3/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "游泳對身體很好，特別是對心臟。不過我不太會游泳，只能在<span class='vocab-highlight' data-word='淺'>淺</span>水區練習。你游得很好嗎？",
                pinyin: "Yóuyǒng duì shēntǐ hěn hǎo, tèbié shì duì xīnzàng. Bùguò wǒ bù tài huì yóuyǒng, zhǐ néng zài qiǎn shuǐ qū liànxí. Nǐ yóu dé hěn hǎo ma?",
                english: "Swimming is very good for the body, especially for the heart. But I'm not very good at swimming, can only practice in the shallow water area. Do you swim well?",
                audio: "audio/part3/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "還可以，我從小就學游泳。除了游泳，我也喜歡和朋友玩一些<span class='vocab-highlight' data-word='遊戲'>遊戲</span>，比如籃球或者羽毛球。",
                pinyin: "Hái kěyǐ, wǒ cóngxiǎo jiù xué yóuyǒng. Chúle yóuyǒng, wǒ yě xǐhuān hé péngyǒu wán yīxiē yóuxì, bǐrú lánqiú huòzhě yǔmáoqiú.",
                english: "Not bad, I've been learning swimming since childhood. Besides swimming, I also like playing some games with friends, like basketball or badminton.",
                audio: "audio/part3/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue7/dialogue.mp3"
    },
    // Dialogue 8: Social Activities
    {
        id: 8,
        title: "社交活動",
        titleTranslation: "Social Activities",
        context: "Planning social gatherings and outings",
        lines: [
            {
                speaker: "B",
                chinese: "我們週末去<span class='vocab-highlight' data-word='茶館'>茶館</span>吧！那裡的環境很好，可以<span class='vocab-highlight' data-word='輕鬆'>輕鬆</span>地喝茶、<span class='vocab-highlight' data-word='談'>談</span>天。",
                pinyin: "Wǒmen zhōumò qù cháguǎn ba! Nàlǐ de huánjìng hěn hǎo, kěyǐ qīngsōng de hē chá, tán tiān.",
                english: "Let's go to the teahouse this weekend! The environment there is good, you can relax and drink tea, chat.",
                audio: "audio/part3/dialogue8/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！不過我聽說那個茶館的<span class='vocab-highlight' data-word='門票'>門票</span>有點貴。我們可以<span class='vocab-highlight' data-word='利用'>利用</span>下午的時間去，那時候人比較少。",
                pinyin: "Hǎo zhǔyì! Bùguò wǒ tīng shuō nàgè cháguǎn de ménpiào yǒudiǎn guì. Wǒmen kěyǐ lìyòng xiàwǔ de shíjiān qù, nà shíhòu rén bǐjiào shǎo.",
                english: "Good idea! But I heard that teahouse's admission ticket is a bit expensive. We can utilize the afternoon time to go, when there are fewer people.",
                audio: "audio/part3/dialogue8/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "也可以。我想<span class='vocab-highlight' data-word='約'>約</span>幾個朋友一起去，這樣更有趣。我們可以<span class='vocab-highlight' data-word='聊'>聊</span>聊天，分享最近的<span class='vocab-highlight' data-word='消息'>消息</span>。",
                pinyin: "Yě kěyǐ. Wǒ xiǎng yuē jǐ gè péngyǒu yīqǐ qù, zhèyàng gèng yǒuqù. Wǒmen kěyǐ liáo liáo tiān, fēnxiǎng zuìjìn de xiāoxi.",
                english: "That works too. I want to invite a few friends to go together, this way it's more interesting. We can chat and share recent news.",
                audio: "audio/part3/dialogue8/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，我來安排。到時候我會<span class='vocab-highlight' data-word='陪'>陪</span>大家一起去。這樣的聚會對增進友誼很有<span class='vocab-highlight' data-word='好處'>好處</span>。",
                pinyin: "Hǎo de, wǒ lái ānpái. Dào shíhòu wǒ huì péi dàjiā yīqǐ qù. Zhèyàng de jùhuì duì zēngjìn yǒuyì hěn yǒu hǎochù.",
                english: "Okay, I'll arrange it. When the time comes I'll accompany everyone to go together. Such gatherings are very beneficial for增进 friendships.",
                audio: "audio/part3/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue8/dialogue.mp3"
    },
    // Dialogue 9: Communication and Relationships
    {
        id: 9,
        title: "溝通與關係",
        titleTranslation: "Communication and Relationships",
        context: "Discussing communication styles and relationship building",
        lines: [
            {
                speaker: "A",
                chinese: "我覺得和人<span class='vocab-highlight' data-word='談'>談</span>話的時候，要考慮對方的感受。有時候直接的表達可能有<span class='vocab-highlight' data-word='壞處'>壞處</span>，會傷害到別人。",
                pinyin: "Wǒ juédé hé rén tán huà de shíhòu, yào kǎolǜ duìfāng de gǎnshòu. Yǒu shíhòu zhíjiē de biǎodá kěnéng yǒu huàichù, huì shānghài dào biérén.",
                english: "I think when talking with people, you need to consider the other person's feelings. Sometimes direct expression might have disadvantages, it can hurt others.",
                audio: "audio/part3/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你說得對。溝通的主要<span class='vocab-highlight' data-word='目的'>目的</span>應該是增進理解，而不是爭論對錯。我們應該學會傾聽，尊重不同的<span class='vocab-highlight' data-word='意見'>意見</span>。",
                pinyin: "Nǐ shuō dé duì. Gōutōng de zhǔyào mùdì yīnggāi shì zēngjìn lǐjiě, ér bùshì zhēnglùn duì cuò. Wǒmen yīnggāi xué huì qīngtīng, zūnzhòng bùtóng de yìjiàn.",
                english: "You're right. The main purpose of communication should be增进 understanding, not arguing about right and wrong. We should learn to listen, respect different opinions.",
                audio: "audio/part3/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "在團隊中，<span class='vocab-highlight' data-word='合作'>合作</span>非常重要。每個人都有自己的專長，通過<span class='vocab-highlight' data-word='合作'>合作</span>，我們可以完成更大的目標。",
                pinyin: "Zài tuánduì zhōng, hézuò fēicháng zhòngyào. Měi gè rén dōu yǒu zìjǐ de zhuāncháng, tōngguò hézuò, wǒmen kěyǐ wánchéng gèng dà de mùbiāo.",
                english: "In teams, cooperation is very important. Everyone has their own expertise, through cooperation, we can complete bigger goals.",
                audio: "audio/part3/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "完全同意！好的合作關係需要互相理解和支持。當朋友有需要的時候，我們應該主動提供幫助，而不是等待別人<span class='vocab-highlight' data-word='要求'>要求</span>。",
                pinyin: "Wánquán tóngyì! Hǎo de hézuò guānxì xūyào hùxiāng lǐjiě hé zhīchí. Dāng péngyǒu yǒu xūyào de shíhòu, wǒmen yīnggāi zhǔdòng tígōng bāngzhù, ér bùshì děngdài biérén yāoqiú.",
                english: "Completely agree! Good cooperative relationships need mutual understanding and support. When friends are in need, we should actively provide help, not wait for others to request it.",
                audio: "audio/part3/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue9/dialogue.mp3"
    },
    // Dialogue 10: Parties and Celebrations
    {
        id: 10,
        title: "派對與慶祝",
        titleTranslation: "Parties and Celebrations",
        context: "Planning a party and discussing celebration details",
        lines: [
            {
                speaker: "B",
                chinese: "下週六我想辦一個生日<span class='vocab-highlight' data-word='派對'>派對</span>，你願意來參加嗎？我會邀請一些朋友，大家一起慶祝。",
                pinyin: "Xià zhōu liù wǒ xiǎng bàn yīgè shēngrì pàiduì, nǐ yuànyì lái cānjiā ma? Wǒ huì yāoqǐng yīxiē péngyǒu, dàjiā yīqǐ qìngzhù.",
                english: "Next Saturday I want to host a birthday party, would you like to come? I'll invite some friends, everyone celebrates together.",
                audio: "audio/part3/dialogue10/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "當然願意！需要我幫忙準備嗎？作為<span class='vocab-highlight' data-word='主人'>主人</span>，你可能會很忙，我可以幫你處理一些事情。",
                pinyin: "Dāngrán yuànyì! Xūyào wǒ bāngmáng zhǔnbèi ma? Zuòwéi zhǔrén, nǐ kěnéng huì hěn máng, wǒ kěyǐ bāng nǐ chǔlǐ yīxiē shìqíng.",
                english: "Of course! Do you need my help preparing? As the host, you might be very busy, I can help you handle some things.",
                audio: "audio/part3/dialogue10/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝！這次我想<span class='vocab-highlight' data-word='請客'>請客</span>，所以不需要大家帶禮物。我的<span class='vocab-highlight' data-word='目的'>目的</span>是讓大家玩得開心，不是收禮物。",
                pinyin: "Xièxiè! Zhè cì wǒ xiǎng qǐngkè, suǒyǐ bù xūyào dàjiā dài lǐwù. Wǒ de mùdì shì ràng dàjiā wán dé kāixīn, bùshì shōu lǐwù.",
                english: "Thank you! This time I want to treat everyone, so no need for everyone to bring gifts. My purpose is to let everyone have fun, not receive gifts.",
                audio: "audio/part3/dialogue10/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "你真是個好朋友！我會準時到的，不會<span class='vocab-highlight' data-word='遲到'>遲到</span>。到時候我們可以一起<span class='vocab-highlight' data-word='祝'>祝</span>你生日快樂！",
                pinyin: "Nǐ zhēnshi gè hǎo péngyǒu! Wǒ huì zhǔnshí dào de, bù huì chídào. Dào shíhòu wǒmen kěyǐ yīqǐ zhù nǐ shēngrì kuàilè!",
                english: "You're really a good friend! I'll arrive on time, won't be late. When the time comes we can together wish you happy birthday!",
                audio: "audio/part3/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue10/dialogue.mp3"
    },
    // Dialogue 11: Correspondence and Mail
    {
        id: 11,
        title: "信件與郵件",
        titleTranslation: "Correspondence and Mail",
        context: "Discussing traditional mail and modern communication",
        lines: [
            {
                speaker: "A",
                chinese: "我昨天收到一<span class='vocab-highlight' data-word='封'>封</span>來自國外朋友的信。現在大家都用電子郵件，收到手寫信的感覺很特別。",
                pinyin: "Wǒ zuótiān shōu dào yī fēng láizì guówài péngyǒu de xìn. Xiànzài dàjiā dōu yòng diànzǐ yóujiàn, shōu dào shǒuxiě xìn de gǎnjué hěn tèbié.",
                english: "Yesterday I received a letter from a foreign friend. Now everyone uses email, receiving a handwritten letter feels very special.",
                audio: "audio/part3/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是啊，我<span class='vocab-highlight' data-word='經常'>經常</span>檢查我的<span class='vocab-highlight' data-word='信箱'>信箱</span>，看看有沒有重要的<span class='vocab-highlight' data-word='郵件'>郵件</span>。不過現在大部分都是廣告，很少有手寫信了。",
                pinyin: "Shì a, wǒ jīngcháng jiǎnchá wǒ de xìnxiāng, kàn kàn yǒu méiyǒu zhòngyào de yóujiàn. Bùguò xiànzài dà bùfèn dōu shì guǎnggào, hěn shǎo yǒu shǒuxiě xìn le.",
                english: "Yes, I often check my mailbox to see if there's important mail. But now most of it is advertisements, rarely any handwritten letters.",
                audio: "audio/part3/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我準備給朋友寫<span class='vocab-highlight' data-word='回信'>回信</span>，需要去買<span class='vocab-highlight' data-word='郵票'>郵票</span>。雖然用電子郵件更方便，但我覺得手寫信更有溫度。",
                pinyin: "Wǒ zhǔnbèi gěi péngyǒu xiě huíxìn, xūyào qù mǎi yóupiào. Suīrán yòng diànzǐ yóujiàn gèng fāngbiàn, dàn wǒ juédé shǒuxiě xìn gèng yǒu wēndù.",
                english: "I'm preparing to write a reply to my friend, need to go buy stamps. Although using email is more convenient, I think handwritten letters have more warmth.",
                audio: "audio/part3/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。手寫信需要花時間和心思，這讓它變得更珍貴。對了，你寫完信後記得貼好郵票，然後放到郵筒裡。",
                pinyin: "Wǒ tóngyì. Shǒuxiě xìn xūyào huā shíjiān hé xīnsī, zhè ràng tā biàn dé gèng zhēnguì. Duì le, nǐ xiě wán xìn hòu jìdé tiē hǎo yóupiào, ránhòu fàng dào yóutǒng lǐ.",
                english: "I agree. Handwritten letters require time and thought, this makes them more precious. By the way, after you finish writing the letter remember to affix the stamp properly, then put it in the mailbox.",
                audio: "audio/part3/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue11/dialogue.mp3"
    },
    // Dialogue 12: Daily Actions and Situations
    {
        id: 12,
        title: "日常行動與情況",
        titleTranslation: "Daily Actions and Situations",
        context: "Talking about daily occurrences and handling situations",
        lines: [
            {
                speaker: "B",
                chinese: "我今天早上<span class='vocab-highlight' data-word='發生'>發生</span>了一件尷尬的事：我不小心把咖啡<span class='vocab-highlight' data-word='弄'>弄</span>灑在衣服上了。",
                pinyin: "Wǒ jīntiān zǎoshang fāshēng le yī jiàn gāngà de shì: Wǒ bù xiǎoxīn bǎ kāfēi nòng sǎ zài yīfu shàng le.",
                english: "Something embarrassing happened to me this morning: I accidentally spilled coffee on my clothes.",
                audio: "audio/part3/dialogue12/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "別擔心，這種<span class='vocab-highlight' data-word='情形'>情形</span>很多人都遇到過。你可以趕快用<span class='vocab-highlight' data-word='毛巾'>毛巾</span>擦一下，然後<span class='vocab-highlight' data-word='換'>換</span>一件衣服。",
                pinyin: "Bié dānxīn, zhè zhǒng qíngxíng hěnduō rén dōu yù dào guò. Nǐ kěyǐ gǎnkuài yòng máojīn cā yīxià, ránhòu huàn yī jiàn yīfu.",
                english: "Don't worry, many people have encountered this kind of situation. You can quickly use a towel to wipe it, then change clothes.",
                audio: "audio/part3/dialogue12/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝你讓我<span class='vocab-highlight' data-word='放心'>放心</span>。有時候我會因為這種小事緊張，擔心別人會怎麼看我。",
                pinyin: "Xièxiè nǐ ràng wǒ fàngxīn. Yǒu shíhòu wǒ huì yīnwèi zhè zhǒng xiǎo shì jǐnzhāng, dānxīn biérén huì zěnme kàn wǒ.",
                english: "Thank you for letting me feel at ease. Sometimes I get nervous about such small things, worried about how others will see me.",
                audio: "audio/part3/dialogue12/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "不用太在意，大家都會犯錯。重要的是從錯誤中學習，下次小心一點。你<span class='vocab-highlight' data-word='看起來'>看起來</span>已經處理得很好了。",
                pinyin: "Bùyòng tài zàiyì, dàjiā dōu huì fàncuò. Zhòngyào de shì cóng cuòwù zhōng xuéxí, xià cì xiǎoxīn yīdiǎn. Nǐ kàn qǐlái yǐjīng chǔlǐ dé hěn hǎo le.",
                english: "Don't worry too much, everyone makes mistakes. What's important is learning from mistakes, being more careful next time. You look like you've already handled it well.",
                audio: "audio/part3/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue12/dialogue.mp3"
    },
    // Dialogue 13: Problems and Solutions
    {
        id: 13,
        title: "問題與解決",
        titleTranslation: "Problems and Solutions",
        context: "Discussing problems and finding solutions together",
        lines: [
            {
                speaker: "A",
                chinese: "我遇到一個問題：我的錢包不見了，可能被<span class='vocab-highlight' data-word='偷'>偷</span>了。裡面有我的身份證和銀行卡，現在不知道該怎麼辦。",
                pinyin: "Wǒ yù dào yīgè wèntí: Wǒ de qiánbāo bùjiàn le, kěnéng bèi tōu le. Lǐmiàn yǒu wǒ de shēnfènzhèng hé yínháng kǎ, xiànzài bù zhīdào gāi zěnme bàn.",
                english: "I encountered a problem: my wallet is missing, might have been stolen. Inside there's my ID card and bank card, now I don't know what to do.",
                audio: "audio/part3/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "這真是個<span class='vocab-highlight' data-word='可怕'>可怕</span>的<span class='vocab-highlight' data-word='情形'>情形</span>！你應該<span class='vocab-highlight' data-word='趕快'>趕快</span>報警，然後聯繫銀行掛失卡片。我也會幫你找找看。",
                pinyin: "Zhè zhēnshi gè kěpà de qíngxíng! Nǐ yīnggāi gǎnkuài bàojǐng, ránhòu liánxì yínháng guàshī kǎpiàn. Wǒ yě huì bāng nǐ zhǎo zhǎo kàn.",
                english: "This is really a terrible situation! You should quickly report to the police, then contact the bank to report the cards lost. I'll also help you look for it.",
                audio: "audio/part3/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "謝謝你！我已經去警察局報案了。現在最麻煩的是要重新辦身份證，可能需要一段時間。",
                pinyin: "Xièxiè nǐ! Wǒ yǐjīng qù jǐngchá jú bào'àn le. Xiànzài zuì máfan de shì yào chóngxīn bàn shēnfènzhèng, kěnéng xūyào yīduàn shíjiān.",
                english: "Thank you! I've already gone to the police station to report it. Now the most troublesome thing is needing to reapply for ID card, might take some time.",
                audio: "audio/part3/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "別擔心，這些事情都會解決的。你可以<span class='vocab-highlight' data-word='利用'>利用</span>這個機會整理一下重要的文件，做好備份，這樣以後就不會這麼麻煩了。",
                pinyin: "Bié dānxīn, zhèxiē shìqíng dōu huì jiějué de. Nǐ kěyǐ lìyòng zhège jīhuì zhěnglǐ yīxià zhòngyào de wénjiàn, zuò hǎo bèifèn, zhèyàng yǐhòu jiù bù huì zhème máfan le.",
                english: "Don't worry, these things will all be resolved. You can utilize this opportunity to organize important documents, make backups, so it won't be this troublesome in the future.",
                audio: "audio/part3/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue13/dialogue.mp3"
    },
    // Dialogue 14: Time Management
    {
        id: 14,
        title: "時間管理",
        titleTranslation: "Time Management",
        context: "Discussing how to manage time effectively",
        lines: [
            {
                speaker: "B",
                chinese: "我最近覺得時間不夠用，工作、學習、運動都<span class='vocab-highlight' data-word='同時'>同時</span>進行，壓力很大。",
                pinyin: "Wǒ zuìjìn juédé shíjiān bù gòu yòng, gōngzuò, xuéxí, yùndòng dōu tóngshí jìnxíng, yālì hěn dà.",
                english: "Recently I feel like there's not enough time, work, study, exercise are all happening simultaneously, pressure is high.",
                audio: "audio/part3/dialogue14/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "你需要好好安排時間，設定優先順序。可以試試把重要的事情先做完，不那麼急的事情可以<span class='vocab-highlight' data-word='留'>留</span>到後面。",
                pinyin: "Nǐ xūyào hǎohǎo ānpái shíjiān, shèdìng yōuxiān shùnxù. Kěyǐ shì shì bǎ zhòngyào de shìqíng xiān zuò wán, bù nàme jí de shìqíng kěyǐ liú dào hòumiàn.",
                english: "You need to properly arrange time, set priorities. Can try finishing important things first, less urgent things can be left for later.",
                audio: "audio/part3/dialogue14/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "你說得對。我應該學會拒絕一些不必要的活動，把時間<span class='vocab-highlight' data-word='留'>留</span>給真正重要的事情。有時候答應太多<span class='vocab-highlight' data-word='約會'>約會</span>，反而會讓自己更累。",
                pinyin: "Nǐ shuō dé duì. Wǒ yīnggāi xué huì jùjué yīxiē bù bìyào de huódòng, bǎ shíjiān liú gěi zhēnzhèng zhòngyào de shìqíng. Yǒu shíhòu dāyìng tài duō yuēhuì, fǎn'ér huì ràng zìjǐ gèng lèi.",
                english: "You're right. I should learn to refuse some unnecessary activities, leave time for truly important things. Sometimes agreeing to too many appointments actually makes you more tired.",
                audio: "audio/part3/dialogue14/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "對，時間管理就像整理房間一樣，需要定期清理和調整。你可以試試每天寫計劃，這樣就知道該做什麼，不會浪費時間。",
                pinyin: "Duì, shíjiān guǎnlǐ jiù xiàng zhěnglǐ fángjiān yīyàng, xūyào dìngqī qīnglǐ hé tiáozhěng. Nǐ kěyǐ shì shì měitiān xiě jìhuà, zhèyàng jiù zhīdào gāi zuò shénme, bù huì làngfèi shíjiān.",
                english: "Right, time management is like organizing a room, needs regular cleaning and adjustment. You can try writing plans every day, this way you know what to do, won't waste time.",
                audio: "audio/part3/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue14/dialogue.mp3"
    },
    // Dialogue 15: Personal Growth and Dreams
    {
        id: 15,
        title: "個人成長與夢想",
        titleTranslation: "Personal Growth and Dreams",
        context: "Talking about personal development and aspirations",
        lines: [
            {
                speaker: "A",
                chinese: "我昨天晚上做了一個奇怪的<span class='vocab-highlight' data-word='夢'>夢</span>，夢見自己在天空飛翔。雖然只是夢，但感覺很真實。",
                pinyin: "Wǒ zuótiān wǎnshang zuò le yīgè qíguài de mèng, mèng jiàn zìjǐ zài tiānkōng fēixiáng. Suīrán zhǐshì mèng, dàn gǎnjué hěn zhēnshí.",
                english: "Last night I had a strange dream, dreamed I was flying in the sky. Although just a dream, it felt very real.",
                audio: "audio/part3/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "夢有時候反映我們的內心想法。我<span class='vocab-highlight' data-word='經常'>經常</span>夢到小時候的事情，可能是因為最近壓力大，想回到簡單的<span class='vocab-highlight' data-word='生活'>生活</span>。",
                pinyin: "Mèng yǒu shíhòu fǎnyìng wǒmen de nèixīn xiǎngfǎ. Wǒ jīngcháng mèng dào xiǎoshíhòu de shìqíng, kěnéng shì yīnwèi zuìjìn yālì dà, xiǎng huí dào jiǎndān de shēnghuó.",
                english: "Dreams sometimes reflect our inner thoughts. I often dream about childhood things, might be because recently pressure is high, want to return to simple life.",
                audio: "audio/part3/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是啊，我們都需要適當放鬆。你可以試試睡前聽<span class='vocab-highlight' data-word='輕鬆'>輕鬆</span>的音樂，調整好<span class='vocab-highlight' data-word='枕頭'>枕頭</span>的高度，這樣可以幫助睡得更安穩。",
                pinyin: "Shì a, wǒmen dōu xūyào shìdàng fàngsōng. Nǐ kěyǐ shì shì shuì qián tīng qīngsōng de yīnyuè, tiáozhěng hǎo zhěntou de gāodù, zhèyàng kěyǐ bāngzhù shuì dé gèng ānwěn.",
                english: "Yes, we all need proper relaxation. You can try listening to relaxed music before sleep, adjust pillow height properly, this can help sleep more soundly.",
                audio: "audio/part3/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好建議！我也在學習更好地<span class='vocab-highlight' data-word='照顧'>照顧</span>自己，包括身體和心理的健康。畢竟，只有健康的身體才能追求夢想。",
                pinyin: "Hǎo jiànyì! Wǒ yě zài xuéxí gèng hǎo de zhàogù zìjǐ, bāokuò shēntǐ hé xīnlǐ de jiànkāng. Bìjìng, zhǐyǒu jiànkāng de shēntǐ cáinéng zhuīqiú mèngxiǎng.",
                english: "Good suggestion! I'm also learning to better take care of myself, including physical and mental health. After all, only with a healthy body can you pursue dreams.",
                audio: "audio/part3/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue15/dialogue.mp3"
    },
    // Dialogue 16: Protection and Safety
    {
        id: 16,
        title: "保護與安全",
        titleTranslation: "Protection and Safety",
        context: "Discussing personal safety and protection measures",
        lines: [
            {
                speaker: "B",
                chinese: "最近社區發生了幾起盜竊案，我們應該更加注意<span class='vocab-highlight' data-word='保護'>保護</span>自己的財產。特別是晚上<span class='vocab-highlight' data-word='出門'>出門</span>的時候，要小心一點。",
                pinyin: "Zuìjìn shèqū fāshēng le jǐ qǐ dàoqiè àn, wǒmen yīnggāi gèngjiā zhùyì bǎohù zìjǐ de cáichǎn. Tèbié shì wǎnshang chūmén de shíhòu, yào xiǎoxīn yīdiǎn.",
                english: "Recently there have been several theft cases in the community, we should pay more attention to protecting our property. Especially when going out at night, need to be more careful.",
                audio: "audio/part3/dialogue16/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我們可以<span class='vocab-highlight' data-word='利用'>利用</span>一些安全措施，比如安裝防盜鎖，或者和<span class='vocab-highlight' data-word='鄰居'>鄰居</span>互相照應。",
                pinyin: "Nǐ shuō dé duì. Wǒmen kěyǐ lìyòng yīxiē ānquán cuòshī, bǐrú ānzhuāng fángdào suǒ, huòzhě hé línjū hùxiāng zhàoyìng.",
                english: "You're right. We can utilize some safety measures, like installing防盗 locks, or looking out for each other with neighbors.",
                audio: "audio/part3/dialogue16/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "對，安全是最重要的。我們也要注意個人安全，比如不要<span class='vocab-highlight' data-word='留'>留</span>貴重物品在車裡，晚上盡量不要單獨<span class='vocab-highlight' data-word='出門'>出門</span>。",
                pinyin: "Duì, ānquán shì zuì zhòngyào de. Wǒmen yě yào zhùyì gèrén ānquán, bǐrú bùyào liú guìzhòng wùpǐn zài chē lǐ, wǎnshang jǐnliàng bùyào dāndú chūmén.",
                english: "Right, safety is most important. We also need to pay attention to personal safety, like not leaving valuables in the car, try not to go out alone at night.",
                audio: "audio/part3/dialogue16/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "我會記住的。謝謝你的提醒！我們都應該學會<span class='vocab-highlight' data-word='保護'>保護</span>自己，同時也關心身邊的人的安全。",
                pinyin: "Wǒ huì jì zhù de. Xièxiè nǐ de tíxǐng! Wǒmen dōu yīnggāi xué huì bǎohù zìjǐ, tóngshí yě guānxīn shēnbiān de rén de ānquán.",
                english: "I'll remember. Thank you for the reminder! We should all learn to protect ourselves, while also caring about the safety of people around us.",
                audio: "audio/part3/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue16/dialogue.mp3"
    },
    // Dialogue 17: Mistakes and Corrections
    {
        id: 17,
        title: "錯誤與改正",
        titleTranslation: "Mistakes and Corrections",
        context: "Talking about making mistakes and learning from them",
        lines: [
            {
                speaker: "A",
                chinese: "我昨天不小心把重要文件<span class='vocab-highlight' data-word='丟'>丟</span>了，現在很後悔。這是我第一次犯這麼嚴重的錯誤。",
                pinyin: "Wǒ zuótiān bù xiǎoxīn bǎ zhòngyào wénjiàn diū le, xiànzài hěn hòuhuǐ. Zhè shì wǒ dì yī cì fàn zhème yánzhòng de cuòwù.",
                english: "Yesterday I accidentally lost important documents, now I really regret it. This is the first time I've made such a serious mistake.",
                audio: "audio/part3/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "別太自責，每個人都會犯錯。重要的是從錯誤中學習，下次更加小心。你可以試試把重要文件放在固定的地方，這樣就不容易<span class='vocab-highlight' data-word='弄'>弄</span>丟。",
                pinyin: "Bié tài zìzé, měi gè rén dōu huì fàncuò. Zhòngyào de shì cóng cuòwù zhōng xuéxí, xià cì gèngjiā xiǎoxīn. Nǐ kěyǐ shì shì bǎ zhòngyào wénjiàn fàng zài gùdìng de dìfāng, zhèyàng jiù bù róngyì nòng diū.",
                english: "Don't blame yourself too much, everyone makes mistakes. What's important is learning from mistakes, being more careful next time. You can try putting important documents in fixed places, this way they won't easily get lost.",
                audio: "audio/part3/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我現在學會了要更加仔細。有時候我們需要犯錯才能學會正確的做法，這就是成長的過程。",
                pinyin: "Nǐ shuō dé duì. Wǒ xiànzài xué huì le yào gèngjiā zǐxì. Yǒu shíhòu wǒmen xūyào fàncuò cáinéng xué huì zhèngquè de zuòfǎ, zhè jiùshì chéngzhǎng de guòchéng.",
                english: "You're right. Now I've learned to be more careful. Sometimes we need to make mistakes to learn the right way, this is the process of growth.",
                audio: "audio/part3/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "完全同意！錯誤並不可怕，可怕的是不從錯誤中學習。你<span class='vocab-highlight' data-word='看起來'>看起來</span>已經從這次經驗中學到了很多，這就是進步。",
                pinyin: "Wánquán tóngyì! Cuòwù bìng bù kěpà, kěpà de shì bù cóng cuòwù zhōng xuéxí. Nǐ kàn qǐlái yǐjīng cóng zhè cì jīngyàn zhōng xué dào le hěnduō, zhè jiùshì jìnbù.",
                english: "Completely agree! Mistakes aren't可怕, what's可怕 is not learning from mistakes. You look like you've already learned a lot from this experience, this is progress.",
                audio: "audio/part3/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue17/dialogue.mp3"
    },
    // Dialogue 18: Completion and Endings
    {
        id: 18,
        title: "完成與結束",
        titleTranslation: "Completion and Endings",
        context: "Discussing project completion and transitions",
        lines: [
            {
                speaker: "B",
                chinese: "我終於把那個大項目做<span class='vocab-highlight' data-word='完'>完</span>了！感覺<span class='vocab-highlight' data-word='輕鬆'>輕鬆</span>了很多。這個項目持續了三個月，現在終於<span class='vocab-highlight' data-word='結束'>結束</span>了。",
                pinyin: "Wǒ zhōngyú bǎ nàgè dà xiàngmù zuò wán le! Gǎnjué qīngsōng le hěnduō. Zhège xiàngmù chíxù le sān gè yuè, xiànzài zhōngyú jiéshù le.",
                english: "I finally finished that big project! Feel much more relaxed. This project lasted three months, now it's finally ended.",
                audio: "audio/part3/dialogue18/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "恭喜你！完成一個大項目確實很有成就感。你現在可以好好休息一下，或者開始計劃下一個目標。",
                pinyin: "Gōngxǐ nǐ! Wánchéng yīgè dà xiàngmù quèshí hěn yǒu chéngjiù gǎn. Nǐ xiànzài kěyǐ hǎohǎo xiūxi yīxià, huòzhě kāishǐ jìhuà xià yīgè mùbiāo.",
                english: "Congratulations! Completing a big project indeed gives a sense of achievement. Now you can rest properly, or start planning the next goal.",
                audio: "audio/part3/dialogue18/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "我想先休息幾天，然後再考慮下一步。有時候<span class='vocab-highlight' data-word='結束'>結束</span>也是新的開始，我們可以從過去的經驗中學習，變得更好。",
                pinyin: "Wǒ xiǎng xiān xiūxi jǐ tiān, ránhòu zài kǎolǜ xià yī bù. Yǒu shíhòu jiéshù yěshì xīn de kāishǐ, wǒmen kěyǐ cóng guòqù de jīngyàn zhōng xuéxí, biàn dé gèng hǎo.",
                english: "I want to rest a few days first, then consider the next step. Sometimes ending is also a new beginning, we can learn from past experiences, become better.",
                audio: "audio/part3/dialogue18/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "說得太好了！每一個結束都為新的機會打開大門。你現在應該為自己的成就感到驕傲，然後繼續前進。",
                pinyin: "Shuō dé tài hǎo le! Měi yīgè jiéshù dōu wèi xīn de jīhuì dǎkāi dàmén. Nǐ xiànzài yīnggāi wèi zìjǐ de chéngjiù gǎndào jiāo'ào, ránhòu jìxù qiánjìn.",
                english: "Well said! Every ending opens the door for new opportunities. Now you should feel proud of your achievement, then continue moving forward.",
                audio: "audio/part3/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue18/dialogue.mp3"
    },
    // Dialogue 19: Final Thoughts and Connections
    {
        id: 19,
        title: "最後想法與連接",
        titleTranslation: "Final Thoughts and Connections",
        context: "Reflecting on learning and making connections",
        lines: [
            {
                speaker: "A",
                chinese: "通過這些對話，我發現學習中文不僅是記住單詞，更是理解文化和生活方式。每個詞語背後都有豐富的意義。",
                pinyin: "Tōngguò zhèxiē duìhuà, wǒ fāxiàn xuéxí Zhōngwén bùjǐn shì jì zhù dāncí, gèng shì lǐjiě wénhuà hé shēnghuó fāngshì. Měi gè cíyǔ bèihòu dōu yǒu fēngfù de yìyì.",
                english: "Through these dialogues, I've found that learning Chinese isn't just remembering words, but understanding culture and lifestyle. Behind each word there's rich meaning.",
                audio: "audio/part3/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我完全同意！語言是連接人們的橋樑。當我們學會用對方的語言<span class='vocab-highlight' data-word='談'>談</span>話時，就能更好地理解對方的想法和感受。",
                pinyin: "Wǒ wánquán tóngyì! Yǔyán shì liánjiē rénmen de qiáoliáng. Dāng wǒmen xué huì yòng duìfāng de yǔyán tán huà shí, jiù néng gèng hǎo de lǐjiě duìfāng de xiǎngfǎ hé gǎnshòu.",
                english: "I completely agree! Language is a bridge connecting people. When we learn to talk using the other person's language, we can better understand their thoughts and feelings.",
                audio: "audio/part3/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，語言學習是一個持續的過程。就像河流不斷<span class='vocab-highlight' data-word='流'>流</span>動一樣，我們的知識和能力也應該不斷增長和變化。",
                pinyin: "Shì de, yǔyán xuéxí shì yīgè chíxù de guòchéng. Jiù xiàng héliú bùduàn liú dòng yīyàng, wǒmen de zhīshì hé nénglì yě yīnggāi bùduàn zēngzhǎng hé biànhuà.",
                english: "Yes, language learning is a continuous process. Just like rivers constantly flow, our knowledge and abilities should also constantly grow and change.",
                audio: "audio/part3/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "讓我們繼續努力學習，不斷進步。記住，每一次的嘗試和練習都會讓我們離目標更近一<span class='vocab-highlight' data-word='塊'>塊</span>。加油！",
                pinyin: "Ràng wǒmen jìxù nǔlì xuéxí, bùduàn jìnbù. Jì zhù, měi yī cì de chángshì hé liànxí dōu huì ràng wǒmen lí mùbiāo gèng jìn yī kuài. Jiāyóu!",
                english: "Let's continue working hard to learn, constantly improving. Remember, every attempt and practice brings us one step closer to our goal. Keep it up!",
                audio: "audio/part3/dialogue19/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue19/dialogue.mp3"
    }
];

// Configuration constants
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300,
    TOTAL_SLIDES: 19,
    TOTAL_WORDS: 80,
    TOTAL_SENTENCES: 76  // 19 dialogues × 4 sentences each
};