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
    } else if (type === 'random') {
        // Random sound for buttons
        const frequencies = [300, 400, 500, 600, 700, 800];
        const types = ['sine', 'square', 'triangle', 'sawtooth'];
        oscillator.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
        oscillator.type = types[Math.floor(Math.random() * types.length)];
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
const uselessLifeHacks = [
    "💡 Life Hack: To save time, stop doing things. Time saved: infinite.",
    "💡 Life Hack: Want to be productive? Don't. Productivity is overrated.",
    "💡 Life Hack: The best way to organize your life is to not organize it at all.",
    "💡 Life Hack: Save money by not spending it. Revolutionary, we know.",
    "💡 Life Hack: To avoid stress, simply stop caring. Works 0% of the time.",
    "💡 Life Hack: The secret to happiness? Lower your expectations to zero.",
    "💡 Life Hack: Want better sleep? Try sleeping. Groundbreaking advice.",
    "💡 Life Hack: To find something, stop looking for it. It won't help, but it's a hack.",
    "💡 Life Hack: The key to success is not trying. Guaranteed to not work.",
    "💡 Life Hack: Save energy by doing nothing. Maximum efficiency achieved.",
    "💡 Life Hack: To remember something, forget it first. Makes perfect sense.",
    "💡 Life Hack: The best way to solve a problem is to ignore it completely.",
    "💡 Life Hack: Want to be happy? Don't. Happiness is a myth anyway.",
    "💡 Life Hack: To save space, throw everything away. Including this tip.",
    "💡 Life Hack: The secret to productivity? Procrastinate everything. Forever.",
    "💡 Life Hack: Want to be organized? Chaos is the new organization.",
    "💡 Life Hack: To save time in the morning, just don't wake up.",
    "💡 Life Hack: The best exercise is not exercising. Your body will thank you never.",
    "💡 Life Hack: To avoid mistakes, never do anything. Flawless logic.",
    "💡 Life Hack: Want to be successful? Lower the bar. Then remove the bar.",
    "💡 Life Hack: The key to motivation is having no motivation at all.",
    "💡 Life Hack: To save money, just be broke. Problem solved.",
    "💡 Life Hack: Want better focus? Stop focusing. Mind-blowing, right?",
    "💡 Life Hack: The best way to plan is to not plan. Plans are useless anyway.",
    "💡 Life Hack: To avoid disappointment, expect nothing. Still disappointed?",
    "💡 Life Hack: Want to be efficient? Do everything inefficiently. It's a choice.",
    "💡 Life Hack: The secret to time management? Time doesn't exist. Problem solved.",
    "💡 Life Hack: To be more creative, stop creating. Paradox achieved.",
    "💡 Life Hack: Want to learn faster? Don't learn. Knowledge is overrated.",
    "💡 Life Hack: The best way to achieve goals? Don't set any. Zero failure rate."
];

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
            playClickSound('random'); // Random sound for Cancel button
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Store hub URL in modal data attribute
        modal.dataset.hubUrl = '../index.html';

        confirmBtn.addEventListener('click', () => {
            playClickSound('random'); // Random sound for Continue button
            window.location.href = modal.dataset.hubUrl;
        });

        overlay.addEventListener('click', () => {
            playClickSound('random');
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
    }

    // Override link behavior for all back buttons
    backBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            playClickSound('random'); // Random sound for back button
            
            const modalText = document.getElementById('back-modal-text');
            const hubUrl = btn.getAttribute('href') || '../index.html';
            
            // Store hub URL in modal
            modal.dataset.hubUrl = hubUrl;
            
            // Show random useless life hack tip
            const randomTip = uselessLifeHacks[Math.floor(Math.random() * uselessLifeHacks.length)];
            modalText.innerHTML = randomTip;
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
