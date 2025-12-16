// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { 
    title: "Start Here", 
    subtitle: "Introduction to what you'll learn", 
    icon: "📍"
    },
    { 
        title: "現代與傳統", 
        subtitle: "Modern vs Traditional", 
        icon: "🏮"
    },
    { 
        title: "法律與社會方面", 
        subtitle: "Legal and Social Aspects", 
        icon: "⚖️"
    },
    { 
        title: "旅行與交通 (一)", 
        subtitle: "Travel and Transportation (Part 1)", 
        icon: "✈️"
    },
    { 
        title: "旅行與交通 (二)", 
        subtitle: "Travel and Transportation (Part 2)", 
        icon: "🚌"
    },
    { 
        title: "交通細節", 
        subtitle: "Transportation Details", 
        icon: "🚆"
    },
    { 
        title: "各大洲與旅行經驗", 
        subtitle: "Continents and Travel Experiences", 
        icon: "🌍"
    },
    { 
        title: "交通行動", 
        subtitle: "Transportation Actions", 
        icon: "🚶"
    },
    { 
        title: "旅行必需品", 
        subtitle: "Travel Essentials", 
        icon: "🎒"
    },
    { 
        title: "方向與導航", 
        subtitle: "Directions and Navigation", 
        icon: "🧭"
    },
    { 
        title: "車輛維護", 
        subtitle: "Vehicle Maintenance", 
        icon: "🚗"
    },
    { 
        title: "交通標準與安全", 
        subtitle: "Traffic Standards and Safety", 
        icon: "🛑"
    },
    { 
        title: "健康問題", 
        subtitle: "Health Issues", 
        icon: "🤒"
    },
    { 
        title: "醫療照顧", 
        subtitle: "Medical Care", 
        icon: "🏥"
    },
    { 
        title: "身體症狀", 
        subtitle: "Physical Symptoms", 
        icon: "💪"
    },
    { 
        title: "商業與生意", 
        subtitle: "Business and Commerce", 
        icon: "💼"
    },
    { 
        title: "商業挑戰", 
        subtitle: "Business Challenges", 
        icon: "📈"
    },
    { 
        title: "金錢與財富", 
        subtitle: "Money and Wealth", 
        icon: "💰"
    },
    { 
        title: "攝影與記憶", 
        subtitle: "Photography and Memories", 
        icon: "📸"
    },
    { 
        title: "最後反思", 
        subtitle: "Final Reflections", 
        icon: "🤔"
    },
    { 
        title: "詞彙複習", 
        subtitle: "Vocabulary Review", 
        icon: "📚"
    },
    { //required last slide
        title: "Course Complete", 
        subtitle: "Congratulations!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    // Modern vs Traditional
    { chinese: "現代", pinyin: "xiàndài", english: "modern", audio: "audio/part4/words/xiandai.mp3" },
    { chinese: "傳統", pinyin: "chuántǒng", english: "traditional", audio: "audio/part4/words/chuantong.mp3" },
    { chinese: "除夕", pinyin: "chúxī", english: "New Year's Eve", audio: "audio/part4/words/chuxi.mp3" },
    { chinese: "春節", pinyin: "chūnjié", english: "Chinese New Year", audio: "audio/part4/words/chunjie.mp3" },
    { chinese: "節日", pinyin: "jiérì", english: "festival, holiday", audio: "audio/part4/words/jieri.mp3" },
    { chinese: "帶來", pinyin: "dàilái", english: "bring, bring about", audio: "audio/part4/words/dailai.mp3" },
    { chinese: "當中", pinyin: "dāngzhōng", english: "among, within", audio: "audio/part4/words/dangzhong.mp3" },
    
    // Legal and Social
    { chinese: "法律", pinyin: "fǎlǜ", english: "law", audio: "audio/part4/words/falv.mp3" },
    { chinese: "方面", pinyin: "fāngmiàn", english: "aspect, respect", audio: "audio/part4/words/fangmian.mp3" },
    { chinese: "開玩笑", pinyin: "kāi wánxiào", english: "joke, make fun", audio: "audio/part4/words/kaiwanxiao.mp3" },
    { chinese: "可惜", pinyin: "kěxī", english: "it's a pity, unfortunately", audio: "audio/part4/words/kexi.mp3" },
    { chinese: "老太太", pinyin: "lǎo tàitai", english: "elderly lady", audio: "audio/part4/words/laotaitai.mp3" },
    { chinese: "有名", pinyin: "yǒumíng", english: "famous, well-known", audio: "audio/part4/words/youming.mp3" },
    { chinese: "自由", pinyin: "zìyóu", english: "freedom, free", audio: "audio/part4/words/ziyou.mp3" },
    { chinese: "社會", pinyin: "shèhuì", english: "society", audio: "audio/part4/words/shehui.mp3" },
    
    // Travel and Time
    { chinese: "時差", pinyin: "shíchā", english: "time difference, jet lag", audio: "audio/part4/words/shicha.mp3" },
    { chinese: "市區", pinyin: "shìqū", english: "urban area, downtown", audio: "audio/part4/words/shiqu.mp3" },
    { chinese: "溫泉", pinyin: "wēnquán", english: "hot spring", audio: "audio/part4/words/wenquan.mp3" },
    { chinese: "公路", pinyin: "gōnglù", english: "highway", audio: "audio/part4/words/gonglu.mp3" },
    { chinese: "速度", pinyin: "sùdù", english: "speed", audio: "audio/part4/words/sudu.mp3" },
    { chinese: "到處", pinyin: "dàochù", english: "everywhere", audio: "audio/part4/words/daochu.mp3" },
    { chinese: "地點", pinyin: "dìdiǎn", english: "location, place", audio: "audio/part4/words/didian.mp3" },
    
    // Transportation
    { chinese: "巴士", pinyin: "bāshì", english: "bus", audio: "audio/part4/words/bashi.mp3" },
    { chinese: "加油", pinyin: "jiāyóu", english: "refuel, cheer up", audio: "audio/part4/words/jiayou.mp3" },
    { chinese: "摩托車/機車", pinyin: "mótuōchē/jīchē", english: "motorcycle", audio: "audio/part4/words/motuoche.mp3" },
    { chinese: "船/船兒", pinyin: "chuán/chuán er", english: "ship, boat", audio: "audio/part4/words/chuan.mp3" },
    { chinese: "地鐵", pinyin: "dìtiě", english: "subway, metro", audio: "audio/part4/words/ditie.mp3" },
    { chinese: "捷運", pinyin: "jiéyùn", english: "metro, rapid transit", audio: "audio/part4/words/jieyun.mp3" },
    { chinese: "停車場", pinyin: "tíngchēchǎng", english: "parking lot", audio: "audio/part4/words/tingchechang.mp3" },
    { chinese: "月台", pinyin: "yuètái", english: "platform (train station)", audio: "audio/part4/words/yuetai.mp3" },
    { chinese: "搭", pinyin: "dā", english: "take, ride", audio: "audio/part4/words/da.mp3" },
    { chinese: "飛", pinyin: "fēi", english: "fly", audio: "audio/part4/words/fei.mp3" },
    { chinese: "下", pinyin: "xià", english: "get off, descend", audio: "audio/part4/words/xia.mp3" },
    { chinese: "上", pinyin: "shàng", english: "get on, ascend", audio: "audio/part4/words/shang.mp3" },
    
    // Demonstratives and Continents
    { chinese: "這些", pinyin: "zhèxiē", english: "these", audio: "audio/part4/words/zhexie.mp3" },
    { chinese: "那些", pinyin: "nàxiē", english: "those", audio: "audio/part4/words/naxie.mp3" },
    { chinese: "東方", pinyin: "dōngfāng", english: "East, Eastern", audio: "audio/part4/words/dongfang.mp3" },
    { chinese: "非洲", pinyin: "Fēizhōu", english: "Africa", audio: "audio/part4/words/feizhou.mp3" },
    { chinese: "美洲", pinyin: "Měizhōu", english: "Americas", audio: "audio/part4/words/meizhou.mp3" },
    { chinese: "歐洲", pinyin: "Ōuzhōu", english: "Europe", audio: "audio/part4/words/ouzhou.mp3" },
    { chinese: "亞洲", pinyin: "Yàzhōu", english: "Asia", audio: "audio/part4/words/yazhou.mp3" },
    { chinese: "大陸", pinyin: "dàlù", english: "continent, mainland", audio: "audio/part4/words/dalu.mp3" },
    
    // Movement and Transportation
    { chinese: "動", pinyin: "dòng", english: "move", audio: "audio/part4/words/dong.mp3" },
    { chinese: "起", pinyin: "qǐ", english: "rise, start", audio: "audio/part4/words/qi.mp3" },
    { chinese: "停", pinyin: "tíng", english: "stop", audio: "audio/part4/words/ting.mp3" },
    { chinese: "中心", pinyin: "zhōngxīn", english: "center", audio: "audio/part4/words/zhongxin.mp3" },
    
    // Travel Documents and Items
    { chinese: "簽證", pinyin: "qiānzhèng", english: "visa", audio: "audio/part4/words/qianzheng.mp3" },
    { chinese: "行李", pinyin: "xínglǐ", english: "luggage", audio: "audio/part4/words/xingli.mp3" },
    { chinese: "背包", pinyin: "bēibāo", english: "backpack", audio: "audio/part4/words/beibao.mp3" },
    { chinese: "鎖", pinyin: "suǒ", english: "lock", audio: "audio/part4/words/suo.mp3" },
    { chinese: "入口", pinyin: "rùkǒu", english: "entrance", audio: "audio/part4/words/rukou.mp3" },
    { chinese: "出口", pinyin: "chūkǒu", english: "exit", audio: "audio/part4/words/chukou.mp3" },
    { chinese: "油", pinyin: "yóu", english: "oil, fuel", audio: "audio/part4/words/you.mp3" },
    { chinese: "鑰匙", pinyin: "yàoshi", english: "key", audio: "audio/part4/words/yaoshi.mp3" },
    { chinese: "方向", pinyin: "fāngxiàng", english: "direction", audio: "audio/part4/words/fangxiang.mp3" },
    
    // Traffic and Standards
    { chinese: "交通", pinyin: "jiāotōng", english: "traffic, transportation", audio: "audio/part4/words/jiaotong.mp3" },
    { chinese: "標準", pinyin: "biāozhǔn", english: "standard", audio: "audio/part4/words/biaozhun.mp3" },
    { chinese: "拍照", pinyin: "pāizhào", english: "take photos", audio: "audio/part4/words/paizhao.mp3" },
    
    // Body Parts and Health
    { chinese: "腿", pinyin: "tuǐ", english: "leg", audio: "audio/part4/words/tui.mp3" },
    { chinese: "背", pinyin: "bèi", english: "back", audio: "audio/part4/words/bei.mp3" },
    { chinese: "脖(子)", pinyin: "bó(zi)", english: "neck", audio: "audio/part4/words/bozi.mp3" },
    { chinese: "汗", pinyin: "hàn", english: "sweat", audio: "audio/part4/words/han.mp3" },
    { chinese: "臉色", pinyin: "liǎnsè", english: "complexion, facial expression", audio: "audio/part4/words/lianse.mp3" },
    { chinese: "救護車", pinyin: "jiùhùchē", english: "ambulance", audio: "audio/part4/words/jiuhuche.mp3" },
    { chinese: "咳嗽", pinyin: "késòu", english: "cough", audio: "audio/part4/words/kesou.mp3" },
    { chinese: "發燒", pinyin: "fāshāo", english: "have a fever", audio: "audio/part4/words/fashao.mp3" },
    { chinese: "頭痛", pinyin: "tóutòng", english: "headache", audio: "audio/part4/words/toutong.mp3" },
    { chinese: "疼", pinyin: "téng", english: "pain, ache", audio: "audio/part4/words/teng.mp3" },
    
    // Medical and Insurance
    { chinese: "保險", pinyin: "bǎoxiǎn", english: "insurance", audio: "audio/part4/words/baoxian.mp3" },
    { chinese: "掛號", pinyin: "guàhào", english: "register (at hospital)", audio: "audio/part4/words/guahao.mp3" },
    { chinese: "牙刷", pinyin: "yáshuā", english: "toothbrush", audio: "audio/part4/words/yashua.mp3" },
    { chinese: "藥房", pinyin: "yàofáng", english: "pharmacy", audio: "audio/part4/words/yaofang.mp3" },
    { chinese: "救命", pinyin: "jiùmìng", english: "help, save life", audio: "audio/part4/words/jiuming.mp3" },
    
    // Feelings and State
    { chinese: "影響", pinyin: "yǐngxiǎng", english: "influence, affect", audio: "audio/part4/words/yingxiang.mp3" },
    { chinese: "感覺", pinyin: "gǎnjué", english: "feel, feeling", audio: "audio/part4/words/ganjue.mp3" },
    { chinese: "精神", pinyin: "jīngshén", english: "spirit, mental state", audio: "audio/part4/words/jingshen.mp3" },
    { chinese: "正常", pinyin: "zhèngcháng", english: "normal", audio: "audio/part4/words/zhengchang.mp3" },
    
    // Nature and Wealth
    { chinese: "花", pinyin: "huā", english: "flower, spend", audio: "audio/part4/words/hua.mp3" },
    { chinese: "有錢", pinyin: "yǒuqián", english: "wealthy, rich", audio: "audio/part4/words/youqian.mp3" },
    
    // Business and Commerce
    { chinese: "生意", pinyin: "shēngyì", english: "business", audio: "audio/part4/words/shengyi.mp3" },
    { chinese: "商人", pinyin: "shāngrén", english: "businessperson, merchant", audio: "audio/part4/words/shangren.mp3" },
    { chinese: "老闆娘/老板娘", pinyin: "lǎobǎnniáng", english: "female boss, proprietress", audio: "audio/part4/words/laobanniang.mp3" },
    { chinese: "店員", pinyin: "diànyuán", english: "shop assistant", audio: "audio/part4/words/dianyuan.mp3" },
    { chinese: "訂", pinyin: "dìng", english: "order, book", audio: "audio/part4/words/ding.mp3" },
    { chinese: "訂位", pinyin: "dìngwèi", english: "make a reservation", audio: "audio/part4/words/dingwei.mp3" },
    { chinese: "得到", pinyin: "dédào", english: "obtain, get", audio: "audio/part4/words/dedao.mp3" },
    { chinese: "困難", pinyin: "kùnnán", english: "difficulty, difficult", audio: "audio/part4/words/kunnan.mp3" }
];

