fetch("books_database.json")
.then(function(response){
    return response.json();
})
.then(function(books_database){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let books of books_database){
        out += `
            <tr>
                <td> <img class="image" src="${books.image}" alt="" srcset=""></td>
                <td>${books.title}</td>
                <td>${books.writer}</td>
                <td>${books.gender}</td>
                <td>${books.published}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
});
