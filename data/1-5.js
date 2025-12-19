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
        title: "奇怪的點心",
        subtitle: "The Strange Snack",
        icon: "🤔"
    },
    {
        title: "選擇困難",
        subtitle: "Difficult Choices",
        icon: "🤷"
    },
    {
        title: "午餐時間",
        subtitle: "Lunch Time",
        icon: "🍽️"
    },
    {
        title: "聲音的困惑",
        subtitle: "Confusion of Sounds",
        icon: "👂"
    },
    {
        title: "一半的挑戰",
        subtitle: "Half the Challenge",
        icon: "🥪"
    },
    {
        title: "餐具的哲學",
        subtitle: "Philosophy of Utensils",
        icon: "🍴"
    },
    {
        title: "味道的記憶",
        subtitle: "Memory of Flavors",
        icon: "🍏"
    },
    {
        title: "特別的訂單",
        subtitle: "Special Order",
        icon: "📝"
    },
    {
        title: "被替換的餐點",
        subtitle: "The Replaced Meal",
        icon: "🔄"
    },
    {
        title: "簡單的快樂",
        subtitle: "Simple Happiness",
        icon: "😊"
    },
    {
        title: "所有選擇",
        subtitle: "All Choices",
        icon: "📋"
    },
    {
        title: "本來如此",
        subtitle: "Originally So",
        icon: "⏮️"
    },
    {
        title: "以為的誤會",
        subtitle: "Misunderstanding of Assumption",
        icon: "❓"
    },
    {
        title: "雖然但是",
        subtitle: "Although However",
        icon: "⚖️"
    },
    {
        title: "需要與想要",
        subtitle: "Need vs Want",
        icon: "💭"
    },
    {
        title: "那麼這麼",
        subtitle: "That Way This Way",
        icon: "👉"
    },
    {
        title: "一下子",
        subtitle: "In a Moment",
        icon: "⚡"
    },
    {
        title: "或與且",
        subtitle: "Or and And",
        icon: "🔀"
    },
    {
        title: "把讓被",
        subtitle: "BA, RANG, BEI Constructions",
        icon: "🔧"
    },
    {
        title: "最後的回顧",
        subtitle: "Final Review",
        icon: "📚"
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

// Vocabulary Database - Add vocabulary items here
const vocabularyDB = [
    { chinese: "樣子", pinyin: "yàngzi", english: "appearance, look", audio: "audio/part4/words/yangzi.mp3" },
    { chinese: "特別", pinyin: "tèbié", english: "special, especially", audio: "audio/part4/words/tebie.mp3" },
    { chinese: "簡單", pinyin: "jiǎndān", english: "simple", audio: "audio/part4/words/jiandan.mp3" },
    { chinese: "其他", pinyin: "qítā", english: "other, else", audio: "audio/part4/words/qita.mp3" },
    { chinese: "聲音", pinyin: "shēngyīn", english: "sound, voice", audio: "audio/part4/words/shengyin.mp3" },
    { chinese: "好像", pinyin: "hǎoxiàng", english: "seem, be like", audio: "audio/part4/words/haoxiang.mp3" },
    { chinese: "奇怪", pinyin: "qíguài", english: "strange, odd", audio: "audio/part4/words/qiguai.mp3" },
    { chinese: "三明治", pinyin: "sānmíngzhì", english: "sandwich", audio: "audio/part4/words/sanmingzhi.mp3" },
    { chinese: "漢堡", pinyin: "hànbǎo", english: "hamburger", audio: "audio/part4/words/hanbao.mp3" },
    { chinese: "蘋果", pinyin: "píngguǒ", english: "apple", audio: "audio/part4/words/pingguo.mp3" },
    { chinese: "西瓜", pinyin: "xīguā", english: "watermelon", audio: "audio/part4/words/xigua.mp3" },
    { chinese: "啤酒", pinyin: "píjiǔ", english: "beer", audio: "audio/part4/words/pijiu.mp3" },
    { chinese: "紅茶", pinyin: "hóngchá", english: "black tea", audio: "audio/part4/words/hongcha.mp3" },
    { chinese: "點心", pinyin: "diǎnxin", english: "snack, dim sum", audio: "audio/part4/words/dianxin.mp3" },
    { chinese: "冰淇淋", pinyin: "bīngqílín", english: "ice cream", audio: "audio/part4/words/bingqilin.mp3" },
    { chinese: "青菜", pinyin: "qīngcài", english: "green vegetables", audio: "audio/part4/words/qingcai.mp3" },
    { chinese: "糖", pinyin: "táng", english: "sugar", audio: "audio/part4/words/tang.mp3" },
    { chinese: "叉子", pinyin: "chāzi", english: "fork", audio: "audio/part4/words/chazi.mp3" },
    { chinese: "刀子", pinyin: "dāozi", english: "knife", audio: "audio/part4/words/daozi.mp3" },
    { chinese: "湯匙", pinyin: "tāngchí", english: "spoon", audio: "audio/part4/words/tangchi.mp3" },
    { chinese: "盤子", pinyin: "pánzi", english: "plate", audio: "audio/part4/words/panzi.mp3" },
    { chinese: "片", pinyin: "piàn", english: "slice, piece", audio: "audio/part4/words/pian.mp3" },
    { chinese: "瓶子", pinyin: "píngzi", english: "bottle", audio: "audio/part4/words/pingzi.mp3" },
    { chinese: "支", pinyin: "zhī", english: "measure word for long objects", audio: "audio/part4/words/zhi.mp3" },
    { chinese: "份", pinyin: "fèn", english: "portion, serving", audio: "audio/part4/words/fen.mp3" },
    { chinese: "道", pinyin: "dào", english: "measure word for dishes", audio: "audio/part4/words/dao.mp3" },
    { chinese: "一半", pinyin: "yībàn", english: "half", audio: "audio/part4/words/yiban.mp3" },
    { chinese: "味道", pinyin: "wèidao", english: "taste, flavor", audio: "audio/part4/words/weidao.mp3" },
    { chinese: "酸", pinyin: "suān", english: "sour", audio: "audio/part4/words/suan.mp3" },
    { chinese: "苦", pinyin: "kǔ", english: "bitter", audio: "audio/part4/words/ku.mp3" },
    { chinese: "鹹", pinyin: "xián", english: "salty", audio: "audio/part4/words/xian.mp3" },
    { chinese: "辣", pinyin: "là", english: "spicy", audio: "audio/part4/words/la.mp3" },
    { chinese: "香", pinyin: "xiāng", english: "fragrant, delicious", audio: "audio/part4/words/xiang.mp3" },
    { chinese: "條", pinyin: "tiáo", english: "measure word for long things", audio: "audio/part4/words/tiao.mp3" },
    { chinese: "種", pinyin: "zhǒng", english: "kind, type", audio: "audio/part4/words/zhong.mp3" },
    { chinese: "包", pinyin: "bāo", english: "pack, package", audio: "audio/part4/words/bao.mp3" },
    { chinese: "全部", pinyin: "quánbù", english: "all, entire", audio: "audio/part4/words/quanbu.mp3" },
    { chinese: "所有", pinyin: "suǒyǒu", english: "all, every", audio: "audio/part4/words/suoyou.mp3" },
    { chinese: "需要", pinyin: "xūyào", english: "to need, require", audio: "audio/part4/words/xuyao.mp3" },
    { chinese: "烤", pinyin: "kǎo", english: "to roast, bake", audio: "audio/part4/words/kao.mp3" },
    { chinese: "過", pinyin: "guò", english: "past experience particle", audio: "audio/part4/words/guo.mp3" },
    { chinese: "但是", pinyin: "dànshì", english: "but, however", audio: "audio/part4/words/danshi.mp3" },
    { chinese: "或是", pinyin: "huòshì", english: "or, either", audio: "audio/part4/words/huoshi.mp3" },
    { chinese: "要是", pinyin: "yàoshì", english: "if, supposing", audio: "audio/part4/words/yaoshi.mp3" },
    { chinese: "把", pinyin: "bǎ", english: "ba-construction marker", audio: "audio/part4/words/ba.mp3" },
    { chinese: "被", pinyin: "bèi", english: "bei-construction marker", audio: "audio/part4/words/bei.mp3" },
    { chinese: "讓", pinyin: "ràng", english: "to let, allow", audio: "audio/part4/words/rang.mp3" },
    { chinese: "雖然", pinyin: "suīrán", english: "although, even though", audio: "audio/part4/words/suiran.mp3" },
    { chinese: "那麼", pinyin: "nàme", english: "so, that way", audio: "audio/part4/words/name.mp3" },
    { chinese: "這麼", pinyin: "zhème", english: "so, this way", audio: "audio/part4/words/zheme.mp3" },
    { chinese: "本來", pinyin: "běnlái", english: "originally, originally", audio: "audio/part4/words/benlai.mp3" },
    { chinese: "啦", pinyin: "la", english: "sentence-final particle", audio: "audio/part4/words/la.mp3" },
    { chinese: "呀", pinyin: "ya", english: "sentence-final particle", audio: "audio/part4/words/ya.mp3" },
    { chinese: "以為", pinyin: "yǐwéi", english: "to think (mistakenly)", audio: "audio/part4/words/yiwei.mp3" },
    { chinese: "有的", pinyin: "yǒude", english: "some", audio: "audio/part4/words/youde.mp3" },
    { chinese: "替", pinyin: "tì", english: "for, on behalf of", audio: "audio/part4/words/ti.mp3" },
    { chinese: "一下子", pinyin: "yīxiàzi", english: "in a moment, quickly", audio: "audio/part4/words/yixiazi.mp3" },
    { chinese: "不過", pinyin: "búguò", english: "but, however", audio: "audio/part4/words/buguo.mp3" },
    { chinese: "地", pinyin: "de", english: "adverbial marker", audio: "audio/part4/words/de.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "奇怪的點心",
        titleTranslation: "The Strange Snack",
        context: "Two friends discuss a strange-looking snack at a café",
        lines: [
            {
                speaker: "A",
                chinese: "你看那個<span class='vocab-highlight' data-word='點心'>點心</span>的<span class='vocab-highlight' data-word='樣子'>樣子</span>好<span class='vocab-highlight' data-word='奇怪'>奇怪</span>！它<span class='vocab-highlight' data-word='好像'>好像</span>是一個<span class='vocab-highlight' data-word='三明治'>三明治</span>，但是<span class='vocab-highlight' data-word='味道'>味道</span>聞起來<span class='vocab-highlight' data-word='特別'>特別</span><span class='vocab-highlight' data-word='甜'>甜</span>。",
                pinyin: "Nǐ kàn nàgè diǎnxin de yàngzi hǎo qíguài! Tā hǎoxiàng shì yīgè sānmíngzhì, dànshì wèidao wén qǐlái tèbié tián.",
                english: "Look at that snack's appearance, so strange! It seems to be a sandwich, but the flavor smells especially sweet.",
                audio: "audio/part4/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是呀，我聽到旁邊的<span class='vocab-highlight' data-word='聲音'>聲音</span>說這個是<span class='vocab-highlight' data-word='簡單'>簡單</span>的<span class='vocab-highlight' data-word='蘋果'>蘋果</span><span class='vocab-highlight' data-word='三明治'>三明治</span>。<span class='vocab-highlight' data-word='其他'>其他</span>的<span class='vocab-highlight' data-word='點心'>點心</span>還有很多<span class='vocab-highlight' data-word='種'>種</span>。",
                pinyin: "Shì ya, wǒ tīng dào pángbiān de shēngyīn shuō zhège shì jiǎndān de píngguǒ sānmíngzhì. Qítā de diǎnxin hái yǒu hěnduō zhǒng.",
                english: "Yeah, I heard the sound next to us say this is a simple apple sandwich. There are many other kinds of snacks.",
                audio: "audio/part4/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我想要一<span class='vocab-highlight' data-word='份'>份</span>這個，再要一<span class='vocab-highlight' data-word='瓶'>瓶</span><span class='vocab-highlight' data-word='啤酒'>啤酒</span>。<span class='vocab-highlight' data-word='但是'>但是</span>不要<span class='vocab-highlight' data-word='全部'>全部</span>的<span class='vocab-highlight' data-word='糖'>糖</span>。",
                pinyin: "Wǒ xiǎng yào yī fèn zhège, zài yào yī píng píjiǔ. Dànshì bùyào quánbù de táng.",
                english: "I want one portion of this, and one bottle of beer. But not all the sugar.",
                audio: "audio/part4/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，<span class='vocab-highlight' data-word='那麼'>那麼</span>我也要一<span class='vocab-highlight' data-word='份'>份</span>，<span class='vocab-highlight' data-word='不過'>不過</span>我<span class='vocab-highlight' data-word='需要'>需要</span>一<span class='vocab-highlight' data-word='杯'>杯</span><span class='vocab-highlight' data-word='紅茶'>紅茶</span><span class='vocab-highlight' data-word='替'>替</span><span class='vocab-highlight' data-word='啤酒'>啤酒</span>。",
                pinyin: "Hǎo de, nàme wǒ yě yào yī fèn, búguò wǒ xūyào yī bēi hóngchá tì píjiǔ.",
                english: "Okay, then I also want one portion, but I need a cup of black tea instead of beer.",
                audio: "audio/part4/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "選擇困難",
        titleTranslation: "Difficult Choices",
        context: "Deciding between different food options at a restaurant",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='菜單'>菜單</span>上的<span class='vocab-highlight' data-word='所有'>所有</span>東西看起來都很好吃！<span class='vocab-highlight' data-word='要是'>要是</span>可以吃<span class='vocab-highlight' data-word='全部'>全部</span>就好了。",
                pinyin: "Zhège càidān shàng de suǒyǒu dōngxi kàn qǐlái dōu hěn hǎochī! Yàoshì kěyǐ chī quánbù jiù hǎo le.",
                english: "All the things on this menu look very delicious! If only I could eat everything.",
                audio: "audio/part4/dialogue2/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我們每<span class='vocab-highlight' data-word='種'>種</span>都點一<span class='vocab-highlight' data-word='份'>份</span>，<span class='vocab-highlight' data-word='或是'>或是</span>只選幾<span class='vocab-highlight' data-word='種'>種</span>？<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='這麼'>這麼</span>多<span class='vocab-highlight' data-word='漢堡'>漢堡</span>和<span class='vocab-highlight' data-word='三明治'>三明治</span>...",
                pinyin: "Wǒmen měi zhǒng dōu diǎn yī fèn, huòshì zhǐ xuǎn jǐ zhǒng? Dànshì zhème duō hànbǎo hé sānmíngzhì...",
                english: "Should we order one portion of each kind, or just choose a few kinds? But there are so many hamburgers and sandwiches...",
                audio: "audio/part4/dialogue2/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='簡單'>簡單</span>一點，我們要兩<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='漢堡'>漢堡</span>，一<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='烤'>烤</span>的，一<span class='vocab-highlight' data-word='份'>份</span>不<span class='vocab-highlight' data-word='烤'>烤</span>的。再加一<span class='vocab-highlight' data-word='盤'>盤</span><span class='vocab-highlight' data-word='青菜'>青菜</span>。",
                pinyin: "Jiǎndān yīdiǎn, wǒmen yào liǎng fèn hànbǎo, yī fèn kǎo de, yī fèn bù kǎo de. Zài jiā yī pán qīngcài.",
                english: "Let's keep it simple, we'll have two portions of hamburger, one portion roasted, one portion not roasted. Plus one plate of vegetables.",
                audio: "audio/part4/dialogue2/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！<span class='vocab-highlight' data-word='那麼'>那麼</span>飲料呢？<span class='vocab-highlight' data-word='蘋果'>蘋果</span>汁<span class='vocab-highlight' data-word='或是'>或是</span><span class='vocab-highlight' data-word='西瓜'>西瓜</span>汁？我<span class='vocab-highlight' data-word='本來'>本來</span>想喝<span class='vocab-highlight' data-word='啤酒'>啤酒</span>的。",
                pinyin: "Hǎo zhǔyì! Nàme yǐnliào ne? Píngguǒ zhī huòshì xīguā zhī? Wǒ běnlái xiǎng hē píjiǔ de.",
                english: "Good idea! Then what about drinks? Apple juice or watermelon juice? I originally wanted to drink beer.",
                audio: "audio/part4/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "午餐時間",
        titleTranslation: "Lunch Time",
        context: "Discussing lunch plans and preferences",
        lines: [
            {
                speaker: "A",
                chinese: "今天中午你想吃什麼？<span class='vocab-highlight' data-word='漢堡'>漢堡</span><span class='vocab-highlight' data-word='或是'>或是</span><span class='vocab-highlight' data-word='三明治'>三明治</span>？我吃<span class='vocab-highlight' data-word='過'>過</span>那家店的<span class='vocab-highlight' data-word='三明治'>三明治</span>，<span class='vocab-highlight' data-word='味道'>味道</span>很<span class='vocab-highlight' data-word='特別'>特別</span>。",
                pinyin: "Jīntiān zhōngwǔ nǐ xiǎng chī shénme? Hànbǎo huòshì sānmíngzhì? Wǒ chī guò nà jiā diàn de sānmíngzhì, wèidao hěn tèbié.",
                english: "What do you want to eat for lunch today? Hamburger or sandwich? I've eaten that shop's sandwich before, the flavor is very special.",
                audio: "audio/part4/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我想吃<span class='vocab-highlight' data-word='簡單'>簡單</span>一點的，<span class='vocab-highlight' data-word='一份'>一份</span><span class='vocab-highlight' data-word='青菜'>青菜</span>沙拉加一<span class='vocab-highlight' data-word='片'>片</span><span class='vocab-highlight' data-word='烤'>烤</span>麵包。<span class='vocab-highlight' data-word='但是'>但是</span>我也想要一<span class='vocab-highlight' data-word='瓶'>瓶</span>冰的<span class='vocab-highlight' data-word='啤酒'>啤酒</span>。",
                pinyin: "Wǒ xiǎng chī jiǎndān yīdiǎn de, yī fèn qīngcài shālā jiā yī piàn kǎo miànbāo. Dànshì wǒ yě xiǎng yào yī píng bīng de píjiǔ.",
                english: "I want to eat something simpler, one portion of vegetable salad plus one slice of roasted bread. But I also want one bottle of cold beer.",
                audio: "audio/part4/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，<span class='vocab-highlight' data-word='那麼'>那麼</span>我<span class='vocab-highlight' data-word='替'>替</span>你點餐。一<span class='vocab-highlight' data-word='份'>份</span>沙拉，一<span class='vocab-highlight' data-word='片'>片</span>麵包，一<span class='vocab-highlight' data-word='瓶'>瓶</span><span class='vocab-highlight' data-word='啤酒'>啤酒</span>。我<span class='vocab-highlight' data-word='需要'>需要</span>一<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='漢堡'>漢堡</span>和一<span class='vocab-highlight' data-word='杯'>杯</span><span class='vocab-highlight' data-word='紅茶'>紅茶</span>。",
                pinyin: "Hǎo de, nàme wǒ tì nǐ diǎn cān. Yī fèn shālā, yī piàn miànbāo, yī píng píjiǔ. Wǒ xūyào yī fèn hànbǎo hé yī bēi hóngchá.",
                english: "Okay, then I'll order for you. One portion salad, one slice bread, one bottle beer. I need one portion hamburger and one cup black tea.",
                audio: "audio/part4/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝！<span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的午餐，<span class='vocab-highlight' data-word='但是'>但是</span>很開心<span class='vocab-highlight' data-word='呀'>呀</span>！",
                pinyin: "Xièxiè! Zhème jiǎndān de wǔcān, dànshì hěn kāixīn ya!",
                english: "Thank you! Such a simple lunch, but very happy!",
                audio: "audio/part4/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "聲音的困惑",
        titleTranslation: "Confusion of Sounds",
        context: "Trying to identify strange sounds in a restaurant",
        lines: [
            {
                speaker: "A",
                chinese: "你聽到那個<span class='vocab-highlight' data-word='奇怪'>奇怪</span>的<span class='vocab-highlight' data-word='聲音'>聲音</span>了嗎？<span class='vocab-highlight' data-word='好像'>好像</span>是從廚房來的。",
                pinyin: "Nǐ tīng dào nàgè qíguài de shēngyīn le ma? Hǎoxiàng shì cóng chúfáng lái de.",
                english: "Did you hear that strange sound? It seems to be coming from the kitchen.",
                audio: "audio/part4/dialogue4/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "聽到了！<span class='vocab-highlight' data-word='聲音'>聲音</span>的<span class='vocab-highlight' data-word='樣子'>樣子</span><span class='vocab-highlight' data-word='好像'>好像</span>是<span class='vocab-highlight' data-word='刀'>刀</span>切東西，<span class='vocab-highlight' data-word='但是'>但是</span>又<span class='vocab-highlight' data-word='好像'>好像</span>是<span class='vocab-highlight' data-word='盤'>盤</span>子摔了。",
                pinyin: "Tīng dào le! Shēngyīn de yàngzi hǎoxiàng shì dāo qiē dōngxi, dànshì yòu hǎoxiàng shì pánzi shuāi le.",
                english: "I heard it! The sound's appearance seems like a knife cutting something, but also seems like a plate falling.",
                audio: "audio/part4/dialogue4/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我去看看。<span class='vocab-highlight' data-word='要是'>要是</span>是<span class='vocab-highlight' data-word='刀'>刀</span>的問題，我們<span class='vocab-highlight' data-word='需要'>需要</span><span class='vocab-highlight' data-word='替'>替</span>換<span class='vocab-highlight' data-word='其他'>其他</span>的餐具。",
                pinyin: "Wǒ qù kàn kàn. Yàoshì shì dāo de wèntí, wǒmen xūyào tìhuàn qítā de cānjù.",
                english: "I'll go check. If it's a knife problem, we need to replace it with other utensils.",
                audio: "audio/part4/dialogue4/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "小心一點！<span class='vocab-highlight' data-word='不過'>不過</span>，<span class='vocab-highlight' data-word='聲音'>聲音</span>現在停了。<span class='vocab-highlight' data-word='那麼'>那麼</span>我們繼續吃飯<span class='vocab-highlight' data-word='啦'>啦</span>。",
                pinyin: "Xiǎoxīn yīdiǎn! Búguò, shēngyīn xiànzài tíng le. Nàme wǒmen jìxù chīfàn la.",
                english: "Be careful! However, the sound has stopped now. Then let's continue eating.",
                audio: "audio/part4/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "一半的挑戰",
        titleTranslation: "Half the Challenge",
        context: "Sharing food and dealing with different preferences",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='三明治'>三明治</span>太大了，我想吃<span class='vocab-highlight' data-word='一半'>一半</span>就好。<span class='vocab-highlight' data-word='你'>你</span>要<span class='vocab-highlight' data-word='另外'>另外</span><span class='vocab-highlight' data-word='一半'>一半</span>嗎？",
                pinyin: "Zhège sānmíngzhì tài dà le, wǒ xiǎng chī yībàn jiù hǎo. Nǐ yào lìngwài yībàn ma?",
                english: "This sandwich is too big, I just want to eat half. Do you want the other half?",
                audio: "audio/part4/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>我<span class='vocab-highlight' data-word='需要'>需要</span>吃多一點，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='這麼'>這麼</span>大<span class='vocab-highlight' data-word='一半'>一半</span>... 好吧，我用我的<span class='vocab-highlight' data-word='青菜'>青菜</span>沙拉跟你換一<span class='vocab-highlight' data-word='片'>片</span>。",
                pinyin: "Suīrán wǒ xūyào chī duō yīdiǎn, dànshì zhème dà yībàn... hǎo ba, wǒ yòng wǒ de qīngcài shālā gēn nǐ huàn yī piàn.",
                english: "Although I need to eat more, but such a big half... okay, I'll exchange my vegetable salad for one slice.",
                audio: "audio/part4/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，<span class='vocab-highlight' data-word='那麼'>那麼</span>我們<span class='vocab-highlight' data-word='把'>把</span><span class='vocab-highlight' data-word='三明治'>三明治</span>切<span class='vocab-highlight' data-word='成'>成</span>兩<span class='vocab-highlight' data-word='半'>半</span>。你用<span class='vocab-highlight' data-word='刀'>刀</span>子還是<span class='vocab-highlight' data-word='叉'>叉</span>子？",
                pinyin: "Hǎo de, nàme wǒmen bǎ sānmíngzhì qiē chéng liǎng bàn. Nǐ yòng dāozi háishì chāzi?",
                english: "Okay, then let's cut the sandwich into two halves. Do you use a knife or fork?",
                audio: "audio/part4/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我用<span class='vocab-highlight' data-word='刀'>刀</span>子，你<span class='vocab-highlight' data-word='替'>替</span>我拿<span class='vocab-highlight' data-word='盤'>盤</span>子。<span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的事，<span class='vocab-highlight' data-word='但是'>但是</span>很快樂<span class='vocab-highlight' data-word='呀'>呀</span>！",
                pinyin: "Wǒ yòng dāozi, nǐ tì wǒ ná pánzi. Zhème jiǎndān de shì, dànshì hěn kuàilè ya!",
                english: "I'll use the knife, you get the plate for me. Such a simple thing, but very happy!",
                audio: "audio/part4/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "餐具的哲學",
        titleTranslation: "Philosophy of Utensils",
        context: "Discussing the proper use of different utensils",
        lines: [
            {
                speaker: "A",
                chinese: "你<span class='vocab-highlight' data-word='以為'>以為</span>用<span class='vocab-highlight' data-word='叉'>叉</span>子吃<span class='vocab-highlight' data-word='漢堡'>漢堡</span>很<span class='vocab-highlight' data-word='奇怪'>奇怪</span>嗎？我<span class='vocab-highlight' data-word='覺得'>覺得</span><span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>用手就好。",
                pinyin: "Nǐ yǐwéi yòng chāzi chī hànbǎo hěn qíguài ma? Wǒ juédé jiǎndān de yòng shǒu jiù hǎo.",
                english: "Do you think using a fork to eat hamburger is strange? I think simply using hands is fine.",
                audio: "audio/part4/dialogue6/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='本來'>本來</span>我也是<span class='vocab-highlight' data-word='這麼'>這麼</span>想的，<span class='vocab-highlight' data-word='但是'>但是</span>這個<span class='vocab-highlight' data-word='漢堡'>漢堡</span>的<span class='vocab-highlight' data-word='樣子'>樣子</span>太<span class='vocab-highlight' data-word='特別'>特別</span>了，<span class='vocab-highlight' data-word='需要'>需要</span>用<span class='vocab-highlight' data-word='刀'>刀</span>和<span class='vocab-highlight' data-word='叉'>叉</span>。",
                pinyin: "Běnlái wǒ yě shì zhème xiǎng de, dànshì zhège hànbǎo de yàngzi tài tèbié le, xūyào yòng dāo hé chā.",
                english: "Originally I also thought this way, but this hamburger's appearance is too special, needs knife and fork.",
                audio: "audio/part4/dialogue6/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好<span class='vocab-highlight' data-word='吧'>吧</span>，<span class='vocab-highlight' data-word='那麼'>那麼</span><span class='vocab-highlight' data-word='把'>把</span><span class='vocab-highlight' data-word='湯匙'>湯匙</span>也給我，我<span class='vocab-highlight' data-word='需要'>需要</span>喝湯。<span class='vocab-highlight' data-word='所有'>所有</span>的餐具都<span class='vocab-highlight' data-word='需要'>需要</span>了！",
                pinyin: "Hǎo ba, nàme bǎ tāngchí yě gěi wǒ, wǒ xūyào hē tāng. Suǒyǒu de cānjù dōu xūyào le!",
                english: "Okay, then give me the spoon too, I need to drink soup. All the utensils are needed!",
                audio: "audio/part4/dialogue6/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span><span class='vocab-highlight' data-word='這麼'>這麼</span>多餐具，<span class='vocab-highlight' data-word='但是'>但是</span>吃得開心最重要<span class='vocab-highlight' data-word='啦'>啦</span>！",
                pinyin: "Suīrán zhème duō cānjù, dànshì chī dé kāixīn zuì zhòngyào la!",
                english: "Although there are so many utensils, but eating happily is most important!",
                audio: "audio/part4/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "味道的記憶",
        titleTranslation: "Memory of Flavors",
        context: "Remembering different tastes from childhood",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='蘋果'>蘋果</span>的<span class='vocab-highlight' data-word='味道'>味道</span>讓我想起小時候。那時候的<span class='vocab-highlight' data-word='蘋果'>蘋果</span><span class='vocab-highlight' data-word='特別'>特別</span><span class='vocab-highlight' data-word='甜'>甜</span>，<span class='vocab-highlight' data-word='好像'>好像</span>加了<span class='vocab-highlight' data-word='很多'>很多</span><span class='vocab-highlight' data-word='糖'>糖</span>。",
                pinyin: "Zhège píngguǒ de wèidao ràng wǒ xiǎng qǐ xiǎo shíhòu. Nà shíhòu de píngguǒ tèbié tián, hǎoxiàng jiā le hěnduō táng.",
                english: "This apple's flavor reminds me of childhood. The apples back then were especially sweet, as if lots of sugar was added.",
                audio: "audio/part4/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我記得<span class='vocab-highlight' data-word='外婆'>外婆</span>做的<span class='vocab-highlight' data-word='點心'>點心</span>，<span class='vocab-highlight' data-word='有的'>有的</span><span class='vocab-highlight' data-word='酸'>酸</span>，<span class='vocab-highlight' data-word='有的'>有的</span><span class='vocab-highlight' data-word='苦'>苦</span>，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='全部'>全部</span>都很<span class='vocab-highlight' data-word='香'>香</span>。",
                pinyin: "Wǒ jìdé wàipó zuò de diǎnxin, yǒude suān, yǒude kǔ, dànshì quánbù dōu hěn xiāng.",
                english: "I remember grandma's snacks, some were sour, some were bitter, but all were very fragrant.",
                audio: "audio/part4/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='現在'>現在</span>的食物<span class='vocab-highlight' data-word='好像'>好像</span>都<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>加<span class='vocab-highlight' data-word='很多'>很多</span><span class='vocab-highlight' data-word='糖'>糖</span><span class='vocab-highlight' data-word='或是'>或是</span><span class='vocab-highlight' data-word='鹽'>鹽</span>。<span class='vocab-highlight' data-word='本來'>本來</span>的<span class='vocab-highlight' data-word='味道'>味道</span>不見了。",
                pinyin: "Xiànzài de shíwù hǎoxiàng dōu jiǎndān de jiā hěnduō táng huòshì yán. Běnlái de wèidao bùjiàn le.",
                english: "Nowadays food seems to simply add lots of sugar or salt. The original flavor is gone.",
                audio: "audio/part4/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "對呀，<span class='vocab-highlight' data-word='那麼'>那麼</span>我們<span class='vocab-highlight' data-word='需要'>需要</span><span class='vocab-highlight' data-word='特別'>特別</span><span class='vocab-highlight' data-word='地'>地</span>找<span class='vocab-highlight' data-word='簡單'>簡單</span>的、<span class='vocab-highlight' data-word='本來'>本來</span><span class='vocab-highlight' data-word='味道'>味道</span>的食物。<span class='vocab-highlight' data-word='雖然'>雖然</span>難找，<span class='vocab-highlight' data-word='但是'>但是</span>值得。",
                pinyin: "Duì ya, nàme wǒmen xūyào tèbié de zhǎo jiǎndān de, běnlái wèidao de shíwù. Suīrán nán zhǎo, dànshì zhídé.",
                english: "Yeah, then we need to specially look for simple, original flavored food. Although hard to find, but worth it.",
                audio: "audio/part4/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "特別的訂單",
        titleTranslation: "Special Order",
        context: "Placing a complicated food order with specific requirements",
        lines: [
            {
                speaker: "A",
                chinese: "我要一<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='特別'>特別</span>的<span class='vocab-highlight' data-word='三明治'>三明治</span>：<span class='vocab-highlight' data-word='一半'>一半</span><span class='vocab-highlight' data-word='烤'>烤</span>，<span class='vocab-highlight' data-word='一半'>一半</span>不<span class='vocab-highlight' data-word='烤'>烤</span>；<span class='vocab-highlight' data-word='全部'>全部</span>的<span class='vocab-highlight' data-word='青菜'>青菜</span>，<span class='vocab-highlight' data-word='但是'>但是</span>不要<span class='vocab-highlight' data-word='糖'>糖</span>。",
                pinyin: "Wǒ yào yī fèn tèbié de sānmíngzhì: yībàn kǎo, yībàn bù kǎo; quánbù de qīngcài, dànshì bùyào táng.",
                english: "I want a special sandwich: half roasted, half not roasted; all the vegetables, but no sugar.",
                audio: "audio/part4/dialogue8/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "這個<span class='vocab-highlight' data-word='訂單'>訂單</span>的<span class='vocab-highlight' data-word='樣子'>樣子</span>好<span class='vocab-highlight' data-word='複雜'>複雜</span>！<span class='vocab-highlight' data-word='要是'>要是</span>廚房做不出來怎麼辦？<span class='vocab-highlight' data-word='不過'>不過</span>，我<span class='vocab-highlight' data-word='替'>替</span>你問問。",
                pinyin: "Zhège dìngdān de yàngzi hǎo fùzá! Yàoshì chúfáng zuò bù chūlái zěnmebàn? Búguò, wǒ tì nǐ wèn wèn.",
                english: "This order's appearance looks so complicated! If the kitchen can't make it, what to do? However, I'll ask for you.",
                audio: "audio/part4/dialogue8/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "謝謝！<span class='vocab-highlight' data-word='那麼'>那麼</span>飲料我要一<span class='vocab-highlight' data-word='瓶'>瓶</span><span class='vocab-highlight' data-word='啤酒'>啤酒</span>，<span class='vocab-highlight' data-word='但是'>但是</span>不要冰的。<span class='vocab-highlight' data-word='所有'>所有</span>東西都要<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>準備。",
                pinyin: "Xièxiè! Nàme yǐnliào wǒ yào yī píng píjiǔ, dànshì bùyào bīng de. Suǒyǒu dōngxi dōu yào jiǎndān de zhǔnbèi.",
                english: "Thank you! Then for drink I want one bottle of beer, but not cold. Everything needs to be prepared simply.",
                audio: "audio/part4/dialogue8/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，<span class='vocab-highlight' data-word='雖然'>雖然</span>要求很多，<span class='vocab-highlight' data-word='不過'>不過</span>我會<span class='vocab-highlight' data-word='全部'>全部</span>記下來。<span class='vocab-highlight' data-word='一下子'>一下子</span>就好<span class='vocab-highlight' data-word='啦'>啦</span>！",
                pinyin: "Hǎo de, suīrán yāoqiú hěnduō, búguò wǒ huì quánbù jì xiàlái. Yīxiàzi jiù hǎo la!",
                english: "Okay, although there are many requests, but I'll remember everything. It'll be ready in a moment!",
                audio: "audio/part4/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "被替換的餐點",
        titleTranslation: "The Replaced Meal",
        context: "Dealing with a wrong food order at a restaurant",
        lines: [
            {
                speaker: "A",
                chinese: "我的<span class='vocab-highlight' data-word='漢堡'>漢堡</span><span class='vocab-highlight' data-word='被'>被</span>換<span class='vocab-highlight' data-word='成'>成</span><span class='vocab-highlight' data-word='三明治'>三明治</span>了！我<span class='vocab-highlight' data-word='本來'>本來</span>要的是<span class='vocab-highlight' data-word='烤'>烤</span><span class='vocab-highlight' data-word='漢堡'>漢堡</span>。",
                pinyin: "Wǒ de hànbǎo bèi huàn chéng sānmíngzhì le! Wǒ běnlái yào de shì kǎo hànbǎo.",
                english: "My hamburger was replaced with a sandwich! I originally wanted a roasted hamburger.",
                audio: "audio/part4/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='對不起'>對不起</span>！我<span class='vocab-highlight' data-word='以為'>以為</span>你要<span class='vocab-highlight' data-word='三明治'>三明治</span>。<span class='vocab-highlight' data-word='那麼'>那麼</span>我<span class='vocab-highlight' data-word='馬上'>馬上</span><span class='vocab-highlight' data-word='替'>替</span>你換回來。",
                pinyin: "Duìbùqǐ! Wǒ yǐwéi nǐ yào sānmíngzhì. Nàme wǒ mǎshàng tì nǐ huàn huílái.",
                english: "Sorry! I thought you wanted a sandwich. Then I'll immediately replace it for you.",
                audio: "audio/part4/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>錯了，<span class='vocab-highlight' data-word='但是'>但是</span>這個<span class='vocab-highlight' data-word='三明治'>三明治</span>的<span class='vocab-highlight' data-word='味道'>味道</span>也<span class='vocab-highlight' data-word='特別'>特別</span>好。<span class='vocab-highlight' data-word='不過'>不過</span>，我<span class='vocab-highlight' data-word='還是'>還是</span>想要我的<span class='vocab-highlight' data-word='漢堡'>漢堡</span>。",
                pinyin: "Suīrán cuò le, dànshì zhège sānmíngzhì de wèidao yě tèbié hǎo. Búguò, wǒ háishì xiǎng yào wǒ de hànbǎo.",
                english: "Although it's wrong, but this sandwich's flavor is also especially good. However, I still want my hamburger.",
                audio: "audio/part4/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，<span class='vocab-highlight' data-word='一下子'>一下子</span>就換好。<span class='vocab-highlight' data-word='讓'>讓</span>我<span class='vocab-highlight' data-word='把'>把</span>這個拿走，<span class='vocab-highlight' data-word='替'>替</span>你拿新的來。",
                pinyin: "Hǎo de, yīxiàzi jiù huàn hǎo. Ràng wǒ bǎ zhège ná zǒu, tì nǐ ná xīn de lái.",
                english: "Okay, it'll be replaced in a moment. Let me take this away, and get a new one for you.",
                audio: "audio/part4/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "簡單的快樂",
        titleTranslation: "Simple Happiness",
        context: "Finding joy in simple food and moments",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='有時候'>有時候</span>，<span class='vocab-highlight' data-word='簡單'>簡單</span>的<span class='vocab-highlight' data-word='東西'>東西</span>最快樂。<span class='vocab-highlight' data-word='一片'>一片</span><span class='vocab-highlight' data-word='蘋果'>蘋果</span>，一<span class='vocab-highlight' data-word='杯'>杯</span><span class='vocab-highlight' data-word='紅茶'>紅茶</span>，就夠了。",
                pinyin: "Yǒu shíhòu, jiǎndān de dōngxi zuì kuàilè. Yī piàn píngguǒ, yī bēi hóngchá, jiù gòu le.",
                english: "Sometimes, simple things are happiest. One slice of apple, one cup of black tea, is enough.",
                audio: "audio/part4/dialogue10/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對呀，<span class='vocab-highlight' data-word='特別'>特別</span>是當你<span class='vocab-highlight' data-word='需要'>需要</span>休息的時候。<span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的<span class='vocab-highlight' data-word='點心'>點心</span>，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='味道'>味道</span>很<span class='vocab-highlight' data-word='香'>香</span>。",
                pinyin: "Duì ya, tèbié shì dāng nǐ xūyào xiūxí de shíhòu. Zhème jiǎndān de diǎnxin, dànshì wèidao hěn xiāng.",
                english: "Yeah, especially when you need to rest. Such a simple snack, but the flavor is very fragrant.",
                audio: "audio/part4/dialogue10/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='本來'>本來</span>想點<span class='vocab-highlight' data-word='很多'>很多</span>東西，<span class='vocab-highlight' data-word='但是'>但是</span>現在覺得<span class='vocab-highlight' data-word='簡單'>簡單</span>最好。<span class='vocab-highlight' data-word='全部'>全部</span>的快樂都在這<span class='vocab-highlight' data-word='一杯'>一杯</span>茶裡。",
                pinyin: "Wǒ běnlái xiǎng diǎn hěnduō dōngxi, dànshì xiànzài juédé jiǎndān zuì hǎo. Quánbù de kuàilè dōu zài zhè yī bēi chá lǐ.",
                english: "I originally wanted to order many things, but now I think simple is best. All the happiness is in this cup of tea.",
                audio: "audio/part4/dialogue10/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='那麼'>那麼</span>我們<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>享受這個下午<span class='vocab-highlight' data-word='吧'>吧</span>。<span class='vocab-highlight' data-word='雖然'>雖然</span>沒有<span class='vocab-highlight' data-word='很多'>很多</span>食物，<span class='vocab-highlight' data-word='但是'>但是</span>有很多快樂。",
                pinyin: "Nàme wǒmen jiǎndān de xiǎngshòu zhège xiàwǔ ba. Suīrán méiyǒu hěnduō shíwù, dànshì yǒu hěnduō kuàilè.",
                english: "Then let's simply enjoy this afternoon. Although there's not much food, but there's lots of happiness.",
                audio: "audio/part4/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "所有選擇",
        titleTranslation: "All Choices",
        context: "Discussing all available options at a food market",
        lines: [
            {
                speaker: "A",
                chinese: "這個市場有<span class='vocab-highlight' data-word='所有'>所有</span>我<span class='vocab-highlight' data-word='需要'>需要</span>的東西：<span class='vocab-highlight' data-word='蘋果'>蘋果</span>、<span class='vocab-highlight' data-word='西瓜'>西瓜</span>、<span class='vocab-highlight' data-word='青菜'>青菜</span>，還有<span class='vocab-highlight' data-word='很多'>很多</span><span class='vocab-highlight' data-word='種'>種</span><span class='vocab-highlight' data-word='點心'>點心</span>。",
                pinyin: "Zhège shìchǎng yǒu suǒyǒu wǒ xūyào de dōngxi: píngguǒ, xīguā, qīngcài, hái yǒu hěnduō zhǒng diǎnxin.",
                english: "This market has all the things I need: apples, watermelon, vegetables, and many kinds of snacks.",
                audio: "audio/part4/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='全部'>全部</span>的<span class='vocab-highlight' data-word='水果'>水果</span>看起來都<span class='vocab-highlight' data-word='特別'>特別</span>新鮮。<span class='vocab-highlight' data-word='要是'>要是</span>可以買<span class='vocab-highlight' data-word='全部'>全部</span>就好了，<span class='vocab-highlight' data-word='但是'>但是</span>我們<span class='vocab-highlight' data-word='需要'>需要</span>選擇。",
                pinyin: "Quánbù de shuǐguǒ kàn qǐlái dōu tèbié xīnxiān. Yàoshì kěyǐ mǎi quánbù jiù hǎo le, dànshì wǒmen xūyào xuǎnzé.",
                english: "All the fruits look especially fresh. If only we could buy everything, but we need to choose.",
                audio: "audio/part4/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='那麼'>那麼</span>我們買一<span class='vocab-highlight' data-word='包'>包</span><span class='vocab-highlight' data-word='蘋果'>蘋果</span>，一<span class='vocab-highlight' data-word='條'>條</span><span class='vocab-highlight' data-word='西瓜'>西瓜</span>，和兩<span class='vocab-highlight' data-word='種'>種</span><span class='vocab-highlight' data-word='點心'>點心</span>。<span class='vocab-highlight' data-word='簡單'>簡單</span>的選擇。",
                pinyin: "Nàme wǒmen mǎi yī bāo píngguǒ, yī tiáo xīguā, hé liǎng zhǒng diǎnxin. Jiǎndān de xuǎnzé.",
                english: "Then let's buy one package of apples, one watermelon (strip), and two kinds of snacks. Simple choices.",
                audio: "audio/part4/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，<span class='vocab-highlight' data-word='雖然'>雖然</span>不能買<span class='vocab-highlight' data-word='所有'>所有</span>東西，<span class='vocab-highlight' data-word='但是'>但是</span>這些就夠了。<span class='vocab-highlight' data-word='讓'>讓</span>我<span class='vocab-highlight' data-word='把'>把</span>錢拿出來。",
                pinyin: "Hǎo de, suīrán bùnéng mǎi suǒyǒu dōngxi, dànshì zhèxiē jiù gòu le. Ràng wǒ bǎ qián ná chūlái.",
                english: "Okay, although we can't buy everything, but these are enough. Let me take out the money.",
                audio: "audio/part4/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "本來如此",
        titleTranslation: "Originally So",
        context: "Discussing how things were originally versus how they are now",
        lines: [
            {
                speaker: "A",
                chinese: "這家店的<span class='vocab-highlight' data-word='漢堡'>漢堡</span><span class='vocab-highlight' data-word='本來'>本來</span>不是<span class='vocab-highlight' data-word='這個'>這個</span><span class='vocab-highlight' data-word='樣子'>樣子</span>的。<span class='vocab-highlight' data-word='以前'>以前</span>更<span class='vocab-highlight' data-word='簡單'>簡單</span>，<span class='vocab-highlight' data-word='但是'>但是</span>更<span class='vocab-highlight' data-word='香'>香</span>。",
                pinyin: "Zhè jiā diàn de hànbǎo běnlái bùshì zhège yàngzi de. Yǐqián gèng jiǎndān, dànshì gèng xiāng.",
                english: "This shop's hamburger wasn't originally this appearance. Before it was simpler, but more fragrant.",
                audio: "audio/part4/dialogue12/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對，我記得。<span class='vocab-highlight' data-word='本來'>本來</span>的<span class='vocab-highlight' data-word='味道'>味道</span>很<span class='vocab-highlight' data-word='特別'>特別</span>，<span class='vocab-highlight' data-word='現在'>現在</span><span class='vocab-highlight' data-word='好像'>好像</span>加了<span class='vocab-highlight' data-word='很多'>很多</span><span class='vocab-highlight' data-word='糖'>糖</span>和<span class='vocab-highlight' data-word='鹽'>鹽</span>。",
                pinyin: "Duì, wǒ jìdé. Běnlái de wèidao hěn tèbié, xiànzài hǎoxiàng jiā le hěnduō táng hé yán.",
                english: "Yes, I remember. The original flavor was very special, now it seems like lots of sugar and salt are added.",
                audio: "audio/part4/dialogue12/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span><span class='vocab-highlight' data-word='現在'>現在</span>的<span class='vocab-highlight' data-word='樣子'>樣子</span>更<span class='vocab-highlight' data-word='好看'>好看</span>，<span class='vocab-highlight' data-word='但是'>但是</span>我<span class='vocab-highlight' data-word='需要'>需要</span><span class='vocab-highlight' data-word='本來'>本來</span>的<span class='vocab-highlight' data-word='味道'>味道</span>。<span class='vocab-highlight' data-word='那麼'>那麼</span>我們去<span class='vocab-highlight' data-word='其他'>其他</span>店吧。",
                pinyin: "Suīrán xiànzài de yàngzi gèng hǎokàn, dànshì wǒ xūyào běnlái de wèidao. Nàme wǒmen qù qítā diàn ba.",
                english: "Although the current appearance is more beautiful, but I need the original flavor. Then let's go to another shop.",
                audio: "audio/part4/dialogue12/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！<span class='vocab-highlight' data-word='讓'>讓</span>我們<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>找<span class='vocab-highlight' data-word='本來'>本來</span>的<span class='vocab-highlight' data-word='味道'>味道</span>。<span class='vocab-highlight' data-word='雖然'>雖然</span>難找，<span class='vocab-highlight' data-word='但是'>但是</span>值得<span class='vocab-highlight' data-word='呀'>呀</span>！",
                pinyin: "Hǎo zhǔyì! Ràng wǒmen jiǎndān de zhǎo běnlái de wèidao. Suīrán nán zhǎo, dànshì zhídé ya!",
                english: "Good idea! Let's simply look for the original flavor. Although hard to find, but worth it!",
                audio: "audio/part4/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "以為的誤會",
        titleTranslation: "Misunderstanding of Assumption",
        context: "Clearing up misunderstandings about food preferences",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='以為'>以為</span>你不喜歡<span class='vocab-highlight' data-word='辣'>辣</span>的，<span class='vocab-highlight' data-word='所以'>所以</span>沒點<span class='vocab-highlight' data-word='辣'>辣</span>的菜。<span class='vocab-highlight' data-word='但是'>但是</span>你看起來想吃。",
                pinyin: "Wǒ yǐwéi nǐ bù xǐhuān là de, suǒyǐ méi diǎn là de cài. Dànshì nǐ kàn qǐlái xiǎng chī.",
                english: "I thought you didn't like spicy food, so I didn't order spicy dishes. But you look like you want to eat it.",
                audio: "audio/part4/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你誤會了！我<span class='vocab-highlight' data-word='本來'>本來</span>就喜歡<span class='vocab-highlight' data-word='辣'>辣</span>的。<span class='vocab-highlight' data-word='不過'>不過</span>，<span class='vocab-highlight' data-word='現在'>現在</span>的<span class='vocab-highlight' data-word='菜'>菜</span>也很好。<span class='vocab-highlight' data-word='那麼'>那麼</span>下次<span class='vocab-highlight' data-word='記得'>記得</span>點<span class='vocab-highlight' data-word='辣'>辣</span>的。",
                pinyin: "Nǐ wùhuì le! Wǒ běnlái jiù xǐhuān là de. Búguò, xiànzài de cài yě hěn hǎo. Nàme xià cì jìdé diǎn là de.",
                english: "You misunderstood! I originally like spicy food. However, the current dishes are also good. Then remember to order spicy next time.",
                audio: "audio/part4/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，我<span class='vocab-highlight' data-word='把'>把</span>這個<span class='vocab-highlight' data-word='記住'>記住</span>了。<span class='vocab-highlight' data-word='雖然'>雖然</span>我<span class='vocab-highlight' data-word='以為'>以為</span>對了，<span class='vocab-highlight' data-word='但是'>但是</span>錯了。<span class='vocab-highlight' data-word='下次'>下次</span>一定問清楚。",
                pinyin: "Hǎo de, wǒ bǎ zhège jì zhù le. Suīrán wǒ yǐwéi duì le, dànshì cuò le. Xià cì yīdìng wèn qīngchǔ.",
                english: "Okay, I'll remember this. Although I thought I was right, but I was wrong. Next time I'll definitely ask clearly.",
                audio: "audio/part4/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "沒關係！<span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的誤會，<span class='vocab-highlight' data-word='一下子'>一下子</span>就清楚了。<span class='vocab-highlight' data-word='讓'>讓</span>我們繼續吃<span class='vocab-highlight' data-word='吧'>吧</span>！",
                pinyin: "Méi guānxi! Zhème jiǎndān de wùhuì, yīxiàzi jiù qīngchǔ le. Ràng wǒmen jìxù chī ba!",
                english: "It's okay! Such a simple misunderstanding, cleared up in a moment. Let's continue eating!",
                audio: "audio/part4/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "雖然但是",
        titleTranslation: "Although However",
        context: "Discussing contradictory feelings about food choices",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>這個<span class='vocab-highlight' data-word='冰淇淋'>冰淇淋</span>很<span class='vocab-highlight' data-word='甜'>甜</span>，<span class='vocab-highlight' data-word='但是'>但是</span>我<span class='vocab-highlight' data-word='需要'>需要</span>控制<span class='vocab-highlight' data-word='糖'>糖</span>。<span class='vocab-highlight' data-word='這麼'>這麼</span>難的選擇！",
                pinyin: "Suīrán zhège bīngqílín hěn tián, dànshì wǒ xūyào kòngzhì táng. Zhème nán de xuǎnzé!",
                english: "Although this ice cream is very sweet, but I need to control sugar. Such a difficult choice!",
                audio: "audio/part4/dialogue14/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我懂。<span class='vocab-highlight' data-word='雖然'>雖然</span>想吃，<span class='vocab-highlight' data-word='但是'>但是</span>要健康。<span class='vocab-highlight' data-word='那麼'>那麼</span>吃<span class='vocab-highlight' data-word='一半'>一半</span>就好？<span class='vocab-highlight' data-word='或是'>或是</span>點<span class='vocab-highlight' data-word='其他'>其他</span><span class='vocab-highlight' data-word='點心'>點心</span>？",
                pinyin: "Wǒ dǒng. Suīrán xiǎng chī, dànshì yào jiànkāng. Nàme chī yībàn jiù hǎo? Huòshì diǎn qítā diǎnxin?",
                english: "I understand. Although want to eat, but need to be healthy. Then just eat half? Or order other snacks?",
                audio: "audio/part4/dialogue14/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>只吃<span class='vocab-highlight' data-word='一半'>一半</span>，<span class='vocab-highlight' data-word='但是'>但是</span>還是很開心。<span class='vocab-highlight' data-word='那麼'>那麼</span>我<span class='vocab-highlight' data-word='把'>把</span><span class='vocab-highlight' data-word='另外'>另外</span><span class='vocab-highlight' data-word='一半'>一半</span>給你？",
                pinyin: "Suīrán zhǐ chī yībàn, dànshì háishì hěn kāixīn. Nàme wǒ bǎ lìngwài yībàn gěi nǐ?",
                english: "Although only eating half, but still very happy. Then shall I give you the other half?",
                audio: "audio/part4/dialogue14/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的！<span class='vocab-highlight' data-word='雖然'>雖然</span>我也要控制，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='這麼'>這麼</span>好的<span class='vocab-highlight' data-word='冰淇淋'>冰淇淋</span>... 好吧，<span class='vocab-highlight' data-word='讓'>讓</span>我們分享<span class='vocab-highlight' data-word='吧'>吧</span>！",
                pinyin: "Hǎo de! Suīrán wǒ yě yào kòngzhì, dànshì zhème hǎo de bīngqílín... hǎo ba, ràng wǒmen fēnxiǎng ba!",
                english: "Okay! Although I also need to control, but such good ice cream... okay, let's share!",
                audio: "audio/part4/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "需要與想要",
        titleTranslation: "Need vs Want",
        context: "Distinguishing between needs and wants when ordering food",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='需要'>需要</span>吃<span class='vocab-highlight' data-word='青菜'>青菜</span>，<span class='vocab-highlight' data-word='但是'>但是</span>我<span class='vocab-highlight' data-word='想要'>想要</span>吃<span class='vocab-highlight' data-word='漢堡'>漢堡</span>。<span class='vocab-highlight' data-word='這麼'>這麼</span>難選！",
                pinyin: "Wǒ xūyào chī qīngcài, dànshì wǒ xiǎng yào chī hànbǎo. Zhème nán xuǎn!",
                english: "I need to eat vegetables, but I want to eat hamburger. So hard to choose!",
                audio: "audio/part4/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='那麼'>那麼</span>點一<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='漢堡'>漢堡</span>加<span class='vocab-highlight' data-word='很多'>很多</span><span class='vocab-highlight' data-word='青菜'>青菜</span>。<span class='vocab-highlight' data-word='雖然'>雖然</span>不是<span class='vocab-highlight' data-word='全部'>全部</span>的<span class='vocab-highlight' data-word='需要'>需要</span>，<span class='vocab-highlight' data-word='但是'>但是</span>兩<span class='vocab-highlight' data-word='種'>種</span>都有。",
                pinyin: "Nàme diǎn yī fèn hànbǎo jiā hěnduō qīngcài. Suīrán bùshì quánbù de xūyào, dànshì liǎng zhǒng dōu yǒu.",
                english: "Then order one portion hamburger with lots of vegetables. Although not all the needs, but both kinds are there.",
                audio: "audio/part4/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！<span class='vocab-highlight' data-word='那麼'>那麼</span>飲料我<span class='vocab-highlight' data-word='需要'>需要</span>水，<span class='vocab-highlight' data-word='但是'>但是</span>我<span class='vocab-highlight' data-word='想要'>想要</span><span class='vocab-highlight' data-word='啤酒'>啤酒</span>... 還是喝水<span class='vocab-highlight' data-word='吧'>吧</span>。",
                pinyin: "Hǎo zhǔyì! Nàme yǐnliào wǒ xūyào shuǐ, dànshì wǒ xiǎng yào píjiǔ... háishì hē shuǐ ba.",
                english: "Good idea! Then for drink I need water, but I want beer... still drink water then.",
                audio: "audio/part4/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>選擇很難，<span class='vocab-highlight' data-word='但是'>但是</span>你做得對。<span class='vocab-highlight' data-word='讓'>讓</span>我<span class='vocab-highlight' data-word='替'>替</span>你點餐，<span class='vocab-highlight' data-word='一下子'>一下子</span>就好。",
                pinyin: "Suīrán xuǎnzé hěn nán, dànshì nǐ zuò dé duì. Ràng wǒ tì nǐ diǎn cān, yīxiàzi jiù hǎo.",
                english: "Although choosing is hard, but you're doing right. Let me order for you, it'll be ready in a moment.",
                audio: "audio/part4/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "那麼這麼",
        titleTranslation: "That Way This Way",
        context: "Comparing different ways of preparing food",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='這個'>這個</span><span class='vocab-highlight' data-word='三明治'>三明治</span>做<span class='vocab-highlight' data-word='得'>得</span><span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='味道'>味道</span><span class='vocab-highlight' data-word='那麼'>那麼</span>好！",
                pinyin: "Zhège sānmíngzhì zuò dé zhème jiǎndān, dànshì wèidao nàme hǎo!",
                english: "This sandwich is made so simply, but the flavor is that good!",
                audio: "audio/part4/dialogue16/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對呀，<span class='vocab-highlight' data-word='有的'>有的</span>食物<span class='vocab-highlight' data-word='需要'>需要</span><span class='vocab-highlight' data-word='很多'>很多</span>步驟，<span class='vocab-highlight' data-word='有的'>有的</span><span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>做就好。<span class='vocab-highlight' data-word='這麼'>這麼</span>做<span class='vocab-highlight' data-word='或是'>或是</span><span class='vocab-highlight' data-word='那麼'>那麼</span>做，都可以。",
                pinyin: "Duì ya, yǒude shíwù xūyào hěnduō bùzhòu, yǒude jiǎndān de zuò jiù hǎo. Zhème zuò huòshì nàme zuò, dōu kěyǐ.",
                english: "Yeah, some food needs many steps, some can simply be made. Doing it this way or that way, both are fine.",
                audio: "audio/part4/dialogue16/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='以為'>以為</span><span class='vocab-highlight' data-word='需要'>需要</span><span class='vocab-highlight' data-word='很多'>很多</span>材料，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的材料也可以<span class='vocab-highlight' data-word='這麼'>這麼</span>好吃。<span class='vocab-highlight' data-word='那麼'>那麼</span>我學到了。",
                pinyin: "Wǒ yǐwéi xūyào hěnduō cáiliào, dànshì zhème jiǎndān de cáiliào yě kěyǐ zhème hǎochī. Nàme wǒ xué dào le.",
                english: "I thought many ingredients were needed, but such simple ingredients can also be this delicious. Then I've learned.",
                audio: "audio/part4/dialogue16/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='雖然'>雖然</span>簡單，<span class='vocab-highlight' data-word='但是'>但是</span>用心做最重要。<span class='vocab-highlight' data-word='讓'>讓</span>我們享受<span class='vocab-highlight' data-word='這個'>這個</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的美味<span class='vocab-highlight' data-word='吧'>吧</span>！",
                pinyin: "Suīrán jiǎndān, dànshì yòngxīn zuò zuì zhòngyào. Ràng wǒmen xiǎngshòu zhège jiǎndān de měiwèi ba!",
                english: "Although simple, but making with heart is most important. Let's enjoy this simple deliciousness!",
                audio: "audio/part4/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue16/dialogue.mp3"
    },
    {
        id: 17,
        title: "一下子",
        titleTranslation: "In a Moment",
        context: "Discussing quick food preparation and service",
        lines: [
            {
                speaker: "A",
                chinese: "這個餐廳真快！<span class='vocab-highlight' data-word='一下子'>一下子</span>就把<span class='vocab-highlight' data-word='所有'>所有</span>的菜做好了。",
                pinyin: "Zhège cāntīng zhēn kuài! Yīxiàzi jiù bǎ suǒyǒu de cài zuò hǎo le.",
                english: "This restaurant is really fast! In a moment they made all the dishes.",
                audio: "audio/part4/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對呀，<span class='vocab-highlight' data-word='雖然'>雖然</span>快，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='味道'>味道</span>還是很好。<span class='vocab-highlight' data-word='這麼'>這麼</span><span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>做，<span class='vocab-highlight' data-word='但是'>但是</span>這麼好吃。",
                pinyin: "Duì ya, suīrán kuài, dànshì wèidao háishì hěn hǎo. Zhème jiǎndān de zuò, dànshì zhème hǎochī.",
                english: "Yeah, although fast, but the flavor is still good. Made so simply, but so delicious.",
                audio: "audio/part4/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='以為'>以為</span>要等很久，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='一下子'>一下子</span>就好了。<span class='vocab-highlight' data-word='那麼'>那麼</span>我們<span class='vocab-highlight' data-word='可以'>可以</span>快點吃，快點走。",
                pinyin: "Wǒ yǐwéi yào děng hěnjiǔ, dànshì yīxiàzi jiù hǎo le. Nàme wǒmen kěyǐ kuài diǎn chī, kuài diǎn zǒu.",
                english: "I thought we'd have to wait long, but it was ready in a moment. Then we can eat quickly, leave quickly.",
                audio: "audio/part4/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，<span class='vocab-highlight' data-word='不過'>不過</span>不要吃<span class='vocab-highlight' data-word='得'>得</span>太快。<span class='vocab-highlight' data-word='雖然'>雖然</span>快，<span class='vocab-highlight' data-word='但是'>但是</span>要享受。<span class='vocab-highlight' data-word='讓'>讓</span>我們<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>享受<span class='vocab-highlight' data-word='這個'>這個</span>午餐。",
                pinyin: "Hǎo de, búguò bùyào chī dé tài kuài. Suīrán kuài, dànshì yào xiǎngshòu. Ràng wǒmen jiǎndān de xiǎngshòu zhège wǔcān.",
                english: "Okay, but don't eat too fast. Although fast, but need to enjoy. Let's simply enjoy this lunch.",
                audio: "audio/part4/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue17/dialogue.mp3"
    },
    {
        id: 18,
        title: "或與且",
        titleTranslation: "Or and And",
        context: "Making decisions using various conjunctions",
        lines: [
            {
                speaker: "A",
                chinese: "我們點<span class='vocab-highlight' data-word='漢堡'>漢堡</span><span class='vocab-highlight' data-word='或是'>或是</span><span class='vocab-highlight' data-word='三明治'>三明治</span>？<span class='vocab-highlight' data-word='要是'>要是</span>你餓了，點<span class='vocab-highlight' data-word='漢堡'>漢堡</span>；<span class='vocab-highlight' data-word='要是'>要是</span>不餓，點<span class='vocab-highlight' data-word='三明治'>三明治</span>。",
                pinyin: "Wǒmen diǎn hànbǎo huòshì sānmíngzhì? Yàoshì nǐ è le, diǎn hànbǎo; yàoshì bù è, diǎn sānmíngzhì.",
                english: "Should we order hamburger or sandwich? If you're hungry, order hamburger; if not hungry, order sandwich.",
                audio: "audio/part4/dialogue18/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我<span class='vocab-highlight' data-word='有點'>有點</span>餓，<span class='vocab-highlight' data-word='但是'>但是</span>不想吃<span class='vocab-highlight' data-word='很多'>很多</span>。<span class='vocab-highlight' data-word='那麼'>那麼</span>點<span class='vocab-highlight' data-word='三明治'>三明治</span>，再加一<span class='vocab-highlight' data-word='份'>份</span><span class='vocab-highlight' data-word='青菜'>青菜</span>沙拉。",
                pinyin: "Wǒ yǒudiǎn è, dànshì bùxiǎng chī hěnduō. Nàme diǎn sānmíngzhì, zài jiā yī fèn qīngcài shālā.",
                english: "I'm a little hungry, but don't want to eat a lot. Then order sandwich, plus one portion vegetable salad.",
                audio: "audio/part4/dialogue18/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，<span class='vocab-highlight' data-word='或是'>或是</span>你也想要湯？<span class='vocab-highlight' data-word='雖然'>雖然</span>有沙拉，<span class='vocab-highlight' data-word='但是'>但是</span>湯也很<span class='vocab-highlight' data-word='香'>香</span>。",
                pinyin: "Hǎo de, huòshì nǐ yě xiǎng yào tāng? Suīrán yǒu shālā, dànshì tāng yě hěn xiāng.",
                english: "Okay, or do you also want soup? Although there's salad, but soup is also very fragrant.",
                audio: "audio/part4/dialogue18/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "不要了，<span class='vocab-highlight' data-word='這麼'>這麼</span>多就夠了。<span class='vocab-highlight' data-word='讓'>讓</span>我<span class='vocab-highlight' data-word='把'>把</span>菜單給服務生，<span class='vocab-highlight' data-word='一下子'>一下子</span>就點好。",
                pinyin: "Bùyào le, zhème duō jiù gòu le. Ràng wǒ bǎ càidān gěi fúwùshēng, yīxiàzi jiù diǎn hǎo.",
                english: "No more, this much is enough. Let me give the menu to the waiter, we'll order in a moment.",
                audio: "audio/part4/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue18/dialogue.mp3"
    },
    {
        id: 19,
        title: "把讓被",
        titleTranslation: "BA, RANG, BEI Constructions",
        context: "Using different grammatical constructions in context",
        lines: [
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='把'>把</span><span class='vocab-highlight' data-word='漢堡'>漢堡</span>切<span class='vocab-highlight' data-word='成'>成</span>兩<span class='vocab-highlight' data-word='半'>半</span>了。<span class='vocab-highlight' data-word='讓'>讓</span>你選一<span class='vocab-highlight' data-word='半'>半</span>。",
                pinyin: "Wǒ bǎ hànbǎo qiē chéng liǎng bàn le. Ràng nǐ xuǎn yībàn.",
                english: "I cut the hamburger into two halves. Let you choose one half.",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝！<span class='vocab-highlight' data-word='但是'>但是</span>我的<span class='vocab-highlight' data-word='叉'>叉</span>子<span class='vocab-highlight' data-word='被'>被</span>拿走了。<span class='vocab-highlight' data-word='可以'>可以</span><span class='vocab-highlight' data-word='讓'>讓</span>服務生<span class='vocab-highlight' data-word='替'>替</span>我拿新的嗎？",
                pinyin: "Xièxiè! Dànshì wǒ de chāzi bèi ná zǒu le. Kěyǐ ràng fúwùshēng tì wǒ ná xīn de ma?",
                english: "Thank you! But my fork was taken away. Can you let the waiter get a new one for me?",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的，我<span class='vocab-highlight' data-word='把'>把</span>他叫來。<span class='vocab-highlight' data-word='雖然'>雖然</span><span class='vocab-highlight' data-word='簡單'>簡單</span>的事，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='需要'>需要</span>幫忙。<span class='vocab-highlight' data-word='那麼'>那麼</span>你先用我的<span class='vocab-highlight' data-word='叉'>叉</span>子。",
                pinyin: "Hǎo de, wǒ bǎ tā jiào lái. Suīrán jiǎndān de shì, dànshì xūyào bāngmáng. Nàme nǐ xiān yòng wǒ de chāzi.",
                english: "Okay, I'll call him over. Although a simple thing, but needs help. Then use my fork first.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='本來'>本來</span>想<span class='vocab-highlight' data-word='簡單'>簡單</span>地吃，<span class='vocab-highlight' data-word='但是'>但是</span><span class='vocab-highlight' data-word='這麼'>這麼</span>多事。<span class='vocab-highlight' data-word='不過'>不過</span>沒關係，<span class='vocab-highlight' data-word='讓'>讓</span>我們享受食物<span class='vocab-highlight' data-word='吧'>吧</span>！",
                pinyin: "Běnlái xiǎng jiǎndān de chī, dànshì zhème duō shì. Búguò méi guānxi, ràng wǒmen xiǎngshòu shíwù ba!",
                english: "Originally wanted to eat simply, but so many things. However it's okay, let's enjoy the food!",
                audio: "audio/part4/dialogue19/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue19/dialogue.mp3"
    },
    {
        id: 20,
        title: "最後的回顧",
        titleTranslation: "Final Review",
        context: "Reviewing all the vocabulary learned through food conversations",
        lines: [
            {
                speaker: "A",
                chinese: "我們學了<span class='vocab-highlight' data-word='很多'>很多</span>詞彙：<span class='vocab-highlight' data-word='樣子'>樣子</span>、<span class='vocab-highlight' data-word='味道'>味道</span>、<span class='vocab-highlight' data-word='簡單'>簡單</span>、<span class='vocab-highlight' data-word='特別'>特別</span>... <span class='vocab-highlight' data-word='全部'>全部</span>都跟食物有關係。",
                pinyin: "Wǒmen xué le hěnduō cíhuì: yàngzi, wèidao, jiǎndān, tèbié... quánbù dōu gēn shíwù yǒu guānxi.",
                english: "We learned many vocabulary words: appearance, flavor, simple, special... all are related to food.",
                audio: "audio/part4/dialogue20/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "對呀，還有<span class='vocab-highlight' data-word='餐具'>餐具</span>：<span class='vocab-highlight' data-word='刀'>刀</span>子、<span class='vocab-highlight' data-word='叉'>叉</span>子、<span class='vocab-highlight' data-word='湯匙'>湯匙</span>、<span class='vocab-highlight' data-word='盤'>盤</span>子。不同的<span class='vocab-highlight' data-word='味道'>味道</span>：<span class='vocab-highlight' data-word='酸'>酸</span>、<span class='vocab-highlight' data-word='甜'>甜</span>、<span class='vocab-highlight' data-word='苦'>苦</span>、<span class='vocab-highlight' data-word='辣'>辣</span>、<span class='vocab-highlight' data-word='鹹'>鹹</span>。",
                pinyin: "Duì ya, hái yǒu cānjù: dāozi, chāzi, tāngchí, pánzi. Bùtóng de wèidao: suān, tián, kǔ, là, xián.",
                english: "Yeah, and also utensils: knife, fork, spoon, plate. Different flavors: sour, sweet, bitter, spicy, salty.",
                audio: "audio/part4/dialogue20/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "還有重要的語法：<span class='vocab-highlight' data-word='把'>把</span>、<span class='vocab-highlight' data-word='被'>被</span>、<span class='vocab-highlight' data-word='讓'>讓</span>。<span class='vocab-highlight' data-word='雖然'>雖然</span>難，<span class='vocab-highlight' data-word='但是'>但是</span>很有用。<span class='vocab-highlight' data-word='那麼'>那麼</span>我們繼續練習<span class='vocab-highlight' data-word='吧'>吧</span>！",
                pinyin: "Hái yǒu zhòngyào de yǔfǎ: bǎ, bèi, ràng. Suīrán nán, dànshì hěn yǒuyòng. Nàme wǒmen jìxù liànxí ba!",
                english: "And important grammar: ba, bei, rang. Although difficult, but very useful. Then let's continue practicing!",
                audio: "audio/part4/dialogue20/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "沒錯！<span class='vocab-highlight' data-word='所有'>所有</span>的學習都是為了更好地溝通。<span class='vocab-highlight' data-word='讓'>讓</span>我們用<span class='vocab-highlight' data-word='這些'>這些</span>詞彙，<span class='vocab-highlight' data-word='簡單'>簡單</span><span class='vocab-highlight' data-word='地'>地</span>、快樂<span class='vocab-highlight' data-word='地'>地</span>說中文。<span class='vocab-highlight' data-word='加油'>加油</span>！",
                pinyin: "Méi cuò! Suǒyǒu de xuéxí dōu shì wèi le gèng hǎo de gōutōng. Ràng wǒmen yòng zhèxiē cíhuì, jiǎndān de, kuàilè de shuō zhōngwén. Jiāyóu!",
                english: "Exactly! All learning is for better communication. Let's use these vocabulary words, simply, happily speak Chinese. Keep it up!",
                audio: "audio/part4/dialogue20/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue20/dialogue.mp3"
    }
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 21, // adjust based on last dialogue index + 1
    SWIPE_THRESHOLD: 50,
    AUDIO: false,
    AUDIO_DELAY: 300

};