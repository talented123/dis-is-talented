
async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    let advice = await res.json();

    // let holder = document.getElementsByClassName("h1") 
    // console.log(holder);   

    fetch("https//api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })




}
getAdvice()
let tableholder = document.querySelector("body");
console.log(tableholder)

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => {
    data.forEach((posts) =>{
        tableholder.innerHTML +=`
                <tr>    
                    <td>${posts.id}</td>
                    <td>${posts.title}</td>
                    <td>${posts.body}</td>
                </tr>
        `
    })
})