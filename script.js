function toggleMode() {
    const html = document.querySelector('html');
    html.classList.toggle('dark');

    const message=document.querySelectorAll('.text');
    message.forEach(el => el.classList.toggle('invisible'));
}
