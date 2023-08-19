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

async function createComment(appId, itemId, username, comment) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: itemId,
        username: username,
        comment: comment
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

function createCommentModal() {
  const modal = document.createElement('div');
  modal.classList.add('comment-modal');
  modal.innerHTML = `
    <div class="comment-modal-content">
      <span class="close-modal" id="close-modal">&times;</span>
      <h3>Comments:</h3>
      <ul class="comments-list-modal"></ul>
      <form class="comment-form-modal">
        <input type="text" placeholder="Your name" />
        <textarea cols="50" rows="4" placeholder="Write a comment..."></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
  return modal;
}

async function fetchLikesForShows(appId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const likesData = {};
    data.forEach(item => {
      const itemId = item.item_id;
      const likeCount = item.likes;
      likesData[itemId] = likeCount;
    });

    return likesData;
  } catch (error) {
    console.error('Error fetching likes data:', error);
    return {};
  }
}


async function fetchCommentsForShow(appId, showId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${showId}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error(`Could not get comments for ${showId}:`, error.message);
    return []; 
  }
}


async function fetchTVMazeData() {
  const appId = 'SGCdurOHua92K8iHUcg6'; 
  const apiUrl = 'https://api.tvmaze.com/shows';
  const tvShowsDiv = document.getElementById('dynamicDisplay');

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const likesData = await fetchLikesForShows(appId); 

    for (const show of data) {
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
        <button class="comment-button" id="comment-button">Comment</button>

        <div class="comments-section">
        <h3>Comments:</h3>
        <ul class="comments-list"></ul>
      </div>

        <form class="comment-form" data-show-id="${showId}">
        <input type="text" placeholder="your name" />
        <textarea cols="50" rows="4" placeholder="write a comment..."></textarea>
        <button type="submit">Submit</button>
      </form>
      `;
      
      const commentForm = showDiv.querySelector('.comment-form');
      const commentsList = showDiv.querySelector('.comments-list');
      const commentsData = await fetchCommentsForShow(appId, show.id);

      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const input = commentForm.querySelector('input');
        const textarea = commentForm.querySelector('textarea');
        const username = input.value.trim();
        const comment = textarea.value.trim();
      
        if (username !== '' && comment !== '') {
          const success = await createComment(appId, showId, username, comment);
          if (success) {
            const commentItem = document.createElement('li');
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
            input.value = '';
            textarea.value = '';
          }
        }
      });

      const likeButton = showDiv.querySelector('.like-button');
      likeButton.addEventListener('click', async () => {
        console.log('Like button clicked');
        const success = await createLike(appId, showId);
        console.log('createLike success:', success);
        if (success) {
          likeCount = await fetchLikesForShows(appId); 
          const likesSpan = showDiv.querySelector(`#likes-${showId}`);
          likesSpan.textContent = `${likeCount} Likes`;
        }
      });

      commentsData.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = `${comment.username}: ${comment.comment}`;
        commentsList.appendChild(commentItem);
      });

      tvShowsDiv.appendChild(showDiv);
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchTVMazeData();
