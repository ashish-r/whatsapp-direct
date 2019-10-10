window.onload = function(){
    'use strict'
    const btnAdd = document.getElementById("sw_add")
    const btnReload = document.getElementById("sw_reload")
    /* Trigger when app install successful */
    window.addEventListener('appinstalled', function(evt){
        btnAdd.style.display = 'none'
    })

    let deferredPrompt

    window.addEventListener('beforeinstallprompt', function(e){
        // Stash the event so it can be triggered later.
        e.preventDefault()
        deferredPrompt = e
        btnAdd.style.display = 'inherit'
    })

    btnAdd.addEventListener('click', function(e){
        btnAdd.style.display = 'none'
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
        .then(function(choiceResult){
            if (choiceResult.outcome === 'accepted') {
                deferredPrompt = null
            } else {
                btnAdd.style.display = 'inherit'
            }
        })
        .catch(function(choiceResult){
            btnAdd.style.display = 'inherit'
        })
    })
    btnReload.addEventListener('click', function(e){
        window.location.reload()
    })
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => {
            reg.onupdatefound = function(){
                const installingWorker = reg.installing
                installingWorker.onstatechange = function(){
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                btnReload.style.display = 'inherit'
                            break
                    }
                };
            };
        })
    }
}