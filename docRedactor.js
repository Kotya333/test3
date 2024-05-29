


let art = document.getElementById("act");
let modalArt = document.getElementById("modalAct");
let elem;
let elem2

let mnt = 0;

let logs = false;

create.addEventListener("click", function () {
    let secMenu = document.getElementById("sec-menu");
    console.log("ARBEITEN!!!!!!!!!!!!!");
    if (create.textContent == "Добавить" && secMenu.style.visibility != "visible") {
        secMenu.style.width = "60vw";
        secMenu.style.height = "80vh";
        secMenu.style.visibility = "visible";
        console.log("in");
    } else if (secMenu.style.visibility == "visible") {
        secMenu.style.height = "0";
        secMenu.style.width = "0";
        secMenu.style.visibility = "hidden";
        console.log("out");
    }
})

createArt.addEventListener("click", function () {
    console.log(document.getElementById("create").textContent);
    if (document.getElementById("create").textContent != 'Логин') {
        elem = document.createElement("div");
        art.innerHTML = "<div class=\"article-text\">\n" +
            "                </div>";
        elem.classList = "article-maker-content";
        elem.setAttribute("contenteditable", "true");
        elem.setAttribute("width", "500px");
        elem.setAttribute("height", "200px");
        elem.innerHTML = "<div class=\"article-text\">\n" +
            "                </div>";
        elem2 = document.createElement("div");
        elem2.classList = "article-maker-content";
        elem2.setAttribute("contenteditable", "true");
        elem2.setAttribute("width", "500px");
        elem2.setAttribute("height", "200px");
        elem2.innerHTML = "<div class=\"article-text modalArt\">\n" +
            "                </div>";
    } else {
        loginCard.innerHTML = "<h2>Форма</h2>\n" +
            "    <div class=\"login-field\">\n" +
            "        <input  placeholder=\"Пароль\" id=\"log\">\n" +
            "    </div>\n" +
            "    <svg onclick=\"lock()\" class=\"lock-icon\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\">\n" +
            "        <path d=\"M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z\"></path>\n" +
            "    </svg>\n" +
            "    <span class=\"invalid\" id=\"inv\">Одно из полей пусто!</span>\n" +
            "    <button class=\"login-btn\" onclick=\"log('asd')\">Завершить</button>"

        console.log(loginCard);
        console.log(loginCard.style.opacity);
        if (loginCard.style.opacity == 0) {
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
    }
});

let colorCh = document.getElementById("clStyle");

let cursive = document.getElementById("curStyle");
let bold = document.getElementById("boldStyle");
let underl = document.getElementById("underlineStyle");

let pType = document.getElementById("pType");
let hType = document.getElementById("hType");
let h3Type = document.getElementById("h3Type");

let colorCh2 = document.getElementById("clStyle2");

let cursive2 = document.getElementById("curStyle2");
let bold2 = document.getElementById("boldStyle2");
let underl2 = document.getElementById("underlineStyle2");

let pType2 = document.getElementById("pType2");
let hType2 = document.getElementById("hType2");
let h3Type2 = document.getElementById("h3Type2");


hType.addEventListener("click", function () {
    art.innerHTML += "<h2 class=\"article-header\">Header</h2>";
    elem.innerHTML += "<h2 class=\"article-header\">Header</h2>";
});

h3Type.addEventListener("click", function () {
    art.innerHTML += "<h3 class=\"article-header he3\">Header</h3>";
    elem.innerHTML += "<h3 class=\"article-header he3\">Header</h3>";
});

pType.addEventListener("click", function () {
    art.innerHTML += "<div class='article-text'><p class=\"artP\">Текст</p></div>";
    elem.innerHTML += "<div class='article-text'><p class=\"artP\">Текст</p></div>";
});

hType2.addEventListener("click", function () {
    modalArt.innerHTML += "<h2 class=\"article-header\">Header</h2>";
    elem2.innerHTML += "<h2 class=\"article-header\">Header</h2>";
});

h3Type2.addEventListener("click", function () {
    modalArt.innerHTML += "<h3 class=\"article-header he3\">Header</h3>";
    elem2.innerHTML += "<h3 class=\"article-header he3\">Header</h3>";
});

pType2.addEventListener("click", function () {
    modalArt.innerHTML += "<div class='article-text'><p class=\"artP\">Текст</p></div>";
    elem2.innerHTML += "<div class='article-text'><p class=\"artP\">Текст</p></div>";
});

colorCh.addEventListener("input", function () {
    console.log(colorCh.value)
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

colorCh2.addEventListener("input", function () {
    console.log(colorCh2.value)
    document.execCommand('foreColor', false, colorCh2.value);
});

cursive2.addEventListener("click", function () {
    makeItalic();
});

bold2.addEventListener("click", function () {
    makeBold();
});

underl2.addEventListener("click", function () {
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

let chBtn = document.getElementById("numPage");

function splitTextIntoChunks(text, chunkSize) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
}

document.addEventListener("keydown", (e) => {
    let maker = document.querySelector(".sec-menu");
    if (e.keyCode == 13 && maker.style.visibility != "hidden") {
        --mnt;
        maker.style.visibility = "hidden";
        let cont = document.querySelector(".container");
        elem.innerHTML = art.innerHTML;
        if (chBtn.innerText == "1") {
            let toElem = document.getElementById("firstArticle");
            elem.classList = "article right-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "firstArticle";
        } else if (chBtn.innerText == "2") {
            let toElem = document.getElementById("secondArticle");
            elem.classList = "article left-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "secondArticle";
        } else if (chBtn.innerText == "3") {
            let toElem = document.getElementById("thirdArticle");
            elem.classList = "article right-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "thirdArticle";
        } else if (chBtn.innerText == "4") {
            let toElem = document.getElementById("fourthArticle");
            elem.classList = "article left-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "fourthArticle";
        }

        const url = 'https://kapi.ddif.pro'; //http://185.250.149.77:3333/';

        let q1 = document.getElementById("firstArticle").innerHTML;
        let q2 = document.getElementById("secondArticle").innerHTML;
        let q3 = document.getElementById("thirdArticle").innerHTML;
        let q4 = document.getElementById("fourthArticle").innerHTML;
        let backInform = `<div class="article-maker-content" contenteditable="true" width="500px" height="200px" id="modalact"> ` + modalAct.innerHTML + `</div>`;

        const chunkSize = 5000;
        const textChunks1 = splitTextIntoChunks(q1, chunkSize);
        const textChunks2 = splitTextIntoChunks(q2, chunkSize);
        const textChunks3 = splitTextIntoChunks(q3, chunkSize);
        const textChunks4 = splitTextIntoChunks(q4, chunkSize);
        const textChunksB = splitTextIntoChunks(backInform, chunkSize);
        console.log(backInform, textChunksB)

        const formData1 = new FormData();
        textChunks1.forEach((chunk, index) => {
            formData1.append(chunk + index.toString(), chunk);
        });
        const formData2 = new FormData();
        textChunks2.forEach((chunk, index) => {
            formData2.append(chunk + index.toString(), chunk);
        });
        const formData3 = new FormData();
        textChunks3.forEach((chunk, index) => {
            formData3.append(chunk + index.toString(), chunk);
        });
        const formData4 = new FormData();
        textChunks4.forEach((chunk, index) => {
            formData4.append(chunk + index.toString(), chunk);
        });

        const formDataB = new FormData();
        textChunksB.forEach((chunk, index) => {
            formDataB.append(chunk + index.toString(), chunk)
        })


        let cnt = 0;
        let pg = document.querySelector(".progressbar");
        let pgb = document.querySelector(".progressbar-border");
        pg.style.width = "1%";
        pg.style.display = "block";
        pgb.style.display = "block";
        pg.style.opacity = "1";
        pgb.style.opacity = "1";
        let progress = setInterval(() => {
            if (cnt == 350) {
                pg.style.opacity = "0";
                pgb.style.opacity = "0";
                clearInterval(progress);
            }
            let progressBar = document.querySelector(".progressbar");
            progressBar.style.width = Math.min(100, Number(progressBar.style.width.slice(0, -1)) + 1) + "%";
            ++cnt;
        }, 85)
        let end = setTimeout(() => {
            pg.style.display = "none";
            pgb.style.display = "none";
        },
            9000)

        //Запрос для back-информации
        console.log();
        let nmr = document.getElementById("numPage2").innerText;
        let timerB = setTimeout(() => {
            fetch(url + `/back-inform?numer=${Number(nmr) - 1}`, {
                method: 'POST',
                body: formDataB,
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Back Текст успешно отправлен на сервер');
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                })
        }, 0);

        //1-ый запрос
        let timer1 = setTimeout(() => {
            fetch(url + '/upload', {
                method: 'POST',
                body: formData1,
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Текст успешно отправлен на сервер');
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                })
        }, 1500);

        //2-ый запрос
        let timer2 = setTimeout(() => {
            fetch(url + '/upload', {
                method: 'POST',
                body: formData2,
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Текст успешно отправлен на сервер');
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                });
        }, 3000)


        //3-ый запрос
        let timer3 = setTimeout(() => {
            fetch(url + '/upload', {
                method: 'POST',
                body: formData3,

            })
                .then(response => {
                    if (response.ok) {
                        console.log('Текст успешно отправлен на сервер');
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                });
        }, 4500)


        //4-ый запрос
        let timer4 = setTimeout(() => {
            fetch(url + '/upload' + '?name=article4', {
                method: 'POST',
                body: formData4,

            })
                .then(response => {
                    if (response.ok) {
                        console.log('Текст успешно отправлен на сервер');
                    } else {
                        console.error('Ошибка при отправке текста на сервер');
                    }
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                });
        }, 6000)


        elem.setAttribute("contenteditable", "false");

        let arts = document.querySelectorAll(".article");
        let a = false;
        for (let i = 0; i < arts.length; ++i) {
            arts[i].onclick = function () {
                let remModal = document.getElementById("modal-overflow");
                let xhr = new XMLHttpRequest();
                xhr.open('GET', `https://kapi.ddif.pro/back-inform?numer=${i.toString()}`, true);
                xhr.addEventListener("readystatechange", function () {
                    console.log(xhr.readyState, xhr.status);
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        let data = xhr.responseText;
                        console.log(i, data);
                        let htmlCode = data;
                        let prModal = makeModal(data);
                        console.log(prModal);
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
                        console.log("Modal", modal.innerHTML);
                        let link = document.getElementById('helpLink');
                        setTimeout(function () {
                            console.log(link);
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
    }

})

let btnImg = document.getElementById("addImg");
btnImg.addEventListener("click", function () {
    let input = document.getElementById("inpImg");
    input.click();
});

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
        img.src = fileReader.result;
    }
    fileReader.readAsDataURL(target.files[0]);
    art.append(img);
    console.log(event.target.files);
})

chBtn.addEventListener("click", function () {
    let vl = Number(chBtn.innerText);
    let chBtn2 = document.getElementById("numPage2");
    console.log(vl);
    if (vl == 1) {
        chBtn.innerText = 2;
        chBtn2.innerText = 2;
    }
    if (vl == 2) {
        chBtn.innerText = 3;
        chBtn2.innerText = 3;
    }
    if (vl == 3) {
        chBtn.innerText = 4;
        chBtn2.innerText = 4;
    }
    if (vl == 4) {
        chBtn.innerText = 1;
        chBtn2.innerText = 1;
    }
});

let secMenuOver = false;
let loginCardOver = false;
let secLogBtnOver = false;
let reviewBtnOver = false;

let secMenu = document.getElementById("sec-menu");
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

let name = document.getElementById("name");

name.addEventListener("mouseover", function () {
    reviewBtnOver = true;
});

name.addEventListener("mouseout", function () {
    reviewBtnOver = false;
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