"use strict";
(function () {
    var mobileErrorElement = document.getElementById('mobile-error');
    var countryCodeInput = document.getElementById('country_code');
    var mobileNumberInput = document.getElementById('mobile_number');
    var currentCountryCode;
    countryCodeInput.addEventListener('focus', function () {
        currentCountryCode = countryCodeInput.value;
        mobileErrorElement.innerText = '';
    });
    countryCodeInput.addEventListener('blur', function () {
        if (!countryCodeInput.value) {
            countryCodeInput.value = currentCountryCode;
        }
    });
    mobileNumberInput.addEventListener('focus', function () {
        mobileErrorElement.innerText = '';
    });
    document.getElementById('start_whatsapp').addEventListener('click', function () {
        var mobileNumber = mobileNumberInput.value;
        if (!mobileNumber) {
            return mobileErrorElement.innerText = 'Mobile number is mandatory';
        }
        var filteredNumber = +mobileNumber.replace(/\D/g, '');
        var filteredCountryCode = +countryCodeInput.value.replace(/\D/g, '');
        if (!filteredNumber || !filteredCountryCode) {
            return mobileErrorElement.innerText = "Provide valid " + (!filteredNumber ? 'mobile number' : 'country code');
        }
        var textMessage = encodeURIComponent(document.getElementById('text_message').value || '');
        window.open("https://wa.me/" + filteredCountryCode + filteredNumber + "?text=" + textMessage, '_blank');
    });
    document.getElementById('facebook_share').addEventListener('click', function () {
        shareWindow("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&t=" + document.title);
    });
    document.getElementById('twitter_share').addEventListener('click', function () {
        shareWindow("https://twitter.com/share?url=" + encodeURIComponent(window.location.href));
    });
})();
function shareWindow(url) {
    window.open(url, 'sharer', 'toolbar=0,status=0,width=626,height=436');
}
//# sourceMappingURL=index.js.map