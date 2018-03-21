# Animal Rescue Project

## Description

My goal with this project is to make a more modern website for Animal Care Society, a no-kill shelter located here in Louisville, Kentucky. Their current site is quite outdated and disorganized.

My specific goals in creating the website for ACS were:

1. Create a more logical layout for the navigation menu
2. Better organize the information about ACS so that it is easier to find
3. Create a more modern, clean design, and a more attractive layout for the entire site
4. Create an attractive page to display pets currently available for adoption, loading the information directly from the PetFinder API using AJAX (instead of using the iframe widget from PetFinder that the current site uses).
5. Create updated forms for the site, including an Application for Adoption, and a Contact Us form.
6. Add a social media bar to the footer of the site.

## Custom CSS Classes

I created a lot of CSS classes, with a total of about 1100 lines of CSS for the entire project. Below I've included a few for an example:

1. Contact Grid class (.contact-grid)
    * This class creates the CSS Grid layout for the elements of the Contact page, and includes the following properties:
        * 'display: grid' (initiates the grid layout)
        * 'grid-template-columns: 1fr 1fr 1fr' (divides the grid into three columns, each with a third of the free space)
        * 'grid-template-rows: auto' (allows the grid to determine size of rows based on content)
        * 'grid-template-areas: 'title title title', 'address address sidebar'... (indicates where grid-area elements should be placed)

2. Pet Display Page Wrapper class (.pet-display-page-wrapper)
    * This class creates the layout for the page wrapper div of the pet display page, and includes some of the following properties:
        * 'width: 80%' and 'margin: 0 auto' (centers the page and sets side margins)
        * 'padding-top: 1em' (lowers the beginning of the page 1em from the top)
        * 'line-height: 1.5em' (creates space between the lines to increase readability)

3. Subtitle class (.subtitle)
    * This class styles the subtitle on the index page, and includes some of the following properties:
        * 'margin-top: 4em' (moves the subtitle 4em lower that its normal position by adding 4em of space above it)
        * 'margin-left: -2em' (moves the subtitle 2em further left than its normal position by subtracting 2em of space to the left of it)
        * 'opacity: 0.7' (give the element 70% opacity, making it lighter and partially transparent)

## Custom JavaScript Functions

1. \*function shortDesc(str) {
        return str.split(/\s+/).slice(0,10).join(" ");
    }\*
    * This function takes a long string (description of pet), splits the words apart at a space, slices the first 10 words, then joins them back together into a string. The purpose of shortDesc is to add a brief description of the pet to its card, while the full description is available in the lightbox.

2. \*function petDisplay() {
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
    }\*
    * This function makes an AJAX call to the PetFinder API and returns an array of pets available for adoption from Animal Care Society.

3. \*for (let i = 1; i <= picCount; i++) {
        let pic = photoUrl + pfid + "/" + [i] + "/";
        photoList += "<div class='lb-img'><img src='" + pic + "'> </div> ";
    }\*
    * This is part of the much larger createPetDivs function, and is a for loop that iterates through an array of pet photos and creates a URL for each picture.

    
