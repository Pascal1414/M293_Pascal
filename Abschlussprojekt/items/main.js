function submitForm() {
    const form = document.getElementById('order');

    alert("Thank you for the Order. Package sent to: \n" + form.elements['firstname'].value + " " + form.elements['lastname'].value + "\n" +
        form.elements['street'].value + " " + form.elements['number'].value + "\n" +
        form.elements['zip-code'].value + " " + form.elements['city'].value);

    window.location.replace("/Abschlussprojekt");
    return false;
}