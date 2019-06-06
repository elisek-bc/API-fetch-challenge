function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

const ul = document.getElementById('Beers'); // Get the list where we will place our beer
const url = 'https://api.punkapi.com/v2/beers'; 

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
    console.log(data)
    data.forEach(function(Beer) { // Map through the results and for each run the code below
      let li = document.createElement('li'), //  Create the elements we need
          span = document.createElement('span');
      span.innerHTML = `${Beer.name} ${Beer.name}`; // Make the HTML of our span to be the first and last name of our Beer
      append(li, span);
      append(ul, li);
    })
  })
