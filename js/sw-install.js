window.onload = function(){
    'use strict'
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
    }
    /* Trigger when app install successful */
    window.addEventListener('appinstalled', function(evt){
        document.getElementById("mobile_number").value = 9
    })

    let deferredPrompt

    window.addEventListener('beforeinstallprompt', function(e){
        // Stash the event so it can be triggered later.
        deferredPrompt = e
        document.getElementById("mobile_number").value = 999
    })

    const btnAdd = document.getElementById("sw")
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
}