

// Audio Player Module
class AudioPlayer {
    constructor() {
        this.currentAudio = null;
        this.isPlaying = false;
        this.isMuted = false;
        this.currentButton = null;
        this.audioCache = new Map();
    }

    async playAudio(src, button) {
        if (this.isMuted) return;
        
        // Toggle if same button clicked
        if (this.currentAudio && !this.currentAudio.paused && this.currentButton === button) {
            this.pauseAudio();
            return;
        }
        
        // Stop current audio if playing
        if (this.currentAudio && !this.currentAudio.paused) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            if (this.currentButton) {
                this.currentButton.classList.remove('playing');
                this.currentButton.querySelector('span').textContent = '▶';
            }
        }
        
        try {
            // Cache audio
            let audio;
            if (this.audioCache.has(src)) {
                audio = this.audioCache.get(src);
            } else {
                audio = new Audio(src);
                this.audioCache.set(src, audio);
            }
            
            this.currentAudio = audio;
            this.currentButton = button;
            
            // Event handlers
            this.currentAudio.onplay = () => this.onPlay(button);
            this.currentAudio.onpause = () => this.onPause(button);
            this.currentAudio.onended = () => this.onEnd(button);
            this.currentAudio.onerror = (error) => this.onError(error, button);
            
            await this.currentAudio.play();
            
        } catch (error) {
            console.error('Audio play failed:', error);
            this.onError(error, button);
        }
    }

    onPlay(button) {
        this.isPlaying = true;
        if (button) {
            button.classList.add('playing');
            button.querySelector('span').textContent = '⏸';
        }
    }

    onPause(button) {
        this.isPlaying = false;
        if (button) {
            button.classList.remove('playing');
            button.querySelector('span').textContent = '▶';
        }
    }

    onEnd(button) {
        this.isPlaying = false;
        if (button) {
            button.classList.remove('playing');
            button.querySelector('span').textContent = '▶';
        }
    }

    onError(error, button) {
        console.error('Audio error:', error);
        this.isPlaying = false;
        if (button) {
            button.classList.remove('playing');
            button.querySelector('span').textContent = '▶';
        }
    }

    pauseAudio() {
        if (this.currentAudio && !this.currentAudio.paused) {
            this.currentAudio.pause();
            this.isPlaying = false;
            if (this.currentButton) {
                this.currentButton.classList.remove('playing');
                this.currentButton.querySelector('span').textContent = '▶';
            }
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.currentAudio) {
            this.currentAudio.muted = this.isMuted;
        }
        return this.isMuted;
    }
    
    stopAll() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
        }
        this.isPlaying = false;
        if (this.currentButton) {
            this.currentButton.classList.remove('playing');
            this.currentButton.querySelector('span').textContent = '▶';
        }
    }
}

// Slide Manager Module
class SlideManager {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.allRevealed = false;
        this.wordCards = [];
        this.audioPlayer = new AudioPlayer();
        
        // DOM Elements
        this.slides = document.querySelectorAll('.slide');
        this.slideCounter = document.getElementById('slideCounter');
        this.progressBar = document.getElementById('progressBar');
        this.floatingMuteBtn = document.getElementById('floatingMuteBtn');
        this.floatingReviewBtn = document.getElementById('floatingReviewBtn');
        this.floatingRevealBtn = document.getElementById('floatingRevealBtn');
        this.floatingPrevBtn = document.getElementById('floatingPrevBtn');
        this.floatingNextBtn = document.getElementById('floatingNextBtn');
        this.wordGrid = document.getElementById('wordGrid');
        this.totalSlidesCount = document.getElementById('totalSlidesCount');
        this.currentSlideNumber = document.getElementById('currentSlideNumber');
        this.slideTitlePreview = document.getElementById('slideTitlePreview');
        this.navSlideInfo = document.getElementById('navSlideInfo');
        this.slideSelectDropdown = document.getElementById('slideSelectDropdown');
        
