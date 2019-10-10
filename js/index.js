(function(){
    const mobileErrorElement = document.getElementById('mobile-error')
    document.getElementById('mobile_number').addEventListener('focus', function(){
        mobileErrorElement.innerText = ''
    })
    document.getElementById('start_whatsapp').addEventListener('click', function(){
        const mobileNumber = document.getElementById('mobile_number').value
        if(!mobileNumber){
            return mobileErrorElement.innerText = 'Mobile number is mandatory'
        }
        const filteredNumber = +mobileNumber.replace(/\D/g, '')
        if(!filteredNumber){
            return mobileErrorElement.innerText = 'Provide valid mobile number'
        }
        const textMessage = encodeURI(document.getElementById('text_message').value || '')
        window.location.href=`https://wa.me/91${filteredNumber}?text=${textMessage}`
    })
})()
