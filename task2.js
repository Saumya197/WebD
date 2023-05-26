const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.coursehubiitg.in/api/codingweek/contributions");
xhr.onload = function () {
    const res = JSON.parse(this.responseText);
    res.sort(function (a, b) { return b.points - a.points });
    console.log(res, typeof res);
    let ctr = 0;
    let html = "";
    const winnerProfile = document.getElementsByClassName("winner");
    const winnerName = document.getElementsByClassName("name");
    const btmCont = document.getElementById("btmCont");

    for (let item of winnerProfile) {
        item.style.backgroundImage = `url(${res[ctr].avatar})`;
        ctr++;
    }
    ctr=0;
    for (let item of winnerName) {
        item.innerHTML = `${res[ctr].name} - ${res[ctr].points}`;
        ctr++;
    }
    ctr = 4;
    for (let item of res.slice(3, res.length)) {

        html += ` <div class="grid-item1">${ctr}</div>
        <div class="grid-item2">
            <div class="profile" style = "background-image:url('${item.avatar}')" ></div>
        </div>
        <div class="grid-item3">${item.name}</div>
        <div class="grid-item4">${item.points}</div>`
        ctr++;
    }
    btmCont.innerHTML = html;
}
xhr.send()