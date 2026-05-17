function updateDuration(val) {
    let daysText = "7 days";
    if (val == "1") {
        daysText = "3 days";
    } else if (val == "2") {
        daysText = "7 days";
    } else if (val == "3") {
        daysText = "15 days";
    } else if (val == "4") {
        daysText = "30 days";
    }
    document.getElementById("daysValue").innerText = daysText;
}

function generateKey() {
    var telegramLink = "https://t.me/GwPathshala";
    window.location.href = telegramLink;
}