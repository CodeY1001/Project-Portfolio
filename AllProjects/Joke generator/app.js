let URL = "https://v2.jokeapi.dev/joke/Any?type=single";
const disJoke = document.getElementById("joke");
const button = document.getElementById("btn");


const getJokes = async () => {


    try {
        let response = await fetch(URL);
        console.log(response);
        let data = await response.json();
        console.log(data);
        console.log(data.joke);
        document.getElementById("joke").innerHTML = data.joke;

    } catch (error) {
        console.log("Failed");

    }

}

button.addEventListener("click", (e) => {
    e.preventDefault();
    getJokes()
})

