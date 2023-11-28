

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

(function () {
    emailjs.init("-yK5RWclVGhDY2nmE");
})();


function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const mailMessage = `Hey, my name is ${name}, email is ${email} , number is ${number} , `
    let templateParams = {
        subject: subject,
        from_name: name,
        to_name: "Kajol Thakur",
        message: `${message}
         Here are my details =  ${mailMessage}
        `
    }

    emailjs.send("service_1d1vgsb", "template_wix7plp", templateParams, "-yK5RWclVGhDY2nmE").then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        window.scrollTo(0, 0)
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('number').value = ""
        document.getElementById('subject').value = ""
        document.getElementById('message').value = ""
    }, function (error) {
        console.log('FAILED...', error);
    });
}