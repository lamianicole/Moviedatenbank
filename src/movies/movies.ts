import { movies } from "./database";
console.log(movies);

const inputMovie = document.querySelector('#inputMovie') as HTMLInputElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;
const yearUpBtn = document.querySelector('#yearUpBtn') as HTMLInputElement;
const yearDownBtn = document.querySelector('#yearDownBtn') as HTMLInputElement;
const BestRateBtn = document.querySelector('#BestRateBtn') as HTMLInputElement;
const title = document.querySelector('#title') as HTMLElement;
const releaseYear = document.querySelector('#releaseYear') as HTMLElement;
const director = document.querySelector('#director') as HTMLElement;
const runningTime = document.querySelector('#runningTime') as HTMLElement;
const rating = document.querySelector ('#rating') as HTMLElement;

console.log(inputMovie);
console.log(searchBtn);
console.log(yearUpBtn);
console.log(yearDownBtn);
console.log(BestRateBtn);
console.log(title);
console.log(releaseYear);
console.log(director);
console.log(runningTime);
console.log(rating);

// elvis operator --> ? prüft, ob etwas truthy oder falsy ist
searchBtn?.addEventListener('click', () => {
    const searchItemValue = inputMovie?.value;
    console.log(searchItemValue);
})

// Karten bespielen
const renderMovies = (array: [string, string, string, string, string[], string][]) => {
    array.forEach((movie) => {
    const [title, releaseYear, director, runningTime, genre, rating] = movie;

    (document.getElementById('title') as HTMLHeadingElement).innerText = title;
    (document.getElementById('releaseYear') as HTMLParagraphElement).innerText = releaseYear;
    (document.getElementById('director') as HTMLHeadingElement).innerText = director;
    (document.getElementById('runningTime') as HTMLParagraphElement).innerText = runningTime;
    (document.getElementById('genre') as HTMLParagraphElement).innerText = genre.join(', ');
    (document.getElementById('rating') as HTMLParagraphElement).innerText = rating;
    });
};

renderMovies(movies);


// Button year up - Sortierung aufsteigend
yearUpBtn.addEventListener('click', () => {
        newArray.sort((a: string, b:string) => {a - b
        }
    })

// Button year down





