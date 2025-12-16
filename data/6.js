// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { //required first slide
        title: "開始學習", 
        subtitle: "Introduction to Advanced Chinese Vocabulary", 
        icon: "📍"
    },
    {
        title: "時間與頻率", 
        subtitle: "Time and Frequency Adverbs", 
        icon: "⏰"
    },
    {
        title: "程度副詞", 
        subtitle: "Degree Adverbs", 
        icon: "📊"
    },
    {
        title: "連接與順序", 
        subtitle: "Connectors and Sequence", 
        icon: "🔗"
    },
    {
        title: "轉折與對比", 
        subtitle: "Transitions and Contrast", 
        icon: "🔄"
    },
    {
        title: "範圍與包含", 
        subtitle: "Scope and Inclusion", 
        icon: "🎯"
    },
    {
        title: "強調與程度", 
        subtitle: "Emphasis and Degree", 
        icon: "❗"
    },
    {
        title: "時間表達", 
        subtitle: "Time Expressions", 
        icon: "🕒"
    },
    {
        title: "條件與假設", 
        subtitle: "Conditions and Hypotheses", 
        icon: "🔮"
    },
    {
        title: "比較與選擇", 
        subtitle: "Comparison and Choice", 
        icon: "⚖️"
    },
    {
        title: "量化與程度", 
        subtitle: "Quantification and Degree", 
        icon: "📈"
    },
    {
        title: "舉例與說明", 
        subtitle: "Examples and Explanations", 
        icon: "💡"
    },
    {
        title: "傳遞與方式", 
        subtitle: "Transmission and Manner", 
        icon: "📤"
    },
    {
        title: "替代與補充", 
        subtitle: "Alternatives and Supplements", 
        icon: "➕"
    },
    {
        title: "近似與估計", 
        subtitle: "Approximation and Estimation", 
        icon: "≈"
    },
    {
        title: "時間關聯", 
        subtitle: "Temporal Relations", 
        icon: "⏳"
    },
    {
        title: "情感與狀態", 
        subtitle: "Emotions and States", 
        icon: "😊"
    },
    // {
    //     title: "必要性與方式", 
    //     subtitle: "Necessity and Manner", 
    //     icon: "✅"
    // },
    // {
    //     title: "持續與範圍", 
    //     subtitle: "Continuation and Scope", 
    //     icon: "∞"
    // },
    // {
    //     title: "動作與過程", 
    //     subtitle: "Actions and Processes", 
    //     icon: "🎬"
    // },
    { //required review slide
        title: "詞彙複習", 
        subtitle: "48 Words Mastery", 
        icon: "📖" 
    },
    { //required last slide
        title: "課程完成", 
        subtitle: "Congratulations!", 
        icon: "🎉" 
    }
];

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    { chinese: "從來", pinyin: "cónglái", english: "always; at all times", audio: "audio/part4/words/conglai.mp3" },
    { chinese: "大概", pinyin: "dàgài", english: "probably; approximately", audio: "audio/part4/words/dagai.mp3" },
    { chinese: "還好", pinyin: "háihǎo", english: "not bad; still okay", audio: "audio/part4/words/haihao.mp3" },
    { chinese: "極", pinyin: "jí", english: "extremely; utmost", audio: "audio/part4/words/ji.mp3" },
    { chinese: "接著", pinyin: "jiēzhe", english: "then; next; after that", audio: "audio/part4/words/jiezhe.mp3" },
    { chinese: "結果", pinyin: "jiéguǒ", english: "as a result; outcome", audio: "audio/part4/words/jieguo.mp3" },
    { chinese: "立刻", pinyin: "lìkè", english: "immediately; at once", audio: "audio/part4/words/like.mp3" },
    { chinese: "沒想到", pinyin: "méi xiǎngdào", english: "unexpectedly; never thought", audio: "audio/part4/words/meixiangdao.mp3" },
    { chinese: "其實", pinyin: "qíshí", english: "actually; in fact", audio: "audio/part4/words/qishi.mp3" },
    { chinese: "其中", pinyin: "qízhōng", english: "among them; within which", audio: "audio/part4/words/qizhong.mp3" },
    { chinese: "完全", pinyin: "wánquán", english: "completely; entirely", audio: "audio/part4/words/wanquan.mp3" },
    { chinese: "相當", pinyin: "xiāngdāng", english: "quite; rather; considerably", audio: "audio/part4/words/xiangdang.mp3" },
    { chinese: "一切", pinyin: "yīqiè", english: "everything; all", audio: "audio/part4/words/yiqie.mp3" },
    { chinese: "已", pinyin: "yǐ", english: "already", audio: "audio/part4/words/yi.mp3" },
    { chinese: "尤其", pinyin: "yóuqí", english: "especially; particularly", audio: "audio/part4/words/youqi.mp3" },
    { chinese: "越", pinyin: "yuè", english: "more... (the more...)", audio: "audio/part4/words/yue.mp3" },
    { chinese: "整", pinyin: "zhěng", english: "whole; entire", audio: "audio/part4/words/zheng.mp3" },
    { chinese: "正", pinyin: "zhèng", english: "just; exactly; right", audio: "audio/part4/words/zheng.mp3" },
    { chinese: "只要", pinyin: "zhǐyào", english: "as long as; provided that", audio: "audio/part4/words/zhiyao.mp3" },
    { chinese: "最好", pinyin: "zuìhǎo", english: "best; had better", audio: "audio/part4/words/zuihao.mp3" },
    { chinese: "同樣", pinyin: "tóngyàng", english: "same; similarly", audio: "audio/part4/words/tongyang.mp3" },
    { chinese: "空", pinyin: "kōng", english: "empty; vacant; free time", audio: "audio/part4/words/kong.mp3" },
    { chinese: "空", pinyin: "kòng", english: "to leave empty; to make time", audio: "audio/part4/words/kong2.mp3" },
    { chinese: "連", pinyin: "lián", english: "even; including", audio: "audio/part4/words/lian.mp3" },
    { chinese: "倍", pinyin: "bèi", english: "times; fold; multiple", audio: "audio/part4/words/bei.mp3" },
    { chinese: "包括", pinyin: "bāokuò", english: "including; to include", audio: "audio/part4/words/baokuo.mp3" },
    { chinese: "步", pinyin: "bù", english: "step; pace; stage", audio: "audio/part4/words/bu.mp3" },
    { chinese: "當時", pinyin: "dāngshí", english: "at that time; back then", audio: "audio/part4/words/dangshi.mp3" },
    { chinese: "等到", pinyin: "děngdào", english: "wait until; by the time", audio: "audio/part4/words/dengdao.mp3" },
    { chinese: "煩", pinyin: "fán", english: "annoyed; troublesome", audio: "audio/part4/words/fan.mp3" },
    { chinese: "剛好", pinyin: "gānghǎo", english: "just right; coincidentally", audio: "audio/part4/words/ganghao.mp3" },
    { chinese: "或者", pinyin: "huòzhě", english: "or; perhaps", audio: "audio/part4/words/huozhe.mp3" },
    { chinese: "哇", pinyin: "wa", english: "wow (exclamation)", audio: "audio/part4/words/wa.mp3" },
    { chinese: "需", pinyin: "xū", english: "to need; to require", audio: "audio/part4/words/xu.mp3" },
    { chinese: "須", pinyin: "xū", english: "must; have to", audio: "audio/part4/words/xu2.mp3" },
    { chinese: "直接", pinyin: "zhíjiē", english: "direct; directly", audio: "audio/part4/words/zhijie.mp3" },
    { chinese: "總", pinyin: "zǒng", english: "always; in any case; total", audio: "audio/part4/words/zong.mp3" },
    { chinese: "泡", pinyin: "pào", english: "to soak; to steep; bubble", audio: "audio/part4/words/pao.mp3" },
    { chinese: "且", pinyin: "qiě", english: "moreover; and; for now", audio: "audio/part4/words/qie.mp3" },
    { chinese: "比方", pinyin: "bǐfang", english: "for example; such as", audio: "audio/part4/words/bifang.mp3" },
    { chinese: "比方說", pinyin: "bǐfang shuō", english: "for example; for instance", audio: "audio/part4/words/bifangshuo.mp3" },
    { chinese: "傳", pinyin: "chuán", english: "to pass; to transmit; to spread", audio: "audio/part4/words/chuan.mp3" },
    { chinese: "另", pinyin: "lìng", english: "another; separate", audio: "audio/part4/words/ling.mp3" },
    { chinese: "另外", pinyin: "lìngwài", english: "in addition; besides", audio: "audio/part4/words/lingwai.mp3" },
    { chinese: "左右", pinyin: "zuǒyòu", english: "about; approximately; left and right", audio: "audio/part4/words/zuoyou.mp3" },
    { chinese: "當", pinyin: "dāng", english: "when; while; to be", audio: "audio/part4/words/dang.mp3" },
    { chinese: "類", pinyin: "lèi", english: "category; type; kind", audio: "audio/part4/words/lei.mp3" },
    { chinese: "樣", pinyin: "yàng", english: "appearance; shape; manner", audio: "audio/part4/words/yang.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "時間觀念",
        titleTranslation: "Concept of Time",
        context: "兩位朋友討論時間管理和習慣",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='從來'>從來</span>沒有遲到的習慣，<span class='vocab-highlight' data-word='大概'>大概</span>都會提前十分鐘到。",
                pinyin: "Wǒ cónglái méiyǒu chídào de xíguàn, dàgài dōu huì tíqián shí fēnzhōng dào.",
                english: "I've never had the habit of being late; I probably arrive about ten minutes early.",
                audio: "audio/part3/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "這樣很好啊！我<span class='vocab-highlight' data-word='當時'>當時</span>也想培養這個習慣，<span class='vocab-highlight' data-word='結果'>結果</span>總是失敗。<span class='vocab-highlight' data-word='等到'>等到</span>我意識到的時候，<span class='vocab-highlight' data-word='已'>已</span>經來不及了。",
                pinyin: "Zhèyàng hěn hǎo a! Wǒ dāngshí yě xiǎng péiyǎng zhège xíguàn, jiéguǒ zǒng shì shībài. Děngdào wǒ yìshí dào de shíhòu, yǐjīng láibují le.",
                english: "That's really good! I also wanted to cultivate this habit back then, but as a result, I always failed. By the time I realized it, it was already too late.",
                audio: "audio/part3/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='其實'>其實</span>你可以試試我的方法：<span class='vocab-highlight' data-word='只要'>只要</span>把時鐘調快十五分鐘，<span class='vocab-highlight' data-word='一切'>一切</span>問題就解決了。",
                pinyin: "Qíshí nǐ kěyǐ shìshì wǒ de fāngfǎ: Zhǐyào bǎ shízhōng tiáo kuài shíwǔ fēnzhōng, yīqiè wèntí jiù jiějué le.",
                english: "Actually, you can try my method: as long as you set the clock fifteen minutes fast, all problems will be solved.",
                audio: "audio/part3/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='沒想到'>沒想到</span>這麼簡單！我<span class='vocab-highlight' data-word='立刻'>立刻</span>就試試看，<span class='vocab-highlight' data-word='總'>總</span>比一直遲到好。",
                pinyin: "Méi xiǎngdào zhème jiǎndān! Wǒ lìkè jiù shìshì kàn, zǒng bǐ yīzhí chídào hǎo.",
                english: "I never thought it would be this simple! I'll try it immediately; it's always better than constantly being late.",
                audio: "audio/part3/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "學習方法",
        titleTranslation: "Study Methods",
        context: "學生討論有效的學習策略",
        lines: [
            {
                speaker: "A",
                chinese: "我發現學中文<span class='vocab-highlight' data-word='越'>越</span>努力，<span class='vocab-highlight' data-word='越'>越</span>覺得有趣。<span class='vocab-highlight' data-word='尤其'>尤其</span>是文法，<span class='vocab-highlight' data-word='正'>正</span>是我最需要加強的部分。",
                pinyin: "Wǒ fāxiàn xué Zhōngwén yuè nǔlì, yuè juéde yǒuqù. Yóuqí shì wénfǎ, zhèng shì wǒ zuì xūyào jiāqiáng de bùfèn.",
                english: "I've found that the harder I study Chinese, the more interesting it becomes. Especially grammar, which is exactly the part I need to strengthen the most.",
                audio: "audio/part3/dialogue2/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='完全'>完全</span>同意！我<span class='vocab-highlight' data-word='剛好'>剛好</span>找到一個好方法：每天<span class='vocab-highlight' data-word='泡'>泡</span>在圖書館三小時，效率提高好幾<span class='vocab-highlight' data-word='倍'>倍</span>。",
                pinyin: "Wánquán tóngyì! Wǒ gānghǎo zhǎodào yīgè hǎo fāngfǎ: Měitiān pào zài túshūguǎn sān xiǎoshí, xiàolǜ tígāo hǎo jǐ bèi.",
                english: "Completely agree! I just happened to find a good method: soaking in the library for three hours every day, efficiency has increased several times.",
                audio: "audio/part3/dialogue2/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "真的嗎？<span class='vocab-highlight' data-word='相當'>相當</span>厲害！<span class='vocab-highlight' data-word='不過'>不過</span>我<span class='vocab-highlight' data-word='連'>連</span>專心一小時都有困難，<span class='vocab-highlight' data-word='煩'>煩</span>死了！",
                pinyin: "Zhēn de ma? Xiāngdāng lìhài! Bùguò wǒ lián zhuānxīn yī xiǎoshí dōu yǒu kùnnán, fán sǐ le!",
                english: "Really? That's quite impressive! But I even have difficulty concentrating for one hour, it's so annoying!",
                audio: "audio/part3/dialogue2/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "你可以試試番茄工作法，<span class='vocab-highlight' data-word='比方說'>比方說</span>，專心25分鐘<span class='vocab-highlight' data-word='接著'>接著</span>休息5分鐘，這樣<span class='vocab-highlight' data-word='整'>整</span>個下午都不會累。",
                pinyin: "Nǐ kěyǐ shìshì fānqié gōngzuò fǎ, bǐfang shuō, zhuānxīn 25 fēnzhōng jiēzhe xiūxi 5 fēnzhōng, zhèyàng zhěng gè xiàwǔ dōu bù huì lèi.",
                english: "You can try the Pomodoro technique, for example, focus for 25 minutes then rest for 5 minutes, this way you won't get tired the whole afternoon.",
                audio: "audio/part3/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "旅行計劃",
        titleTranslation: "Travel Plans",
        context: "朋友們討論旅行安排",
        lines: [
            {
                speaker: "A",
                chinese: "我們暑假去日本旅行吧！<span class='vocab-highlight' data-word='最好'>最好</span>去兩週<span class='vocab-highlight' data-word='左右'>左右</span>，這樣才能<span class='vocab-highlight' data-word='完全'>完全</span>體驗當地文化。",
                pinyin: "Wǒmen shǔjià qù Rìběn lǚxíng ba! Zuìhǎo qù liǎng zhōu zuǒyòu, zhèyàng cáinéng wánquán tǐyàn dāngdì wénhuà.",
                english: "Let's travel to Japan during summer vacation! It's best to go for about two weeks, so we can completely experience the local culture.",
                audio: "audio/part3/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "聽起來<span class='vocab-highlight' data-word='極'>極</span>好！但<span class='vocab-highlight' data-word='其中'>其中</span>一週我<span class='vocab-highlight' data-word='需'>需</span>要工作，<span class='vocab-highlight' data-word='或者'>或者</span>我們可以調整時間？",
                pinyin: "Tīng qǐlái jí hǎo! Dàn qízhōng yī zhōu wǒ xūyào gōngzuò, huòzhě wǒmen kěyǐ tiáozhěng shíjiān?",
                english: "Sounds extremely good! But during one of those weeks I need to work, or perhaps we can adjust the timing?",
                audio: "audio/part3/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='沒問題'>沒問題</span>！<span class='vocab-highlight' data-word='當'>當</span>然可以調整。<span class='vocab-highlight' data-word='另外'>另外</span>，行程<span class='vocab-highlight' data-word='包括'>包括</span>東京、大阪<span class='vocab-highlight' data-word='另'>另</span>外還有京都，你覺得如何？",
                pinyin: "Méi wèntí! Dāngrán kěyǐ tiáozhěng. Lìngwài, xíngchéng bāokuò Dōngjīng, Dàbǎn lìng wài hái yǒu Jīngdū, nǐ juéde rúhé?",
                english: "No problem! Of course we can adjust. Additionally, the itinerary includes Tokyo, Osaka, and also Kyoto, what do you think?",
                audio: "audio/part3/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='哇'>哇</span>！太棒了！我<span class='vocab-highlight' data-word='立刻'>立刻</span>開始存錢，<span class='vocab-highlight' data-word='等到'>等到</span>機票特價時<span class='vocab-highlight' data-word='直接'>直接</span>訂購。",
                pinyin: "Wa! Tài bàng le! Wǒ lìkè kāishǐ cún qián, děngdào jīpiào tèjià shí zhíjiē dìnggòu.",
                english: "Wow! That's fantastic! I'll immediately start saving money, and when there's a flight sale, I'll directly book.",
                audio: "audio/part3/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "職場挑戰",
        titleTranslation: "Workplace Challenges",
        context: "同事討論工作壓力和解決方案",
        lines: [
            {
                speaker: "A",
                chinese: "這次的專案<span class='vocab-highlight' data-word='相當'>相當</span>複雜，我<span class='vocab-highlight' data-word='整'>整</span>整三天<span class='vocab-highlight' data-word='連'>連</span>睡覺的時間都沒有。",
                pinyin: "Zhè cì de zhuān'àn xiāngdāng fùzá, wǒ zhěng zhěng sān tiān lián shuìjiào de shíjiān dōu méiyǒu.",
                english: "This project is quite complex; I haven't even had time to sleep for three whole days.",
                audio: "audio/part3/dialogue4/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='完全'>完全</span>理解！<span class='vocab-highlight' data-word='其實'>其實</span>你可以把工作分<span class='vocab-highlight' data-word='步'>步</span>完成，<span class='vocab-highlight' data-word='比方'>比方</span>先做最重要的部分。",
                pinyin: "Wǒ wánquán lǐjiě! Qíshí nǐ kěyǐ bǎ gōngzuò fēn bù wánchéng, bǐfang xiān zuò zuì zhòngyào de bùfèn.",
                english: "I completely understand! Actually, you can complete the work step by step, for example, start with the most important part first.",
                audio: "audio/part3/dialogue4/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='結果'>結果</span>我<span class='vocab-highlight' data-word='正'>正</span>在嘗試這個方法，但壓力還是<span class='vocab-highlight' data-word='極'>極</span>大。<span class='vocab-highlight' data-word='尤其'>尤其</span>是<span class='vocab-highlight' data-word='當'>當</span>客戶不斷改變要求時。",
                pinyin: "Jiéguǒ wǒ zhèng zài chángshì zhège fāngfǎ, dàn yālì háishì jí dà. Yóuqí shì dāng kèhù bùduàn gǎibiàn yāoqiú shí.",
                english: "As a result, I'm currently trying this method, but the pressure is still extremely high. Especially when clients constantly change their requirements.",
                audio: "audio/part3/dialogue4/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='只要'>只要</span>跟客戶<span class='vocab-highlight' data-word='直接'>直接</span>溝通清楚，<span class='vocab-highlight' data-word='一切'>一切</span>都會變<span class='vocab-highlight' data-word='相當'>相當</span>順利。<span class='vocab-highlight' data-word='總'>總</span>之，別放棄！",
                pinyin: "Zhǐyào gēn kèhù zhíjiē gōutōng qīngchǔ, yīqiè dōu huì biàn xiāngdāng shùnlì. Zǒngzhī, bié fàngqì!",
                english: "As long as you communicate clearly with the client directly, everything will become quite smooth. In any case, don't give up!",
                audio: "audio/part3/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "健康生活",
        titleTranslation: "Healthy Living",
        context: "朋友分享健康生活方式",
        lines: [
            {
                speaker: "A",
                chinese: "我最近開始晨跑，<span class='vocab-highlight' data-word='已'>已</span>經持續一個月了。<span class='vocab-highlight' data-word='結果'>結果</span>身體<span class='vocab-highlight' data-word='相當'>相當</span>有活力！",
                pinyin: "Wǒ zuìjìn kāishǐ chénpǎo, yǐjīng chíxù yīgè yuè le. Jiéguǒ shēntǐ xiāngdāng yǒu huólì!",
                english: "I recently started morning running and have already been doing it for a month. As a result, my body is quite energetic!",
                audio: "audio/part3/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='真的'>真的</span>嗎？<span class='vocab-highlight' data-word='其實'>其實</span>我也想試試，<span class='vocab-highlight' data-word='尤其'>尤其</span>是<span class='vocab-highlight' data-word='當'>當</span>我發現體重增加時。<span class='vocab-highlight' data-word='不過'>不過</span>我<span class='vocab-highlight' data-word='從來'>從來</span>沒晨跑過。",
                pinyin: "Zhēn de ma? Qíshí wǒ yě xiǎng shìshì, yóuqí shì dāng wǒ fāxiàn tǐzhòng zēngjiā shí. Bùguò wǒ cónglái méi chénpǎo guò.",
                english: "Really? Actually, I also want to try, especially when I notice my weight increasing. But I've never gone morning running before.",
                audio: "audio/part3/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='只要'>只要</span>從慢<span class='vocab-highlight' data-word='步'>步</span>開始，<span class='vocab-highlight' data-word='接著'>接著</span>慢慢增加距離。<span class='vocab-highlight' data-word='總'>總</span>有一天你會愛上它！<span class='vocab-highlight' data-word='比方說'>比方說</span>，先跑十分鐘。",
                pinyin: "Zhǐyào cóng màn bù kāishǐ, jiēzhe mànmàn zēngjiā jùlí. Zǒng yǒu yītiān nǐ huì àishàng tā! Bǐfang shuō, xiān pǎo shí fēnzhōng.",
                english: "As long as you start with slow steps, then gradually increase the distance. One day you'll definitely fall in love with it! For example, start with ten minutes.",
                audio: "audio/part3/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！我<span class='vocab-highlight' data-word='明天'>明天</span><span class='vocab-highlight' data-word='立刻'>立刻</span>試試。<span class='vocab-highlight' data-word='而且'>而且</span>聽說晨跑後效率會提高好幾<span class='vocab-highlight' data-word='倍'>倍</span>呢！",
                pinyin: "Hǎo zhǔyì! Wǒ míngtiān lìkè shìshì. Érqiě tīng shuō chénpǎo hòu xiàolǜ huì tígāo hǎo jǐ bèi ne!",
                english: "Great idea! I'll try it immediately tomorrow. Moreover, I heard efficiency increases several times after morning running!",
                audio: "audio/part3/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "科技發展",
        titleTranslation: "Technology Development",
        context: "討論科技對生活的影響",
        lines: [
            {
                speaker: "A",
                chinese: "現在科技發展得<span class='vocab-highlight' data-word='極'>極</span>快，<span class='vocab-highlight' data-word='尤其'>尤其</span>是人工智能，<span class='vocab-highlight' data-word='已經'>已經</span>改變了<span class='vocab-highlight' data-word='一切'>一切</span>。",
                pinyin: "Xiànzài kējì fāzhǎn dé jí kuài, yóuqí shì réngōng zhìnéng, yǐjīng gǎibiàn le yīqiè.",
                english: "Nowadays, technology develops extremely fast, especially artificial intelligence, which has already changed everything.",
                audio: "audio/part3/dialogue6/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='確實'>確實</span>！<span class='vocab-highlight' data-word='比方說'>比方說</span>，現在訊息<span class='vocab-highlight' data-word='傳'>傳</span>播的速度比以前快幾百<span class='vocab-highlight' data-word='倍'>倍</span>。<span class='vocab-highlight' data-word='連'>連</span>偏遠地區都能立刻知道世界新聞。",
                pinyin: "Quèshí! Bǐfang shuō, xiànzài xùnxī chuán bō de sùdù bǐ yǐqián kuài jǐ bǎi bèi. Lián piānyuǎn dìqū dōu néng lìkè zhīdào shìjiè xīnwén.",
                english: "Indeed! For example, the speed of information transmission is now hundreds of times faster than before. Even remote areas can immediately know world news.",
                audio: "audio/part3/dialogue6/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='不過'>不過</span>，這種變化<span class='vocab-highlight' data-word='其實'>其實</span>帶來新的挑戰。<span class='vocab-highlight' data-word='比方'>比方</span>，假新聞的<span class='vocab-highlight' data-word='傳'>傳</span>播也變得更<span class='vocab-highlight' data-word='直接'>直接</span>快速。",
                pinyin: "Bùguò, zhè zhǒng biànhuà qíshí dàilái xīn de tiǎozhàn. Bǐfang, jiǎ xīnwén de chuán bō yě biàn dé gèng zhíjiē kuàisù.",
                english: "However, this change actually brings new challenges. For example, the spread of fake news has also become more direct and rapid.",
                audio: "audio/part3/dialogue6/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "所以我們<span class='vocab-highlight' data-word='須'>須</span>學會分辨資訊。<span class='vocab-highlight' data-word='只要'>只要</span>有批判性思考，<span class='vocab-highlight' data-word='大概'>大概</span>就能避免被誤導。<span class='vocab-highlight' data-word='總'>總</span>之，科技是工具，不是主人。",
                pinyin: "Suǒyǐ wǒmen xū xuéhuì fēnbiàn zīxùn. Zhǐyào yǒu pīpàn xìng sīkǎo, dàgài jiù néng bìmiǎn bèi wùdǎo. Zǒngzhī, kējì shì gōngjù, bùshì zhǔrén.",
                english: "So we must learn to discern information. As long as we have critical thinking, we can probably avoid being misled. In any case, technology is a tool, not a master.",
                audio: "audio/part3/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "環境保護",
        titleTranslation: "Environmental Protection",
        context: "討論環保的重要性和行動",
        lines: [
            {
                speaker: "A",
                chinese: "最近空氣污染<span class='vocab-highlight' data-word='相當'>相當</span>嚴重，<span class='vocab-highlight' data-word='連'>連</span>在家裡都能聞到異味。<span class='vocab-highlight' data-word='其實'>其實</span>我們<span class='vocab-highlight' data-word='須'>須</span>要立刻採取行動。",
                pinyin: "Zuìjìn kōngqì wūrǎn xiāngdāng yánzhòng, lián zài jiālǐ dōu néng wén dào yìwèi. Qíshí wǒmen xū yào lìkè cǎiqǔ xíngdòng.",
                english: "Recently, air pollution has been quite severe; even at home you can smell strange odors. Actually, we need to take action immediately.",
                audio: "audio/part3/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='完全'>完全</span>同意！<span class='vocab-highlight' data-word='比方說'>比方說</span>，我們可以減少開車，<span class='vocab-highlight' data-word='或者'>或者</span>多使用大眾運輸工具。<span class='vocab-highlight' data-word='這樣'>這樣</span>就能降低碳排放。",
                pinyin: "Wánquán tóngyì! Bǐfang shuō, wǒmen kěyǐ jiǎnshǎo kāichē, huòzhě duō shǐyòng dàzhòng yùnshū gōngjù. Zhèyàng jiù néng jiàngdī tàn páifàng.",
                english: "Completely agree! For example, we can reduce driving, or use public transportation more. This way we can reduce carbon emissions.",
                audio: "audio/part3/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對！<span class='vocab-highlight' data-word='而且'>而且</span>塑膠污染也是<span class='vocab-highlight' data-word='極'>極</span>大的問題。<span class='vocab-highlight' data-word='等到'>等到</span>海洋<span class='vocab-highlight' data-word='完全'>完全</span>被污染，<span class='vocab-highlight' data-word='一切'>一切</span>就太遲了。",
                pinyin: "Duì! Érqiě sùjiāo wūrǎn yěshì jí dà de wèntí. Děngdào hǎiyáng wánquán bèi wūrǎn, yīqiè jiù tài chí le.",
                english: "Right! And plastic pollution is also an extremely big problem. By the time the oceans are completely polluted, everything will be too late.",
                audio: "audio/part3/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "所以<span class='vocab-highlight' data-word='最好'>最好</span>從今天開始改變習慣。<span class='vocab-highlight' data-word='只要'>只要</span>每個人做一點點，<span class='vocab-highlight' data-word='結果'>結果</span>就會<span class='vocab-highlight' data-word='相當'>相當</span>可觀。<span class='vocab-highlight' data-word='總'>總</span>比什麼都不做好！",
                pinyin: "Suǒyǐ zuìhǎo cóng jīntiān kāishǐ gǎibiàn xíguàn. Zhǐyào měi gèrén zuò yīdiǎndiǎn, jiéguǒ jiù huì xiāngdāng kěguān. Zǒng bǐ shénme dōu bù zuò hǎo!",
                english: "So it's best to start changing habits today. As long as everyone does a little bit, the result will be quite significant. It's always better than doing nothing!",
                audio: "audio/part3/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "文化交流",
        titleTranslation: "Cultural Exchange",
        context: "國際學生討論文化差異",
        lines: [
            {
                speaker: "A",
                chinese: "我在台灣留學<span class='vocab-highlight' data-word='已經'>已經</span>一年了，<span class='vocab-highlight' data-word='其實'>其實</span>文化差異<span class='vocab-highlight' data-word='相當'>相當</span>有趣。<span class='vocab-highlight' data-word='尤其'>尤其</span>是餐桌禮儀。",
                pinyin: "Wǒ zài Táiwān liúxué yǐjīng yī nián le, qíshí wénhuà chāyì xiāngdāng yǒuqù. Yóuqí shì cānzhuō lǐyí.",
                english: "I've been studying in Taiwan for a year already; actually, the cultural differences are quite interesting. Especially table manners.",
                audio: "audio/part3/dialogue8/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='真的'>真的</span>！<span class='vocab-highlight' data-word='比方說'>比方說</span>，在台灣吃飯時<span class='vocab-highlight' data-word='不能'>不能</span>把筷子插在飯上。<span class='vocab-highlight' data-word='當時'>當時</span>我不知道，<span class='vocab-highlight' data-word='結果'>結果</span>被提醒了。",
                pinyin: "Zhēn de! Bǐfang shuō, zài Táiwān chīfàn shí bùnéng bǎ kuàizi chā zài fàn shàng. Dāngshí wǒ bù zhīdào, jiéguǒ bèi tíxǐng le.",
                english: "Really! For example, in Taiwan when eating, you can't stick chopsticks vertically in rice. At that time I didn't know, and as a result, I was reminded.",
                audio: "audio/part3/dialogue8/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='也'>也</span>有<span class='vocab-highlight' data-word='類似'>類似</span>經驗！<span class='vocab-highlight' data-word='當'>當</span>地人<span class='vocab-highlight' data-word='從來'>從來</span>不會<span class='vocab-highlight' data-word='直接'>直接</span>說「不」，<span class='vocab-highlight' data-word='總'>總</span>是用比較委婉的方式。",
                pinyin: "Wǒ yě yǒu lèisì jīngyàn! Dāngdì rén cónglái bù huì zhíjiē shuō 'bù', zǒng shì yòng bǐjiào wěiwǎn de fāngshì.",
                english: "I also have similar experiences! Locals never say 'no' directly, they always use more indirect ways.",
                audio: "audio/part3/dialogue8/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='沒錯'>沒錯</span>！<span class='vocab-highlight' data-word='只要'>只要</span>多觀察多學習，<span class='vocab-highlight' data-word='一切'>一切</span>都會變得很自然。<span class='vocab-highlight' data-word='而且'>而且</span>這種<span class='vocab-highlight' data-word='樣'>樣</span>的文化交流<span class='vocab-highlight' data-word='極'>極</span>有價值。",
                pinyin: "Méi cuò! Zhǐyào duō guānchá duō xuéxí, yīqiè dōu huì biàn dé hěn zìrán. Érqiě zhè zhǒng yàng de wénhuà jiāoliú jí yǒu jiàzhí.",
                english: "Exactly! As long as you observe more and learn more, everything will become very natural. And this kind of cultural exchange is extremely valuable.",
                audio: "audio/part3/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "語言學習",
        titleTranslation: "Language Learning",
        context: "語言學習者分享心得",
        lines: [
            {
                speaker: "A",
                chinese: "學中文<span class='vocab-highlight' data-word='越'>越</span>久，<span class='vocab-highlight' data-word='越'>越</span>覺得有趣！<span class='vocab-highlight' data-word='尤其'>尤其</span>是漢字，每個字<span class='vocab-highlight' data-word='都'>都</span>像一幅畫。",
                pinyin: "Xué Zhōngwén yuè jiǔ, yuè juéde yǒuqù! Yóuqí shì Hànzì, měi gè zì dōu xiàng yī fú huà.",
                english: "The longer I study Chinese, the more interesting it becomes! Especially Chinese characters; each character is like a painting.",
                audio: "audio/part3/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='完全'>完全</span>同意！<span class='vocab-highlight' data-word='不過'>不過</span>發音<span class='vocab-highlight' data-word='相當'>相當</span>挑戰。<span class='vocab-highlight' data-word='當時'>當時</span>我<span class='vocab-highlight' data-word='連'>連</span>「四」和「十」<span class='vocab-highlight' data-word='都'>都</span>分不清楚。",
                pinyin: "Wánquán tóngyì! Bùguò fāyīn xiāngdāng tiǎozhàn. Dāngshí wǒ lián 'sì' hé 'shí' dōu fēn bù qīngchǔ.",
                english: "Completely agree! But pronunciation is quite challenging. At that time, I couldn't even distinguish between 'four' and 'ten'.",
                audio: "audio/part3/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='其實'>其實</span>有個好方法：多聽中文歌<span class='vocab-highlight' data-word='或者'>或者</span>看中文劇。<span class='vocab-highlight' data-word='只要'>只要</span>每天<span class='vocab-highlight' data-word='泡'>泡</span>在中文環境裡，進步就很快！",
                pinyin: "Qíshí yǒu gè hǎo fāngfǎ: Duō tīng Zhōngwén gē huòzhě kàn Zhōngwén jù. Zhǐyào měitiān pào zài Zhōngwén huánjìng lǐ, jìnbù jiù hěn kuài!",
                english: "Actually, there's a good method: listen to Chinese songs more or watch Chinese dramas. As long as you immerse yourself in a Chinese environment every day, you'll improve quickly!",
                audio: "audio/part3/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！我<span class='vocab-highlight' data-word='立刻'>立刻</span>試試看。<span class='vocab-highlight' data-word='而且'>而且</span>聽說這樣學習效率會提高好幾<span class='vocab-highlight' data-word='倍'>倍</span>呢！<span class='vocab-highlight' data-word='總'>總</span>之，不放棄最重要。",
                pinyin: "Hǎo zhǔyì! Wǒ lìkè shìshì kàn. Érqiě tīng shuō zhèyàng xuéxí xiàolǜ huì tígāo hǎo jǐ bèi ne! Zǒngzhī, bù fàngqì zuì zhòngyào.",
                english: "Great idea! I'll try it immediately. And I heard that studying this way increases efficiency several times! In any case, not giving up is most important.",
                audio: "audio/part3/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "美食探索",
        titleTranslation: "Food Exploration",
        context: "朋友討論各地美食",
        lines: [
            {
                speaker: "A",
                chinese: "台灣夜市的美食<span class='vocab-highlight' data-word='極'>極</span>多！<span class='vocab-highlight' data-word='尤其'>尤其</span>是臭豆腐，<span class='vocab-highlight' data-word='雖然'>雖然</span>味道特別，但<span class='vocab-highlight' data-word='其實'>其實</span>很好吃。",
                pinyin: "Táiwān yèshì de měishí jí duō! Yóuqí shì chòu dòufu, suīrán wèidào tèbié, dàn qíshí hěn hǎo chī.",
                english: "Taiwan's night markets have extremely many delicious foods! Especially stinky tofu; although the smell is special, actually it's very delicious.",
                audio: "audio/part3/dialogue10/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='真的'>真的</span>！我<span class='vocab-highlight' data-word='第一次'>第一次</span>嘗試時<span class='vocab-highlight' data-word='完全'>完全</span>不敢吃，<span class='vocab-highlight' data-word='結果'>結果</span>一吃就愛上了！<span class='vocab-highlight' data-word='而且'>而且</span>珍珠奶茶<span class='vocab-highlight' data-word='也'>也</span>是一絕。",
                pinyin: "Zhēn de! Wǒ dì yī cì chángshì shí wánquán bù gǎn chī, jiéguǒ yī chī jiù àishàng le! Érqiě zhēnzhū nǎichá yěshì yī jué.",
                english: "Really! The first time I tried it, I completely didn't dare to eat it, but as a result, I fell in love with it after one bite! And bubble milk tea is also unique.",
                audio: "audio/part3/dialogue10/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='對'>對</span>！<span class='vocab-highlight' data-word='另外'>另外</span>還有蚵仔煎、鹽酥雞等<span class='vocab-highlight' data-word='類'>類</span>的小吃。<span class='vocab-highlight' data-word='只要'>只要</span>去夜市，<span class='vocab-highlight' data-word='大概'>大概</span>就能吃到<span class='vocab-highlight' data-word='一切'>一切</span>想吃的。",
                pinyin: "Duì! Lìngwài hái yǒu é zǎi jiān, yán sū jī děng lèi de xiǎochī. Zhǐyào qù yèshì, dàgài jiù néng chī dào yīqiè xiǎng chī de.",
                english: "Right! Additionally, there are oyster omelets, salted crispy chicken, and other types of snacks. As long as you go to a night market, you can probably eat everything you want.",
                audio: "audio/part3/dialogue10/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='哇'>哇</span>！說得我<span class='vocab-highlight' data-word='立刻'>立刻</span>想去夜市了！<span class='vocab-highlight' data-word='等到'>等到</span>週末，我們<span class='vocab-highlight' data-word='直接'>直接</span>去士林夜市大吃一頓吧！<span class='vocab-highlight' data-word='總'>總</span>之，美食<span class='vocab-highlight' data-word='不能'>不能</span>錯過。",
                pinyin: "Wa! Shuō dé wǒ lìkè xiǎng qù yèshì le! Děngdào zhōumò, wǒmen zhíjiē qù Shìlín yèshì dà chī yī dùn ba! Zǒngzhī, měishí bùnéng cuòguò.",
                english: "Wow! Now I immediately want to go to a night market! When the weekend comes, let's directly go to Shilin Night Market for a big feast! In any case, delicious food cannot be missed.",
                audio: "audio/part3/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "運動競賽",
        titleTranslation: "Sports Competition",
        context: "討論運動比賽的準備和心情",
        lines: [
            {
                speaker: "A",
                chinese: "明天的馬拉松比賽，我<span class='vocab-highlight' data-word='已經'>已經</span>準備了<span class='vocab-highlight' data-word='整'>整</span>整三個月。<span class='vocab-highlight' data-word='尤其'>尤其</span>是最後一週，訓練<span class='vocab-highlight' data-word='相當'>相當</span>辛苦。",
                pinyin: "Míngtiān de mǎlāsōng bǐsài, wǒ yǐjīng zhǔnbèi le zhěng zhěng sān gè yuè. Yóuqí shì zuìhòu yī zhōu, xùnliàn xiāngdāng xīnkǔ.",
                english: "For tomorrow's marathon, I've already prepared for three whole months. Especially the last week, training was quite tough.",
                audio: "audio/part3/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='完全'>完全</span>能理解！<span class='vocab-highlight' data-word='當時'>當時</span>我參加比賽<span class='vocab-highlight' data-word='也'>也</span>是這樣。<span class='vocab-highlight' data-word='不過'>不過</span>，<span class='vocab-highlight' data-word='只要'>只要</span>堅持到底，<span class='vocab-highlight' data-word='一切'>一切</span>都值得。",
                pinyin: "Wǒ wánquán néng lǐjiě! Dāngshí wǒ cānjiā bǐsài yěshì zhèyàng. Bùguò, zhǐyào jiānchí dàodǐ, yīqiè dōu zhídé.",
                english: "I completely understand! Back when I participated in competitions, it was the same. However, as long as you persist to the end, everything is worth it.",
                audio: "audio/part3/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='其實'>其實</span>我最擔心的是天氣。<span class='vocab-highlight' data-word='等到'>等到</span>比賽時<span class='vocab-highlight' data-word='如果'>如果</span>下雨就<span class='vocab-highlight' data-word='煩'>煩</span>了。<span class='vocab-highlight' data-word='不過'>不過</span>我<span class='vocab-highlight' data-word='從來'>從來</span>不怕挑戰。",
                pinyin: "Qíshí wǒ zuì dānxīn de shì tiānqì. Děngdào bǐsài shí rúguǒ xià yǔ jiù fán le. Bùguò wǒ cónglái bù pà tiǎozhàn.",
                english: "Actually, what I worry about most is the weather. If it rains during the competition, it'll be annoying. But I've never been afraid of challenges.",
                audio: "audio/part3/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "加油！<span class='vocab-highlight' data-word='總'>總</span>之，享受過程最重要。<span class='vocab-highlight' data-word='而且'>而且</span>完成比賽的成就感<span class='vocab-highlight' data-word='極'>極</span>大！我<span class='vocab-highlight' data-word='明天'>明天</span><span class='vocab-highlight' data-word='會'>會</span>去幫你加油。",
                pinyin: "Jiāyóu! Zǒngzhī, xiǎngshòu guòchéng zuì zhòngyào. Érqiě wánchéng bǐsài de chéngjiù gǎn jí dà! Wǒ míngtiān huì qù bāng nǐ jiāyóu.",
                english: "Go for it! In any case, enjoying the process is most important. And the sense of accomplishment from completing the race is extremely great! I'll go cheer for you tomorrow.",
                audio: "audio/part3/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "音樂欣賞",
        titleTranslation: "Music Appreciation",
        context: "朋友討論不同類型的音樂",
        lines: [
            {
                speaker: "A",
                chinese: "我最近發現古典音樂<span class='vocab-highlight' data-word='其實'>其實</span><span class='vocab-highlight' data-word='相當'>相當</span>好聽。<span class='vocab-highlight' data-word='尤其'>尤其</span>是貝多芬的作品，<span class='vocab-highlight' data-word='已經'>已經</span>成為我的最愛。",
                pinyin: "Wǒ zuìjìn fāxiàn gǔdiǎn yīnyuè qíshí xiāngdāng hǎotīng. Yóuqí shì Bèiduōfēn de zuòpǐn, yǐjīng chéngwéi wǒ de zuì'ài.",
                english: "I recently discovered that classical music is actually quite beautiful. Especially Beethoven's works have already become my favorite.",
                audio: "audio/part3/dialogue12/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='真的'>真的</span>嗎？<span class='vocab-highlight' data-word='當時'>當時</span>我覺得古典音樂很無聊。<span class='vocab-highlight' data-word='結果'>結果</span>有一次在音樂廳聽完，<span class='vocab-highlight' data-word='完全'>完全</span>改觀了！",
                pinyin: "Zhēn de ma? Dāngshí wǒ juéde gǔdiǎn yīnyuè hěn wúliáo. Jiéguǒ yǒu yīcì zài yīnyuè tīng tīng wán, wánquán gǎiguān le!",
                english: "Really? At that time, I thought classical music was boring. But as a result, after listening in a concert hall once, my view completely changed!",
                audio: "audio/part3/dialogue12/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='對'>對</span>！<span class='vocab-highlight' data-word='只要'>只要</span>給它一個機會，<span class='vocab-highlight' data-word='大概'>大概</span>就會愛上。<span class='vocab-highlight' data-word='而且'>而且</span>聽古典音樂時效率會提高好幾<span class='vocab-highlight' data-word='倍'>倍</span>呢！",
                pinyin: "Duì! Zhǐyào gěi tā yīgè jīhuì, dàgài jiù huì àishàng. Érqiě tīng gǔdiǎn yīnyuè shí xiàolǜ huì tígāo hǎo jǐ bèi ne!",
                english: "Right! As long as you give it a chance, you'll probably fall in love with it. And when listening to classical music, efficiency increases several times!",
                audio: "audio/part3/dialogue12/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='哇'>哇</span>！那我<span class='vocab-highlight' data-word='立刻'>立刻</span>試試看。<span class='vocab-highlight' data-word='或者'>或者</span>我們可以一起去聽音樂會？<span class='vocab-highlight' data-word='總'>總</span>之，音樂能<span class='vocab-highlight' data-word='傳'>傳</span>達<span class='vocab-highlight' data-word='一切'>一切</span>情感。",
                pinyin: "Wa! Nà wǒ lìkè shìshì kàn. Huòzhě wǒmen kěyǐ yīqǐ qù tīng yīnyuè huì? Zǒngzhī, yīnyuè néng chuán dá yīqiè qínggǎn.",
                english: "Wow! Then I'll try it immediately. Or perhaps we can go to a concert together? In any case, music can convey all emotions.",
                audio: "audio/part3/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "閱讀習慣",
        titleTranslation: "Reading Habits",
        context: "討論閱讀的好處和方法",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='已經'>已經</span>養成每天閱讀的習慣，<span class='vocab-highlight' data-word='大概'>大概</span>一小時<span class='vocab-highlight' data-word='左右'>左右</span>。<span class='vocab-highlight' data-word='結果'>結果</span>知識量增加了好幾<span class='vocab-highlight' data-word='倍'>倍</span>。",
                pinyin: "Wǒ yǐjīng yǎngchéng měitiān yuèdú de xíguàn, dàgài yī xiǎoshí zuǒyòu. Jiéguǒ zhīshí liàng zēngjiā le hǎo jǐ bèi.",
                english: "I've already developed the habit of reading every day, about an hour or so. As a result, my knowledge has increased several times.",
                audio: "audio/part3/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='相當'>相當</span>佩服！<span class='vocab-highlight' data-word='其實'>其實</span>我也想培養這個習慣，<span class='vocab-highlight' data-word='但'>但</span><span class='vocab-highlight' data-word='總是'>總是</span>沒時間。<span class='vocab-highlight' data-word='尤其'>尤其</span>是工作後，<span class='vocab-highlight' data-word='連'>連</span>休息的時間都沒有。",
                pinyin: "Xiāngdāng pèifú! Qíshí wǒ yě xiǎng péiyǎng zhège xíguàn, dàn zǒng shì méi shíjiān. Yóuqí shì gōngzuò hòu, lián xiūxi de shíjiān dōu méiyǒu.",
                english: "Quite admirable! Actually, I also want to cultivate this habit, but I always don't have time. Especially after work, I don't even have time to rest.",
                audio: "audio/part3/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='只要'>只要</span>利用零碎時間，<span class='vocab-highlight' data-word='比方說'>比方說</span>通勤時<span class='vocab-highlight' data-word='或者'>或者</span>睡前。<span class='vocab-highlight' data-word='這樣'>這樣</span>就能<span class='vocab-highlight' data-word='慢慢'>慢慢</span>養成習慣。<span class='vocab-highlight' data-word='其實'>其實</span>不難。",
                pinyin: "Zhǐyào lìyòng língsuì shíjiān, bǐfang shuō tōngqín shí huòzhě shuì qián. Zhèyàng jiù néng mànmàn yǎngchéng xíguàn. Qíshí bù nán.",
                english: "As long as you utilize碎片時間，for example during commute or before sleep. This way you can gradually develop the habit. Actually, it's not difficult.",
                audio: "audio/part3/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好建議！我<span class='vocab-highlight' data-word='明天'>明天</span><span class='vocab-highlight' data-word='立刻'>立刻</span>試試看。<span class='vocab-highlight' data-word='而且'>而且</span>聽說閱讀能讓大腦<span class='vocab-highlight' data-word='完全'>完全</span>放鬆。<span class='vocab-highlight' data-word='總'>總</span>之，謝謝你的分享！",
                pinyin: "Hǎo jiànyì! Wǒ míngtiān lìkè shìshì kàn. Érqiě tīng shuō yuèdú néng ràng dànǎo wánquán fàngsōng. Zǒngzhī, xièxiè nǐ de fēnxiǎng!",
                english: "Good suggestion! I'll try it immediately tomorrow. And I heard reading can completely relax the brain. In any case, thank you for sharing!",
                audio: "audio/part3/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "家庭關係",
        titleTranslation: "Family Relationships",
        context: "討論與家人的相處之道",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='已經'>已經</span>很久沒回家了，<span class='vocab-highlight' data-word='尤其'>尤其</span>是工作後，<span class='vocab-highlight' data-word='連'>連</span>週末<span class='vocab-highlight' data-word='都'>都</span>沒時間。<span class='vocab-highlight' data-word='其實'>其實</span>很想念家人。",
                pinyin: "Wǒ yǐjīng hěn jiǔ méi huí jiā le, yóuqí shì gōngzuò hòu, lián zhōumò dōu méi shíjiān. Qíshí hěn xiǎngniàn jiārén.",
                english: "I haven't returned home for a long time, especially after work; I don't even have time on weekends. Actually, I miss my family very much.",
                audio: "audio/part3/dialogue14/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='完全'>完全</span>理解！<span class='vocab-highlight' data-word='當時'>當時</span>我在外地工作<span class='vocab-highlight' data-word='也'>也</span>是這樣。<span class='vocab-highlight' data-word='不過'>不過</span>，<span class='vocab-highlight' data-word='只要'>只要</span>定期打電話，<span class='vocab-highlight' data-word='一切'>一切</span>都會<span class='vocab-highlight' data-word='還好'>還好</span>。",
                pinyin: "Wánquán lǐjiě! Dāngshí wǒ zài wàidì gōngzuò yěshì zhèyàng. Bùguò, zhǐyào dìngqī dǎ diànhuà, yīqiè dōu huì hái hǎo.",
                english: "Completely understand! When I worked in another city, it was the same. However, as long as you call regularly, everything will be okay.",
                audio: "audio/part3/dialogue14/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "對，我<span class='vocab-highlight' data-word='每週'>每週</span><span class='vocab-highlight' data-word='都'>都</span>會打給父母。<span class='vocab-highlight' data-word='而且'>而且</span>現在科技發達，<span class='vocab-highlight' data-word='可以'>可以</span>視訊通話，感覺<span class='vocab-highlight' data-word='相當'>相當</span>親近。",
                pinyin: "Duì, wǒ měi zhōu dōu huì dǎ gěi fùmǔ. Érqiě xiànzài kējì fādá, kěyǐ shìxùn tōnghuà, gǎnjué xiāngdāng qīnjìn.",
                english: "Right, I call my parents every week. And now with advanced technology, we can video call, which feels quite close.",
                audio: "audio/part3/dialogue14/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='沒錯'>沒錯</span>！<span class='vocab-highlight' data-word='等到'>等到</span>假期時<span class='vocab-highlight' data-word='直接'>直接</span>回家看看。<span class='vocab-highlight' data-word='總'>總</span>之，家人<span class='vocab-highlight' data-word='永遠'>永遠</span>是最重要的。<span class='vocab-highlight' data-word='而且'>而且</span>他們<span class='vocab-highlight' data-word='從來'>從來</span>不會忘記你。",
                pinyin: "Méi cuò! Děngdào jiàqī shí zhíjiē huí jiā kàn kàn. Zǒngzhī, jiārén yǒngyuǎn shì zuì zhòngyào de. Érqiě tāmen cónglái bù huì wàngjì nǐ.",
                english: "Exactly! When vacation comes, directly go home to visit. In any case, family is always most important. And they never forget you.",
                audio: "audio/part3/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "未來規劃",
        titleTranslation: "Future Planning",
        context: "討論未來的職業和生活目標",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='已經'>已經</span>決定明年出國留學，<span class='vocab-highlight' data-word='尤其'>尤其</span>想學國際關係。<span class='vocab-highlight' data-word='其實'>其實</span>這個決定<span class='vocab-highlight' data-word='相當'>相當</span>重要。",
                pinyin: "Wǒ yǐjīng juédìng míngnián chūguó liúxué, yóuqí xiǎng xué guójì guānxì. Qíshí zhège juédìng xiāngdāng zhòngyào.",
                english: "I've already decided to study abroad next year, especially wanting to study international relations. Actually, this decision is quite important.",
                audio: "audio/part3/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='哇'>哇</span>！太棒了！<span class='vocab-highlight' data-word='當時'>當時</span>我<span class='vocab-highlight' data-word='也'>也</span>考慮過留學，<span class='vocab-highlight' data-word='結果'>結果</span>選擇了先工作。<span class='vocab-highlight' data-word='不過'>不過</span>現在<span class='vocab-highlight' data-word='完全'>完全</span>不後悔。",
                pinyin: "Wa! Tài bàng le! Dāngshí wǒ yě kǎolǜ guò liúxué, jiéguǒ xuǎnzé le xiān gōngzuò. Bùguò xiànzài wánquán bù hòuhuǐ.",
                english: "Wow! That's fantastic! At that time, I also considered studying abroad, but as a result, I chose to work first. However, now I completely don't regret it.",
                audio: "audio/part3/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='只要'>只要</span>是自己做的決定，<span class='vocab-highlight' data-word='大概'>大概</span>都不會錯。<span class='vocab-highlight' data-word='而且'>而且</span>人生<span class='vocab-highlight' data-word='總'>總</span>是有很多可能性，<span class='vocab-highlight' data-word='或者'>或者</span>我們以後<span class='vocab-highlight' data-word='可以'>可以</span>合作。",
                pinyin: "Zhǐyào shì zìjǐ zuò de juédìng, dàgài dōu bù huì cuò. Érqiě rénshēng zǒng shì yǒu hěnduō kěnéngxìng, huòzhě wǒmen yǐhòu kěyǐ hézuò.",
                english: "As long as it's a decision you made yourself, it probably won't be wrong. And life always has many possibilities; perhaps we can collaborate in the future.",
                audio: "audio/part3/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='當然'>當然</span>！<span class='vocab-highlight' data-word='等到'>等到</span>你學成歸國，<span class='vocab-highlight' data-word='直接'>直接</span>來我們公司吧！<span class='vocab-highlight' data-word='總'>總</span>之，祝你好運！<span class='vocab-highlight' data-word='一切'>一切</span>都會順利的。",
                pinyin: "Dāngrán! Děngdào nǐ xué chéng guī guó, zhíjiē lái wǒmen gōngsī ba! Zǒngzhī, zhù nǐ hǎo yùn! Yīqiè dōu huì shùnlì de.",
                english: "Of course! When you complete your studies and return home, directly come to our company! In any case, good luck! Everything will go smoothly.",
                audio: "audio/part3/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "節慶文化",
        titleTranslation: "Festival Culture",
        context: "討論不同節慶的傳統和意義",
        lines: [
            {
                speaker: "A",
                chinese: "中秋節<span class='vocab-highlight' data-word='已經'>已經</span>快到了，<span class='vocab-highlight' data-word='尤其'>尤其</span>是月餅，<span class='vocab-highlight' data-word='每年'>每年</span><span class='vocab-highlight' data-word='都'>都</span>讓我期待。<span class='vocab-highlight' data-word='其實'>其實</span>我最喜歡蛋黃口味的。",
                pinyin: "Zhōngqiū jié yǐjīng kuài dào le, yóuqí shì yuèbǐng, měinián dōu ràng wǒ qídài. Qíshí wǒ zuì xǐhuān dànhuáng kǒuwèi de.",
                english: "Mid-Autumn Festival is almost here, especially mooncakes, which I look forward to every year. Actually, I like egg yolk flavor the most.",
                audio: "audio/part3/dialogue16/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='真的'>真的</span>！<span class='vocab-highlight' data-word='當時'>當時</span>我第一次吃月餅<span class='vocab-highlight' data-word='完全'>完全</span>不習慣，<span class='vocab-highlight' data-word='結果'>結果</span>現在<span class='vocab-highlight' data-word='每年'>每年</span><span class='vocab-highlight' data-word='都'>都</span>想吃。<span class='vocab-highlight' data-word='而且'>而且</span>烤肉也成為傳統了。",
                pinyin: "Zhēn de! Dāngshí wǒ dì yī cì chī yuèbǐng wánquán bù xíguàn, jiéguǒ xiànzài měinián dōu xiǎng chī. Érqiě kǎoròu yě chéngwéi chuántǒng le.",
                english: "Really! At that time when I first ate mooncakes, I completely wasn't used to it, but as a result, now I want to eat them every year. And barbecue has also become a tradition.",
                audio: "audio/part3/dialogue16/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='對'>對</span>！<span class='vocab-highlight' data-word='而且'>而且</span>中秋節是團圓的日子，<span class='vocab-highlight' data-word='只要'>只要</span>家人聚在一起，<span class='vocab-highlight' data-word='一切'>一切</span>都變得很溫暖。<span class='vocab-highlight' data-word='這種'>這種</span>感覺<span class='vocab-highlight' data-word='極'>極</span>好。",
                pinyin: "Duì! Érqiě zhōngqiū jié shì tuányuán de rìzi, zhǐyào jiārén jù zài yīqǐ, yīqiè dōu biàn dé hěn wēnnuǎn. Zhè zhǒng gǎnjué jí hǎo.",
                english: "Right! And Mid-Autumn Festival is a day for reunion; as long as family gathers together, everything becomes very warm. This feeling is extremely good.",
                audio: "audio/part3/dialogue16/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='完全'>完全</span>同意！<span class='vocab-highlight' data-word='等到'>等到</span>中秋節那天，我們<span class='vocab-highlight' data-word='直接'>直接</span>去河濱公園烤肉吧！<span class='vocab-highlight' data-word='總'>總</span>之，節慶就是為了<span class='vocab-highlight' data-word='傳'>傳</span>遞溫情。",
                pinyin: "Wánquán tóngyì! Děngdào zhōngqiū jié nà tiān, wǒmen zhíjiē qù hébīn gōngyuán kǎoròu ba! Zǒngzhī, jiéqìng jiùshì wèile chuándì wēnqíng.",
                english: "Completely agree! When Mid-Autumn Festival arrives, let's directly go to the riverside park for barbecue! In any case, festivals are meant to传递温情.",
                audio: "audio/part3/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part3/dialogue16/dialogue.mp3"
    }
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 17,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};