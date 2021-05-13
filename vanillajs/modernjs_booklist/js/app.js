function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = (book) => {
    // console.log(book);
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
}

UI.prototype.clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = (message, className) => {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

UI.prototype.deleteBook = (target) => {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const book = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('isbn').value
    );

    const ui = new UI();

    if(book.title === '' || book.author === '' || book.isbn === '') {
        
        ui.showAlert('Please fill in all fields', 'error');

    } else {

        ui.addBookToList(book);
        ui.showAlert('Book added!', 'success');
        ui.clearFields();
    }
});

document.getElementById('book-list').addEventListener('click', (e) => {
    e.preventDefault();

    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('Book removed!', 'success');
});