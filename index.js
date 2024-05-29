
const mainHeader = document.querySelector('.main-header');
let lastScrollTop = 0;
let indent;



function makeModal(htm, numer) {
    //console.log("MAKING", htm);
    let inn = htm.toString();
    let obj = {
        numer: numer,
        code: inn,
    }

    return "    <div class=\"uk-modal-dialog uk-border-rounded\" role=\"dialog\" aria-modal=\"true\">\n" +
        "\n" +
        "        <button class=\"uk-modal-close-default uk-border-rounded uk-icon uk-close\" type=\"button\" uk-close=\"\" style=\"color: var(--darkest-blue);\" aria-label=\"Close\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line></svg></button>\n" +
        "\n" +
        "        <div class=\"uk-modal-header uk-border-rounded\" style=\"color: var(--light-blue);\">\n" +
        `            <h2 class=\"uk-modal-title\" style=\"color: var(--blue);\"></h2>\n` +
        "        </div>\n" +
        "\n" +
        "        <div class=\"uk-modal-body uk-overflow-auto uk-border-rounded\" style=\"color: var(--dark-blue);\" id=\"mdlbod\">\n" +
        inn +
        "        <div class=\"uk-modal-footer uk-text-right uk-border-rounded\" style=\"color: var(--green);\" id=\"mdlftr\">\n" +
        "            <button class=\"uk-button uk-button-primary uk-modal-close uk-border-rounded\" type=\"button\" style=\"color: var(--light-white); background: var(--green)\">Закрыть</button>\n" +
        "        </div>\n" +
        "    </div>\n"
}

class HeaderMenu {
    constructor() {
        let main = document.querySelector('.main-header');
        let inner = main.innerHTML;
    }

    handleScroll(){
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Прокрутка вниз
            mainHeader.style.transition = 'transform 0.3s ease';
            mainHeader.style.transform = 'translateY(-96%)';
            mainHeader.style.borderBottom = '3px solid var(--dark-blue)';
        } else {
            // Прокрутка вверх
            mainHeader.style.transition = 'transform 0.3s ease';
            mainHeader.style.transform = 'translateY(0)';
            mainHeader.style.borderBottom = '2px solid var(--dark-blue)';
        }
    
        lastScrollTop = st <= 0 ? 0 : st; // Для поддержки поведения в iOS
    }
};

function createArticle() {
    let bl = document.getElementById("create")
    if (bl.textContent == "Логин") return;
    let maker = document.querySelector(".sec-menu");
    maker.style.visibility = "visible";
}

let createArt = document.getElementById("create");
let cross = document.getElementById("sec-menu-cross");
let maker = document.querySelector(".sec-menu");

cross.addEventListener("click", () => {
    maker.style.visibility = "hidden";
})
//createArt.addEventListener("click", createArticle)

// Слушаем событие прокрутки
window.addEventListener('scroll', HeaderMenu.handleScroll);

const helpSpan = document.getElementById("help");
helpSpan.addEventListener("click", function () {
    window.location.href = "Help/help.html";
})

window.addEventListener("load", function () {
    let header = "abc";
    let htmlCode = "<p>Kostyanumberone</p>";
    let prModal = makeModal(header, htmlCode);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kapi.ddif.pro', true);
    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let q1 = document.getElementById("firstArticle");
            let q2 = document.getElementById("secondArticle");
            let q3 = document.getElementById("thirdArticle");
            let q4 = document.getElementById("fourthArticle");

            //console.log(data);

            q1.innerHTML = data.element1;
            q2.innerHTML = data.element2;
            q3.innerHTML = data.element3;
            q4.innerHTML = data.element4;

            let el = document.querySelector(".preloader");
            el.style.opacity = "0";
            el.style.display = "none";
        } else {
            console.info("Запрос еще не выполнен    ");
        }
    })
});

let arts = document.getElementsByClassName("article");
let a = false;
for (let i = 0; i < arts.length; ++i) {
    arts[i].onclick = function () {
        let remModal = document.getElementById("modal-overflow");
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://kapi.ddif.pro/back-inform?numer=${i.toString()}`, true);
        xhr.addEventListener("readystatechange", function () {
            //console.log(xhr.readyState, xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = xhr.responseText;
                //console.log(i, data);
                let htmlCode = data;
                let prModal = makeModal(data, i + 1);

                let modal = document.getElementById("modal-overflow");
                if (modal == null) {
                    modal = document.createElement('div');
                    modal.setAttribute("id", "modal-overflow");
                    modal.setAttribute("uk-modal", "");
                    modal.setAttribute("tabindex", "-1");
                    modal.classList = "uk-modal";
                    document.body.appendChild(modal); // Добавляем модальное окно на страницу
                }
                modal.innerHTML = prModal;
                //console.log("Modal", modal.innerHTML);
                let link = document.getElementById('helpLink');
                setTimeout(function () {
                    //console.log(link);
                    link.setAttribute("href", "#modal-overflow");
                    link.click();
                }, 100); // задержка в 100 миллисекунд
            } else {
                console.info('Запрос еще не выполнен');
            }
        })
        xhr.send();
    }
}


let help = document.getElementById("help");
let helpList = document.getElementById("helplist")
help.addEventListener("mouseover", () => {
    helpList.style.display = "block";
})
help.addEventListener("mouseout", () => {
    helpList.style.display = "none";
})
helpList.addEventListener("mouseover", () => {
    helpList.style.display = "block";
});
helpList.addEventListener("mouseout", () => {
    helpList.style.display = "none";
});
let helpListElems = document.getElementsByClassName("help-list-elem")
for (let elem of helpListElems) {
    elem.addEventListener("click", (e) => {
        let id = e.target.id;
        if (id == "helpnav") {
            window.location.href = "Help/help.html";
        }
        else if (id == "prepnav") {
            window.location.href = "Preps/prep.html";
        }
        else if (id == "histnav") {
            window.location.href = "history/History.html";
        }
        console.log(e.target.id);
    })
}

document.addEventListener("keydown", (e) => {
    //console.log("CLICK")
    let loginCard = document.querySelector(".login-card");
    if (e.keyCode == 27 && loginCard.style.opacity != '0') {
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "2vh";
        }, 200);
        let timer2 = setTimeout(() => {
            loginCard.style.opacity = '0';
        }, 700)
    }
    let menu = document.getElementById("sec-menu");
    if (!secMenuOver) {
        menu.style.height = "0";
        menu.style.width = "0";
        menu.style.visibility = "hidden";
    }
});


