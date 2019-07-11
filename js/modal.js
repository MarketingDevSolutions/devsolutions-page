//Plays video
var video = document.getElementById('video');
video.autoplay=true;
video.load(); 

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <button> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Gets different options
let options = document.getElementsByClassName("option-plan");
console.log(options)
for (let option of options){
	option.onclick = function(){
		const classes = option.classList
		if (classes.contains('selected-option')){
			classes.remove('selected-option')
		} else{
			classes.add('selected-option')
		}
	}
}

