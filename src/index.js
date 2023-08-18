import './style.css'

async function createLike(appId, itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: itemId
      })
    });
  
    if (response.status === 201) {  
        return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return false; 
  }
}


async function fetchLikesForShows(appId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const likesData = {};
    data.forEach(item => {
      const itemId = item.item_id;
      const likeCount = item.like_count;
      likesData[itemId] = likeCount;
    });

    return likesData;
  } catch (error) {
    console.error('Error fetching likes data:', error);
    return {};
  }
}


async function updateLikeCount(appId,likeCount) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  appId = 'mgzCjCAnCFpXiG8i4TFX'

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        like_count: likeCount
      })
    });

    return response.status === 200;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
}


async function fetchTVMazeData() {
  const appId = 'mgzCjCAnCFpXiG8i4TFX'; 
  const apiUrl = 'https://api.tvmaze.com/shows';
  const tvShowsDiv = document.getElementById('dynamicDisplay');

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const likesData = await fetchLikesForShows(appId); 

    data.forEach(show => {
      const showDiv = document.createElement('div');
      const showId = show.id;
      showDiv.classList.add('movieContainer');

      let likeCount = likesData[showId] ?? 0;

      showDiv.innerHTML = `
        <h2>${show.name}</h2>
        <img src="${show.image?.medium}" alt="${show.name} Image" width="200">
        <p>${show.description}</p>
        <button class="like-button" data-show-id="${showId}">Like</button>
        <span id="likes-${showId}">${likeCount} Likes</span>
      `;

      const likeButton = showDiv.querySelector('.like-button');
      likeButton.addEventListener('click', async () => {
        console.log('Like button clicked');
        const success = await createLike(appId, showId);
        console.log('createLike success:', success);
        if (success) {
          likeCount += 1;
          const updateSuccess = await updateLikeCount(appId,likeCount);
          if (updateSuccess) {
            const likesSpan = showDiv.querySelector(`#likes-${showId}`);
            likesSpan.textContent = `${likeCount} Likes`;
          }
        }
      });

      tvShowsDiv.appendChild(showDiv);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


fetchTVMazeData();
