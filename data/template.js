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
    // { 
    //     title: "Slide Title", 
    //     subtitle: "Subtitle text", 
    //     icon: "🎯" 
    // },
    
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
    
];

// Audio Database (with updated audio paths from your HTML)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
};

// Dialogue Database - Add dialogues here
const dialoguesDB = [
    // Example format:
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
        ]
    },
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};




