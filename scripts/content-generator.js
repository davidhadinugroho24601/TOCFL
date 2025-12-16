// content-generator.js - Generates all slides dynamically with correct order

class ContentGenerator {
    constructor() {
        this.container = document.querySelector('.container');
        this.progressBarContainer = document.querySelector('.progress-container');
    }
    
    // Generate all slides in correct order
    generateAllSlides() {
        // First, remove any existing slides except header controls and progress bar
        const slidesToRemove = document.querySelectorAll('.slide');
        slidesToRemove.forEach(slide => slide.remove());
        
        // Generate slides in correct order
        this.generateIntroSlide();
        this.generateDialogueSlides();
        this.generateReviewSlide();
        this.generateConclusionSlide();
        
        // Return total number of slides
        return document.querySelectorAll('.slide').length;
    }
    
    // Generate intro slide (slide 0)
    generateIntroSlide() {
        const introHTML = `
            <div class="slide active" id="slide0">
                <div class="intro-slide">
                    <h1 class="intro-title">Chinese Dialogue Practice</h1>
                    <p class="intro-subtitle">Master 80 Target Words Through 19 Natural Conversations</p>
                    
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">80</div>
                            <div class="stat-label">Target Vocabulary Words</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">19</div>
                            <div class="stat-label">Dialogue Scenes</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">76</div>
                            <div class="stat-label">Example Sentences</div>
                        </div>
                    </div>

                    <button class="start-btn" onclick="goToSlide(1)">
                        Start Learning →
                    </button>
                </div>
            </div>
        `;
        
        // Insert intro slide BEFORE the progress bar
        this.progressBarContainer.insertAdjacentHTML('beforebegin', introHTML);
    }
    
    // Generate dialogue slides (slide 1-19)
    generateDialogueSlides() {
        dialoguesDB.forEach((dialogue, index) => {
            const slideNumber = index + 1;
            const slideData = slideTitles[slideNumber] || { 
                title: `Dialogue ${slideNumber}`, 
                subtitle: "Conversation" 
            };
            
            const dialogueHTML = this.createDialogueSlide(slideNumber, dialogue, slideData);
            
            // Insert each dialogue slide BEFORE the progress bar
            this.progressBarContainer.insertAdjacentHTML('beforebegin', dialogueHTML);
        });
    }
    
    // Create individual dialogue slide
    createDialogueSlide(slideNumber, dialogue, slideData) {
        const linesHTML = dialogue.lines.map((line, lineIndex) => {
            return `
                <div class="dialogue-line">
                    <div class="speaker-avatar speaker-${line.speaker}">${line.speaker}</div>
                    <div class="dialogue-content">
                        <div class="chinese-text">${line.chinese}</div>
                        <div class="pinyin-text">${line.pinyin}</div>
                        <div class="english-text">${line.english}</div>
                        <div class="audio-controls-mini">
                            <button class="audio-btn" data-audio="${line.audio}">
                                <span>▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="slide" id="slide${slideNumber}">
                <div class="dialogue-header">
                    <h2 class="slide-title">
                        ${dialogue.title}
                        <div class="title-translation">${dialogue.titleTranslation}</div>
                    </h2>
                </div>
                
                <div class="dialogue-audio-container">
                    <button class="dialogue-audio-btn" data-audio="${dialogue.fullAudio}">
                        <span>▶</span> Play Dialogue
                    </button>
                </div>
                
                <div class="dialogue-context">${dialogue.context}</div>
                
                <div class="dialogue-container">
                    ${linesHTML}
                </div>
            </div>
        `;
    }
    
    // Generate vocabulary review slide (slide 20)
    generateReviewSlide() {
        const reviewHTML = `
            <div class="slide" id="slide20">
                <div class="word-review-slide">
                    <div class="dialogue-header">
                        <h2 class="slide-title">
                            📚 Vocabulary Mastery
                            <div class="title-translation">All 80 Target Words</div>
                        </h2>
                    </div>
                    
                    <div class="dialogue-context">
                        Click on any word card to reveal pronunciation and meaning. Audio button for pronunciation.
                    </div>
                    
                    <div class="word-grid" id="wordGrid">
                        <!-- Word cards will be generated by generateWordCards() -->
                    </div>
                </div>
            </div>
        `;
        
        // Insert review slide BEFORE the progress bar
        this.progressBarContainer.insertAdjacentHTML('beforebegin', reviewHTML);
    }
    
    // Generate conclusion slide (slide 21)
    generateConclusionSlide() {
        const conclusionHTML = `
            <div class="slide" id="slide21">
                <div class="conclusion-slide">
                    <h1 class="conclusion-title">🎉 Course Complete!</h1>
                    <p class="conclusion-subtitle">You've mastered 80 essential Chinese vocabulary words through natural conversations!</p>
                    
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number" id="completedWords">80</div>
                            <div class="stat-label">Words Mastered</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">19</div>
                            <div class="stat-label">Dialogues Completed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Progress</div>
                        </div>
                    </div>
                    
                  <div style="display: flex; gap: 15px; justify-content: center; margin-top: 40px;">
    <button class="start-btn" onclick="window.location.href='https://davidhadinugroho24601.github.io/TOCFL/';" style="background: linear-gradient(135deg, #FF9800 0%, #FF5722 100%);">
        🏠 Home
    </button>
    <button class="start-btn" onclick="goToSlide(0)" style="background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);">
        ↩️ Restart
    </button>
    <button class="start-btn" onclick="goToSlide(20)" style="background: linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%);">
        📖 Review Words
    </button>
</div>
                </div>
            </div>
        `;
        
        // Insert conclusion slide BEFORE the progress bar
        this.progressBarContainer.insertAdjacentHTML('beforebegin', conclusionHTML);
    }
    
    // Generate word cards for review slide
    generateWordCards() {
        const wordGrid = document.getElementById('wordGrid');
        if (!wordGrid) return;
        
        wordGrid.innerHTML = '';
        
        vocabularyDB.forEach(word => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.innerHTML = `
                <button class="word-audio-btn" data-audio="${word.audio}">
                    <span>▶</span>
                </button>
                <div class="chinese">${word.chinese}</div>
                <div class="pinyin">${word.pinyin}</div>
                <div class="english">${word.english}</div>
            `;
            
            // Add click event for reveal
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.word-audio-btn')) {
                    card.classList.toggle('revealed');
                }
            });
            
            // Add audio button event
            const audioBtn = card.querySelector('.word-audio-btn');
            if (audioBtn) {
                audioBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const audioSrc = audioBtn.getAttribute('data-audio');
                    if (audioSrc) {
                        // We'll use the global audioPlayer from slide-manager
                        if (window.slideManager && window.slideManager.audioPlayer) {
                            window.slideManager.audioPlayer.playAudio(audioSrc, audioBtn);
                        }
                    }
                });
            }
            
            wordGrid.appendChild(card);
        });
    }
    
    // Bind audio events to dialogue buttons
    bindAudioEvents() {
        // This will be handled by slide-manager's event delegation
        // But we need to ensure audio buttons exist
        console.log('Audio events ready to be bound by slide-manager');
    }
    
    // Initialize and generate everything
    initialize() {
        const totalSlides = this.generateAllSlides();
        this.generateWordCards();
        this.bindAudioEvents();
        return totalSlides;
    }
}