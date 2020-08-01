import { ServiceWorkerInstallResult, ServiceWorkerEvent } from './types'

window.onload = function () {
    'use strict'
    const toastElement = document.getElementById('snackbar') as HTMLElement
    const showToast = (toastMessage: string) => {
        toastElement.innerText = toastMessage
        toastElement.className = 'show'
        setTimeout(hideToast, 7000)
    }
    const hideToast = () => {
        toastElement.className = ''
    }
    /* Trigger when app install successful */
    window.addEventListener('appinstalled', () => {
        hideToast()
    })

    window.addEventListener(
        'beforeinstallprompt',
        (installPrompt: ServiceWorkerEvent) => {
            installPrompt.preventDefault()
            showToast('Click this for quick access WhatsApp Direct!')
            toastElement.addEventListener('click', () => {
                hideToast()
                installPrompt.prompt()
                // Wait for the user to respond to the prompt
                installPrompt.userChoice
                    .then((choiceResult: ServiceWorkerInstallResult) => {
                        if (choiceResult.outcome !== 'accepted') {
                            showToast(
                                'Click this for quick access WhatsApp Direct!',
                            )
                        }
                    })
                    .catch(() => {
                        showToast(
                            'Click this for quick access WhatsApp Direct!',
                        )
                    })
            })
        },
    )
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then((registration) => {
            registration.addEventListener('updatefound', () => {
                if (navigator.serviceWorker.controller) {
                    const installingSW = registration.installing
                    if (installingSW) {
                        installingSW.onstatechange = () => {
                            switch (installingSW.state) {
                                case 'installed':
                                    showToast(
                                        'Update available. Click this to reload.',
                                    )
                                    toastElement.addEventListener(
                                        'click',
                                        () => {
                                            hideToast()
                                            window.location.reload()
                                        },
                                    )
                                    break
                            }
                        }
                    }
                }
            })
        })
    }
}
