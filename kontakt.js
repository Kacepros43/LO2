function submit() {
    const name = document.getElementById("imię").value

    const message = `Cześć, ${name}!\n Dzięki za twoją wiadomość!`

    alert(message)

    return false
}

document.getElementById("form").onsubmit = submit
