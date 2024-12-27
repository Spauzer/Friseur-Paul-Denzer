document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;

    const responseMessage = `
        Vielen Dank, ${name}!<br>
        Wir haben Ihre Anfrage für ${service} am ${date} um ${time} erhalten.<br>
        Wir melden uns bald unter ${phone}, um den Termin zu bestätigen.
    `;

    document.getElementById("booking-response").innerHTML = responseMessage;
});
