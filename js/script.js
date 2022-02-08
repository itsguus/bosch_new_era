function msToTime(duration) {
    let
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.ceil(duration / (1000 * 60 * 60 * 24));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    return object = {
        d: days,
        h: hours,
        m: minutes,
        s: seconds,
    };
}


function update() {
    const toDate = new Date("2022/05/09 10:00"),
        now = new Date(),
        msDif = toDate - now;

    const circles = document.querySelectorAll("svg circle.foreground");
    circles.forEach(circle => {
        const span = circle.parentNode.parentNode.querySelector("span.number");
        const timeType = circle.getAttribute("data-time");
        const relTime = msToTime(msDif)[timeType] - 0;
        span.textContent = relTime;

        if (relTime == 59) circle.style ="transition: 500ms; stroke-dashoffset: 270";
        else 
        circle.style = `stroke-dashoffset: ${getOffset(timeType, relTime)}`;
    });
}

function getOffset(type, time) {
    const maxOffset = 270;
    switch (type) {
        case "d": {
            return (time / 60) * maxOffset;
        }
        case "h":
            return (time / 24) * maxOffset;
        case "m":
            return (time / 60) * maxOffset;
        case "s":
            return (time / 60) * maxOffset;
    }
}

update();

setInterval(update, 1000);
