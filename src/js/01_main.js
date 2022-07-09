function showMenu() {
  document.getElementById("myDropdown").classList.toggle("dropdown__show");
  document.getElementById("close").classList.toggle("dropdown__show-close");
}

// Close the dropdown if the user clicks outside of it
/*window.addEventListener("click", function(event) {
  if (!event.target.matches('.--svg__noun_loudspeaker')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');        
      }
    }
  }
})*/

function addActive() {
  document.getElementById("loudspeaker").classList.toggle("active");   
}

function closeMenu() {
  document.getElementById("myDropdown").classList.remove("dropdown__show");
  document.getElementById("loudspeaker").classList.remove("active");
  document.getElementById("close").classList.remove("dropdown__show-close");
}

function removeMessage() {
  document.getElementById("icon-block").classList.add("remove");
}