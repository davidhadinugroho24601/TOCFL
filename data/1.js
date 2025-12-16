// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { //required first slide
        title: "Start Here", 
        subtitle: "Introduction to Chinese Vocabulary Dialogues with 80 Target Words", 
        icon: "📍"
    },
    
    { title: "時間與日常生活 (一)", subtitle: "Time and Daily Life (Part 1)", icon: "⏰" },
    { title: "時間與日常生活 (二)", subtitle: "Time and Daily Life (Part 2)", icon: "🌞" },
    { title: "家庭與關係 (一)", subtitle: "Family and Relationships (Part 1)", icon: "👨‍👩‍👧‍👦" },
    { title: "家庭與關係 (二)", subtitle: "Family and Relationships (Part 2)", icon: "🏠" },
    { title: "情感與個人特質 (一)", subtitle: "Emotions and Personal Traits (Part 1)", icon: "😊" },
    { title: "情感與個人特質 (二)", subtitle: "Emotions and Personal Traits (Part 2)", icon: "💼" },
    { title: "情感與個人特質 (三)", subtitle: "Emotions and Personal Traits (Part 3)", icon: "🌟" },
    { title: "工作與學習 (一)", subtitle: "Work and Studies (Part 1)", icon: "💼" },
    { title: "工作與學習 (二)", subtitle: "Work and Studies (Part 2)", icon: "📚" },
    { title: "工作與學習 (三)", subtitle: "Work and Studies (Part 3)", icon: "🗣️" },
    { title: "學校與考試 (一)", subtitle: "School and Exams (Part 1)", icon: "📝" },
    { title: "學校與考試 (二)", subtitle: "School and Exams (Part 2)", icon: "✍️" },
    { title: "學校與考試 (三)", subtitle: "School and Exams (Part 3)", icon: "🎯" },
    { title: "溝通與行動 (一)", subtitle: "Communication and Actions (Part 1)", icon: "📠" },
    { title: "溝通與行動 (二)", subtitle: "Communication and Actions (Part 2)", icon: "🤝" },
    { title: "溝通與行動 (三)", subtitle: "Communication and Actions (Part 3)", icon: "⚡" },
    { title: "生活與個人成長 (一)", subtitle: "Life and Personal Growth (Part 1)", icon: "👶" },
    { title: "生活與個人成長 (二)", subtitle: "Life and Personal Growth (Part 2)", icon: "🛡️" },
    { title: "生活與個人成長 (三)", subtitle: "Life and Personal Growth (Part 3)", icon: "👴" },
    { 
        title: "Vocabulary Review", 
        subtitle: "80 Words Mastery", 
        icon: "📖" 
    },
    { //required last slide
        title: "Course Complete", 
        subtitle: "Congratulations! You've completed 80 Chinese vocabulary words!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    // Time and Daily Life
    { chinese: "出生", pinyin: "chūshēng", english: "birth", audio: "audio/vocab/chusheng.mp3" },
    { chinese: "不同", pinyin: "bùtóng", english: "different", audio: "audio/vocab/butong.mp3" },
    { chinese: "住址", pinyin: "zhùzhǐ", english: "address", audio: "audio/vocab/zhuzhi.mp3" },
    { chinese: "母語", pinyin: "mǔyǔ", english: "native language", audio: "audio/vocab/muyu.mp3" },
    { chinese: "表", pinyin: "biǎo", english: "watch", audio: "audio/vocab/biao.mp3" },
    { chinese: "時鐘", pinyin: "shízhōng", english: "clock", audio: "audio/vocab/shizhong.mp3" },
    { chinese: "傳真", pinyin: "chuánzhēn", english: "fax", audio: "audio/vocab/chuanzhen.mp3" },
    { chinese: "白天", pinyin: "báitiān", english: "daytime", audio: "audio/vocab/baitian.mp3" },
    { chinese: "半夜", pinyin: "bànyè", english: "midnight", audio: "audio/vocab/banye.mp3" },
    { chinese: "夜晚", pinyin: "yèwǎn", english: "night", audio: "audio/vocab/yewan.mp3" },
    { chinese: "日子", pinyin: "rìzi", english: "day", audio: "audio/vocab/rizi.mp3" },
    { chinese: "夜", pinyin: "yè", english: "night", audio: "audio/vocab/ye.mp3" },
    { chinese: "春季", pinyin: "chūnjì", english: "spring season", audio: "audio/vocab/chunji.mp3" },
    { chinese: "時", pinyin: "shí", english: "time", audio: "audio/vocab/shi.mp3" },
    { chinese: "不久", pinyin: "bùjiǔ", english: "soon", audio: "audio/vocab/bujiu.mp3" },
    { chinese: "剛才", pinyin: "gāngcái", english: "just now", audio: "audio/vocab/gangcai.mp3" },
    { chinese: "早點", pinyin: "zǎodiǎn", english: "earlier", audio: "audio/vocab/zaodian.mp3" },
    { chinese: "正好", pinyin: "zhènghǎo", english: "exactly", audio: "audio/vocab/zhenghao.mp3" },
    
    // People and Family
    { chinese: "年紀", pinyin: "niánjì", english: "age", audio: "audio/vocab/nianji.mp3" },
    { chinese: "男人", pinyin: "nánrén", english: "man", audio: "audio/vocab/nanren.mp3" },
    { chinese: "女人", pinyin: "nǚrén", english: "woman", audio: "audio/vocab/nvren.mp3" },
    { chinese: "父親", pinyin: "fùqīn", english: "father", audio: "audio/vocab/fuqin.mp3" },
    { chinese: "母親", pinyin: "mǔqīn", english: "mother", audio: "audio/vocab/muqin.mp3" },
    { chinese: "父母", pinyin: "fùmǔ", english: "parents", audio: "audio/vocab/fumu.mp3" },
    { chinese: "外公", pinyin: "wàigōng", english: "maternal grandfather", audio: "audio/vocab/waigong.mp3" },
    { chinese: "外婆", pinyin: "wàipó", english: "maternal grandmother", audio: "audio/vocab/waipo.mp3" },
    { chinese: "伯伯", pinyin: "bóbo", english: "uncle (father's older brother)", audio: "audio/vocab/bobo.mp3" },
    { chinese: "伯父", pinyin: "bófù", english: "uncle (father's older brother)", audio: "audio/vocab/bofu.mp3" },
    { chinese: "伯母", pinyin: "bómǔ", english: "aunt (wife of father's older brother)", audio: "audio/vocab/bomu.mp3" },
    { chinese: "叔叔", pinyin: "shūshu", english: "uncle (father's younger brother)", audio: "audio/vocab/shushu.mp3" },
    { chinese: "姑姑", pinyin: "gūgū", english: "aunt (father's sister)", audio: "audio/vocab/gugu.mp3" },
    { chinese: "孫女", pinyin: "sūnnǚ", english: "granddaughter", audio: "audio/vocab/sunnv.mp3" },
    { chinese: "孫子", pinyin: "sūnzi", english: "grandson", audio: "audio/vocab/sunzi.mp3" },
    { chinese: "關係", pinyin: "guānxì", english: "relationship", audio: "audio/vocab/guanxi.mp3" },
    { chinese: "兄弟", pinyin: "xiōngdì", english: "brothers", audio: "audio/vocab/xiongdi.mp3" },
    { chinese: "阿姨", pinyin: "āyí", english: "aunt", audio: "audio/vocab/ayi.mp3" },
    { chinese: "身邊", pinyin: "shēnbiān", english: "around, by one's side", audio: "audio/vocab/shenbian.mp3" },
    
    // Emotions and Traits
    { chinese: "害怕", pinyin: "hàipà", english: "afraid", audio: "audio/vocab/haipa.mp3" },
    { chinese: "開心", pinyin: "kāixīn", english: "happy", audio: "audio/vocab/kaixin.mp3" },
    { chinese: "擔心", pinyin: "dānxīn", english: "worried", audio: "audio/vocab/danxin.mp3" },
    { chinese: "傷心", pinyin: "shāngxīn", english: "sad", audio: "audio/vocab/shangxin.mp3" },
    { chinese: "美麗", pinyin: "měilì", english: "beautiful", audio: "audio/vocab/meili.mp3" },
    { chinese: "帥", pinyin: "shuài", english: "handsome", audio: "audio/vocab/shuai.mp3" },
    { chinese: "笨", pinyin: "bèn", english: "stupid", audio: "audio/vocab/ben.mp3" },
    { chinese: "認真", pinyin: "rènzhēn", english: "serious", audio: "audio/vocab/renzhen.mp3" },
    { chinese: "敢", pinyin: "gǎn", english: "dare", audio: "audio/vocab/gan.mp3" },
    { chinese: "急", pinyin: "jí", english: "urgent, hurried", audio: "audio/vocab/ji.mp3" },
    { chinese: "禮貌", pinyin: "lǐmào", english: "polite", audio: "audio/vocab/limao.mp3" },
    { chinese: "害羞", pinyin: "hàixiū", english: "shy", audio: "audio/vocab/haixiu.mp3" },
    { chinese: "關心", pinyin: "guānxīn", english: "concerned about", audio: "audio/vocab/guanxin.mp3" },
    { chinese: "心情", pinyin: "xīnqíng", english: "mood", audio: "audio/vocab/xinqing.mp3" },
    { chinese: "幸福", pinyin: "xìngfú", english: "happy, blessed", audio: "audio/vocab/xingfu.mp3" },
    { chinese: "差", pinyin: "chà", english: "bad, poor", audio: "audio/vocab/cha.mp3" },
    
    // Physical
    { chinese: "身高", pinyin: "shēngāo", english: "height", audio: "audio/vocab/shengao.mp3" },
    { chinese: "長大", pinyin: "zhǎngdà", english: "grow up", audio: "audio/vocab/zhangda.mp3" },
    
    // Work and School
    { chinese: "經理", pinyin: "jīnglǐ", english: "manager", audio: "audio/vocab/jingli.mp3" },
    { chinese: "教書", pinyin: "jiāoshū", english: "teach", audio: "audio/vocab/jiaoshu.mp3" },
    { chinese: "開會", pinyin: "kāihuì", english: "have a meeting", audio: "audio/vocab/kaihui.mp3" },
    { chinese: "加班", pinyin: "jiābān", english: "work overtime", audio: "audio/vocab/jiaban.mp3" },
    { chinese: "危險", pinyin: "wēixiǎn", english: "dangerous", audio: "audio/vocab/weixian.mp3" },
    { chinese: "安全", pinyin: "ānquán", english: "safe", audio: "audio/vocab/anquan.mp3" },
    { chinese: "成功", pinyin: "chénggōng", english: "success", audio: "audio/vocab/chenggong.mp3" },
    { chinese: "報告", pinyin: "bàogào", english: "report", audio: "audio/vocab/baogao.mp3" },
    { chinese: "資料", pinyin: "zīliào", english: "data, information", audio: "audio/vocab/ziliao.mp3" },
    { chinese: "管理", pinyin: "guǎnlǐ", english: "manage", audio: "audio/vocab/guanli.mp3" },
    { chinese: "做法", pinyin: "zuòfǎ", english: "method, approach", audio: "audio/vocab/zuofa.mp3" },
    { chinese: "看法", pinyin: "kànfǎ", english: "viewpoint, opinion", audio: "audio/vocab/kanfa.mp3" },
    { chinese: "辦", pinyin: "bàn", english: "handle, do", audio: "audio/vocab/ban.mp3" },
    { chinese: "打工", pinyin: "dǎgōng", english: "work part-time", audio: "audio/vocab/dagong.mp3" },
    { chinese: "選", pinyin: "xuǎn", english: "choose", audio: "audio/vocab/xuan.mp3" },
    { chinese: "嚴重", pinyin: "yánzhòng", english: "serious", audio: "audio/vocab/yanzhong.mp3" },
    { chinese: "正式", pinyin: "zhèngshì", english: "formal", audio: "audio/vocab/zhengshi.mp3" },
    { chinese: "查", pinyin: "chá", english: "look up, check", audio: "audio/vocab/cha2.mp3" },
    { chinese: "考", pinyin: "kǎo", english: "test, exam", audio: "audio/vocab/kao.mp3" },
    { chinese: "例如", pinyin: "lìrú", english: "for example", audio: "audio/vocab/liru.mp3" },
    { chinese: "例子", pinyin: "lìzi", english: "example", audio: "audio/vocab/lizi.mp3" },
    { chinese: "題目", pinyin: "tímù", english: "question, topic", audio: "audio/vocab/timu.mp3" },
    { chinese: "題", pinyin: "tí", english: "question", audio: "audio/vocab/ti.mp3" },
    { chinese: "答案", pinyin: "dá'àn", english: "answer", audio: "audio/vocab/daan.mp3" },
    { chinese: "念書", pinyin: "niànshū", english: "study", audio: "audio/vocab/nianshu.mp3" },
    { chinese: "歷史", pinyin: "lìshǐ", english: "history", audio: "audio/vocab/lishi.mp3" },
    { chinese: "數學", pinyin: "shùxué", english: "mathematics", audio: "audio/vocab/shuxue.mp3" },
    { chinese: "書法", pinyin: "shūfǎ", english: "calligraphy", audio: "audio/vocab/shufa.mp3" },
    { chinese: "英語", pinyin: "Yīngyǔ", english: "English language", audio: "audio/vocab/yingyu.mp3" },
    { chinese: "作文", pinyin: "zuòwén", english: "essay", audio: "audio/vocab/zuowen.mp3" },
    { chinese: "漢字", pinyin: "hànzì", english: "Chinese characters", audio: "audio/vocab/hanzi.mp3" },
    { chinese: "詞", pinyin: "cí", english: "word", audio: "audio/vocab/ci.mp3" },
    { chinese: "文法", pinyin: "wénfǎ", english: "grammar", audio: "audio/vocab/wenfa.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "audio/ui/click.mp3",
    correctSound: "audio/ui/correct.mp3",
    slideTransition: "audio/ui/slide.mp3",
    revealSound: "audio/ui/reveal.mp3",
    completeSound: "audio/ui/complete.mp3"
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "時間與日常生活 (一)",
        titleTranslation: "Time and Daily Life (Part 1)",
        context: "Two friends talking about their daily schedules and time management",
        lines: [
            {
                speaker: "A",
                chinese: "你現在有時間嗎？<span class='vocab-highlight' data-word='正好'>正好</span>是<span class='vocab-highlight' data-word='白天'>白天</span>最適合工作的時候。",
                pinyin: "Nǐ xiànzài yǒu shíjiān ma? Zhènghǎo shì báitiān zuì shìhé gōngzuò de shíhòu.",
                english: "Do you have time now? It's exactly the most suitable time for work during the daytime.",
                audio: "audio/dialogues/slide1/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "其實我昨天睡得很不好。<span class='vocab-highlight' data-word='不久'>不久</span>前的<span class='vocab-highlight' data-word='半夜'>半夜</span>，我的<span class='vocab-highlight' data-word='時鐘'>時鐘</span>突然停了，讓我整晚都睡不安穩。",
                pinyin: "Qíshí wǒ zuótiān shuì dé hěn bù hǎo. Bùjiǔ qián de bànyè, wǒ de shízhōng túrán tíng le, ràng wǒ zhěng wǎn dōu shuì bù ānwěn.",
                english: "Actually, I slept very poorly yesterday. Not long ago at midnight, my clock suddenly stopped, which made me sleep restlessly all night.",
                audio: "audio/dialogues/slide1/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "那你真的應該<span class='vocab-highlight' data-word='早點'>早點</span>檢查一下你的時鐘。如果<span class='vocab-highlight' data-word='時'>時</span>間不準確，會影響你一整天的安排。",
                pinyin: "Nà nǐ zhēnde yīnggāi zǎodiǎn jiǎnchá yīxià nǐ de shízhōng. Rúguǒ shíjiān bù zhǔnquè, huì yǐngxiǎng nǐ yī zhěng tiān de ānpái.",
                english: "Then you really should check your clock earlier. If the time is inaccurate, it will affect your entire day's arrangements.",
                audio: "audio/dialogues/slide1/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "你說得對。我<span class='vocab-highlight' data-word='剛才'>剛才</span>看了我的<span class='vocab-highlight' data-word='表'>表</span>，發現它慢了十分鐘。難怪我最近總是遲到！",
                pinyin: "Nǐ shuō dé duì. Wǒ gāngcái kàn le wǒ de biǎo, fāxiàn tā màn le shí fēnzhōng. Nánguài wǒ zuìjìn zǒngshì chídào!",
                english: "You're right. I just checked my watch and found it's ten minutes slow. No wonder I've been late recently!",
                audio: "audio/dialogues/slide1/line4.mp3"
            }
        ]
    },
    {
        id: 2,
        title: "時間與日常生活 (二)",
        titleTranslation: "Time and Daily Life (Part 2)",
        context: "Continuing the conversation about seasons and daily routines",
        lines: [
            {
                speaker: "B",
                chinese: "說起來，現在是<span class='vocab-highlight' data-word='春季'>春季</span>，天氣越來越暖和了。你喜歡春天嗎？",
                pinyin: "Shuō qǐlái, xiànzài shì chūnjì, tiānqì yuè lái yuè nuǎnhuo le. Nǐ xǐhuān chūntiān ma?",
                english: "Speaking of which, it's spring now, and the weather is getting warmer. Do you like spring?",
                audio: "audio/dialogues/slide2/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "我非常喜歡！春天來了，<span class='vocab-highlight' data-word='日子'>日子</span>變長了，<span class='vocab-highlight' data-word='夜晚'>夜晚</span>變短了，讓人感覺更有活力。而且春天的<span class='vocab-highlight' data-word='白天'>白天</span>特別明亮。",
                pinyin: "Wǒ fēicháng xǐhuān! Chūntiān lái le, rìzi biàn cháng le, yèwǎn biàn duǎn le, ràng rén gǎnjué gèng yǒu huólì. Érqiě chūntiān de báitiān tèbié míngliàng.",
                english: "I really like it! When spring comes, the days get longer, the nights get shorter, making people feel more energetic. And spring days are especially bright.",
                audio: "audio/dialogues/slide2/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "是啊，不過我還是要調整一下我的作息。我發現最近在<span class='vocab-highlight' data-word='夜'>夜</span>晚工作效率不高，可能因為<span class='vocab-highlight' data-word='半夜'>半夜</span>醒來太多次了。",
                pinyin: "Shì a, bùguò wǒ háishì yào tiáozhěng yīxià wǒ de zuòxī. Wǒ fāxiàn zuìjìn zài yèwǎn gōngzuò xiàolǜ bù gāo, kěnéng yīnwèi bànyè xǐng lái tài duō cì le.",
                english: "Yes, but I still need to adjust my schedule. I've found that I'm not very productive at night recently, probably because I wake up too many times at midnight.",
                audio: "audio/dialogues/slide2/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "那你應該在<span class='vocab-highlight' data-word='白天'>白天</span>多完成一些工作，這樣晚上就可以好好休息。畢竟健康的生活<span class='vocab-highlight' data-word='時'>時</span>間安排很重要。",
                pinyin: "Nà nǐ yīnggāi zài báitiān duō wánchéng yīxiē gōngzuò, zhèyàng wǎnshang jiù kěyǐ hǎohǎo xiūxi. Bìjìng jiànkāng de shēnghuó shíjiān ānpái hěn zhòngyào.",
                english: "Then you should complete more work during the daytime, so you can rest well at night. After all, a healthy life schedule is very important.",
                audio: "audio/dialogues/slide2/line4.mp3"
            }
        ]
    },
    {
        id: 3,
        title: "家庭與關係 (一)",
        titleTranslation: "Family and Relationships (Part 1)",
        context: "Talking about family living arrangements and relationships",
        lines: [
            {
                speaker: "A",
                chinese: "我最近在考慮搬家的事情。你知道我的<span class='vocab-highlight' data-word='父母'>父母</span>和我的<span class='vocab-highlight' data-word='外公'>外公</span><span class='vocab-highlight' data-word='外婆'>外婆</span>住在完全<span class='vocab-highlight' data-word='不同'>不同</span>的<span class='vocab-highlight' data-word='住址'>住址</span>，我想找一個離他們都比較近的地方。",
                pinyin: "Wǒ zuìjìn zài kǎolǜ bānjiā de shìqíng. Nǐ zhīdào wǒ de fùmǔ hé wǒ de wàigōng wàipó zhù zài wánquán bùtóng de zhùzhǐ, wǒ xiǎng zhǎo yīgè lí tāmen dōu bǐjiào jìn de dìfāng.",
                english: "I've been considering moving recently. You know, my parents and my maternal grandparents live at completely different addresses. I want to find a place that's relatively close to both of them.",
                audio: "audio/dialogues/slide3/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "這真是個好主意！我的<span class='vocab-highlight' data-word='母親'>母親</span>也一直很<span class='vocab-highlight' data-word='關心'>關心</span>她的父母，也就是我的外公外婆。她經常擔心他們年紀大了，需要更多照顧。",
                pinyin: "Zhè zhēnshi gè hǎo zhǔyì! Wǒ de mǔqīn yě yīzhí hěn guānxīn tā de fùmǔ, yě jiùshì wǒ de wàigōng wàipó. Tā jīngcháng dānxīn tāmen niánjì dà le, xūyào gèng duō zhàogù.",
                english: "That's really a good idea! My mother has also been very concerned about her parents, that is, my maternal grandparents. She often worries that they're getting older and need more care.",
                audio: "audio/dialogues/slide3/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，家庭<span class='vocab-highlight' data-word='關係'>關係</span>真的很重要。特別是當家人有需要的時候，我們應該互相幫助。你跟你家人的<span class='vocab-highlight' data-word='關係'>關係</span>怎麼樣？",
                pinyin: "Shì de, jiātíng guānxì zhēn de hěn zhòngyào. Tèbié shì dāng jiārén yǒu xūyào de shíhòu, wǒmen yīnggāi hùxiāng bāngzhù. Nǐ gēn nǐ jiārén de guānxì zěnme yàng?",
                english: "Yes, family relationships are really important. Especially when family members are in need, we should help each other. How's your relationship with your family?",
                audio: "audio/dialogues/slide3/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "我們關係很好！雖然有時候會有<span class='vocab-highlight' data-word='不同'>不同</span>的意見，但我們總是能找到辦法解決問題。畢竟家人之間的理解和支持是最寶貴的。",
                pinyin: "Wǒmen guānxì hěn hǎo! Suīrán yǒu shíhòu huì yǒu bùtóng de yìjiàn, dàn wǒmen zǒngshì néng zhǎodào bànfǎ jiějué wèntí. Bìjìng jiārén zhī jiān de lǐjiě hé zhīchí shì zuì bǎoguì de.",
                english: "We have a good relationship! Although we sometimes have different opinions, we can always find ways to solve problems. After all, understanding and support among family members is the most precious.",
                audio: "audio/dialogues/slide3/line4.mp3"
            }
        ]
    },
    {
        id: 4,
        title: "家庭與關係 (二)",
        titleTranslation: "Family and Relationships (Part 2)",
        context: "Discussing extended family and childhood memories",
        lines: [
            {
                speaker: "B",
                chinese: "對了，你剛才提到你的家人。你的<span class='vocab-highlight' data-word='兄弟'>兄弟</span>們呢？他們現在怎麼樣？",
                pinyin: "Duì le, nǐ gāngcái tí dào nǐ de jiārén. Nǐ de xiōngdì men ne? Tāmen xiànzài zěnme yàng?",
                english: "By the way, you mentioned your family earlier. What about your brothers? How are they now?",
                audio: "audio/dialogues/slide4/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "他們都很好！我的哥哥們現在都有了自己的家庭。他們<span class='vocab-highlight' data-word='身邊'>身邊</span>經常有我的<span class='vocab-highlight' data-word='阿姨'>阿姨</span>們來照顧孩子，所以他們可以專心工作。",
                pinyin: "Tāmen dōu hěn hǎo! Wǒ de gēge men xiànzài dōu yǒu le zìjǐ de jiātíng. Tāmen shēnbiān jīngcháng yǒu wǒ de āyí men lái zhàogù háizi, suǒyǐ tāmen kěyǐ zhuānxīn gōngzuò.",
                english: "They're all doing well! My older brothers now have their own families. They often have my aunts around to take care of the children, so they can focus on work.",
                audio: "audio/dialogues/slide4/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "真不錯！我的<span class='vocab-highlight' data-word='姑姑'>姑姑</span>和<span class='vocab-highlight' data-word='伯父'>伯父</span><span class='vocab-highlight' data-word='伯母'>伯母</span>也經常來我們家。他們總是帶很多好吃的，而且很關心我們的近況。",
                pinyin: "Zhēn bùcuò! Wǒ de gūgū hé bófù bómǔ yě jīngcháng lái wǒmen jiā. Tāmen zǒngshì dài hěnduō hǎo chī de, érqiě hěn guānxīn wǒmen de jìnkuàng.",
                english: "That's great! My aunt (father's sister) and uncle and aunt (father's older brother and his wife) also often come to our house. They always bring lots of delicious food and are very concerned about how we're doing.",
                audio: "audio/dialogues/slide4/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "有這樣的家人真幸福！我的叔叔<span class='vocab-highlight' data-word='伯伯'>伯伯</span>們也經常來看我們。他們看著我們<span class='vocab-highlight' data-word='長大'>長大</span>，現在還是一直關心著我們的生活。",
                pinyin: "Yǒu zhèyàng de jiārén zhēn xìngfú! Wǒ de shūshu bóbo men yě jīngcháng lái kàn wǒmen. Tāmen kànzhe wǒmen zhǎngdà, xiànzài háishì yīzhí guānxīn zhe wǒmen de shēnghuó.",
                english: "Having family like that is really a blessing! My uncles also often come to see us. They watched us grow up and still care about our lives.",
                audio: "audio/dialogues/slide4/line4.mp3"
            }
        ]
    },
    {
        id: 5,
        title: "情感與個人特質 (一)",
        titleTranslation: "Emotions and Personal Traits (Part 1)",
        context: "Sharing feelings and discussing emotional expression",
        lines: [
            {
                speaker: "A",
                chinese: "你知道嗎？今天我<span class='vocab-highlight' data-word='心情'>心情</span>特別<span class='vocab-highlight' data-word='開心'>開心</span>！我剛剛完成了一個很重要的項目，而且得到了老闆的表揚。",
                pinyin: "Nǐ zhīdào ma? Jīntiān wǒ xīnqíng tèbié kāixīn! Wǒ gānggāng wánchéng le yīgè hěn zhòngyào de xiàngmù, érqiě dédào le lǎobǎn de biǎoyáng.",
                english: "You know what? I'm in a particularly happy mood today! I just completed a very important project and received praise from my boss.",
                audio: "audio/dialogues/slide5/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "恭喜你！不過說實話，我昨天還有點<span class='vocab-highlight' data-word='傷心'>傷心</span>。我最好的朋友搬到另一個城市去了，我們以後見面就不容易了。",
                pinyin: "Gōngxǐ nǐ! Bùguò shuō shíhuà, wǒ zuótiān hái yǒudiǎn shāngxīn. Wǒ zuì hǎo de péngyǒu bān dào lìng yīgè chéngshì qù le, wǒmen yǐhòu jiànmiàn jiù bù róngyì le.",
                english: "Congratulations! But to be honest, I was a bit sad yesterday. My best friend moved to another city, so it won't be easy for us to meet in the future.",
                audio: "audio/dialogues/slide5/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "我理解你的感受。有時候，我們會<span class='vocab-highlight' data-word='害怕'>害怕</span>表達自己的真實情感，擔心別人會怎麼看我們。但你覺得<span class='vocab-highlight' data-word='害怕'>害怕</span>表達情感是正常的嗎？",
                pinyin: "Wǒ lǐjiě nǐ de gǎnshòu. Yǒu shíhòu, wǒmen huì hàipà biǎodá zìjǐ de zhēnshí qínggǎn, dānxīn biérén huì zěnme kàn wǒmen. Dàn nǐ juédé hàipà biǎodá qínggǎn shì zhèngcháng de ma?",
                english: "I understand how you feel. Sometimes, we're afraid to express our true emotions, worried about how others will see us. But do you think being afraid to express emotions is normal?",
                audio: "audio/dialogues/slide5/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "我覺得這很正常。很多人都有這樣的<span class='vocab-highlight' data-word='心情'>心情</span>，特別是當我們面對<span class='vocab-highlight' data-word='不同'>不同</span>的人和情況時。重要的是找到合適的方式來處理我們的情感。",
                pinyin: "Wǒ juédé zhè hěn zhèngcháng. Hěnduō rén dōu yǒu zhèyàng de xīnqíng, tèbié shì dāng wǒmen miànduì bùtóng de rén hé qíngkuàng shí. Zhòngyào de shì zhǎodào héshì de fāngshì lái chǔlǐ wǒmen de qínggǎn.",
                english: "I think it's very normal. Many people have such moods, especially when we face different people and situations. What's important is finding appropriate ways to handle our emotions.",
                audio: "audio/dialogues/slide5/line4.mp3"
            }
        ]
    },
    {
        id: 6,
        title: "情感與個人特質 (二)",
        titleTranslation: "Emotions and Personal Traits (Part 2)",
        context: "Discussing personal traits and social interactions",
        lines: [
            {
                speaker: "B",
                chinese: "說到表達情感，我有時會覺得很<span class='vocab-highlight' data-word='害羞'>害羞</span>。特別是在很多人面前說話的時候，我會緊張得不知道該說什麼。",
                pinyin: "Shuō dào biǎodá qínggǎn, wǒ yǒushí huì juédé hěn hàixiū. Tèbié shì zài hěnduō rén miànqián shuōhuà de shíhòu, wǒ huì jǐnzhāng dé bù zhīdào gāi shuō shénme.",
                english: "Speaking of expressing emotions, I sometimes feel very shy. Especially when speaking in front of many people, I get so nervous I don't know what to say.",
                audio: "audio/dialogues/slide6/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "我明白那種感覺。不過在工作中，我必須表現得很<span class='vocab-highlight' data-word='認真'>認真</span>。即使有時候心裡很緊張，也要保持專業的態度。",
                pinyin: "Wǒ míngbái nà zhǒng gǎnjué. Bùguò zài gōngzuò zhōng, wǒ bìxū biǎoxiàn dé hěn rènzhēn. Jíshǐ yǒu shíhòu xīnlǐ hěn jǐnzhāng, yě yào bǎochí zhuānyè de tàidù.",
                english: "I understand that feeling. But at work, I have to appear very serious. Even when I'm nervous inside, I have to maintain a professional attitude.",
                audio: "audio/dialogues/slide6/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "說起工作，你知道我們公司新來的那個<span class='vocab-highlight' data-word='男人'>男人</span>嗎？大家都說他很<span class='vocab-highlight' data-word='帥'>帥</span>，而且工作能力也很強。",
                pinyin: "Shuō qǐ gōngzuò, nǐ zhīdào wǒmen gōngsī xīn lái de nàgè nánrén ma? Dàjiā dōu shuō tā hěn shuài, érqiě gōngzuò nénglì yě hěn qiáng.",
                english: "Speaking of work, do you know that new man at our company? Everyone says he's very handsome and also very capable at work.",
                audio: "audio/dialogues/slide6/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "我知道！他確實很不錯。不過我更欣賞市場部的那個<span class='vocab-highlight' data-word='女人'>女人</span>，她不僅很<span class='vocab-highlight' data-word='美麗'>美麗</span>，而且非常聰明，提出的想法總是很有創意。",
                pinyin: "Wǒ zhīdào! Tā quèshí hěn bùcuò. Bùguò wǒ gèng xīnshǎng shìchǎng bù de nàgè nǚrén, tā bùjǐn hěn měilì, érqiě fēicháng cōngmíng, tíchū de xiǎngfǎ zǒngshì hěn yǒu chuàngyì.",
                english: "I know! He's really good. But I admire that woman in the marketing department even more. She's not only very beautiful but also very intelligent, and the ideas she proposes are always very creative.",
                audio: "audio/dialogues/slide6/line4.mp3"
            }
        ]
    },
    {
        id: 7,
        title: "情感與個人特質 (三)",
        titleTranslation: "Emotions and Personal Traits (Part 3)",
        context: "Talking about happiness, self-confidence, and personal growth",
        lines: [
            {
                speaker: "A",
                chinese: "我覺得在生活中，<span class='vocab-highlight' data-word='幸福'>幸福</span>是最重要的。無論我們有多少錢或者有多成功，如果內心不感到<span class='vocab-highlight' data-word='幸福'>幸福</span>，一切都是沒有意義的。",
                pinyin: "Wǒ juédé zài shēnghuó zhōng, xìngfú shì zuì zhòngyào de. Wúlùn wǒmen yǒu duōshǎo qián huòzhě yǒu duō chénggōng, rúguǒ nèixīn bù gǎndào xìngfú, yīqiè dōu shì méiyǒu yìyì de.",
                english: "I think in life, happiness is the most important thing. No matter how much money we have or how successful we are, if we don't feel happy inside, everything is meaningless.",
                audio: "audio/dialogues/slide7/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "我完全同意！而且我們不應該總是<span class='vocab-highlight' data-word='擔心'>擔心</span>別人對我們的看法。即使有人說你<span class='vocab-highlight' data-word='笨'>笨</span>或者不夠好，你也不應該讓這些話影響你的自信心。",
                pinyin: "Wǒ wánquán tóngyì! Érqiě wǒmen bù yīnggāi zǒngshì dānxīn biérén duì wǒmen de kànfǎ. Jíshǐ yǒu rén shuō nǐ bèn huòzhě bù gòu hǎo, nǐ yě bù yīnggāi ràng zhèxiē huà yǐngxiǎng nǐ de zìxìnxīn.",
                english: "I completely agree! And we shouldn't always worry about what others think of us. Even if someone calls you stupid or not good enough, you shouldn't let these words affect your self-confidence.",
                audio: "audio/dialogues/slide7/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我們應該<span class='vocab-highlight' data-word='敢'>敢</span>於做自己，<span class='vocab-highlight' data-word='敢'>敢</span>於追求自己真正想要的東西。有時候我們太<span class='vocab-highlight' data-word='急'>急</span>於得到別人的認可，反而忘記了自己真正需要什麼。",
                pinyin: "Nǐ shuō dé duì. Wǒmen yīnggāi gǎn yú zuò zìjǐ, gǎn yú zhuīqiú zìjǐ zhēnzhèng xiǎng yào de dōngxī. Yǒu shíhòu wǒmen tài jí yú dédào biérén de rènkě, fǎn'ér wàngjì le zìjǐ zhēnzhèng xūyào shénme.",
                english: "You're right. We should dare to be ourselves, dare to pursue what we truly want. Sometimes we're too eager to get others' approval and forget what we really need.",
                audio: "audio/dialogues/slide7/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "對！而且我們應該用<span class='vocab-highlight' data-word='禮貌'>禮貌</span>和尊重的態度對待每一個人。即使我們有<span class='vocab-highlight' data-word='不同'>不同</span>的意見，也可以通過<span class='vocab-highlight' data-word='禮貌'>禮貌</span>的溝通來解決問題。",
                pinyin: "Duì! Érqiě wǒmen yīnggāi yòng lǐmào hé zūnzhòng de tàidù duìdài měi yīgè rén. Jíshǐ wǒmen yǒu bùtóng de yìjiàn, yě kěyǐ tōngguò lǐmào de gōutōng lái jiějué wèntí.",
                english: "Right! And we should treat everyone with polite and respectful attitudes. Even if we have different opinions, we can solve problems through polite communication.",
                audio: "audio/dialogues/slide7/line4.mp3"
            }
        ]
    },
    {
        id: 8,
        title: "工作與學習 (一)",
        titleTranslation: "Work and Studies (Part 1)",
        context: "Discussing work responsibilities and challenges",
        lines: [
            {
                speaker: "A",
                chinese: "我最近被提升為公司的<span class='vocab-highlight' data-word='經理'>經理</span>了！雖然這是一個很好的機會，但壓力也變大了很多。",
                pinyin: "Wǒ zuìjìn bèi tíshēng wéi gōngsī de jīnglǐ le! Suīrán zhè shì yīgè hěn hǎo de jīhuì, dàn yālì yě biàn dà le hěnduō.",
                english: "I was recently promoted to company manager! Although this is a great opportunity, the pressure has also increased a lot.",
                audio: "audio/dialogues/slide8/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "恭喜你！不過經理的工作確實不容易。我聽說你現在每天都要<span class='vocab-highlight' data-word='開會'>開會</span>，還要<span class='vocab-highlight' data-word='管理'>管理</span>很多<span class='vocab-highlight' data-word='資料'>資料</span>，對吧？",
                pinyin: "Gōngxǐ nǐ! Bùguò jīnglǐ de gōngzuò quèshí bù róngyì. Wǒ tīng shuō nǐ xiànzài měitiān dōu yào kāihuì, hái yào guǎnlǐ hěnduō zīliào, duì ba?",
                english: "Congratulations! But a manager's job is indeed not easy. I heard you now have meetings every day and also have to manage a lot of data, right?",
                audio: "audio/dialogues/slide8/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，而且我經常需要<span class='vocab-highlight' data-word='加班'>加班</span>。特別是月底的時候，要處理的<span class='vocab-highlight' data-word='資料'>資料</span>特別多，有時候工作到很晚。",
                pinyin: "Shì de, érqiě wǒ jīngcháng xūyào jiābān. Tèbié shì yuèdǐ de shíhòu, yào chǔlǐ de zīliào tèbié duō, yǒu shíhòu gōngzuò dào hěn wǎn.",
                english: "Yes, and I often need to work overtime. Especially at the end of the month, there's a lot of data to process, and sometimes I work very late.",
                audio: "audio/dialogues/slide8/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "那你一定要注意休息啊！工作雖然重要，但健康更重要。而且你現在是經理了，你的<span class='vocab-highlight' data-word='做法'>做法</span>會影響整個團隊。",
                pinyin: "Nà nǐ yīdìng yào zhùyì xiūxi a! Gōngzuò suīrán zhòngyào, dàn jiànkāng gèng zhòngyào. Érqiě nǐ xiànzài shì jīnglǐ le, nǐ de zuòfǎ huì yǐngxiǎng zhěnggè tuánduì.",
                english: "Then you must make sure to rest! Work is important, but health is even more important. And now that you're a manager, your approach will affect the entire team.",
                audio: "audio/dialogues/slide8/line4.mp3"
            }
        ]
    },
    {
        id: 9,
        title: "工作與學習 (二)",
        titleTranslation: "Work and Studies (Part 2)",
        context: "Talking about teaching, education, and academic backgrounds",
        lines: [
            {
                speaker: "B",
                chinese: "說起工作，我妹妹最近找到了一份新工作，她現在在高中<span class='vocab-highlight' data-word='教書'>教書</span>。她一直很喜歡教育這個行業。",
                pinyin: "Shuō qǐ gōngzuò, wǒ mèimei zuìjìn zhǎodào le yī fèn xīn gōngzuò, tā xiànzài zài gāozhōng jiāoshū. Tā yīzhí hěn xǐhuān jiàoyù zhège hángyè.",
                english: "Speaking of work, my sister recently found a new job - she's now teaching at a high school. She has always liked the education field.",
                audio: "audio/dialogues/slide9/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "那太好了！她大學時學的是什麼專業？我記得她學過<span class='vocab-highlight' data-word='英語'>英語</span>、<span class='vocab-highlight' data-word='數學'>數學</span>和<span class='vocab-highlight' data-word='歷史'>歷史</span>，對嗎？",
                pinyin: "Nà tài hǎo le! Tā dàxué shí xué de shì shénme zhuānyè? Wǒ jìdé tā xuéguò Yīngyǔ, shùxué hé lìshǐ, duì ma?",
                english: "That's great! What was her major in college? I remember she studied English, math, and history, right?",
                audio: "audio/dialogues/slide9/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，她主修教育，副修<span class='vocab-highlight' data-word='歷史'>歷史</span>。現在她正在準備一個很重要的教學<span class='vocab-highlight' data-word='報告'>報告</span>，要在下個月的教師會議上發言。",
                pinyin: "Shì de, tā zhǔxiū jiàoyù, fùxiū lìshǐ. Xiànzài tā zhèngzài zhǔnbèi yīgè hěn zhòngyào de jiàoxué bàogào, yào zài xiàgè yuè de jiàoshī huìyì shàng fāyán.",
                english: "Yes, she majored in education with a minor in history. Now she's preparing a very important teaching report to present at next month's teacher conference.",
                audio: "audio/dialogues/slide9/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "聽起來她對工作很<span class='vocab-highlight' data-word='認真'>認真</span>。現在的老師需要掌握很多<span class='vocab-highlight' data-word='不同'>不同</span>的教學<span class='vocab-highlight' data-word='做法'>做法</span>，才能有效地幫助學生學習。",
                pinyin: "Tīng qǐlái tā duì gōngzuò hěn rènzhēn. Xiànzài de lǎoshī xūyào zhǎngwò hěnduō bùtóng de jiàoxué zuòfǎ, cáinéng yǒuxiào de bāngzhù xuéshēng xuéxí.",
                english: "It sounds like she's very serious about her work. Teachers nowadays need to master many different teaching approaches to effectively help students learn.",
                audio: "audio/dialogues/slide9/line4.mp3"
            }
        ]
    },
    {
        id: 10,
        title: "工作與學習 (三)",
        titleTranslation: "Work and Studies (Part 3)",
        context: "Discussing language learning challenges and study methods",
        lines: [
            {
                speaker: "A",
                chinese: "我最近在學習中文，發現真的很有挑戰性。特別是讀書的時候，<span class='vocab-highlight' data-word='文法'>文法</span>和<span class='vocab-highlight' data-word='漢字'>漢字</span>對我來說很難記住。",
                pinyin: "Wǒ zuìjìn zài xuéxí Zhōngwén, fāxiàn zhēn de hěn yǒu tiǎozhàn xìng. Tèbié shì dúshū de shíhòu, wénfǎ hé hànzì duì wǒ lái shuō hěn nán jì zhù.",
                english: "I've been learning Chinese recently and found it really challenging. Especially when studying, grammar and Chinese characters are difficult for me to remember.",
                audio: "audio/dialogues/slide10/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "我理解！學習一個新的語言確實不容易。我學習英語的時候，也經常需要查<span class='vocab-highlight' data-word='詞'>詞</span>典。不過，掌握<span class='vocab-highlight' data-word='不同'>不同</span>的學習方法可以讓過程變得容易一些。",
                pinyin: "Wǒ lǐjiě! Xuéxí yīgè xīn de yǔyán quèshí bù róngyì. Wǒ xuéxí Yīngyǔ de shíhòu, yě jīngcháng xūyào chá cídiǎn. Bùguò, zhǎngwò bùtóng de xuéxí fāngfǎ kěyǐ ràng guòchéng biàn dé róngyì yīxiē.",
                english: "I understand! Learning a new language is indeed not easy. When I was learning English, I also often needed to look up words in the dictionary. But mastering different learning methods can make the process a bit easier.",
                audio: "audio/dialogues/slide10/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "你有什麼好的建議嗎？我發現記住每個<span class='vocab-highlight' data-word='詞'>詞</span>的意思和用法特別難。而且中文的<span class='vocab-highlight' data-word='文法'>文法</span>跟英語有很大<span class='vocab-highlight' data-word='不同'>不同</span>。",
                pinyin: "Nǐ yǒu shénme hǎo de jiànyì ma? Wǒ fāxiàn jì zhù měi gè cí de yìsi hé yòngfǎ tèbié nán. Érqiě Zhōngwén de wénfǎ gēn Yīngyǔ yǒu hěn dà bùtóng.",
                english: "Do you have any good suggestions? I find it particularly difficult to remember the meaning and usage of each word. And Chinese grammar is very different from English.",
                audio: "audio/dialogues/slide10/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "我建議你每天堅持學習，哪怕只有半小時。還有，試著用中文思考，而不僅僅是翻譯。這樣可以幫助你更好地理解中文的<span class='vocab-highlight' data-word='文法'>文法</span>結構。",
                pinyin: "Wǒ jiànyì nǐ měitiān jiānchí xuéxí, nǎpà zhǐyǒu bàn xiǎoshí. Háiyǒu, shì zhe yòng Zhōngwén sīkǎo, ér bù jǐnjǐn shì fānyì. Zhèyàng kěyǐ bāngzhù nǐ gèng hǎo de lǐjiě Zhōngwén de wénfǎ jiégòu.",
                english: "I suggest you persist in studying every day, even if it's only half an hour. Also, try to think in Chinese instead of just translating. This can help you better understand Chinese grammar structure.",
                audio: "audio/dialogues/slide10/line4.mp3"
            }
        ]
    },
    {
        id: 11,
        title: "學校與考試 (一)",
        titleTranslation: "School and Exams (Part 1)",
        context: "Preparing for exams and discussing study strategies",
        lines: [
            {
                speaker: "A",
                chinese: "我真的很緊張！明天的<span class='vocab-highlight' data-word='考'>考</span>試有很多<span class='vocab-highlight' data-word='題目'>題目</span>，而且時間很緊。我擔心自己無法完成所有題目。",
                pinyin: "Wǒ zhēn de hěn jǐnzhāng! Míngtiān de kǎoshì yǒu hěnduō tímù, érqiě shíjiān hěn jǐn. Wǒ dānxīn zìjǐ wúfǎ wánchéng suǒyǒu tímù.",
                english: "I'm really nervous! Tomorrow's exam has many questions, and the time is tight. I'm worried I won't be able to complete all the questions.",
                audio: "audio/dialogues/slide11/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "別太<span class='vocab-highlight' data-word='擔心'>擔心</span>！你已經準備得很充分了。不過，我建議你在考試前再複習一下重要的概念。我需要<span class='vocab-highlight' data-word='查'>查</span>很多<span class='vocab-highlight' data-word='例子'>例子</span>來幫助我理解那些難懂的部分。",
                pinyin: "Bié tài dānxīn! Nǐ yǐjīng zhǔnbèi dé hěn chōngfèn le. Bùguò, wǒ jiànyì nǐ zài kǎoshì qián zài fùxí yīxià zhòngyào de gàiniàn. Wǒ xūyào chá hěnduō lìzi lái bāngzhù wǒ lǐjiě nàxiē nán dǒng de bùfèn.",
                english: "Don't worry too much! You've already prepared very thoroughly. However, I suggest you review important concepts again before the exam. I need to look up many examples to help me understand those difficult parts.",
                audio: "audio/dialogues/slide11/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我應該多看看老師給的<span class='vocab-highlight' data-word='例子'>例子</span>。有時候，理解一個概念的最好方法就是通過具體的<span class='vocab-highlight' data-word='例子'>例子</span>。你平時是怎麼準備考試的？",
                pinyin: "Nǐ shuō dé duì. Wǒ yīnggāi duō kàn kàn lǎoshī gěi de lìzi. Yǒu shíhòu, lǐjiě yīgè gàiniàn de zuì hǎo fāngfǎ jiùshì tōngguò jùtǐ de lìzi. Nǐ píngshí shì zěnme zhǔnbèi kǎoshì de?",
                english: "You're right. I should look more at the examples the teacher gave. Sometimes, the best way to understand a concept is through concrete examples. How do you usually prepare for exams?",
                audio: "audio/dialogues/slide11/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "我通常會先看一遍所有的<span class='vocab-highlight' data-word='題目'>題目</span>類型，然後針對每一種類型練習。如果遇到不懂的地方，我會馬上<span class='vocab-highlight' data-word='查'>查</span>資料或者問老師。這樣可以確保我真正理解了<span class='vocab-highlight' data-word='答案'>答案</span>背後的原理。",
                pinyin: "Wǒ tōngcháng huì xiān kàn yī biàn suǒyǒu de tímù lèixíng, ránhòu zhēnduì měi yī zhǒng lèixíng liànxí. Rúguǒ yù dào bù dǒng de dìfāng, wǒ huì mǎshàng chá zīliào huòzhě wèn lǎoshī. Zhèyàng kěyǐ quèbǎo wǒ zhēnzhèng lǐjiě le dá'àn bèihòu de yuánlǐ.",
                english: "I usually first look at all the question types, then practice each type. If I encounter something I don't understand, I immediately look up information or ask the teacher. This ensures I truly understand the principles behind the answers.",
                audio: "audio/dialogues/slide11/line4.mp3"
            }
        ]
    },
    {
        id: 12,
        title: "學校與考試 (二)",
        titleTranslation: "School and Exams (Part 2)",
        context: "Discussing study habits and academic skills",
        lines: [
            {
                speaker: "A",
                chinese: "我覺得如果要取得好成績，就必須要<span class='vocab-highlight' data-word='認真'>認真</span><span class='vocab-highlight' data-word='念書'>念書</span>。不能只是表面上學習，而要真正理解所學的內容。",
                pinyin: "Wǒ juédé rúguǒ yào qǔdé hǎo chéngjī, jiù bìxū yào rènzhēn niànshū. Bùnéng zhǐshì biǎomiàn shàng xuéxí, ér yào zhēnzhèng lǐjiě suǒ xué de nèiróng.",
                english: "I think if you want to get good grades, you must study seriously. You can't just study superficially, but must truly understand what you're learning.",
                audio: "audio/dialogues/slide12/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "完全同意！而且我們需要找到適合自己的學習方法。<span class='vocab-highlight' data-word='例如'>例如</span>，有些人通過寫作來學習效果更好。我建議你先寫一些<span class='vocab-highlight' data-word='作文'>作文</span>來練習表達自己的想法。",
                pinyin: "Wánquán tóngyì! Érqiě wǒmen xūyào zhǎodào shìhé zìjǐ de xuéxí fāngfǎ. Lìrú, yǒuxiē rén tōngguò xiězuò lái xuéxí xiàoguǒ gèng hǎo. Wǒ jiànyì nǐ xiān xiě yīxiē zuòwén lái liànxí biǎodá zìjǐ de xiǎngfǎ.",
                english: "Completely agree! And we need to find learning methods that suit us. For example, some people learn better through writing. I suggest you first write some essays to practice expressing your ideas.",
                audio: "audio/dialogues/slide12/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！寫<span class='vocab-highlight' data-word='作文'>作文</span>確實可以幫助整理思路。除了寫作，我還想提高我的書寫能力。也許我應該再練習一下<span class='vocab-highlight' data-word='書法'>書法</span>，讓我的字寫得更漂亮。",
                pinyin: "Hǎo zhǔyì! Xiě zuòwén quèshí kěyǐ bāngzhù zhěnglǐ sīlù. Chúle xiězuò, wǒ hái xiǎng tígāo wǒ de shūxiě nénglì. Yěxǔ wǒ yīnggāi zài liànxí yīxià shūfǎ, ràng wǒ de zì xiě dé gèng piàoliang.",
                english: "Good idea! Writing essays can indeed help organize thoughts. Besides writing, I also want to improve my handwriting. Maybe I should practice calligraphy again to make my writing more beautiful.",
                audio: "audio/dialogues/slide12/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='書法'>書法</span>不僅可以讓字寫得好看，還能幫助培養耐心和專注力。這對學習任何科目都有幫助。你平時會用什麼方法來提高學習效率？",
                pinyin: "Shūfǎ bùjǐn kěyǐ ràng zì xiě dé hǎokàn, hái néng bāngzhù péiyǎng nàixīn hé zhuānzhùlì. Zhè duì xuéxí rènhé kēmù dōu yǒu bāngzhù. Nǐ píngshí huì yòng shénme fāngfǎ lái tígāo xuéxí xiàolǜ?",
                english: "Calligraphy can not only make writing look good but also help cultivate patience and concentration. This is helpful for studying any subject. What methods do you usually use to improve learning efficiency?",
                audio: "audio/dialogues/slide12/line4.mp3"
            }
        ]
    },
    {
        id: 13,
        title: "學校與考試 (三)",
        titleTranslation: "School and Exams (Part 3)",
        context: "Final thoughts on exams and learning approaches",
        lines: [
            {
                speaker: "B",
                chinese: "我知道在考試中，找到正確的<span class='vocab-highlight' data-word='答案'>答案</span>很重要。但更重要的是理解為什麼這是正確的<span class='vocab-highlight' data-word='答案'>答案</span>。這樣我們才能真正學會這個知識點。",
                pinyin: "Wǒ zhīdào zài kǎoshì zhōng, zhǎodào zhèngquè de dá'àn hěn zhòngyào. Dàn gèng zhòngyào de shì lǐjiě wèishéme zhè shì zhèngquè de dá'àn. Zhèyàng wǒmen cáinéng zhēnzhèng xué huì zhège zhīshì diǎn.",
                english: "I know that in exams, finding the correct answer is important. But what's more important is understanding why this is the correct answer. This way we can truly learn this knowledge point.",
                audio: "audio/dialogues/slide13/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得太對了！我現在明白了，學習不僅僅是為了考試。但有時我還是覺得某些<span class='vocab-highlight' data-word='題'>題</span>目太難了，特別是那些需要深入思考的題目。",
                pinyin: "Nǐ shuō dé tài duì le! Wǒ xiànzài míngbái le, xuéxí bùjǐnjǐn shì wèile kǎoshì. Dàn yǒushí wǒ háishì juédé mǒuxiē tímù tài nán le, tèbié shì nàxiē xūyào shēnrù sīkǎo de tímù.",
                english: "You're absolutely right! I now understand that learning isn't just for exams. But sometimes I still feel certain questions are too difficult, especially those requiring deep thinking.",
                audio: "audio/dialogues/slide13/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "當你遇到困難的<span class='vocab-highlight' data-word='題目'>題目</span>時，試著把它分解成小部分。先理解每個部分的<span class='vocab-highlight' data-word='答案'>答案</span>，然後再把它們組合起來。這樣複雜的<span class='vocab-highlight' data-word='題'>題</span>目也會變得容易處理。",
                pinyin: "Dāng nǐ yù dào kùnnán de tímù shí, shì zhe bǎ tā fēnjiě chéng xiǎo bùfèn. Xiān lǐjiě měi gè bùfèn de dá'àn, ránhòu zài bǎ tāmen zǔhé qǐlái. Zhèyàng fùzá de tímù yě huì biàn dé róngyì chǔlǐ.",
                english: "When you encounter difficult questions, try breaking them down into smaller parts. First understand the answer to each part, then combine them. This way even complex questions become easier to handle.",
                audio: "audio/dialogues/slide13/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "謝謝你的建議！我會試試這個方法。希望明天的考試我能保持冷靜，仔細思考每個<span class='vocab-highlight' data-word='題目'>題目</span>，找到正確的<span class='vocab-highlight' data-word='答案'>答案</span>。",
                pinyin: "Xièxiè nǐ de jiànyì! Wǒ huì shì shì zhège fāngfǎ. Xīwàng míngtiān de kǎoshì wǒ néng bǎochí lěngjìng, zǐxì sīkǎo měi gè tímù, zhǎodào zhèngquè de dá'àn.",
                english: "Thank you for your advice! I'll try this method. I hope in tomorrow's exam I can stay calm, carefully think about each question, and find the correct answers.",
                audio: "audio/dialogues/slide13/line4.mp3"
            }
        ]
    },
    {
        id: 14,
        title: "溝通與行動 (一)",
        titleTranslation: "Communication and Actions (Part 1)",
        context: "Discussing work communication and handling serious situations",
        lines: [
            {
                speaker: "A",
                chinese: "我現在遇到了一個<span class='vocab-highlight' data-word='嚴重'>嚴重</span>的問題。我急需發一份<span class='vocab-highlight' data-word='傳真'>傳真</span>給我們的客戶，但傳真機壞了。這可能會影響我們與客戶的<span class='vocab-highlight' data-word='關係'>關係</span>。",
                pinyin: "Wǒ xiànzài yù dào le yīgè yánzhòng de wèntí. Wǒ jíxū fā yī fèn chuánzhēn gěi wǒmen de kèhù, dàn chuánzhēnjī huài le. Zhè kěnéng huì yǐngxiǎng wǒmen yǔ kèhù de guānxì.",
                english: "I'm now facing a serious problem. I urgently need to send a fax to our client, but the fax machine is broken. This might affect our relationship with the client.",
                audio: "audio/dialogues/slide14/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "這確實是個<span class='vocab-highlight' data-word='嚴重'>嚴重</span>的情況。你有沒有試過用電子郵件代替？或者去附近的打印店發<span class='vocab-highlight' data-word='傳真'>傳真</span>？我們必須盡快解決這個問題。",
                pinyin: "Zhè quèshí shì gè yánzhòng de qíngkuàng. Nǐ yǒu méiyǒu shì guò yòng diànzǐ yóujiàn dàitì? Huòzhě qù fùjìn de dǎyìn diàn fā chuánzhēn? Wǒmen bìxū jǐnkuài jiějué zhège wèntí.",
                english: "This is indeed a serious situation. Have you tried using email instead? Or going to a nearby print shop to send the fax? We must solve this problem as soon as possible.",
                audio: "audio/dialogues/slide14/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "客戶特別要求用<span class='vocab-highlight' data-word='傳真'>傳真</span>，因為他們需要紙質文件。這件事情需要<span class='vocab-highlight' data-word='正式'>正式</span>處理，不能隨便應付。我擔心如果處理不好，會造成更大的問題。",
                pinyin: "Kèhù tèbié yāoqiú yòng chuánzhēn, yīnwèi tāmen xūyào zhǐzhì wénjiàn. Zhè jiàn shìqíng xūyào zhèngshì chǔlǐ, bùnéng suíbiàn yìngfu. Wǒ dānxīn rúguǒ chǔlǐ bù hǎo, huì zàochéng gèng dà de wèntí.",
                english: "The client specifically requested fax because they need paper documents. This matter needs formal handling, can't be dealt with casually. I'm worried that if not handled properly, it will cause bigger problems.",
                audio: "audio/dialogues/slide14/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "我明白。這確實需要一個<span class='vocab-highlight' data-word='正式'>正式</span>的解決方案。你應該馬上聯繫IT部門，看看他們能不能快速修好傳真機。同時，你也應該通知客戶可能會有的延遲。",
                pinyin: "Wǒ míngbái. Zhè quèshí xūyào yīgè zhèngshì de jiějué fāng'àn. Nǐ yīnggāi mǎshàng liánxì IT bùmén, kàn kàn tāmen néng bùnéng kuàisù xiū hǎo chuánzhēnjī. Tóngshí, nǐ yě yīnggāi tōngzhī kèhù kěnéng huì yǒu de yánchí.",
                english: "I understand. This indeed needs a formal solution. You should immediately contact the IT department to see if they can quickly fix the fax machine. At the same time, you should also notify the client about possible delays.",
                audio: "audio/dialogues/slide14/line4.mp3"
            }
        ]
    },
    {
        id: 15,
        title: "溝通與行動 (二)",
        titleTranslation: "Communication and Actions (Part 2)",
        context: "Discussing approaches to problem-solving and interpersonal communication",
        lines: [
            {
                speaker: "B",
                chinese: "在處理這種<span class='vocab-highlight' data-word='嚴重'>嚴重</span>的情況時，你應該用<span class='vocab-highlight' data-word='禮貌'>禮貌</span>和專業的方式來<span class='vocab-highlight' data-word='辦'>辦</span>。即使情況很緊急，也不能失去耐心。",
                pinyin: "Zài chǔlǐ zhè zhǒng yánzhòng de qíngkuàng shí, nǐ yīnggāi yòng lǐmào hé zhuānyè de fāngshì lái bàn. Jíshǐ qíngkuàng hěn jǐnjí, yě bùnéng shīqù nàixīn.",
                english: "When handling this kind of serious situation, you should handle it in a polite and professional manner. Even if the situation is urgent, you can't lose patience.",
                audio: "audio/dialogues/slide15/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。每個人的<span class='vocab-highlight' data-word='做法'>做法</span>都<span class='vocab-highlight' data-word='不同'>不同</span>，但保持<span class='vocab-highlight' data-word='禮貌'>禮貌</span>是最基本的。我會盡量冷靜地處理這件事情，確保客戶感受到我們的專業和誠意。",
                pinyin: "Nǐ shuō dé duì. Měi gè rén de zuòfǎ dōu bùtóng, dàn bǎochí lǐmào shì zuì jīběn de. Wǒ huì jǐnliàng lěngjìng de chǔlǐ zhè jiàn shìqíng, quèbǎo kèhù gǎnshòu dào wǒmen de zhuānyè hé chéngyì.",
                english: "You're right. Everyone's approach is different, but maintaining politeness is the most basic. I'll try to handle this matter calmly, ensuring the client feels our professionalism and sincerity.",
                audio: "audio/dialogues/slide15/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "另外，你可以考慮提供一些補償措施，<span class='vocab-highlight' data-word='例如'>例如</span>下次服務的折扣或者額外的支持。這樣可以顯示我們對這個<span class='vocab-highlight' data-word='嚴重'>嚴重</span>情況的重視。",
                pinyin: "Lìngwài, nǐ kěyǐ kǎolǜ tígōng yīxiē bǔcháng cuòshī, lìrú xià cì fúwù de zhékòu huòzhě éwài de zhīchí. Zhèyàng kěyǐ xiǎnshì wǒmen duì zhège yánzhòng qíngkuàng de zhòngshì.",
                english: "Additionally, you could consider providing some compensatory measures, such as discounts on next service or additional support. This can show our seriousness about this serious situation.",
                audio: "audio/dialogues/slide15/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！我會把這個建議加到我的處理方案中。謝謝你的幫助！有時候在壓力下，我們需要別人的<span class='vocab-highlight' data-word='看法'>看法</span>來幫助我們找到最好的<span class='vocab-highlight' data-word='做法'>做法</span>。",
                pinyin: "Hǎo zhǔyì! Wǒ huì bǎ zhège jiànyì jiā dào wǒ de chǔlǐ fāng'àn zhōng. Xièxiè nǐ de bāngzhù! Yǒu shíhòu zài yālì xià, wǒmen xūyào biérén de kànfǎ lái bāngzhù wǒmen zhǎodào zuì hǎo de zuòfǎ.",
                english: "Good idea! I'll add this suggestion to my handling plan. Thank you for your help! Sometimes under pressure, we need others' viewpoints to help us find the best approach.",
                audio: "audio/dialogues/slide15/line4.mp3"
            }
        ]
    },
    {
        id: 16,
        title: "溝通與行動 (三)",
        titleTranslation: "Communication and Actions (Part 3)",
        context: "Making decisions and taking action in challenging situations",
        lines: [
            {
                speaker: "A",
                chinese: "基於目前的狀況，我的<span class='vocab-highlight' data-word='看法'>看法</span>是，我們應該先<span class='vocab-highlight' data-word='選'>選</span>最好的方法來解決這個問題。我們需要一個既能快速解決當前問題，又能維護客戶關係的方案。",
                pinyin: "Jī yú mùqián de zhuàngkuàng, wǒ de kànfǎ shì, wǒmen yīnggāi xiān xuǎn zuì hǎo de fāngfǎ lái jiějué zhège wèntí. Wǒmen xūyào yīgè jì néng kuàisù jiějué dāngqián wèntí, yòu néng wéihù kèhù guānxì de fāng'àn.",
                english: "Based on the current situation, my viewpoint is that we should first choose the best method to solve this problem. We need a solution that can both quickly solve the current problem and maintain client relationships.",
                audio: "audio/dialogues/slide16/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。但記住，不要因為情況緊急而太<span class='vocab-highlight' data-word='急'>急</span>於做出決定。我們應該<span class='vocab-highlight' data-word='敢'>敢</span>於考慮所有可能的選擇，然後<span class='vocab-highlight' data-word='敢'>敢</span>做最合適的決定。",
                pinyin: "Wǒ tóngyì. Dàn jì zhù, bùyào yīnwèi qíngkuàng jǐnjí ér tài jí yú zuò chū juédìng. Wǒmen yīnggāi gǎn yú kǎolǜ suǒyǒu kěnéng de xuǎnzé, ránhòu gǎn zuò zuì héshì de juédìng.",
                english: "I agree. But remember, don't be too eager to make a decision just because the situation is urgent. We should dare to consider all possible choices, then dare to make the most appropriate decision.",
                audio: "audio/dialogues/slide16/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "你說得對。我會先列出所有可行的<span class='vocab-highlight' data-word='做法'>做法</span>，然後評估每種方法的優缺點。這樣可以確保我們做出明智的決定，而不是匆忙的決定。",
                pinyin: "Nǐ shuō dé duì. Wǒ huì xiān liè chū suǒyǒu kěxíng de zuòfǎ, ránhòu pínggū měi zhǒng fāngfǎ de yōu quēdiǎn. Zhèyàng kěyǐ quèbǎo wǒmen zuò chū míngzhì de juédìng, ér bùshì cōngmáng de juédìng.",
                english: "You're right. I'll first list all feasible approaches, then evaluate the pros and cons of each method. This can ensure we make a wise decision, not a hasty one.",
                audio: "audio/dialogues/slide16/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "很好！記住，在溝通過程中要保持<span class='vocab-highlight' data-word='禮貌'>禮貌</span>和專業。即使客戶可能會不滿意，我們的<span class='vocab-highlight' data-word='做法'>做法</span>也會影響他們最終的<span class='vocab-highlight' data-word='看法'>看法</span>。我相信你能處理好這件事情！",
                pinyin: "Hěn hǎo! Jì zhù, zài gōutōng guòchéng zhōng yào bǎochí lǐmào hé zhuānyè. Jíshǐ kèhù kěnéng huì bù mǎnyì, wǒmen de zuòfǎ yě huì yǐngxiǎng tāmen zuìzhōng de kànfǎ. Wǒ xiāngxìn nǐ néng chǔlǐ hǎo zhè jiàn shìqíng!",
                english: "Great! Remember, maintain politeness and professionalism during the communication process. Even if the client might be dissatisfied, our approach will affect their final viewpoint. I believe you can handle this matter well!",
                audio: "audio/dialogues/slide16/line4.mp3"
            }
        ]
    },
    {
        id: 17,
        title: "生活與個人成長 (一)",
        titleTranslation: "Life and Personal Growth (Part 1)",
        context: "Talking about personal background, language, and physical traits",
        lines: [
            {
                speaker: "A",
                chinese: "你知道嗎？我的<span class='vocab-highlight' data-word='出生'>出生</span>日期是春天的一個美好日子。我父母總是說，我的到來給他們帶來了春天的希望。",
                pinyin: "Nǐ zhīdào ma? Wǒ de chūshēng rìqī shì chūntiān de yīgè měihǎo rìzi. Wǒ fùmǔ zǒngshì shuō, wǒ de dàolái gěi tāmen dàilái le chūntiān de xīwàng.",
                english: "You know what? My birth date is a beautiful day in spring. My parents always say my arrival brought them the hope of spring.",
                audio: "audio/dialogues/slide17/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "真溫暖的故事！說到背景，我的<span class='vocab-highlight' data-word='母語'>母語</span>是中文，但我從小就開始學習英語。現在我能流利地使用兩種語言，這對我的工作和生活都有很大幫助。",
                pinyin: "Zhēn wēnnuǎn de gùshì! Shuō dào bèijǐng, wǒ de mǔyǔ shì Zhōngwén, dàn wǒ cóngxiǎo jiù kāishǐ xuéxí Yīngyǔ. Xiànzài wǒ néng liúlì de shǐyòng liǎng zhǒng yǔyán, zhè duì wǒ de gōngzuò hé shēnghuó dōu yǒu hěn dà bāngzhù.",
                english: "What a warm story! Speaking of background, my native language is Chinese, but I started learning English since childhood. Now I can fluently use two languages, which is very helpful for both my work and life.",
                audio: "audio/dialogues/slide17/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "你真厲害！我也有類似的經歷，但我的<span class='vocab-highlight' data-word='身高'>身高</span>比我的<span class='vocab-highlight' data-word='父親'>父親</span><span class='vocab-highlight' data-word='差'>差</span>一些。他很高，但我只有中等身高。不過，這並不影響我追求自己的目標。",
                pinyin: "Nǐ zhēn lìhài! Wǒ yě yǒu lèisì de jīnglì, dàn wǒ de shēngāo bǐ wǒ de fùqīn chà yīxiē. Tā hěn gāo, dàn wǒ zhǐyǒu zhōngděng shēngāo. Bùguò, zhè bìng bù yǐngxiǎng wǒ zhuīqiú zìjǐ de mùbiāo.",
                english: "You're amazing! I have a similar experience, but my height is a bit worse than my father's. He's very tall, but I'm only medium height. However, this doesn't affect me pursuing my goals.",
                audio: "audio/dialogues/slide17/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "對！身高並不重要，重要的是內在的品質和能力。就像語言能力一樣，我們可以通過努力來提高自己。你平時是怎麼提高自己的能力的？",
                pinyin: "Duì! Shēngāo bìng bù zhòngyào, zhòngyào de shì nèizài de pǐnzhì hé nénglì. Jiù xiàng yǔyán nénglì yīyàng, wǒmen kěyǐ tōngguò nǔlì lái tígāo zìjǐ. Nǐ píngshí shì zěnme tígāo zìjǐ de nénglì de?",
                english: "Right! Height isn't important, what matters are inner qualities and abilities. Just like language ability, we can improve ourselves through effort. How do you usually improve your abilities?",
                audio: "audio/dialogues/slide17/line4.mp3"
            }
        ]
    },
    {
        id: 18,
        title: "生活與個人成長 (二)",
        titleTranslation: "Life and Personal Growth (Part 2)",
        context: "Discussing work experience, safety, and personal development",
        lines: [
            {
                speaker: "B",
                chinese: "我從小就學會了獨立。我小時候經常<span class='vocab-highlight' data-word='打工'>打工</span>，幫父母分擔家裡的經濟壓力。那些經歷讓我學會了責任感和勤勞。",
                pinyin: "Wǒ cóngxiǎo jiù xué huì le dúlì. Wǒ xiǎoshíhòu jīngcháng dǎgōng, bāng fùmǔ fēndān jiā lǐ de jīngjì yālì. Nàxiē jīnglì ràng wǒ xué huì le zérèngǎn hé qínláo.",
                english: "I learned independence from a young age. I often worked part-time as a child, helping my parents share the family's financial pressure. Those experiences taught me responsibility and diligence.",
                audio: "audio/dialogues/slide18/line1.mp3"
            },
            {
                speaker: "A",
                chinese: "這真是寶貴的經歷！現在我也在努力追求職業上的<span class='vocab-highlight' data-word='成功'>成功</span>。我相信通過不斷學習和努力工作，我們都能實現自己的目標。",
                pinyin: "Zhè zhēnshi bǎoguì de jīnglì! Xiànzài wǒ yě zài nǔlì zhuīqiú zhíyè shàng de chénggōng. Wǒ xiāngxìn tōngguò bùduàn xuéxí hé nǔlì gōngzuò, wǒmen dōu néng shíxiàn zìjǐ de mùbiāo.",
                english: "This is really valuable experience! Now I'm also striving to pursue career success. I believe through continuous learning and hard work, we can all achieve our goals.",
                audio: "audio/dialogues/slide18/line2.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，但在追求<span class='vocab-highlight' data-word='成功'>成功</span>的過程中，我們也要注意工作中的<span class='vocab-highlight' data-word='安全'>安全</span>。無論從事什麼工作，<span class='vocab-highlight' data-word='安全'>安全</span>都應該是第一位的。",
                pinyin: "Shì de, dàn zài zhuīqiú chénggōng de guòchéng zhōng, wǒmen yě yào zhùyì gōngzuò zhōng de ānquán. Wúlùn cóngshì shénme gōngzuò, ānquán dōu yīnggāi shì dì yī wèi de.",
                english: "Yes, but in the process of pursuing success, we also need to pay attention to safety at work. No matter what work we do, safety should always come first.",
                audio: "audio/dialogues/slide18/line3.mp3"
            },
            {
                speaker: "A",
                chinese: "完全同意！特別是那些可能有<span class='vocab-highlight' data-word='危險'>危險</span>的工作，我們更應該小心。我們應該學會識別和<span class='vocab-highlight' data-word='避免'>避免</span>潛在的<span class='vocab-highlight' data-word='危險'>危險</span>，保護自己和同事的<span class='vocab-highlight' data-word='安全'>安全</span>。",
                pinyin: "Wánquán tóngyì! Tèbié shì nàxiē kěnéng yǒu wēixiǎn de gōngzuò, wǒmen gèng yīnggāi xiǎoxīn. Wǒmen yīnggāi xué huì shíbié hé bìmiǎn qiánzài de wēixiǎn, bǎohù zìjǐ hé tóngshì de ānquán.",
                english: "Completely agree! Especially for jobs that might be dangerous, we should be even more careful. We should learn to identify and avoid potential dangers, protecting our own and our colleagues' safety.",
                audio: "audio/dialogues/slide18/line4.mp3"
            }
        ]
    },
    {
        id: 19,
        title: "生活與個人成長 (三)",
        titleTranslation: "Life and Personal Growth (Part 3)",
        context: "Reflecting on aging, family legacy, and happiness",
        lines: [
            {
                speaker: "A",
                chinese: "隨著<span class='vocab-highlight' data-word='年紀'>年紀</span>增長，我越來越意識到時間的寶貴。我們應該珍惜每一天，做有意義的事情，創造美好的回憶。",
                pinyin: "Suízhe niánjì zēngzhǎng, wǒ yuè lái yuè yìshí dào shíjiān de bǎoguì. Wǒmen yīnggāi zhēnxī měi yī tiān, zuò yǒu yìyì de shìqíng, chuàngzào měihǎo de huíyì.",
                english: "As age increases, I'm becoming more aware of the preciousness of time. We should cherish each day, do meaningful things, and create beautiful memories.",
                audio: "audio/dialogues/slide19/line1.mp3"
            },
            {
                speaker: "B",
                chinese: "你說得太對了！對我來說，最大的<span class='vocab-highlight' data-word='幸福'>幸福</span>來自家庭。看到我的<span class='vocab-highlight' data-word='孫子'>孫子</span><span class='vocab-highlight' data-word='孫女'>孫女</span>們健康快樂地成長，他們的每一次<span class='vocab-highlight' data-word='出生'>出生</span>和成長都讓我感到無比<span class='vocab-highlight' data-word='幸福'>幸福</span>。",
                pinyin: "Nǐ shuō dé tài duì le! Duì wǒ lái shuō, zuì dà de xìngfú láizì jiātíng. Kàn dào wǒ de sūnzi sūnnǚ men jiànkāng kuàilè de chéngzhǎng, tāmen de měi yī cì chūshēng hé chéngzhǎng dōu ràng wǒ gǎndào wúbǐ xìngfú.",
                english: "You're absolutely right! For me, the greatest happiness comes from family. Seeing my grandchildren grow up healthy and happy, each of their births and growth makes me feel incredibly happy.",
                audio: "audio/dialogues/slide19/line2.mp3"
            },
            {
                speaker: "A",
                chinese: "這真美好！家庭確實是我們生活中最重要的部分。無論我們<span class='vocab-highlight' data-word='年紀'>年紀</span>多大，家人的愛和支持都能給我們帶來力量和<span class='vocab-highlight' data-word='幸福'>幸福</span>。",
                pinyin: "Zhè zhēn měihǎo! Jiātíng quèshí shì wǒmen shēnghuó zhōng zuì zhòngyào de bùfèn. Wúlùn wǒmen niánjì duō dà, jiārén de ài hé zhīchí dōu néng gěi wǒmen dàilái lìliàng hé xìngfú.",
                english: "This is truly beautiful! Family is indeed the most important part of our lives. No matter how old we are, family love and support can bring us strength and happiness.",
                audio: "audio/dialogues/slide19/line3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，而且我們應該把這種<span class='vocab-highlight' data-word='幸福'>幸福</span>傳遞給下一代。通過我們的<span class='vocab-highlight' data-word='不同'>不同</span>經歷和故事，我們可以幫助年輕一代更好地理解生活的意義，找到屬於他們自己的<span class='vocab-highlight' data-word='幸福'>幸福</span>。",
                pinyin: "Shì de, érqiě wǒmen yīnggāi bǎ zhè zhǒng xìngfú chuándì gěi xià yīdài. Tōngguò wǒmen de bùtóng jīnglì hé gùshì, wǒmen kěyǐ bāngzhù niánqīng yīdài gèng hǎo de lǐjiě shēnghuó de yìyì, zhǎodào shǔyú tāmen zìjǐ de xìngfú.",
                english: "Yes, and we should pass on this happiness to the next generation. Through our different experiences and stories, we can help the younger generation better understand the meaning of life and find their own happiness.",
                audio: "audio/dialogues/slide19/line4.mp3"
            }
        ]
    }
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 21, // Adjust based on total slides (1 start slide + 19 content slides + 1 review slide)
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300,
    // TOTAL_VOCABULARY_WORDS: 80,
    // TOTAL_DIALOGUES: 19,
    // TOTAL_SENTENCES: 76
};