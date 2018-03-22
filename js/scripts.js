// PET DISPLAY PAGE

function petDisplay() {
    // Variables defined
    var apiKey = "925dcf328934c0d0fa7102b11a2b93b0";
    var url = 'https://api.petfinder.com/shelter.getPets';
    //AJAX Call to get pet data
    $.ajax({
        url: url,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: apiKey,
            id: 'KY30',
            format: 'json'
        },
        success: function( response ) {
            var data = [];
            data = response.petfinder.pets.pet; 
            console.log(data)
        }
    })
}

function shortDesc(str) {
    return str.split(/\s+/).slice(0,10).join(" ");
}

function longDesc(str) {
    return str.split(/\s+/).slice(0,100).join(" ");
}

// BACK TO TOP BUTTON CODE

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ABOUT PAGE

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Bkgd color for active question */
        this.classList.toggle("acc-active");

        /* Hides/shows panel answer when clicked */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}