
function splitTextIntoChunks(text, chunkSize) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
}

const mainHeader = document.querySelector('.main-header');
let lastScrollTop = 0;
let indent;
let create = document.getElementById("create");

function makeModal(htm) {
    //console.log("MAKING", htm);
    let inn = htm.toString();
    return "    <div class=\"uk-modal-dialog uk-border-rounded\" role=\"dialog\" aria-modal=\"true\">\n" +
        "\n" +
        "        <button class=\"uk-modal-close-default uk-border-rounded uk-icon uk-close\" type=\"button\" uk-close=\"\" style=\"color: var(--darkest-blue);\" aria-label=\"Close\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line></svg></button>\n" +
        "\n" +
        "        <div class=\"uk-modal-header uk-border-rounded\" style=\"color: var(--light-blue);\">\n" +
        "            <h2 class=\"uk-modal-title\" style=\"color: var(--blue);\"></h2>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"uk-modal-body uk-overflow-auto uk-border-rounded\" style=\"color: var(--dark-blue);\">\n" +
        inn +
        "        <div class=\"uk-modal-footer uk-text-right uk-border-rounded\" style=\"color: var(--green);\">\n" +
        "            <button class=\"uk-button uk-button-primary uk-modal-close uk-border-rounded\" type=\"button\" style=\"color: var(--light-white); background: var(--green)\">Закрыть</button>\n" +
        "        </div>\n" +
        "    </div>\n"
}

// Функция для проверки направления скролла и применения соответствующего эффекта
function handleScroll() {
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

window.addEventListener('scroll', handleScroll);

let back = document.getElementById("name");
back.addEventListener("click", () => {
    window.location.href = "../index.html";
});

let lg = document.getElementsByClassName("login-card")[0];
lg.style.height = "2vh";
lg.style.opacity = "0";

create.addEventListener("click", function () {
    //console.log(document.getElementById("create").textContent);
    loginCard.innerHTML = "<h2 id=\"ftmp\">Форма</h2>\n" +
        "    <div class=\"login-field\">\n" +
        "        <input  placeholder=\"Пароль\" id=\"pass\">\n" +
        "    </div>\n" +
        "    <svg onclick=\"lock()\" class=\"lock-icon\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\">\n" +
        "        <path d=\"M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z\"></path>\n" +
        "    </svg>\n" +
        "    <span class=\"invalid\" id=\"inv\">Any field is empty!</span>\n" +
        "    <button class=\"login-btn\" onclick=\"log('asd')\">Завершить</button>"

    //console.log(loginCard);
    if (loginCard.style.opacity == 0) {
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "60vh";
        }, 200)
        ++rC;
    } else {
        let timer1 = setTimeout(() => {
            loginCard.style.height = "2vh";
        }, 200);
        let timer2 = setTimeout(() => {
            loginCard.style.opacity = '0';
        }, 700)
        ++rC;
    }
});


document.addEventListener("keydown", (e) => {
    console.log("CLICK")
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
    if (e.keyCode == 27 && secMenu.style.height != '0') {
        menu.style.height = "0";
        menu.style.width = "0";
        --mnt;
    }
});

let countLock = 2;

let rC = 0;
let review = document.getElementById('name');
let loginCard = document.querySelector('.login-card');

/*let tempCode =         `<h2>{{title}}</h2>
<div class="login-field">
    <input  placeholder="Имя" id="log">
</div>
<div class="login-field"> 
    <textarea placeholder="Отзыв" id="pass"></textarea>
</div>
<svg onclick="lock()" class="lock-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"></path>
</svg> 
<span class="invalid" id=\"inv">{{warn}}</span> 
<button class="login-btn" onclick="log('rev')">Завершить</button>`

let fastTmp1 = Handlebars.compile(tempCode);*/

review.addEventListener("click", () => {
    //console.log(loginCard);
    let obj = {
        title: "Форма",
        warn: "Any field is empty!",
    }
    loginCard.innerHTML = fastTmp1(obj);
        /*`<h2>{{title}}</h2>
            <div class="login-field">
                <input  placeholder="Имя" id="log">
            </div>
            <div class="login-field"> 
                <textarea placeholder="Отзыв" id="pass"></textarea>
           </div>
            <svg onclick="lock()" class="lock-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"></path>
            </svg> 
            <span class="invalid" id=\"inv">{{warn}}</span> 
            <button class="login-btn" onclick="log('rev')">Завершить</button>`*/;
            

    if (rC % 2 == 0) {
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "60vh";
        }, 200)
        ++rC;
    } else {
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "2vh";
        }, 200);
        let timer2 = setTimeout(() => {
            loginCard.style.opacity = '0';
        }, 700)
        ++rC;
    }
})

