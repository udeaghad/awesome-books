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
  const by = document.createElement('p')
  const newDiv = document.createElement('div');
  const count = [1,2,3,4,5,6,7,8];

  //liTitle.classList = title.value;
  newDiv.classList.add('onebook');
  for(let i = 0;i<count.length; i += 1){
    if(count[i]%2==0){newDiv.classList.add('removebg')}
    else{
      newDiv.classList.add('removebg2')
    }
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
