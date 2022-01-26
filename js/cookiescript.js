
function updateTable(el) {
    const tables = document.querySelector(".tables"),
        allClassNames = ["necessary", "preferences", "statistics", "marketing"],
        newClassName = el.id;
    allClassNames.forEach(name => {
        tables.classList.remove(name);
    });
    tables.classList.add(newClassName);
}
updateTable(document.querySelector(".declarations input[type=radio]"));


function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/" + ";SameSite=Lax";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}

function onCookieClick(allCookies) {
    if (allCookies) { createCookie('cookieConsent', 'all', 31); }
    else {
        const allSelected = document.querySelectorAll(".cookiebot fieldset input:checked");
        let allowedCookies = "";
        allSelected.forEach(input => {
            allowedCookies += input.getAttribute('data-for');
            if (input != allSelected[allSelected.length - 1]) allowedCookies += ",";
        })
        createCookie('cookieConsent', allowedCookies, 31);
    }
    location.reload();
}

const cookieNotice = document.querySelector("section.cookiebot");
if (!readCookie('cookieConsent')) cookieNotice.classList.add("show"); // meaning user has not given permission for anything yetx
else {
    const response = readCookie('cookieConsent');
    if (response.includes("statistics") || response == 'all') {

        const scriptUrl1 = "https://www.googletagmanager.com/gtag/js?id=G-335VP7PB15",
            scriptUrl2 = "https://www.googletagmanager.com/gtag/js?id=UA-183366710-1";


        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-335VP7PB15');
        gtag('config', 'AW-444215326');
        gtag('config', 'UA-183366710-1');


        const script1 = document.createElement('script');
        script1.src = scriptUrl1;
        document.querySelector("head").append(script1)

        const script2 = document.createElement('script2');
        script2.src = scriptUrl2;
        document.querySelector("head").append(script2)

        if (document.body.classList.contains("thanks")) gtag('event', 'conversion', { 'send_to': 'AW-444215326/TJj_CO_Irv4BEJ7g6NMB' });
    }
    if (response.includes('marketing') || response == 'all') {
        //    fb script
    }
}