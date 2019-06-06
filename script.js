function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

const content = document.getElementById('content'); // Get the list where we will place our beer

const url = `https://api.punkapi.com/v2/beers?page=1&per_page=25`; 
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
    data.forEach(function(Beer) { // Map through the results and for each run the code below
        var card = document.createElement('div');
        card.classList.add(`card`); //  Create the elements we need
        let title = document.createElement('h3');
        card.classList.add(`card-title`);
        let tag = document.createElement('h4');
        title.innerHTML = `${Beer.name}`; // Make the HTML of our span to be the first and last name of our Beer
        tag.innerHTML = `${Beer.tagline}`;
        append(content, card);
        append(card, title);
        append(card, tag);

        let subtitle = document.createElement('h5');
        subtitle.innerHTML = `Description`;
        subtitle.classList.add("display");

        let description = document.createElement('p');
        description.innerHTML = `${Beer.description}`;
        description.classList.add("display");
        
        let subtitle2 = document.createElement('h5');
        subtitle2.innerHTML = `Food pairing`;
        subtitle2.classList.add("display");

        let food = document.createElement('p');
        food.innerHTML = `${Beer.food_pairing}`;
        food.classList.add("display");

        append(card, subtitle);
        append(card, description);
        append(card, subtitle2);
        append(card, food);

        card.addEventListener("click",showMore);
        function showMore(event){
            description.classList.toggle("display");
            subtitle.classList.toggle("display");
            food.classList.toggle("display");
            subtitle2.classList.toggle("display");

        }
    });
});     




const Random = document.getElementById("Random");
Random.addEventListener("click", random)

// SHOW RANDOM BEER EXTRA
function random() {
content.innerHTML='<h1>Beers</h1>';
const random =  "https://api.punkapi.com/v2/beers/random";
fetch(random) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) { 
    // Map through the results and for each run the code below
        var card = document.createElement('div');
        card.classList.add(`card`); //  Create the elements we need
        let title = document.createElement('h3');
        card.classList.add(`card-title`);
        let tag = document.createElement('h4');
        title.innerHTML = `${data[0].name}`; // Make the HTML of our span to be the first and last name of our Beer
        tag.innerHTML = `${data[0].tagline}`;
        append(content, card);
        append(card, title);
        append(card, tag);

        let subtitle = document.createElement('h5');
        subtitle.innerHTML = `Description`;
        subtitle.classList.add("display");

        let description = document.createElement('p');
        description.innerHTML = `${data[0].description}`;
        description.classList.add("display");
        
        let subtitle2 = document.createElement('h5');
        subtitle2.innerHTML = `Food pairing`;
        subtitle2.classList.add("display");

        let food = document.createElement('p');
        food.innerHTML = `${data[0].food_pairing}`;
        food.classList.add("display");

        append(card, subtitle);
        append(card, description);
        append(card, subtitle2);
        append(card, food);

        card.addEventListener("click",showMore);
        function showMore(event){
            description.classList.toggle("display");
            subtitle.classList.toggle("display");
            food.classList.toggle("display");
            subtitle2.classList.toggle("display");

        }
    });
    
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    });
};
