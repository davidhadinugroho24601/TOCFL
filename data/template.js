// ============================================
//Prompt instruction: 
// please insert data adjusted to the words above. 
// don't change the structure of the code, only the data inside the arrays and objects.
// generate all the slide and dialogues without skipping any number.
// generate more than 19 slides and 16 dialogues, each dialogue must have pretty much the same length as the example dialogue provided below.  {//this is just an example slide, please replace with your own content
    //     id: 19,
    //     title: "最後反思",
    //     titleTranslation: "Final Reflections",
    //     context: "Reflecting on cultural understanding and personal growth",
    //     lines: [
    //         {
    //             speaker: "A",
    //             chinese: "通過學習<span class='vocab-highlight' data-word='這些'>這些</span>詞彙，我對<span class='vocab-highlight' data-word='現代'>現代</span>和<span class='vocab-highlight' data-word='傳統'>傳統</span>的<span class='vocab-highlight' data-word='社會'>社會</span>有了更深的理解。語言是文化的鏡子，反映著人們的生活和價值觀。",
    //             pinyin: "Tōngguò xuéxí zhèxiē cíhuì, wǒ duì xiàndài hé chuántǒng de shèhuì yǒu le gèng shēn de lǐjiě. Yǔyán shì wénhuà de jìngzi, fǎnyìng zhe rénmen de shēnghuó hé jiàzhíguān.",
    //             english: "Through learning these vocabulary words, I have deeper understanding of modern and traditional society. Language is a mirror of culture, reflecting people's lives and values.",
    //             audio: "audio/part4/dialogue19/sentence1.mp3"
    //         },
    //         {
    //             speaker: "B",
    //             chinese: "我同意。從<span class='vocab-highlight' data-word='春節'>春節</span>的<span class='vocab-highlight' data-word='傳統'>傳統</span>到<span class='vocab-highlight' data-word='現代'>現代</span>的<span class='vocab-highlight' data-word='交通'>交通</span>方式，我們看到了<span class='vocab-highlight' data-word='社會'>社會</span>的變化和發展。學習語言讓我們能夠跨越文化界限，理解不同的生活方式。",
    //             pinyin: "Wǒ tóngyì. Cóng chūnjié de chuántǒng dào xiàndài de jiāotōng fāngshì, wǒmen kàn dào le shèhuì de biànhuà hé fāzhǎn. Xuéxí yǔyán ràng wǒmen nénggòu kuàyuè wénhuà jièxiàn, lǐjiě bùtóng de shēnghuó fāngshì.",
    //             english: "I agree. From Chinese New Year traditions to modern transportation methods, we see societal changes and development. Learning language lets us跨越 cultural boundaries, understand different lifestyles.",
    //             audio: "audio/part4/dialogue19/sentence2.mp3"
    //         },
    //         {
    //             speaker: "A",
    //             chinese: "是的，無論是<span class='vocab-highlight' data-word='東方'>東方</span>還是西方，每個文化都有其獨特的價值。通過語言學習，我們可以欣賞<span class='vocab-highlight' data-word='這些'>這些</span>差異，並從中學習和成長。",
    //             pinyin: "Shì de, wúlùn shì dōngfāng háishì xīfāng, měi gè wénhuà dōu yǒu qí dútè de jiàzhí. Tōngguò yǔyán xuéxí, wǒmen kěyǐ xīnshǎng zhèxiē chāyì, bìng cóng zhōng xuéxí hé chéngzhǎng.",
    //             english: "Yes, whether East or West, every culture has its unique value. Through language learning, we can appreciate these differences, and learn and grow from them.",
    //             audio: "audio/part4/dialogue19/sentence3.mp3"
    //         },
    //         {
    //             speaker: "B",
    //             chinese: "讓我們繼續探索語言的奧秘，不僅學習詞彙，更要理解詞彙背後的文化意義。每一次學習都是新的發現，每一次對話都是文化的交流。<span class='vocab-highlight' data-word='加油'>加油</span>！",
    //             pinyin: "Ràng wǒmen jìxù tànsuǒ yǔyán de àomì, bùjǐn xuéxí cíhuì, gèng yào lǐjiě cíhuì bèihòu de wénhuà yìyì. Měi yī cì xuéxí dōu shì xīn de fāxiàn, měi yī cì duìhuà dōu shì wénhuà de jiāoliú. Jiāyóu!",
    //             english: "Let's continue exploring language's mysteries, not just learning vocabulary, but更要 understanding cultural meanings behind vocabulary. Every learning is a new discovery, every conversation is cultural exchange. Keep it up!",
    //             audio: "audio/part4/dialogue19/sentence4.mp3"
    //         }
    //     ],
    //     fullAudio: "audio/part4/dialogue19/dialogue.mp3"
    // },
