$(document).ready(function (){


//grab post to append to array 
var userPost = $("#body");
var form = $("postForm");



$(form).on("#submitPost", function(event){
	event.preventDefault();

	if (!userPost.val().trim() === null) {
		 return ;
	}

	var newPost = {
		body: userPost.val().trim()
	}
	
	console.log(newPost);
	submitPost(newPost);

});

function submitPost(post){
	$.post("/api/"+userid+"/allfriendspost", post, function(){
		console.log(post);
	});
}

function movement (){
tlPost = new TimelineLite();

	el = $(".mdl-card");

	tlPost.staggerTo(el, 1, {top:200}, 0.25); 

	$("#submitPost").click(function(){
		if (tlPost.progress() >1){
			tlPost.play();
		}
		else{
			tlPost.restart();
		}

	});

}	
}); //close document.ready function