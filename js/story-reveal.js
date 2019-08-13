$(function() {
    var pageURL = window.location.href;
    var pathArray = pageURL.split("/");
    console.log(pageURL);
    if (pathArray[3] == "#impact-stories" && pathArray[4] != null) {
        var storyReveal = pathArray[4];

        $("#impact-story-nav a").removeClass("active")

        $(".story").removeClass("show").css("display", "none");

        $("#" + storyReveal).addClass("active")

        $(".story." + storyReveal).addClass("show")
    }
});
