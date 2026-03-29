// Function to calculate Simple Interest
function calculateSI() {

    // Get input values and convert to float
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    // Calculate Simple Interest
    var si = (p * r * t) / 100;

    // Display result
    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}