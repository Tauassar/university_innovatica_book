
function set_current_menu_item() {
    const path = `[href="${window.location.pathname}"]`;
    let get = document.querySelectorAll(path);
    console.log("The element fetched by href attribute is:", get);
    get[0].classList.add("is-active");
}
set_current_menu_item()
