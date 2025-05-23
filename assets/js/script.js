function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };  
    emailjs.send("service_mqkmw3p", "template_idrryl8", params).then(alert("Your Message has been send Successfully")); location.reload();
}