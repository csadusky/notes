$(document).ready(function() {
	$("#wrapper").toggleClass("toggled");

	(function checkEdits(){
		// if(localStorage.userEdits!=null)
		document.getElementById("edit").innerHTML = localStorage.userEdits;
		// document.getElementsByClassName("highlight").innerHTML= localStorage.userEdits;
	}());

	$("#saveEdits").click(function(){
		var editElem = document.getElementById("edit");
		var userVersion = editElem.innerHTML;
		localStorage.userEdits = userVersion;
		document.getElementById("update").innerHTML="edits saved!";
	});

 	$("#menuToggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    jQuery(function ($) {
        $('#content').annotator();
    });


    jQuery('#content').annotator().annotator("addPlugin", "Offline", {
      online: function (plugin) {
        // Do something when the browser is online.
      },
      offline: function (plugin) {
        // Do something when the browser goes offline.
      }
    });
})