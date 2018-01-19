var apiKey = "925dcf328934c0d0fa7102b11a2b93b0";
var url = 'http://api.petfinder.com/shelter.getPets';

$.ajax({
    url: url,
    jsonp: "jsonp",
    data: {
        key: apiKey,
        id: 'KY30',
        format: 'json'
    },
    success: function( response ) {
        console.log(response);
    }
});