
//creates a function that creates a pokemon card with the image and its stats and characteristics
function createPokemonCard(pokemon){
    //table variable holds reference to tbody in html
    //need this table for the structure of rows and columns
    const table = document.getElementById("pokemonContainer");
    //holds reference to rows in html
    const rows= document.getElementById("pokemonRow");
    //holds reference to cells in html
    const cell= document.getElementById("pokemonCell");

    //parses all this java code into html code to create a flip card!
    cell.innerHTML= `
    <div class= "container-flip">
         <div class="flipout">
            <div class="fronter">
            <h3>${pokemon.name.toUpperCase()}</h3>
                <img src ="${pokemon.sprites.front_default}">
                </div>
            <div class="backer">
           <h3>
                Get to know me!
            </h3>
            <p id= "type"> Type(s): ${pokemon.types.map(temp =>  temp.type.name).join(", ")}</p>
            <p id= "height"> Height: ${pokemon.height}</p>
             <p id= "weight"> Weight: ${pokemon.weight}</p>
            <p id = "gameIndex"> Game Index: ${pokemon.game_indices.map(gameTemp => gameTemp.game_index)}  </p>
        


            <div class= "abilities">
            <p>${pokemon.stats[0].stat.name.toUpperCase}: ${pokemon.stats[0].base_stat} </p>
            <p>${pokemon.stats[1].stat.name.toUpperCase}: ${pokemon.stats[1].base_stat} </p>
            <p>${pokemon.stats[2].stat.name.toUpperCase}: ${pokemon.stats[2].base_stat} </p>
            <p>${pokemon.stats[3].stat.name.toUpperCase}: ${pokemon.stats[3].base_stat} </p>
            <p>${pokemon.stats[4].stat.name.toUpperCase}: ${pokemon.stats[4].base_stat} </p>
            <p>${pokemon.stats[5].stat.name.toUpperCase}: ${pokemon.stats[5].base_stat} </p>
            <p> Ability/Abilities: ${pokemon.abilities.map(tempAb => tempAb.ability.name).join} </p>
           
           
           
           
           
           
            </div>
            
                </div>
            </div>
        </div>
    </div>             
                        `;

}
const indexContainer = document.querySelector('.gameIndices');
 pokemon.game_indices.forEach(index => {
                const colorText = document.createElement("span");
                colorText.textContent = index.game_index;
                colorText.classList.add(`version-${index.version.name}`);
                indexContainer.appendChild(colorText);
        });
;

async function iChooseYou(){
for(let i =1;i <= 151; i++){
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
const pokemonAnimal = await response.json();
createPokemonCard(pokemonAnimal);
}
}

iChooseYou()