// تحميل الهيدر والفوتر تلقائياً
document.addEventListener("DOMContentLoaded", function() {
    // تحميل الهيدر
    fetch("../1-HTML/Parts/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // تحميل الفوتر
    fetch("../1-HTML/Parts/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
