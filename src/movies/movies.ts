import { movies } from "./database";
console.log(movies);

type movie = [string, string, string, string, string[], string][];

const inputMovie = document.querySelector('#inputMovie') as HTMLInputElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;
const yearUpBtn = document.querySelector('#yearUpBtn') as HTMLInputElement;
const yearDownBtn = document.querySelector('#yearDownBtn') as HTMLInputElement;
const bestRateBtn = document.querySelector('#bestRateBtn') as HTMLInputElement;
const output = document.querySelector('.output') as HTMLInputElement;
// const title = document.querySelector('#title') as HTMLElement;
// const releaseYear = document.querySelector('#releaseYear') as HTMLElement;
// const director = document.querySelector('#director') as HTMLElement;
// const runningTime = document.querySelector('#runningTime') as HTMLElement;
// const rating = document.querySelector ('#rating') as HTMLElement;

console.log(inputMovie);
console.log(searchBtn);
console.log(yearUpBtn);
console.log(yearDownBtn);
console.log(bestRateBtn);
console.log(output);

// console.log(title);
// console.log(releaseYear);
// console.log(director);
// console.log(runningTime);
// console.log(rating);

// elvis operator --> ? prüft, ob etwas truthy oder falsy ist
searchBtn?.addEventListener('click', () => {
    const searchItemValue = inputMovie?.value;
    console.log(searchItemValue);
})

// const inputMovie = (movieSelected: any[]) => {
//     output.innerHTML= " ";
//     movieSelected.forEach((movie) => {
//         output.innerHTML += `<div>
//             <h3>${movie[0]}</h3>
//             <p>${movie[1]}</p>
//             <h4>${movie[2]}</h4>
//             <p>${movie[3]}</p>
//             <p>${movie[4]}</p>
//             <p>${movie[5]}</p>
//             </div>`;
//     })
// }

// Karten bespielen
// const renderMovies = (array: [string, string, string, string, string[], string][]) => {
//     array.forEach((movie) => {
//     const [title, releaseYear, director, runningTime, genre, rating] = movie;

//     (document.getElementById('title') as HTMLHeadingElement).innerText = title;
//     (document.getElementById('releaseYear') as HTMLParagraphElement).innerText = releaseYear;
//     (document.getElementById('director') as HTMLHeadingElement).innerText = director;
//     (document.getElementById('runningTime') as HTMLParagraphElement).innerText = runningTime;
//     (document.getElementById('genre') as HTMLParagraphElement).innerText = genre.join(', ');
//     (document.getElementById('rating') as HTMLParagraphElement).innerText = rating;
//     });
// };

// renderMovies(movies);


// einmal abfragen, ob unsere const (yearUp) vorhanden ist
if (yearUpBtn) {
    yearUpBtn.addEventListener("click", () => {
    console.log("yearUpBtn clicked");

movies.forEach((item) => {
    const outputText = `<div>
    <h3>${item[0]}</h3>
    <p>${item[1]}</p>
    <h4>${item[2]}</h4>
    <p>${item[3]}</p>
    <p>${item[4]}</p>
    <p>${item[5]}</p>
    </div>`;
    output.innerHTML += outputText;
});
const newArrUp = movies.sort((a, b) => {
    return a[1] - b[1];
    });
console.log(newArrUp);
});
}


if (yearDownBtn) {
    yearDownBtn.addEventListener("click", () => {
    console.log("yearDownBtn clicked");

movies.forEach((item) => {
    const outputText = `<div>
    <h3>${item[0]}</h3>
    <p>${item[1]}</p>
    <h4>${item[2]}</h4>
    <p>${item[3]}</p>
    <p>${item[4]}</p>
    <p>${item[5]}</p>
    </div>`;
    output.innerHTML += outputText;
});
const newArrDown = movies.sort((a, b) => {
    return b[1] - a[1];
    });
console.log(newArrDown);
});
}


if (bestRateBtn) {
    bestRateBtn.addEventListener("click", () => {
    console.log("bestRateBtn clicked");

movies.forEach((item) => {
    const outputText = `<div>
    <h3>${item[0]}</h3>
    <p>${item[1]}</p>
    <h4>${item[2]}</h4>
    <p>${item[3]}</p>
    <p>${item[4]}</p>
    <p>${item[5]}</p>
    </div>`;
    output.innerHTML += outputText;
});
const newArrRating = movies.sort((a, b) => {
    return b[5] - a[5];
    });
console.log(newArrRating);
});
}