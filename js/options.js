// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/* 	
//20-5
 ver como se faz o load aki

fazer log in....


fazer o backgroud
	ver se a cena dos events... a pagina carrega ve a pagina...o user logado e aplica o que for


	....blabla fazer fazer


 */

$(document).ready(function() {

	console.log("start options")
	
	var poped = localStorage["myPile"];	
	console.log("load:" + poped);

	if(poped === undefined || poped == ""){
		$('#color').val(defaultColor);
	}

	$('#color').val(poped);

	$('#save').bind('click', function() {		
		console.log("click save" + $('#color').val() );
	  	localStorage["myPile"] =  $('#color').val() ;
	});

	$('#del').bind('click', function() {		
		console.log("click del" );
	  	localStorage["myPile"] =  defaultColor;
	});


$('#get').bind('click', function() {	
	$.ajax({
		url: 'http://lagos-tech.com/fbMod/data.xml',
		type: 'GET',
		dataType: 'xml',
		data: '',
		success: function(xmlData) {
			//called when successful
			//console.log(xmlData.xml);
			console.log($(xmlData).find("user").text());
			console.log($(xmlData).find("color").text());

			xmlobj = xmlData;
			console.log("load from server" );
			$('#color').val($(xmlData).find("color").text());
			$('#user').val($(xmlData).find("user").text());

		},
		error: function(xhr, textStatus) {
			//called when there is an error
		}
	});

});


});

var defaultColor = "blue";
var xmlobj;


function loadOptions() {
	var favColor = localStorage["favColor"];

	// valid colors are red, blue, green and yellow
	if (favColor == undefined || (favColor != "red" && favColor != "blue" && favColor != "green" && favColor != "yellow")) {
		favColor = defaultColor;
	}

	var select = document.getElementById("color");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == favColor) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElementById("color");
	var color = select.children[select.selectedIndex].value;
	localStorage["favColor"] = color;
}

function eraseOptions() {
	localStorage.removeItem("favColor");
	location.reload();
}

function pushVal( val ){
	localStorage["myPile"] = val;
	console.log("Inserted!")
}

function popVal( ){
	console.log( localStorage["myPile"] );
	var poped = localStorage["myPile"]
	$('#push').val(poped)

}

function logIn( user, pass ){
	var favColor = localStorage["users"];	
}

function lonewuser( user, pass ){
	localStorage["user"] = user;
	localStorage["pass"] = pass;
}




 function openDatabase ( ) {
 	// body...

//open
 var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
});
}

 function writeDatabase ( ) {
 	// body...

//write
//var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
});
}

 function readDatabase ( ) {
 	// body...

//read
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
});
db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
   var len = results.rows.length, i;
   msg = "<p>Found rows: " + len + "</p>";
   document.querySelector('#status').innerHTML +=  msg;
   for (i = 0; i < len; i++){
      alert(results.rows.item(i).log );
   }
 }, null);
});

 }
 


/*
	var records = ["1","2","3","4","5"];
	var name = "aaaaa"

	var db = openDatabase(name, "1.0", "Save My Tabs database", 1024 * 1024);

	db.transaction(function(tx)
	{
		var onSuccess = function(tx, r)
		{
			// alert("Success! " + r.rowsAffected);
		};

		var onError = function(tx, e)
		{
			// alert('Something unexpected happened: ' + e);
		};

		tx.executeSql("CREATE TABLE save_my_tabs_options (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(250))", [], function()
		{
			tx.executeSql("INSERT INTO save_my_tabs_options (name) VALUES (?)", [name], function()
			{
				tx.executeSql("CREATE TABLE save_my_tabs_records (id INTEGER PRIMARY KEY AUTOINCREMENT, winindex TINYINT UNSIGNED, tabindex TINYINT UNSIGNED, url VARCHAR(250), title VARCHAR(250))", [], function()
				{
						tx.executeSql("INSERT INTO save_my_tabs_records (winindex, tabindex, url, title) VALUES (?, ?, ?, ?)", "aaaaaa" onSuccess, onError);
					}
				},
				onError);
			},
			onError);
		},
		onError);
	});
*/


/*
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  
	console.log("click")

	});

*/