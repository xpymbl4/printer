var tttttStr = "";

function trace(obj) {
	var str = "";
	for (var i in obj) {
		str = str + i +  ": " + obj[i] + "\n\n";
	}
	alert(str);
}

function toAlert(str) {
	//alert(str);
}

function traceToConsoleObj(obj) {
	var str = "";
	for (var i in obj) {
		str = str + i +  ": " + obj[i] + "\n";
	}
	console.log(str);
}

function traceToConsoleStr(str) {
	console.log(str);
}

function traceToString(obj) {
	var str = "";
	for (var i in obj) {
		str = str + i +  ": " + obj[i] + "\n";
	}
	return str;
}

function toTempText(str) {
	if (document) {
		var ttttt = document.getElementById("ttt");
		if (ttttt) {
			tttttStr = tttttStr + str + "\n";
			ttttt.value = tttttStr;
		}
	}
}