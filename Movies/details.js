
function showMovieDetails(movieId) {
  console.log("Function called with movieId: " + movieId);
  const titleElement = document.getElementById('movie-title');
  const languageElement = document.getElementById('movie-language');
  const photoElement = document.getElementById('movie-photo');
  const descriptionElement = document.getElementById('movie-description');
  const releaseDateElement = document.getElementById('movie-release-date');
  const ratingElement = document.getElementById('movie-rating');

  switch (movieId) {
case 1:
    titleElement.innerText = 'Expend4bles';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP1.jpg';
    descriptionElement.innerText = 'Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.';
    releaseDateElement.innerText = '2023-01-01';
    ratingElement.innerText = '8.5';
    break;
case 2:
    titleElement.innerText = 'Five Nights at Freddy\'s';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP2.jpg';
    descriptionElement.innerText = 'Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Freddy\'s Pizzeria. But he soon discovers that nothing at Freddy\'s is what it seems.';
    releaseDateElement.innerText = '2023-02-01';
    ratingElement.innerText = '7.9';
    break;
case 3:
    titleElement.innerText = 'Mission: Impossible - Dead Reckoning Part One	';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP3.jpg';
    descriptionElement.innerText = 'Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world\'s fate at stake and dark forces from Ethan\'s past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.';
    releaseDateElement.innerText = '2023-07-08';
    ratingElement.innerText = '7.7';
    break;
case 4:
    titleElement.innerText = 'The Equalizer 3	';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP4.jpg';
    descriptionElement.innerText = 'Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends\' protector by taking on the mafia.';
    releaseDateElement.innerText = '2023-08-30';
    ratingElement.innerText = '7.3';
    break;
case 5:
    titleElement.innerText = 'The Exorcist: Believer';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP5.jpg';
    descriptionElement.innerText = 'When his daughter and her friend show signs of demonic possession, it unleashes a chain of events that forces single father, Victor Fielding, to confront the nadir of evil. Terrified and desperate, he seeks out the only person alive who\'s witnessed anything like it before.';
    releaseDateElement.innerText = '2023-10-04';
    ratingElement.innerText = '6';
    break;
    case 6:
    titleElement.innerText = '	Saw X';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP6.jpg';
    descriptionElement.innerText = 'Between the events of Saw and Saw II, a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.';
    releaseDateElement.innerText = '2023-09-26';
    ratingElement.innerText = '7.3';
    break; 
case 7:
    titleElement.innerText = '	The Nun II';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP7.jpg';
    descriptionElement.innerText = 'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.';
    releaseDateElement.innerText = '2023-09-06';
    ratingElement.innerText = '7';
    break;
case 8:
    titleElement.innerText = 'Five Nights at Freddy\'s';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP8.jpg';
    descriptionElement.innerText = 'Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Freddy\'s Pizzeria. But he soon discovers that nothing at Freddy\'s is what it seems.';
    releaseDateElement.innerText = '2023-02-01';
    ratingElement.innerText = '7.9';
    break;
case 9:
    titleElement.innerText = 'Uri: The Surgical Strike';
    languageElement.innerText = 'Hindi';
    photoElement.src = 'images/OIP9.jpg';
    descriptionElement.innerText = 'Following the roguish terrorist attacks at Uri Army Base camp in Kashmir, India takes the fight to the enemy, in its most successful covert operation till date with one and only one objective of avenging their fallen heroes.';
    releaseDateElement.innerText = '2019-01-11';
    ratingElement.innerText = '7.1';
    break;
case 10:
    titleElement.innerText = 'Sound of Freedom';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP10.jpg';
    descriptionElement.innerText = 'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.';
    releaseDateElement.innerText = '2023-07-03';
    ratingElement.innerText = '8.1';
    break;
case 11:
    titleElement.innerText = 'Gran Turismo';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP11.jpg';
    descriptionElement.innerText = 'The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.';
    releaseDateElement.innerText = '2023-08-09';
    ratingElement.innerText = '8.1';
    break;
case 12:
    titleElement.innerText = 'Fast X';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP12.jpg';
    descriptionElement.innerText = 'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they\'ve ever faced: A terrifying threat emerging from the shadows of the past who\'s fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.';
    releaseDateElement.innerText = '2023-05-17';
    ratingElement.innerText = '7.2';
    break; 
case 13:
    titleElement.innerText = 'Mortal Kombat Legends: Cage Match';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP13.jpg';
    descriptionElement.innerText = 'In 1980s Hollywood, action star Johnny Cage is looking to become an A-list actor. But when his costar, Jennifer, goes missing from set, Johnny finds himself thrust into a world filled with shadows, danger, and deceit. As he embarks on a bloody journey, Johnny quickly discovers the City of Angels has more than a few devils in its midst.';
    releaseDateElement.innerText = '2023-10-17';
    ratingElement.innerText = '7.3';
    break;
case 14:
    titleElement.innerText = 'Meg 2: The Trench';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP14.jpg';
    descriptionElement.innerText = 'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.';
    releaseDateElement.innerText = '2023-08-02';
    ratingElement.innerText = '6.8';
    break;
case 15:
    titleElement.innerText = 'Desperation Road';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP15.jpg';
    descriptionElement.innerText = 'After 11 years in a Mississippi state prison, Russell Gaines struggles to leave his past sins behind him as he returns home to his stoic father, Mitchell. One fateful night he meets Maben, a young mother with nothing but a stolen gun and a murdered police deputy to her name. Desperate and on the run, Russell and Maben must trust one another to escape their own circumstances, before the truths of their intertwined violent past threatens to destroy them.';
    releaseDateElement.innerText = '2023-10-19';
    ratingElement.innerText = '6.8';
    break;
case 16:
    titleElement.innerText = 'Blue Beetle';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP16.jpg';
    descriptionElement.innerText = 'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.';
    releaseDateElement.innerText = '2023-08-16';
    ratingElement.innerText = '7.1';
    break;
case 17:
    titleElement.innerText = 'Nowhere';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP17.jpg';
    descriptionElement.innerText = 'A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.';
    releaseDateElement.innerText = '2023-09-29';
    ratingElement.innerText = '7.6';
    break;          
case 18:
    titleElement.innerText = 'PAW Patrol: The Mighty Movie';
    languageElement.innerText = 'English';
    photoElement.src = 'images/OIP18.jpg';
    descriptionElement.innerText = 'A magical meteor crash-lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The Mighty Pups. When the Patrol\'s archrival Humdinger breaks out of jail and teams up with mad scientist Victoria Vance to steal the powers for themselves, the Mighty Pups must save Adventure City and stop the supervillains before it\'s too late.';
    releaseDateElement.innerText = '2023-09-21';
    ratingElement.innerText = '7.2';
    break;       
    default:
      console.log("Invalid movieId: " + movieId);
      break;
  }
}


const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; // Array containing the movie IDs in the desired order
let currentIndex = 0;
let intervalId;

function displayMovie() {
  if (currentIndex <= movieIds.length) {
    showMovieDetails(movieIds[currentIndex]);
    if (currentIndex === movieIds.length -1 ) {
      clearInterval(intervalId); 
    }
    currentIndex++; 
  }
}


const delayInterval = 500;
function setIndexOnClick(index) {
  clearInterval(intervalId); 
  currentIndex = index;
  showMovieDetails(movieIds[currentIndex]); 
}
intervalId = setInterval(displayMovie, delayInterval);












































































