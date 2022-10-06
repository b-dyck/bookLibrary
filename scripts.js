//Array to store books

let myLibrary = [
    {
        title: "Scotty",
        author: "Ken Dryden",
        pages: 400,
        isRead: false
    }
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
function addBookToLibrary() {

    let title=$titleInput.value
    let author=$authorInput.value
    let pages=$pagesInput.value
    let isRead=$isReadInput.checked

    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    displayLibrary()
    $newBookForm.style.display = 'none'
}

function displayLibrary() {
    for (let i in myLibrary) {
        console.log(myLibrary[i])
    }
}