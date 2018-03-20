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

function createScript(id) {
    var petScript = `
        <script>
        // SCRIPT FOR MODAL 
        // Get the modal
        var modal = document.getElementById('${id}modal');

        // Get the button that opens the modal
        var btn = document.getElementById("${id}btn");

        
        </script>
    `
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