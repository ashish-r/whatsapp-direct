document.getElementById("open_whatsapp").addEventListener("click", function(){
    const mobileNumber = document.getElementById("mobile_number").value
    if(!mobileNumber){
        return
    }
    const textMessage = encodeURI(document.getElementById("text_message").value || '')
    window.location.href=`https://wa.me/91${mobileNumber}?text=${textMessage}`
})