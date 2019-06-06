function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

const content = document.getElementById('content'); // Get the list where we will place our beer
const url = 'https://api.punkapi.com/v2/beers'; 

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
    console.log(data)
    data.forEach(function(Beer) { // Map through the results and for each run the code below
      let card = document.createElement('div');
      card.classList.add(`card`); //  Create the elements we need
      let title = document.createElement('h3');
      card.classList.add(`card-title`);
      let tag = document.createElement('h4');
      title.innerHTML = `${Beer.name}`; // Make the HTML of our span to be the first and last name of our Beer
      tag.innerHTML = `${Beer.tagline}`;
      append(content, card);
      append(card, title);
      append(card, tag);
    })
  })
