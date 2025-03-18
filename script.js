function generateGreeting() {
    let name = document.getElementById("name-input").value;
    if (name.trim() !== "") {
        document.getElementById("user-name").innerText = "عيد سعيد " + name + "!";
        document.getElementById("greeting-container").style.display = "inline-block";
        document.getElementById("download-btn").style.display = "block";
    }
}

function downloadGreeting() {
    html2canvas(document.getElementById("greeting-container")).then(canvas => {
        let link = document.createElement("a");
        link.download = "Eid_Greeting.jpg";
        link.href = canvas.toDataURL();
        link.click();
    });
}
