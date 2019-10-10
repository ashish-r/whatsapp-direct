(function(){
    const mobileErrorElement = document.getElementById('mobile-error')
    const countryCodeElement = document.getElementById('country_code')
    const mobileNumberElement = document.getElementById('mobile_number')
    let currentCountryCode
    countryCodeElement.addEventListener('focus', function(){
        currentCountryCode = countryCodeElement.value
    })
    countryCodeElement.addEventListener('blur', function(){
        if(!countryCodeElement.value){
            countryCodeElement.value = currentCountryCode
        }
    })
    mobileNumberElement.addEventListener('focus', function(){
        mobileErrorElement.innerText = ''
    })
    document.getElementById('start_whatsapp').addEventListener('click', function(){
        const mobileNumber = mobileNumberElement.value
        if(!mobileNumber){
            return mobileErrorElement.innerText = 'Mobile number is mandatory'
        }
        const filteredNumber = +mobileNumber.replace(/\D/g, '')
        const filteredCountryCode = +countryCodeElement.value.replace(/\D/g, '')
        if(!filteredNumber || !filteredCountryCode){
            return mobileErrorElement.innerText = `Provide valid ${!filteredNumber ? 'mobile number' : 'country code'}`
        }
        const textMessage = encodeURI(document.getElementById('text_message').value || '')
        window.location.href=`https://wa.me/${filteredCountryCode}${filteredNumber}?text=${textMessage}`
    })
})()
