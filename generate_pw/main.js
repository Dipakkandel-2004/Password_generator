let button = document.querySelector(".second");
let text = document.querySelector(".first");
let len = 10;

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890"
let special = "@#$%&"
const allchar = upper + lower + num + special;
function createpw() {
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (len > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];

    }
    text.value = password;
}
button.addEventListener("click", () => {
    createpw()
});
