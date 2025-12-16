// ============================================
//Prompt instruction: 
// please insert data adjusted to the words above. 
// don't change the structure of the code, only the data inside the arrays and objects.
// generate all the slide and dialogues without skipping any number.
// generate more than 19 slides and 16 dialogues, each dialogue must have at least 4 sentences.
// ============================================


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

    // Example format:
   
    { //this is just an example slide, please replace with your own content
        title: "現代與傳統", 
        subtitle: "Modern vs Traditional", //slide subtitles must be in english 
        icon: "🏮"
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
    // Example format:
    { chinese: "社會", pinyin: "shèhuì", english: "society", audio: "audio/part4/words/shehui.mp3" },
    //if audio is not available, you must fill in with address following pattern exactly like the example above
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    // Example format:
    
       {//this is just an example slide, please replace with your own content
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
                //if audio is not available, you must fill in with address following pattern exactly like the example above.
            },
            {
                speaker: "B",
                chinese: "是啊，這個<span class='vocab-highlight' data-word='季節'>季節</span>的變化真大。我們應該多注意<span class='vocab-highlight' data-word='環保'>環保</span>，減少製造<span class='vocab-highlight' data-word='垃圾'>垃圾</span>，避免環境<span class='vocab-highlight' data-word='汙染'>汙染</span>。",
                pinyin: "Shì a, zhège jìjié de biànhuà zhēn dà. Wǒmen yīnggāi duō zhùyì huánbǎo, jiǎnshǎo zhìzào lèsè, bìmiǎn huánjìng wūrǎn.",
                english: "Yes, the changes in this season are really big. We should pay more attention to environmental protection, reduce creating garbage, and avoid environmental pollution.",
                audio: "audio/part3/dialogue1/sentence2.mp3"
                //if audio is not available, you must fill in with address following pattern exactly like the example above.
            },
            {
                speaker: "A",
                chinese: "你說得對。我發現很多河流的<span class='vocab-highlight' data-word='底'>底</span><span class='vocab-highlight' data-word='底下'>底下</span>都有很多垃圾。這些垃圾會影響水的質量，造成嚴重的汙染。",
                pinyin: "Nǐ shuō dé duì. Wǒ fāxiàn hěnduō héliú de dǐ dǐxià dōu yǒu hěnduō lèsè. Zhèxiē lèsè huì yǐngxiǎng shuǐ de zhìliàng, zàochéng yánzhòng de wūrǎn.",
                english: "You're right. I've found that at the bottom of many rivers there's a lot of garbage. This garbage affects water quality and causes serious pollution.",
                audio: "audio/part3/dialogue1/sentence3.mp3"
                //if audio is not available, you must fill in with address following pattern exactly like the example above.
            },
            {
                speaker: "B",
                chinese: "是的，河流<span class='vocab-highlight' data-word='內'>內</span>的汙染會影響整個生態系統。我們應該從自身做起，做好分類回收。",
                pinyin: "Shì de, héliú nèi de wūrǎn huì yǐngxiǎng zhěnggè shēngtài xìtǒng. Wǒmen yīnggāi cóng zìshēn zuò qǐ, zuò hǎo fēnlèi huíshōu.",
                english: "Yes, pollution inside rivers affects the entire ecosystem. We should start with ourselves and do good classification and recycling.",
                audio: "audio/part3/dialogue1/sentence4.mp3"
                //if audio is not available, you must fill in with address following pattern exactly like the example above.
            }
        ],
        fullAudio: "audio/part3/dialogue1/dialogue.mp3"
        //if audio is not available, you must fill in with address following pattern exactly like the example above.
    },
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20, // adjust based on last dialogue index + 1
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};




