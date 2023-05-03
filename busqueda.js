const search = () => {
   const searchBox = document.getElementById ('searchBar').value.toUpperCase();
   /*const storeitems = document.getElementById("character");*/
   const product = document.querySelectorAll(".card");
   const proname = document.getElementsByTagName("h3");

   for(var i=0; i < proname.length; i++){
       let match = product[i].getElementsByTagName('h3')[0];

       if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchBox) > -1){
               product[i].style.display = "";
           }else{
               product[i].style.display = "none";
           }
       }
   }
}

const searchBar = document.getElementById ('searchBar');
let charactersName = [];
console.log(charactersName);


search.addEventListener ('keyup', (e) => {
   /*const searchString = e.target.value;
   console.log (searchString);*/
   const textoBuscado = e.target.value.trim(); 
   if (textoBuscado === charactersName) { 
      searchCharacters(textoBuscado); } 
      else { 
         getCharacters(data => { displayCharacters})
      }
   }); 


   function searchCharacters(query) { 
      fetch(`https://rickandmortyapi.com/api/character?name=${query}`) 
      .then(response => response.json()) 
      .then(data => { displayCharacters(data.results); }) 
      .catch(error => { console.error('Error al buscar personajes:', error)}
   )};

   function displayCharacters(characters) { 
      const main = document.querySelector("main"); 
      main.innerHTML = ""; 
      characters.forEach(personaje => 
         { const article = document.createRange().createContextualFragment(
            /*html*/` 
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
            <!-- FIN de CARTA-->`);

         main.append(article); 
      });
   };