function log(x) {
    let bl = document.getElementById("create")
    //console.log(x);
    if (bl.textContent == "Логин") {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://kapi.ddif.pro/password', true);

        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    let erPas = document.getElementById("pass").value;
                    //console.log(loginCard);
                    //console.log(data, erPas, '---');
                    if (data === erPas) {
                        //console.log("in")
                        bl.innerText = "Добавить";
                        loginCard.style.visibility = "hidden";
                    }
                }
            }
        }
    } else {
        let err = document.getElementById("inv");
        let nodeName = document.getElementById('log');
        let nodePass = document.getElementById('pass');
        let name = nodeName.value;
        //console.log(nodePass)
        let pass = nodePass.value;
        nodeName.onfocus = function () {
            inv.style.visibility = "hidden";
        }

        nodePass.onfocus = function () {
            inv.style.visibility = "hidden";
        }
        //console.log(name, pass);
        if ((name == '' || pass == '') && countLock % 2 == 0) {
           // console.log('empty field');
            inv.style.visibility = "visible";
        }

        //Запрос
        const url = 'https://kapi.ddif.pro';
        let user = document.getElementById('log').value;
        let msg = document.getElementById('pass').value;
        let data = {
            user: user,
            message: msg
        }
       //console.log(data);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    //console.log('Текст успешно отправлен на сервер');
                } else {
                    console.error('Ошибка при отправке текста на сервер');
                }
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            })

        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "60vh";
        }, 200)
        ++rC;
        //console.log("worked");
    }
}

function lock() {
    let btn = document.querySelector('.lock-icon');
    let nodePass = document.getElementById('log');
    if (countLock % 2 == 0) {
        btn.innerHTML = '<path d=\"M 18 1 C 14.67619 1 12 3.6761905 12 7 L 12 8 L 2.9296875 8 C 1.8656875 8 1 8.897 1 10 L 1 20 C 1 21.103 1.8656875 22 2.9296875 22 L 14.070312 22 C 15.134312 22 16 21.103 16 20 L 16 10 C 16 8.897 15.135266 8 14.072266 8 L 14 8 L 14 7 C 14 4.7238095 15.72381 3 18 3 C 20.27619 3 22 4.7238095 22 7 L 22 9 L 24 9 L 24 7 C 24 3.6761905 21.32381 1 18 1 z M 8.5078125 13 C 9.6078125 13 10.507812 13.9 10.507812 15 C 10.507812 16.1 9.6078125 17 8.5078125 17 C 7.4078125 17 6.5078125 16.1 6.5078125 15 C 6.5078125 13.9 7.4078125 13 8.5078125 13 z\"></path>\n';
        ++countLock;
        nodePass.setAttribute('type', 'password');
    } else {
        btn.innerHTML = '<path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"></path>\n"></path>\n';
        ++countLock;
        nodePass.setAttribute('type', 'text');
    }
}

let secMenu = document.getElementById("sec-menu");
create.addEventListener("click", () => {
    //console.log("тут");
    if (create.textContent != "Логин" && secMenu.style.visibility != "visible") {    
        secMenu.style.width = "60vw";
        secMenu.style.height = "80vh";
        secMenu.style.visibility = "visible";
        //console.log("in");
    } else if (create.textContent != "Login") {
        secMenu.style.height = "0";
        secMenu.style.width = "0";
        secMenu.style.visibility = "hidden";
        //console.log("in");
    }
})


let colorCh = document.getElementById("clStyle");

let cursive = document.getElementById("curStyle");
let bold = document.getElementById("boldStyle");
let underl = document.getElementById("underlineStyle");

colorCh.addEventListener("input", function () {
    //console.log(colorCh.value)
    document.execCommand('foreColor', false, colorCh.value);
});

cursive.addEventListener("click", function () {
    makeItalic();
});

bold.addEventListener("click", function () {
    makeBold();
});

underl.addEventListener("click", function () {
    makeUnderline()
});

function makeBold() {
    document.execCommand('bold');
}

function makeItalic() {
    document.execCommand('italic');
}

function makeUnderline() {
    document.execCommand('underline');
}

let btnImg = document.getElementById("addImg");
btnImg.addEventListener("click", function () {
    let input = document.getElementById("inpImg");
    input.click();
});

let imgs = "123";

let inpImg = document.getElementById("inpImg");
inpImg.addEventListener("change", function (event) {
    let img = document.createElement("img");
    img.style.maxWidth = "35vw";
    img.style.maxHeight = "45vh";
    let target = event.target;
    if (!FileReader) {
        alert('FileReader не поддерживается — облом');
        return;
    }
    if (!target.files.length) {
        alert('Ничего не загружено');
        return;
    }
    let fileReader = new FileReader();
    fileReader.onload = function () {
        imgs = fileReader.result;
    }
    fileReader.readAsDataURL(target.files[0]);
    //console.log(imgs);
    //console.log(event.target.files);
})

