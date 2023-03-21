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
const $titleInput = document.querySelector('#title')
const $authorInput = document.querySelector('#author')
const $pagesInput = document.querySelector('#pages')
const $isReadInput = document.querySelector('#isRead')
const $addButton = document.querySelector('#addButton')


 // Functions to open and close the form for user input - currently not working
function openForm() {
    document.getElementById('newBookForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('newBookForm').style.display = 'none';
}


// Dom Selectors

const $library = document.querySelector('#library')

function displayBook(book, i) {
        
    const $card = document.createElement('div')
    const $title = document.createElement('h3')
    const $author = document.createElement('p')
    const $pages = document.createElement('p')
    const $btnGroup = document.createElement('div')
    const $readBtn = document.createElement('button')
    const $removeBtn = document.createElement('button')

    $title.textContent = book.title;
    $author.textContent = book.author;
    $pages.textContent = `${book.pages} pages`;
    
    if (book.isRead) {
        $readBtn.textContent = "Read";
    }   else {
        $readBtn.textContent = "Not Read";
    }

    $readBtn.addEventListener("click", () => {
        const readStatus = $readBtn.textContent
        if (readStatus === "Read") {
            $readBtn.textContent = "Not Read"
        }
        else {
            $readBtn.textContent = "Read"
        }
    })

    $removeBtn.textContent = 'Remove'
    $removeBtn.setAttribute('index', i)
    $removeBtn.addEventListener("click", () => {
        const index = $removeBtn.index;
        myLibrary.splice(index, 1);
        // eslint-disable-next-line no-use-before-define
        displayEachBook();
    })

    $card.appendChild($title);
    $card.appendChild($author);
    $card.appendChild($pages);
    $btnGroup.appendChild($readBtn);
    $btnGroup.appendChild($removeBtn);
    $card.appendChild($btnGroup)
    $library.appendChild($card)
    
}

function displayEachBook() {
    $library.textContent = ''
    for (let i = 0; i < myLibrary.length; i += 1) {
        displayBook(myLibrary[i], i)
    }
}

function addBook(event) {
    const newBook = new Book($titleInput.value, $authorInput.value, $pagesInput.value, $isReadInput.checked)
    myLibrary.push(newBook);
    closeForm();
    displayEachBook();
    event.preventDefault();

}

$newBookButton.addEventListener("click", openForm)

$addButton.addEventListener("click", addBook)


displayEachBook();