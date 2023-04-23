// prettier-ignore

function set_current_menu_item() {
    const splitted_path = window.location.pathname.split('/')
    const path = `[href="./${splitted_path[splitted_path.length-1]}"]`;
    let get = document.querySelectorAll(path);
    get[0].classList.add("is-active");
}
set_current_menu_item()

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});