// Dialogue Database - ALL 19 DIALOGUES with vocabulary highlighting
const dialoguesDB = [
    {
        id: 1,
        title: "現代與傳統",
        titleTranslation: "Modern vs Traditional",
        context: "Two friends discussing cultural changes and traditions",
        lines: [
            {
                speaker: "A",
                chinese: "現在的<span class='vocab-highlight' data-word='現代'>現代</span><span class='vocab-highlight' data-word='社會'>社會</span>和以前的<span class='vocab-highlight' data-word='傳統'>傳統</span><span class='vocab-highlight' data-word='社會'>社會</span>有很多不同。<span class='vocab-highlight' data-word='這些'>這些</span>變化既<span class='vocab-highlight' data-word='帶來'>帶來</span>方便，也<span class='vocab-highlight' data-word='帶來'>帶來</span>挑戰。",
                pinyin: "Xiànzài de xiàndài shèhuì hé yǐqián de chuántǒng shèhuì yǒu hěnduō bùtóng. Zhèxiē biànhuà jì dàilái fāngbiàn, yě dàilái tiǎozhàn.",
                english: "Modern society today is very different from traditional society in the past. These changes bring both convenience and challenges.",
                audio: "audio/part4/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是啊，比如<span class='vocab-highlight' data-word='春節'>春節</span>的時候，我們還會保留一些<span class='vocab-highlight' data-word='傳統'>傳統</span>習俗，但慶祝方式已經<span class='vocab-highlight' data-word='現代'>現代</span>化了。<span class='vocab-highlight' data-word='除夕'>除夕</span>夜的團圓飯就是一個例子。",
                pinyin: "Shì a, bǐrú chūnjié de shíhòu, wǒmen hái huì bǎoliú yīxiē chuántǒng xísú, dàn qìngzhù fāngshì yǐjīng xiàndàihuà le. Chúxī yè de tuányuán fàn jiùshì yīgè lìzi.",
                english: "Yes, for example during Chinese New Year, we still keep some traditional customs, but the celebration methods have modernized. The reunion dinner on New Year's Eve is one example.",
                audio: "audio/part4/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='春節'>春節</span>是中國最重要的<span class='vocab-highlight' data-word='節日'>節日</span>之一。這個<span class='vocab-highlight' data-word='節日'>節日</span><span class='vocab-highlight' data-word='帶來'>帶來</span>的不只是假期，更是家庭團聚的機會。<span class='vocab-highlight' data-word='當中'>當中</span>，我最喜歡收到紅包的時候。",
                pinyin: "Chūnjié shì Zhōngguó zuì zhòngyào de jiérì zhī yī. Zhège jiérì dàilái de bù zhǐshì jiàqī, gèng shì jiātíng tuánjù de jīhuì. Dāngzhōng, wǒ zuì xǐhuān shōu dào hóngbāo de shíhòu.",
                english: "Chinese New Year is one of China's most important festivals. This festival brings not just holidays, but opportunities for family reunions. Among these, I like receiving red envelopes the most.",
                audio: "audio/part4/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我明白。不過現在很多年輕人更喜歡<span class='vocab-highlight' data-word='現代'>現代</span>的慶祝方式，比如和朋友一起開派對。這也許是<span class='vocab-highlight' data-word='社會'>社會</span>發展的自然<span class='vocab-highlight' data-word='方面'>方面</span>。",
                pinyin: "Wǒ míngbái. Bùguò xiànzài hěnduō niánqīng rén gèng xǐhuān xiàndài de qìngzhù fāngshì, bǐrú hé péngyǒu yīqǐ kāi pàiduì. Zhè yěxǔ shì shèhuì fāzhǎn de zìrán fāngmiàn.",
                english: "I understand. But now many young people prefer modern celebration methods, like having parties with friends. This might be a natural aspect of societal development.",
                audio: "audio/part4/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "法律與社會方面",
        titleTranslation: "Legal and Social Aspects",
        context: "Discussing laws, social norms, and personal freedom",
        lines: [
            {
                speaker: "B",
                chinese: "在我們的<span class='vocab-highlight' data-word='社會'>社會</span>中，<span class='vocab-highlight' data-word='法律'>法律</span>扮演著重要的角色。它保護人們的權利，也規範人們的行為。<span class='vocab-highlight' data-word='這些'>這些</span>規定對維持秩序很重要。",
                pinyin: "Zài wǒmen de shèhuì zhōng, fǎlǜ bànyǎn zhe zhòngyào de juésè. Tā bǎohù rénmen de quánlì, yě guīfàn rénmen de xíngwéi. Zhèxiē guīdìng duì wéichí zhìxù hěn zhòngyào.",
                english: "In our society, law plays an important role. It protects people's rights and also regulates people's behavior. These regulations are important for maintaining order.",
                audio: "audio/part4/dialogue2/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，但我們也要平衡<span class='vocab-highlight' data-word='法律'>法律</span>和個人<span class='vocab-highlight' data-word='自由'>自由</span>。<span class='vocab-highlight' data-word='社會'>社會</span>的進步不僅需要嚴格的規定，也需要尊重個人的選擇和權利。",
                pinyin: "Shì de, dàn wǒmen yě yào pínghéng fǎlǜ hé gèrén zìyóu. Shèhuì de jìnbù bùjǐn xūyào yángé de guīdìng, yě xūyào zūnzhòng gèrén de xuǎnzé hé quánlì.",
                english: "Yes, but we also need to balance law and personal freedom. Social progress requires not only strict regulations, but also respect for individual choices and rights.",
                audio: "audio/part4/dialogue2/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。有時候朋友之間<span class='vocab-highlight' data-word='開玩笑'>開玩笑</span>，也要注意界線，不能傷害到別人。雖然是玩笑，但也可能對人造成負面<span class='vocab-highlight' data-word='影響'>影響</span>。",
                pinyin: "Wǒ tóngyì. Yǒu shíhòu péngyǒu zhī jiān kāi wánxiào, yě yào zhùyì jièxiàn, bùnéng shānghài dào biérén. Suīrán shì wánxiào, dàn yě kěnéng duì rén zàochéng fùmiàn yǐngxiǎng.",
                english: "I agree. Sometimes when friends joke with each other, we also need to pay attention to boundaries, can't hurt others. Although it's a joke, it might still cause negative impact on people.",
                audio: "audio/part4/dialogue2/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='可惜'>可惜</span>的是，不是每個人都明白這個道理。我認識一位<span class='vocab-highlight' data-word='老太太'>老太太</span>，她因為別人的玩笑而受傷，現在很少和別人交流了。",
                pinyin: "Kěxī de shì, bùshì měi gè rén dōu míngbái zhège dàolǐ. Wǒ rènshí yī wèi lǎo tàitai, tā yīnwèi biérén de wánxiào ér shòushāng, xiànzài hěn shǎo hé biérén jiāoliú le.",
                english: "What's regrettable is, not everyone understands this principle. I know an elderly lady who got hurt because of others' jokes, now she rarely communicates with people.",
                audio: "audio/part4/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "旅行與交通 (一)",
        titleTranslation: "Travel and Transportation (Part 1)",
        context: "Planning an international trip and discussing travel logistics",
        lines: [
            {
                speaker: "A",
                chinese: "我計劃明年去<span class='vocab-highlight' data-word='歐洲'>歐洲</span>旅行。從<span class='vocab-highlight' data-word='亞洲'>亞洲</span>到<span class='vocab-highlight' data-word='歐洲'>歐洲</span>，最大的挑戰就是<span class='vocab-highlight' data-word='時差'>時差</span>。我需要提前調整作息時間。",
                pinyin: "Wǒ jìhuà míngnián qù Ōuzhōu lǚxíng. Cóng Yàzhōu dào Ōuzhōu, zuì dà de tiǎozhàn jiùshì shíchā. Wǒ xūyào tíqián tiáozhěng zuòxī shíjiān.",
                english: "I'm planning to travel to Europe next year. From Asia to Europe, the biggest challenge is jet lag. I need to adjust my schedule in advance.",
                audio: "audio/part4/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "真不錯！<span class='vocab-highlight' data-word='歐洲'>歐洲</span>有很多<span class='vocab-highlight' data-word='有名'>有名</span>的城市和景點。你打算怎麼去？坐飛機嗎？還是考慮<span class='vocab-highlight' data-word='搭'>搭</span><span class='vocab-highlight' data-word='船'>船</span>？",
                pinyin: "Zhēn bùcuò! Ōuzhōu yǒu hěnduō yǒumíng de chéngshì hé jǐngdiǎn. Nǐ dǎsuàn zěnme qù? Zuò fēijī ma? Háishì kǎolǜ dā chuán?",
                english: "That's great! Europe has many famous cities and attractions. How do you plan to go? By plane? Or considering taking a ship?",
                audio: "audio/part4/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我會坐飛機去，這樣比較快。從<span class='vocab-highlight' data-word='東方'>東方</span><span class='vocab-highlight' data-word='飛'>飛</span>到西方，大概需要十幾個小時。我已經在網上<span class='vocab-highlight' data-word='訂'>訂</span>了機票。",
                pinyin: "Wǒ huì zuò fēijī qù, zhèyàng bǐjiào kuài. Cóng dōngfāng fēi dào xīfāng, dàgài xūyào shí jǐ gè xiǎoshí. Wǒ yǐjīng zài wǎng shàng dìng le jīpiào.",
                english: "I'll go by plane, this is faster. Flying from East to West, probably takes over ten hours. I've already booked flight tickets online.",
                audio: "audio/part4/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "那你需要準備<span class='vocab-highlight' data-word='簽證'>簽證</span>嗎？去<span class='vocab-highlight' data-word='歐洲'>歐洲</span>旅遊通常需要申請<span class='vocab-highlight' data-word='簽證'>簽證</span>。還有<span class='vocab-highlight' data-word='行李'>行李</span>也要準備好，特別是重要的文件和證件。",
                pinyin: "Nà nǐ xūyào zhǔnbèi qiānzhèng ma? Qù Ōuzhōu lǚyóu tōngcháng xūyào shēnqǐng qiānzhèng. Háiyǒu xínglǐ yě yào zhǔnbèi hǎo, tèbié shì zhòngyào de wénjiàn hé zhèngjiàn.",
                english: "Then do you need to prepare a visa? Traveling to Europe usually requires applying for a visa. Also need to prepare luggage, especially important documents and certificates.",
                audio: "audio/part4/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "旅行與交通 (二)",
        titleTranslation: "Travel and Transportation (Part 2)",
        context: "Discussing transportation options and urban travel",
        lines: [
            {
                speaker: "B",
                chinese: "在<span class='vocab-highlight' data-word='歐洲'>歐洲</span>旅行，我推薦使用公共<span class='vocab-highlight' data-word='交通'>交通</span>工具。<span class='vocab-highlight' data-word='市區'>市區</span>內的<span class='vocab-highlight' data-word='地鐵'>地鐵</span>和<span class='vocab-highlight' data-word='巴士'>巴士</span>很方便，而且比計程車便宜。",
                pinyin: "Zài Ōuzhōu lǚxíng, wǒ tuījiàn shǐyòng gōnggòng jiāotōng gōngjù. Shìqū nèi de dìtiě hé bāshì hěn fāngbiàn, érqiě bǐ jìchéngchē piányi.",
                english: "When traveling in Europe, I recommend using public transportation. Subways and buses within city areas are convenient, and cheaper than taxis.",
                audio: "audio/part4/dialogue4/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "好建議！我聽說<span class='vocab-highlight' data-word='歐洲'>歐洲</span>的<span class='vocab-highlight' data-word='捷運'>捷運</span>系統很發達。不過，如果要去郊區或者<span class='vocab-highlight' data-word='溫泉'>溫泉</span>區，可能需要考慮其他<span class='vocab-highlight' data-word='交通'>交通</span>工具。",
                pinyin: "Hǎo jiànyì! Wǒ tīng shuō Ōuzhōu de jiéyùn xìtǒng hěn fādá. Bùguò, rúguǒ yào qù jiāoqū huòzhě wēnquán qū, kěnéng xūyào kǎolǜ qítā jiāotōng gōngjù.",
                english: "Good suggestion! I heard Europe's metro systems are well-developed. But if going to suburbs or hot spring areas, might need to consider other transportation options.",
                audio: "audio/part4/dialogue4/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，有時候需要<span class='vocab-highlight' data-word='搭'>搭</span>火車或者租車。<span class='vocab-highlight' data-word='公路'>公路</span>上的<span class='vocab-highlight' data-word='速度'>速度</span>限制比較嚴格，開車時要注意安全。",
                pinyin: "Shì de, yǒu shíhòu xūyào dā huǒchē huòzhě zū chē. Gōnglù shàng de sùdù xiànzhì bǐjiào yángé, kāichē shí yào zhùyì ānquán.",
                english: "Yes, sometimes need to take trains or rent cars. Speed limits on highways are relatively strict, need to pay attention to safety when driving.",
                audio: "audio/part4/dialogue4/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "我會記住的。另外，我擔心在<span class='vocab-highlight' data-word='停車場'>停車場</span>找不到停車位。聽說<span class='vocab-highlight' data-word='歐洲'>歐洲</span><span class='vocab-highlight' data-word='到處'>到處</span>都有停車困難的問題。",
                pinyin: "Wǒ huì jì zhù de. Lìngwài, wǒ dānxīn zài tíngchēchǎng zhǎo bù dào tíngchē wèi. Tīng shuō Ōuzhōu dàochù dōu yǒu tíngchē kùnnán de wèntí.",
                english: "I'll remember. Also, I'm worried about not finding parking spaces in parking lots. I heard Europe everywhere has parking difficulties.",
                audio: "audio/part4/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "交通細節",
        titleTranslation: "Transportation Details",
        context: "Talking about different transportation modes and experiences",
        lines: [
            {
                speaker: "A",
                chinese: "我喜歡坐火車旅行。在火車<span class='vocab-highlight' data-word='月台'>月台</span>上等車的時候，可以觀察來來往往的人們。不過要注意安全，不要靠近<span class='vocab-highlight' data-word='月台'>月台</span>邊緣。",
                pinyin: "Wǒ xǐhuān zuò huǒchē lǚxíng. Zài huǒchē yuètái shàng děng chē de shíhòu, kěyǐ guānchá láiláiwǎngwǎng de rénmen. Bùguò yào zhùyì ānquán, bùyào kàojìn yuètái biānyuán.",
                english: "I like traveling by train. When waiting for trains on platforms, you can observe people coming and going. But need to pay attention to safety, don't get close to platform edges.",
                audio: "audio/part4/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "坐火車確實很有意思。我記得有一次坐<span class='vocab-highlight' data-word='船'>船</span>旅行，從一個<span class='vocab-highlight' data-word='大陸'>大陸</span>到另一個<span class='vocab-highlight' data-word='大陸'>大陸</span>，雖然時間比較長，但海上的風景很美。",
                pinyin: "Zuò huǒchē quèshí hěn yǒu yìsi. Wǒ jìdé yǒu yīcì zuò chuán lǚxíng, cóng yīgè dàlù dào lìng yīgè dàlù, suīrán shíjiān bǐjiào cháng, dàn hǎi shàng de fēngjǐng hěn měi.",
                english: "Taking trains is indeed interesting. I remember once traveling by ship, from one continent to another, although it took longer, the sea scenery was beautiful.",
                audio: "audio/part4/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "說到<span class='vocab-highlight' data-word='交通'>交通</span>工具，你覺得<span class='vocab-highlight' data-word='摩托車'>摩托車</span>怎麼樣？我在<span class='vocab-highlight' data-word='亞洲'>亞洲</span>的<span class='vocab-highlight' data-word='那些'>那些</span>城市看到很多人騎<span class='vocab-highlight' data-word='摩托車'>摩托車</span>。",
                pinyin: "Shuō dào jiāotōng gōngjù, nǐ juédé mótuōchē zěnme yàng? Wǒ zài Yàzhōu de nàxiē chéngshì kàn dào hěnduō rén qí mótuōchē.",
                english: "Speaking of transportation, what do you think about motorcycles? I see many people riding motorcycles in those Asian cities.",
                audio: "audio/part4/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='摩托車'>摩托車</span>在<span class='vocab-highlight' data-word='亞洲'>亞洲</span>很常見，特別是在東南亞國家。不過騎<span class='vocab-highlight' data-word='摩托車'>摩托車</span>要注意安全，記得戴安全帽，還有定期給車子<span class='vocab-highlight' data-word='加油'>加油</span>。",
                pinyin: "Mótuōchē zài Yàzhōu hěn chángjiàn, tèbié shì zài Dōngnányà guójiā. Bùguò qí mótuōchē yào zhùyì ānquán, jìdé dài ānquán mào, háiyǒu dìngqī gěi chēzi jiāyóu.",
                english: "Motorcycles are very common in Asia, especially in Southeast Asian countries. But riding motorcycles需要注意 safety, remember to wear helmets, and regularly refuel the vehicle.",
                audio: "audio/part4/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "各大洲與旅行經驗",
        titleTranslation: "Continents and Travel Experiences",
        context: "Sharing experiences from different continents",
        lines: [
            {
                speaker: "B",
                chinese: "我去過<span class='vocab-highlight' data-word='美洲'>美洲</span>，那裡的自然風景非常壯觀。從北<span class='vocab-highlight' data-word='美洲'>美洲</span>到南<span class='vocab-highlight' data-word='美洲'>美洲</span>，每個<span class='vocab-highlight' data-word='地點'>地點</span>都有獨特的魅力。",
                pinyin: "Wǒ qù guò Měizhōu, nàlǐ de zìrán fēngjǐng fēicháng zhuàngguān. Cóng Běi Měizhōu dào Nán Měizhōu, měi gè dìdiǎn dōu yǒu dútè de mèilì.",
                english: "I've been to the Americas, the natural scenery there is very spectacular. From North America to South America, every location has unique charm.",
                audio: "audio/part4/dialogue6/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "真羨慕！我還沒去過<span class='vocab-highlight' data-word='非洲'>非洲</span>。聽說<span class='vocab-highlight' data-word='非洲'>非洲</span>的野生動物保護區很<span class='vocab-highlight' data-word='有名'>有名</span>，可以看到很多<span class='vocab-highlight' data-word='自由'>自由</span>生活的動物。",
                pinyin: "Zhēn xiànmù! Wǒ hái méi qù guò Fēizhōu. Tīng shuō Fēizhōu de yěshēng dòngwù bǎohù qū hěn yǒumíng, kěyǐ kàn dào hěnduō zìyóu shēnghuó de dòngwù.",
                english: "So envious! I haven't been to Africa yet. I heard Africa's wildlife reserves are famous, you can see many animals living freely.",
                audio: "audio/part4/dialogue6/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='非洲'>非洲</span>的草原和沙漠都很特別。不過旅行時要小心，有些<span class='vocab-highlight' data-word='地點'>地點</span>可能比較危險，最好有當地導遊陪同。",
                pinyin: "Shì de, Fēizhōu de cǎoyuán hé shāmò dōu hěn tèbié. Bùguò lǚxíng shí yào xiǎoxīn, yǒuxiē dìdiǎn kěnéng bǐjiào wēixiǎn, zuì hǎo yǒu dāngdì dǎoyóu péitóng.",
                english: "Yes, Africa's grasslands and deserts are very special. But need to be careful when traveling, some locations might be relatively dangerous,最好 have local guides accompanying.",
                audio: "audio/part4/dialogue6/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "說到<span class='vocab-highlight' data-word='東方'>東方</span>國家，我覺得<span class='vocab-highlight' data-word='亞洲'>亞洲</span>的文化非常豐富。從<span class='vocab-highlight' data-word='傳統'>傳統</span>的寺廟到<span class='vocab-highlight' data-word='現代'>現代</span>的摩天大樓，形成有趣的對比。",
                pinyin: "Shuō dào dōngfāng guójiā, wǒ juédé Yàzhōu de wénhuà fēicháng fēngfù. Cóng chuántǒng de sìmiào dào xiàndài de mótiān dàlóu, xíngchéng yǒuqù de duìbǐ.",
                english: "Speaking of Eastern countries, I think Asian culture is very rich. From traditional temples to modern skyscrapers, forming interesting contrasts.",
                audio: "audio/part4/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "交通行動",
        titleTranslation: "Transportation Actions",
        context: "Discussing getting on/off vehicles and travel experiences",
        lines: [
            {
                speaker: "A",
                chinese: "每天早上我都要<span class='vocab-highlight' data-word='搭'>搭</span>公車去上班。在人多的時候<span class='vocab-highlight' data-word='上'>上</span>車，下班時<span class='vocab-highlight' data-word='下'>下</span>車，已經成為我的日常了。",
                pinyin: "Měitiān zǎoshang wǒ dōu yào dā gōngchē qù shàngbān. Zài rén duō de shíhòu shàng chē, xiàbān shí xià chē, yǐjīng chéngwéi wǒ de rìcháng le.",
                english: "Every morning I need to take the bus to work. Getting on during crowded times, getting off after work, has become my daily routine.",
                audio: "audio/part4/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我理解。有時候公車開<span class='vocab-highlight' data-word='動'>動</span>的時候，如果沒有站穩，可能會摔倒。所以最好等車完全<span class='vocab-highlight' data-word='停'>停</span>下來再<span class='vocab-highlight' data-word='上'>上</span>車或<span class='vocab-highlight' data-word='下'>下</span>車。",
                pinyin: "Wǒ lǐjiě. Yǒu shíhòu gōngchē kāi dòng de shíhòu, rúguǒ méiyǒu zhàn wěn, kěnéng huì shuāidǎo. Suǒyǐ zuì hǎo děng chē wánquán tíng xiàlái zài shàng chē huò xià chē.",
                english: "I understand. Sometimes when buses start moving, if not standing steadily, might fall. So最好 wait until the vehicle completely stops before getting on or off.",
                audio: "audio/part4/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我記得有一次公車突然<span class='vocab-highlight' data-word='起'>起</span>動，我差點摔倒。從那以後，我都很小心，等車完全<span class='vocab-highlight' data-word='停'>停</span>穩再行動。",
                pinyin: "Nǐ shuō dé duì. Wǒ jìdé yǒu yīcì gōngchē túrán qǐ dòng, wǒ chàdiǎn shuāidǎo. Cóng nà yǐhòu, wǒ dōu hěn xiǎoxīn, děng chē wánquán tíng wěn zài xíngdòng.",
                english: "You're right. I remember once the bus suddenly started moving, I almost fell. Since then, I've been very careful, waiting until the vehicle completely stops before moving.",
                audio: "audio/part4/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "安全最重要！另外，在<span class='vocab-highlight' data-word='交通'>交通</span><span class='vocab-highlight' data-word='中心'>中心</span>，比如火車站或機場，人來人往，要特別注意保管好自己的<span class='vocab-highlight' data-word='行李'>行李</span>。",
                pinyin: "Ānquán zuì zhòngyào! Lìngwài, zài jiāotōng zhōngxīn, bǐrú huǒchēzhàn huò jīchǎng, rén lái rén wǎng, yào tèbié zhùyì bǎoguǎn hǎo zìjǐ de xínglǐ.",
                english: "Safety is most important! Also, in transportation centers like train stations or airports, with people coming and going, need to特别 pay attention to safeguarding your luggage.",
                audio: "audio/part4/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "旅行必需品",
        titleTranslation: "Travel Essentials",
        context: "Packing for a trip and discussing travel necessities",
        lines: [
            {
                speaker: "B",
                chinese: "我每次旅行都會帶一個輕便的<span class='vocab-highlight' data-word='背包'>背包</span>，裡面放重要的東西。我還會準備一個小<span class='vocab-highlight' data-word='鎖'>鎖</span>，用來<span class='vocab-highlight' data-word='鎖'>鎖</span>住<span class='vocab-highlight' data-word='背包'>背包</span>的拉鍊。",
                pinyin: "Wǒ měi cì lǚxíng dōu huì dài yīgè qīngbiàn de bēibāo, lǐmiàn fàng zhòngyào de dōngxī. Wǒ hái huì zhǔnbèi yīgè xiǎo suǒ, yòng lái suǒ zhù bēibāo de lāliàn.",
                english: "Every time I travel I bring a lightweight backpack, putting important things inside. I also prepare a small lock to lock the backpack's zipper.",
                audio: "audio/part4/dialogue8/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！安全確實很重要。我還會把重要的證件放在貼身的袋子裡，這樣就不容易丟失。對了，你會帶<span class='vocab-highlight' data-word='牙刷'>牙刷</span>和洗漱用品嗎？",
                pinyin: "Hǎo zhǔyì! Ānquán quèshí hěn zhòngyào. Wǒ hái huì bǎ zhòngyào de zhèngjiàn fàng zài tiēshēn de dàizi lǐ, zhèyàng jiù bù róngyì diūshī. Duì le, nǐ huì dài yáshuā hé xǐshù yòngpǐn ma?",
                english: "Good idea! Safety is indeed important. I also put important documents in贴身 bags, this way they won't easily get lost. By the way, do you bring toothbrush and toiletries?",
                audio: "audio/part4/dialogue8/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "會的，我習慣用自己的洗漱用品。另外，我還會帶一個小藥包，裡面有基本的藥品。如果在國外生病，可以先去當地<span class='vocab-highlight' data-word='藥房'>藥房</span>買藥。",
                pinyin: "Huì de, wǒ xíguàn yòng zìjǐ de xǐshù yòngpǐn. Lìngwài, wǒ hái huì dài yīgè xiǎo yàobāo, lǐmiàn yǒu jīběn de yàopǐn. Rúguǒ zài guówài shēngbìng, kěyǐ xiān qù dāngdì yàofáng mǎi yào.",
                english: "Yes, I'm used to using my own toiletries. Also, I bring a small medical kit with basic medicines. If getting sick abroad, can first go to local pharmacies to buy medicine.",
                audio: "audio/part4/dialogue8/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "對，旅行<span class='vocab-highlight' data-word='保險'>保險</span>也很重要。萬一需要去醫院，<span class='vocab-highlight' data-word='保險'>保險</span>可以幫忙支付醫療費用。雖然不希望用到，但有備無患。",
                pinyin: "Duì, lǚxíng bǎoxiǎn yě hěn zhòngyào. Wànyī xūyào qù yīyuàn, bǎoxiǎn kěyǐ bāngmáng zhīfù yīliáo fèiyòng. Suīrán bù xīwàng yòng dào, dàn yǒubèiwúhuàn.",
                english: "Right, travel insurance is also important. If needing to go to the hospital, insurance can help pay medical expenses. Although hoping not to use it, better safe than sorry.",
                audio: "audio/part4/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "方向與導航",
        titleTranslation: "Directions and Navigation",
        context: "Getting lost and asking for directions",
        lines: [
            {
                speaker: "A",
                chinese: "我昨天在<span class='vocab-highlight' data-word='市區'>市區</span>迷路了，完全不知道<span class='vocab-highlight' data-word='方向'>方向</span>。幸好有一位好心人告訴我怎麼走，才找到<span class='vocab-highlight' data-word='出口'>出口</span>。",
                pinyin: "Wǒ zuótiān zài shìqū mílù le, wánquán bù zhīdào fāngxiàng. Xìnghǎo yǒu yī wèi hǎoxīn rén gàosù wǒ zěnme zǒu, cái zhǎodào chūkǒu.",
                english: "Yesterday I got lost in the city area, completely didn't know the direction. Fortunately a kind person told me how to go, then found the exit.",
                audio: "audio/part4/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我也經常遇到這種情況。現在我用手機地圖，但還是會帶一份紙本地圖備用。你知道嗎？有些建築物的<span class='vocab-highlight' data-word='入口'>入口</span>和<span class='vocab-highlight' data-word='出口'>出口</span>在不同的<span class='vocab-highlight' data-word='方向'>方向</span>。",
                pinyin: "Wǒ yě jīngcháng yù dào zhè zhǒng qíngkuàng. Xiànzài wǒ yòng shǒujī dìtú, dàn háishì huì dài yī fèn zhǐběn dìtú bèiyòng. Nǐ zhīdào ma? Yǒuxiē jiànzhùwù de rùkǒu hé chūkǒu zài bùtóng de fāngxiàng.",
                english: "I also often encounter this situation. Now I use手机 maps, but still bring a paper map as backup. You know? Some buildings' entrances and exits are in different directions.",
                audio: "audio/part4/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對，特別是大型購物<span class='vocab-highlight' data-word='中心'>中心</span>或<span class='vocab-highlight' data-word='地鐵'>地鐵</span>站。我記得有一次找<span class='vocab-highlight' data-word='地鐵'>地鐵</span><span class='vocab-highlight' data-word='入口'>入口</span>，繞了很久才找到。現在我會先研究<span class='vocab-highlight' data-word='那些'>那些</span>複雜的<span class='vocab-highlight' data-word='地點'>地點</span>的地圖。",
                pinyin: "Duì, tèbié shì dàxíng gòuwù zhōngxīn huò dìtiě zhàn. Wǒ jìdé yǒu yīcì zhǎo dìtiě rùkǒu, rào le hěn jiǔ cái zhǎodào. Xiànzài wǒ huì xiān yánjiū nàxiē fùzá de dìdiǎn de dìtú.",
                english: "Right, especially large shopping centers or subway stations. I remember once looking for subway entrance, walked around很久才找到. Now I'll first study maps of those complex locations.",
                audio: "audio/part4/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "這是一個好習慣！另外，開車的時候也要注意<span class='vocab-highlight' data-word='方向'>方向</span>指示牌。有時候<span class='vocab-highlight' data-word='公路'>公路</span>上的<span class='vocab-highlight' data-word='出口'>出口</span>很容易錯過，需要提前準備。",
                pinyin: "Zhè shì yīgè hǎo xíguàn! Lìngwài, kāichē de shíhòu yě yào zhùyì fāngxiàng zhǐshì pái. Yǒu shíhòu gōnglù shàng de chūkǒu hěn róngyì cuòguò, xūyào tíqián zhǔnbèi.",
                english: "This is a good habit! Also, when driving need to pay attention to direction signs. Sometimes highway exits are easily missed, need to prepare in advance.",
                audio: "audio/part4/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "車輛維護",
        titleTranslation: "Vehicle Maintenance",
        context: "Discussing car maintenance and common issues",
        lines: [
            {
                speaker: "B",
                chinese: "我的車最近有點問題，發動機的聲音很奇怪。我擔心可能是<span class='vocab-highlight' data-word='油'>油</span>的問題，或者需要更換零件。",
                pinyin: "Wǒ de chē zuìjìn yǒudiǎn wèntí, fādòngjī de shēngyīn hěn qíguài. Wǒ dānxīn kěnéng shì yóu de wèntí, huòzhě xūyào gēnghuàn língjiàn.",
                english: "My car has had some issues recently, the engine sounds strange. I'm worried it might be an oil problem, or needs parts replacement.",
                audio: "audio/part4/dialogue10/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "你應該<span class='vocab-highlight' data-word='趕快'>趕快</span>去檢查一下。車子的問題如果不處理，可能會越來越嚴重。對了，你有車子的<span class='vocab-highlight' data-word='鑰匙'>鑰匙</span>嗎？",
                pinyin: "Nǐ yīnggāi gǎnkuài qù jiǎnchá yīxià. Chēzi de wèntí rúguǒ bù chǔlǐ, kěnéng huì yuè lái yuè yánzhòng. Duì le, nǐ yǒu chēzi de yàoshi ma?",
                english: "You should quickly go check it. Car problems if not handled, might get increasingly serious. By the way, do you have the car keys?",
                audio: "audio/part4/dialogue10/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "有，我有備用<span class='vocab-highlight' data-word='鑰匙'>鑰匙</span>。上次我不小心把主<span class='vocab-highlight' data-word='鑰匙'>鑰匙</span>弄丟了，幸好有備用<span class='vocab-highlight' data-word='鑰匙'>鑰匙</span>，不然就進不了車了。",
                pinyin: "Yǒu, wǒ yǒu bèiyòng yàoshi. Shàng cì wǒ bù xiǎoxīn bǎ zhǔ yàoshi nòng diū le, xìnghǎo yǒu bèiyòng yàoshi, bùrán jiù jìn bù liǎo chē le.",
                english: "Yes, I have spare keys. Last time I accidentally lost the main key,幸好有 spare keys, otherwise couldn't get into the car.",
                audio: "audio/part4/dialogue10/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "備用<span class='vocab-highlight' data-word='鑰匙'>鑰匙</span>確實很重要。另外，定期給車<span class='vocab-highlight' data-word='加油'>加油</span>也很重要，不要等到<span class='vocab-highlight' data-word='油'>油</span>快用完了才加，這樣對引擎不好。",
                pinyin: "Bèiyòng yàoshi quèshí hěn zhòngyào. Lìngwài, dìngqī gěi chē jiāyóu yě hěn zhòngyào, bùyào děng dào yóu kuài yòng wán le cái jiā, zhèyàng duì yǐngqíng bù hǎo.",
                english: "Spare keys are indeed important. Also, regularly refueling the car is also important, don't wait until oil is almost used up before refilling, this is bad for the engine.",
                audio: "audio/part4/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "交通標準與安全",
        titleTranslation: "Traffic Standards and Safety",
        context: "Discussing traffic rules and safety standards",
        lines: [
            {
                speaker: "A",
                chinese: "每個國家的<span class='vocab-highlight' data-word='交通'>交通</span><span class='vocab-highlight' data-word='標準'>標準</span>都不一樣。比如，有些國家靠右行駛，有些靠左行駛。旅行時需要了解當地的規則。",
                pinyin: "Měi gè guójiā de jiāotōng biāozhǔn dōu bù yīyàng. Bǐrú, yǒuxiē guójiā kào yòu xíngshǐ, yǒuxiē kào zuǒ xíngshǐ. Lǚxíng shí xūyào liǎojiě dāngdì de guīzé.",
                english: "Every country's traffic standards are different. For example, some countries drive on the right, some on the left. When traveling need to understand local rules.",
                audio: "audio/part4/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對，安全駕駛的<span class='vocab-highlight' data-word='標準'>標準</span>也很重要。比如，開車時不能使用手機，要繫安全帶，還有遵守<span class='vocab-highlight' data-word='速度'>速度</span>限制。",
                pinyin: "Duì, ānquán jiàshǐ de biāozhǔn yě hěn zhòngyào. Bǐrú, kāichē shí bùnéng shǐyòng shǒujī, yào jì ānquán dài, háiyǒu zūnshǒu sùdù xiànzhì.",
                english: "Right, safe driving standards are also important. For example, can't use phones while driving, need to wear seatbelts, and obey speed limits.",
                audio: "audio/part4/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我記得有一次看到<span class='vocab-highlight' data-word='救護車'>救護車</span>經過，所有的車都讓開了。這是基本的<span class='vocab-highlight' data-word='交通'>交通</span>禮貌，也是<span class='vocab-highlight' data-word='法律'>法律</span>要求。",
                pinyin: "Wǒ jìdé yǒu yīcì kàn dào jiùhùchē jīngguò, suǒyǒu de chē dōu ràng kāi le. Zhè shì jīběn de jiāotōng lǐmào, yěshì fǎlǜ yāoqiú.",
                english: "I remember once seeing an ambulance passing, all vehicles made way. This is basic traffic etiquette, also legally required.",
                audio: "audio/part4/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，緊急車輛有優先權。我們都應該遵守<span class='vocab-highlight' data-word='交通'>交通</span>規則，這樣才能保護自己和他人的安全。畢竟，安全是最重要的<span class='vocab-highlight' data-word='標準'>標準</span>。",
                pinyin: "Shì de, jǐnjí chēliàng yǒu yōuxiān quán. Wǒmen dōu yīnggāi zūnshǒu jiāotōng guīzé, zhèyàng cáinéng bǎohù zìjǐ hé tārén de ānquán. Bìjìng, ānquán shì zuì zhòngyào de biāozhǔn.",
                english: "Yes, emergency vehicles have priority. We should all obey traffic rules, this way we can protect our own and others' safety. After all, safety is the most important standard.",
                audio: "audio/part4/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "健康問題",
        titleTranslation: "Health Issues",
        context: "Discussing common health problems and symptoms",
        lines: [
            {
                speaker: "B",
                chinese: "我最近身體不太舒服，一直在<span class='vocab-highlight' data-word='咳嗽'>咳嗽</span>，而且覺得有點<span class='vocab-highlight' data-word='發燒'>發燒</span>。不知道是不是感冒了。",
                pinyin: "Wǒ zuìjìn shēntǐ bù tài shūfu, yīzhí zài késòu, érqiě juédé yǒudiǎn fāshāo. Bù zhīdào shì bùshì gǎnmào le.",
                english: "Recently I haven't been feeling well, constantly coughing, and feel有点 feverish. Not sure if it's a cold.",
                audio: "audio/part4/dialogue12/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "聽起來像是感冒。你還有其他症狀嗎？比如<span class='vocab-highlight' data-word='頭痛'>頭痛</span>或者<span class='vocab-highlight' data-word='背'>背</span><span class='vocab-highlight' data-word='疼'>疼</span>？如果<span class='vocab-highlight' data-word='發燒'>發燒</span>的話，最好去醫院看看。",
                pinyin: "Tīng qǐlái xiàng shì gǎnmào. Nǐ háiyǒu qítā zhèngzhuàng ma? Bǐrú tóutòng huòzhě bèi téng? Rúguǒ fāshāo dehuà, zuì hǎo qù yīyuàn kàn kàn.",
                english: "Sounds like a cold. Do you have other symptoms? Like headache or back pain? If feverish,最好 go to the hospital to check.",
                audio: "audio/part4/dialogue12/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "有一點<span class='vocab-highlight' data-word='頭痛'>頭痛</span>，而且<span class='vocab-highlight' data-word='脖(子)'>脖子</span>也有點不舒服。我發現運動後流<span class='vocab-highlight' data-word='汗'>汗</span>很多，但這可能是因為<span class='vocab-highlight' data-word='發燒'>發燒</span>。",
                pinyin: "Yǒu yīdiǎn tóutòng, érqiě bózi yě yǒudiǎn bù shūfu. Wǒ fāxiàn yùndòng hòu liú hàn hěnduō, dàn zhè kěnéng shì yīnwèi fāshāo.",
                english: "Have a bit of headache, and neck also feels uncomfortable. I find sweating a lot after exercise, but this might be because of fever.",
                audio: "audio/part4/dialogue12/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "你的<span class='vocab-highlight' data-word='臉色'>臉色</span>看起來不太好，可能是真的生病了。我建議你先去醫院<span class='vocab-highlight' data-word='掛號'>掛號</span>，讓醫生檢查一下。",
                pinyin: "Nǐ de liǎnsè kàn qǐlái bù tài hǎo, kěnéng shì zhēn de shēngbìng le. Wǒ jiànyì nǐ xiān qù yīyuàn guàhào, ràng yīshēng jiǎnchá yīxià.",
                english: "Your complexion looks not too good, might really be sick. I suggest you first go to the hospital to register, let the doctor check.",
                audio: "audio/part4/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "醫療照顧",
        titleTranslation: "Medical Care",
        context: "At the hospital discussing medical care and insurance",
        lines: [
            {
                speaker: "A",
                chinese: "我陪朋友去醫院，他需要緊急醫療幫助。我們一到醫院就大喊\"<span class='vocab-highlight' data-word='救命'>救命</span>\"，醫生和護士馬上就來了。",
                pinyin: "Wǒ péi péngyǒu qù yīyuàn, tā xūyào jǐnjí yīliáo bāngzhù. Wǒmen yī dào yīyuàn jiù dà hǎn \"jiùmìng\", yīshēng hé hùshì mǎshàng jiù lái le.",
                english: "I accompanied my friend to the hospital, he needed emergency medical help. As soon as we arrived at the hospital we shouted \"help\", doctors and nurses immediately came.",
                audio: "audio/part4/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "幸好有及時的醫療幫助。在醫院，<span class='vocab-highlight' data-word='掛號'>掛號</span>是第一步，然後醫生會檢查病人的情況。如果有<span class='vocab-highlight' data-word='保險'>保險</span>，醫療費用會比較少。",
                pinyin: "Xìnghǎo yǒu jíshí de yīliáo bāngzhù. Zài yīyuàn, guàhào shì dì yī bù, ránhòu yīshēng huì jiǎnchá bìngrén de qíngkuàng. Rúguǒ yǒu bǎoxiǎn, yīliáo fèiyòng huì bǐjiào shǎo.",
                english: "幸好有 timely medical help. At hospitals, registration is the first step, then doctors check the patient's condition. If have insurance, medical costs will be relatively less.",
                audio: "audio/part4/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，醫療<span class='vocab-highlight' data-word='保險'>保險</span>很重要。我朋友有<span class='vocab-highlight' data-word='保險'>保險</span>，所以大部分費用都涵蓋了。醫生說他需要休息幾天，讓身體恢復<span class='vocab-highlight' data-word='正常'>正常</span>。",
                pinyin: "Shì de, yīliáo bǎoxiǎn hěn zhòngyào. Wǒ péngyǒu yǒu bǎoxiǎn, suǒyǐ dà bùfèn fèiyòng dōu hángài le. Yīshēng shuō tā xūyào xiūxi jǐ tiān, ràng shēntǐ huīfù zhèngcháng.",
                english: "Yes, medical insurance is important. My friend has insurance, so most costs are covered. The doctor said he needs to rest a few days, let the body recover to normal.",
                audio: "audio/part4/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "希望他早日康復。生病對<span class='vocab-highlight' data-word='精神'>精神</span>和身體都有很大的<span class='vocab-highlight' data-word='影響'>影響</span>。我們都應該好好照顧自己的健康，定期檢查身體。",
                pinyin: "Xīwàng tā zǎorì kāngfù. Shēngbìng duì jīngshén hé shēntǐ dōu yǒu hěn dà de yǐngxiǎng. Wǒmen dōu yīnggāi hǎohǎo zhàogù zìjǐ de jiànkāng, dìngqī jiǎnchá shēntǐ.",
                english: "Hope he recovers soon. Illness has big impact on both mental and physical health. We should all properly take care of our health, regularly check our bodies.",
                audio: "audio/part4/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "身體症狀",
        titleTranslation: "Physical Symptoms",
        context: "Describing physical discomfort and symptoms",
        lines: [
            {
                speaker: "B",
                chinese: "我昨天運動過度，現在<span class='vocab-highlight' data-word='腿'>腿</span>很<span class='vocab-highlight' data-word='疼'>疼</span>，<span class='vocab-highlight' data-word='背'>背</span>部也有點不舒服。特別是<span class='vocab-highlight' data-word='脖(子)'>脖子</span>，轉動的時候會<span class='vocab-highlight' data-word='疼'>疼</span>。",
                pinyin: "Wǒ zuótiān yùndòng guòdù, xiànzài tuǐ hěn téng, bèi bù yě yǒudiǎn bù shūfu. Tèbié shì bózi, zhuǎndòng de shíhòu huì tòng.",
                english: "Yesterday I exercised too much, now legs are very painful, back also feels uncomfortable. Especially neck, hurts when turning.",
                audio: "audio/part4/dialogue14/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "聽起來像是肌肉拉傷。你可以試試熱敷，或者輕輕按摩<span class='vocab-highlight' data-word='那些'>那些</span><span class='vocab-highlight' data-word='疼'>疼</span>痛的部位。如果<span class='vocab-highlight' data-word='疼'>疼</span>痛持續，最好去看醫生。",
                pinyin: "Tīng qǐlái xiàng shì jīròu lāshāng. Nǐ kěyǐ shì shì rèfū, huòzhě qīngqīng ànmó nàxiē téngtòng de bùwèi. Rúguǒ téngtòng chíxù, zuì hǎo qù kàn yīshēng.",
                english: "Sounds like muscle strain. You can try hot compresses, or gently massage those painful areas. If pain persists,最好 see a doctor.",
                audio: "audio/part4/dialogue14/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "運動時我流<span class='vocab-highlight' data-word='汗'>汗</span>很多，可能脫水了。現在<span class='vocab-highlight' data-word='感覺'>感覺</span>很累，<span class='vocab-highlight' data-word='精神'>精神</span>也不太好。我需要多休息，補充水分。",
                pinyin: "Yùndòng shí wǒ liú hàn hěnduō, kěnéng tuōshuǐ le. Xiànzài gǎnjué hěn lèi, jīngshén yě bù tài hǎo. Wǒ xūyào duō xiūxi, bǔchōng shuǐfèn.",
                english: "During exercise I sweated a lot, might be dehydrated. Now feel very tired, mental state not too good either. I need more rest, replenish fluids.",
                audio: "audio/part4/dialogue14/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "對，脫水會<span class='vocab-highlight' data-word='影響'>影響</span>身體功能。你應該多喝水，吃一些有營養的食物。如果<span class='vocab-highlight' data-word='臉色'>臉色</span>還是很差，或者有其他症狀，要及時就醫。",
                pinyin: "Duì, tuōshuǐ huì yǐngxiǎng shēntǐ gōngnéng. Nǐ yīnggāi duō hē shuǐ, chī yīxiē yǒu yíngyǎng de shíwù. Rúguǒ liǎnsè háishì hěn chà, huòzhě yǒu qítā zhèngzhuàng, yào jíshí jiùyī.",
                english: "Right, dehydration affects bodily functions. You should drink more water, eat some nutritious food. If complexion is still poor, or have other symptoms, need timely medical attention.",
                audio: "audio/part4/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "商業與生意",
        titleTranslation: "Business and Commerce",
        context: "Talking about business operations and challenges",
        lines: [
            {
                speaker: "A",
                chinese: "我認識一位<span class='vocab-highlight' data-word='商人'>商人</span>，他做的<span class='vocab-highlight' data-word='生意'>生意</span>很成功。他從一個小店開始，現在已經開了五家分店。",
                pinyin: "Wǒ rènshí yī wèi shāngrén, tā zuò de shēngyì hěn chénggōng. Tā cóng yīgè xiǎo diàn kāishǐ, xiànzài yǐjīng kāi le wǔ jiā fēndiàn.",
                english: "I know a businessman, his business is very successful. He started from a small shop, now has opened five branch stores.",
                audio: "audio/part4/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "真厲害！現在做<span class='vocab-highlight' data-word='生意'>生意</span>確實不容易，競爭很激烈。特別是餐飲業，需要不斷創新才能吸引顧客。那家店的<span class='vocab-highlight' data-word='老闆娘'>老闆娘</span>很會經營。",
                pinyin: "Zhēn lìhài! Xiànzài zuò shēngyì quèshí bù róngyì, jìngzhēng hěn jīliè. Tèbié shì cānyǐn yè, xūyào bùduàn chuàngxīn cáinéng xīyǐn gùkè. Nà jiā diàn de lǎobǎnniáng hěn huì jīngyíng.",
                english: "Really impressive! Now doing business is indeed not easy, competition is fierce. Especially the food industry, needs constant innovation to attract customers. That shop's老板娘 is very good at management.",
                audio: "audio/part4/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，她對員工也很好。<span class='vocab-highlight' data-word='那些'>那些</span><span class='vocab-highlight' data-word='店員'>店員</span>都很喜歡她，工作也很認真。好的領導可以<span class='vocab-highlight' data-word='帶來'>帶來</span>好的工作環境。",
                pinyin: "Shì de, tā duì yuángōng yě hěn hǎo. Nàxiē diànyuán dōu hěn xǐhuān tā, gōngzuò yě hěn rènzhēn. Hǎo de lǐngdǎo kěyǐ dàilái hǎo de gōngzuò huánjìng.",
                english: "Yes, she's also good to employees. Those shop assistants all like her, work也很認真. Good leadership can bring good work environment.",
                audio: "audio/part4/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "說到<span class='vocab-highlight' data-word='生意'>生意</span>，現在很多人通過網絡做<span class='vocab-highlight' data-word='生意'>生意</span>。雖然初期投資比較少，但要<span class='vocab-highlight' data-word='得到'>得到</span>成功也不容易，需要很多努力和創意。",
                pinyin: "Shuō dào shēngyì, xiànzài hěnduō rén tōngguò wǎngluò zuò shēngyì. Suīrán chūqī tóuzī bǐjiào shǎo, dàn yào dédào chénggōng yě bù róngyì, xūyào hěnduō nǔlì hé chuàngyì.",
                english: "Speaking of business, now many people do business through the internet. Although initial investment is relatively small,但要 achieve success is also not easy, needs lots of effort and creativity.",
                audio: "audio/part4/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "商業挑戰",
        titleTranslation: "Business Challenges",
        context: "Discussing business difficulties and success factors",
        lines: [
            {
                speaker: "B",
                chinese: "我朋友最近開了一家咖啡店，但遇到了很多<span class='vocab-highlight' data-word='困難'>困難</span>。首先是資金問題，然後是找合適的<span class='vocab-highlight' data-word='地點'>地點</span>，還有招聘員工。",
                pinyin: "Wǒ péngyǒu zuìjìn kāi le yī jiā kāfēi diàn, dàn yù dào le hěnduō kùnnán. Shǒuxiān shì zījīn wèntí, ránhòu shì zhǎo héshì de dìdiǎn, háiyǒu zhāopìn yuángōng.",
                english: "My friend recently opened a coffee shop, but encountered many difficulties. First is funding issues, then finding suitable locations, and hiring employees.",
                audio: "audio/part4/dialogue16/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "開店確實有很多挑戰。特別是現在，很多餐廳都需要提前<span class='vocab-highlight' data-word='訂位'>訂位</span>，如果位置不好，可能<span class='vocab-highlight' data-word='生意'>生意</span>會受<span class='vocab-highlight' data-word='影響'>影響</span>。你朋友怎麼解決<span class='vocab-highlight' data-word='這些'>這些</span>問題？",
                pinyin: "Kāi diàn quèshí yǒu hěnduō tiǎozhàn. Tèbié shì xiànzài, hěnduō cāntīng dōu xūyào tíqián dìngwèi, rúguǒ wèizhì bù hǎo, kěnéng shēngyì huì shòu yǐngxiǎng. Nǐ péngyǒu zěnme jiějué zhèxiē wèntí?",
                english: "Opening shops indeed has many challenges. Especially now, many restaurants need advance reservations, if location is bad, business might be affected. How does your friend solve these problems?",
                audio: "audio/part4/dialogue16/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "他找了幾個投資者，解決了資金問題。然後選擇了一個<span class='vocab-highlight' data-word='市區'>市區</span>的好<span class='vocab-highlight' data-word='地點'>地點</span>，雖然租金比較貴，但人流量大。現在<span class='vocab-highlight' data-word='生意'>生意</span>慢慢好起來了。",
                pinyin: "Tā zhǎo le jǐ gè tóuzīzhě, jiějué le zījīn wèntí. Ránhòu xuǎnzé le yīgè shìqū de hǎo dìdiǎn, suīrán zūjīn bǐjiào guì, dàn rénliú liàng dà. Xiànzài shēngyì mànmàn hǎo qǐlái le.",
                english: "He found several investors, solved funding problems. Then chose a good location in the city area, although rent is relatively expensive, but foot traffic is high. Now business is slowly improving.",
                audio: "audio/part4/dialogue16/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "太好了！成功需要堅持和努力。希望他的<span class='vocab-highlight' data-word='生意'>生意</span>越來越成功，<span class='vocab-highlight' data-word='得到'>得到</span>更多顧客的認可。有時候，<span class='vocab-highlight' data-word='困難'>困難</span>反而是成長的機會。",
                pinyin: "Tài hǎo le! Chénggōng xūyào jiānchí hé nǔlì. Xīwàng tā de shēngyì yuè lái yuè chénggōng, dédào gèng duō gùkè de rènkě. Yǒu shíhòu, kùnnán fǎn'ér shì chéngzhǎng de jīhuì.",
                english: "Great! Success requires persistence and effort. Hope his business becomes more and more successful, gets more customers' recognition. Sometimes, difficulties反而 are opportunities for growth.",
                audio: "audio/part4/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue16/dialogue.mp3"
    },
    {
        id: 17,
        title: "金錢與財富",
        titleTranslation: "Money and Wealth",
        context: "Discussing money management and financial success",
        lines: [
            {
                speaker: "A",
                chinese: "有些人很<span class='vocab-highlight' data-word='有錢'>有錢</span>，但並不快樂。金錢可以<span class='vocab-highlight' data-word='帶來'>帶來</span>物質享受，但不一定能<span class='vocab-highlight' data-word='帶來'>帶來</span>幸福。",
                pinyin: "Yǒuxiē rén hěn yǒuqián, dàn bìng bù kuàilè. Jīnqián kěyǐ dàilái wùzhì xiǎngshòu, dàn bù yīdìng néng dàilái xìngfú.",
                english: "Some people are very wealthy, but not happy. Money can bring material enjoyment, but不一定 can bring happiness.",
                audio: "audio/part4/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。真正的財富包括健康、家庭和朋友。我認識一位<span class='vocab-highlight' data-word='老太太'>老太太</span>，她雖然不<span class='vocab-highlight' data-word='有錢'>有錢</span>，但生活得很開心，因為她有愛她的家人。",
                pinyin: "Wǒ tóngyì. Zhēnzhèng de cáifù bāokuò jiànkāng, jiātíng hé péngyǒu. Wǒ rènshí yī wèi lǎo tàitai, tā suīrán bù yǒuqián, dàn shēnghuó dé hěn kāixīn, yīnwèi tā yǒu ài tā de jiārén.",
                english: "I agree. True wealth includes health, family and friends. I know an elderly lady, although she's not wealthy, lives very happily because she has family who loves her.",
                audio: "audio/part4/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，金錢只是生活的一個<span class='vocab-highlight' data-word='方面'>方面</span>。我們應該學會合理使用金錢，而不是被金錢控制。有時候，簡單的生活反而更幸福。",
                pinyin: "Shì de, jīnqián zhǐshì shēnghuó de yīgè fāngmiàn. Wǒmen yīnggāi xué huì hélǐ shǐyòng jīnqián, ér bùshì bèi jīnqián kòngzhì. Yǒu shíhòu, jiǎndān de shēnghuó fǎn'ér gèng xìngfú.",
                english: "Yes, money is just one aspect of life. We should learn to合理 use money, not be controlled by money. Sometimes, simple life反而更 happy.",
                audio: "audio/part4/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "完全同意！我們可以努力工作賺錢，但也要享受生活，關心身邊的人。畢竟，人生不僅是累積財富，更是創造美好的回憶和關係。<span class='vocab-highlight' data-word='加油'>加油</span>！",
                pinyin: "Wánquán tóngyì! Wǒmen kěyǐ nǔlì gōngzuò zhuàn qián, dàn yě yào xiǎngshòu shēnghuó, guānxīn shēnbiān de rén. Bìjìng, rénshēng bùjǐn shì lěijī cáifù, gèng shì chuàngzào měihǎo de huíyì hé guānxì. Jiāyóu!",
                english: "Completely agree! We can work hard to earn money, but also need to enjoy life, care about people around us. After all, life is not just accumulating wealth, but creating beautiful memories and relationships. Keep it up!",
                audio: "audio/part4/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue17/dialogue.mp3"
    },
    {
        id: 18,
        title: "攝影與記憶",
        titleTranslation: "Photography and Memories",
        context: "Talking about photography as a way to preserve memories",
        lines: [
            {
                speaker: "B",
                chinese: "我最近喜歡<span class='vocab-highlight' data-word='拍照'>拍照</span>，記錄生活中的美好時刻。<span class='vocab-highlight' data-word='這些'>這些</span>照片不僅是影像，更是珍貴的回憶。",
                pinyin: "Wǒ zuìjìn xǐhuān pāizhào, jìlù shēnghuó zhōng de měihǎo shíkè. Zhèxiē zhàopiàn bùjǐn shì yǐngxiàng, gèng shì zhēnguì de huíyì.",
                english: "Recently I like taking photos, recording beautiful moments in life. These photos are not just images, but precious memories.",
                audio: "audio/part4/dialogue18/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "真不錯！攝影是一種藝術，可以捕捉瞬間的美麗。我記得有一次在公園看到美麗的<span class='vocab-highlight' data-word='花'>花</span>，馬上拿出手機<span class='vocab-highlight' data-word='拍照'>拍照</span>。",
                pinyin: "Zhēn bùcuò! Shèyǐng shì yī zhǒng yìshù, kěyǐ bǔzhuō shùnjiān de měilì. Wǒ jìdé yǒu yīcì zài gōngyuán kàn dào měilì de huā, mǎshàng ná chū shǒujī pāizhào.",
                english: "That's great! Photography is an art, can capture瞬间的 beauty. I remember once seeing beautiful flowers in the park, immediately took out手机 to take photos.",
                audio: "audio/part4/dialogue18/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "我也是！特別是旅行時，<span class='vocab-highlight' data-word='拍照'>拍照</span>可以幫助我們記住<span class='vocab-highlight' data-word='那些'>那些</span>美好的<span class='vocab-highlight' data-word='地點'>地點</span>和經歷。照片就像時間的窗口，讓我們可以回顧過去。",
                pinyin: "Wǒ yěshì! Tèbié shì lǚxíng shí, pāizhào kěyǐ bāngzhù wǒmen jì zhù nàxiē měihǎo de dìdiǎn hé jīnglì. Zhàopiàn jiù xiàng shíjiān de chuāngkǒu, ràng wǒmen kěyǐ huígù guòqù.",
                english: "Me too! Especially when traveling, taking photos can help us remember those beautiful locations and experiences. Photos are like windows of time, letting us回顾 the past.",
                audio: "audio/part4/dialogue18/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得太好了！攝影不僅是技術，更是情感的表達。每一張照片都有一個故事，記錄著我們生活中的點點滴滴。",
                pinyin: "Nǐ shuō dé tài hǎo le! Shèyǐng bùjǐn shì jìshù, gèng shì qínggǎn de biǎodá. Měi yī zhāng zhàopiàn dōu yǒu yīgè gùshì, jìlù zhe wǒmen shēnghuó zhōng de diǎndiǎn dīdī.",
                english: "Well said! Photography is not just technique, but emotional expression. Every photo has a story, recording点点滴滴 in our lives.",
                audio: "audio/part4/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue18/dialogue.mp3"
    },
    {
        id: 19,
        title: "最後反思",
        titleTranslation: "Final Reflections",
        context: "Reflecting on cultural understanding and personal growth",
        lines: [
            {
                speaker: "A",
                chinese: "通過學習<span class='vocab-highlight' data-word='這些'>這些</span>詞彙，我對<span class='vocab-highlight' data-word='現代'>現代</span>和<span class='vocab-highlight' data-word='傳統'>傳統</span>的<span class='vocab-highlight' data-word='社會'>社會</span>有了更深的理解。語言是文化的鏡子，反映著人們的生活和價值觀。",
                pinyin: "Tōngguò xuéxí zhèxiē cíhuì, wǒ duì xiàndài hé chuántǒng de shèhuì yǒu le gèng shēn de lǐjiě. Yǔyán shì wénhuà de jìngzi, fǎnyìng zhe rénmen de shēnghuó hé jiàzhíguān.",
                english: "Through learning these vocabulary words, I have deeper understanding of modern and traditional society. Language is a mirror of culture, reflecting people's lives and values.",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。從<span class='vocab-highlight' data-word='春節'>春節</span>的<span class='vocab-highlight' data-word='傳統'>傳統</span>到<span class='vocab-highlight' data-word='現代'>現代</span>的<span class='vocab-highlight' data-word='交通'>交通</span>方式，我們看到了<span class='vocab-highlight' data-word='社會'>社會</span>的變化和發展。學習語言讓我們能夠跨越文化界限，理解不同的生活方式。",
                pinyin: "Wǒ tóngyì. Cóng chūnjié de chuántǒng dào xiàndài de jiāotōng fāngshì, wǒmen kàn dào le shèhuì de biànhuà hé fāzhǎn. Xuéxí yǔyán ràng wǒmen nénggòu kuàyuè wénhuà jièxiàn, lǐjiě bùtóng de shēnghuó fāngshì.",
                english: "I agree. From Chinese New Year traditions to modern transportation methods, we see societal changes and development. Learning language lets us跨越 cultural boundaries, understand different lifestyles.",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，無論是<span class='vocab-highlight' data-word='東方'>東方</span>還是西方，每個文化都有其獨特的價值。通過語言學習，我們可以欣賞<span class='vocab-highlight' data-word='這些'>這些</span>差異，並從中學習和成長。",
                pinyin: "Shì de, wúlùn shì dōngfāng háishì xīfāng, měi gè wénhuà dōu yǒu qí dútè de jiàzhí. Tōngguò yǔyán xuéxí, wǒmen kěyǐ xīnshǎng zhèxiē chāyì, bìng cóng zhōng xuéxí hé chéngzhǎng.",
                english: "Yes, whether East or West, every culture has its unique value. Through language learning, we can appreciate these differences, and learn and grow from them.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "讓我們繼續探索語言的奧秘，不僅學習詞彙，更要理解詞彙背後的文化意義。每一次學習都是新的發現，每一次對話都是文化的交流。<span class='vocab-highlight' data-word='加油'>加油</span>！",
                pinyin: "Ràng wǒmen jìxù tànsuǒ yǔyán de àomì, bùjǐn xuéxí cíhuì, gèng yào lǐjiě cíhuì bèihòu de wénhuà yìyì. Měi yī cì xuéxí dōu shì xīn de fāxiàn, měi yī cì duìhuà dōu shì wénhuà de jiāoliú. Jiāyóu!",
                english: "Let's continue exploring language's mysteries, not just learning vocabulary, but更要 understanding cultural meanings behind vocabulary. Every learning is a new discovery, every conversation is cultural exchange. Keep it up!",
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
    AUDIO_DELAY: 300
};