
// Call to the searchBar Id
const searchBar = document.getElementById ('searchBar');

// Add an eventlistener Keyup event
searchBar.addEventListener ('keyup', (e) => {
   //Catch the value inserter in the seachBar and convert to lower case 
   const searchString = e.target.value.toLowerCase();

   // If the file is empty call to upateCharacter to show the current web and the buttoms
   if (searchString === ''){
      updateCharacters();

   } else {
      /* If not, call the searcharacter funtion in order search 
      the name of the charachaters the users enter in the search bar*/
      searchCharacters(searchString);
      console.log ("entra 1");

   }
});


 function searchCharacters(query) {
   console.log ("entra 2");
   // Call the api to charger the name of the character
   fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
     .then(resp => resp.json())
     .then(data => {
      //Call display characters function and show only the character
       displayCharacters(data.results);
     })
     .catch(error => {
       console.error('Error al buscar personajes:', error)
     });
 }
 
 // Function to show the user´s characters are looking for
 function displayCharacters(personajes) {
   console.log ("entra 3");
   const content = document.createElement ("div");
      characters.innerHTML = "";
      console.log (personajes.length);
      personajes.forEach(item => {
         const content = document.createElement ("div");
            content.innerHTML = `
            <!-- INICIO de CARTA-->
            <div class="container_card">
               <div class="card_father">
                  <div class="card">
                     <div class="card_front">
                        <div class ="body_card_front">
                           <div class="card_imagen">
                                 <img src="${item.image}" alt>
                              <div class="card_contenido">
                                 <h3>${item.name}</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card_back">
                        <div class ="body_card_back">
                           <h4 class="n_location">Last Location: </h4>
                           <h4>${item.location.name}</h4>
                           <br>
                           <h5 class="n_species"> Species: </h5>
                           <h5>${item.species}</h5>
                           <br>
                           <h5 class="n_status">Status: </h5>
                           <h5>${item.status}</h5>
                        </div>
                  </div>
               </div>
            </div>
            <!-- FIN de CARTA-->
            `;
            characters.append(content);
            verPersonajes.innerHTML= '';
         });        
 };

 


