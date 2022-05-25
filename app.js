const add = document.getElementById('add-button');
const list = document.getElementById('list');
const awesomBook = [];

class Info {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function createBook() {
  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const by = document.createElement('p');
  const newDiv = document.createElement('div');

  newDiv.classList.add('onebook');
  for (let i = 0; i < awesomBook.length; i += 1) {
    newDiv.classList.toggle('removebg');
  }

  by.innerHTML = 'by';
  removeBotton.classList = 'remove';
  liTitle.className = 'title-pe';
  liAuthor.className = 'title-pe';
  liTitle.appendChild(document.createTextNode(this.title.value));
  liAuthor.appendChild(document.createTextNode(this.author.value));
  removeBotton.innerText = 'Remove';
  newDiv.append(liTitle, by, liAuthor, removeBotton);
  list.appendChild(newDiv);
}
add.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Info(title.value, author.value);
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
  }
});

const displayDate = () => {
  const date = new Date();
  const options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const [month, time] = [
    date.toLocaleDateString(undefined, options),
    date.toLocaleTimeString().toLocaleLowerCase(),
  ];
  document.querySelector('.time').innerHTML = `${month}, ${time}`;
};
displayDate();
setInterval(displayDate, 1000);

const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');

const allSection = document.querySelector('.all');
const inputSection = document.querySelector('.input-form');
const contactSection = document.querySelector('.contact');
const copyRight = document.querySelector('.copy-right');
const linksAll = document.querySelector('.links-all');
const linksAdd = document.querySelector('.links-add');
const linksContact = document.querySelector('.links-contact');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '5%';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksContact.style.color = 'black';
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '23%';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
  linksContact.style.color = 'black';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  copyRight.style.marginTop = '19%';
  linksContact.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});
