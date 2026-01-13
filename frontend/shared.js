// Shared JavaScript for The Useless App Suite

// --- LOCAL STORAGE UTILITIES ---
const Storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(`useless-suite-${key}`);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn(`Storage get error for ${key}:`, e);
            return defaultValue;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(`useless-suite-${key}`, JSON.stringify(value));
        } catch (e) {
            console.warn(`Storage set error for ${key}:`, e);
        }
    },
    remove(key) {
        try {
            localStorage.removeItem(`useless-suite-${key}`);
        } catch (e) {
            console.warn(`Storage remove error for ${key}:`, e);
        }
    },
    clear() {
        try {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('useless-suite-')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (e) {
            console.warn('Storage clear error:', e);
        }
    }
};

// --- AUDIO UTILITIES ---
let sharedAudioCtx = null;

function initSharedAudio() {
    if (sharedAudioCtx && sharedAudioCtx.state !== 'closed') return;
    try {
        sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Audio context not available:', e);
        return;
    }
}

function playClickSound(type = 'default') {
    initSharedAudio();
    if (!sharedAudioCtx || sharedAudioCtx.state === 'suspended') {
        if (sharedAudioCtx) sharedAudioCtx.resume();
        return;
    }

    const oscillator = sharedAudioCtx.createOscillator();
    const gainNode = sharedAudioCtx.createGain();

    if (type === 'click') {
        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
    } else if (type === 'confirm') {
        oscillator.frequency.value = 400;
        oscillator.type = 'sine';
    } else {
        oscillator.frequency.value = 500;
        oscillator.type = 'sine';
    }

    gainNode.gain.setValueAtTime(0.15, sharedAudioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, sharedAudioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(sharedAudioCtx.destination);

    oscillator.start();
    oscillator.stop(sharedAudioCtx.currentTime + 0.1);
}

// --- BACK TO HUB MODAL ---
function initBackToHubModal() {
    const backBtns = document.querySelectorAll('.back-btn');
    
    // Create modal once if it doesn't exist
    let modal = document.getElementById('back-to-hub-modal');
    let overlay = document.getElementById('back-to-hub-overlay');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'back-to-hub-modal';
        modal.className = 'glass';
        modal.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; max-width: 400px; text-align: center; display: none; padding: 2rem;';
        modal.innerHTML = `
            <p id="back-modal-text" class="text-sm leading-relaxed mb-5"></p>
            <div class="flex gap-3 justify-center">
                <button id="back-modal-cancel" class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold tracking-widest uppercase transition-all active:scale-95">Cancel</button>
                <button id="back-modal-confirm" class="px-6 py-3 bg-white text-black rounded-xl text-xs font-black tracking-widest uppercase transition-all active:scale-95">Continue</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Overlay
        overlay = document.createElement('div');
        overlay.id = 'back-to-hub-overlay';
        overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(4px); z-index: 999; display: none;';
        document.body.insertBefore(overlay, modal);

        // Event listeners
        const cancelBtn = document.getElementById('back-modal-cancel');
        const confirmBtn = document.getElementById('back-modal-confirm');

        cancelBtn.addEventListener('click', () => {
            playClickSound('click');
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Store hub URL in modal data attribute
        modal.dataset.hubUrl = '../index.html';

        confirmBtn.addEventListener('click', () => {
            playClickSound('confirm');
            window.location.href = modal.dataset.hubUrl;
        });

        overlay.addEventListener('click', () => {
            playClickSound('click');
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
    }

    // Override link behavior for all back buttons
    backBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            playClickSound('click');
            
            const modalText = document.getElementById('back-modal-text');
            const hubUrl = btn.getAttribute('href') || '../index.html';
            
            // Store hub URL in modal
            modal.dataset.hubUrl = hubUrl;
            
            modalText.innerHTML = 'Loading System Optimization...';
            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToHubModal);
} else {
    initBackToHubModal();
}
