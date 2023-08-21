const itemCounter = (item) => item.length;

const displayItemCounted = (shows) => {
  const counter = document.querySelectorAll('.item-counter');
  counter.innerText = `TV Shows(${itemCounter(shows)})`;
};

export { itemCounter, displayItemCounted };
