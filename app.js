const scriptURL = 'https://script.google.com/macros/s/AKfycbynQzNxIg57855bE0cg2LjKshJZQ5FOUu22ZWuWPdeg1KklFGotEO9NpfcNQuoAoO745A/exec'
const submit = document.getElementById("submit")
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

    setTimeout(() => {
        submit.disabled = false;
    }, 3000);

