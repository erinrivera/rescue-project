// VARIABLES
const apiKey = "925dcf328934c0d0fa7102b11a2b93b0";
const url = 'https://api.petfinder.com/shelter.getPets';
const photoUrl = "http://photos.petfinder.com/photos/pets/";

// PET DISPLAY PAGE

function getPetInfo() {
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
        //AJAX error message
        error: function() {
            alert("Error retrieving data. Please try again later.");
        },
        //AJAX success function (adds pets to data)
        success: function(response) {
            const pets = response.petfinder.pets.pet;
            createPetDivs(pets);
            console.log(pets) //debugging purposes
        },
    })
};

function createPetDivs(pets) {
    //Create HTML elements for pet divs
    for (let i = 0; i < pets.length; i++) {
        let start = document.getElementById("firstRow");
        let petDiv = document.createElement("div");

        //Assigns response info to variables
        let name = pets[i].name.$t;
        let pfid = pets[i].id.$t;
        let mainPic = photoUrl + pfid + "/1/";
        let id = pets[i].shelterPetId.$t;
        let breed = pets[i].breeds.breed.$t;
        let spec = pets[i].animal.$t;
        let gender = pets[i].sex.$t;
        let age = pets[i].age.$t;
        let desc = pets[i].description.$t;
        let description = shortDesc(desc);
        let fullDesc = longDesc(desc);
        let mix = pets[i].mix.$t;
        let picArray = pets[i].media.photos.photo;

        //Variable if loops

        // Changes 'f' to 'female', and 'm' to 'male'
        if (gender === 'F') {
            gender = "Female";
        } else if (gender === 'M') {
            gender = "Male"
        };

        // If breed is array, adds both breeds
        if (breed == undefined) {
            breed = pets[i].breeds.breed["0"].$t + "/" + pets[i].breeds.breed["1"].$t
        }

        // If 'mix' is yes, adds "mix" to the end of breed
        if (mix === 'yes') {
            breed = breed + " Mix";
        }

        photoList = [];
        picCount = picArray.length / 5;
        if (picCount > 4) {
            picCount = 4;
        }

        for (let i = 1; i <= picCount; i++) {
            let pic = photoUrl + pfid + "/" + [i] + "/";
            photoList += `<div class="lb-img"> <img src="${pic}" alt="${name}, a ${age} ${gender} ${breed} ${spec}"> </div> 
            `;
        }

        // PET DIV CODE
        petDiv.innerHTML = `
        <div class="pet-image-div">
            <img class="pet-image" src="${mainPic}" alt="${name}, a ${age} ${gender} ${breed} ${spec}">
        </div>
        <div class="pet-name">
            <h3>${name} - <span id="idNo">ID: ${id}</span></h3>
        </div>
        <div class="pet-data"  id="${id}div">
            <strong>Breed:</strong><br>
            ${breed} <br>
            <strong>Age:</strong> ${age}<br>
            <strong>Gender:</strong> ${gender}<br>
           
        </div>
        <div class="pet-button">
            <button class="btn btn-primary"><a href = "javascript:void(0)" onclick = "document.getElementById('light${id}').style.display='block';document.getElementById('fade${id}').style.display='block';document.body.style.overflow='hidden'">Read More</a></button>
        </div>

        <div id="light${id}" class="white_content">
            <div class="pet-lightbox"> 
                <a class="close" href = "javascript:void(0)" onclick = "document.getElementById('light${id}').style.display='none';document.getElementById('fade${id}').style.display='none';document.body.style.overflow='visible'">X</a>
                <div class="lb-img-div">
                    ${photoList}                        
                </div>
                <div class="lb-pet-header">
                    <h2>${name} - <span id="idNo">ID: ${id}</span></h2>
                    <h4><strong> ${breed} -- ${gender} -- ${age} </strong></h4>
                </div>
                <p class="lb-desc"><strong> Description: </strong> ${desc}</p>
                <a href = "javascript:void(0)" onclick = "document.getElementById('light${id}').style.display='none';document.getElementById('fade${id}').style.display='none'">Close</a>
            </div>
        </div>
        <div id="fade${id}" class="black_overlay"></div>
        `

        start.appendChild(petDiv);

    }
};

function shortDesc(str) {
    return str.split(/\s+/).slice(0,10).join(" ");
}

function longDesc(str) {
    return str.split(/\s+/).slice(0,100).join(" ");
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