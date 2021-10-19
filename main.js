// fetch("https://domain-checker8.p.rapidapi.com/domain/digitalocean.com")

// Set up our variables
const searchBtn = document.getElementById('search-btn');
const domainInput = document.getElementById('domain-name');
const noInput = document.getElementById('no-domain');

// We add an event listener to one of our variables
// Note that 'e' is being used for 'event'
searchBtn.addEventListener( 'click', (e) => {
    // this prevents  the page from refreshing when someone clicks the button
    // Try  commenting it out to  see what happens
    e.preventDefault();
    // Check to make sure there's text in the input
    // Note that I'm grabbing the variable but added .value to get the 'value' of the input
    if( !domainInput.value) {
        // Adding text to our empty div
        noInput.textContent = 'Please enter a domain';
    } else {

    }
});
