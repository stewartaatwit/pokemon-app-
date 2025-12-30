
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
           <h3>
                Get to know me!
            </h3>
            <p class= "type"> Type(s): ${pokemon.types.map(temp =>  temp.type.name).join(", ")}</p>
            <p class= "height"> Height: ${pokemon.height}</p>
             <p class= "weight"> Weight: ${pokemon.weight}</p>
            <div class="gameIndices"> Game Index:
            
            
             </div>


            <div class= "abilities">
            <p>${pokemon.stats[0].stat.name.toUpperCase()}: ${pokemon.stats[0].base_stat} </p>
            <p>${pokemon.stats[1].stat.name.toUpperCase()}: ${pokemon.stats[1].base_stat} </p>
            <p>${pokemon.stats[2].stat.name.toUpperCase()}: ${pokemon.stats[2].base_stat} </p>
            <p>${pokemon.stats[3].stat.name.toUpperCase()}: ${pokemon.stats[3].base_stat} </p>
            <p>${pokemon.stats[4].stat.name.toUpperCase()}: ${pokemon.stats[4].base_stat} </p>
            <p>${pokemon.stats[5].stat.name.toUpperCase()}: ${pokemon.stats[5].base_stat} </p>
            <p> Ability/Abilities: ${pokemon.abilities.map(tempAb => tempAb.ability.name).join(", ")} </p>
           
           
           
           
           
           
            </div>
            
                
            </div>
    </div>             
                        `;
                 const indexContainer = pokedexCard.querySelector('.gameIndices');
                pokemon.game_indices.forEach(index => {
                const colorText = document.createElement("span");
                colorText.textContent = index.game_index;
                colorText.classList.add(`version-${index.version.name}`);
                indexContainer.appendChild(colorText);
        });
    grid.appendChild(pokedexCard);


}



async function iChooseYou(){
for(let i =1;i <= 151; i++){
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
const pokemonAnimal = await response.json();
createPokemonCard(pokemonAnimal);
}
}

iChooseYou()