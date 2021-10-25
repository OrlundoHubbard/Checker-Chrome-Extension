// Set up our variables
const el = document.getElementById('search-btn');
const domainInput = document.getElementById('domain-name');
const noInput = document.getElementById('no-domain');
const loadingMessage = document.getElementById('loading');

// We add an event listener to one of our variables
// Note that 'e' is being used for 'event'
el.addEventListener( 'click', (e) => {
    // this prevents  the page from refreshing when someone clicks the button
    // Try  commenting it out to  see what happens
    e.preventDefault();

    // displays message that domain checker is looking for domain
    loadingMessage.textContent = 'Checking That...';
    // Check to make sure there's text in the input
    // Note that I'm grabbing the variable but added .value to get the 'value' of the input
    if( !domainInput.value) {
        // Adding text to our empty div
        noInput.textContent = 'Please enter a domain';
    } else {

    }
});

// Adding the api 
fetch("https://domain-checker8.p.rapidapi.com/domain/digitalocean.com", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "domain-checker8.p.rapidapi.com",
		"x-rapidapi-key": "d968401bc8msh7581eec7927eb40p19d28fjsn7086ddd64c2e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});