// console.log("Hello World")
const message = document.querySelector("#message");



function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector("input").value;
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    
    document.querySelector("ul").appendChild(movie);
    deleteBtn.textContent = "X";
    
    document.querySelector("input").value = "";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")){
        message.textContent = "Movie watched"
    } else {
        message.textContent = "Movie added back!"
    }
}

document.querySelector("form").addEventListener("submit", addMovie);


