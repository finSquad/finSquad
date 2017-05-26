$(document).ready(function(){

//var postArr = [];


//updating post to push out older posts
tlPost = new TimelineLite();

	el = $(".mdl-card");

	tlPost.staggerTo(el, 1, {top:100}, 0.25); 

	$("#submitPost").click(function(){
		if (tlPost.progress() >1){
			tlPost.play();
		}
		else{
			tlPost.restart();
		}

	});

});

	//var progress = myAnimation.progress(); //gets current progress
//myAnimation.progress(0.25); //sets progress to one quarter finished