
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let pw1 = document.getElementById(`password-1`);
let pw2 = document.getElementById(`password-2`);


function passGen() {
    pw1.textContent = ``
    pw2.textContent = ``
    for (let x = 0; x < 15; x++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        pw1.textContent += characters[randomChar]
        pw2.textContent += characters[randomChar] // pw1.tc  which is set to `` += the new password, before when i didnt have that it += the 1st pass + all others 
    }
}
