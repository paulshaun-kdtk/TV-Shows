import './style.css';

const createLike = async (appId, itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });

    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
};

const createComment = async (appId, itemId, username, comment) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
    });

    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
};

const createCommentModal = (show) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
  <head>
  <meta charset="utf-8" />
  </head>
    <div class="modal-content">
      <span class="close-modal" id="close-modal">&times;</span>
      <img src="${show.image?.medium}" alt="${show.name} Image" width="200" class="modal-image">
      <h6 style="margin:auto;">${show.name}</h6>
      <p>${show.summary}</p>
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
};

const fetchLikesForShows = async (appId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const likesData = {};
    data.forEach((item) => {
      const itemId = item.item_id;
      const likeCount = item.likes;
      likesData[itemId] = likeCount;
    });

    return likesData;
  } catch (error) {
    console.error('Error fetching likes data:', error);
    return {};
  }
};

const fetchCommentsForShow = async (appId, showId) => {
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
};

const fetchTVMazeData = async () => {
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
      <head>
      <meta charset="utf-8" />
    </head>
        <h2>${show.name}</h2>
        <img src="${show.image?.medium}" alt="${show.name} Image" width="200">
        <p>${show.description}</P>
        <span id="likes-${showId}">${likeCount} Likes</span>
        <button class="like-button" data-show-id="${showId}">Like</button>
<br />
<br />
        <button class="comment-button" id="comment-button" style="margin-left:20%;">Comment</button>
      </div>
      `;

      const commentButton = showDiv.querySelector('.comment-button');
      commentButton.addEventListener('click', async () => {
        const modal = createCommentModal(show);
        const commentsData = await fetchCommentsForShow(appId, show.id);
        commentsData.forEach((comment) => {
          const commentItem = document.createElement('li');
          commentItem.textContent = `${comment.username}: ${comment.comment}`;
          modal.querySelector('.comments-list-modal').appendChild(commentItem);
        });
        modal.querySelector('.comment-form-modal').addEventListener('submit', async (event) => {
          event.preventDefault();
          const input = modal.querySelector('input');
          const textarea = modal.querySelector('textarea');
          const username = input.value.trim();
          const comment = textarea.value.trim();

          if (username !== '' && comment !== '') {
            const success = await createComment(appId, showId, username, comment);
            if (success) {
              const commentItem = document.createElement('li');
              commentItem.textContent = comment;
              modal.querySelector('.comments-list-modal').appendChild(commentItem);
              input.value = '';
              textarea.value = '';
            }
          }
        });

        showDiv.appendChild(modal);
        modal.style.display = 'block';
        modal.querySelector('.close-modal').addEventListener('click', () => {
          modal.style.display = 'none';
        });
      });

      const likeButton = showDiv.querySelector('.like-button');
      likeButton.addEventListener('click', async () => {
        console.log('Like button clicked');
        const success = await createLike(appId, showId);
        console.log('createLike success:', success);
        if (success) {
          const likesData = await fetchLikesForShows(appId);
          likeCount = likesData[showId] ?? 0;

          const likesSpan = showDiv.querySelector(`#likes-${showId}`);
          likesSpan.textContent = `${likeCount} Likes`;
        }
      });

      tvShowsDiv.appendChild(showDiv);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchTVMazeData();
