$(document).ready(function() {

    //var url = window.locations.search;


    //logic for movement of post to push out older posts

    //use this once db set up to push posts into array
    //
    //var textFields = [tf1, tf2, tf3, tf4, tf5];
    //myTimeline.staggerTo(textFields, 1, {top:"+=150", ease:CubicIn.ease}, 0.2);

    // tlPost = new TimelineLite();
    // 	el = $(".mdl-card");
    // 	tlPost.staggerTo(el, 1, {top:200}, 0.25); 

    // 	$("#submitPost").click(function(){
    // 		if (tlPost.progress() >1){
    // 			tlPost.play();
    // 		}
    // 		else{
    // 			tlPost.restart();
    // 		}

    // 	});



    //sidebar container holding all of the posts
    var postContainer = $("#postContainer");

    //empty variables
    var postArr;
    var posts;


    //var postArr = [];
    //postArr.push(newPost);




    //grab posts from database
    function getPosts(sidebar) {
        $.get("/", function(data) {
            // console.log(data);
            initializePosts();
        });

    }
    //getting the inital list of posts
    getPosts();

    // InitializePosts handles appending all of our constructed post HTML inside
    // postContainer
    function initializePosts() {
        postContainer.empty();
        var postArr = [];
        for (var i = 0; i < posts.length; i++) {
            postArr.push(newPostCreated(posts[i]));
        }
        postContainer.append(postArr);
        // console.log(posts);
    }

    /* testing
    function submit (){
    	$("#submitPost").click(function(){
    		var postBody = $("#body").val().trim();
    		newPostCreated(postBody);
    		console.log(newPostCreated);
    	});
    } 
    */

    function newPostCreated(post) {
        var newPostPanel = $("<div>");
        newPostPanel.addClass("mdl-card mdl-cell mdl-cell--12-col mdl-cell--2-col-tablet mdl-shadow--2dp");
        var newPostPanelHeading = $("<div>");
        newPostPanelHeading.addClass("mdl-card__title");
        var newPostPanelTitle = $("<div>");
        newPostPanelTitle.addClass("mdl-card__title-text");
        var titleH2 = $("<h2>");
        titleH2.addClass("mdl-card__title-text");
        titleH2.text(Username, Timestamp);
        var newPostPanelBody = $("<div>");
        newPostPanelBody.addClass("mdl-card__supporting-text");
        var newPostBody = $("<p>");
        newPostBody.text(post);
        var newPostActionBorder = $("<div>");
        newPostActionBorder.addClass("mdl-card__actions mdl-card--border");
        var newPostActionBtn = $("<a>");
        newPostActionBtn.addClass("mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        newPostActionBtn.text("Visit Profile");
        var newPostPanelSpacer = $("<div>");
        newPostPanelSpacer.addClass("mdl-layout-spacer");
        var newPostFaviconBtn = $("<button>");
        newPostFaviconBtn.addClass("mdl-button mdl-button--icon mdl-button--colored");
        var postFavicon = $("<i>");
        postFavicon.addClass("material-icons");
        postFavicon.text("favorite");
        var newPostShareBtn = $("<button>");
        newPostShareBtn.addClass("mdl-button mdl-button--icon mdl-button--colored");
        var shareFavicon = $("<i>");
        shareFavicon.addClass("material-icons");
        shareFavicon.text("share");
        newPostPanelTitle.append(titleH2);
        newPostPanelHeading.append(newPostPanelTitle);
        newPostPanelBody.append(newPostBody);
        newPostPanel.append(newPostPanelHeading);
        newPostPanel.append(newPostPanelBody);
        newPostPanel.data(posts);
        return newPostPanel;
    }



});
