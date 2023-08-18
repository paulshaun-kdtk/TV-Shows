import './style.css';

import './style.css';

import './style.css';

// Define the likeShow function
async function likeShow(showId) {
  try {
    const response = await fetch(`https://your-backend-server.com/api/like/${showId}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 6d450e945960955ec37274e3f6d201d7' 
      }
    });

    if (response.ok) {
      const updatedLikes = await response.json();
      const likesElement = document.getElementById(`likes-${showId}`);
      likesElement.textContent = `${updatedLikes} Likes`;
    } else {
      console.error('Failed to increment like count.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fetch TVMaze data and create show elements
async function fetchTVMazeData() {
  const apiUrl = 'https://api.tvmaze.com/shows';
  const tvShowsDiv = document.getElementById('dynamicDisplay');

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach(show => {
      const showDiv = document.createElement('div');
      const showId = show.id;
      showDiv.classList.add('movieContainer')

      // Initialize likes for each show
      if (!localStorage.getItem(`likes-${showId}`)) {
        localStorage.setItem(`likes-${showId}`, '0');
      }

      showDiv.innerHTML = `
        <h2>${show.name}</h2>
        <img src="${show.image?.medium}" alt="${show.name} Image" width="200">
        <p>${show.description}</p>
        <button class="like-button" data-show-id="${showId}">Like</button>
        <span id="likes-${showId}">${localStorage.getItem(`likes-${showId}`)} Likes</span>
      `;
      tvShowsDiv.appendChild(showDiv);
    });

    // Event delegation for handling button click
    tvShowsDiv.addEventListener('click', (event) => {
      if (event.target.classList.contains('like-button')) {
        const showId = event.target.dataset.showId;
        likeShow(showId);
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchTVMazeData();