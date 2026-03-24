document.getElementById("Button1").onclick = function() {
    try {
        let loan = prompt("Loan amount: ");
        loan = Number(loan);
        let down = prompt("Down payment %: ");
        down = Number(down);
        let term = prompt("Enter years (must be 15 or 30): ");
        term = Number(term);
        if (term != 15 && term != 30) {
            alert("Must be 15 or 30");
        }
    }

    catch (error) {
        alert("Something went wrong");
    }
}