if(localStorage.getItem("books") === null){
    localStorage.setItem("books", JSON.stringify([]))
}
document.getElementById("upload").addEventListener("click", ()=>{
    const name= document.getElementById("name").value;
    const author= document.getElementById("author").value;
    const book ={
        name: name,
        author: author
    }
    const books = JSON.parse(localStorage.getItem("books"));
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books));

})