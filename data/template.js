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
        title: "Dialogue 2", 
        subtitle: "Daily Life", 
        icon: "🏠" 
    },
    { 
        title: "Dialogue 3", 
        subtitle: "Shopping", 
        icon: "🛍️" 
    },
    { 
        title: "Dialogue 4", 
        subtitle: "Travel", 
        icon: "✈️" 
    },
    { 
        title: "Dialogue 5", 
        subtitle: "Food", 
        icon: "🍜" 
    },
    { 
        title: "Dialogue 6", 
        subtitle: "Health", 
        icon: "💊" 
    },
    { 
        title: "Dialogue 7", 
        subtitle: "Work", 
        icon: "💼" 
    },
    { 
        title: "Dialogue 8", 
        subtitle: "Education", 
        icon: "📚" 
    },
    { 
        title: "Dialogue 9", 
        subtitle: "Entertainment", 
        icon: "🎬" 
    },
    { 
        title: "Dialogue 10", 
        subtitle: "Sports", 
        icon: "⚽" 
    },
    { 
        title: "Dialogue 11", 
        subtitle: "Technology", 
        icon: "💻" 
    },
    { 
        title: "Dialogue 12", 
        subtitle: "Relationships", 
        icon: "❤️" 
    },
    { 
        title: "Dialogue 13", 
        subtitle: "Hobbies", 
        icon: "🎨" 
    },
    { 
        title: "Dialogue 14", 
        subtitle: "Transportation", 
        icon: "🚗" 
    },
    { 
        title: "Dialogue 15", 
        subtitle: "Weather", 
        icon: "⛈️" 
    },
    { 
        title: "Dialogue 16", 
        subtitle: "Culture", 
        icon: "🎎" 
    },
    { 
        title: "Dialogue 17", 
        subtitle: "News", 
        icon: "📰" 
    },
    { 
        title: "Dialogue 18", 
        subtitle: "Future Plans", 
        icon: "🎯" 
    },
    { 
        title: "Dialogue 19", 
        subtitle: "Reflections", 
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

// Vocabulary Database
const vocabularyDB = [
    { chinese: "度", pinyin: "dù", english: "degree (temperature/angle)", audio: "audio/part3/words/du.mp3" },
    { chinese: "颱風", pinyin: "táifēng", english: "typhoon", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "季節", pinyin: "jìjié", english: "season", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "環保", pinyin: "huánbǎo", english: "environmental protection", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "垃圾", pinyin: "lèsè", english: "garbage", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "汙染", pinyin: "wūrǎn", english: "pollution", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "底", pinyin: "dǐ", english: "bottom", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "底下", pinyin: "dǐxià", english: "underneath, below", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" },
    { chinese: "內", pinyin: "nèi", english: "inside", audio: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3" }
];

// Audio Database (optional)
const audioDB = {
    defaultClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
    // Add more audio files here as needed
};

// Dialogue Database - Complete 19 dialogues
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
            // ... add more lines for dialogue 1
        ],
        fullAudio: "audio/part3/dialogue1/dialogue.mp3"
    },
    // Dialogue 2-19 (add your content here)
    // ... rest of your 18 dialogues
];

// Configuration constants
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};

