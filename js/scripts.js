function petDisplay() {
    // Variables defined
    var apiKey = "925dcf328934c0d0fa7102b11a2b93b0";
    var url = 'http://api.petfinder.com/shelter.getPets';
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

// Count photo array and create photos for modal slideshow
function photoArray(picArray, pfid) {
    var photoList = [];
    if (picArray.length < 6) {
        var photo1 = photoUrl + pfid + "/1/";
        photoList.push(photo1);
    } else if (picArray.length < 11) {
        var photo2 = photoUrl + pfid + "/2/";
        photoList.push(photo2);
    } else if (picArray.length < 16) {
        var photo3 = photoUrl + pfid + "/3/";
        photoList.push(photo3);
    } else if (picArray.length < 21) {
        var photo4 = photoUrl + pfid + "/4/";
        photoList.push(photo4);
    } else if (picArray.length < 26) {
        var photo5 = photoUrl + pfid + "/5/";
        photoList.push(photo5);
    } else if (picArray.length < 31) {
        var photo6 = photoUrl + pfid + "/6/";
        photoList.push(photo6);
    }
    // Create slideshow code for each picture
    for (var i = 0; i < photoList.length; i++) {
        var ssCode = '';
        ssCode += '<div class="mySlides fade"> \n';
        ssCode += '<img src="' + photoList[i] + '" style="width:100%"> \n';
        ssCode += '</div>';
        return ssCode;
    }
};