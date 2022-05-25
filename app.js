const add = document.getElementById('add-button');
const list = document.getElementById('list');
const awesomBook = [];

class Info{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

function createBook(){
  //const title = document.getElementById('title');
  //const author = document.getElementById('author');

  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const newDiv = document.createElement('div');

  //liTitle.classList = title.value;
  removeBotton.classList = 'remove';
  liTitle.appendChild(document.createTextNode(this.title.value));
  liAuthor.appendChild(document.createTextNode(this.author.value));
  removeBotton.innerText = 'Remove';
  newDiv.appendChild(liTitle);
  newDiv.appendChild(liAuthor);
  newDiv.appendChild(removeBotton);
  list.appendChild(newDiv);
}
  add.addEventListener('click', () => {
  /*const book = {
    Title: title.value,
    Author: author.value,
  };*/
const book = new Info(title.value, author.value)
  awesomBook.push(book);
  createBook(book);
  localStorage.setItem('awesomBook', JSON.stringify(awesomBook));
  //console.log(awesomBook)
  title.value = '';
  author.value = '';
});


list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
   const newAwesemBook = awesomBook.filter(
   (ele) => ele.Title !== e.target.parentElement.children[0].innerText,
    );
    
    awesomBook.splice(awesomBook.indexOf(newAwesemBook), 1);
    localStorage.setItem('awesomBook', JSON.stringify(awesomBook));
    console.log(awesomBook);
   
  }
});
