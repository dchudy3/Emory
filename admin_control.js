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

function setCookie() {
    document.cookie = "userID=Bob";
    document.cookie = "persona=Admin";
    document.cookie = "token=f32f093";
    alert(document.cookie);
}

//Admin Functionality Permissions
function displayAdminTab() {
	var user = getCookie("persona");
	if (user == 'Admin') {
		document.getElementById('adminTab').innerHTML = '<a href="./dashboard.html">Admin Dashboard</a>';
	} else {
		document.getElementById('adminTab').innerHTML = '';
	}
}

function displayAdmin() {
	var user = getCookie("persona");
	if (user == 'Admin') {
		document.getElementById('dashboardBody').innerHTML = '<nav class="navbar navbar-default"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="./index.html" style="width:50px;padding:0px"> <img alt="Brand" src="resources/Eshield_280.png" style="width:65%; margin-left: 9px; margin-top: 3px;"> </a> </div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav"> <li><a href="./calculator.html">Calculator <span class="sr-only">(current)</span></a></li><li><a href="./research.html">Research</a></li><li><a href="./profile.html">Profile</a></li><li><a href="./help.html">Help</a></li><li id="adminTab"></li></ul> <ul class="nav navbar-nav navbar-right"><li><a class="" href="mailto:tolsen@emory.edu?cc=minanaguib91@gmail.com&subject=Questions Regarding EcROP Cost Calculator">Contact Emory</a></li><form class="navbar-form navbar-left"> <div class="form-group"><a href="./login.html" class="btn btn-default">Logout</a> </div></form> </ul> </div></div></nav> <div class="container-fluid"> <div class="row"> <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar"> <ul class="nav nav-pills flex-column"> <li class="nav-item"> <a class="nav-link" href="#">Nav item</a> </li><li class="nav-item"> <a class="nav-link" href="#">Nav item again</a> </li><li class="nav-item"> <a class="nav-link" href="#">One more nav</a> </li><li class="nav-item"> <a class="nav-link" href="#">Another nav item</a> </li></ul> </nav> <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3"> <h1>Admin Dashboard</h1> <br/> <h2>Users</h2> <div class="table-responsive"> <table class="table table-striped"> <thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Email</th> <th>Status</th> </tr></thead> <tbody> <tr> <td>1,001</td><td>Lorem</td><td>ipsum</td><td>dolor</td><td>sit</td></tr><tr> <td>1,002</td><td>amet</td><td>consectetur</td><td>adipiscing</td><td>elit</td></tr><tr> <td>1,003</td><td>Integer</td><td>nec</td><td>odio</td><td>Praesent</td></tr><tr> <td>1,003</td><td>libero</td><td>Sed</td><td>cursus</td><td>ante</td></tr><tr> <td>1,004</td><td>dapibus</td><td>diam</td><td>Sed</td><td>nisi</td></tr><tr> <td>1,005</td><td>Nulla</td><td>quis</td><td>sem</td><td>at</td></tr><tr> <td>1,006</td><td>nibh</td><td>elementum</td><td>imperdiet</td><td>Duis</td></tr><tr> <td>1,007</td><td>sagittis</td><td>ipsum</td><td>Praesent</td><td>mauris</td></tr><tr> <td>1,008</td><td>Fusce</td><td>nec</td><td>tellus</td><td>sed</td></tr><tr> <td>1,009</td><td>augue</td><td>semper</td><td>porta</td><td>Mauris</td></tr><tr> <td>1,010</td><td>massa</td><td>Vestibulum</td><td>lacinia</td><td>arcu</td></tr><tr> <td>1,011</td><td>eget</td><td>nulla</td><td>Class</td><td>aptent</td></tr><tr> <td>1,012</td><td>taciti</td><td>sociosqu</td><td>ad</td><td>litora</td></tr><tr> <td>1,013</td><td>torquent</td><td>per</td><td>conubia</td><td>nostra</td></tr><tr> <td>1,014</td><td>per</td><td>inceptos</td><td>himenaeos</td><td>Curabitur</td></tr><tr> <td>1,015</td><td>sodales</td><td>ligula</td><td>in</td><td>libero</td></tr></tbody> </table> </div></main> </div></div>';
	} else {
		document.getElementById('dashboardBody').innerHTML = '<div class="container-fluid" style="background:#F7F7F7;min-height: 100%"> <div class="row" style="height: 80px;"></div><div class="row"> <div class="col-sm-3" style="padding-top: 15px;"> <div class="input-group"> </div></div><div class="col-sm-6" style="padding-top: 15px;background: white;border-radius: 15px;border-color:black"> <div class="row"> <div style="padding-left:30px;padding-right:30px"><h2><center>You do not have the permissions to view this page!</center><h2></div><div style="padding-left:30px;padding-right:30px"><h4><center>Error has been noted</center><h4></div><div style="padding-left:30px;padding-right:30px"><h4><center>If this is a critial failure please contact: help@blahblah.com </center><h4></div></div><div class="col-sm-3" style="padding-top: 15px;"> <div class="input-group"> </div></div></div><div class="row" style="height: 600px;"></div></div><div>';
	}
}

