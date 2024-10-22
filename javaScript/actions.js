document.getElementById('hamburger').addEventListener('click', function () {
    var menuContactContainer = document.querySelector('.menu-contact-container');

    menuContactContainer.classList.toggle('active');
});

//Control the color of the class contact

document.getElementById('contact').addEventListener('click', function () {
    this.classList.add('active')

    localStorage.setItem('contactClicked', 'true')
})

window.addEventListener('load', function() {
    if (localStorage.getItem('contactClicked') === 'true') {
        document.getElementById('contact').classList.add('active');
    }
});

window.addEventListener('beforeunload', function() {
    if (window.location.pathname === '/pages/contact.html') {
        localStorage.removeItem('contactClicked');
    }
});