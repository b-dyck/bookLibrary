// Array to store books

const myLibrary = [
    {title: "Game of Thrones",
    author: "George rr Martin",
    pages: "784",
    isRead: false
},
{
    title: "Harry Potter",
    author: "J.K Rowling",
    pages: "987",
    isRead: true
}
];

// Book constructor

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;    
}

const $newBookButton = document.querySelector('#newBookButton')
const $newBookForm = document.querySelector('#newBookForm')
const $titleInput = document.querySelector('#title')
const $authorInput = document.querySelector('#author')
const $pagesInput = document.querySelector('#pages')
const $isReadInput = document.querySelector('#isRead')
const $addButton = document.querySelector('#addButton')


 // Functions to open and close the form for user input - currently not working
function openForm() {
    document.getElementById('newBookForm').style.display = 'block';
    console.log("Form should open")
}

function closeForm() {
    document.getElementById('newBookForm').style.display = 'none';
}

$newBookButton.addEventListener('click', openForm())

function displayBook(book) {
    // Dom Selectors

    const $library = document.querySelector('#library')
    const $card = document.createElement('div')
    const $title = document.createElement('h3')
    const $author = document.createElement('p')
    const $pages = document.createElement('p')
    const $btnGroup = document.createElement('div')
    const $readBtn = document.createElement('button')
    const $removeBtn = document.createElement('button')

    $title.textContent = book.title;
    $author.textContent = book.author;
    $pages.textContent = book.pages;
    
    if (book.isRead) {
        $readBtn.textContent = "Read";
    }   else {
        $readBtn.textContent = "Not Read";
    }

    $card.appendChild($title);
    $card.appendChild($author);
    $card.appendChild($pages);
    $btnGroup.appendChild($readBtn);
    $btnGroup.appendChild($removeBtn);
    $library.appendChild($card)
    
}

function displayEachBook() {
    for (let i = 0; i < myLibrary.length; i += 1) {
        displayBook(myLibrary[i])
    }
    closeForm()
}

displayEachBook();