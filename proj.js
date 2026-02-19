//creates a function that creates a pokemon card with the image and its stats and characteristics
function createPokemonCard(pokemon){
    //table variable holds reference to tbody in html
    //need this table for the structure of rows and columns
    const grid = document.getElementById("pokemonContainer");
    //creates a new div for every pokemon called by the function
    const pokedexCard= document.createElement("div");
    //holds reference to cells in html
    pokedexCard.classList.add("container-flip");
    //appends the new div to the table
    //parses all this java code into html code to create a flip card!
    pokedexCard.innerHTML= `
         <div class="flipout">
            <div class="fronter">
                                       
            <h3>${pokemon.name.toUpperCase()}</h3>
                <img src ="${pokemon.sprites.front_default}">
                </div>
        <div class="backer">
          
            <div class= "grid-child">
            <p class= "type"> 
            <h2>Type(s)</h2>
            Type(s): ${pokemon.types.map(temp =>  temp.type.name).join(", ")}
            </p>
             <p> 
             Ability/Abilities: ${pokemon.abilities.map(tempAb => tempAb.ability.name).join(", ")} </p>
            </div>

            <div class= "grid-child">
                         <h2>Physical Stats</h2>

            <p class= "height"> Height: ${pokemon.height}</p>
             <p class= "weight"> Weight: ${pokemon.weight}</p>
             </div>


            <div class= "grid-child">
             <h2>Abilities</h2>

            <p>${pokemon.stats[0].stat.name.toUpperCase()}: ${pokemon.stats[0].base_stat} </p>
            <p>${pokemon.stats[1].stat.name.toUpperCase()}: ${pokemon.stats[1].base_stat} </p>
            <p>${pokemon.stats[2].stat.name.toUpperCase()}: ${pokemon.stats[2].base_stat} </p>
           </div>

           <div class= "grid-child">
           <h2>Base Stats</h2>
            <p>${pokemon.stats[3].stat.name.toUpperCase()}: ${pokemon.stats[3].base_stat} </p>
            <p>${pokemon.stats[4].stat.name.toUpperCase()}: ${pokemon.stats[4].base_stat} </p>
            <p>${pokemon.stats[5].stat.name.toUpperCase()}: ${pokemon.stats[5].base_stat} </p>
           </div>
        </div>
 
    </div>             
                        `;
                
    grid.appendChild(pokedexCard);


}

function searchPokemon(evt){
    let input = evt.target.value.toLowerCase();
    let items = document.querySelectorAll(".container-flip");
    items.forEach((item) => {

        const title= item.querySelector("h3");

        if(!title){
            return;
        }

        const name = title.textContent.toLowerCase();
        if(name.includes(input)){
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
 }


async function iChooseYou(){
    const container = document.getElementsByClassName("container-flip")[0];
    if(container){
        container.remove();
    }
for(let i =1;i <= 151; i++){
   
            
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
const pokemonAnimal = await response.json();
createPokemonCard(pokemonAnimal);
}


}

function musicPlay(){
    document.addEventListener("click", () => {
const music= document.getElementById("bg-music");
    music.muted = false;
    music.play();
    } ,{once: true});
    
}
musicPlay();

iChooseYou()