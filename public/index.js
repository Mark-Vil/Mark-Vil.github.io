function Mail() {
    var params = {
        from_name: document.getElementById("Name").value,
        Subject: document.getElementById("Subject").value,
        Email: document.getElementById("Email").value,
        Message: document.getElementById("Message").value,
    };
    const serviceID = "service_2w5savg";
    const templateID = "template_gb5cnmq";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("Name").value = "";
        document.getElementById("Subject").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("Your message sent succesfully!");
    })
        .catch((err) => console.log(err));
}    
        
    
