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
