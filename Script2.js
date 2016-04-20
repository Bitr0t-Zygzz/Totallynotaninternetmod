(function() {

	var ready = function () {
		addInternet();
	};

	var error = function () {
	};
	
	var addInternet = function () {
		console.log($('#internetMain').length);
		$('#internetMain').length || $('#barLeft').append($('<div id="internetMain">').load("mods/InternetMod/html/main.html"));
	};
	
var modPath = GDT.getRelativePath();
GDT.loadJs(['Script.js'], ready, error);

})();

