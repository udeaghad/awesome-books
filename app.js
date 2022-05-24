const add = document.getElementById('add-button');
const list = document.getElementById('list');
const awesomBook = [];

add.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const newDiv = document.createElement('div');

  liTitle.classList = title.value;
  removeBotton.classList = 'remove';
  liTitle.appendChild(document.createTextNode(title.value));
  liAuthor.appendChild(document.createTextNode(author.value));
  removeBotton.innerText = 'Remove';
  newDiv.appendChild(liTitle);
  newDiv.appendChild(liAuthor);
  newDiv.appendChild(removeBotton);
  list.appendChild(newDiv);
  const book = {
    Title: title.value,
    Author: author.value,
  };

  awesomBook.push(book);

  localStorage.setItem('awesomBook', JSON.stringify(awesomBook));
  title.value = '';
  author.value = '';
});

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
  const newAwesemBook = awesomBook.filter((ele) => ele.Title !== e.target.parentElement.children[0].innerText);

    localStorage.setItem('awesomBook', JSON.stringify(newAwesemBook));
  }
});
