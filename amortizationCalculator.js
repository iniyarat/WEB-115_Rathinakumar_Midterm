document.getElementById("Button1").onclick = function() {
    try {
        // step 1 : User input
        let loan = prompt("Loan amount: ");
        loan = Number(loan);
        let down = prompt("Down payment %: ");
        down = Number(down);
        down = down / 100
        let term = prompt("Enter years (must be 15 or 30): ");
        term = Number(term);
        if (term != 15 && term != 30) {
            alert("Must be 15 or 30");
        }

        //step 2: initial calculations
        let principal = loan - down;
        let rate = 0.0575;
        let mRate = rate/12; //because rate is annual
        let months = terms*12;

        let payment = (mRate * principal) / (1-Math.pow(1+mRate, -months))
        let totalLoan = payment * months;
        let totalInterest = totalLoan  - principal;

        payment - payment.toFixed(2);

        //step 3: display results

    }

    catch (error) {
        alert("Something went wrong");
    }
}