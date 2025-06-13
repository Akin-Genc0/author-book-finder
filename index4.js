const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#t');
const addBtn = document.querySelector('#addBtn');
const result = document.querySelector('.res');
const loading = document.querySelector('#lod');


loading.style.display = "none";
async function getData() {
try {

loading.style.display = "block";

const autherInput = bookAuthor.value.toLowerCase()

const resp = await fetch(`https://openlibrary.org/search.json?author=${autherInput}`)

if(!resp.ok){
    throw new Error('Not Found')
}
 

const data = await resp.json();

loading.style.display = "none";

console.log(data)
//dropdown logic 
 for(let i = 0; i < data.docs.length; i++){

    const opt = document.createElement('option');
    const text = document.createTextNode(data.docs[i].title);
    opt.append(text);
    bookTitle.append(opt);
}
 
} catch(error){
    console.error(error);
    loading.style.display = "none";
   
}

}

 


 bookTitle.addEventListener('change' , async function(){

    result.textContent = "";
    const book = bookTitle.value;
    loading.style.display = "block";

    const resp = await fetch(`https://openlibrary.org/search.json?title=${book}`)
    
    const data = await resp.json();

    loading.style.display = "none";
    const ft = data.docs[0].title;
    const publish = data.docs[0].first_publish_year;
    result.append("Book Title: " + ft + " First Publish Year: " + publish);
    console.log(data)
 
 })

addBtn.addEventListener('click', function() {
bookTitle.textContent = "";
getData()
});