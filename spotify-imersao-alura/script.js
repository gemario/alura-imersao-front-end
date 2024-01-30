const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 0 && hours < 12) {
    return "Bom Dia!";
  } else if (hours >= 12 && hours < 18) {
    return "Boa Tarde!";
  } else {
    return "Boa Noite!";
  }
}

document.getElementById("greeting").innerText = "Olá, " + getGreeting();

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?q=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults() {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtist.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});
