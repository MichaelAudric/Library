const myLibrary = [];

function Book(title, author, number_of_pages, readCheck) {

  this.title = title;
  this.author = author;
  this.number_of_pages = number_of_pages;
  this.readCheck = readCheck;

}

function resetDisplay(){
  const table = document.querySelector("#display");
  while(table.hasChildNodes())
  {
    table.removeChild(table.firstChild);
  }
}

function display() {
  resetDisplay();
  const table = document.querySelector("#display");
  for(let i = 0; i < myLibrary.length; i++)
  {
    const tr = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = myLibrary[i].title;
    tr.appendChild(title);

    const author = document.createElement("td");
    author.textContent = myLibrary[i].author;
    tr.appendChild(author);

    const number_of_pages = document.createElement("td");
    number_of_pages.textContent = myLibrary[i].number_of_pages;
    tr.appendChild(number_of_pages);

    const readCheck = document.createElement("td");
    readCheck.textContent = myLibrary[i].readCheck;
    tr.appendChild(readCheck);

    const mark_read_btn_td = document.createElement("td");
    const mark_read_btn = document.createElement("button");
    mark_read_btn.addEventListener("click" , () => {
      myLibrary[i].readCheck = "read";
      display();
    });
    mark_read_btn.textContent = "Mark Read";
    mark_read_btn.classList.add("mark_read_button");
    mark_read_btn_td.appendChild(mark_read_btn);
    tr.appendChild(mark_read_btn_td);

    const remove_btn_td = document.createElement("td");
    const remove_btn = document.createElement("button");
    remove_btn.addEventListener("click" , () => {
      myLibrary.splice(i,1);
      display();
      console.log(myLibrary.length);
    });
    remove_btn.textContent = "Remove";
    remove_btn.classList.add("remove_button");
    remove_btn_td.appendChild(remove_btn);
    tr.appendChild(remove_btn_td);

    table.appendChild(tr);
  }
}

const add_book_btn = document.querySelector("#add_book");
add_book_btn.addEventListener("click" , () => {
  let title = prompt("Title:");
  let author = prompt("Author:");
  let number_of_pages = prompt("Number of pages:");
  let readCheck = prompt("read / not read:");
  let book = new Book(title, "by "+author, 
  number_of_pages+" page"+(parseInt(number_of_pages)>1 ? "s" : ""), readCheck);
  myLibrary.push(book);
  display();
});