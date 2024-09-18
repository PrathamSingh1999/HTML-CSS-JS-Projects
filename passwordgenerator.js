const button=document.querySelector("#generate-btn");

const copy=document.querySelector(".copy-btn")

copy.addEventListener('click',copyToClipboard)

function copyToClipboard() {
    let input=document.querySelector("#password");
    navigator.clipboard.writeText(input.value)
        .then(() => {
            return;
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}




button.addEventListener('click',function(){

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
let password = '';
const arr=[12,13,14,15];

let length=arr[Math.floor(Math.random()*4)];
console.log(length);

for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

let input=document.querySelector("#password");
input.value=password;
//console.log(Object.getOwnPropertyNames(input));

})