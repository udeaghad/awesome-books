let awesomeBook = [ ];

const button = document.querySelector(".add-button")



button.addEventListener("click", (e) => {
    e.preventDefault();    
    let bookDetails = {
        title: document.querySelector("#title").value,
        author: document.querySelector("#author").value
    }
    awesomeBook.push(bookDetails);
    //let result = ""
 let displayCont = document.querySelector(".display-cont");
  /*let displayItem = document.createElement("li");
  displayCont.appendChild(displayItem);
  displayItem.setAttribute('id', title.value)
  displayItem.appendChild(document.createTextNode(title.value));*/

 //for (let i = 0; i < awesomeBook.length; i++){
  
  let displayTitle = document.createElement("li");
  displayTitle.classList.add("display-title");
  displayTitle.innerHTML = title.value;
  displayCont.appendChild(displayTitle)

  let displayAuthor = document.createElement("li");
  displayAuthor.classList.add("display-author");
  displayAuthor.innerHTML = author.value;
  displayCont.appendChild(displayAuthor)

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn")
  displayCont.appendChild(removeBtn);
  removeBtn.type ="submit";
  removeBtn.innerText = "Remove";
 //} 
 
})


    


 
   











