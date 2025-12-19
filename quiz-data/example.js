// quiz-data-example.js - Dummy data for Chinese Quiz App
// Enhanced with quiz-specific data

// Configuration for Quiz Mode
const CONFIG = {
    AUDIO: false, // Set to true if you have audio files
    QUIZ_MODE: true, // Enable quiz mode
    SHOW_IMMEDIATE_FEEDBACK: true,
    AUTO_ADVANCE: false,
    REVIEW_SLIDE_INDEX: 20,
    TOTAL_QUIZZES: 19
};

// Vocabulary Database - 80 target words (same as before, but with quiz-specific info)
const vocabularyDB = [
    // Group 1: Greetings & Basic Phrases
    { 
        id: 1, 
        chinese: "你好", 
        pinyin: "nǐ hǎo", 
        english: "hello", 
        audio: "audio/ni_hao.mp3",
        difficulty: "beginner",
        category: "greetings"
    },
    { 
        id: 2, 
        chinese: "谢谢", 
        pinyin: "xiè xie", 
        english: "thank you", 
        audio: "audio/xie_xie.mp3",
        difficulty: "beginner",
        category: "greetings"
    },
    // ... (rest of vocabulary with same structure, add difficulty and category fields)
    
    // Add these properties to all vocabulary entries
];

// Dialogue Database - Enhanced with quiz metadata
const dialoguesDB = [
    {
        id: 1,
        title: "初次见面",
        titleTranslation: "First Meeting",
        context: "Two students meet for the first time at school.",
        fullAudio: "audio/dialogue1.mp3",
        difficulty: "beginner",
        targetWords: [1, 2, 6, 7, 37, 38, 39], // IDs of vocabulary words in this dialogue
        quizTypes: ["fillBlank", "multipleChoice"], // Suggested quiz types
        lines: [
            { 
                speaker: "A", 
                chinese: "你好！我叫小明。", 
                pinyin: "Nǐ hǎo! Wǒ jiào Xiǎo Míng.", 
                english: "Hello! My name is Xiao Ming.", 
                audio: "audio/d1_line1.mp3",
                vocabulary: [1, 39] // Word IDs in this line
            },
            // ... rest of lines with vocabulary field
        ]
    },
    // ... other dialogues with same enhanced structure
];

// Slide titles for quiz mode
const slideTitles = {
    0: { title: "Quiz Start", subtitle: "Chinese Vocabulary Challenge", icon: "🏁" },
    1: { title: "初次见面", subtitle: "Fill in the Blank Quiz", icon: "🔤" },
    2: { title: "问时间", subtitle: "Multiple Choice Quiz", icon: "❓" },
    3: { title: "在餐厅", subtitle: "Matching Exercise", icon: "↔️" },
    4: { title: "问路", subtitle: "Listening Quiz", icon: "🎧" },
    5: { title: "家庭介绍", subtitle: "Fill in the Blank", icon: "🔤" },
    6: { title: "买东西", subtitle: "Multiple Choice", icon: "❓" },
    7: { title: "天气", subtitle: "Matching Exercise", icon: "↔️" },
    8: { title: "打电话", subtitle: "Listening Quiz", icon: "🎧" },
    9: { title: "在学校", subtitle: "Fill in the Blank", icon: "🔤" },
    10: { title: "颜色", subtitle: "Multiple Choice", icon: "❓" },
    11: { title: "周末计划", subtitle: "Matching Exercise", icon: "↔️" },
    12: { title: "看医生", subtitle: "Listening Quiz", icon: "🎧" },
    13: { title: "在商店", subtitle: "Fill in the Blank", icon: "🔤" },
    14: { title: "生日", subtitle: "Multiple Choice", icon: "❓" },
    15: { title: "运动", subtitle: "Matching Exercise", icon: "↔️" },
    16: { title: "旅行", subtitle: "Listening Quiz", icon: "🎧" },
    17: { title: "看电影", subtitle: "Fill in the Blank", icon: "🔤" },
    18: { title: "学习中文", subtitle: "Multiple Choice", icon: "❓" },
    19: { title: "未来计划", subtitle: "Matching Exercise", icon: "↔️" },
    20: { title: "Final Review", subtitle: "Comprehensive Test", icon: "📝" },
    21: { title: "Results", subtitle: "Quiz Complete", icon: "🏆" }
};

