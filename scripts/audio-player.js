// audio-player.js - Audio Player Module

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