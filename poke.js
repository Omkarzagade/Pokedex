const pokemonImage = document.getElementById('pkmn-img');
const name_p = document.getElementById('name');
const indexh = document.getElementById('index');
const type_1 = document.getElementById('type1');
const type_2 = document.getElementById('type2');
const ability_list = document.getElementById('abilities');
const ht = document.getElementById('height');
const wt = document.getElementById('weight');
const HP = document.getElementById('hp');
const spd = document.getElementById('speed');
const atk = document.getElementById('attack');
const sp_atk = document.getElementById('sp-atk');
const defn = document.getElementById('defense');
const sp_defn = document.getElementById('sp-def');
const move_slot = document.getElementById('moves');
const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};


abc.addEventListener("click", function () {
    let index = Math.ceil(Math.random() * 809);
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    fetch(url).then(response => response.json())
        .then(data => {
            const imageUrl = data.sprites.other.home.front_default;
            pokemonImage.setAttribute("src", imageUrl);

            name_p.innerText = data.name;

            indexh.innerText = `#${data.id}`;

            t1 = String(data.types[0].type.name);
            type_1.innerText = t1;
            try {
                t2 = String(data.types[1].type.name);
                type_2.innerText = t2;
                type_2.style.backgroundColor = colours[t2];
            } catch {
                type_2.style.backgroundColor = "white";
                type_2.innerText = "";
            }
            document.body.style.backgroundColor = colours[t1];
            type_1.style.backgroundColor = colours[t1];

            ht.innerText = `${data.height} m`;
            wt.innerText = `${data.weight} kg`;

            ability_list.innerText = "";
            for (let i = 0; i < data.abilities.length; i++) {
                const ab = data.abilities[i].ability.name;
                ability_list.innerHTML += `${ab}<br>`;
            }

            HP.innerText = data.stats[0].base_stat;
            atk.innerText = data.stats[1].base_stat;
            defn.innerText = data.stats[2].base_stat;
            sp_atk.innerText = data.stats[3].base_stat;
            sp_defn.innerText = data.stats[4].base_stat;
            spd.innerText = data.stats[5].base_stat;

            move_slot.innerHTML = `<div>Moves</div>`;
            for (let j = 0; j < data.moves.length; j++) {
                const m_name = data.moves[j].move.name;
                move_slot.innerHTML += `<div>${m_name}</div>`;
            }
        })
})