// ============================================
// LANGUAGE COURSE DATA TEMPLATE
// ============================================

// Slide Titles Database - Add your slide titles here
const slideTitles = [
    { //required first slide
        title: "開始學習", 
        subtitle: "Introduction to Travel and Daily Life Vocabulary", 
        icon: "🚀"
    },
    { 
        title: "交通與方向", 
        subtitle: "Transportation and Directions", 
        icon: "🚗"
    },
    { 
        title: "城市導航", 
        subtitle: "City Navigation", 
        icon: "🗺️"
    },
    { 
        title: "旅行計劃", 
        subtitle: "Travel Planning", 
        icon: "✈️"
    },
    { 
        title: "住宿與行李", 
        subtitle: "Accommodation and Luggage", 
        icon: "🏨"
    },
    { 
        title: "觀光與攝影", 
        subtitle: "Sightseeing and Photography", 
        icon: "📸"
    },
    { 
        title: "方位與位置", 
        subtitle: "Directions and Locations", 
        icon: "🧭"
    },
    { 
        title: "移動與動作", 
        subtitle: "Movement and Actions", 
        icon: "🚶"
    },
    { 
        title: "身體與健康", 
        subtitle: "Body and Health", 
        icon: "💪"
    },
    { 
        title: "購物基礎", 
        subtitle: "Shopping Basics", 
        icon: "🛍️"
    },
    { 
        title: "衣著與配件", 
        subtitle: "Clothing and Accessories", 
        icon: "👕"
    },
    { 
        title: "商店與市場", 
        subtitle: "Shops and Markets", 
        icon: "🏪"
    },
    { 
        title: "顏色與描述", 
        subtitle: "Colors and Descriptions", 
        icon: "🎨"
    },
    { 
        title: "日常動作", 
        subtitle: "Daily Actions", 
        icon: "🔄"
    },
    { 
        title: "比較與程度", 
        subtitle: "Comparisons and Degrees", 
        icon: "⚖️"
    },
    { 
        title: "健康狀況", 
        subtitle: "Health Conditions", 
        icon: "🏥"
    },
    { 
        title: "旅行對話", 
        subtitle: "Travel Conversations", 
        icon: "💬"
    },
    { 
        title: "購物情境", 
        subtitle: "Shopping Scenarios", 
        icon: "💰"
    },
    { 
        title: "方向詢問", 
        subtitle: "Asking for Directions", 
        icon: "❓"
    },
    { 
        title: "綜合應用", 
        subtitle: "Comprehensive Application", 
        icon: "🌟"
    },
    { //required review slide
        title: "詞彙複習", 
        subtitle: "50 Words Mastery", 
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
    { chinese: "汽車", pinyin: "qìchē", english: "car", audio: "audio/part4/words/qiche.mp3" },
    { chinese: "飛機場", pinyin: "fēijīchǎng", english: "airport", audio: "audio/part4/words/feijichang.mp3" },
    { chinese: "馬路", pinyin: "mǎlù", english: "road", audio: "audio/part4/words/malu.mp3" },
    { chinese: "路口", pinyin: "lùkǒu", english: "intersection", audio: "audio/part4/words/lukou.mp3" },
    { chinese: "十字路口", pinyin: "shízì lùkǒu", english: "crossroads", audio: "audio/part4/words/shizilukou.mp3" },
    { chinese: "對面", pinyin: "duìmiàn", english: "opposite side", audio: "audio/part4/words/duimian.mp3" },
    { chinese: "旅行", pinyin: "lǚxíng", english: "travel", audio: "audio/part4/words/lvxing.mp3" },
    { chinese: "飯店", pinyin: "fàndiàn", english: "hotel", audio: "audio/part4/words/fandian.mp3" },
    { chinese: "旅館", pinyin: "lǚguǎn", english: "inn", audio: "audio/part4/words/lvguan.mp3" },
    { chinese: "袋子", pinyin: "dàizi", english: "bag", audio: "audio/part4/words/daizi.mp3" },
    { chinese: "參觀", pinyin: "cānguān", english: "visit", audio: "audio/part4/words/canguan.mp3" },
    { chinese: "地圖", pinyin: "dìtú", english: "map", audio: "audio/part4/words/ditu.mp3" },
    { chinese: "照相機", pinyin: "zhàoxiàngjī", english: "camera", audio: "audio/part4/words/zhaoxiangji.mp3" },
    { chinese: "照相", pinyin: "zhàoxiàng", english: "take photos", audio: "audio/part4/words/zhaoxiang.mp3" },
    { chinese: "照片", pinyin: "zhàopiàn", english: "photo", audio: "audio/part4/words/zhaopian.mp3" },
    { chinese: "風景", pinyin: "fēngjǐng", english: "scenery", audio: "audio/part4/words/fengjing.mp3" },
    { chinese: "南", pinyin: "nán", english: "south", audio: "audio/part4/words/nan.mp3" },
    { chinese: "西", pinyin: "xī", english: "west", audio: "audio/part4/words/xi.mp3" },
    { chinese: "北", pinyin: "běi", english: "north", audio: "audio/part4/words/bei.mp3" },
    { chinese: "東", pinyin: "dōng", english: "east", audio: "audio/part4/words/dong.mp3" },
    { chinese: "中間", pinyin: "zhōngjiān", english: "middle", audio: "audio/part4/words/zhongjian.mp3" },
    { chinese: "離", pinyin: "lí", english: "away from", audio: "audio/part4/words/li.mp3" },
    { chinese: "離開", pinyin: "líkāi", english: "leave", audio: "audio/part4/words/likai.mp3" },
    { chinese: "經過", pinyin: "jīngguò", english: "pass through", audio: "audio/part4/words/jingguo.mp3" },
    { chinese: "往", pinyin: "wǎng", english: "toward", audio: "audio/part4/words/wang.mp3" },
    { chinese: "送", pinyin: "sòng", english: "send", audio: "audio/part4/words/song.mp3" },
    { chinese: "放", pinyin: "fàng", english: "put", audio: "audio/part4/words/fang.mp3" },
    { chinese: "近", pinyin: "jìn", english: "near", audio: "audio/part4/words/jin.mp3" },
    { chinese: "遠", pinyin: "yuǎn", english: "far", audio: "audio/part4/words/yuan.mp3" },
    { chinese: "向", pinyin: "xiàng", english: "toward", audio: "audio/part4/words/xiang.mp3" },
    { chinese: "轉", pinyin: "zhuǎn", english: "turn", audio: "audio/part4/words/zhuan.mp3" },
    { chinese: "掉", pinyin: "diào", english: "drop", audio: "audio/part4/words/diao.mp3" },
    { chinese: "一直", pinyin: "yīzhí", english: "straight ahead", audio: "audio/part4/words/yizhi.mp3" },
    { chinese: "最後", pinyin: "zuìhòu", english: "finally", audio: "audio/part4/words/zuihou.mp3" },
    { chinese: "病人", pinyin: "bìngrén", english: "patient", audio: "audio/part4/words/bingren.mp3" },
    { chinese: "頭髮", pinyin: "tóufa", english: "hair", audio: "audio/part4/words/toufa.mp3" },
    { chinese: "手指", pinyin: "shǒuzhǐ", english: "finger", audio: "audio/part4/words/shouzhi.mp3" },
    { chinese: "肚子", pinyin: "dùzi", english: "stomach", audio: "audio/part4/words/duzi.mp3" },
    { chinese: "臉", pinyin: "liǎn", english: "face", audio: "audio/part4/words/lian.mp3" },
    { chinese: "心", pinyin: "xīn", english: "heart", audio: "audio/part4/words/xin.mp3" },
    { chinese: "健康", pinyin: "jiànkāng", english: "health", audio: "audio/part4/words/jiankang.mp3" },
    { chinese: "渴", pinyin: "kě", english: "thirsty", audio: "audio/part4/words/ke.mp3" },
    { chinese: "舒服", pinyin: "shūfu", english: "comfortable", audio: "audio/part4/words/shufu.mp3" },
    { chinese: "眼鏡", pinyin: "yǎnjìng", english: "glasses", audio: "audio/part4/words/yanjing.mp3" },
    { chinese: "賣", pinyin: "mài", english: "sell", audio: "audio/part4/words/mai.mp3" },
    { chinese: "付", pinyin: "fù", english: "pay", audio: "audio/part4/words/fu.mp3" },
    { chinese: "希望", pinyin: "xīwàng", english: "hope", audio: "audio/part4/words/xiwang.mp3" },
    { chinese: "書店", pinyin: "shūdiàn", english: "bookstore", audio: "audio/part4/words/shudian.mp3" },
    { chinese: "商店", pinyin: "shāngdiàn", english: "shop", audio: "audio/part4/words/shangdian.mp3" },
    { chinese: "市場", pinyin: "shìchǎng", english: "market", audio: "audio/part4/words/shichang.mp3" },
    { chinese: "超級市場", pinyin: "chāojí shìchǎng", english: "supermarket", audio: "audio/part4/words/chaojishichang.mp3" },
    { chinese: "信用卡", pinyin: "xìnyòngkǎ", english: "credit card", audio: "audio/part4/words/xinyongka.mp3" },
    { chinese: "重要", pinyin: "zhòngyào", english: "important", audio: "audio/part4/words/zhongyao.mp3" },
    { chinese: "顏色", pinyin: "yánsè", english: "color", audio: "audio/part4/words/yanse.mp3" },
    { chinese: "黃色", pinyin: "huángsè", english: "yellow", audio: "audio/part4/words/huangse.mp3" },
    { chinese: "白色", pinyin: "báisè", english: "white", audio: "audio/part4/words/baise.mp3" },
    { chinese: "手錶", pinyin: "shǒubiǎo", english: "watch", audio: "audio/part4/words/shoubiao.mp3" },
    { chinese: "襪子", pinyin: "wàzi", english: "socks", audio: "audio/part4/words/wazi.mp3" },
    { chinese: "雙", pinyin: "shuāng", english: "pair", audio: "audio/part4/words/shuang.mp3" },
    { chinese: "裙子", pinyin: "qúnzi", english: "skirt", audio: "audio/part4/words/qunzi.mp3" },
    { chinese: "褲子", pinyin: "kùzi", english: "pants", audio: "audio/part4/words/kuzi.mp3" },
    { chinese: "大衣", pinyin: "dàyī", english: "coat", audio: "audio/part4/words/dayi.mp3" },
    { chinese: "帽子", pinyin: "màozi", english: "hat", audio: "audio/part4/words/maozi.mp3" },
    { chinese: "皮包", pinyin: "píbāo", english: "leather bag", audio: "audio/part4/words/pibao.mp3" },
    { chinese: "外套", pinyin: "wàitào", english: "jacket", audio: "audio/part4/words/waitao.mp3" },
    { chinese: "小心", pinyin: "xiǎoxīn", english: "be careful", audio: "audio/part4/words/xiaoxin.mp3" },
    { chinese: "比較", pinyin: "bǐjiào", english: "compare", audio: "audio/part4/words/bijiao.mp3" },
    { chinese: "差不多", pinyin: "chàbuduō", english: "almost", audio: "audio/part4/words/chabuduo.mp3" },
    { chinese: "戴", pinyin: "dài", english: "wear", audio: "audio/part4/words/dai.mp3" },
    { chinese: "試", pinyin: "shì", english: "try", audio: "audio/part4/words/shi.mp3" },
    { chinese: "輕", pinyin: "qīng", english: "light", audio: "audio/part4/words/qing.mp3" },
    { chinese: "重", pinyin: "zhòng", english: "heavy", audio: "audio/part4/words/zhong.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "城市交通",
        titleTranslation: "City Transportation",
        context: "Discussing daily commute options",
        lines: [
            {
                speaker: "A",
                chinese: "我每天開<span class='vocab-highlight' data-word='汽車'>汽車</span>上班，但是<span class='vocab-highlight' data-word='馬路'>馬路</span>上很堵車。有時候我<span class='vocab-highlight' data-word='希望'>希望</span>能坐地鐵。",
                pinyin: "Wǒ měitiān kāi qìchē shàngbān, dànshì mǎlù shàng hěn dǔchē. Yǒu shíhòu wǒ xīwàng néng zuò dìtiě.",
                english: "I drive a car to work every day, but the roads are very congested. Sometimes I hope to take the subway.",
                audio: "audio/part4/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我住在<span class='vocab-highlight' data-word='飛機場'>飛機場</span><span class='vocab-highlight' data-word='附近'>附近</span>，所以坐<span class='vocab-highlight' data-word='汽車'>汽車</span>比較方便。但是我必須<span class='vocab-highlight' data-word='小心'>小心</span><span class='vocab-highlight' data-word='十字路口'>十字路口</span>的交通。",
                pinyin: "Wǒ zhù zài fēijīchǎng fùjìn, suǒyǐ zuò qìchē bǐjiào fāngbiàn. Dànshì wǒ bìxū xiǎoxīn shízì lùkǒu de jiāotōng.",
                english: "I live near the airport, so taking a car is more convenient. But I must be careful of the traffic at crossroads.",
                audio: "audio/part4/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "從我家到<span class='vocab-highlight' data-word='公司'>公司</span>需要<span class='vocab-highlight' data-word='經過'>經過</span>三個<span class='vocab-highlight' data-word='路口'>路口</span>。最忙的<span class='vocab-highlight' data-word='路口'>路口</span>在<span class='vocab-highlight' data-word='書店'>書店</span>的<span class='vocab-highlight' data-word='對面'>對面</span>。",
                pinyin: "Cóng wǒ jiā dào gōngsī xūyào jīngguò sān gè lùkǒu. Zuì máng de lùkǒu zài shūdiàn de duìmiàn.",
                english: "From my home to the company, I need to pass through three intersections. The busiest intersection is opposite the bookstore.",
                audio: "audio/part4/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "如果時間<span class='vocab-highlight' data-word='差不多'>差不多</span>，走路可能更<span class='vocab-highlight' data-word='健康'>健康</span>。走路可以讓你感覺更<span class='vocab-highlight' data-word='舒服'>舒服</span>。",
                pinyin: "Rúguǒ shíjiān chàbuduō, zǒulù kěnéng gèng jiànkāng. Zǒulù kěyǐ ràng nǐ gǎnjué gèng shūfu.",
                english: "If the time is almost the same, walking might be healthier. Walking can make you feel more comfortable.",
                audio: "audio/part4/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "旅行計劃",
        titleTranslation: "Travel Plans",
        context: "Planning a trip to southern China",
        lines: [
            {
                speaker: "A",
                chinese: "我下個月打算去<span class='vocab-highlight' data-word='南'>南</span>部<span class='vocab-highlight' data-word='旅行'>旅行</span>。我已經訂了<span class='vocab-highlight' data-word='飯店'>飯店</span>，但是還沒買<span class='vocab-highlight' data-word='飛機'>飛機</span>票。",
                pinyin: "Wǒ xià gè yuè dǎsuàn qù nánbù lǚxíng. Wǒ yǐjīng dìng le fàndiàn, dànshì hái méi mǎi fēijī piào.",
                english: "I plan to travel to the south next month. I've already booked a hotel, but haven't bought the plane ticket yet.",
                audio: "audio/part4/dialogue2/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你要去<span class='vocab-highlight' data-word='飛機場'>飛機場</span>的時候，我可以開<span class='vocab-highlight' data-word='汽車'>汽車</span><span class='vocab-highlight' data-word='送'>送</span>你。記得帶<span class='vocab-highlight' data-word='地圖'>地圖</span>和<span class='vocab-highlight' data-word='照相機'>照相機</照相机>。",
                pinyin: "Nǐ yào qù fēijīchǎng de shíhòu, wǒ kěyǐ kāi qìchē sòng nǐ. Jìde dài dìtú hé zhàoxiàngjī.",
                english: "When you go to the airport, I can drive you there in a car. Remember to bring a map and camera.",
                audio: "audio/part4/dialogue2/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "謝謝！我會<span class='vocab-highlight' data-word='放'>放</span>很多衣服在<span class='vocab-highlight' data-word='袋子'>袋子</span>裡。南部天氣比較熱，我需要<span class='vocab-highlight' data-word='裙子'>裙子</span>和<span class='vocab-highlight' data-word='帽子'>帽子</span>。",
                pinyin: "Xièxie! Wǒ huì fàng hěnduō yīfu zài dàizi lǐ. Nánbù tiānqì bǐjiào rè, wǒ xūyào qúnzi hé màozi.",
                english: "Thank you! I'll put many clothes in the bag. The weather in the south is hotter, I need skirts and hats.",
                audio: "audio/part4/dialogue2/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "不要忘記帶<span class='vocab-highlight' data-word='信用卡'>信用卡</span>和<span class='vocab-highlight' data-word='手錶'>手錶</span>。時間管理很<span class='vocab-highlight' data-word='重要'>重要</span>，特別是當你<span class='vocab-highlight' data-word='參觀'>參觀</span>很多地方的時候。",
                pinyin: "Bùyào wàngjì dài xìnyòngkǎ hé shǒubiǎo. Shíjiān guǎnlǐ hěn zhòngyào, tèbié shì dāng nǐ cānguān hěnduō dìfāng de shíhòu.",
                english: "Don't forget to bring credit cards and a watch. Time management is important, especially when you're visiting many places.",
                audio: "audio/part4/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "方位詢問",
        titleTranslation: "Asking for Directions",
        context: "A tourist asking for directions in the city",
        lines: [
            {
                speaker: "A",
                chinese: "請問，<span class='vocab-highlight' data-word='市場'>市場</span>在哪裡？我需要買一些<span class='vocab-highlight' data-word='白色'>白色</span>的<span class='vocab-highlight' data-word='襪子'>襪子</span>和一件<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='外套'>外套</span>。",
                pinyin: "Qǐngwèn, shìchǎng zài nǎlǐ? Wǒ xūyào mǎi yīxiē báisè de wàzi hé yī jiàn huángsè de wàitào.",
                english: "Excuse me, where is the market? I need to buy some white socks and a yellow jacket.",
                audio: "audio/part4/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "從這裡<span class='vocab-highlight' data-word='一直'>一直</span><span class='vocab-highlight' data-word='往'>往</span><span class='vocab-highlight' data-word='北'>北</span>走，在第二個<span class='vocab-highlight' data-word='路口'>路口</span><span class='vocab-highlight' data-word='向'>向</span><span class='vocab-highlight' data-word='西'>西</span><span class='vocab-highlight' data-word='轉'>轉</span>。<span class='vocab-highlight' data-word='市場'>市場</span>就在<span class='vocab-highlight' data-word='旅館'>旅館</span>的<span class='vocab-highlight' data-word='對面'>對面</span>。",
                pinyin: "Cóng zhèlǐ yīzhí wǎng běi zǒu, zài dì èr gè lùkǒu xiàng xī zhuǎn. Shìchǎng jiù zài lǚguǎn de duìmiàn.",
                english: "From here, go straight north, at the second intersection turn west. The market is right opposite the inn.",
                audio: "audio/part4/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "走路會很<span class='vocab-highlight' data-word='遠'>遠</span>嗎？我的<span class='vocab-highlight' data-word='腳'>腳</span>不太<span class='vocab-highlight' data-word='舒服'>舒服</span>。",
                pinyin: "Zǒulù huì hěn yuǎn ma? Wǒ de jiǎo bù tài shūfu.",
                english: "Is it very far to walk? My feet are not very comfortable.",
                audio: "audio/part4/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "不，很<span class='vocab-highlight' data-word='近'>近</span>。大概走五分鐘就到了。如果你<span class='vocab-highlight' data-word='渴'>渴</span>了，<span class='vocab-highlight' data-word='市場'>市場</span><span class='vocab-highlight' data-word='中間'>中間</span>有賣水的<span class='vocab-highlight' data-word='商店'>商店</span>。",
                pinyin: "Bù, hěn jìn. Dàgài zǒu wǔ fēnzhōng jiù dào le. Rúguǒ nǐ kě le, shìchǎng zhōngjiān yǒu mài shuǐ de shāngdiàn.",
                english: "No, it's very close. About five minutes' walk. If you're thirsty, there's a shop selling water in the middle of the market.",
                audio: "audio/part4/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "購物經歷",
        titleTranslation: "Shopping Experience",
        context: "Shopping for clothing at a department store",
        lines: [
            {
                speaker: "A",
                chinese: "我想買一<span class='vocab-highlight' data-word='雙'>雙</span><span class='vocab-highlight' data-word='黑色'>黑色</span>的<span class='vocab-highlight' data-word='褲子'>褲子</span>和一件<span class='vocab-highlight' data-word='大衣'>大衣</span>。這個<span class='vocab-highlight' data-word='商店'>商店</span>的<span class='vocab-highlight' data-word='顏色'>顏色</span>選擇很多。",
                pinyin: "Wǒ xiǎng mǎi yī shuāng hēisè de kùzi hé yī jiàn dàyī. Zhège shāngdiàn de yánsè xuǎnzé hěnduō.",
                english: "I want to buy a pair of black pants and a coat. This shop has many color choices.",
                audio: "audio/part4/dialogue4/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你可以<span class='vocab-highlight' data-word='試'>試</span>這件<span class='vocab-highlight' data-word='外套'>外套</span>。它是<span class='vocab-highlight' data-word='白色'>白色</span>的，比較<span class='vocab-highlight' data-word='輕'>輕</span>。這件<span class='vocab-highlight' data-word='大衣'>大衣</span>很<span class='vocab-highlight' data-word='重'>重</span>，但是很暖和。",
                pinyin: "Nǐ kěyǐ shì zhè jiàn wàitào. Tā shì báisè de, bǐjiào qīng. Zhè jiàn dàyī hěn zhòng, dànshì hěn nuǎnhuo.",
                english: "You can try this jacket. It's white and relatively light. This coat is heavy, but very warm.",
                audio: "audio/part4/dialogue4/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我需要一個<span class='vocab-highlight' data-word='皮包'>皮包</span><span class='vocab-highlight' data-word='放'>放</span>我的<span class='vocab-highlight' data-word='信用卡'>信用卡</span>和<span class='vocab-highlight' data-word='手機'>手機</span>。這個<span class='vocab-highlight' data-word='皮包'>皮包</span>的<span class='vocab-highlight' data-word='顏色'>顏色</span>我很喜歡。",
                pinyin: "Wǒ xūyào yī gè píbāo fàng wǒ de xìnyòngkǎ hé shǒujī. Zhège píbāo de yánsè wǒ hěn xǐhuān.",
                english: "I need a leather bag to put my credit cards and phone. I really like the color of this leather bag.",
                audio: "audio/part4/dialogue4/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "你可以用<span class='vocab-highlight' data-word='信用卡'>信用卡</span><span class='vocab-highlight' data-word='付'>付</span>錢。那邊有鏡子，你可以看看<span class='vocab-highlight' data-word='戴'>戴</span><span class='vocab-highlight' data-word='帽子'>帽子</span>的樣子。",
                pinyin: "Nǐ kěyǐ yòng xìnyòngkǎ fù qián. Nàbiān yǒu jìngzi, nǐ kěyǐ kànkan dài màozi de yàngzi.",
                english: "You can pay with a credit card. There's a mirror over there, you can see how you look wearing the hat.",
                audio: "audio/part4/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "健康關心",
        titleTranslation: "Health Concerns",
        context: "Talking about health issues at a clinic",
        lines: [
            {
                speaker: "A",
                chinese: "我今天覺得不太<span class='vocab-highlight' data-word='舒服'>舒服</span>。我的<span class='vocab-highlight' data-word='肚子'>肚子</span>疼，而且很<span class='vocab-highlight' data-word='渴'>渴</span>。",
                pinyin: "Wǒ jīntiān juéde bù tài shūfu. Wǒ de dùzi téng, érqiě hěn kě.",
                english: "I don't feel very well today. My stomach hurts, and I'm very thirsty.",
                audio: "audio/part4/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你需要去看醫生。這裡<span class='vocab-highlight' data-word='離'>離</span>醫院很<span class='vocab-highlight' data-word='近'>近</span>，只有兩個<span class='vocab-highlight' data-word='路口'>路口</span>的距離。<span class='vocab-highlight' data-word='健康'>健康</span>很<span class='vocab-highlight' data-word='重要'>重要</span>。",
                pinyin: "Nǐ xūyào qù kàn yīshēng. Zhèlǐ lí yīyuàn hěn jìn, zhǐyǒu liǎng gè lùkǒu de jùlí. Jiànkāng hěn zhòngyào.",
                english: "You need to see a doctor. It's very close to the hospital from here, only two intersections away. Health is very important.",
                audio: "audio/part4/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我的<span class='vocab-highlight' data-word='心'>心</span>跳得很快，<span class='vocab-highlight' data-word='臉'>臉</span>也很紅。也許我需要<span class='vocab-highlight' data-word='休息'>休息</span>一下。",
                pinyin: "Wǒ de xīn tiào de hěn kuài, liǎn yě hěn hóng. Yěxǔ wǒ xūyào xiūxi yīxià.",
                english: "My heart is beating very fast, and my face is also very red. Maybe I need to rest for a while.",
                audio: "audio/part4/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='小心'>小心</span>你的<span class='vocab-highlight' data-word='身體'>身體</span>。醫生會檢查你的<span class='vocab-highlight' data-word='手指'>手指</span>和<span class='vocab-highlight' data-word='頭髮'>頭髮</span>。很多<span class='vocab-highlight' data-word='病人'>病人</span>在這裡得到幫助。",
                pinyin: "Xiǎoxīn nǐ de shēntǐ. Yīshēng huì jiǎnchá nǐ de shǒuzhǐ hé tóufa. Hěnduō bìngrén zài zhèlǐ dédào bāngzhù.",
                english: "Be careful with your body. The doctor will check your fingers and hair. Many patients get help here.",
                audio: "audio/part4/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "超市購物",
        titleTranslation: "Supermarket Shopping",
        context: "Shopping for daily necessities at a supermarket",
        lines: [
            {
                speaker: "A",
                chinese: "我們去<span class='vocab-highlight' data-word='超級市場'>超級市場</span>買東西吧。我需要買水，因為我很<span class='vocab-highlight' data-word='渴'>渴</span>。還要買一些<span class='vocab-highlight' data-word='食物'>食物</span>。",
                pinyin: "Wǒmen qù chāojí shìchǎng mǎi dōngxi ba. Wǒ xūyào mǎi shuǐ, yīnwèi wǒ hěn kě. Hái yào mǎi yīxiē shíwù.",
                english: "Let's go to the supermarket to buy things. I need to buy water because I'm very thirsty. Also need to buy some food.",
                audio: "audio/part4/dialogue6/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "好的。<span class='vocab-highlight' data-word='超級市場'>超級市場</span>在<span class='vocab-highlight' data-word='書店'>書店</span>的<span class='vocab-highlight' data-word='東'>東</span>邊。我們可以開<span class='vocab-highlight' data-word='汽車'>汽車</span>去，因為東西可能會很<span class='vocab-highlight' data-word='重'>重</span>。",
                pinyin: "Hǎo de. Chāojí shìchǎng zài shūdiàn de dōngbiān. Wǒmen kěyǐ kāi qìchē qù, yīnwèi dōngxi kěnéng huì hěn zhòng.",
                english: "OK. The supermarket is east of the bookstore. We can drive there because the things might be heavy.",
                audio: "audio/part4/dialogue6/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='希望'>希望</span>找到<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='袋子'>袋子</span>，這樣比較容易看到。不要<span class='vocab-highlight' data-word='掉'>掉</span>了你的<span class='vocab-highlight' data-word='皮包'>皮包</span>。",
                pinyin: "Wǒ xīwàng zhǎodào huángsè de dàizi, zhèyàng bǐjiào róngyì kàndào. Bùyào diào le nǐ de píbāo.",
                english: "I hope to find yellow bags, they're easier to see. Don't drop your leather bag.",
                audio: "audio/part4/dialogue6/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "我們可以用<span class='vocab-highlight' data-word='信用卡'>信用卡</span><span class='vocab-highlight' data-word='付'>付</span>錢。買完東西後，我們可以把東西<span class='vocab-highlight' data-word='放'>放</span>在<span class='vocab-highlight' data-word='汽車'>汽車</span>的後面。",
                pinyin: "Wǒmen kěyǐ yòng xìnyòngkǎ fù qián. Mǎi wán dōngxi hòu, wǒmen kěyǐ bǎ dōngxi fàng zài qìchē de hòumiàn.",
                english: "We can pay with credit cards. After buying things, we can put the things in the back of the car.",
                audio: "audio/part4/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "旅行攝影",
        titleTranslation: "Travel Photography",
        context: "Discussing photography during a trip",
        lines: [
            {
                speaker: "A",
                chinese: "我帶了我的新<span class='vocab-highlight' data-word='照相機'>照相機</span>來<span class='vocab-highlight' data-word='旅行'>旅行</span>。這裡的<span class='vocab-highlight' data-word='風景'>風景</span>很美，我想多<span class='vocab-highlight' data-word='照相'>照相</span>。",
                pinyin: "Wǒ dài le wǒ de xīn zhàoxiàngjī lái lǚxíng. Zhèlǐ de fēngjǐng hěn měi, wǒ xiǎng duō zhàoxiàng.",
                english: "I brought my new camera for traveling. The scenery here is beautiful, I want to take more photos.",
                audio: "audio/part4/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "這些<span class='vocab-highlight' data-word='照片'>照片</span>會成為美好的回憶。你可以<span class='vocab-highlight' data-word='放'>放</span>在<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='袋子'>袋子</span>裡，這樣不會<span class='vocab-highlight' data-word='掉'>掉</span>。",
                pinyin: "Zhèxiē zhàopiàn huì chéngwéi měihǎo de huíyì. Nǐ kěyǐ fàng zài huángsè de dàizi lǐ, zhèyàng bù huì diào.",
                english: "These photos will become beautiful memories. You can put them in a yellow bag so they won't drop.",
                audio: "audio/part4/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我<span class='vocab-highlight' data-word='希望'>希望</span>能拍到<span class='vocab-highlight' data-word='北'>北</span>邊的山和<span class='vocab-highlight' data-word='南'>南</span>邊的河。站在<span class='vocab-highlight' data-word='中間'>中間</span>的位置最好。",
                pinyin: "Wǒ xīwàng néng pāi dào běibiān de shān hé nánbiān de hé. Zhàn zài zhōngjiān de wèizhì zuì hǎo.",
                english: "I hope to photograph the mountains in the north and the river in the south. Standing in the middle position is best.",
                audio: "audio/part4/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='小心'>小心</span>不要讓<span class='vocab-highlight' data-word='照相機'>照相機</span><span class='vocab-highlight' data-word='掉'>掉</span>到水裡。我們<span class='vocab-highlight' data-word='最後'>最後</span>可以去<span class='vocab-highlight' data-word='參觀'>參觀</span>那邊的古老<span class='vocab-highlight' data-word='市場'>市場</span>。",
                pinyin: "Xiǎoxīn bùyào ràng zhàoxiàngjī diào dào shuǐ lǐ. Wǒmen zuìhòu kěyǐ qù cānguān nàbiān de gǔlǎo shìchǎng.",
                english: "Be careful not to let the camera drop into the water. Finally we can go visit the old market over there.",
                audio: "audio/part4/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "方向指示",
        titleTranslation: "Giving Directions",
        context: "Helping someone find their way around the city",
        lines: [
            {
                speaker: "A",
                chinese: "請問怎麼去<span class='vocab-highlight' data-word='飛機場'>飛機場</span>？我必須<span class='vocab-highlight' data-word='離開'>離開</span>去<span class='vocab-highlight' data-word='北'>北</span>部出差。",
                pinyin: "Qǐngwèn zěnme qù fēijīchǎng? Wǒ bìxū líkāi qù běibù chūchāi.",
                english: "Excuse me, how do I get to the airport? I must leave for a business trip to the north.",
                audio: "audio/part4/dialogue8/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "從這裡<span class='vocab-highlight' data-word='一直'>一直</span><span class='vocab-highlight' data-word='往'>往</span><span class='vocab-highlight' data-word='西'>西</span>走，<span class='vocab-highlight' data-word='經過'>經過</span>三個<span class='vocab-highlight' data-word='十字路口'>十字路口</span>，然後<span class='vocab-highlight' data-word='向'>向</span><span class='vocab-highlight' data-word='南'>南</span><span class='vocab-highlight' data-word='轉'>轉</span>。<span class='vocab-highlight' data-word='飛機場'>飛機場</span>就在你的右邊。",
                pinyin: "Cóng zhèlǐ yīzhí wǎng xī zǒu, jīngguò sān gè shízì lùkǒu, ránhòu xiàng nán zhuǎn. Fēijīchǎng jiù zài nǐ de yòubiān.",
                english: "From here, go straight west, pass through three crossroads, then turn south. The airport will be on your right.",
                audio: "audio/part4/dialogue8/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "走路會很<span class='vocab-highlight' data-word='遠'>遠</span>嗎？我的<span class='vocab-highlight' data-word='行李'>行李</span>很<span class='vocab-highlight' data-word='重'>重</span>。",
                pinyin: "Zǒulù huì hěn yuǎn ma? Wǒ de xínglǐ hěn zhòng.",
                english: "Is it very far to walk? My luggage is very heavy.",
                audio: "audio/part4/dialogue8/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，有點<span class='vocab-highlight' data-word='遠'>遠</span>。你可以坐<span class='vocab-highlight' data-word='汽車'>汽車</span>去。那裡<span class='vocab-highlight' data-word='離'>離</span>這裡<span class='vocab-highlight' data-word='差不多'>差不多</span>五公里。",
                pinyin: "Shì de, yǒudiǎn yuǎn. Nǐ kěyǐ zuò qìchē qù. Nàlǐ lí zhèlǐ chàbuduō wǔ gōnglǐ.",
                english: "Yes, it's a bit far. You can take a car. It's about five kilometers from here.",
                audio: "audio/part4/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "酒店住宿",
        titleTranslation: "Hotel Stay",
        context: "Checking into a hotel and discussing accommodation",
        lines: [
            {
                speaker: "A",
                chinese: "我們到了<span class='vocab-highlight' data-word='飯店'>飯店</span>。這個<span class='vocab-highlight' data-word='飯店'>飯店</span>在<span class='vocab-highlight' data-word='市場'>市場</span>的<span class='vocab-highlight' data-word='對面'>對面</span>，位置很方便。",
                pinyin: "Wǒmen dào le fàndiàn. Zhège fàndiàn zài shìchǎng de duìmiàn, wèizhì hěn fāngbiàn.",
                english: "We've arrived at the hotel. This hotel is opposite the market, the location is very convenient.",
                audio: "audio/part4/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我可以幫你把<span class='vocab-highlight' data-word='袋子'>袋子</span><span class='vocab-highlight' data-word='送'>送</span>到房間。房間在<span class='vocab-highlight' data-word='東'>東</span>邊，可以看到<span class='vocab-highlight' data-word='風景'>風景</span>。",
                pinyin: "Wǒ kěyǐ bāng nǐ bǎ dàizi sòng dào fángjiān. Fángjiān zài dōngbiān, kěyǐ kàndào fēngjǐng.",
                english: "I can help you send the bag to the room. The room is on the east side, you can see the scenery.",
                audio: "audio/part4/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "謝謝。我<span class='vocab-highlight' data-word='希望'>希望</span>房間裡有<span class='vocab-highlight' data-word='地圖'>地圖</span>，這樣我們可以計劃明天<span class='vocab-highlight' data-word='參觀'>參觀</span>的地方。",
                pinyin: "Xièxie. Wǒ xīwàng fángjiān lǐ yǒu dìtú, zhèyàng wǒmen kěyǐ jìhuà míngtiān cānguān de dìfāng.",
                english: "Thank you. I hope there's a map in the room so we can plan where to visit tomorrow.",
                audio: "audio/part4/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "有的。你也可以問前台要更多信息。<span class='vocab-highlight' data-word='旅館'>旅館</span>的服務員會告訴你哪裡有好的<span class='vocab-highlight' data-word='商店'>商店</span>。",
                pinyin: "Yǒu de. Nǐ yě kěyǐ wèn qiántái yào gèngduō xìnxī. Lǚguǎn de fúwùyuán huì gàosù nǐ nǎlǐ yǒu hǎo de shāngdiàn.",
                english: "Yes there is. You can also ask the front desk for more information. The inn's staff will tell you where good shops are.",
                audio: "audio/part4/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "眼鏡問題",
        titleTranslation: "Glasses Problem",
        context: "Discussing vision problems and getting glasses",
        lines: [
            {
                speaker: "A",
                chinese: "我的<span class='vocab-highlight' data-word='眼鏡'>眼鏡</span>壞了，看不清楚<span class='vocab-highlight' data-word='地圖'>地圖</span>上的字。我需要買一副新的。",
                pinyin: "Wǒ de yǎnjìng huài le, kàn bù qīngchǔ dìtú shàng de zì. Wǒ xūyào mǎi yī fù xīn de.",
                english: "My glasses are broken, I can't see the words on the map clearly. I need to buy a new pair.",
                audio: "audio/part4/dialogue10/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我知道一家很好的<span class='vocab-highlight' data-word='商店'>商店</span>，在<span class='vocab-highlight' data-word='書店'>書店</span><span class='vocab-highlight' data-word='附近'>附近</span>。他們<span class='vocab-highlight' data-word='賣'>賣</span>很多不同<span class='vocab-highlight' data-word='顏色'>顏色</span>的<span class='vocab-highlight' data-word='眼鏡'>眼鏡</span>。",
                pinyin: "Wǒ zhīdào yī jiā hěn hǎo de shāngdiàn, zài shūdiàn fùjìn. Tāmen mài hěnduō bùtóng yánsè de yǎnjìng.",
                english: "I know a very good shop near the bookstore. They sell many different colored glasses.",
                audio: "audio/part4/dialogue10/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我可以<span class='vocab-highlight' data-word='試'>試</span>戴幾副嗎？<span class='vocab-highlight' data-word='戴'>戴</span><span class='vocab-highlight' data-word='眼鏡'>眼鏡</span>對我來說很<span class='vocab-highlight' data-word='重要'>重要</span>，不然我會頭疼。",
                pinyin: "Wǒ kěyǐ shì dài jǐ fù ma? Dài yǎnjìng duì wǒ lái shuō hěn zhòngyào, bùrán wǒ huì tóuténg.",
                english: "Can I try wearing a few pairs? Wearing glasses is very important for me, otherwise I'll get headaches.",
                audio: "audio/part4/dialogue10/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "當然可以。他們也<span class='vocab-highlight' data-word='賣'>賣</span><span class='vocab-highlight' data-word='手錶'>手錶</span>和<span class='vocab-highlight' data-word='皮包'>皮包</span>。你可以用<span class='vocab-highlight' data-word='信用卡'>信用卡</span><span class='vocab-highlight' data-word='付'>付</span>錢。",
                pinyin: "Dāngrán kěyǐ. Tāmen yě mài shǒubiǎo hé píbāo. Nǐ kěyǐ yòng xìnyòngkǎ fù qián.",
                english: "Of course. They also sell watches and leather bags. You can pay with a credit card.",
                audio: "audio/part4/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "市場購物",
        titleTranslation: "Market Shopping",
        context: "Shopping at a traditional market",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='市場'>市場</span>真大！我想買一些新鮮的<span class='vocab-highlight' data-word='食物'>食物</span>和一件<span class='vocab-highlight' data-word='裙子'>裙子</span>。",
                pinyin: "Zhège shìchǎng zhēn dà! Wǒ xiǎng mǎi yīxiē xīnxiān de shíwù hé yī jiàn qúnzi.",
                english: "This market is really big! I want to buy some fresh food and a skirt.",
                audio: "audio/part4/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "那邊有<span class='vocab-highlight' data-word='賣'>賣</span><span class='vocab-highlight' data-word='帽子'>帽子</span>和<span class='vocab-highlight' data-word='襪子'>襪子</span>的攤位。你可以買一<span class='vocab-highlight' data-word='雙'>雙</span><span class='vocab-highlight' data-word='白色'>白色</span>的<span class='vocab-highlight' data-word='襪子'>襪子</span>。",
                pinyin: "Nàbiān yǒu mài màozi hé wàzi de tānwèi. Nǐ kěyǐ mǎi yī shuāng báisè de wàzi.",
                english: "Over there are stalls selling hats and socks. You can buy a pair of white socks.",
                audio: "audio/part4/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='袋子'>袋子</span>很漂亮，我可以<span class='vocab-highlight' data-word='放'>放</span>我買的東西。多少錢？",
                pinyin: "Zhège huángsè de dàizi hěn piàoliang, wǒ kěyǐ fàng wǒ mǎi de dōngxi. Duōshǎo qián?",
                english: "This yellow bag is very pretty, I can put the things I buy in it. How much is it?",
                audio: "audio/part4/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "三十塊。你可以<span class='vocab-highlight' data-word='付'>付</span>現金或者用<span class='vocab-highlight' data-word='信用卡'>信用卡</span>。買完後我們可以去那邊的<span class='vocab-highlight' data-word='商店'>商店</span><span class='vocab-highlight' data-word='參觀'>參觀</span>一下。",
                pinyin: "Sānshí kuài. Nǐ kěyǐ fù xiànjīn huòzhě yòng xìnyòngkǎ. Mǎi wán hòu wǒmen kěyǐ qù nàbiān de shāngdiàn cānguān yīxià.",
                english: "Thirty dollars. You can pay cash or use a credit card. After buying, we can go visit the shop over there.",
                audio: "audio/part4/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "身體檢查",
        titleTranslation: "Physical Examination",
        context: "At a doctor's office for a check-up",
        lines: [
            {
                speaker: "A",
                chinese: "醫生，我的<span class='vocab-highlight' data-word='手指'>手指</span>有點疼，而且我的<span class='vocab-highlight' data-word='頭髮'>頭髮</span>掉了很多。",
                pinyin: "Yīshēng, wǒ de shǒuzhǐ yǒudiǎn téng, érqiě wǒ de tóufa diào le hěnduō.",
                english: "Doctor, my fingers hurt a bit, and I've been losing a lot of hair.",
                audio: "audio/part4/dialogue12/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "讓我檢查一下。你的<span class='vocab-highlight' data-word='心'>心</span>跳正常，但是你的<span class='vocab-highlight' data-word='臉'>臉</span>色不太好。你需要更多<span class='vocab-highlight' data-word='休息'>休息</span>。",
                pinyin: "Ràng wǒ jiǎnchá yīxià. Nǐ de xīn tiào zhèngcháng, dànshì nǐ de liǎnsè bù tài hǎo. Nǐ xūyào gèngduō xiūxi.",
                english: "Let me examine you. Your heart rate is normal, but your complexion isn't very good. You need more rest.",
                audio: "audio/part4/dialogue12/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我的<span class='vocab-highlight' data-word='肚子'>肚子</span>也常常不舒服，感覺很<span class='vocab-highlight' data-word='重'>重</span>。是不是我的<span class='vocab-highlight' data-word='健康'>健康</span>有問題？",
                pinyin: "Wǒ de dùzi yě chángcháng bù shūfu, gǎnjué hěn zhòng. Shì bùshì wǒ de jiànkāng yǒu wèntí?",
                english: "My stomach is also often uncomfortable, it feels very heavy. Is there a problem with my health?",
                audio: "audio/part4/dialogue12/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "別擔心。很多<span class='vocab-highlight' data-word='病人'>病人</span>有類似的問題。我會給你開一些藥，讓你感覺更<span class='vocab-highlight' data-word='舒服'>舒服</span>。",
                pinyin: "Bié dānxīn. Hěnduō bìngrén yǒu lèisì de wèntí. Wǒ huì gěi nǐ kāi yīxiē yào, ràng nǐ gǎnjué gèng shūfu.",
                english: "Don't worry. Many patients have similar problems. I'll prescribe some medicine to make you feel more comfortable.",
                audio: "audio/part4/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "書店購物",
        titleTranslation: "Bookstore Shopping",
        context: "Buying books and stationery at a bookstore",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='書店'>書店</span>很大！我想買一本<span class='vocab-highlight' data-word='地圖'>地圖</span>和一本關於<span class='vocab-highlight' data-word='旅行'>旅行</span>的書。",
                pinyin: "Zhège shūdiàn hěn dà! Wǒ xiǎng mǎi yī běn dìtú hé yī běn guānyú lǚxíng de shū.",
                english: "This bookstore is huge! I want to buy a map and a book about travel.",
                audio: "audio/part4/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='地圖'>地圖</span>在<span class='vocab-highlight' data-word='書店'>書店</span>的<span class='vocab-highlight' data-word='西'>西</span>邊。你可以用那邊的<span class='vocab-highlight' data-word='黃色'>黃色</span><span class='vocab-highlight' data-word='袋子'>袋子</span>裝書。",
                pinyin: "Dìtú zài shūdiàn de xībiān. Nǐ kěyǐ yòng nàbiān de huángsè dàizi zhuāng shū.",
                english: "The maps are in the west of the bookstore. You can use the yellow bags over there to carry books.",
                audio: "audio/part4/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我還需要一支筆，可以<span class='vocab-highlight' data-word='放'>放</span>在我的<span class='vocab-highlight' data-word='皮包'>皮包</span>裡。這支筆很<span class='vocab-highlight' data-word='輕'>輕</span>。",
                pinyin: "Wǒ hái xūyào yī zhī bǐ, kěyǐ fàng zài wǒ de píbāo lǐ. Zhè zhī bǐ hěn qīng.",
                english: "I also need a pen that I can put in my leather bag. This pen is very light.",
                audio: "audio/part4/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的。我們可以去收銀台<span class='vocab-highlight' data-word='付'>付</span>錢。你可以用<span class='vocab-highlight' data-word='信用卡'>信用卡</span>，這樣比較方便。",
                pinyin: "Hǎo de. Wǒmen kěyǐ qù shōuyíntái fù qián. Nǐ kěyǐ yòng xìnyòngkǎ, zhèyàng bǐjiào fāngbiàn.",
                english: "OK. We can go to the cashier to pay. You can use a credit card, that's more convenient.",
                audio: "audio/part4/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "衣物選擇",
        titleTranslation: "Clothing Selection",
        context: "Choosing appropriate clothing for different occasions",
        lines: [
            {
                speaker: "A",
                chinese: "明天我要去面試，應該<span class='vocab-highlight' data-word='戴'>戴</span>什麼<span class='vocab-highlight' data-word='帽子'>帽子</span>？還是應該穿<span class='vocab-highlight' data-word='大衣'>大衣</span>？",
                pinyin: "Míngtiān wǒ yào qù miànshì, yīnggāi dài shénme màozi? Háishì yīnggāi chuān dàyī?",
                english: "I have an interview tomorrow, what hat should I wear? Or should I wear a coat?",
                audio: "audio/part4/dialogue14/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "面試的時候最好不要<span class='vocab-highlight' data-word='戴'>戴</span><span class='vocab-highlight' data-word='帽子'>帽子</span>。你可以穿<span class='vocab-highlight' data-word='白色'>白色</span>的<span class='vocab-highlight' data-word='外套'>外套</span>和黑色的<span class='vocab-highlight' data-word='褲子'>褲子</span>。",
                pinyin: "Miànshì de shíhòu zuìhǎo bùyào dài màozi. Nǐ kěyǐ chuān báisè de wàitào hé hēisè de kùzi.",
                english: "It's best not to wear a hat during an interview. You can wear a white jacket and black pants.",
                audio: "audio/part4/dialogue14/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "這件<span class='vocab-highlight' data-word='裙子'>裙子</span>怎麼樣？還是這條<span class='vocab-highlight' data-word='褲子'>褲子</span>？我需要看起來專業一點。",
                pinyin: "Zhè jiàn qúnzi zěnmeyàng? Háishì zhè tiáo kùzi? Wǒ xūyào kàn qǐlái zhuānyè yīdiǎn.",
                english: "How about this skirt? Or these pants? I need to look more professional.",
                audio: "audio/part4/dialogue14/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='褲子'>褲子</span>比較合適。記得穿一<span class='vocab-highlight' data-word='雙'>雙</span>乾淨的<span class='vocab-highlight' data-word='襪子'>襪子</span>，還有把你的<span class='vocab-highlight' data-word='手錶'>手錶</span><span class='vocab-highlight' data-word='戴'>戴</span>上。",
                pinyin: "Kùzi bǐjiào héshì. Jìde chuān yī shuāng gānjìng de wàzi, hái yǒu bǎ nǐ de shǒubiǎo dài shàng.",
                english: "Pants are more appropriate. Remember to wear a clean pair of socks, and put on your watch.",
                audio: "audio/part4/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "旅行準備",
        titleTranslation: "Travel Preparation",
        context: "Last-minute preparations before a trip",
        lines: [
            {
                speaker: "A",
                chinese: "我們明天<span class='vocab-highlight' data-word='離開'>離開</span>去<span class='vocab-highlight' data-word='旅行'>旅行</span>。我需要檢查我的<span class='vocab-highlight' data-word='袋子'>袋子</span>，看看有沒有忘記什麼東西。",
                pinyin: "Wǒmen míngtiān líkāi qù lǚxíng. Wǒ xūyào jiǎnchá wǒ de dàizi, kànkan yǒu méiyǒu wàngjì shénme dōngxi.",
                english: "We leave for our trip tomorrow. I need to check my bag to see if I've forgotten anything.",
                audio: "audio/part4/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='照相機'>照相機</span>帶了嗎？<span class='vocab-highlight' data-word='地圖'>地圖</span>呢？還有<span class='vocab-highlight' data-word='信用卡'>信用卡</span>和<span class='vocab-highlight' data-word='手錶'>手錶</span>？",
                pinyin: "Zhàoxiàngjī dài le ma? Dìtú ne? Hái yǒu xìnyòngkǎ hé shǒubiǎo?",
                english: "Did you bring the camera? The map? And credit cards and watch?",
                audio: "audio/part4/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "都帶了。我還帶了<span class='vocab-highlight' data-word='白色'>白色</span>的<span class='vocab-highlight' data-word='襪子'>襪子</span>和<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='外套'>外套</span>。希望天氣會好，這樣我們可以多<span class='vocab-highlight' data-word='照相'>照相</span>。",
                pinyin: "Dōu dài le. Wǒ hái dài le báisè de wàzi hé huángsè de wàitào. Xīwàng tiānqì huì hǎo, zhèyàng wǒmen kěyǐ duō zhàoxiàng.",
                english: "All brought. I also brought white socks and a yellow jacket. Hope the weather will be good so we can take more photos.",
                audio: "audio/part4/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='最後'>最後</span>檢查一下你的<span class='vocab-highlight' data-word='皮包'>皮包</span>，不要<span class='vocab-highlight' data-word='掉'>掉</span>了<span class='vocab-highlight' data-word='重要'>重要</span>的東西。明天<span class='vocab-highlight' data-word='飛機場'>飛機場</span>見！",
                pinyin: "Zuìhòu jiǎnchá yīxià nǐ de píbāo, bùyào diào le zhòngyào de dōngxi. Míngtiān fēijīchǎng jiàn!",
                english: "Finally check your leather bag, don't drop important things. See you at the airport tomorrow!",
                audio: "audio/part4/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "方向困惑",
        titleTranslation: "Direction Confusion",
        context: "Getting lost and asking for help",
        lines: [
            {
                speaker: "A",
                chinese: "我好像迷路了。這個<span class='vocab-highlight' data-word='十字路口'>十字路口</span>看起來都<span class='vocab-highlight' data-word='差不多'>差不多</span>。我的<span class='vocab-highlight' data-word='飯店'>飯店</span>在哪個方向？",
                pinyin: "Wǒ hǎoxiàng mílù le. Zhège shízì lùkǒu kàn qǐlái dōu chàbuduō. Wǒ de fàndiàn zài nǎge fāngxiàng?",
                english: "I think I'm lost. These crossroads all look almost the same. Which direction is my hotel?",
                audio: "audio/part4/dialogue16/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你的<span class='vocab-highlight' data-word='飯店'>飯店</span>叫什麼名字？如果它在<span class='vocab-highlight' data-word='市場'>市場</span><span class='vocab-highlight' data-word='對面'>對面</span>，你應該<span class='vocab-highlight' data-word='往'>往</span><span class='vocab-highlight' data-word='南'>南</span>走。",
                pinyin: "Nǐ de fàndiàn jiào shénme míngzi? Rúguǒ tā zài shìchǎng duìmiàn, nǐ yīnggāi wǎng nán zǒu.",
                english: "What's the name of your hotel? If it's opposite the market, you should go south.",
                audio: "audio/part4/dialogue16/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "叫\"陽光<span class='vocab-highlight' data-word='旅館'>旅館</span>\"。我記得它<span class='vocab-highlight' data-word='離'>離</span>一個<span class='vocab-highlight' data-word='書店'>書店</span>很<span class='vocab-highlight' data-word='近'>近</span>。",
                pinyin: "Jiào \"yángguāng lǚguǎn\". Wǒ jìde tā lí yī gè shūdiàn hěn jìn.",
                english: "It's called \"Sunshine Inn\". I remember it's very close to a bookstore.",
                audio: "audio/part4/dialogue16/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "哦，我知道。從這裡<span class='vocab-highlight' data-word='一直'>一直</span><span class='vocab-highlight' data-word='往'>往</span><span class='vocab-highlight' data-word='東'>東</span>走，在第一個<span class='vocab-highlight' data-word='路口'>路口</span><span class='vocab-highlight' data-word='向'>向</span><span class='vocab-highlight' data-word='北'>北</span><span class='vocab-highlight' data-word='轉'>轉</span>。就在你的左邊。",
                pinyin: "Ò, wǒ zhīdào. Cóng zhèlǐ yīzhí wǎng dōng zǒu, zài dì yī gè lùkǒu xiàng běi zhuǎn. Jiù zài nǐ de zuǒbiān.",
                english: "Oh, I know. From here, go straight east, at the first intersection turn north. It's on your left.",
                audio: "audio/part4/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue16/dialogue.mp3"
    },
    {
        id: 17,
        title: "購物比較",
        titleTranslation: "Shopping Comparison",
        context: "Comparing prices and quality between different stores",
        lines: [
            {
                speaker: "A",
                chinese: "這個<span class='vocab-highlight' data-word='商店'>商店</span>的<span class='vocab-highlight' data-word='大衣'>大衣</span>比那個<span class='vocab-highlight' data-word='市場'>市場</span>的<span class='vocab-highlight' data-word='比較'>比較</span>貴，但是質量更好。",
                pinyin: "Zhège shāngdiàn de dàyī bǐ nàgè shìchǎng de bǐjiào guì, dànshì zhìliàng gèng hǎo.",
                english: "The coats in this shop are more expensive compared to that market, but the quality is better.",
                audio: "audio/part4/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。這個<span class='vocab-highlight' data-word='皮包'>皮包</span>也<span class='vocab-highlight' data-word='比較'>比較</span><span class='vocab-highlight' data-word='輕'>輕</span>，更容易攜帶。你需要<span class='vocab-highlight' data-word='付'>付</span>多少錢？",
                pinyin: "Wǒ tóngyì. Zhège píbāo yě bǐjiào qīng, gèng róngyì xiédài. Nǐ xūyào fù duōshǎo qián?",
                english: "I agree. This leather bag is also relatively light, easier to carry. How much do you need to pay?",
                audio: "audio/part4/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='差不多'>差不多</span>三百塊。我可以用<span class='vocab-highlight' data-word='信用卡'>信用卡</span><span class='vocab-highlight' data-word='付'>付</span>。這個<span class='vocab-highlight' data-word='顏色'>顏色</span>我很喜歡，是深<span class='vocab-highlight' data-word='黃色'>黃色</span>的。",
                pinyin: "Chàbuduō sānbǎi kuài. Wǒ kěyǐ yòng xìnyòngkǎ fù. Zhège yánsè wǒ hěn xǐhuān, shì shēn huángsè de.",
                english: "About three hundred dollars. I can pay with a credit card. I really like this color, it's dark yellow.",
                audio: "audio/part4/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的。買完後我們可以去那邊的<span class='vocab-highlight' data-word='超級市場'>超級市場</span>買一些水，我有點<span class='vocab-highlight' data-word='渴'>渴</span>了。",
                pinyin: "Hǎo de. Mǎi wán hòu wǒmen kěyǐ qù nàbiān de chāojí shìchǎng mǎi yīxiē shuǐ, wǒ yǒudiǎn kě le.",
                english: "OK. After buying, we can go to the supermarket over there to buy some water, I'm a bit thirsty.",
                audio: "audio/part4/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue17/dialogue.mp3"
    },
    {
        id: 18,
        title: "健康建議",
        titleTranslation: "Health Advice",
        context: "Discussing healthy lifestyle habits",
        lines: [
            {
                speaker: "A",
                chinese: "醫生說我的<span class='vocab-highlight' data-word='健康'>健康</span>狀況不太好。我的<span class='vocab-highlight' data-word='心'>心</span>跳太快，而且常常覺得<span class='vocab-highlight' data-word='渴'>渴</span>。",
                pinyin: "Yīshēng shuō wǒ de jiànkāng zhuàngkuàng bù tài hǎo. Wǒ de xīn tiào tài kuài, érqiě chángcháng juéde kě.",
                english: "The doctor said my health condition isn't very good. My heart beats too fast, and I often feel thirsty.",
                audio: "audio/part4/dialogue18/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "你需要多運動，比如走路去<span class='vocab-highlight' data-word='商店'>商店</span>而不是開<span class='vocab-highlight' data-word='汽車'>汽車</span>。這樣對你的<span class='vocab-highlight' data-word='身體'>身體</span>更好。",
                pinyin: "Nǐ xūyào duō yùndòng, bǐrú zǒulù qù shāngdiàn ér bùshì kāi qìchē. Zhèyàng duì nǐ de shēntǐ gèng hǎo.",
                english: "You need more exercise, like walking to the shop instead of driving a car. That's better for your body.",
                audio: "audio/part4/dialogue18/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我也應該少吃一點。我的<span class='vocab-highlight' data-word='肚子'>肚子</span>常常感覺很<span class='vocab-highlight' data-word='重'>重</span>，不舒服。",
                pinyin: "Wǒ yě yīnggāi shǎo chī yīdiǎn. Wǒ de dùzi chángcháng gǎnjué hěn zhòng, bù shūfu.",
                english: "I should also eat less. My stomach often feels very heavy and uncomfortable.",
                audio: "audio/part4/dialogue18/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "對。多吃蔬菜和水果，少喝甜的飲料。你會慢慢感覺更<span class='vocab-highlight' data-word='舒服'>舒服</span>。你的<span class='vocab-highlight' data-word='頭髮'>頭髮</span>和<span class='vocab-highlight' data-word='臉'>臉</span>色也會變得更好。",
                pinyin: "Duì. Duō chī shūcài hé shuǐguǒ, shǎo hē tián de yǐnliào. Nǐ huì mànman gǎnjué gèng shūfu. Nǐ de tóufa hé liǎnsè yě huì biàn de gèng hǎo.",
                english: "Right. Eat more vegetables and fruit, drink fewer sweet beverages. You'll gradually feel more comfortable. Your hair and complexion will also become better.",
                audio: "audio/part4/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue18/dialogue.mp3"
    },
    {
        id: 19,
        title: "旅行總結",
        titleTranslation: "Travel Summary",
        context: "Summarizing a trip and sharing experiences",
        lines: [
            {
                speaker: "A",
                chinese: "這次<span class='vocab-highlight' data-word='旅行'>旅行</span>真愉快！我們<span class='vocab-highlight' data-word='參觀'>參觀</span>了很多地方，拍了很多<span class='vocab-highlight' data-word='照片'>照片</span>。",
                pinyin: "Zhè cì lǚxíng zhēn yúkuài! Wǒmen cānguān le hěnduō dìfāng, pāi le hěnduō zhàopiàn.",
                english: "This trip was really enjoyable! We visited many places and took many photos.",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='南'>南</span>部的<span class='vocab-highlight' data-word='風景'>風景</span>很美，<span class='vocab-highlight' data-word='北'>北</span>部的<span class='vocab-highlight' data-word='市場'>市場</span>也很有趣。我的<span class='vocab-highlight' data-word='照相機'>照相機</span>裡裝滿了美好的回憶。",
                pinyin: "Shì de, nánbù de fēngjǐng hěn měi, běibù de shìchǎng yě hěn yǒuqù. Wǒ de zhàoxiàngjī lǐ zhuāngmǎn le měihǎo de huíyì.",
                english: "Yes, the scenery in the south is beautiful, and the markets in the north are also interesting. My camera is filled with beautiful memories.",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "我買了一件<span class='vocab-highlight' data-word='黃色'>黃色</span>的<span class='vocab-highlight' data-word='外套'>外套</span>和一<span class='vocab-highlight' data-word='雙'>雙</span><span class='vocab-highlight' data-word='白色'>白色</span>的<span class='vocab-highlight' data-word='襪子'>襪子</span>。下次<span class='vocab-highlight' data-word='旅行'>旅行</span>我會帶更<span class='vocab-highlight' data-word='輕'>輕</span>的<span class='vocab-highlight' data-word='袋子'>袋子</span>。",
                pinyin: "Wǒ mǎi le yī jiàn huángsè de wàitào hé yī shuāng báisè de wàzi. Xià cì lǚxíng wǒ huì dài gèng qīng de dàizi.",
                english: "I bought a yellow jacket and a pair of white socks. Next trip I'll bring a lighter bag.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='最後'>最後</span>，感謝你和我一起<span class='vocab-highlight' data-word='旅行'>旅行</span>。我們學到了很多新詞彙，也體驗了不同的文化。讓我們計劃下一次的<span class='vocab-highlight' data-word='旅行'>旅行</span>吧！",
                pinyin: "Zuìhòu, gǎnxiè nǐ hé wǒ yīqǐ lǚxíng. Wǒmen xué dào le hěnduō xīn cíhuì, yě tǐyàn le bùtóng de wénhuà. Ràng wǒmen jìhuà xià yī cì de lǚxíng ba!",
                english: "Finally, thank you for traveling with me. We learned many new vocabulary words and experienced different cultures. Let's plan our next trip!",
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