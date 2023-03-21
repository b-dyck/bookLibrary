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

// Dom Selectors

const $library = document.querySelector('#library')
const $newBookButton = document.querySelector('#newBookButton')
const $deleteBookButton = document.querySelector('#deleteBookButton')


const $newBookForm = document.querySelector('#newBookForm')
const $titleInput = document.querySelector('#title')
const $authorInput = document.querySelector('#author')
const $pagesInput = document.querySelector('#pages')
const $isReadInput = document.querySelector('#isRead')
const $addButton = document.querySelector('#addButton')
const $exitFormButton = document.querySelector('#exitForm')


const $card = document.createElement('div')
const $title = document.createElement('h3')
const $author = document.createElement('p')
const $pages = document.createElement('p')
const $btnGroup = document.createElement('div')
const $readBtn = document.createElement('button')
const $removeBtn = document.createElement('button')

// Creates display for book by DOM manipulation. Appends book card to the Library div
function createBookCard(book) {
    
    $title.textContent = book.title
    $author.textContent = book.author
    $pages.textContent = `${book.pages} pages`
    $removeBtn.textContent = 'Remove'

    if (book.isRead) {
        $readBtn.textContent = 'Read'
    } else {
        $readBtn.textContent='Not Read'
    }
    // Sets id on remove button to allow for removal of DOM element and inout in library dataset
    $removeBtn.classList.add = book.title
    $card.classList.add = book.title

    $card.appendChild($title)
    $card.appendChild($author)
    $card.appendChild($pages)
    $btnGroup.appendChild($readBtn)
    $btnGroup.appendChild($removeBtn)
    $card.appendChild($btnGroup)
    $library.appendChild($card)
}

// Loops through library dataset and creates DOM Element for each book in library div
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i += 1) {
        createBookCard(myLibrary[i])
    }
}

// fucntion to add book to library dataset based on user input
function addBookToLibrary() {

    const bookTitle=$titleInput.value
    const bookAuthor=$authorInput.value
    const bookPages=$pagesInput.value
    const bookIsRead=$isReadInput.checked

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookIsRead)
    myLibrary.push(newBook)
    displayLibrary()
    $newBookForm.style.display = 'none'
}

$addButton.addEventListener("click", addBookToLibrary)

$newBookButton.addEventListener("click", () => {
    $newBookForm.style.display = 'block'
});


function removeBook(index) {
    $library.removeChild(document.querySelector(`div[data-index=${index}]`))
    myLibrary.splice(index, 1)
}

displayLibrary();
