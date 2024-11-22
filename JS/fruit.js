function validateForm() {
    let paper = document.form["thisForm"]["fName"].value;
    if (paper == "") {
        alert("Name must be filled out");
            return false;
    }
}