// Quiz-specific utility functions
function getRandomQuizQuestion(dialogue, type) {
    // Returns a quiz question object based on dialogue and type
    switch(type) {
        case 'fillBlank':
            return {
                type: 'fillBlank',
                question: "Complete the missing line in the dialogue:",
                options: [], // Will be populated
                correctAnswer: 0,
                dialogueLine: Math.floor(Math.random() * dialogue.lines.length)
            };
        case 'multipleChoice':
            const vocab = extractVocabularyFromDialogue(dialogue);
            return {
                type: 'multipleChoice',
                question: "What does this word mean?",
                word: vocab[Math.floor(Math.random() * vocab.length)],
                options: [], // Will be populated
                correctAnswer: 0
            };
        // ... other types
    }
}

function extractVocabularyFromDialogue(dialogue) {
    // Extract unique vocabulary words from dialogue
    const wordIds = new Set();
    dialogue.lines.forEach(line => {
        if (line.vocabulary) {
            line.vocabulary.forEach(id => wordIds.add(id));
        }
    });
    
    return vocabularyDB.filter(word => wordIds.has(word.id));
}

// Initialize quiz data structure
function initQuizData() {
    if (!localStorage.getItem('quizData')) {
        const quizData = {
            scores: {},
            attempts: {},
            completed: false,
            startTime: new Date().toISOString(),
            currentQuestion: 1
        };
        
        // Initialize scores for all quizzes
        for (let i = 1; i <= CONFIG.TOTAL_QUIZZES; i++) {
            quizData.scores[`quiz${i}`] = 0;
            quizData.attempts[`quiz${i}`] = 0;
        }
        
        // Initialize final review
        quizData.scores['finalReview'] = 0;
        quizData.attempts['finalReview'] = 0;
        
        localStorage.setItem('quizData', JSON.stringify(quizData));
    }
}

// Get current quiz data
function getQuizData() {
    const data = localStorage.getItem('quizData');
    return data ? JSON.parse(data) : initQuizData();
}

// Update quiz score
function updateQuizData(quizId, score) {
    const data = getQuizData();
    data.scores[quizId] = score;
    data.attempts[quizId] = (data.attempts[quizId] || 0) + 1;
    data.lastUpdated = new Date().toISOString();
    
    // Check if all quizzes are completed
    let allCompleted = true;
    for (let i = 1; i <= CONFIG.TOTAL_QUIZZES; i++) {
        if (data.attempts[`quiz${i}`] === 0) {
            allCompleted = false;
            break;
        }
    }
    
    if (allCompleted && data.attempts['finalReview'] > 0) {
        data.completed = true;
        data.endTime = new Date().toISOString();
    }
    
    localStorage.setItem('quizData', JSON.stringify(data));
    return data;
}

// Calculate overall score
function calculateOverallScore() {
    const data = getQuizData();
    let totalScore = 0;
    let maxScore = CONFIG.TOTAL_QUIZZES; // 1 point per quiz
    
    for (let i = 1; i <= CONFIG.TOTAL_QUIZZES; i++) {
        totalScore += data.scores[`quiz${i}`] || 0;
    }
    
    // Add final review (out of 10)
    totalScore += data.scores['finalReview'] || 0;
    maxScore += 10;
    
    return {
        score: totalScore,
        max: maxScore,
        percentage: Math.round((totalScore / maxScore) * 100),
        completed: data.completed,
        attempts: Object.values(data.attempts).reduce((a, b) => a + b, 0)
    };
}

// Initialize on load
initQuizData();