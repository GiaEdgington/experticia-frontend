
document.addEventListener('DOMContentLoaded', function(){
    var submitForm = document.querySelector(".submit");
    var name = document.querySelector(".name");
    var email = document.querySelector(".email");
    var phone = document.querySelector(".phone");
    var description = document.querySelector(".description");
    var date = document.querySelector(".date");
    var submited = document.querySelector(".submited");
    var slideIndex = 0;
    showSlides();

    submitForm.addEventListener('click', function(){
        
        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                case: description.value,
                date: date.value
            })
        })
        .then(response => response.json())
        .then(response => {
            submited.innerText = "Información enviada."
        })
    })
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        } 
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

})