document.addEventListener("keydown", (e) => {
    let maker = document.querySelector(".sec-menu");
    if (e.keyCode == 13 && maker.style.visibility != "hidden") {
        //console.log("123");
        let name = document.getElementById("inpname");
        let stat = document.getElementById("inpstat");
        let info = document.getElementById("inpinfo");

        //console.log(imgs);
        let q1 =
            `<div class="article prep-elem">
            <img class="prep-img" src="${imgs}">
            <h2 class="prep-name">${name.innerText}</h2>
            <p class="prep-info">${stat.innerText}</p>
            <p class="prep-info">${info.innerText}</p>
        </div>`;

        const chunkSize = 5000;
        const textChunks1 = splitTextIntoChunks(q1, chunkSize);

        const formData1 = new FormData();
        textChunks1.forEach((chunk, index) => {
            formData1.append(chunk + index.toString(), chunk);
        });

        let url = "https://kapi.ddif.pro"

        let timer1 = setTimeout(() => {
            fetch(url + '/add-card', {
                method: 'POST',
                body: formData1,
            })
                .then(response => {
                    if (response.ok) {
                        //console.log('Текст успешно отправлен на сервер', response.json());
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                })
        }, 1500);
    }
});

window.addEventListener("load", () => {
    let container = document.getElementById("preppoint");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://kapi.ddif.pro/add-card");
    xhr.addEventListener("readystatechange", (e) => {
        //console.log(xhr.readyState, xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            let arr = JSON.parse(xhr.responseText);
            //console.log(arr);
            for (let i = arr.length-1; i >= 1; --i) {
                let elem = arr[i];
                let dv = document.createElement("div");
                dv.innerHTML = elem;
                container.innerHTML += elem;
            }
        }
    })
    xhr.send();
})

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

let secMenuOver = false;
let loginCardOver = false;
let secLogBtnOver = false;
let reviewBtnOver = false;

let secLogBtn = document.getElementById("create");

secMenu.addEventListener("mouseover", function () {
    secMenuOver = true;
});
secMenu.addEventListener("mouseout", function () {
    secMenuOver = false;
});

loginCard.addEventListener("mouseover", function () {
    loginCardOver = true;
});
loginCard.addEventListener("mouseout", function () {
    loginCardOver = false;
});

secLogBtn.addEventListener("mouseover", function () {
    secLogBtnOver = true;
});

secLogBtn.addEventListener("mouseout", function () {
    secLogBtnOver = false;
});

window.addEventListener("click", function () {

    console.log(loginCardOver, secMenuOver, secLogBtnOver);
    if (secLogBtnOver || reviewBtnOver) return 0;
    console.log("NEXT");
    if (!loginCardOver && loginCard.style.opacity != 0) {
        console.log("NEXTERR");
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "2vh";
        }, 200);
        let timer2 = setTimeout(() => {
            loginCard.style.opacity = '0';
        }, 700)
        ++rC;
    }

    let menu = document.getElementById("sec-menu");
    if (!secMenuOver) {
        menu.style.height = "0";
        menu.style.width = "0";
        menu.style.visibility = "hidden";
    }
});


function lock(){
    let btn = document.querySelector('.lock-icon');
    let nodePass = document.getElementById('pass');
    if(countLock % 2 == 0){
        btn.innerHTML = '<path d=\"M 18 1 C 14.67619 1 12 3.6761905 12 7 L 12 8 L 2.9296875 8 C 1.8656875 8 1 8.897 1 10 L 1 20 C 1 21.103 1.8656875 22 2.9296875 22 L 14.070312 22 C 15.134312 22 16 21.103 16 20 L 16 10 C 16 8.897 15.135266 8 14.072266 8 L 14 8 L 14 7 C 14 4.7238095 15.72381 3 18 3 C 20.27619 3 22 4.7238095 22 7 L 22 9 L 24 9 L 24 7 C 24 3.6761905 21.32381 1 18 1 z M 8.5078125 13 C 9.6078125 13 10.507812 13.9 10.507812 15 C 10.507812 16.1 9.6078125 17 8.5078125 17 C 7.4078125 17 6.5078125 16.1 6.5078125 15 C 6.5078125 13.9 7.4078125 13 8.5078125 13 z\"></path>\n';
        ++countLock;
        nodePass.setAttribute('type', 'password');
    }else{
        btn.innerHTML = '<path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"></path>\n"></path>\n';
        ++countLock;
        nodePass.setAttribute('type', 'text');
    }
}

/*let interval1 = setInterval(function() {
    let arr = document.querySelector(".atd");
    console.log(arr);
    let elems = document.getElementsByClassName("prep-elem");

    let maxHeight = 0;
    for (let elem of elems) {
        if (elem.offsetHeight > maxHeight) {
            maxHeight = elem.offsetHeight;
        }
    }
    for (let elem of elems) {
        console.log(`${maxHeight}px`);
        elem.style.height = `${maxHeight}px`;
        console.log(elem.style.height, "asdasd");
    }
}, 100)*/

