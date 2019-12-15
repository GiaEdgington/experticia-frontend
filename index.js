
document.addEventListener('DOMContentLoaded', function(){
    var submitForm = document.querySelector(".submit");
    var name = document.querySelector(".name");
    var email = document.querySelector(".email");
    var phone = document.querySelector(".phone");
    var description = document.querySelector(".description");
    var date = document.querySelector(".date");
    var submitted = document.querySelector(".submitted");
    var validate = document.querySelector(".errors");
    var slideIndex = 0;
    showSlides();

    submitForm.addEventListener('click', function(e){
        
        fetch('https://experticia.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                case: description.value
            })
        })
        .then(response => response.json())
        .then(response => {
            //console.log(response.errors);
            if(response.errors) {
                response.errors.forEach(error => {
                    let displayError = document.querySelector(`#${error.param}`);
                    displayError.innerHTML = error.msg;
                    displayError.style.visibility = 'visible';
                })
            } else {
                let contactForm = document.querySelector('#form');
                contactForm.style.display = 'none';
                submitted.innerText = "Su información ha sido enviada. En breve recibirá confirmación en su correo electrónico."
            }      
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
