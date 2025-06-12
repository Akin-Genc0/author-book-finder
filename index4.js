const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#title');
const addBtn = document.querySelector('#addBtn');
const result = document.querySelector('.result');


async function getData() {

try {

const autherInput = bookAuthor.value.toLowerCase()

const resp = await fetch(`https://openlibrary.org/search.json?author=${autherInput}`)

if(!resp.ok){
    throw new Error('Not Found')
}

const data = await resp.json();

} catch(error){
    console.error(error)
}


}




addBtn.addEventListener('click', function() {

getData()
});