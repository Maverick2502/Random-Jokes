const button = document.querySelector("button");
const jokes = document.querySelector("#jokes")
const img = document.querySelector("img");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("p");
    newLi.append(jokeText);
    jokes.append(newLi)
    displayData(data);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch (error) {
        return "RAN OUT OF JOKES, MAN "
    }
}

button.addEventListener("click", addNewJoke);

jokes.addEventListener("click", function(e) {
    e.target.remove();
});

button.addEventListener("click", () => {
  img.classList.add("shake-img");

  setTimeout(() => {
    img.classList.remove("shake-img");
  }, 1000);
}) 