$(document).ready(function(){initialize(false);checkForResponsive()
function initialize(hasScrollBar){$('#fullpage').fullpage({anchors:['welcome','ymca-mission','impact-stories','volunteers','financials','financial-statement','development','donors','board','staff','locations'],scrollingSpeed:1000,autoScrolling:false,scrollBar:hasScrollBar,fitToSection:false,scrollOverflow:false,responsiveSlides:false,afterLoad:function(anchorLink,index){},onLeave:function(index,nextIndex,direction){var leavingSection=$(this);if(index==1){$('nav button').addClass('alt-color');}else{$('nav button').removeClass('alt-color');}},afterResponsive:function(isResponsive){}});}function checkForResponsive(){var pageWidth=$(window).width();if(pageWidth<=768){$.fn.fullpage.setResponsive(true);}else{$.fn.fullpage.setResponsive(false);}}$(window).resize(function(){checkForResponsive();})
$('#story-one').addClass('show');$('.story-one').addClass('active');$('#story-two, #story-three, #story-four, #story-five').hide();$('#impact-story-nav a').click(function(e){e.preventDefault();if(!$(this).hasClass('active')){var selected=$(this).attr('class');var showing=$('.show').attr('id');if(showing!=selected){$('.'+showing).removeClass('active');$('.'+selected).addClass('active');$('.show').removeClass('show').fadeOut('fast',function(){$('#'+selected).fadeIn('fast').addClass('show');});}else{return false;}}});$('nav button').click(function(e){if($(this).hasClass('is-active')){$('#nav-button, #main-nav').removeClass('is-active');}else{$('#nav-button, #main-nav').addClass('is-active');}});$('#main-nav a, .move-to').click(function(e){e.preventDefault();var link=$(this).attr('href');$.fn.fullpage.moveTo(link);$('#nav-button, #main-nav').removeClass('is-active');});$('#fullpage').click(function(e){$('#nav-button, #main-nav').removeClass('is-active');});$(window).scroll(function(e){$('#nav-button, #main-nav').removeClass('is-active');})});