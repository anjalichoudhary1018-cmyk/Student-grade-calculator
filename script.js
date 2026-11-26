
function calculateResult() {
    let marks = [];

    for (let i = 1; i <= 5; i++) {
        let value = document.getElementById("sub" + i).value;

        if (value === "" || Number(value) < 0 || Number(value) > 100) {
            alert("Please enter marks between 0 and 100 in all subjects.");
            return;
        }

        marks.push(Number(value));
    }

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 35) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = marks.every(mark => mark >= 35) ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "/500" +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Grade: " + grade +
        "<br>Result: " + status;
}
