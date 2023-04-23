
function set_current_menu_item() {
    const splitted_path = window.location.pathname.split('/')
    const path = `[href="./${splitted_path[splitted_path.length-1]}"]`;
    let get = document.querySelectorAll(path);
    get[0].classList.add("is-active");
}
set_current_menu_item()
