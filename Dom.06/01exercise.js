//1 exercise
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onload = function() {
    var list = document.getElementById("list");
    var resultList = document.getElementById("resultList");

    var firstItem = list.querySelector("li:first-child").innerText;
    var lastItem = list.querySelector("li:last-child").innerText;
    var secondItem = list.querySelector("li:nth-child(2)").innerText;
    var fourthItem = list.querySelector("li:nth-child(4)").innerText;
    var thirdItem = list.querySelector("li:nth-child(3)").innerText;

    var items = [firstItem, lastItem, secondItem, fourthItem, thirdItem];

    items.forEach(function(item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        resultList.appendChild(li);
    });
}