const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


let animalIcon = icons.filter(icon => icon.type === "animal");
let vegetableIcon = icons.filter(icon => icon.type === "vegetable");
let userIcon = icons.filter(icon => icon.type === "user");


const select = document.getElementById("tipo");
const cardContainer = document.querySelector(".card-container");


select.addEventListener("change", function () {
    const value = select.value;
    cardContainer.innerHTML = "";
    if (value === "animal") {
        drawAnimal();
    } else if (value === "user") {
        drawUser();
    } else if (value === "vegetables") {
        drawVegetable();
    } else {
        drawAnimal();
        drawUser();
        drawVegetable();
    } console.log(value);
});



function drawAnimal() {
    for (i = 0; i < animalIcon.length; i++) {

        const a = animalIcon[i];
        const { family, prefix, name } = a;

        let animal = "";
        animal += `<div class="card">
                     <i style="color: blue" class="${family} ${prefix}${name}"></i>
                     <p>${name}</p>
                    </div>`;
        cardContainer.innerHTML += animal;
    };
}
function drawVegetable() {
    for (i = 0; i < vegetableIcon.length; i++) {

        const a = vegetableIcon[i];
        const { family, prefix, name } = a;

        let vegetable = "";
        vegetable += `<div class="card">
                     <i style="color: #ffa500" class="${family} ${prefix}${name}"></i>
                     <p>${name}</p>
                    </div>`;
        cardContainer.innerHTML += vegetable;
    };
}
function drawUser() {
    for (i = 0; i < userIcon.length; i++) {

        const a = userIcon[i];
        const { family, prefix, name } = a;

        let user = "";
        user += `<div class="card">
                     <i style="color: #800080" class="${family} ${prefix}${name}"></i>
                     <p>${name}</p>
                    </div>`;
        cardContainer.innerHTML += user;
    };
}

