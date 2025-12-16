// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { //required first slide
    title: "Start Here", 
    subtitle: "Introduction to what you'll learn", 
    icon: "📍"
    },

    // Dialogue Slides (1-19 from your HTML)
    { 
        title: "學校生活 (一)", 
        subtitle: "School Life (Part 1)", 
        icon: "🏫" 
    },
    { 
        title: "學校生活 (二)", 
        subtitle: "School Life (Part 2)", 
        icon: "📚" 
    },
    { 
        title: "高等教育 (一)", 
        subtitle: "Higher Education (Part 1)", 
        icon: "🎓" 
    },
    { 
        title: "高等教育 (二)", 
        subtitle: "Higher Education (Part 2)", 
        icon: "🔬" 
    },
    { 
        title: "學校假期 (一)", 
        subtitle: "School Breaks and Holidays (Part 1)", 
        icon: "🌷" 
    },
    { 
        title: "學校假期 (二)", 
        subtitle: "School Breaks and Holidays (Part 2)", 
        icon: "☀️" 
    },
    { 
        title: "居住安排 (一)", 
        subtitle: "Living Arrangements (Part 1)", 
        icon: "🏠" 
    },
    { 
        title: "居住安排 (二)", 
        subtitle: "Living Arrangements (Part 2)", 
        icon: "🛏️" 
    },
    { 
        title: "家庭與鄰里 (一)", 
        subtitle: "Home and Neighborhood (Part 1)", 
        icon: "👨‍👩‍👧‍👦" 
    },
    { 
        title: "家庭與鄰里 (二)", 
        subtitle: "Home and Neighborhood (Part 2)", 
        icon: "🏡" 
    },
    { 
        title: "家居物品與整理 (一)", 
        subtitle: "Household Items and Organization (Part 1)", 
        icon: "📦" 
    },
    { 
        title: "家居物品與整理 (二)", 
        subtitle: "Household Items and Organization (Part 2)", 
        icon: "🔧" 
    },
    { 
        title: "自然與環境 (一)", 
        subtitle: "Nature and Environment (Part 1)", 
        icon: "🌳" 
    },
    { 
        title: "自然與環境 (二)", 
        subtitle: "Nature and Environment (Part 2)", 
        icon: "🌍" 
    },
    { 
        title: "天氣與氣候 (一)", 
        subtitle: "Weather and Climate (Part 1)", 
        icon: "⛅" 
    },
    { 
        title: "天氣與氣候 (二)", 
        subtitle: "Weather and Climate (Part 2)", 
        icon: "🌦️" 
    },
    { 
        title: "學習習慣與學術生活 (一)", 
        subtitle: "Study Habits and Academic Life (Part 1)", 
        icon: "✏️" 
    },
    { 
        title: "學習習慣與學術生活 (二)", 
        subtitle: "Study Habits and Academic Life (Part 2)", 
        icon: "💭" 
    },
    { 
        title: "學習習慣與學術生活 (三)", 
        subtitle: "Study Habits and Academic Life (Part 3)", 
        icon: "🎯" 
    },
    { 
        title: "Vocabulary Review", 
        subtitle: "80 Words Mastery", 
        icon: "📖" 
    },
    { //required last slide
        title: "Course Complete", 
        subtitle: "Congratulations! You've learned 80 Chinese vocabulary words!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    // Math operations
    { chinese: "加上", pinyin: "jiāshàng", english: "add, plus" },
    { chinese: "減", pinyin: "jiǎn", english: "subtract, minus" },
    { chinese: "乘", pinyin: "chéng", english: "multiply" },
    { chinese: "除", pinyin: "chú", english: "divide" },
    
    // School levels
    { chinese: "國小", pinyin: "guóxiǎo", english: "elementary school" },
    { chinese: "中學", pinyin: "zhōngxué", english: "middle school" },
    { chinese: "學院", pinyin: "xuéyuàn", english: "college, institute" },
    { chinese: "大學生", pinyin: "dàxuéshēng", english: "university student" },
    { chinese: "教授", pinyin: "jiàoshòu", english: "professor" },
    
    // School breaks and holidays
    { chinese: "放假", pinyin: "fàngjià", english: "have a holiday/break" },
    { chinese: "春假", pinyin: "chūnjià", english: "spring break" },
    { chinese: "暑假", pinyin: "shǔjià", english: "summer break" },
    { chinese: "寒假", pinyin: "hánjià", english: "winter break" },
    { chinese: "假", pinyin: "jià", english: "holiday, vacation" },
    
    // Academic terms
    { chinese: "畢業", pinyin: "bìyè", english: "graduate" },
    { chinese: "學期", pinyin: "xuéqī", english: "semester" },
    { chinese: "服務", pinyin: "fúwù", english: "service" },
    { chinese: "室友", pinyin: "shìyǒu", english: "roommate" },
    { chinese: "操場", pinyin: "cāochǎng", english: "sports field, playground" },
    { chinese: "校園", pinyin: "xiàoyuán", english: "campus" },
    
    // Study items and furniture
    { chinese: "位子", pinyin: "wèizi", english: "seat, place" },
    { chinese: "書桌", pinyin: "shūzhuō", english: "desk" },
    { chinese: "書包", pinyin: "shūbāo", english: "backpack" },
    { chinese: "書架", pinyin: "shūjià", english: "bookshelf" },
    { chinese: "本子", pinyin: "běnzi", english: "notebook" },
    { chinese: "尺", pinyin: "chǐ", english: "ruler" },
    
    // Communication and understanding
    { chinese: "討論", pinyin: "tǎolùn", english: "discuss" },
    { chinese: "同意", pinyin: "tóngyì", english: "agree" },
    { chinese: "了解", pinyin: "liǎojiě", english: "understand" },
    { chinese: "無聊", pinyin: "wúliáo", english: "boring" },
    { chinese: "有趣", pinyin: "yǒuqù", english: "interesting" },
    { chinese: "有意思", pinyin: "yǒuyìsi", english: "interesting, meaningful" },
    { chinese: "原因", pinyin: "yuányīn", english: "reason" },
    { chinese: "遍", pinyin: "biàn", english: "times (for repetition)" },
    { chinese: "改", pinyin: "gǎi", english: "change, modify" },
    { chinese: "忘記", pinyin: "wàngjì", english: "forget" },
    { chinese: "程度", pinyin: "chéngdù", english: "level, degree" },
    { chinese: "趕快", pinyin: "gǎnkuài", english: "quickly, hurry up" },
    { chinese: "以上", pinyin: "yǐshàng", english: "above, more than" },
    { chinese: "以下", pinyin: "yǐxià", english: "below, less than" },
    { chinese: "意見", pinyin: "yìjiàn", english: "opinion, suggestion" },
    { chinese: "用功", pinyin: "yònggōng", english: "diligent, hardworking" },
    { chinese: "研究", pinyin: "yánjiū", english: "research, study" },
    { chinese: "教育", pinyin: "jiàoyù", english: "education" },
    { chinese: "選擇", pinyin: "xuǎnzé", english: "choose, choice" },
    { chinese: "建議", pinyin: "jiànyì", english: "suggestion, advise" },
    { chinese: "知識", pinyin: "zhīshì", english: "knowledge" },
    
    // Home and living spaces
    { chinese: "座", pinyin: "zuò", english: "seat, measure word for buildings" },
    { chinese: "臥室", pinyin: "wòshì", english: "bedroom" },
    { chinese: "臥房", pinyin: "wòfáng", english: "bedroom" },
    { chinese: "浴室", pinyin: "yùshì", english: "bathroom" },
    { chinese: "院子", pinyin: "yuànzi", english: "courtyard" },
    { chinese: "書房", pinyin: "shūfáng", english: "study room" },
    { chinese: "洗衣機", pinyin: "xǐyījī", english: "washing machine" },
    { chinese: "餐桌", pinyin: "cānzhuō", english: "dining table" },
    { chinese: "打開", pinyin: "dǎkāi", english: "open" },
    { chinese: "箱子", pinyin: "xiāngzi", english: "box" },
    { chinese: "層", pinyin: "céng", english: "layer, floor" },
    { chinese: "櫃子", pinyin: "guìzi", english: "cabinet, cupboard" },
    { chinese: "大門", pinyin: "dàmén", english: "main door, gate" },
    { chinese: "鄰居", pinyin: "línjū", english: "neighbor" },
    { chinese: "熱鬧", pinyin: "rènao", english: "lively, bustling" },
    { chinese: "吵", pinyin: "chǎo", english: "noisy" },
    { chinese: "亂", pinyin: "luàn", english: "messy, chaotic" },
    { chinese: "房東", pinyin: "fángdōng", english: "landlord" },
    { chinese: "房屋", pinyin: "fángwū", english: "house, building" },
    { chinese: "搬家", pinyin: "bānjiā", english: "move (house)" },
    { chinese: "開水", pinyin: "kāishuǐ", english: "boiled water" },
    { chinese: "鄉下", pinyin: "xiāngxià", english: "countryside" },
    
    // Nature and environment
    { chinese: "傘", pinyin: "sǎn", english: "umbrella" },
    { chinese: "朵", pinyin: "duǒ", english: "measure word for flowers, clouds" },
    { chinese: "蚊子", pinyin: "wénzi", english: "mosquito" },
    { chinese: "自然", pinyin: "zìrán", english: "nature, natural" },
    { chinese: "月亮", pinyin: "yuèliàng", english: "moon" },
    { chinese: "星星", pinyin: "xīngxing", english: "star" },
    { chinese: "環境", pinyin: "huánjìng", english: "environment" },
    { chinese: "晴天", pinyin: "qíngtiān", english: "sunny day" },
    { chinese: "暖和", pinyin: "nuǎnhuo", english: "warm" },
    { chinese: "涼快", pinyin: "liángkuài", english: "cool, refreshing" },
    { chinese: "涼", pinyin: "liáng", english: "cool" },
    { chinese: "乾", pinyin: "gān", english: "dry" },
    { chinese: "濕", pinyin: "shī", english: "wet" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - ALL 19 DIALOGUES with vocabulary highlighting
const dialoguesDB = [
    {
        id: 1,
        title: "學校生活 (一)",
        titleTranslation: "School Life (Part 1)",
        context: "Two students discussing their school experience and subjects",
        lines: [
            {
                speaker: "A",
                chinese: "我記得<span class='vocab-highlight' data-word='國小'>國小</span>的時候，數學課很有趣。老師教我們<span class='vocab-highlight' data-word='加上'>加上</span>、<span class='vocab-highlight' data-word='減'>減</span>、<span class='vocab-highlight' data-word='乘'>乘</span>、<span class='vocab-highlight' data-word='除'>除</span>這些基本運算。",
                pinyin: "Wǒ jìdé guóxiǎo de shíhòu, shùxué kè hěn yǒuqù. Lǎoshī jiāo wǒmen jiāshàng, jiǎn, chéng, chú zhèxiē jīběn yùnsuàn.",
                english: "I remember in elementary school, math class was very interesting. The teacher taught us addition, subtraction, multiplication, and division - these basic operations.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "是啊，不過到了<span class='vocab-highlight' data-word='中學'>中學</span>，數學變得比較難。我經常需要花很多時間<span class='vocab-highlight' data-word='研究'>研究</span>那些複雜的題目。",
                pinyin: "Shì a, bùguò dào le zhōngxué, shùxué biàn dé bǐjiào nán. Wǒ jīngcháng xūyào huā hěnduō shíjiān yánjiū nàxiē fùzá de tímù.",
                english: "Yes, but when we got to middle school, math became more difficult. I often needed to spend a lot of time researching those complex problems.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我覺得最<span class='vocab-highlight' data-word='有趣'>有趣</span>的是<span class='vocab-highlight' data-word='自然'>自然</span>課。我們學習關於<span class='vocab-highlight' data-word='月亮'>月亮</span>和<span class='vocab-highlight' data-word='星星'>星星</span>的<span class='vocab-highlight' data-word='知識'>知識</span>，還有<span class='vocab-highlight' data-word='環境'>環境</span>保護的重要性。",
                pinyin: "Wǒ juédé zuì yǒuqù de shì zìrán kè. Wǒmen xuéxí guānyú yuèliàng hé xīngxīng de zhīshì, háiyǒu huánjìng bǎohù de zhòngyàoxìng.",
                english: "I think the most interesting was science class. We learned knowledge about the moon and stars, as well as the importance of environmental protection.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我同意！不過有時候我覺得某些課程很<span class='vocab-highlight' data-word='無聊'>無聊</span>。特別是當老師講的內容太簡單，或者重複太多<span class='vocab-highlight' data-word='遍'>遍</span>的時候。",
                pinyin: "Wǒ tóngyì! Bùguò yǒu shíhòu wǒ juédé mǒuxiē kèchéng hěn wúliáo. Tèbié shì dāng lǎoshī jiǎng de nèiróng tài jiǎndān, huòzhě chóngfù tài duō biàn de shíhòu.",
                english: "I agree! But sometimes I find certain courses very boring. Especially when the teacher's content is too simple, or repeated too many times.",
                audio: ""
            }
        ]
    },
    {
        id: 2,
        title: "學校生活 (二)",
        titleTranslation: "School Life (Part 2)",
        context: "Discussing school facilities and study habits",
        lines: [
            {
                speaker: "B",
                chinese: "我們的學校<span class='vocab-highlight' data-word='校園'>校園</span>很大，有一個很大的<span class='vocab-highlight' data-word='操場'>操場</span>。下課後，我經常和朋友去那裡運動。",
                pinyin: "Wǒmen de xuéxiào xiàoyuán hěn dà, yǒu yīgè hěn dà de cāochǎng. Xiàkè hòu, wǒ jīngcháng hé péngyǒu qù nàlǐ yùndòng.",
                english: "Our school campus is very large, with a big sports field. After class, I often go there with friends to exercise.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我最喜歡圖書館。那裡有很多<span class='vocab-highlight' data-word='書架'>書架</span>，放滿了各種各樣的書。我總是能找到一個安靜的<span class='vocab-highlight' data-word='位子'>位子</span>看書。",
                pinyin: "Wǒ zuì xǐhuān túshūguǎn. Nàlǐ yǒu hěnduō shūjià, fàng mǎn le gè zhǒng gè yàng de shū. Wǒ zǒngshì néng zhǎodào yīgè ānjìng de wèizi kànshū.",
                english: "I like the library the most. There are many bookshelves there, filled with all kinds of books. I can always find a quiet seat to read.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我習慣在<span class='vocab-highlight' data-word='書桌'>書桌</span>上放一個<span class='vocab-highlight' data-word='書包'>書包</span>、幾<span class='vocab-highlight' data-word='本子'>本子</span>和一把<span class='vocab-highlight' data-word='尺'>尺</span>。這樣學習的時候，我需要的一切都在手邊。",
                pinyin: "Wǒ xíguàn zài shūzhuō shàng fàng yīgè shūbāo, jǐ běnzi hé yī bǎ chǐ. Zhèyàng xuéxí de shíhòu, wǒ xūyào de yīqiè dōu zài shǒu biān.",
                english: "I'm used to placing a backpack, several notebooks, and a ruler on my desk. This way when I'm studying, everything I need is at hand.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "說到學習，你覺得<span class='vocab-highlight' data-word='討論'>討論</span>重要嗎？我發現和同學<span class='vocab-highlight' data-word='討論'>討論</span>問題可以幫助我更好地<span class='vocab-highlight' data-word='了解'>了解</span>課程內容。",
                pinyin: "Shuō dào xuéxí, nǐ juédé tǎolùn zhòngyào ma? Wǒ fāxiàn hé tóngxué tǎolùn wèntí kěyǐ bāngzhù wǒ gèng hǎo de liǎojiě kèchéng nèiróng.",
                english: "Speaking of studying, do you think discussion is important? I've found that discussing problems with classmates can help me better understand the course content.",
                audio: ""
            }
        ]
    },
    {
        id: 3,
        title: "高等教育 (一)",
        titleTranslation: "Higher Education (Part 1)",
        context: "Talking about college life and academic challenges",
        lines: [
            {
                speaker: "A",
                chinese: "我現在是<span class='vocab-highlight' data-word='大學生'>大學生</span>，在<span class='vocab-highlight' data-word='學院'>學院</span>學習<span class='vocab-highlight' data-word='教育'>教育</span>專業。我希望將來能成為一名<span class='vocab-highlight' data-word='教授'>教授</span>。",
                pinyin: "Wǒ xiànzài shì dàxuéshēng, zài xuéyuàn xuéxí jiàoyù zhuānyè. Wǒ xīwàng jiānglái néng chéngwéi yī míng jiàoshòu.",
                english: "I'm now a university student, studying education at the college. I hope to become a professor in the future.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "真不錯！大學生活和<span class='vocab-highlight' data-word='中學'>中學</span>有很大<span class='vocab-highlight' data-word='不同'>不同</span>。你需要更<span class='vocab-highlight' data-word='用功'>用功</span>，因為課程的<span class='vocab-highlight' data-word='程度'>程度</span>更深了。",
                pinyin: "Zhēn bùcuò! Dàxué shēnghuó hé zhōngxué yǒu hěn dà bùtóng. Nǐ xūyào gèng yònggōng, yīnwèi kèchéng de chéngdù gèng shēn le.",
                english: "That's great! University life is very different from middle school. You need to study harder because the course level is deeper.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "是的，而且我經常需要和同學進行小組<span class='vocab-highlight' data-word='討論'>討論</span>。有時候我們會有<span class='vocab-highlight' data-word='不同'>不同</span>的<span class='vocab-highlight' data-word='意見'>意見</span>，但通過<span class='vocab-highlight' data-word='討論'>討論</span>，我們通常能<span class='vocab-highlight' data-word='同意'>同意</span>一個最好的方案。",
                pinyin: "Shì de, érqiě wǒ jīngcháng xūyào hé tóngxué jìnxíng xiǎozǔ tǎolùn. Yǒu shíhòu wǒmen huì yǒu bùtóng de yìjiàn, dàn tōngguò tǎolùn, wǒmen tōngcháng néng tóngyì yīgè zuì hǎo de fāng'àn.",
                english: "Yes, and I often need to have group discussions with classmates. Sometimes we have different opinions, but through discussion, we can usually agree on the best solution.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我完全<span class='vocab-highlight' data-word='同意'>同意</span>你的看法。對了，你什麼時候<span class='vocab-highlight' data-word='畢業'>畢業</span>？下個<span class='vocab-highlight' data-word='學期'>學期</span>嗎？",
                pinyin: "Wǒ wánquán tóngyì nǐ de kànfǎ. Duì le, nǐ shénme shíhòu bìyè? Xià gè xuéqī ma?",
                english: "I completely agree with your view. By the way, when do you graduate? Next semester?",
                audio: ""
            }
        ]
    },
    {
        id: 4,
        title: "高等教育 (二)",
        titleTranslation: "Higher Education (Part 2)",
        context: "Discussing academic research and career choices",
        lines: [
            {
                speaker: "B",
                chinese: "我現在正在做一個<span class='vocab-highlight' data-word='研究'>研究</span>項目，關於<span class='vocab-highlight' data-word='教育'>教育</span>方法的創新。這個項目需要我讀很多資料，寫一份詳細的報告。",
                pinyin: "Wǒ xiànzài zhèngzài zuò yīgè yánjiū xiàngmù, guānyú jiàoyù fāngfǎ de chuàngxīn. Zhège xiàngmù xūyào wǒ dú hěnduō zīliào, xiě yī fèn xiángxì de bàogào.",
                english: "I'm currently working on a research project about educational method innovation. This project requires me to read a lot of materials and write a detailed report.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "聽起來很有<span class='vocab-highlight' data-word='意思'>意思</span>！你覺得這個<span class='vocab-highlight' data-word='研究'>研究</span>對未來的<span class='vocab-highlight' data-word='教育'>教育</span>有什麼影響？",
                pinyin: "Tīng qǐlái hěn yǒu yìsi! Nǐ juédé zhège yánjiū duì wèilái de jiàoyù yǒu shénme yǐngxiǎng?",
                english: "That sounds very interesting! What impact do you think this research will have on future education?",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我希望它能幫助老師找到更有效的教學方法。畢竟，每個學生的學習<span class='vocab-highlight' data-word='程度'>程度</span>都<span class='vocab-highlight' data-word='不同'>不同</span>，我們需要<span class='vocab-highlight' data-word='選擇'>選擇</span>適合他們的教學方式。",
                pinyin: "Wǒ xīwàng tā néng bāngzhù lǎoshī zhǎodào gèng yǒuxiào de jiàoxué fāngfǎ. Bìjìng, měi gè xuéshēng de xuéxí chéngdù dōu bùtóng, wǒmen xūyào xuǎnzé shìhé tāmen de jiàoxué fāngshì.",
                english: "I hope it can help teachers find more effective teaching methods. After all, each student's learning level is different, and we need to choose teaching methods that suit them.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我有個<span class='vocab-highlight' data-word='建議'>建議</span>：你可以把研究成果分享給<span class='vocab-highlight' data-word='國小'>國小</span>和<span class='vocab-highlight' data-word='中學'>中學</span>的老師。這樣可以幫助更多的學生。",
                pinyin: "Wǒ yǒu gè jiànyì: Nǐ kěyǐ bǎ yánjiū chéngguǒ fēnxiǎng gěi guóxiǎo hé zhōngxué de lǎoshī. Zhèyàng kěyǐ bāngzhù gèng duō de xuéshēng.",
                english: "I have a suggestion: You could share your research results with elementary and middle school teachers. This way you can help more students.",
                audio: ""
            }
        ]
    },
    {
        id: 5,
        title: "學校假期 (一)",
        titleTranslation: "School Breaks and Holidays (Part 1)",
        context: "Planning for school breaks and holiday activities",
        lines: [
            {
                speaker: "A",
                chinese: "下個星期學校就要<span class='vocab-highlight' data-word='放假'>放假</span>了！這次是<span class='vocab-highlight' data-word='春假'>春假</span>，我計劃去<span class='vocab-highlight' data-word='鄉下'>鄉下</span>看看我的爺爺奶奶。",
                pinyin: "Xià gè xīngqī xuéxiào jiù yào fàngjià le! Zhè cì shì chūnjià, wǒ jìhuà qù xiāngxià kàn kàn wǒ de yéyé nǎinai.",
                english: "School will be on break next week! This time it's spring break, and I plan to go to the countryside to visit my grandparents.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "聽起來不錯！我記得去年<span class='vocab-highlight' data-word='暑假'>暑假</span>的時候，我也去了<span class='vocab-highlight' data-word='鄉下'>鄉下</span>。那裡很安靜，空氣也很好。",
                pinyin: "Tīng qǐlái bùcuò! Wǒ jìdé qùnián shǔjià de shíhòu, wǒ yě qù le xiāngxià. Nàlǐ hěn ānjìng, kōngqì yě hěn hǎo.",
                english: "That sounds good! I remember last year during summer break, I also went to the countryside. It was very quiet there, and the air was good too.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "是啊，而且<span class='vocab-highlight' data-word='鄉下'>鄉下</span>的<span class='vocab-highlight' data-word='環境'>環境</span>很美。不過我擔心春天的時候會有<span class='vocab-highlight' data-word='蚊(子)'>蚊子</span>，我需要帶一把<span class='vocab-highlight' data-word='傘'>傘</span>和一些防蚊用品。",
                pinyin: "Shì a, érqiě xiāngxià de huánjìng hěn měi. Bùguò wǒ dānxīn chūntiān de shíhòu huì yǒu wénzi, wǒ xūyào dài yī bǎ sǎn hé yīxiē fáng wén yòngpǐn.",
                english: "Yes, and the countryside environment is beautiful. But I'm worried there might be mosquitoes in spring, so I need to bring an umbrella and some mosquito repellent.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "你考慮得很周到！對了，你覺得<span class='vocab-highlight' data-word='寒假'>寒假</span>和<span class='vocab-highlight' data-word='暑假'>暑假</span>，哪個更好？我個人更喜歡<span class='vocab-highlight' data-word='寒假'>寒假</span>，因為可以過新年。",
                pinyin: "Nǐ kǎolǜ dé hěn zhōudào! Duì le, nǐ juédé hánjià hé shǔjià, nǎgè gèng hǎo? Wǒ gèrén gèng xǐhuān hánjià, yīnwèi kěyǐ guò xīnnián.",
                english: "You've considered everything carefully! By the way, which do you think is better, winter break or summer break? Personally I prefer winter break because we can celebrate the New Year.",
                audio: ""
            }
        ]
    },
    {
        id: 6,
        title: "學校假期 (二)",
        titleTranslation: "School Breaks and Holidays (Part 2)",
        context: "Discussing weather and activities during breaks",
        lines: [
            {
                speaker: "B",
                chinese: "說到<span class='vocab-highlight' data-word='暑假'>暑假</span>，我最喜歡夏天的<span class='vocab-highlight' data-word='晴天'>晴天</span>。雖然有時候很熱，但<span class='vocab-highlight' data-word='晚上'>晚上</span>通常會變得<span class='vocab-highlight' data-word='涼快'>涼快</span>一些。",
                pinyin: "Shuō dào shǔjià, wǒ zuì xǐhuān xiàtiān de qíngtiān. Suīrán yǒu shíhòu hěn rè, dàn wǎnshang tōngcháng huì biàn dé liángkuài yīxiē.",
                english: "Speaking of summer break, I like summer sunny days the most. Although sometimes it's very hot, evenings usually become a bit cooler.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "是的，而且夏天的夜晚可以看到很多<span class='vocab-highlight' data-word='星星'>星星</span>。不過我比較喜歡春天，天氣<span class='vocab-highlight' data-word='暖和'>暖和</span>但不會太熱。",
                pinyin: "Shì de, érqiě xiàtiān de yèwǎn kěyǐ kàn dào hěnduō xīngxīng. Bùguò wǒ bǐjiào xǐhuān chūntiān, tiānqì nuǎnhuo dàn bù huì tài rè.",
                english: "Yes, and on summer nights you can see many stars. But I prefer spring - the weather is warm but not too hot.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "說到天氣，我<span class='vocab-highlight' data-word='忘記'>忘記</span>告訴你，明天可能會下雨。你應該帶<span class='vocab-highlight' data-word='傘'>傘</span>，不然衣服會<span class='vocab-highlight' data-word='濕'>濕</span>。",
                pinyin: "Shuō dào tiānqì, wǒ wàngjì gàosù nǐ, míngtiān kěnéng huì xià yǔ. Nǐ yīnggāi dài sǎn, bùrán yīfu huì shī.",
                english: "Speaking of weather, I forgot to tell you, it might rain tomorrow. You should bring an umbrella, otherwise your clothes will get wet.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "謝謝提醒！我最不喜歡衣服<span class='vocab-highlight' data-word='濕'>濕</span>的感覺。如果下雨，我們就<span class='vocab-highlight' data-word='改</span>天再見面吧。等天氣<span class='vocab-highlight' data-word='乾'>乾</span>了再說。",
                pinyin: "Xièxie tíxǐng! Wǒ zuì bù xǐhuān yīfu shī de gǎnjué. Rúguǒ xià yǔ, wǒmen jiù gǎi tiān zài jiànmiàn ba. Děng tiānqì gān le zàishuō.",
                english: "Thanks for the reminder! I really don't like the feeling of wet clothes. If it rains, let's meet another day. We'll talk again when the weather is dry.",
                audio: ""
            }
        ]
    },
    {
        id: 7,
        title: "居住安排 (一)",
        titleTranslation: "Living Arrangements (Part 1)",
        context: "Discussing dormitory life and roommates",
        lines: [
            {
                speaker: "A",
                chinese: "我現在和三個<span class='vocab-highlight' data-word='室友'>室友</span>住在學校宿舍。我們共用一個<span class='vocab-highlight' data-word='浴室'>浴室</span>和一個小<span class='vocab-highlight' data-word='院(子)'>院子</span>。",
                pinyin: "Wǒ xiànzài hé sān gè shìyǒu zhù zài xuéxiào sùshè. Wǒmen gòngyòng yīgè yùshì hé yīgè xiǎo yuànzi.",
                english: "I now live in the school dormitory with three roommates. We share a bathroom and a small courtyard.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "聽起來不錯！你們有<span class='vocab-highlight' data-word='不同'>不同</span>的<span class='vocab-highlight' data-word='臥室'>臥室</span>嗎？還是大家睡在同一個房間？",
                pinyin: "Tīng qǐlái bùcuò! Nǐmen yǒu bùtóng de wòshì ma? Háishì dàjiā shuì zài tóng yīgè fángjiān?",
                english: "That sounds good! Do you have separate bedrooms? Or does everyone sleep in the same room?",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我們有兩間<span class='vocab-highlight' data-word='臥房'>臥房</span>，每間房間有兩個<span class='vocab-highlight' data-word='位子'>位子</span>。我和一個室友住一間，另外兩個室友住另一間。",
                pinyin: "Wǒmen yǒu liǎng jiān wòfáng, měi jiān fángjiān yǒu liǎng gè wèizi. Wǒ hé yīgè shìyǒu zhù yī jiān, lìngwài liǎng gè shìyǒu zhù lìng yī jiān.",
                english: "We have two bedrooms, each room has two spots. I share one room with a roommate, and the other two roommates share the other room.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "那你們的公共區域怎麼樣？有<span class='vocab-highlight' data-word='書房'>書房</span>嗎？我喜歡有一個安靜的地方可以<span class='vocab-highlight' data-word='研究'>研究</span>和寫報告。",
                pinyin: "Nà nǐmen de gōnggòng qūyù zěnme yàng? Yǒu shūfáng ma? Wǒ xǐhuān yǒu yīgè ānjìng de dìfāng kěyǐ yánjiū hé xiě bàogào.",
                english: "What about your common areas? Do you have a study room? I like having a quiet place to research and write reports.",
                audio: ""
            }
        ]
    },
    {
        id: 8,
        title: "居住安排 (二)",
        titleTranslation: "Living Arrangements (Part 2)",
        context: "Talking about household chores and furniture",
        lines: [
            {
                speaker: "B",
                chinese: "你們宿舍有<span class='vocab-highlight' data-word='洗衣機'>洗衣機</span>嗎？還是有公共的洗衣<span class='vocab-highlight' data-word='服務'>服務</span>？",
                pinyin: "Nǐmen sùshè yǒu xǐyījī ma? Háishì yǒu gōnggòng de xǐyī fúwù?",
                english: "Does your dorm have a washing machine? Or is there a public laundry service?",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我們每層樓都有一台公共<span class='vocab-highlight' data-word='洗衣機'>洗衣機</span>。不過有時候需要排隊，特別是週末的時候。",
                pinyin: "Wǒmen měi céng lóu dōu yǒu yī tái gōnggòng xǐyījī. Bùguò yǒu shíhòu xūyào páiduì, tèbié shì zhōumò de shíhòu.",
                english: "Each floor has a public washing machine. But sometimes you need to wait in line, especially on weekends.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我明白。說到家具，你們的<span class='vocab-highlight' data-word='書桌'>書桌</span>大嗎？我需要一個大桌子來放我的<span class='vocab-highlight' data-word='書包'>書包</span>、<span class='vocab-highlight' data-word='本子'>本子</span>和書。",
                pinyin: "Wǒ míngbái. Shuō dào jiājù, nǐmen de shūzhuō dà ma? Wǒ xūyào yīgè dà zhuōzi lái fàng wǒ de shūbāo, běnzi hé shū.",
                english: "I understand. Speaking of furniture, are your desks big? I need a large table to put my backpack, notebooks, and books.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我們的<span class='vocab-highlight' data-word='書桌'>書桌</span>不大，但每個人還有一個<span class='vocab-highlight' data-word='書架'>書架</span>。我把書放在<span class='vocab-highlight' data-word='書架'>書架</span>上，這樣<span class='vocab-highlight' data-word='書桌'>書桌</span>就有更多空間了。",
                pinyin: "Wǒmen de shūzhuō bù dà, dàn měi gè rén hái yǒu yīgè shūjià. Wǒ bǎ shū fàng zài shūjià shàng, zhèyàng shūzhuō jiù yǒu gèng duō kōngjiān le.",
                english: "Our desks aren't big, but each person also has a bookshelf. I put books on the bookshelf, so the desk has more space.",
                audio: ""
            }
        ]
    },
    {
        id: 9,
        title: "家庭與鄰里 (一)",
        titleTranslation: "Home and Neighborhood (Part 1)",
        context: "Discussing home life and neighborhood environment",
        lines: [
            {
                speaker: "A",
                chinese: "我家的<span class='vocab-highlight' data-word='餐桌'>餐桌</span>很大，可以坐八個人。我們全家經常在<span class='vocab-highlight' data-word='餐桌'>餐桌</span>上一起吃晚飯。",
                pinyin: "Wǒ jiā de cānzhuō hěn dà, kěyǐ zuò bā gè rén. Wǒmen quán jiā jīngcháng zài cānzhuō shàng yīqǐ chī wǎnfàn.",
                english: "My family's dining table is very big, it can seat eight people. Our whole family often eats dinner together at the dining table.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "真溫馨！我家的<span class='vocab-highlight' data-word='餐桌'>餐桌</span>比較小，但我們還是在那裡吃飯。對了，你們家有專門的<span class='vocab-highlight' data-word='書房'>書房</span>嗎？",
                pinyin: "Zhēn wēnxīn! Wǒ jiā de cānzhuō bǐjiào xiǎo, dàn wǒmen háishì zài nàlǐ chīfàn. Duì le, nǐmen jiā yǒu zhuānmén de shūfáng ma?",
                english: "That's so warm! My family's dining table is relatively small, but we still eat there. By the way, does your home have a dedicated study room?",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "有的，我爸爸有一個<span class='vocab-highlight' data-word='書房'>書房</span>，裡面有很多<span class='vocab-highlight' data-word='書架'>書架</span>。他經常在那裡<span class='vocab-highlight' data-word='研究'>研究</span>和寫東西。",
                pinyin: "Yǒu de, wǒ bàba yǒu yīgè shūfáng, lǐmiàn yǒu hěnduō shūjià. Tā jīngcháng zài nàlǐ yánjiū hé xiě dōngxī.",
                english: "Yes, my dad has a study room with many bookshelves. He often researches and writes things there.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "說到家，我最近在考慮<span class='vocab-highlight' data-word='搬家'>搬家</span>。現在的<span class='vocab-highlight' data-word='房屋'>房屋</span>有點小，而且<span class='vocab-highlight' data-word='鄰居'>鄰居</span>很<span class='vocab-highlight' data-word='吵'>吵</span>。",
                pinyin: "Shuō dào jiā, wǒ zuìjìn zài kǎolǜ bānjiā. Xiànzài de fángwū yǒudiǎn xiǎo, érqiě línjū hěn chǎo.",
                english: "Speaking of home, I've been considering moving recently. The current house is a bit small, and the neighbors are very noisy.",
                audio: ""
            }
        ]
    },
    {
        id: 10,
        title: "家庭與鄰里 (二)",
        titleTranslation: "Home and Neighborhood (Part 2)",
        context: "Talking about moving, landlords, and neighborhood atmosphere",
        lines: [
            {
                speaker: "B",
                chinese: "我現在的<span class='vocab-highlight' data-word='房東'>房東</span>人很好，但房子太舊了。而且附近很<span class='vocab-highlight' data-word='熱鬧'>熱鬧</span>，晚上睡覺的時候有點<span class='vocab-highlight' data-word='吵'>吵</span>。",
                pinyin: "Wǒ xiànzài de fángdōng rén hěn hǎo, dàn fángzi tài jiù le. Érqiě fùjìn hěn rènao, wǎnshang shuìjiào de shíhòu yǒudiǎn chǎo.",
                english: "My current landlord is very nice, but the house is too old. And the area is very lively, so it's a bit noisy when sleeping at night.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我明白。有時候太<span class='vocab-highlight' data-word='熱鬧'>熱鬧</span>也不是好事。你想找什麼樣的<span class='vocab-highlight' data-word='房屋'>房屋</span>？需要靠近學校嗎？",
                pinyin: "Wǒ míngbái. Yǒu shíhòu tài rènao yě bùshì hǎo shì. Nǐ xiǎng zhǎo shénme yàng de fángwū? Xūyào kàojìn xuéxiào ma?",
                english: "I understand. Sometimes being too lively isn't a good thing. What kind of house are you looking for? Does it need to be near school?",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "是的，我想找一個離學校近一點的地方。不過我不希望太<span class='vocab-highlight' data-word='吵'>吵</span>，而且房間不能太<span class='vocab-highlight' data-word='亂'>亂</span>。我喜歡整潔的環境。",
                pinyin: "Shì de, wǒ xiǎng zhǎo yīgè lí xuéxiào jìn yīdiǎn de dìfāng. Bùguò wǒ bù xīwàng tài chǎo, érqiě fángjiān bùnéng tài luàn. Wǒ xǐhuān zhěngjié de huánjìng.",
                english: "Yes, I want to find a place closer to school. But I don't want it to be too noisy, and the rooms can't be too messy. I like a tidy environment.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "那你應該找一個安靜的社區。雖然可能沒有那麼<span class='vocab-highlight' data-word='熱鬧'>熱鬧</span>，但學習和休息的<span class='vocab-highlight' data-word='環境'>環境</span>會更好。對了，你需要幫忙<span class='vocab-highlight' data-word='搬家'>搬家</span>嗎？",
                pinyin: "Nà nǐ yīnggāi zhǎo yīgè ānjìng de shèqū. Suīrán kěnéng méiyǒu nàme rènao, dàn xuéxí hé xiūxi de huánjìng huì gèng hǎo. Duì le, nǐ xūyào bāngmáng bānjiā ma?",
                english: "Then you should look for a quiet community. Although it might not be as lively, the environment for studying and resting will be better. By the way, do you need help moving?",
                audio: ""
            }
        ]
    },
    {
        id: 11,
        title: "家居物品與整理 (一)",
        titleTranslation: "Household Items and Organization (Part 1)",
        context: "Organizing household items and discussing storage solutions",
        lines: [
            {
                speaker: "A",
                chinese: "我最近在整理房間，發現東西太多了。我需要買幾個<span class='vocab-highlight' data-word='箱(子)'>箱子</span>來裝不常用的物品。",
                pinyin: "Wǒ zuìjìn zài zhěnglǐ fángjiān, fāxiàn dōngxī tài duō le. Wǒ xūyào mǎi jǐ gè xiāngzi lái zhuāng bù chángyòng de wùpǐn.",
                english: "I've been organizing my room recently and found there's too much stuff. I need to buy several boxes to store infrequently used items.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "好主意！你可以把<span class='vocab-highlight' data-word='箱(子)'>箱子</span>放在<span class='vocab-highlight' data-word='櫃(子)'>櫃子</span>裡或者床底下。我家有一個很大的<span class='vocab-highlight' data-word='櫃(子)'>櫃子</span>，可以放很多東西。",
                pinyin: "Hǎo zhǔyì! Nǐ kěyǐ bǎ xiāngzi fàng zài guìzi lǐ huòzhě chuáng dǐxià. Wǒ jiā yǒu yīgè hěn dà de guìzi, kěyǐ fàng hěnduō dōngxī.",
                english: "Good idea! You can put the boxes in the cabinet or under the bed. My home has a very large cabinet that can hold many things.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "是的，而且我需要一個新的<span class='vocab-highlight' data-word='書架'>書架</span>。現在的<span class='vocab-highlight' data-word='書架'>書架</span>已經滿了，我還有幾十<span class='vocab-highlight' data-word='本子'>本子</span>沒地方放。",
                pinyin: "Shì de, érqiě wǒ xūyào yīgè xīn de shūjià. Xiànzài de shūjià yǐjīng mǎn le, wǒ hái yǒu jǐ shí běnzi méi dìfāng fàng.",
                english: "Yes, and I need a new bookshelf. The current bookshelf is already full, and I still have dozens of notebooks with no place to put them.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "你可以考慮買一個多<span class='vocab-highlight' data-word='層'>層</span>的<span class='vocab-highlight' data-word='書架'>書架</span>。這樣可以更好地分類你的書和<span class='vocab-highlight' data-word='本子'>本子</span>，讓房間看起來不那麼<span class='vocab-highlight' data-word='亂'>亂</span>。",
                pinyin: "Nǐ kěyǐ kǎolǜ mǎi yīgè duō céng de shūjià. Zhèyàng kěyǐ gèng hǎo de fēnlèi nǐ de shū hé běnzi, ràng fángjiān kàn qǐlái bù nàme luàn.",
                english: "You could consider buying a multi-layer bookshelf. This way you can better categorize your books and notebooks, making the room look less messy.",
                audio: ""
            }
        ]
    },
    {
        id: 12,
        title: "家居物品與整理 (二)",
        titleTranslation: "Household Items and Organization (Part 2)",
        context: "Discussing home maintenance and daily routines",
        lines: [
            {
                speaker: "B",
                chinese: "說到整理，我家的大門最近有點問題，<span class='vocab-highlight' data-word='打開'>打開</span>的時候會發出奇怪的聲音。我需要找人來修理。",
                pinyin: "Shuō dào zhěnglǐ, wǒ jiā de dàmén zuìjìn yǒudiǎn wèntí, dǎkāi de shíhòu huì fāchū qíguài de shēngyīn. Wǒ xūyào zhǎo rén lái xiūlǐ.",
                english: "Speaking of organizing, my home's main door has been having some issues recently - it makes strange sounds when opening. I need to find someone to repair it.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "那你應該<span class='vocab-highlight' data-word='趕快'>趕快</span>處理，<span class='vocab-highlight' data-word='大門'>大門</span>的<span class='vocab-highlight' data-word='安全'>安全</span>很重要。你可以問問你的<span class='vocab-highlight' data-word='鄰居'>鄰居</span>，看看他們有沒有好的修理工推薦。",
                pinyin: "Nà nǐ yīnggāi gǎnkuài chǔlǐ, dàmén de ānquán hěn zhòngyào. Nǐ kěyǐ wèn wèn nǐ de línjū, kàn kàn tāmen yǒu méiyǒu hǎo de xiūlǐ gōng tuījiàn.",
                english: "Then you should handle it quickly, the main door's safety is very important. You can ask your neighbors to see if they have any good repairperson recommendations.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "好主意！對了，你每天起床後的第一件事是什麼？我習慣先<span class='vocab-highlight' data-word='打開'>打開</span>窗戶，讓新鮮空氣進來，然後燒<span class='vocab-highlight' data-word='開水'>開水</span>泡茶。",
                pinyin: "Hǎo zhǔyì! Duì le, nǐ měitiān qǐchuáng hòu de dì yī jiàn shì shì shénme? Wǒ xíguàn xiān dǎkāi chuānghù, ràng xīnxiān kōngqì jìnlái, ránhòu shāo kāishuǐ pào chá.",
                english: "Good idea! By the way, what's the first thing you do after getting up each day? I'm used to first opening the window to let fresh air in, then boiling water to make tea.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我通常先整理床鋪，然後檢查我的<span class='vocab-highlight' data-word='書包'>書包</span>，看看有沒有<span class='vocab-highlight' data-word='忘記'>忘記</span>帶什麼東西。有時候我會<span class='vocab-highlight' data-word='忘記'>忘記</span>帶<span class='vocab-highlight' data-word='本子'>本子</span>或者<span class='vocab-highlight' data-word='尺'>尺</span>。",
                pinyin: "Wǒ tōngcháng xiān zhěnglǐ chuángpù, ránhòu jiǎnchá wǒ de shūbāo, kàn kàn yǒu méiyǒu wàngjì dài shénme dōngxī. Yǒu shíhòu wǒ huì wàngjì dài běnzi huòzhě chǐ.",
                english: "I usually first make the bed, then check my backpack to see if I've forgotten to bring anything. Sometimes I forget to bring notebooks or a ruler.",
                audio: ""
            }
        ]
    },
    {
        id: 13,
        title: "自然與環境 (一)",
        titleTranslation: "Nature and Environment (Part 1)",
        context: "Discussing nature appreciation and environmental experiences",
        lines: [
            {
                speaker: "A",
                chinese: "我最喜歡春天的<span class='vocab-highlight' data-word='自然'>自然</span>景色。特別是看到樹上開滿了花，每<span class='vocab-highlight' data-word='朵'>朵</span>花都很美麗。",
                pinyin: "Wǒ zuì xǐhuān chūntiān de zìrán jǐngsè. Tèbié shì kàn dào shù shàng kāi mǎn le huā, měi duǒ huā dōu hěn měilì.",
                english: "I like spring's natural scenery the most. Especially seeing trees full of flowers, each flower is very beautiful.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "是啊，不過春天的時候<span class='vocab-highlight' data-word='蚊(子)'>蚊子</span>也開始多了。我記得去年春天，我被<span class='vocab-highlight' data-word='蚊(子)'>蚊子</span>咬了很多包。",
                pinyin: "Shì a, bùguò chūntiān de shíhòu wénzi yě kāishǐ duō le. Wǒ jìdé qùnián chūntiān, wǒ bèi wénzi yǎo le hěnduō bāo.",
                english: "Yes, but mosquitoes also start to increase in spring. I remember last spring, I got many mosquito bites.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "夏天的夜晚可以看到很多<span class='vocab-highlight' data-word='星星'>星星</span>，特別是在<span class='vocab-highlight' data-word='鄉下'>鄉下</span>。有時候還能看到<span class='vocab-highlight' data-word='月亮'>月亮</span>特別圓，特別亮。",
                pinyin: "Xiàtiān de yèwǎn kěyǐ kàn dào hěnduō xīngxīng, tèbié shì zài xiāngxià. Yǒu shíhòu hái néng kàn dào yuèliàng tèbié yuán, tèbié liàng.",
                english: "On summer nights you can see many stars, especially in the countryside. Sometimes you can also see the moon particularly round and bright.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "說到<span class='vocab-highlight' data-word='鄉下'>鄉下</span>，我爺爺奶奶住的地方<span class='vocab-highlight' data-word='環境'>環境</span>很好。那裡空氣清新，而且很安靜，不像城市這麼<span class='vocab-highlight' data-word='吵'>吵</span>。",
                pinyin: "Shuō dào xiāngxià, wǒ yéyé nǎinai zhù de dìfāng huánjìng hěn hǎo. Nàlǐ kōngqì qīngxīn, érqiě hěn ānjìng, bù xiàng chéngshì zhème chǎo.",
                english: "Speaking of the countryside, my grandparents live in a place with a very good environment. The air is fresh there, and it's very quiet, not noisy like the city.",
                audio: ""
            }
        ]
    },
    {
        id: 14,
        title: "自然與環境 (二)",
        titleTranslation: "Nature and Environment (Part 2)",
        context: "Talking about weather preferences and environmental protection",
        lines: [
            {
                speaker: "B",
                chinese: "你喜歡什麼樣的天氣？我比較喜歡<span class='vocab-highlight' data-word='晴天'>晴天</span>，因為陽光明媚，讓人心情愉快。不過夏天的晴天有時候太熱了。",
                pinyin: "Nǐ xǐhuān shénme yàng de tiānqì? Wǒ bǐjiào xǐhuān qíngtiān, yīnwèi yángguāng míngmèi, ràng rén xīnqíng yúkuài. Bùguò xiàtiān de qíngtiān yǒu shíhòu tài rè le.",
                english: "What kind of weather do you like? I prefer sunny days because the sunshine is bright and makes people feel happy. But summer sunny days are sometimes too hot.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我喜歡秋天，天氣<span class='vocab-highlight' data-word='涼'>涼</span>爽但不冷。而且秋天的<span class='vocab-highlight' data-word='自然'>自然</span>景色很美，樹葉會變成各種顏色。",
                pinyin: "Wǒ xǐhuān qiūtiān, tiānqì liáng shuǎng dàn bù lěng. Érqiě qiūtiān de zìrán jǐngsè hěn měi, shùyè huì biàn chéng gè zhǒng yánsè.",
                english: "I like autumn, the weather is cool but not cold. And autumn's natural scenery is beautiful, leaves change to various colors.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "說到<span class='vocab-highlight' data-word='環境'>環境</span>，我覺得我們都應該更重視環境保護。比如，減少使用塑膠袋，多使用公共交通工具。",
                pinyin: "Shuō dào huánjìng, wǒ juédé wǒmen dōu yīnggāi gèng zhòngshì huánjìng bǎohù. Bǐrú, jiǎnshǎo shǐyòng sùjiāo dài, duō shǐyòng gōnggòng jiāotōng gōngjù.",
                english: "Speaking of environment, I think we should all pay more attention to environmental protection. For example, reduce using plastic bags, use public transportation more.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我完全<span class='vocab-highlight' data-word='同意'>同意</span>！我們只有一個地球，保護<span class='vocab-highlight' data-word='環境'>環境</span>就是保護我們自己的家。學校也應該加強這方面的<span class='vocab-highlight' data-word='教育'>教育</span>。",
                pinyin: "Wǒ wánquán tóngyì! Wǒmen zhǐyǒu yīgè dìqiú, bǎohù huánjìng jiùshì bǎohù wǒmen zìjǐ de jiā. Xuéxiào yě yīnggāi jiāqiáng zhè fāngmiàn de jiàoyù.",
                english: "I completely agree! We only have one Earth, protecting the environment is protecting our own home. Schools should also strengthen education in this area.",
                audio: ""
            }
        ]
    },
    {
        id: 15,
        title: "天氣與氣候 (一)",
        titleTranslation: "Weather and Climate (Part 1)",
        context: "Discussing weather changes and seasonal preferences",
        lines: [
            {
                speaker: "A",
                chinese: "今天的天氣真舒服！不冷不熱，很<span class='vocab-highlight' data-word='涼快'>涼快</span>。這種天氣最適合出去散步了。",
                pinyin: "Jīntiān de tiānqì zhēn shūfu! Bù lěng bù rè, hěn liángkuài. Zhè zhǒng tiānqì zuì shìhé chūqù sànbù le.",
                english: "Today's weather is really comfortable! Not cold, not hot, very cool. This kind of weather is most suitable for going out for a walk.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "是啊，比昨天好多了。昨天太悶熱了，而且空氣很<span class='vocab-highlight' data-word='濕'>濕</span>，讓人感覺不舒服。我喜歡<span class='vocab-highlight' data-word='乾'>乾</span>爽的天氣。",
                pinyin: "Shì a, bǐ zuótiān hǎo duō le. Zuótiān tài mēnrè le, érqiě kōngqì hěn shī, ràng rén gǎnjué bù shūfu. Wǒ xǐhuān gān shuǎng de tiānqì.",
                english: "Yes, much better than yesterday. Yesterday was too muggy and hot, and the air was very humid, making people feel uncomfortable. I like dry and fresh weather.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我聽說明天又會變熱。氣象預報說明天是<span class='vocab-highlight' data-word='晴天'>晴天</span>，氣溫會升高<span class='vocab-highlight' data-word='以上'>以上</span>五度。我們應該<span class='vocab-highlight' data-word='趕快'>趕快</span>享受今天的好天氣。",
                pinyin: "Wǒ tīng shuō míngtiān yòu huì biàn rè. Qìxiàng yùbào shuō míngtiān shì qíngtiān, qìwēn huì shēnggāo yǐshàng wǔ dù. Wǒmen yīnggāi gǎnkuài xiǎngshòu jīntiān de hǎo tiānqì.",
                english: "I heard tomorrow will become hot again. The weather forecast says tomorrow will be sunny, temperature will rise by five degrees or more. We should quickly enjoy today's good weather.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "對！我們去公園走走吧。不過我應該帶<span class='vocab-highlight' data-word='傘'>傘</span>嗎？雖然是<span class='vocab-highlight' data-word='晴天'>晴天</span>，但夏天的天氣變化很快，有時候突然會下雨。",
                pinyin: "Duì! Wǒmen qù gōngyuán zǒu zǒu ba. Bùguò wǒ yīnggāi dài sǎn ma? Suīrán shì qíngtiān, dàn xiàtiān de tiānqì biànhuà hěn kuài, yǒu shíhòu túrán huì xià yǔ.",
                english: "Right! Let's go for a walk in the park. But should I bring an umbrella? Although it's sunny, summer weather changes quickly, sometimes it suddenly rains.",
                audio: ""
            }
        ]
    },
    {
        id: 16,
        title: "天氣與氣候 (二)",
        titleTranslation: "Weather and Climate (Part 2)",
        context: "Planning activities based on weather conditions",
        lines: [
            {
                speaker: "B",
                chinese: "說到天氣，你覺得哪個季節最好？我個人喜歡春天，天氣<span class='vocab-highlight' data-word='暖和'>暖和</span>，花都開了，到處都很美。",
                pinyin: "Shuō dào tiānqì, nǐ juédé nǎgè jìjié zuì hǎo? Wǒ gèrén xǐhuān chūntiān, tiānqì nuǎnhuo, huā dōu kāi le, dàochù dōu hěn měi.",
                english: "Speaking of weather, which season do you think is best? Personally I like spring, the weather is warm, flowers are blooming, everywhere is beautiful.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我也喜歡春天，不過有時候春天太短了。很快天氣就變熱，進入夏天。你喜歡夏天嗎？",
                pinyin: "Wǒ yě xǐhuān chūntiān, bùguò yǒu shíhòu chūntiān tài duǎn le. Hěn kuài tiānqì jiù biàn rè, jìnrù xiàtiān. Nǐ xǐhuān xiàtiān ma?",
                english: "I also like spring, but sometimes spring is too short. Soon the weather becomes hot, entering summer. Do you like summer?",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "我不太喜歡夏天，因為太熱了。而且夏天的<span class='vocab-highlight' data-word='蚊(子)'>蚊子</span>很多。我比較喜歡秋天，天氣<span class='vocab-highlight' data-word='涼'>涼</span>爽，而且很少下雨。",
                pinyin: "Wǒ bù tài xǐhuān xiàtiān, yīnwèi tài rè le. Érqiě xiàtiān de wénzi hěnduō. Wǒ bǐjiào xǐhuān qiūtiān, tiānqì liáng shuǎng, érqiě hěn shǎo xià yǔ.",
                english: "I don't really like summer because it's too hot. And there are many mosquitoes in summer. I prefer autumn, the weather is cool, and it rarely rains.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "說到下雨，如果明天真的下雨，我們的計劃就要<span class='vocab-highlight' data-word='改'>改</span>了。我們可以<span class='vocab-highlight' data-word='選擇'>選擇</span>去博物館或者圖書館，這些都是室內活動。",
                pinyin: "Shuō dào xià yǔ, rúguǒ míngtiān zhēn de xià yǔ, wǒmen de jìhuà jiù yào gǎi le. Wǒmen kěyǐ xuǎnzé qù bówùguǎn huòzhě túshūguǎn, zhèxiē dōu shì shìnèi huódòng.",
                english: "Speaking of rain, if it really rains tomorrow, our plans will need to change. We can choose to go to a museum or library, these are all indoor activities.",
                audio: ""
            }
        ]
    },
    {
        id: 17,
        title: "學習習慣與學術生活 (一)",
        titleTranslation: "Study Habits and Academic Life (Part 1)",
        context: "Discussing study methods and academic challenges",
        lines: [
            {
                speaker: "A",
                chinese: "我發現要取得好成績，就必須<span class='vocab-highlight' data-word='用功'>用功</span>學習。不能只是表面上學習，而要真正<span class='vocab-highlight' data-word='了解'>了解</span>所學的內容。",
                pinyin: "Wǒ fāxiàn yào qǔdé hǎo chéngjī, jiù bìxū yònggōng xuéxí. Bùnéng zhǐshì biǎomiàn shàng xuéxí, ér yào zhēnzhèng liǎojiě suǒ xué de nèiróng.",
                english: "I've found that to get good grades, you must study diligently. You can't just study superficially, but must truly understand what you're learning.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "完全同意！而且我們需要找到適合自己的學習方法。<span class='vocab-highlight' data-word='例如'>例如</span>，我喜歡把重要的內容寫在<span class='vocab-highlight' data-word='本子'>本子</span>上，這樣可以幫助我記憶。",
                pinyin: "Wánquán tóngyì! Érqiě wǒmen xūyào zhǎodào shìhé zìjǐ de xuéxí fāngfǎ. Lìrú, wǒ xǐhuān bǎ zhòngyào de nèiróng xiě zài běnzi shàng, zhèyàng kěyǐ bāngzhù wǒ jìyì.",
                english: "Completely agree! And we need to find learning methods that suit us. For example, I like writing important content in notebooks, this helps me remember.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我有時候會<span class='vocab-highlight' data-word='忘記'>忘記</span>一些細節，特別是在考試的時候。所以我現在會把重要的<span class='vocab-highlight' data-word='知識'>知識</span>點寫在小卡片上，隨時複習。",
                pinyin: "Wǒ yǒu shíhòu huì wàngjì yīxiē xìjié, tèbié shì zài kǎoshì de shíhòu. Suǒyǐ wǒ xiànzài huì bǎ zhòngyào de zhīshì diǎn xiě zài xiǎo kǎpiàn shàng, suíshí fùxí.",
                english: "I sometimes forget some details, especially during exams. So now I write important knowledge points on small cards and review them anytime.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "好方法！說到考試，你覺得考試的<span class='vocab-highlight' data-word='程度'>程度</span>難嗎？我發現有些科目特別難，需要花很多時間<span class='vocab-highlight' data-word='研究'>研究</span>。",
                pinyin: "Hǎo fāngfǎ! Shuō dào kǎoshì, nǐ juédé kǎoshì de chéngdù nán ma? Wǒ fāxiàn yǒuxiē kēmù tèbié nán, xūyào huā hěnduō shíjiān yánjiū.",
                english: "Good method! Speaking of exams, do you think the exam level is difficult? I've found some subjects are particularly difficult, requiring a lot of time to research.",
                audio: ""
            }
        ]
    },
    {
        id: 18,
        title: "學習習慣與學術生活 (二)",
        titleTranslation: "Study Habits and Academic Life (Part 2)",
        context: "Talking about academic discussions and understanding concepts",
        lines: [
            {
                speaker: "B",
                chinese: "我覺得和同學<span class='vocab-highlight' data-word='討論'>討論</span>很有幫助。有時候我一個人<span class='vocab-highlight' data-word='研究'>研究</span>很久都不明白的問題，通過<span class='vocab-highlight' data-word='討論'>討論</span>很快就<span class='vocab-highlight' data-word='了解'>了解</span>了。",
                pinyin: "Wǒ juédé hé tóngxué tǎolùn hěn yǒu bāngzhù. Yǒu shíhòu wǒ yīgè rén yánjiū hěn jiǔ dōu bù míngbái de wèntí, tōngguò tǎolùn hěn kuài jiù liǎojiě le.",
                english: "I think discussing with classmates is very helpful. Sometimes problems I research alone for a long time without understanding, through discussion I quickly understand.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "是的，而且每個人可能有<span class='vocab-highlight' data-word='不同'>不同</span>的<span class='vocab-highlight' data-word='看法'>看法</span>和<span class='vocab-highlight' data-word='意見'>意見</span>。通過<span class='vocab-highlight' data-word='討論'>討論</span>，我們可以聽到<span class='vocab-highlight' data-word='不同'>不同</span>的觀點，這對學習很有幫助。",
                pinyin: "Shì de, érqiě měi gè rén kěnéng yǒu bùtóng de kànfǎ hé yìjiàn. Tōngguò tǎolùn, wǒmen kěyǐ tīng dào bùtóng de guāndiǎn, zhè duì xuéxí hěn yǒu bāngzhù.",
                english: "Yes, and everyone may have different views and opinions. Through discussion, we can hear different perspectives, which is very helpful for learning.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "說到學習，你有沒有什麼好的<span class='vocab-highlight' data-word='建議'>建議</span>？我發現有時候學習很<span class='vocab-highlight' data-word='無聊'>無聊</span>，特別是當內容重複太多<span class='vocab-highlight' data-word='遍'>遍</span>的時候。",
                pinyin: "Shuō dào xuéxí, nǐ yǒu méiyǒu shénme hǎo de jiànyì? Wǒ fāxiàn yǒu shíhòu xuéxí hěn wúliáo, tèbié shì dāng nèiróng chóngfù tài duō biàn de shíhòu.",
                english: "Speaking of studying, do you have any good suggestions? I find studying sometimes very boring, especially when content is repeated too many times.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我建議你可以試著把學習變成遊戲。<span class='vocab-highlight' data-word='例如'>例如</span>，設定時間目標，或者和朋友比賽。這樣可以讓學習變得更有<span class='vocab-highlight' data-word='意思'>意思</span>。",
                pinyin: "Wǒ jiànyì nǐ kěyǐ shì zhe bǎ xuéxí biàn chéng yóuxì. Lìrú, shèdìng shíjiān mùbiāo, huòzhě hé péngyǒu bǐsài. Zhèyàng kěyǐ ràng xuéxí biàn dé gèng yǒu yìsi.",
                english: "I suggest you could try turning studying into a game. For example, set time goals, or compete with friends. This can make studying more interesting.",
                audio: ""
            }
        ]
    },
    {
        id: 19,
        title: "學習習慣與學術生活 (三)",
        titleTranslation: "Study Habits and Academic Life (Part 3)",
        context: "Reflecting on learning progress and academic goals",
        lines: [
            {
                speaker: "A",
                chinese: "我覺得學習最重要的是真正<span class='vocab-highlight' data-word='了解'>了解</span>，而不僅僅是記憶。當你真正<span class='vocab-highlight' data-word='了解'>了解</span>一個概念時，你就能應用它解決<span class='vocab-highlight' data-word='不同</span>的問題。",
                pinyin: "Wǒ juédé xuéxí zuì zhòngyào de shì zhēnzhèng liǎojiě, ér bù jǐnjǐn shì jìyì. Dāng nǐ zhēnzhèng liǎojiě yīgè gàiniàn shí, nǐ jiù néng yìngyòng tā jiějué bùtóng de wèntí.",
                english: "I think the most important thing in learning is truly understanding, not just memorizing. When you truly understand a concept, you can apply it to solve different problems.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "你說得太對了！我有時候會因為<span class='vocab-highlight' data-word='無聊'>無聊</span>而失去學習的動力。但當我找到學習的<span class='vocab-highlight' data-word='原因'>原因</span>和意義時，就會變得更<span class='vocab-highlight' data-word='用功'>用功</span>。",
                pinyin: "Nǐ shuō dé tài duì le! Wǒ yǒu shíhòu huì yīnwèi wúliáo ér shīqù xuéxí de dònglì. Dàn dāng wǒ zhǎodào xuéxí de yuányīn hé yìyì shí, jiù huì biàn dé gèng yònggōng.",
                english: "You're absolutely right! I sometimes lose motivation to study because of boredom. But when I find the reason and meaning for studying, I become more diligent.",
                audio: ""
            },
            {
                speaker: "A",
                chinese: "我們都應該為自己設定學習目標。比如，這個<span class='vocab-highlight' data-word='學期'>學期</span>要掌握哪些<span class='vocab-highlight' data-word='知識'>知識</span>，或者成績要達到什麼<span class='vocab-highlight' data-word='程度'>程度</span>。",
                pinyin: "Wǒmen dōu yīnggāi wèi zìjǐ shèdìng xuéxí mùbiāo. Bǐrú, zhège xuéqī yào zhǎngwò nǎxiē zhīshì, huòzhě chéngjī yào dádào shénme chéngdù.",
                english: "We should all set learning goals for ourselves. For example, what knowledge to master this semester, or what level of grades to achieve.",
                audio: ""
            },
            {
                speaker: "B",
                chinese: "對！而且我們應該<span class='vocab-highlight' data-word='趕快'>趕快</span>行動，不要拖延。學習就像爬山，一步一步來，總能到達山頂。謝謝你的<span class='vocab-highlight' data-word='建議'>建議</span>和鼓勵！",
                pinyin: "Duì! Érqiě wǒmen yīnggāi gǎnkuài xíngdòng, bùyào tuōyán. Xuéxí jiù xiàng páshān, yī bù yī bù lái, zǒng néng dàodá shāndǐng. Xièxiè nǐ de jiànyì hé gǔlì!",
                english: "Right! And we should take action quickly, don't procrastinate. Studying is like climbing a mountain, step by step, you can always reach the summit. Thank you for your suggestions and encouragement!",
                audio: ""
            }
        ]
    }
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};