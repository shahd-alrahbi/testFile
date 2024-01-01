
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList').getElementsByTagName('li');
    const messageElement = document.getElementById('message');
  
   
    searchInput.addEventListener('input', function () {
      const searchQuery = searchInput.value.toLowerCase();
      let foundMovies = 0;
  
      
      for (let i = 0; i < movieList.length; i++) {
        const movieTitle = movieList[i].textContent.toLowerCase();
        if (movieTitle.includes(searchQuery)) {
          movieList[i].style.display = 'block'; 
          foundMovies++;
        } else {
          movieList[i].style.display = 'none'; 
        }
      }
  
      if (foundMovies === 0) {
        messageElement.textContent = 'Movies not available.';
        messageElement.style.display = 'block';
      } else {
        messageElement.style.display = 'none';
      }
    });
  });