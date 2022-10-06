//Array to store books

let myLibrary = [
];
                                     
//Dom Selectors

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


const card = document.createElement('div')
const title = document.createElement('h3')
const author = document.createElement('p')
const pages = document.createElement('p')
const btnGroup = document.createElement('div')
const readBtn = document.createElement('button')
const removeBtn = document.createElement('button')


$addButton.addEventListener('click', addBookToLibrary)

$newBookButton.addEventListener('click', () => {
    $newBookForm.style.display = 'grid'
})
//Book constructor

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;    
}

//fucntion to add book to library based on user input
function addBookToLibrary(e) {

    let title=$titleInput.value
    let author=$authorInput.value
    let pages=$pagesInput.value
    let isRead=$isReadInput.checked

    let newBook = new Book(title, author, pages, isRead)
    myLibrary[myLibrary.length] = newBook
    displayLibrary()
    $newBookForm.style.display = 'none'
    e.preventDefault()
}

function displayLibrary() {
    for (let i in myLibrary) {
        createBookCard(myLibrary[i])
    }
}

function createBookCard(book) {
    
    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    if (book.isRead) {
        readBtn.textContent = 'Read'
    } else {
        readBtn.textContent='Not Read'
    }

    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    btnGroup.appendChild(readBtn)
    btnGroup.appendChild(removeBtn)
    card.appendChild(btnGroup)
    $library.appendChild(card)
}

