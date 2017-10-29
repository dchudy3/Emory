//Cookie Logic
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Admin Functionality Permissions
function displayAdminTab() {
	var user = getCookie("persona");
	if (user != 'Admin') {
		document.getElementById('adminTab').innerHTML = '';
	}
}

function hideAdmin() {
	var user = getCookie("persona");
	if (user != 'Admin') {
		var page = document.URL.split("/").pop();
		if(page == "dashboard.html") {
			window.location.href = "Error.html";
		}
	}

}


