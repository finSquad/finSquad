$(document).ready(function(){

var url = window.locations.search;


var postArr = [];




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

//grab post to append to array 
var userPost = $("#body");
var form = $("postForm");

$(form).on("#submitPost", function handleFormSubmit(event){
	event.preventDefault();

	if (!userPost.val().trim === null){
		return;
	}

	var newPost = {
		body: userPost.val().trim()
	}

	console.log(newPost);

	postArr.push(newPost);

});


//grab click listeners on friend posts 

var postContainer = $("#postContainer");


function getPosts(sidebar){
	$.get("/", function)

}



});

	//var progress = myAnimation.progress(); //gets current progress
//myAnimation.progress(0.25); //sets progress to one quarter finished