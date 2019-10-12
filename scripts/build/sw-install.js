"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.onload = function () {
    'use strict';
    var toastElement = document.getElementById('snackbar');
    var showToast = function (toastMessage) {
        toastElement.innerText = toastMessage;
        toastElement.className = 'show';
    };
    var hideToast = function () {
        toastElement.className = '';
    };
    window.addEventListener('appinstalled', function () {
        hideToast();
    });
    window.addEventListener('beforeinstallprompt', function (installPrompt) {
        installPrompt.preventDefault();
        showToast('Click this for quick access WhatsApp Direct!');
        toastElement.addEventListener('click', function () {
            hideToast();
            installPrompt.prompt();
            installPrompt.userChoice
                .then(function (choiceResult) {
                if (choiceResult.outcome !== 'accepted') {
                    showToast('Click this for quick access WhatsApp Direct!');
                }
            })
                .catch(function () {
                showToast('Click this for quick access WhatsApp Direct!');
            });
        });
    });
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('scripts/build/sw.js')
            .then(function (registration) {
            registration.addEventListener('updatefound', function () {
                if (navigator.serviceWorker.controller) {
                    var installingSW_1 = registration.installing;
                    if (installingSW_1) {
                        installingSW_1.onstatechange = function () {
                            switch (installingSW_1.state) {
                                case 'installed':
                                    showToast('Update available. Click this to reload.');
                                    toastElement.addEventListener('click', function () {
                                        hideToast();
                                        window.location.reload();
                                    });
                                    break;
                            }
                        };
                    }
                }
            });
        });
    }
};
//# sourceMappingURL=sw-install.js.map