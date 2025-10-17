// تحميل الهيدر والفوتر تلقائياً
document.addEventListener("DOMContentLoaded", function() {
    // تحميل الهيدر
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // تحميل الفوتر
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