// make sure all the pinyin is accurate and matches the chinese characters.
// make sure all the english translations are accurate and natural-sounding.
// if you write comments please write them in english.
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
        id: 19,
        title: "最後反思",
        titleTranslation: "Final Reflections",
        context: "Reflecting on cultural understanding and personal growth",
        lines: [
            {
                speaker: "A",
                chinese: "通過學習<span class='vocab-highlight' data-word='這些'>這些</span>詞彙，我對<span class='vocab-highlight' data-word='現代'>現代</span>和<span class='vocab-highlight' data-word='傳統'>傳統</span>的<span class='vocab-highlight' data-word='社會'>社會</span>有了更深的理解。語言是文化的鏡子，反映著人們的生活和價值觀。",
                pinyin: "Tōngguò xuéxí zhèxiē cíhuì, wǒ duì xiàndài hé chuántǒng de shèhuì yǒu le gèng shēn de lǐjiě. Yǔyán shì wénhuà de jìngzi, fǎnyìng zhe rénmen de shēnghuó hé jiàzhíguān.",
                english: "Through learning these vocabulary words, I have deeper understanding of modern and traditional society. Language is a mirror of culture, reflecting people's lives and values.",
                audio: "audio/part4/dialogue19/sentence1.mp3"
            },
            {
                speaker: "B",
                chinese: "我同意。從<span class='vocab-highlight' data-word='春節'>春節</span>的<span class='vocab-highlight' data-word='傳統'>傳統</span>到<span class='vocab-highlight' data-word='現代'>現代</span>的<span class='vocab-highlight' data-word='交通'>交通</span>方式，我們看到了<span class='vocab-highlight' data-word='社會'>社會</span>的變化和發展。學習語言讓我們能夠跨越文化界限，理解不同的生活方式。",
                pinyin: "Wǒ tóngyì. Cóng chūnjié de chuántǒng dào xiàndài de jiāotōng fāngshì, wǒmen kàn dào le shèhuì de biànhuà hé fāzhǎn. Xuéxí yǔyán ràng wǒmen nénggòu kuàyuè wénhuà jièxiàn, lǐjiě bùtóng de shēnghuó fāngshì.",
                english: "I agree. From Chinese New Year traditions to modern transportation methods, we see societal changes and development. Learning language lets us跨越 cultural boundaries, understand different lifestyles.",
                audio: "audio/part4/dialogue19/sentence2.mp3"
            },
            {
                speaker: "A",
                chinese: "是的，無論是<span class='vocab-highlight' data-word='東方'>東方</span>還是西方，每個文化都有其獨特的價值。通過語言學習，我們可以欣賞<span class='vocab-highlight' data-word='這些'>這些</span>差異，並從中學習和成長。",
                pinyin: "Shì de, wúlùn shì dōngfāng háishì xīfāng, měi gè wénhuà dōu yǒu qí dútè de jiàzhí. Tōngguò yǔyán xuéxí, wǒmen kěyǐ xīnshǎng zhèxiē chāyì, bìng cóng zhōng xuéxí hé chéngzhǎng.",
                english: "Yes, whether East or West, every culture has its unique value. Through language learning, we can appreciate these differences, and learn and grow from them.",
                audio: "audio/part4/dialogue19/sentence3.mp3"
            },
            {
                speaker: "B",
                chinese: "讓我們繼續探索語言的奧秘，不僅學習詞彙，更要理解詞彙背後的文化意義。每一次學習都是新的發現，每一次對話都是文化的交流。<span class='vocab-highlight' data-word='加油'>加油</span>！",
                pinyin: "Ràng wǒmen jìxù tànsuǒ yǔyán de àomì, bùjǐn xuéxí cíhuì, gèng yào lǐjiě cíhuì bèihòu de wénhuà yìyì. Měi yī cì xuéxí dōu shì xīn de fāxiàn, měi yī cì duìhuà dōu shì wénhuà de jiāoliú. Jiāyóu!",
                english: "Let's continue exploring language's mysteries, not just learning vocabulary, but更要 understanding cultural meanings behind vocabulary. Every learning is a new discovery, every conversation is cultural exchange. Keep it up!",
                audio: "audio/part4/dialogue19/sentence4.mp3"
            }
        ],
        fullAudio: "audio/part4/dialogue19/dialogue.mp3"
    },
];

// Configuration
const CONFIG = {
    REVIEW_SLIDE_INDEX: 20, // adjust based on last dialogue index + 1, DO NOT count start slide
    SWIPE_THRESHOLD: 50,
    AUDIO: false, //keep this as false no matter what
    AUDIO_DELAY: 300
};




