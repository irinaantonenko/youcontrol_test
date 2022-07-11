/* show/close dropdown-content */
function showMenu() {
  document.getElementById("myDropdown").classList.toggle("dropdown__show");
  document.getElementById("close").classList.toggle("dropdown__show-close"); 
  document.body.classList.toggle("hidden");
}
function addActive() {
  document.getElementById("loudspeaker").classList.toggle("active");  
}
function closeMenu() {
  document.getElementById("myDropdown").classList.remove("dropdown__show");
  document.getElementById("loudspeaker").classList.remove("active");
  document.getElementById("close").classList.remove("dropdown__show-close");
  document.body.classList.toggle("hidden");  
}
function removeMessage() {
  document.getElementById("icon-block").classList.add("remove");
}

/*window.onscroll = function() {myFunction()};        
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;        
function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("header__fixed");
    } else {
    header.classList.remove("header__fixed");
    }
}*/

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs__content"); 
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabs__links");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* show/close the modal */
var modal = document.getElementById('myModal'); 
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() { 
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
