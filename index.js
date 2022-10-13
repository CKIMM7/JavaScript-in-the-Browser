let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let doc = document.querySelector('document')
let input = document.querySelector('input')
let log = document.getElementById('log');
let header = document.getElementById('header');


h1.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "red";
})

h1.addEventListener('mouseover', ()=> {
    document.body.style.backgroundColor = "white";
})

h2.addEventListener('click', ()=> {
    h2.textContent = 'hello world';
});

// If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.

function updateValue(e) {
    console.log(e.key)
    const newP = document.createElement("p");
    document.body.append(newP)
    newP.innerText = e.key;
 
  }

input.addEventListener('keypress', updateValue);



