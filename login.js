let countLock = 2;

let rC = 0;
let review = document.getElementById('name');
let loginCard = document.querySelector('.login-card');

review.addEventListener("click", () => {
    console.log(loginCard);
    loginCard.innerHTML = "<h2>Форма</h2>\n" +
        "    <div class=\"login-field\">\n" +
        "        <input  placeholder=\"Имя\" id=\"log\">\n" +
        "    </div>\n" +
        "    <div class=\"login-field\">\n" +
        "        <textarea placeholder=\"Отзыв\" id=\"pass\"></textarea>\n" +
        "    </div>\n" +
        "    <svg onclick=\"lock()\" class=\"lock-icon\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\">\n" +
        "        <path d=\"M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z\"></path>\n" +
        "    </svg>\n" +
        "    <span class=\"invalid\" id=\"inv\">Одно из полей пусто!</span>\n" +
        "    <button class=\"login-btn\" onclick=\"log('rev')\">Завершить</button>";

    if(rC % 2 == 0) {
        loginCard.style.opacity = '1';
        let timer1 = setTimeout(() => {
            loginCard.style.height = "60vh";
        }, 200)
        ++rC;
    }else{
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

function log(x){
    let bl = document.getElementById("create")
    console.log(x);
    if(bl.textContent == "Логин" && x != 'rev') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://kapi.ddif.pro/password', true);

        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    let erPas = document.getElementById("log").value;
                    console.log(loginCard);
                    console.log(data, erPas, '---');
                    if(data === erPas){
                        console.log("in")
                        bl.innerText = "Добавить";
                        loginCard.innerHTML = "<h2>Форма</h2>\n" +
                            "    <div class=\"login-field\">\n" +
                            "        <input  placeholder=\"Имя\" id=\"log\">\n" +
                            "    </div>\n" +
                            "    <div class=\"login-field\">\n" +
                            "        <textarea placeholder=\"Отзыв\" id=\"pass\"></textarea>\n" +
                            "    </div>\n" +
                            "    <svg onclick=\"lock()\" class=\"lock-icon\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\">\n" +
                            "        <path d=\"M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z\"></path>\n" +
                            "    </svg>\n" +
                            "    <span class=\"invalid\" id=\"inv\">Одно из полей пусто!</span>\n" +
                            "    <button class=\"login-btn\" onclick=\"log('rev')\">Завершить</button>";
                    }
                }
            }
        }
    }else {
        let err = document.getElementById("inv");
        let nodeName = document.getElementById('log');
        let nodePass = document.getElementById('pass');
        let name = nodeName.value;
        let pass = nodePass.value;
        nodeName.onfocus = function () {
            inv.style.visibility = "hidden";
        }

        nodePass.onfocus = function () {
            inv.style.visibility = "hidden";
        }
        console.log(name, pass);
        if ((name == '' || pass == '') && countLock % 2 == 0) {
            console.log('empty field');
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
        console.log(data);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
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

           if( loginCard.style.opacity != '0' && !((name == '' || pass == '') && countLock % 2 == 0)) {
                loginCard.style.opacity = '1';
                let timer1 = setTimeout(() => {
                    loginCard.style.height = "2vh";
                }, 200);
                let timer2 = setTimeout(() => {
                    loginCard.style.opacity = '0';
                }, 700)
            }
        ++rC;
        console.log("worked");
    }
}

function lock(){
    let btn = document.querySelector('.lock-icon');
    let nodePass = document.getElementById('log');
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
