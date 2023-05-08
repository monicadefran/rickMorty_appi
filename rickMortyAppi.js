// Call the app to charge the page and load the characters
function getCharacters(page, done) {
   const results = fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

   results
       .then(response => response.json())
       .then(data => {
           done(data)
       });
     }

/***** PAGINATION *****/

let currentPage = 1;

// This function update the characters and have the pagination logic
function updateCharacters() {
   getCharacters(currentPage, data => { 
      // First we paint the Bottoms 
      const content = document.createElement ("div");
      characters.innerHTML = "";
      verPersonajes.innerHTML = `
      <button id="prevPage">Anterior</button>
      <button id="nextPage">Siguiente</button>
      `
      // Logic botton to go back
      document.getElementById("prevPage").addEventListener("click", () => {
         if (currentPage > 1) {
             currentPage--;
             updateCharacters();
         }
      });
      // Logic button to go forward
      document.getElementById("nextPage").addEventListener("click", () => {
         currentPage++;
         updateCharacters();
      });
      //Pain the cards from the data api
      data.results.forEach(item => {
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
            characters.append(content)  
            
         });        
      });
   };
// Call the function
updateCharacters();

