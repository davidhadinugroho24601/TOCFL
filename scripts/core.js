// core.js - Main Initialization

let slideManager;
let contentGenerator;

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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    
    try {
        // 1. First, generate all content
        contentGenerator = new ContentGenerator();
        const totalSlides = contentGenerator.initialize();
        console.log(`Generated ${totalSlides} slides`);
        
        // 2. Then initialize slide manager
        slideManager = new SlideManager();
        slideManager.totalSlides = totalSlides; // Update with actual count
        slideManager.slides = document.querySelectorAll('.slide'); // Refresh slide references
        slideManager.initialize();
        
        // Make slideManager globally accessible for word card audio
        window.slideManager = slideManager;
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});