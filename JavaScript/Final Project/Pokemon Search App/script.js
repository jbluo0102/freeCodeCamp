const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const type = document.getElementById("type");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const fetchUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

searchBtn.addEventListener("click", () => {
  // Base check
  const inputValue = searchInput.value.toLowerCase();
  if (!inputValue) {
    return;
  }

  // Search pokemon
  fetchPokemonData(inputValue);
});

async function fetchPokemonData(id) {
  try {
    const data = await fetch(`${fetchUrl}${id}`);
    const res = await data.json();
    console.log(res);
    updateUI(res);
  } catch (err) {
    console.log(err);
    alert("Pokémon not found");
    return null;
  }
}

function updateUI(data) {
  // Stats
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;

  // Types
  const typesArr = data.types;
  const types = document.getElementById("types");
  types.innerHTML = "";
  typesArr.forEach((type) => {
    types.innerHTML += `<span class="type ${type.type.name}">${type.type.name}</span>`;
  });

  // Sprites
  const imgUrl = data.sprites.front_default;
  const sprite = document.getElementById("sprite-container");
  sprite.innerHTML = `<img id="sprite" src="${imgUrl}" alt="${data.name} front default sprite">`;
  pokemonName.textContent = data.name.toUpperCase();
  pokemonID.textContent = `#${data.id}`;
  weight.textContent = `Weight: ${data.weight}`;
  height.textContent = `Height: ${data.height}`;
}
