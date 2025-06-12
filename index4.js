const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#t');
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


//dropdown logic 
 for(let i = 0; i < data.docs.length; i++){

    const opt = document.createElement('option');
    const text = document.createTextNode(data.docs[i].title);
    opt.append(text);
    bookTitle.append(opt);
}
 
} catch(error){
    console.error(error)
}

}



addBtn.addEventListener('click', function() {
bookTitle.textContent = "";
getData()
});