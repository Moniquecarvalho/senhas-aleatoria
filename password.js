/*Codewithharsh_*/
let passLength = document.querySelector('.password-length input');
let options = document.querySelectorAll('.checkboxes-box div input');
let generateBtn = document.querySelector('.generate-btn');
let password = document.querySelector('.password h3');
let copyBtn = document.querySelector('#copy-btn');

let getPassLengthValue = () => {
        document.querySelector('.length-value').innerHTML = passLength.value;
}

const characters = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};


let getPassword = () => {
        let strongPassword = "";
        let randomPassword = "";
        let passWordLength = passLength.value;
        options.forEach((option) => {
                if (option.checked) {
                        strongPassword += characters[option.id]
                }
        })
        for (let i = 0; i < passWordLength; i++) {
                randomPassword += strongPassword[Math.floor(Math.random() * strongPassword.length)];
        }
        password.innerHTML = randomPassword;
}

let copyPassword = () => {
        navigator.clipboard.writeText(password.textContent);
}

copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', getPassword);
