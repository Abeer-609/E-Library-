const form = document.getElementById('add-book-form');
const bookTableBody = document.getElementById('book-table-body');
const searchBar = document.getElementById('search-bar');

let books = [];

// Add Book Functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;

    const newBook = {
        title,
        author,
        category,
        borrowHistory: []
    };

    books.push(newBook); // Add new book to the list
    displayBooks(); // Update the table

    form.reset(); // Reset form fields
});

// Display Books
function displayBooks() {
    bookTableBody.innerHTML = ''; // Clear the table content before rendering

    books.forEach((book, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <button onclick="viewBorrowHistory(${index})">View</button>
            </td>
        `;

        bookTableBody.appendChild(row);
    });
}

// Search Books
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayFilteredBooks(filteredBooks);
});

function displayFilteredBooks(filteredBooks) {
    bookTableBody.innerHTML = ''; // Clear the table

    filteredBooks.forEach((book, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <button onclick="viewBorrowHistory(${index})">View</button>
            </td>
        `;

        bookTableBody.appendChild(row);
    });
}

// View Borrow History
function viewBorrowHistory(index) {
    const book = books[index];
    alert(`Borrow History for ${book.title}:\n` + book.borrowHistory.join(', '));
}
