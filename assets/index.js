const clickEvent = document.getElementById("clack");
const sidebar = document.querySelector(".bar");
clickEvent.onclick = function(){
    clickEvent.classList.toggle('active')
    sidebar.classList.toggle('active')
}