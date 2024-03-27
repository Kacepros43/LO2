function formatList(list) {
    if (list.length === 0) {
        return '';
    } else if (list.length === 1) {
        return list[0];
    } else if (list.length === 2) {
        return list.join(' i ');
    } else {
        const lastItem = list.pop();
        return list.join(', ') + ' i ' + lastItem;
    }
}

function updateNameDay() {
    fetch("https://nameday.abalin.net/api/V1/today?country=pl").then(res => res.json()).then(res => {
        const nameDayList = res.nameday.pl.split(', ')

        if (nameDayList) document.getElementById("name-day").innerHTML = `Dzisiejsze imiona to ${formatList(nameDayList)}`
    })
}

function updateClock() {
    const currentDate = new Date()
    document.getElementById("clock").innerText = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
}

updateClock()

setInterval(updateClock, 1000)

updateNameDay()
