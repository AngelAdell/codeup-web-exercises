"use strict";
(() => {
    fetch("http://localhost:3000/books").then(resp =>resp.json()).then(data => console.log(data));

    fetch("http://localhost:3000/books/4").then(resp => resp.json()).then(data => fetch(
        'http://localhost:3000/authors/' + data.authorId)).then(resp =>resp.json()).then(data => console.log(data));

    const createBook = async (book) => {
        try{
            const url = ' http://localhost:3000/books';
            const options = {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url, options);
            const newbook = await resp.json();
            return newbook;
        } catch (error){
            console.log(error);
        }
    }

    const newBook = {
        "title": "Garfield at Large",
        "authorId": 4,
        "publishedYear": 1980,
        "genre": "Daily Comics",
        "summary": "The epic tale of the relentless pursuit of the great white whale.",
        "ISBN": "9780142000083"
    }

    // createBook(newBook).then(()=> fetch("http://localhost:3000/books")).then(resp =>resp.json()).then(data => console.log(data));

    const createAuthor = async (book) => {
        try{
            const url = ' http://localhost:3000/authors';
            const options = {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authors)
            };
            const resp = await fetch(url, options);
            const newAuthor = await resp.json();
            return newAuthor;
        } catch (error){
            console.log(error);
        }
    }

    const editBook = async(id, book) => {
        try{
            const url = 'http://localhost:3000/books/' + id;
            const options = {
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url, options);
            const newbook = await resp.json();
            return newbook;
        } catch (error){
            console.log(error);
        }
    }

    const jimDavis = {
        "name": "Jim Davis",
            "birthYear": 1926,
            "deathYear": null,
            "nationality": "American"
    }

    editBook(5,{"authorId":5});

})();