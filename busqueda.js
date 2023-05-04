
const searchBar = document.getElementById ('searchBar');

searchBar.addEventListener ('keyup', (e) => {
   const searchString = e.target.value.toLowerCase();

   if (searchString === ''){
      updateCharacters();

   } else {
      searchCharacters(searchString);
      console.log ("entra 1");

   }
});


 function searchCharacters(query) {
   console.log ("entra 2");
   fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
     .then(resp => resp.json())
     .then(data => {
       displayCharacters(data.results);
     })
     .catch(error => {
       console.error('Error al buscar personajes:', error)
     });
 }
 
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
   //characters.forEach(character => console.log(character.name.toLowerCase()));

 };


 /*searchCharacters("Rick"); // Ejemplo de llamada a la función con el parámetro "Rick" */


