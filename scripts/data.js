// Slide Titles Database
const slideTitles = [
    { 
        title: "Home", 
        subtitle: "Introduction", 
        icon: "🏠" 
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

// Configuration constants
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20,
    SWIPE_THRESHOLD: 50,
    AUDIO_DELAY: 300
};