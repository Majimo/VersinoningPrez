function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = book.title;
      titleTd.innerHTML = '';
      titleTd.appendChild(input);
      input.focus();

      input.onblur = () => {
        books[index].title = input.value;
        renderBooks();
      };

      input.onkeydown = (event) => {
        if (event.key === 'Enter') {
          input.blur();
        }
      };
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
