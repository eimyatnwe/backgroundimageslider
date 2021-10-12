// UI
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

// console.log(slides[2]);

let activeslice = 0;

function setbgbody(){
	body.style.backgroundImage = slides[activeslice].style.backgroundImage;
}

// setbgbody();

// remove active
function setactiveslide(){

	slides.forEach(slide => slide.classList.remove("active"));

	slides[activeslice].classList.add("active");
}




rightbtn.addEventListener("click",()=>{
	// console.log("i am right");
	activeslice++;

	if(activeslice > slides.length-1){
		activeslice = 0;
	}

	setbgbody();
	setactiveslide();
});

leftbtn.addEventListener("click",()=>{
	// console.log("i am left");

	activeslice--;

	if(activeslice < 0){
		activeslice = slides.length-1;
	}

	setbgbody();
	setactiveslide();
});