        // Touch support
        this.touchStartX = 0;
        this.touchEndX = 0;
    }
    
    // Navigation Methods
    goToSlide(index) {
        this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
        this.updateSlide();
    }
    
    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    
    updateSlide() {
        this.audioPlayer.stopAll();
        this.closeAllPopups();
        this.closeSlideDropdown();
        
        // Update active slide
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update progress
        const slideNumber = this.currentSlide + 1;
        this.slideCounter.textContent = `${slideNumber}/${this.totalSlides}`;
        this.progressBar.style.width = `${((this.currentSlide + 1) / this.totalSlides) * 100}%`;
        
        this.updateSlideInfo();
        
        // Reset reveal state
        this.allRevealed = false;
        this.floatingRevealBtn.textContent = '👁️';
        
        // Clear any existing reveal state
        document.querySelectorAll('.pinyin-text.revealed, .english-text.revealed, .dialogue-line.revealed, .word-card.revealed').forEach(el => {
            el.classList.remove('revealed');
        });
        
        // Special slide handling
        if (this.currentSlide === CONFIG.REVIEW_SLIDE_INDEX) {
            this.populateWordReview();
        }
        
        if (this.currentSlide === this.totalSlides - 1) {
            const completedWordsEl = document.getElementById('completedWords');
            if (completedWordsEl) {
                completedWordsEl.textContent = vocabularyDB.length;
            }
        }
    }
    
    // Slide Selection Dropdown
    initializeSlideSelection() {
        this.totalSlidesCount.textContent = this.totalSlides;
        this.slideSelectDropdown.innerHTML = '';
        
        this.slides.forEach((slide, index) => {
            const slideData = slideTitles[index] || { 
                title: `Slide ${index + 1}`, 
                subtitle: '', 
                icon: '📄' 
            };
            
            const option = document.createElement('div');
            option.className = `slide-option ${index === this.currentSlide ? 'current' : ''}`;
            option.innerHTML = `
                <div class="slide-number">${index + 1}</div>
                <div class="slide-info">
                    <div class="slide-option-title">${slideData.icon} ${slideData.title}</div>
                    <div class="slide-option-subtitle">${slideData.subtitle}</div>
                </div>
            `;
            
            option.addEventListener('click', () => {
                this.goToSlide(index);
                this.closeSlideDropdown();
            });
            
            this.slideSelectDropdown.appendChild(option);
        });
        
        this.navSlideInfo.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleSlideDropdown();
        });
        
        document.addEventListener('click', () => this.closeSlideDropdown());
        this.slideSelectDropdown.addEventListener('click', (e) => e.stopPropagation());
    }
    
    toggleSlideDropdown() {
        this.slideSelectDropdown.classList.toggle('active');
        this.navSlideInfo.classList.toggle('active');
    }
    
    closeSlideDropdown() {
        this.slideSelectDropdown.classList.remove('active');
        this.navSlideInfo.classList.remove('active');
    }
    
    updateSlideInfo() {
        const slideNumber = this.currentSlide + 1;
        const slideData = slideTitles[this.currentSlide] || { 
            title: `Slide ${slideNumber}`, 
            subtitle: '' 
        };
        
        this.currentSlideNumber.textContent = slideNumber;
        this.slideTitlePreview.textContent = slideData.title;
        
        // Update current option in dropdown
        const options = this.slideSelectDropdown.querySelectorAll('.slide-option');
        options.forEach((option, index) => {
            option.classList.toggle('current', index === this.currentSlide);
        });
    }
    
    // Word Review Methods
    populateWordReview() {
        if (!this.wordGrid) return;
        
        this.wordGrid.innerHTML = '';
        this.wordCards = [];
        
        vocabularyDB.forEach(word => {
            const card = this.createWordCard(word);
            this.wordGrid.appendChild(card);
            this.wordCards.push(card);
        });
        
        this.bindWordCardAudio();
    }
    
    createWordCard(word) {
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
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.word-audio-btn')) {
                card.classList.toggle('revealed');
                this.updateRevealAllState();
            }
        });
        
        return card;
    }
    
    bindWordCardAudio() {
        const wordAudioBtns = this.wordGrid.querySelectorAll('.word-audio-btn');
        wordAudioBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const audioSrc = btn.getAttribute('data-audio');
                if (audioSrc) {
                    this.audioPlayer.playAudio(audioSrc, btn);
                }
            });
        });
    }
    
    // Reveal Methods
    toggleRevealAll() {
        const currentSlideElement = this.slides[this.currentSlide];
        this.allRevealed = !this.allRevealed;
        
        const wordCards = currentSlideElement.querySelectorAll('.word-card');
        
        if (wordCards.length > 0) {
            // Word review slide
            wordCards.forEach(card => {
                card.classList.toggle('revealed', this.allRevealed);
            });
        } else {
            // Dialogue slide
            this.toggleAllDialogueElements(currentSlideElement, this.allRevealed);
        }
        
        this.floatingRevealBtn.textContent = this.allRevealed ? '🙈' : '👁️';
    }
    
    toggleAllDialogueElements(slideElement, shouldReveal) {
        const elements = [
            ...slideElement.querySelectorAll('.pinyin-text'),
            ...slideElement.querySelectorAll('.english-text'),
            ...slideElement.querySelectorAll('.dialogue-line')
        ];
        
        elements.forEach(element => {
            element.classList.toggle('revealed', shouldReveal);
        });
    }
    
    updateRevealAllState() {
        const currentSlideElement = this.slides[this.currentSlide];
        const wordCards = currentSlideElement.querySelectorAll('.word-card');
        
        if (wordCards.length > 0) {
            // Check word cards
            const allWordCardsRevealed = currentSlideElement.querySelectorAll('.word-card:not(.revealed)').length === 0;
            this.allRevealed = allWordCardsRevealed;
        } else {
            // Check dialogue elements
            const allPinyinRevealed = currentSlideElement.querySelectorAll('.pinyin-text:not(.revealed)').length === 0;
            const allEnglishRevealed = currentSlideElement.querySelectorAll('.english-text:not(.revealed)').length === 0;
            this.allRevealed = allPinyinRevealed && allEnglishRevealed;
        }
        
        this.floatingRevealBtn.textContent = this.allRevealed ? '🙈' : '👁️';
    }
    
    // Event Handlers
    handleDialogueLineClick(e) {
        const dialogueLine = e.target.closest('.dialogue-line');
        if (dialogueLine && !e.target.closest('.audio-btn') && !e.target.closest('.vocab-highlight')) {
            const pinyin = dialogueLine.querySelector('.pinyin-text');
            const english = dialogueLine.querySelector('.english-text');
            
            if (pinyin) pinyin.classList.toggle('revealed');
            if (english) english.classList.toggle('revealed');
            dialogueLine.classList.toggle('revealed');
            
            this.updateRevealAllState();
        }
    }
    
    handleAudioClick(e) {
        const audioBtn = e.target.closest('.audio-btn, .dialogue-audio-btn, .word-audio-btn');
        if (audioBtn) {
            e.stopPropagation();
            const audioSrc = audioBtn.getAttribute('data-audio');
            if (audioSrc) {
                this.audioPlayer.playAudio(audioSrc, audioBtn);
            }
        }
    }
    
    handleVocabClick(e) {
        const vocabHighlight = e.target.closest('.vocab-highlight');
        if (vocabHighlight) {
            e.stopPropagation();
            e.preventDefault();
            
            const word = vocabHighlight.getAttribute('data-word');
            const vocab = this.findVocabulary(word);
            
            if (vocab) {
                this.showVocabPopup(vocab);
            }
        }
    }
    
    findVocabulary(word) {
        return vocabularyDB.find(v => 
            v.chinese.includes(word) || 
            word.includes(v.chinese.replace(/[()]/g, ''))
        );
    }
    
    // Popup Methods
    showVocabPopup(vocab) {
        this.closeAllPopups();
        
        const overlay = document.createElement('div');
        overlay.className = 'vocab-popup-overlay';
        overlay.onclick = () => this.closeAllPopups();
        
        const popup = document.createElement('div');
        popup.className = 'vocab-popup';
        
        popup.innerHTML = `
            <div class="chinese">${vocab.chinese}</div>
            <div class="pinyin">${vocab.pinyin}</div>
            <div class="english">${vocab.english}</div>
            <button class="popup-audio-btn" id="popupAudioBtn">
                <span>▶</span>
            </button>
            <button class="popup-close-btn" id="popupCloseBtn">Close</button>
        `;
        
        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        
        this.bindPopupEvents(popup, vocab);
    }
    
    bindPopupEvents(popup, vocab) {
        const popupAudioBtn = popup.querySelector('#popupAudioBtn');
        const closePopupBtn = popup.querySelector('#popupCloseBtn');
        
        popupAudioBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            if (vocab.audio) {
                this.audioPlayer.playAudio(vocab.audio, popupAudioBtn);
            }
        });
        
        closePopupBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.closeAllPopups();
        });
        
        // Auto-play after delay
        setTimeout(() => {
            if (vocab.audio) {
                this.audioPlayer.playAudio(vocab.audio, popupAudioBtn);
            }
        }, CONFIG.AUDIO_DELAY);
        
        popup.addEventListener('click', (event) => event.stopPropagation());
    }
    
    closeAllPopups() {
        const existingPopup = document.querySelector('.vocab-popup');
        const existingOverlay = document.querySelector('.vocab-popup-overlay');
        if (existingPopup) existingPopup.remove();
        if (existingOverlay) existingOverlay.remove();
    }
    
    // Keyboard Navigation
    handleKeyDown(e) {
        switch(e.key) {
            case 'ArrowLeft':
                if (this.currentSlide > 0) this.prevSlide();
                break;
            case 'ArrowRight':
                if (this.currentSlide < this.totalSlides - 1) this.nextSlide();
                break;
            case ' ':
                e.preventDefault();
                this.playCurrentDialogue();
                break;
            case 'Escape':
                this.closeAllPopups();
                this.closeSlideDropdown();
                break;
        }
    }
    
    playCurrentDialogue() {
        const currentDialogueBtn = this.slides[this.currentSlide].querySelector('.dialogue-audio-btn');
        if (currentDialogueBtn) {
            currentDialogueBtn.click();
        }
    }
    
    // Touch/Swipe Support
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > CONFIG.SWIPE_THRESHOLD) {
            if (diff > 0 && this.currentSlide < this.totalSlides - 1) {
                this.nextSlide();
            } else if (diff < 0 && this.currentSlide > 0) {
                this.prevSlide();
            }
        }
    }
    
    // Control Methods
    toggleMute() {
        const isMuted = this.audioPlayer.toggleMute();
        const muteIcon = isMuted ? '🔊' : '🔇';
        this.floatingMuteBtn.textContent = muteIcon;
        this.floatingMuteBtn.classList.toggle('muted', isMuted);
    }
    
    goToReview() {
        this.goToSlide(CONFIG.REVIEW_SLIDE_INDEX);
    }
    
    // Initialize Event Listeners
    initializeEventListeners() {
        // Navigation buttons
        this.floatingPrevBtn.addEventListener('click', () => this.prevSlide());
        this.floatingNextBtn.addEventListener('click', () => this.nextSlide());
        
        // Control buttons
        this.floatingMuteBtn.addEventListener('click', () => this.toggleMute());
        this.floatingReviewBtn.addEventListener('click', () => this.goToReview());
        this.floatingRevealBtn.addEventListener('click', () => this.toggleRevealAll());
        
        // Global event listeners
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        document.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Delegated event listeners
        document.addEventListener('click', (e) => {
            this.handleDialogueLineClick(e);
            this.handleAudioClick(e);
            this.handleVocabClick(e);
        });
    }
    
    // Initialize Everything
    initialize() {
        this.initializeSlideSelection();
        this.initializeEventListeners();
        this.updateSlide();
        this.populateWordReview();
    }
}

// Make SlideManager globally accessible
let slideManager;

document.addEventListener('DOMContentLoaded', () => {
    slideManager = new SlideManager();
    slideManager.initialize();
});

// Global functions for HTML onclick handlers
function goToSlide(index) {
    if (slideManager) {
        slideManager.goToSlide(index);
    }
}

function toggleMute() {
    if (slideManager) {
        slideManager.toggleMute();
    }
}

function toggleRevealAll() {
    if (slideManager) {
        slideManager.toggleRevealAll();
    }
}

function goToReview() {
    if (slideManager) {
        slideManager.goToSlide(CONFIG.REVIEW_SLIDE_INDEX);
    }
}
