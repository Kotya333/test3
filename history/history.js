

const mainHeader = document.querySelector('.main-header');
let lastScrollTop = 0;
let indent;
function makeModal(htm){
    console.log("MAKING", htm);
    let inn = htm.toString();
    return "    <div class=\"uk-modal-dialog uk-border-rounded\" role=\"dialog\" aria-modal=\"true\">\n" +
        "\n" +
        "        <button class=\"uk-modal-close-default uk-border-rounded uk-icon uk-close\" type=\"button\" uk-close=\"\" style=\"color: var(--darkest-blue);\" aria-label=\"Close\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line></svg></button>\n" +
        "\n" +
        "        <div class=\"uk-modal-header uk-border-rounded\" style=\"color: var(--light-blue);\">\n" +
        "            <h2 class=\"uk-modal-title\" style=\"color: var(--blue);\">abc</h2>\n" +
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