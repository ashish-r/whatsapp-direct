;(function () {
    const mobileErrorElement = document.getElementById(
        'mobile-error',
    ) as HTMLElement
    const countryCodeInput = document.getElementById(
        'country_code',
    ) as HTMLInputElement
    const mobileNumberInput = document.getElementById(
        'mobile_number',
    ) as HTMLInputElement
    const isDesktop = !navigator.userAgent.match(/(android|iphone|ipad)/gi)
    const qrWrapperContainer =
        isDesktop && document.getElementById('qr-wrapper')
    let currentCountryCode: string
    countryCodeInput.addEventListener('focus', () => {
        currentCountryCode = countryCodeInput.value
        mobileErrorElement.innerText = ''
        qrWrapperContainer && qrWrapperContainer.classList.add('hide')
    })
    countryCodeInput.addEventListener('blur', () => {
        if (!countryCodeInput.value) {
            countryCodeInput.value = currentCountryCode
        }
    })
    mobileNumberInput.addEventListener('focus', () => {
        mobileErrorElement.innerText = ''
        qrWrapperContainer && qrWrapperContainer.classList.add('hide')
    })
    ;(document.getElementById(
        'start_whatsapp',
    ) as HTMLElement).addEventListener('click', () => {
        const mobileNumber = mobileNumberInput.value
        if (!mobileNumber) {
            return (mobileErrorElement.innerText = 'Mobile number is mandatory')
        }
        const filteredNumber = +mobileNumber.replace(/\D/g, '')
        const filteredCountryCode = +countryCodeInput.value.replace(/\D/g, '')
        if (!filteredNumber || !filteredCountryCode) {
            return (mobileErrorElement.innerText = `Provide valid ${
                !filteredNumber ? 'mobile number' : 'country code'
            }`)
        }
        const textMessage = encodeURIComponent(
            (document.getElementById('text_message') as HTMLInputElement)
                .value || '',
        )
        const link = `https://wa.me/${filteredCountryCode}${filteredNumber}?text=${textMessage}`

        if (isDesktop) {
            qrWrapperContainer && qrWrapperContainer.classList.remove('hide')
            new (window as any).QRious({
                element: document.getElementById('qr'),
                value: link,
            })
        } else {
            window.open(link, '_blank')
        }
    })
    ;(document.getElementById(
        'facebook_share',
    ) as HTMLElement).addEventListener('click', () => {
        shareWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href,
            )}&t=${document.title}`,
        )
    })
    ;(document.getElementById('twitter_share') as HTMLElement).addEventListener(
        'click',
        () => {
            shareWindow(
                `https://twitter.com/share?url=${encodeURIComponent(
                    window.location.href,
                )}`,
            )
        },
    )
})()
function shareWindow(url: string) {
    window.open(url, 'sharer', 'toolbar=0,status=0,width=626,height=436')
}
