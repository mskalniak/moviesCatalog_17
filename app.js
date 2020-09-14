let favouriteMovies = [];
const adverts = [
    'Nowy film: Zielona Mila, w kinach od 22 września!',
    'Zapraszamy do kin już od 23 czerwca!',
    'Festiwal filmowy już od poniedziałku w kinie Burleska!',
    'Filmowy wieczór z kinem Adriatyk już dziś!',
    'Brakujące ogniwo to nowy film Scorsese, nie możesz go przegapić!'
];
let lastId = 0;

createAdverts();

function onAddBtnClick() {
    let movieNameInput = document.querySelector('#movieNameInput');
    
    //model
    let movie = {
        id: lastId,
        name: movieNameInput.value
    }
    lastId++;
    favouriteMovies.push(movie);

    //UI
    updateFavouritesList();
    updateFavouritesListCounter();
}

function onRemoveBtnClick(event) {
    //model
    favouriteMovies = favouriteMovies.filter(function(elem) {
        return elem.id !== Number(event.target.id);
    });

    //UI
    updateFavouritesList();
    updateFavouritesListCounter();
}

function onEditBtnClick(event) {
    console.log(event.target.id);
    let id = event.target.id;
    let splittedId = id.split('-');
    let clickedId = Number(splittedId[1]);
    console.log(clickedId);

}

function updateFavouritesListCounter() {
    let moviesCounterSpan = document.getElementById('moviesCounter');
    moviesCounterSpan.innerText = favouriteMovies.length;
}

function updateFavouritesList() {
    let favouritesList = document.getElementById('favouritesList');
    favouritesList.innerText = '';
    favouriteMovies.forEach(function(movie, index) {
        let favouriteElem = document.createElement('li');

        //delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Usuń';
        deleteBtn.id = movie.id;
        deleteBtn.addEventListener('click', onRemoveBtnClick);
        favouriteElem.appendChild(deleteBtn);

        //edit button
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edytuj';
        editBtn.id = `editbtn-${movie.id}`;
        editBtn.addEventListener('click', onEditBtnClick);
        favouriteElem.appendChild(editBtn);
        
        //paragraph
        let namePrg = document.createElement('p');
        namePrg.innerText = movie.name;

        favouriteElem.appendChild(namePrg);
        favouritesList.appendChild(favouriteElem);
    });
}

function createAdverts() {
    let advertsContainer = document.querySelector('#advertsContainer');
    let advert = document.createElement('p');
    advert.innerText = adverts[0];
    
    setInterval(function() {
        let randomIndexFromZeroToFour = parseInt(Math.random() * 10 % adverts.length);
        advert.innerText = adverts[randomIndexFromZeroToFour];
    }, 2000);
    
    advertsContainer.appendChild(advert);
}







