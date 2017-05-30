$(document).ready(function (){


//grab post to append to array 
var userPost = $("#body").val().trim();
var form = $("postForm");



$(form).on("#submitPost", function(event){
	event.preventDefault();

	if (!userPost.val().trim() === null) {
		 return ;
	}

	var newPost = {
		body: userPost.val().trim()
	}
	
	// console.log(newPost);
	submitPost(newPost);

});

function submitPost(post){

	$.post("/post_generalpost", post, function(){
		console.log(post);

	});
}


}); //close document.ready function