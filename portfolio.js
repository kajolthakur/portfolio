let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        }

    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



}


(function () {
    emailjs.init("EwgM4dAtmMIi8cI7Z");
})();


function sendMail(e) {

    e.preventDefault();
    alert("hello");
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

    emailjs.send("service_1d1vgsb", "template_3g2ld09", templateParams, "EwgM4dAtmMIi8cI7Z").then(function (response) {
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