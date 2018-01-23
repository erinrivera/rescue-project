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
};