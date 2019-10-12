(function(){
    const mobileErrorElement = document.getElementById('mobile-error')
    const countryCodeElement = document.getElementById('country_code')
    const mobileNumberElement = document.getElementById('mobile_number')
    let currentCountryCode
    countryCodeElement.addEventListener('focus', function(){
        currentCountryCode = countryCodeElement.value
        mobileErrorElement.innerText = ''
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
        const textMessage = encodeURIComponent(document.getElementById('text_message').value || '')
        window.open(`https://wa.me/${filteredCountryCode}${filteredNumber}?text=${textMessage}`, '_blank')
    })
    document.getElementById('facebook_share').addEventListener('click', function(){
        shareWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&t=${document.title}`
        )
    })
    document.getElementById('twitter_share').addEventListener('click', function(){
        shareWindow(`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`)
    })
})()
function shareWindow(url){
    window.open(url, 'sharer', 'toolbar=0,status=0,width=626,height=436')
}
