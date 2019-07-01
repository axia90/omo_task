function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

$.extend({
  getUrlVars: function(){
    var parser = /^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/;
	var result = window.location.href.match(parser);
    var scheme    = result[1] || null;
    var authority = result[2] || null;
    var path      = result[3] || null;
    var query     = result[4] || null;
    var fragment  = result[5] || null;

    if (query === null || query === undefined) {
      return {};
    }
    var vars = [], hash;
    var hashes = query.split("&");
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

function secretSubmitButton () {

	$(document).bind("keydown.key", function(event) {
		if (event.which == 192) {
			$(document).unbind("keydown.key")
			$("#submitButton").show();
		}
	});
}


function updateTrialCounter() {	
	tc = document.getElementById("trialCounter");
	shownTrial = currTrial + 1
	shownTotal = numTrial + 1
	tc.innerText = "Trial " + shownTrial + " of " + shownTotal;
}

function hideVisibleInstructions() {
	visibleInstruct = $(".instructions:visible");
	$(visibleInstruct).hide();
}


function createInputElement(value,name){
    newElem = document.createElement("input");
    newElem.type = "hidden";
    newElem.value = value;
    newElem.name = name;
    newElem.id = name;
    document.getElementById("responses").appendChild(newElem);        
}

function getBrowserInfo () {

	createInputElement(navigator.userAgent,"browser");
	createInputElement(navigator.product,"engine");
	createInputElement(navigator.platform,"platform");
	createInputElement(navigator.language,"language");
	createInputElement(screen.width,"width");
	createInputElement(screen.height,"height");

}