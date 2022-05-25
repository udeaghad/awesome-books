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
  

  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const by = document.createElement('p')
  const newDiv = document.createElement('div');
 
  newDiv.classList.add('onebook');
  for(let i = 1;i<awesomBook.length; i += 1){  
    newDiv.classList.toggle('removebg')
  }
  
  by.innerHTML = 'by'
  removeBotton.classList = 'remove';
  liTitle.appendChild(document.createTextNode(this.title.value));
  liAuthor.appendChild(document.createTextNode(this.author.value));
  removeBotton.innerText = 'Remove';
  newDiv.append(liTitle,by,liAuthor,removeBotton);
  list.appendChild(newDiv);
}
  add.addEventListener('click', () => {
  
const book = new Info(title.value, author.value)
  awesomBook.push(book);
  createBook(book);
  localStorage.setItem('awesomBook', JSON.stringify(awesomBook));

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

