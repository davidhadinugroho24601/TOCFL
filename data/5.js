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
        title: "購物場所與逛街", 
        subtitle: "Shopping Places and Window Shopping", 
        icon: "🏬" 
    },
    { 
        title: "購物體驗與支付", 
        subtitle: "Shopping Experience and Payment", 
        icon: "💳" 
    },
    { 
        title: "顏色與時尚", 
        subtitle: "Colors and Fashion", 
        icon: "🎨" 
    },
    { 
        title: "服裝與配件", 
        subtitle: "Clothing and Accessories", 
        icon: "👕" 
    },
    { 
        title: "金錢與交易", 
        subtitle: "Money and Transactions", 
        icon: "💰" 
    },
    { 
        title: "商品品質與評價", 
        subtitle: "Product Quality and Evaluation", 
        icon: "⭐" 
    },
    { 
        title: "包裝與容器", 
        subtitle: "Packaging and Containers", 
        icon: "📦" 
    },
    { 
        title: "肉類與海鮮", 
        subtitle: "Meat and Seafood", 
        icon: "🍖" 
    },
    { 
        title: "主食與小吃", 
        subtitle: "Staple Foods and Snacks", 
        icon: "🍚" 
    },
    { 
        title: "水果與飲料", 
        subtitle: "Fruits and Beverages", 
        icon: "🍎" 
    },
    { 
        title: "調味與甜點", 
        subtitle: "Seasonings and Desserts", 
        icon: "🍰" 
    },
    { 
        title: "食物品質與描述", 
        subtitle: "Food Quality and Description", 
        icon: "👃" 
    },
    { 
        title: "烹飪方法", 
        subtitle: "Cooking Methods", 
        icon: "👨‍🍳" 
    },
    { 
        title: "邏輯與必要性", 
        subtitle: "Logic and Necessity", 
        icon: "🔍" 
    },
    { 
        title: "可能性與推測", 
        subtitle: "Possibility and Speculation", 
        icon: "🤔" 
    },
    { 
        title: "程度與評價", 
        subtitle: "Degree and Evaluation", 
        icon: "📊" 
    },
    { 
        title: "列舉與選擇", 
        subtitle: "Enumeration and Choice", 
        icon: "📝" 
    },
    { 
        title: "例外與對比", 
        subtitle: "Exceptions and Contrast", 
        icon: "↔️" 
    },
    { 
        title: "現代與傳統", 
        subtitle: "Modern vs Traditional", 
        icon: "🏮"
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
    { chinese: "百貨公司", pinyin: "bǎihuò gōngsī", english: "department store", audio: "audio/part4/words/baihuogongsi.mp3" },
    { chinese: "夜市", pinyin: "yèshì", english: "night market", audio: "audio/part4/words/yeshi.mp3" },
    { chinese: "逛", pinyin: "guàng", english: "to stroll, to roam", audio: "audio/part4/words/guang.mp3" },
    { chinese: "逛街", pinyin: "guàngjiē", english: "to go window shopping", audio: "audio/part4/words/guangjie.mp3" },
    { chinese: "排隊", pinyin: "páiduì", english: "to line up, queue", audio: "audio/part4/words/paidui.mp3" },
    { chinese: "客滿", pinyin: "kèmǎn", english: "full house, no vacancy", audio: "audio/part4/words/keman.mp3" },
    { chinese: "刷卡", pinyin: "shuākǎ", english: "to swipe a card", audio: "audio/part4/words/shua.mp3" },
    { chinese: "提", pinyin: "tí", english: "to carry, to lift", audio: "audio/part4/words/ti.mp3" },
    { chinese: "流行", pinyin: "liúxíng", english: "fashionable, popular", audio: "audio/part4/words/liuxing.mp3" },
    { chinese: "藍色", pinyin: "lánsè", english: "blue", audio: "audio/part4/words/lanse.mp3" },
    { chinese: "綠色", pinyin: "lǜsè", english: "green", audio: "audio/part4/words/luse.mp3" },
    { chinese: "紅色", pinyin: "hóngsè", english: "red", audio: "audio/part4/words/hongse.mp3" },
    { chinese: "黑色", pinyin: "hēisè", english: "black", audio: "audio/part4/words/heise.mp3" },
    { chinese: "毛衣", pinyin: "máoyī", english: "sweater", audio: "audio/part4/words/maoyi.mp3" },
    { chinese: "雨衣", pinyin: "yǔyī", english: "raincoat", audio: "audio/part4/words/yuyi.mp3" },
    { chinese: "內衣", pinyin: "nèiyī", english: "underwear", audio: "audio/part4/words/neiyi.mp3" },
    { chinese: "上衣", pinyin: "shàngyī", english: "upper garment, top", audio: "audio/part4/words/shangyi.mp3" },
    { chinese: "皮鞋", pinyin: "píxié", english: "leather shoes", audio: "audio/part4/words/pixie.mp3" },
    { chinese: "手套", pinyin: "shǒutào", english: "gloves", audio: "audio/part4/words/shoutao.mp3" },
    { chinese: "口袋", pinyin: "kǒudai", english: "pocket", audio: "audio/part4/words/koudai.mp3" },
    { chinese: "小費", pinyin: "xiǎofèi", english: "tip", audio: "audio/part4/words/xiaofei.mp3" },
    { chinese: "打折", pinyin: "dǎzhé", english: "to give a discount", audio: "audio/part4/words/dazhe.mp3" },
    { chinese: "零錢", pinyin: "língqián", english: "change, coins", audio: "audio/part4/words/lingqian.mp3" },
    { chinese: "零用錢", pinyin: "língyòngqián", english: "pocket money", audio: "audio/part4/words/lingyongqian.mp3" },
    { chinese: "存", pinyin: "cún", english: "to save, to deposit", audio: "audio/part4/words/cun.mp3" },
    { chinese: "毛", pinyin: "máo", english: "hair, fur", audio: "audio/part4/words/mao.mp3" },
    { chinese: "高級", pinyin: "gāojí", english: "high-class, luxurious", audio: "audio/part4/words/gaoji.mp3" },
    { chinese: "一般", pinyin: "yībān", english: "ordinary, general", audio: "audio/part4/words/yiban.mp3" },
    { chinese: "合適", pinyin: "héshì", english: "suitable, appropriate", audio: "audio/part4/words/heshi.mp3" },
    { chinese: "適合", pinyin: "shìhé", english: "to suit, to fit", audio: "audio/part4/words/shihe.mp3" },
    { chinese: "圓", pinyin: "yuán", english: "round", audio: "audio/part4/words/yuan.mp3" },
    { chinese: "光", pinyin: "guāng", english: "light, bare", audio: "audio/part4/words/guang.mp3" },
    { chinese: "死", pinyin: "sǐ", english: "dead, extremely", audio: "audio/part4/words/si.mp3" },
    { chinese: "髒", pinyin: "zāng", english: "dirty", audio: "audio/part4/words/zang.mp3" },
    { chinese: "破", pinyin: "pò", english: "broken, torn", audio: "audio/part4/words/po.mp3" },
    { chinese: "袋", pinyin: "dài", english: "bag, sack", audio: "audio/part4/words/dai.mp3" },
    { chinese: "套", pinyin: "tào", english: "set, suit", audio: "audio/part4/words/tao.mp3" },
    { chinese: "沙拉", pinyin: "shālā", english: "salad", audio: "audio/part4/words/shala.mp3" },
    { chinese: "牛排", pinyin: "niúpái", english: "steak", audio: "audio/part4/words/niupai.mp3" },
    { chinese: "海鮮", pinyin: "hǎixiān", english: "seafood", audio: "audio/part4/words/haixian.mp3" },
    { chinese: "火腿", pinyin: "huǒtuǐ", english: "ham", audio: "audio/part4/words/huotui.mp3" },
    { chinese: "熱狗", pinyin: "règǒu", english: "hot dog", audio: "audio/part4/words/regou.mp3" },
    { chinese: "饅頭", pinyin: "mántou", english: "steamed bun", audio: "audio/part4/words/mantou.mp3" },
    { chinese: "米", pinyin: "mǐ", english: "rice", audio: "audio/part4/words/mi.mp3" },
    { chinese: "豆腐", pinyin: "dòufu", english: "tofu", audio: "audio/part4/words/doufu.mp3" },
    { chinese: "橘(子)", pinyin: "jú(zi)", english: "orange", audio: "audio/part4/words/juzi.mp3" },
    { chinese: "葡萄", pinyin: "pútáo", english: "grape", audio: "audio/part4/words/putao.mp3" },
    { chinese: "芒果", pinyin: "mángguǒ", english: "mango", audio: "audio/part4/words/mangguo.mp3" },
    { chinese: "烏龍茶", pinyin: "wūlóngchá", english: "oolong tea", audio: "audio/part4/words/wulongcha.mp3" },
    { chinese: "豆漿", pinyin: "dòujiāng", english: "soy milk", audio: "audio/part4/words/doujiang.mp3" },
    { chinese: "可樂", pinyin: "kělè", english: "cola", audio: "audio/part4/words/kele.mp3" },
    { chinese: "奶茶", pinyin: "nǎichá", english: "milk tea", audio: "audio/part4/words/naicha.mp3" },
    { chinese: "汽水", pinyin: "qìshuǐ", english: "soda, soft drink", audio: "audio/part4/words/qishui.mp3" },
    { chinese: "冰塊/冰塊兒", pinyin: "bīngkuài/bīngkuàir", english: "ice cube", audio: "audio/part4/words/bingkuai.mp3" },
    { chinese: "甜點", pinyin: "tiándiǎn", english: "dessert", audio: "audio/part4/words/tiandian.mp3" },
    { chinese: "餅乾", pinyin: "bǐnggān", english: "cookies, biscuits", audio: "audio/part4/words/binggan.mp3" },
    { chinese: "鹽", pinyin: "yán", english: "salt", audio: "audio/part4/words/yan.mp3" },
    { chinese: "味/味兒", pinyin: "wèi/wèir", english: "taste, flavor", audio: "audio/part4/words/wei.mp3" },
    { chinese: "聞", pinyin: "wén", english: "to smell, to hear", audio: "audio/part4/words/wen.mp3" },
    { chinese: "臭", pinyin: "chòu", english: "stinky, smelly", audio: "audio/part4/words/chou.mp3" },
    { chinese: "口", pinyin: "kǒu", english: "mouth, opening", audio: "audio/part4/words/kou.mp3" },
    { chinese: "罐", pinyin: "guàn", english: "can, jar", audio: "audio/part4/words/guan.mp3" },
    { chinese: "顆", pinyin: "kē", english: "measure word for small round objects", audio: "audio/part4/words/ke.mp3" },
    { chinese: "任何", pinyin: "rènhé", english: "any, whatever", audio: "audio/part4/words/renhe.mp3" },
    { chinese: "許多", pinyin: "xǔduō", english: "many, much", audio: "audio/part4/words/xuduo.mp3" },
    { chinese: "新鮮", pinyin: "xīnxiān", english: "fresh", audio: "audio/part4/words/xinxian.mp3" },
    { chinese: "熟", pinyin: "shú", english: "cooked, ripe, familiar", audio: "audio/part4/words/shu.mp3" },
    { chinese: "炒", pinyin: "chǎo", english: "to stir-fry", audio: "audio/part4/words/chao.mp3" },
    { chinese: "炸", pinyin: "zhá", english: "to deep-fry", audio: "audio/part4/words/zha.mp3" },
    { chinese: "嚐/嘗", pinyin: "cháng", english: "to taste, to try", audio: "audio/part4/words/chang.mp3" },
    { chinese: "裝", pinyin: "zhuāng", english: "to install, to pretend", audio: "audio/part4/words/zhuang.mp3" },
    { chinese: "不用", pinyin: "bùyòng", english: "no need to, don't have to", audio: "audio/part4/words/buyong.mp3" },
    { chinese: "不但", pinyin: "bùdàn", english: "not only", audio: "audio/part4/words/budan.mp3" },
    { chinese: "不必", pinyin: "bùbì", english: "not necessary, need not", audio: "audio/part4/words/bubi.mp3" },
    { chinese: "不得了", pinyin: "bùdéliǎo", english: "extremely, terrible", audio: "audio/part4/words/budeliao.mp3" },
    { chinese: "不管", pinyin: "bùguǎn", english: "no matter, regardless", audio: "audio/part4/words/buguan.mp3" },
    { chinese: "只好", pinyin: "zhǐhǎo", english: "have no choice but to", audio: "audio/part4/words/zhihao.mp3" },
    { chinese: "或", pinyin: "huò", english: "or", audio: "audio/part4/words/huo.mp3" },
    { chinese: "可能", pinyin: "kěnéng", english: "possible, maybe", audio: "audio/part4/words/keneng.mp3" },
    { chinese: "而且", pinyin: "érqiě", english: "moreover, and also", audio: "audio/part4/words/erqie.mp3" },
    { chinese: "原來", pinyin: "yuánlái", english: "originally, as it turns out", audio: "audio/part4/words/yuanlai.mp3" },
    { chinese: "也許", pinyin: "yěxǔ", english: "perhaps, maybe", audio: "audio/part4/words/yexu.mp3" },
    { chinese: "必須", pinyin: "bìxū", english: "must, have to", audio: "audio/part4/words/bixu.mp3" },
    { chinese: "多麼", pinyin: "duōme", english: "how (exclamatory)", audio: "audio/part4/words/duome.mp3" },
    { chinese: "這樣", pinyin: "zhèyàng", english: "like this, such", audio: "audio/part4/words/zheyang.mp3" },
    { chinese: "那樣", pinyin: "nàyàng", english: "like that, such", audio: "audio/part4/words/nayang.mp3" },
    { chinese: "等/等等", pinyin: "děng/děngděng", english: "and so on, wait", audio: "audio/part4/words/deng.mp3" },
    { chinese: "別的", pinyin: "biéde", english: "other, else", audio: "audio/part4/words/biede.mp3" },
    { chinese: "除了", pinyin: "chúle", english: "except, besides", audio: "audio/part4/words/chule.mp3" }
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    {
        id: 1,
        title: "購物場所與逛街",
        titleTranslation: "Shopping Places and Window Shopping",
        context: "Two friends discussing where to go shopping",
        lines: [
            {
                speaker: "A",
                chinese: "這個週末你想去哪裡？我想去<span class='vocab-highlight' data-word='百貨公司'>百貨公司</span>看看<span class='vocab-highlight' data-word='流行'>流行</span>的衣服。",
                pinyin: "Zhège zhōumò nǐ xiǎng qù nǎlǐ? Wǒ xiǎng qù bǎihuò gōngsī kàn kàn liúxíng de yīfu.",
                english: "Where do you want to go this weekend? I want to go to the department store to look at fashionable clothes.",
                audio: "audio/part4/dialogue1/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我更喜歡去<span class='vocab-highlight' data-word='夜市'>夜市</span>，那裡有很多小吃和便宜的東西。我們可以<span class='vocab-highlight' data-word='逛'>逛</span>一整天！",
                pinyin: "Wǒ gèng xǐhuān qù yèshì, nàlǐ yǒu hěnduō xiǎochī hé piányí de dōngxi. Wǒmen kěyǐ guàng yī zhěng tiān!",
                english: "I prefer going to the night market, there's lots of snacks and cheap things there. We can stroll all day!",
                audio: "audio/part4/dialogue1/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好啊，我們可以先去<span class='vocab-highlight' data-word='逛街'>逛街</span>，然後吃晚餐。不過週末常常要<span class='vocab-highlight' data-word='排隊'>排隊</span>，人很多。",
                pinyin: "Hǎo a, wǒmen kěyǐ xiān qù guàngjiē, ránhòu chī wǎncān. Bùguò zhōumò chángcháng yào páiduì, rén hěnduō.",
                english: "Okay, we can go window shopping first, then eat dinner. But on weekends you often have to queue, there are many people.",
                audio: "audio/part4/dialogue1/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "沒關係，如果餐廳<span class='vocab-highlight' data-word='客滿'>客滿</span>了，我們可以去<span class='vocab-highlight' data-word='別的'>別的</span>地方。夜市<span class='vocab-highlight' data-word='除了'>除了</span>吃的，還有衣服和飾品。",
                pinyin: "Méiguānxi, rúguǒ cāntīng kèmǎn le, wǒmen kěyǐ qù biéde dìfāng. Yèshì chúle chī de, hái yǒu yīfu hé shìpǐn.",
                english: "It's okay, if the restaurant is full, we can go somewhere else. Besides food, the night market also has clothes and accessories.",
                audio: "audio/part4/dialogue1/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue1/dialogue.mp3"
    },
    {
        id: 2,
        title: "購物體驗與支付",
        titleTranslation: "Shopping Experience and Payment",
        context: "Discussing shopping payment methods",
        lines: [
            {
                speaker: "B",
                chinese: "你買這件毛衣花了多少錢？我想用信用卡<span class='vocab-highlight' data-word='刷卡'>刷卡</span>付款。",
                pinyin: "Nǐ mǎi zhè jiàn máoyī huā le duōshǎo qián? Wǒ xiǎng yòng xìnyòngkǎ shuākǎ fùkuǎn.",
                english: "How much did you spend on this sweater? I want to use my credit card to swipe and pay.",
                audio: "audio/part4/dialogue2/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "五百元。我建議你帶<span class='vocab-highlight' data-word='零錢'>零錢</span>，因為有些小店只收現金。<span class='vocab-highlight' data-word='提'>提</span>醒你，東西買太多會很重。",
                pinyin: "Wǔbǎi yuán. Wǒ jiànyì nǐ dài língqián, yīnwèi yǒuxiē xiǎo diàn zhǐ shōu xiànjīn. Tí xǐng nǐ, dōngxi mǎi tài duō huì hěn zhòng.",
                english: "Five hundred yuan. I suggest you bring change, because some small shops only accept cash. Reminding you, if you buy too many things it will be heavy.",
                audio: "audio/part4/dialogue2/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "好的，我會注意。我每個月都會把<span class='vocab-highlight' data-word='零用錢'>零用錢</span><span class='vocab-highlight' data-word='存'>存</span>一些起來，這樣想買東西的時候就有錢了。",
                pinyin: "Hǎo de, wǒ huì zhùyì. Wǒ měi gè yuè dōu huì bǎ língyòngqián cún yīxiē qǐlái, zhèyàng xiǎng mǎi dōngxi de shíhòu jiù yǒu qián le.",
                english: "Okay, I'll pay attention. Every month I save some of my pocket money, so when I want to buy things I have money.",
                audio: "audio/part4/dialogue2/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "聰明的做法！<span class='vocab-highlight' data-word='不管'>不管</span>是用現金<span class='vocab-highlight' data-word='或'>或</span>是刷卡，都要注意預算。",
                pinyin: "Cōngmíng de zuòfǎ! Bùguǎn shì yòng xiànjīn huò shì shuākǎ, dōu yào zhùyì yùsuàn.",
                english: "Smart approach! No matter if using cash or swiping a card, you need to pay attention to your budget.",
                audio: "audio/part4/dialogue2/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue2/dialogue.mp3"
    },
    {
        id: 3,
        title: "顏色與時尚",
        titleTranslation: "Colors and Fashion",
        context: "Discussing color preferences in fashion",
        lines: [
            {
                speaker: "A",
                chinese: "你喜歡什麼顏色的衣服？我覺得<span class='vocab-highlight' data-word='藍色'>藍色</span>和<span class='vocab-highlight' data-word='綠色'>綠色</span>很適合春天。",
                pinyin: "Nǐ xǐhuān shénme yánsè de yīfu? Wǒ juédé lánsè hé lǜsè hěn shìhé chūntiān.",
                english: "What color clothes do you like? I think blue and green are very suitable for spring.",
                audio: "audio/part4/dialogue3/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我比較喜歡<span class='vocab-highlight' data-word='紅色'>紅色</span>和<span class='vocab-highlight' data-word='黑色'>黑色</span>。<span class='vocab-highlight' data-word='紅色'>紅色</span>看起來很熱情，<span class='vocab-highlight' data-word='黑色'>黑色</span>則很經典。",
                pinyin: "Wǒ bǐjiào xǐhuān hóngsè hé hēisè. Hóngsè kàn qǐlái hěn rèqíng, hēisè zé hěn jīngdiǎn.",
                english: "I prefer red and black. Red looks very passionate, while black is very classic.",
                audio: "audio/part4/dialogue3/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='多麼'>多麼</span>漂亮的顏色！<span class='vocab-highlight' data-word='這樣'>這樣</span>搭配起來一定很好看。<span class='vocab-highlight' data-word='原來'>原來</span>你對顏色這麼有研究。",
                pinyin: "Duōme piàoliang de yánsè! Zhèyàng dāpèi qǐlái yīdìng hěn hǎokàn. Yuánlái nǐ duì yánsè zhème yǒu yánjiū.",
                english: "How beautiful colors! Such combinations must look very good. So you have such knowledge about colors.",
                audio: "audio/part4/dialogue3/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝！我<span class='vocab-highlight' data-word='必須'>必須</span>說，<span class='vocab-highlight' data-word='任何'>任何</span>顏色只要搭配得好，都會很時尚。",
                pinyin: "Xièxiè! Wǒ bìxū shuō, rènhé yánsè zhǐyào dāpèi dé hǎo, dōu huì hěn shíshàng.",
                english: "Thank you! I must say, any color as long as it's matched well, will be very fashionable.",
                audio: "audio/part4/dialogue3/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue3/dialogue.mp3"
    },
    {
        id: 4,
        title: "服裝與配件",
        titleTranslation: "Clothing and Accessories",
        context: "Talking about different types of clothing",
        lines: [
            {
                speaker: "B",
                chinese: "今天天氣很冷，我穿了<span class='vocab-highlight' data-word='毛衣'>毛衣</span>和<span class='vocab-highlight' data-word='雨衣'>雨衣</span>。你的<span class='vocab-highlight' data-word='上衣'>上衣</span>看起來很暖和。",
                pinyin: "Jīntiān tiānqì hěn lěng, wǒ chuān le máoyī hé yǔyī. Nǐ de shàngyī kàn qǐlái hěn nuǎnhuo.",
                english: "Today's weather is very cold, I'm wearing a sweater and raincoat. Your top looks very warm.",
                audio: "audio/part4/dialogue4/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，我還穿了<span class='vocab-highlight' data-word='皮鞋'>皮鞋</span>和<span class='vocab-highlight' data-word='手套'>手套</span>。我的<span class='vocab-highlight' data-word='口袋'>口袋</span>裡有錢包和手機。",
                pinyin: "Shì de, wǒ hái chuān le píxié hé shǒutào. Wǒ de kǒudai lǐ yǒu qiánbāo hé shǒujī.",
                english: "Yes, I'm also wearing leather shoes and gloves. In my pocket there's a wallet and phone.",
                audio: "audio/part4/dialogue4/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "對了，我要買一些新的<span class='vocab-highlight' data-word='內衣'>內衣</span>。你有推薦的牌子嗎？<span class='vocab-highlight' data-word='也許'>也許</span>我們可以一起去買。",
                pinyin: "Duì le, wǒ yào mǎi yīxiē xīn de nèiyī. Nǐ yǒu tuījiàn de páizi ma? Yěxǔ wǒmen kěyǐ yīqǐ qù mǎi.",
                english: "By the way, I need to buy some new underwear. Do you have any recommended brands? Maybe we can go buy together.",
                audio: "audio/part4/dialogue4/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "好啊！<span class='vocab-highlight' data-word='不但'>不但</span>可以買東西，還可以<span class='vocab-highlight' data-word='裝'>裝</span>作時尚達人給意見。這<span class='vocab-highlight' data-word='套'>套</span>服裝很適合你。",
                pinyin: "Hǎo a! Bùdàn kěyǐ mǎi dōngxi, hái kěyǐ zhuāng zuò shíshàng dárén gěi yìjiàn. Zhè tào fúzhuāng hěn shìhé nǐ.",
                english: "Great! Not only can we shop, but we can also pretend to be fashion experts giving advice. This set of clothing suits you well.",
                audio: "audio/part4/dialogue4/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue4/dialogue.mp3"
    },
    {
        id: 5,
        title: "金錢與交易",
        titleTranslation: "Money and Transactions",
        context: "Discussing tipping and discounts while shopping",
        lines: [
            {
                speaker: "A",
                chinese: "剛才在餐廳，你給了服務生<span class='vocab-highlight' data-word='小費'>小費</span>嗎？我忘了帶<span class='vocab-highlight' data-word='零錢'>零錢</span>。",
                pinyin: "Gāngcái zài cāntīng, nǐ gěi le fúwùshēng xiǎofèi ma? Wǒ wàng le dài língqián.",
                english: "Earlier at the restaurant, did you give the waiter a tip? I forgot to bring change.",
                audio: "audio/part4/dialogue5/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我給了。而且今天商店有<span class='vocab-highlight' data-word='打折'>打折</span>，所以省了不少錢。現在我的<span class='vocab-highlight' data-word='零用錢'>零用錢</span>還夠用。",
                pinyin: "Wǒ gěi le. Érqiě jīntiān shāngdiàn yǒu dǎzhé, suǒyǐ shěng le bù shǎo qián. Xiànzài wǒ de língyòngqián hái gòu yòng.",
                english: "I did. Moreover the store had a discount today, so I saved quite a bit of money. Now my pocket money is still sufficient.",
                audio: "audio/part4/dialogue5/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "你真聰明！我<span class='vocab-highlight' data-word='必須'>必須</span>學習更好地管理金錢。<span class='vocab-highlight' data-word='可能'>可能</span>我應該把錢<span class='vocab-highlight' data-word='存'>存</span>起來。",
                pinyin: "Nǐ zhēn cōngmíng! Wǒ bìxū xuéxí gèng hǎo de guǎnlǐ jīnqián. Kěnéng wǒ yīnggāi bǎ qián cún qǐlái.",
                english: "You're really smart! I must learn to manage money better. Maybe I should save my money.",
                audio: "audio/part4/dialogue5/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>當你需要錢的時候，<span class='vocab-highlight' data-word='不必'>不必</span>擔心沒有錢。<span class='vocab-highlight' data-word='而且'>而且</span>，省下的錢可以買更好的東西。",
                pinyin: "Shì de, zhèyàng dāng nǐ xūyào qián de shíhòu, bùbì dānxīn méiyǒu qián. Érqiě, shěng xià de qián kěyǐ mǎi gèng hǎo de dōngxi.",
                english: "Yes, this way when you need money, you don't have to worry about not having money. Moreover, the money saved can buy better things.",
                audio: "audio/part4/dialogue5/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue5/dialogue.mp3"
    },
    {
        id: 6,
        title: "商品品質與評價",
        titleTranslation: "Product Quality and Evaluation",
        context: "Evaluating the quality of purchased items",
        lines: [
            {
                speaker: "B",
                chinese: "你看這件衣服，上面有很多<span class='vocab-highlight' data-word='毛'>毛</span>，感覺很<span class='vocab-highlight' data-word='高級'>高級</span>。",
                pinyin: "Nǐ kàn zhè jiàn yīfu, shàngmiàn yǒu hěnduō máo, gǎnjué hěn gāojí.",
                english: "Look at this clothing, it has lots of fuzz/hair on it, feels very high-class.",
                audio: "audio/part4/dialogue6/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "可是價格很<span class='vocab-highlight' data-word='一般'>一般</span>。我覺得這個大小很<span class='vocab-highlight' data-word='合適'>合適</span>我，顏色也很<span class='vocab-highlight' data-word='適合'>適合</span>。",
                pinyin: "Kěshì jiàgé hěn yībān. Wǒ juédé zhège dàxiǎo hěn héshì wǒ, yánsè yě hěn shìhé.",
                english: "But the price is very ordinary. I think this size fits me well, and the color also suits me.",
                audio: "audio/part4/dialogue6/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "這個設計很特別，<span class='vocab-highlight' data-word='圓'>圓</span>形的圖案很漂亮。但是領子有點<span class='vocab-highlight' data-word='破'>破</span>了，你看到了嗎？",
                pinyin: "Zhège shèjì hěn tèbié, yuán xíng de tú'àn hěn piàoliang. Dànshì lǐngzi yǒudiǎn pò le, nǐ kàn dào le ma?",
                english: "This design is very special, the circular pattern is very beautiful. But the collar is a bit torn, did you see?",
                audio: "audio/part4/dialogue6/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "真的！在<span class='vocab-highlight' data-word='光'>光</span>線下看得更清楚。這<span class='vocab-highlight' data-word='樣'>樣</span>的話，<span class='vocab-highlight' data-word='只好'>只好</span>不買了。質量<span class='vocab-highlight' data-word='這樣'>這樣</span>差，真是<span class='vocab-highlight' data-word='不得了'>不得了</span>。",
                pinyin: "Zhēn de! Zài guāngxiàn xià kàn dé gèng qīngchǔ. Zhè yàng de huà, zhǐhǎo bù mǎi le. Zhìliàng zhèyàng chà, zhēnshi bùdéliǎo.",
                english: "Really! In the light it's even clearer. In that case, have no choice but not to buy it. Quality this poor, it's really terrible.",
                audio: "audio/part4/dialogue6/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue6/dialogue.mp3"
    },
    {
        id: 7,
        title: "包裝與容器",
        titleTranslation: "Packaging and Containers",
        context: "Discussing packaging and containers for shopping",
        lines: [
            {
                speaker: "A",
                chinese: "我們需要一個<span class='vocab-highlight' data-word='袋'>袋</span>子來裝這些東西。這個<span class='vocab-highlight' data-word='套'>套</span>裝產品包裝得很漂亮。",
                pinyin: "Wǒmen xūyào yīgè dàizi lái zhuāng zhèxiē dōngxi. Zhège tàozhuāng chǎnpǐn bāozhuāng dé hěn piàoliang.",
                english: "We need a bag to put these things in. This set product is packaged very beautifully.",
                audio: "audio/part4/dialogue7/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='裝'>裝</span>在這個環保袋裡吧。我還買了一<span class='vocab-highlight' data-word='罐'>罐</span>茶葉和三<span class='vocab-highlight' data-word='顆'>顆</span>蘋果。",
                pinyin: "Shì de, zhuāng zài zhège huánbǎo dài lǐ ba. Wǒ hái mǎi le yī guàn cháyè hé sān kē píngguǒ.",
                english: "Yes, put it in this eco-friendly bag. I also bought a can of tea leaves and three apples.",
                audio: "audio/part4/dialogue7/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好的。小心不要把東西弄<span class='vocab-highlight' data-word='髒'>髒</span>了。這個盒子<span class='vocab-highlight' data-word='破'>破</span>了，<span class='vocab-highlight' data-word='可能'>可能</span>需要換一個。",
                pinyin: "Hǎo de. Xiǎoxīn bùyào bǎ dōngxi nòng zāng le. Zhège hézi pò le, kěnéng xūyào huàn yīgè.",
                english: "Okay. Be careful not to get the things dirty. This box is broken, might need to change one.",
                audio: "audio/part4/dialogue7/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "沒關係，<span class='vocab-highlight' data-word='不管'>不管</span>用什麼<span class='vocab-highlight' data-word='袋'>袋</span>子，能安全帶回家就好。<span class='vocab-highlight' data-word='而且'>而且</span>，環保袋更環保。",
                pinyin: "Méiguānxi, bùguǎn yòng shénme dàizi, néng ānquán dài huí jiā jiù hǎo. Érqiě, huánbǎo dài gèng huánbǎo.",
                english: "It's okay, no matter what bag is used, as long as it can be safely brought home. Moreover, eco-friendly bags are more environmentally friendly.",
                audio: "audio/part4/dialogue7/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue7/dialogue.mp3"
    },
    {
        id: 8,
        title: "肉類與海鮮",
        titleTranslation: "Meat and Seafood",
        context: "Discussing different types of meat and seafood",
        lines: [
            {
                speaker: "B",
                chinese: "今晚你想吃什麼？我想吃<span class='vocab-highlight' data-word='牛排'>牛排</span>配<span class='vocab-highlight' data-word='沙拉'>沙拉</span>。",
                pinyin: "Jīn wǎn nǐ xiǎng chī shénme? Wǒ xiǎng chī niúpái pèi shālā.",
                english: "What do you want to eat tonight? I want to eat steak with salad.",
                audio: "audio/part4/dialogue8/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我喜歡<span class='vocab-highlight' data-word='海鮮'>海鮮</span>，<span class='vocab-highlight' data-word='可能'>可能</span>會點魚。你吃<span class='vocab-highlight' data-word='火腿'>火腿</span>嗎？這裡的<span class='vocab-highlight' data-word='熱狗'>熱狗</span>也不錯。",
                pinyin: "Wǒ xǐhuān hǎixiān, kěnéng huì diǎn yú. Nǐ chī huǒtuǐ ma? Zhèlǐ de règǒu yě bùcuò.",
                english: "I like seafood, might order fish. Do you eat ham? The hot dogs here are also good.",
                audio: "audio/part4/dialogue8/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='這樣'>這樣</span>啊。我<span class='vocab-highlight' data-word='必須'>必須</span>說，這裡的肉都很<span class='vocab-highlight' data-word='新鮮'>新鮮</span>。<span class='vocab-highlight' data-word='而且'>而且</span>，價格也很合理。",
                pinyin: "Zhèyàng a. Wǒ bìxū shuō, zhèlǐ de ròu dōu hěn xīnxiān. Érqiě, jiàgé yě hěn hélǐ.",
                english: "I see. I must say, the meat here is all very fresh. Moreover, the price is also reasonable.",
                audio: "audio/part4/dialogue8/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，<span class='vocab-highlight' data-word='多麼'>多麼</span>美味的選擇！我們可以<span class='vocab-highlight' data-word='嚐/嘗'>嚐</span>試不同的菜。<span class='vocab-highlight' data-word='或'>或</span>者點<span class='vocab-highlight' data-word='許多'>許多</span>小菜分享。",
                pinyin: "Shì de, duōme měiwèi de xuǎnzé! Wǒmen kěyǐ cháng shì bùtóng de cài. Huò zhě diǎn xǔduō xiǎocài fēnxiǎng.",
                english: "Yes, what delicious choices! We can try different dishes. Or order many small dishes to share.",
                audio: "audio/part4/dialogue8/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue8/dialogue.mp3"
    },
    {
        id: 9,
        title: "主食與小吃",
        titleTranslation: "Staple Foods and Snacks",
        context: "Talking about staple foods and snacks",
        lines: [
            {
                speaker: "A",
                chinese: "台灣的早餐有很多選擇，比如<span class='vocab-highlight' data-word='饅頭'>饅頭</span>配豆漿。你喜歡吃<span class='vocab-highlight' data-word='米'>米</span>飯嗎？",
                pinyin: "Táiwān de zǎocān yǒu hěnduō xuǎnzé, bǐrú mántou pèi dòujiāng. Nǐ xǐhuān chī mǐ fàn ma?",
                english: "Taiwanese breakfast has many choices, like steamed buns with soy milk. Do you like eating rice?",
                audio: "audio/part4/dialogue9/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "非常喜歡！我<span class='vocab-highlight' data-word='經常'>經常</span>吃米飯配<span class='vocab-highlight' data-word='豆腐'>豆腐</span>。有時候也吃<span class='vocab-highlight' data-word='熱狗'>熱狗</span>當點心。",
                pinyin: "Fēicháng xǐhuān! Wǒ jīngcháng chī mǐ fàn pèi dòufu. Yǒu shíhòu yě chī règǒu dāng diǎnxīn.",
                english: "I like it very much! I often eat rice with tofu. Sometimes also eat hot dogs as snacks.",
                audio: "audio/part4/dialogue9/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "台灣小吃很有名，<span class='vocab-highlight' data-word='除了'>除了</span>主食，還有<span class='vocab-highlight' data-word='許多'>許多</span>點心。<span class='vocab-highlight' data-word='原來'>原來</span>你對台灣食物這麼了解。",
                pinyin: "Táiwān xiǎochī hěn yǒumíng, chúle zhǔshí, hái yǒu xǔduō diǎnxīn. Yuánlái nǐ duì táiwān shíwù zhème liǎojiě.",
                english: "Taiwanese snacks are famous, besides staple foods, there are also many snacks. So you know so much about Taiwanese food.",
                audio: "audio/part4/dialogue9/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，我<span class='vocab-highlight' data-word='必須'>必須</span>說，台灣食物<span class='vocab-highlight' data-word='不但'>不但</span>好吃，<span class='vocab-highlight' data-word='而且'>而且</span>種類<span class='vocab-highlight' data-word='許多'>許多</span>。<span class='vocab-highlight' data-word='任何'>任何</span>人都能找到喜歡的。",
                pinyin: "Shì de, wǒ bìxū shuō, táiwān shíwù bùdàn hǎochī, érqiě zhǒnglèi xǔduō. Rènhé rén dōu néng zhǎo dào xǐhuān de.",
                english: "Yes, I must say, Taiwanese food is not only delicious, but also has many varieties. Anyone can find what they like.",
                audio: "audio/part4/dialogue9/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue9/dialogue.mp3"
    },
    {
        id: 10,
        title: "水果與飲料",
        titleTranslation: "Fruits and Beverages",
        context: "Discussing fruits and beverages",
        lines: [
            {
                speaker: "B",
                chinese: "飯後我想吃水果，你想吃<span class='vocab-highlight' data-word='橘(子)'>橘子</span><span class='vocab-highlight' data-word='或'>或</span><span class='vocab-highlight' data-word='葡萄'>葡萄</span>？",
                pinyin: "Fàn hòu wǒ xiǎng chī shuǐguǒ, nǐ xiǎng chī júzi huò pútáo?",
                english: "After the meal I want to eat fruit, do you want to eat oranges or grapes?",
                audio: "audio/part4/dialogue10/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我想吃<span class='vocab-highlight' data-word='芒果'>芒果</span>。喝點什麼呢？<span class='vocab-highlight' data-word='烏龍茶'>烏龍茶</span><span class='vocab-highlight' data-word='或'>或</span><span class='vocab-highlight' data-word='豆漿'>豆漿</span>？",
                pinyin: "Wǒ xiǎng chī mángguǒ. Hē diǎn shénme ne? Wūlóngchá huò dòujiāng?",
                english: "I want to eat mango. What to drink? Oolong tea or soy milk?",
                audio: "audio/part4/dialogue10/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='可能'>可能</span>點<span class='vocab-highlight' data-word='奶茶'>奶茶</span>吧。你喜歡喝<span class='vocab-highlight' data-word='可樂'>可樂</span><span class='vocab-highlight' data-word='或'>或</span><span class='vocab-highlight' data-word='汽水'>汽水</span>嗎？",
                pinyin: "Kěnéng diǎn nǎichá ba. Nǐ xǐhuān hē kělè huò qìshuǐ ma?",
                english: "Maybe order milk tea. Do you like drinking cola or soda?",
                audio: "audio/part4/dialogue10/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "不太喜歡，我<span class='vocab-highlight' data-word='一般'>一般</span>喝不加<span class='vocab-highlight' data-word='冰塊/冰塊兒'>冰塊</span>的飲料。<span class='vocab-highlight' data-word='這樣'>這樣</span>對身體比較好。",
                pinyin: "Bù tài xǐhuān, wǒ yībān hē bù jiā bīngkuài de yǐnliào. Zhèyàng duì shēntǐ bǐjiào hǎo.",
                english: "Not really, I usually drink beverages without ice cubes. This is better for the body.",
                audio: "audio/part4/dialogue10/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue10/dialogue.mp3"
    },
    {
        id: 11,
        title: "調味與甜點",
        titleTranslation: "Seasonings and Desserts",
        context: "Discussing seasonings and desserts",
        lines: [
            {
                speaker: "A",
                chinese: "這個菜需要加一點<span class='vocab-highlight' data-word='鹽'>鹽</span>。你覺得<span class='vocab-highlight' data-word='味/味兒'>味兒</span>怎麼樣？",
                pinyin: "Zhège cài xūyào jiā yīdiǎn yán. Nǐ juédé wèir zěnmeyàng?",
                english: "This dish needs a bit of salt. How do you think the taste is?",
                audio: "audio/part4/dialogue11/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='聞'>聞</span>起來很香，但是有點淡。飯後我們可以吃<span class='vocab-highlight' data-word='甜點'>甜點</span>，比如<span class='vocab-highlight' data-word='餅乾'>餅乾</span>。",
                pinyin: "Wén qǐlái hěn xiāng, dànshì yǒudiǎn dàn. Fàn hòu wǒmen kěyǐ chī tiándiǎn, bǐrú bǐnggān.",
                english: "Smells very fragrant, but a bit bland. After the meal we can eat dessert, like cookies.",
                audio: "audio/part4/dialogue11/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "好主意！<span class='vocab-highlight' data-word='可能'>可能</span>再加一點調味料。<span class='vocab-highlight' data-word='不管'>不管</span>吃什麼，<span class='vocab-highlight' data-word='合適'>合適</span>的調味很重要。",
                pinyin: "Hǎo zhǔyì! Kěnéng zài jiā yīdiǎn tiáowèiliào. Bùguǎn chī shénme, héshì de tiáowèi hěn zhòngyào.",
                english: "Good idea! Maybe add a bit more seasoning. No matter what you eat, appropriate seasoning is important.",
                audio: "audio/part4/dialogue11/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>食物才會好吃。<span class='vocab-highlight' data-word='而且'>而且</span>，好的<span class='vocab-highlight' data-word='甜點'>甜點</span>能讓一餐更完美。",
                pinyin: "Shì de, zhèyàng shíwù cái huì hǎochī. Érqiě, hǎo de tiándiǎn néng ràng yī cān gèng wánměi.",
                english: "Yes, this way food will taste good. Moreover, good dessert can make a meal more perfect.",
                audio: "audio/part4/dialogue11/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue11/dialogue.mp3"
    },
    {
        id: 12,
        title: "食物品質與描述",
        titleTranslation: "Food Quality and Description",
        context: "Describing food quality and characteristics",
        lines: [
            {
                speaker: "B",
                chinese: "這個食物<span class='vocab-highlight' data-word='聞'>聞</span>起來有點<span class='vocab-highlight' data-word='臭'>臭</span>，但是吃起來很好吃。你覺得呢？",
                pinyin: "Zhège shíwù wén qǐlái yǒudiǎn chòu, dànshì chī qǐlái hěn hǎochī. Nǐ juédé ne?",
                english: "This food smells a bit stinky, but tastes very good. What do you think?",
                audio: "audio/part4/dialogue12/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我同意。<span class='vocab-highlight' data-word='口'>口</span>感很好，<span class='vocab-highlight' data-word='味/味兒'>味兒</span>也很特別。<span class='vocab-highlight' data-word='原來'>原來</span>有些食物聞起來和吃起來不一樣。",
                pinyin: "Wǒ tóngyì. Kǒu gǎn hěn hǎo, wèir yě hěn tèbié. Yuánlái yǒuxiē shíwù wén qǐlái hé chī qǐlái bù yīyàng.",
                english: "I agree. The mouthfeel is good, and the taste is also special. So some foods smell different from how they taste.",
                audio: "audio/part4/dialogue12/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='多麼'>多麼</span>有趣的發現！<span class='vocab-highlight' data-word='可能'>可能</span>我們應該多<span class='vocab-highlight' data-word='嚐/嘗'>嚐</span>試不同的食物。",
                pinyin: "Duōme yǒuqù de fāxiàn! Kěnéng wǒmen yīnggāi duō cháng shì bùtóng de shíwù.",
                english: "What an interesting discovery! Maybe we should try more different foods.",
                audio: "audio/part4/dialogue12/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>可以發現<span class='vocab-highlight' data-word='許多'>許多</span>驚喜。<span class='vocab-highlight' data-word='而且'>而且</span>，食物的<span class='vocab-highlight' data-word='新鮮'>新鮮</span>度很重要。",
                pinyin: "Shì de, zhèyàng kěyǐ fāxiàn xǔduō jīngxǐ. Érqiě, shíwù de xīnxiān dù hěn zhòngyào.",
                english: "Yes, this way you can discover many surprises. Moreover, the freshness of food is important.",
                audio: "audio/part4/dialogue12/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue12/dialogue.mp3"
    },
    {
        id: 13,
        title: "烹飪方法",
        titleTranslation: "Cooking Methods",
        context: "Discussing different cooking techniques",
        lines: [
            {
                speaker: "A",
                chinese: "你喜歡吃<span class='vocab-highlight' data-word='炒'>炒</span>的菜<span class='vocab-highlight' data-word='或'>或</span><span class='vocab-highlight' data-word='炸'>炸</span>的食物？我喜歡<span class='vocab-highlight' data-word='炒'>炒</span>的，比較健康。",
                pinyin: "Nǐ xǐhuān chī chǎo de cài huò zhá de shíwù? Wǒ xǐhuān chǎo de, bǐjiào jiànkāng.",
                english: "Do you like stir-fried dishes or deep-fried food? I like stir-fried, it's healthier.",
                audio: "audio/part4/dialogue13/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我都喜歡，但是<span class='vocab-highlight' data-word='炸'>炸</span>的食物不能吃太多。你覺得這個肉<span class='vocab-highlight' data-word='熟'>熟</span>了嗎？",
                pinyin: "Wǒ dōu xǐhuān, dànshì zhá de shíwù bùnéng chī tài duō. Nǐ juédé zhège ròu shú le ma?",
                english: "I like both, but deep-fried food shouldn't be eaten too much. Do you think this meat is cooked?",
                audio: "audio/part4/dialogue13/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "應該<span class='vocab-highlight' data-word='熟'>熟</span>了，顏色已經變了。我們可以<span class='vocab-highlight' data-word='嚐/嘗'>嚐</span>一下看看。<span class='vocab-highlight' data-word='而且'>而且</span>，用筷子比較方便。",
                pinyin: "Yīnggāi shú le, yánsè yǐjīng biàn le. Wǒmen kěyǐ cháng yīxià kàn kàn. Érqiě, yòng kuàizi bǐjiào fāngbiàn.",
                english: "Should be cooked, the color has already changed. We can taste it to see. Moreover, using chopsticks is more convenient.",
                audio: "audio/part4/dialogue13/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好的。<span class='vocab-highlight' data-word='可能'>可能</span>需要再煮一下。<span class='vocab-highlight' data-word='不管'>不管</span>用什麼方法，食物要<span class='vocab-highlight' data-word='熟'>熟</span>透才安全。",
                pinyin: "Hǎo de. Kěnéng xūyào zài zhǔ yīxià. Bùguǎn yòng shénme fāngfǎ, shíwù yào shú tòu cái ānquán.",
                english: "Okay. Might need to cook a bit more. No matter what method is used, food needs to be thoroughly cooked to be safe.",
                audio: "audio/part4/dialogue13/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue13/dialogue.mp3"
    },
    {
        id: 14,
        title: "邏輯與必要性",
        titleTranslation: "Logic and Necessity",
        context: "Discussing necessity and obligations",
        lines: [
            {
                speaker: "B",
                chinese: "我們<span class='vocab-highlight' data-word='必須'>必須</span>在五點前到達。你覺得<span class='vocab-highlight' data-word='不必'>不必</span>帶太多東西嗎？",
                pinyin: "Wǒmen bìxū zài wǔ diǎn qián dàodá. Nǐ juédé bùbì dài tài duō dōngxi ma?",
                english: "We must arrive before five o'clock. Do you think we don't need to bring too many things?",
                audio: "audio/part4/dialogue14/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，<span class='vocab-highlight' data-word='不用'>不用</span>帶太多，只帶必要的就好。<span class='vocab-highlight' data-word='不必'>不必</span>擔心，我會準備好的。",
                pinyin: "Shì de, bùyòng dài tài duō, zhǐ dài bìyào de jiù hǎo. Bùbì dānxīn, wǒ huì zhǔnbèi hǎo de.",
                english: "Yes, no need to bring too much, just bring what's necessary. No need to worry, I'll prepare well.",
                audio: "audio/part4/dialogue14/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "謝謝！<span class='vocab-highlight' data-word='必須'>必須</span>承認，我有時候會帶太多不必要的東西。",
                pinyin: "Xièxiè! Bìxū chéngrèn, wǒ yǒu shíhòu huì dài tài duō bù bìyào de dōngxi.",
                english: "Thank you! Must admit, sometimes I bring too many unnecessary things.",
                audio: "audio/part4/dialogue14/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "沒關係，<span class='vocab-highlight' data-word='不必'>不必</span>在意。<span class='vocab-highlight' data-word='而且'>而且</span>，<span class='vocab-highlight' data-word='這樣'>這樣</span>我們可以互相提醒。",
                pinyin: "Méiguānxi, bùbì zàiyì. Érqiě, zhèyàng wǒmen kěyǐ hùxiāng tíxǐng.",
                english: "It's okay, no need to worry. Moreover, this way we can remind each other.",
                audio: "audio/part4/dialogue14/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue14/dialogue.mp3"
    },
    {
        id: 15,
        title: "可能性與推測",
        titleTranslation: "Possibility and Speculation",
        context: "Discussing possibilities and making guesses",
        lines: [
            {
                speaker: "A",
                chinese: "明天<span class='vocab-highlight' data-word='可能'>可能</span>會下雨，<span class='vocab-highlight' data-word='也許'>也許</span>我們應該帶傘。<span class='vocab-highlight' data-word='而且'>而且</span>，天氣預報說會變冷。",
                pinyin: "Míngtiān kěnéng huì xià yǔ, yěxǔ wǒmen yīnggāi dài sǎn. Érqiě, tiānqì yùbào shuō huì biàn lěng.",
                english: "Tomorrow might rain, maybe we should bring umbrellas. Moreover, the weather forecast says it will get cold.",
                audio: "audio/part4/dialogue15/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='可能'>可能</span>吧。你覺得我們<span class='vocab-highlight' data-word='或'>或</span>許需要改期？<span class='vocab-highlight' data-word='也許'>也許</span>改到週末比較好。",
                pinyin: "Kěnéng ba. Nǐ juédé wǒmen huò xǔ xūyào gǎiqī? Yěxǔ gǎi dào zhōumò bǐjiào hǎo.",
                english: "Maybe. Do you think we perhaps need to reschedule? Maybe changing to the weekend is better.",
                audio: "audio/part4/dialogue15/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='可能'>可能</span>是個好主意。<span class='vocab-highlight' data-word='而且'>而且</span>，週末的時間比較充裕。<span class='vocab-highlight' data-word='原來'>原來</span>你也這麼想。",
                pinyin: "Kěnéng shì gè hǎo zhǔyì. Érqiě, zhōumò de shíjiān bǐjiào chōngyù. Yuánlái nǐ yě zhème xiǎng.",
                english: "Might be a good idea. Moreover, weekend time is more ample. So you think so too.",
                audio: "audio/part4/dialogue15/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>我們<span class='vocab-highlight' data-word='不必'>不必</span>趕時間。<span class='vocab-highlight' data-word='可能'>可能</span>會有更好的體驗。",
                pinyin: "Shì de, zhèyàng wǒmen bùbì gǎn shíjiān. Kěnéng huì yǒu gèng hǎo de tǐyàn.",
                english: "Yes, this way we don't need to rush. Might have a better experience.",
                audio: "audio/part4/dialogue15/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue15/dialogue.mp3"
    },
    {
        id: 16,
        title: "程度與評價",
        titleTranslation: "Degree and Evaluation",
        context: "Expressing degrees and making evaluations",
        lines: [
            {
                speaker: "B",
                chinese: "這個餐廳的食物<span class='vocab-highlight' data-word='多麼'>多麼</span>好吃！服務<span class='vocab-highlight' data-word='這樣'>這樣</span>周到，真是<span class='vocab-highlight' data-word='不得了'>不得了</span>。",
                pinyin: "Zhège cāntīng de shíwù duōme hǎochī! Fúwù zhèyàng zhōudào, zhēnshi bùdéliǎo.",
                english: "How delicious this restaurant's food is! Service this considerate, it's really amazing.",
                audio: "audio/part4/dialogue16/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，價格也<span class='vocab-highlight' data-word='這樣'>這樣</span>合理。<span class='vocab-highlight' data-word='多麼'>多麼</span>值得推薦的地方！<span class='vocab-highlight' data-word='而且'>而且</span>，環境很舒服。",
                pinyin: "Shì de, jiàgé yě zhèyàng hélǐ. Duōme zhídé tuījiàn de dìfāng! Érqiě, huánjìng hěn shūfu.",
                english: "Yes, the price is also this reasonable. What a place worth recommending! Moreover, the environment is very comfortable.",
                audio: "audio/part4/dialogue16/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='原來'>原來</span>你也很喜歡。<span class='vocab-highlight' data-word='這樣'>這樣</span>的餐廳<span class='vocab-highlight' data-word='可能'>可能</span>不多見。",
                pinyin: "Yuánlái nǐ yě hěn xǐhuān. Zhèyàng de cāntīng kěnéng bù duō jiàn.",
                english: "So you also like it very much. Such restaurants might not be common.",
                audio: "audio/part4/dialogue16/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，<span class='vocab-highlight' data-word='多麼'>多麼</span>幸運能找到這裡。<span class='vocab-highlight' data-word='而且'>而且</span>，我們應該多來支持。",
                pinyin: "Shì de, duōme xìngyùn néng zhǎo dào zhèlǐ. Érqiě, wǒmen yīnggāi duō lái zhīchí.",
                english: "Yes, how lucky to find this place. Moreover, we should come more to support it.",
                audio: "audio/part4/dialogue16/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue16/dialogue.mp3"
    },
    {
        id: 17,
        title: "列舉與選擇",
        titleTranslation: "Enumeration and Choice",
        context: "Listing options and making choices",
        lines: [
            {
                speaker: "A",
                chinese: "我們可以點這些菜：沙拉、<span class='vocab-highlight' data-word='牛排'>牛排</span>、<span class='vocab-highlight' data-word='海鮮'>海鮮</span><span class='vocab-highlight' data-word='等/等等'>等等</span>。你想吃什麼？",
                pinyin: "Wǒmen kěyǐ diǎn zhèxiē cài: Shālā, niúpái, hǎixiān děngděng. Nǐ xiǎng chī shénme?",
                english: "We can order these dishes: salad, steak, seafood, etc. What do you want to eat?",
                audio: "audio/part4/dialogue17/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我想吃<span class='vocab-highlight' data-word='牛排'>牛排</span>，<span class='vocab-highlight' data-word='或'>或</span>者<span class='vocab-highlight' data-word='海鮮'>海鮮</span>也可以。<span class='vocab-highlight' data-word='這樣'>這樣</span>的選擇真難！",
                pinyin: "Wǒ xiǎng chī niúpái, huò zhě hǎixiān yě kěyǐ. Zhèyàng de xuǎnzé zhēn nán!",
                english: "I want to eat steak, or seafood is okay too. Such choices are really difficult!",
                audio: "audio/part4/dialogue17/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='可能'>可能</span>我們可以點<span class='vocab-highlight' data-word='許多'>許多</span>小菜分享。<span class='vocab-highlight' data-word='這樣'>這樣</span>就可以<span class='vocab-highlight' data-word='嚐/嘗'>嚐</span>到不同的味道。",
                pinyin: "Kěnéng wǒmen kěyǐ diǎn xǔduō xiǎocài fēnxiǎng. Zhèyàng jiù kěyǐ cháng dào bùtóng de wèidào.",
                english: "Maybe we can order many small dishes to share. This way we can taste different flavors.",
                audio: "audio/part4/dialogue17/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "好主意！<span class='vocab-highlight' data-word='這樣'>這樣</span>我們<span class='vocab-highlight' data-word='不必'>不必</span>決定主菜。<span class='vocab-highlight' data-word='而且'>而且</span>，可以吃得更豐富。",
                pinyin: "Hǎo zhǔyì! Zhèyàng wǒmen bùbì juédìng zhǔcài. Érqiě, kěyǐ chī dé gèng fēngfù.",
                english: "Good idea! This way we don't need to decide on a main dish. Moreover, we can eat more variety.",
                audio: "audio/part4/dialogue17/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue17/dialogue.mp3"
    },
    {
        id: 18,
        title: "例外與對比",
        titleTranslation: "Exceptions and Contrast",
        context: "Discussing exceptions and making comparisons",
        lines: [
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='除了'>除了</span>這家餐廳，你還喜歡<span class='vocab-highlight' data-word='別的'>別的</span>什麼地方？",
                pinyin: "Chúle zhè jiā cāntīng, nǐ hái xǐhuān biéde shénme dìfāng?",
                english: "Besides this restaurant, what other places do you like?",
                audio: "audio/part4/dialogue18/sentence1.mp3"
            },
            {
                speaker: "A",
                chinese: "我喜歡<span class='vocab-highlight' data-word='許多'>許多</span>地方，<span class='vocab-highlight' data-word='除了'>除了</span>餐廳，還有咖啡店、書店<span class='vocab-highlight' data-word='等/等等'>等等</span>。",
                pinyin: "Wǒ xǐhuān xǔduō dìfāng, chúle cāntīng, hái yǒu kāfēi diàn, shūdiàn děngděng.",
                english: "I like many places, besides restaurants, there are also coffee shops, bookstores, etc.",
                audio: "audio/part4/dialogue18/sentence2.mp3"
            },
            {
                speaker: "B",
                chinese: "<span class='vocab-highlight' data-word='原來'>原來</span>如此。<span class='vocab-highlight' data-word='除了'>除了</span>吃東西，你也喜歡閱讀。<span class='vocab-highlight' data-word='這樣'>這樣</span>的生活很豐富。",
                pinyin: "Yuánlái rúcǐ. Chúle chī dōngxi, nǐ yě xǐhuān yuèdú. Zhèyàng de shēnghuó hěn fēngfù.",
                english: "I see. Besides eating, you also like reading. Such life is very rich.",
                audio: "audio/part4/dialogue18/sentence3.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>可以學習<span class='vocab-highlight' data-word='許多'>許多</span>新知識。<span class='vocab-highlight' data-word='而且'>而且</span>，<span class='vocab-highlight' data-word='不管'>不管</span>在哪裡都可以閱讀。",
                pinyin: "Shì de, zhèyàng kěyǐ xuéxí xǔduō xīn zhīshì. Érqiě, bùguǎn zài nǎlǐ dōu kěyǐ yuèdú.",
                english: "Yes, this way you can learn much new knowledge. Moreover, no matter where you are, you can read.",
                audio: "audio/part4/dialogue18/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue18/dialogue.mp3"
    },
    {
        id: 19,
        title: "現代與傳統",
        titleTranslation: "Modern vs Traditional",
        context: "Comparing modern and traditional aspects",
        lines: [
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='現代'>現代</span>的購物中心和<span class='vocab-highlight' data-word='傳統'>傳統</span>的市場很不一樣。你喜歡哪一種？",
                pinyin: "Xiàndài de gòuwù zhōngxīn hé chuántǒng de shìchǎng hěn bù yīyàng. Nǐ xǐhuān nǎ yī zhǒng?",
                english: "Modern shopping centers and traditional markets are very different. Which one do you like?",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我都喜歡。<span class='vocab-highlight' data-word='現代'>現代</span>的方便，<span class='vocab-highlight' data-word='傳統'>傳統</span>的有特色。<span class='vocab-highlight' data-word='而且'>而且</span>，可以體驗不同的文化。",
                pinyin: "Wǒ dōu xǐhuān. Xiàndài de fāngbiàn, chuántǒng de yǒu tèsè. Érqiě, kěyǐ tǐyàn bùtóng de wénhuà.",
                english: "I like both. Modern ones are convenient, traditional ones have character. Moreover, you can experience different cultures.",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "<span class='vocab-highlight' data-word='原來'>原來</span>你這麼想。<span class='vocab-highlight' data-word='這樣'>這樣</span>很好，<span class='vocab-highlight' data-word='不管'>不管</span>是<span class='vocab-highlight' data-word='現代'>現代</span><span class='vocab-highlight' data-word='或'>或</span><span class='vocab-highlight' data-word='傳統'>傳統</span>，都有價值。",
                pinyin: "Yuánlái nǐ zhème xiǎng. Zhèyàng hěn hǎo, bùguǎn shì xiàndài huò chuántǒng, dōu yǒu jiàzhí.",
                english: "So you think this way. This is good, no matter if modern or traditional, both have value.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "是的，<span class='vocab-highlight' data-word='這樣'>這樣</span>的世界才豐富多彩。<span class='vocab-highlight' data-word='而且'>而且</span>，我們可以從中學習<span class='vocab-highlight' data-word='許多'>許多</span>。",
                pinyin: "Shì de, zhèyàng de shìjiè cái fēngfù duōcǎi. Érqiě, wǒmen kěyǐ cóng zhōng xuéxí xǔduō.",
                english: "Yes, this way the world is rich and colorful. Moreover, we can learn much from it.",
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