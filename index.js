function additem() {
    var count = 0;
    var name = document.getElementById("name").value;
    var numb = document.getElementById("numb").value;
    var email = document.getElementById("email").value;
    var reg = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    var additem = document.getElementById("additems");
    additem.style.visibility = "visible";
    if (name === "" && numb === "" && email === "") {
        alert("Nothing should be empty");
    } else if (numb.length != 10) {
        alert("Length of number should be 10");
    } else if (name.length < 3) {
        alert("Name length should be minimum 3");
    } else if (!email.match(reg)) {
        alert("Invalid email");
    } else {
        additem.innerHTML += "<tr><td>" + name + "</td><td>" + numb + "</td><td>" + email + "</td><td><button onclick=\"abc()\">Delete</button></td></tr></table>";
    }
}

function abc() {
    document.getElementById("additems").deleteRow(1);
}