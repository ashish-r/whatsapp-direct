window.onload = function(){
    'use strict'
    const btnAdd = document.getElementById("sw_add")
    const btnReload = document.getElementById("sw_reload")
    /* Trigger when app install successful */
    window.addEventListener('appinstalled', function(evt){
        btnAdd.style.display = 'none'
    })

    window.addEventListener('beforeinstallprompt', function(e){
        e.preventDefault()
        btnAdd.style.display = 'inherit'
        btnAdd.addEventListener('click', function(e){
            btnAdd.style.display = 'none'
            e.prompt();
            // Wait for the user to respond to the prompt
            e.userChoice
            .then(function(choiceResult){
                if (choiceResult.outcome !== 'accepted') {
                    btnAdd.style.display = 'inherit'
                }
            })
            .catch(function(choiceResult){
                btnAdd.style.display = 'inherit'
            })
        })
    })
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            registration.addEventListener("updatefound", function() {
                if (navigator.serviceWorker.controller) {
                  var installingSW = registration.installing
                  installingSW.onstatechange = function() {
                    switch(installingSW.state) {
                        case 'installed':
                            btnReload.style.display = 'inherit'
                            btnReload.addEventListener('click', function(){
                                window.location.reload()
                            })
                            break
                    }
                  }
                }
            })
        })
    }
}