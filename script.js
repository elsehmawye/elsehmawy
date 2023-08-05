function checkTime() {
    var date = new Date();
    var hours = date.getHours();

    if (hours >= 20) {
        document.body.classList.add("dark-mode");
    }
}