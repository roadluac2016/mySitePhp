/* This is empty on purpose! Your code to build the resume will go here. */

var awesome = "Im human";
var newAwesome = awesome.replace('human','bird');
console.log(awesome);
console.log(newAwesome);






// Usamos "prepend" en lugar de "append" para que colcoque los elementos como primarios en el top de "#hader"
// En esta lógica el último se coloca al principio es decir, el primero de arriba a abajo será "rolNuevo" y el segundo será "nameNuevo": 
var nameNuevo = "JS Dynamic Content";
var formatearNombre = HTMLheaderName.replace('%data%', nameNuevo);
$('#header').prepend(formatearNombre);
var rolNuevo = "  Digital Strategist";
var formatearRol = HTMLheaderRole.replace('%data%', rolNuevo);
$('#header').prepend(formatearRol);


var auda = "audacity";
var udacityizer = function(auda) { 
    auda = 'U' + auda.slice(2);
    return auda;
};
function udacityizer2 () { 
    auda = 'U' + auda.slice(2);
    return auda;
};
$('#header').append(udacityizer(auda));
$('#header').prepend(udacityizer2(auda));



























//_____________________________________________________________________________________ JSON 


	var skillsOne = ["SEO","Front end Developemetnt","Story Telling"];
	var bio = {
		"Name" : "Rodrigo",
		"Role" : "Web Developer",
		"Contacts" : {
			"Mobile" : "044 55 4346 3478",
			"E-mail" : "roadluac@gmail.com",
			"GitHub" : "https://github.com/roadluac2016",
			"Facebook" : "https://www.facebook.com/profile.php?id=100017132474848",
			"Location" : "Mexico City"
		},
		"Welcome Message" : "Pnly Don't Stop",
		"Age" : 29,
		"skillsOne" : skillsOne,
		"skills" : ["SEO","Front end Developemetnt","Story Telling"],
		"bioPic" : "../images/fry.jpg"
	};






















//_____________________________________________________________________________________ IF ELSE (Skills - Resume)

	var switcher = 0;
	var listSkill = $("#header").append('<ul></ul>');
	var result = '{" skill1:":" SEO",  "skill2:":" Front end Developemetnt:",  "skill3:":" Story Telling"}' ;
	var listSkill2 = $("#header");

	if(switcher<1){
		$('#header').append(formatearSkillTitle);
		$('#skills-h3').css("color", "white");

		
		for (var i = 0; i < 3; i++) {
				listSkill.append('<li>something</li>');
		}

		$.each($.parseJSON(result), function(v) { // (k, v)
			listSkill2.append(v); // (k+v)
		});
	}
	else{};





	var SkillsTitleNuevo = "Skills Today:";
	var formatearSkillTitle = HTMLskillsStart.replace('Skills at a Glance:', SkillsTitleNuevo);

	if(bio.skills.length > 0){
		$('#header').append(formatearSkillTitle);
		$('#skills-h3').css("color", "white");

		var formattedSkill = HTMLskills.replace('%data%', bio.skillsOne[0]);
		var formattedSkill2 = HTMLskills.replace('%data%', bio.skills[1]);
		var formattedSkill3 = HTMLskills.replace('%data%', bio.skills[2]);

		$('#skills').append(formattedSkill, formattedSkill2, formattedSkill3 );
	};






















//_____________________________________________________________________________________ WHILE

	var cameron = {};
	cameron.trabajo = "Developer Dos";

	var creaUnCurso = function () {
		console.log("Crea un Curso");
	}

	var cursosWhile = 0;
	while (cameron.trabajo === "Developer Dos") {
		creaUnCurso();
		cursosWhile += 1
		if (cursosWhile === 10) {
			cameron.trabajo = "Developer ACTUALIZACIÓN";
		}
	}

	console.log (cameron.trabajo);

























//_____________________________________________________________________________________ FOR - FOR IN

	var dictionary = {
	    "data":[
	        {"id":"0","name":"ABC"},
	        {"id":"1","name":"DEF"}
	    ],
	    "images": [
	        {"id":"0","name":"PQR"},
	        {"id":"1","name":"xyz"}
	    ]
	};

	var dataVar = dictionary.data;
	for(var i in dataVar)
	{
	     var id = dataVar[i].id;
	     var name = dataVar[i].name;

	     console.log(id);
	     console.log(name);
	}







	var dictionary2 = {

		  "tennis": [
			  {
			    "Description": "Insert description here.",
			    "Price": 379.99,
			    "ProductName": "Babolat Play Pure Drive",
			  }, 
			  {
			    "Description": "Insert description here.",
			    "Price": 199.99,
			    "ProductName": "Yonex AI 98 Tennis Racquet",
			  }
		  ],
		  "basketball": [
			  {
			    "Description": "Insert description here.",
			    "Price": 64.99,
			    "ProductName": "Wilson NCAA Solution Official Game Basketball",
			  }, 
			  {
			    "Description": "Insert description here.",
			    "Price": 59.99,
			    "ProductName": "Spalding NBA NeverFlat Size 7 Composite Leather Basketball",
			  }
		  ]

	};

	for (var key in dictionary2) {
	    for (var i = 0; i < dictionary2[key].length; i++) {

	        var title = dictionary2[key][i].ProductName;
	        var desc = dictionary2[key][i].Description;
	        var price = dictionary2[key][i].Price;

	        var badge = document.createElement('div');
	        badge.className = 'badge';
	        badge.innerHTML =
	            '<h1 itemprop ="%metadDataLast%">' + title + '</h1>' +
	            '<h2>' + desc + '</h1>' +
	            '<div class="options-only-phone">' +
	            '<a class="service-provider-call" href="#" target="_blank"> Buy for $' + price + '</a>';

	        // Div the same ID's as the keys in the object for ease
	        document.getElementById(key).appendChild(badge);
	    }
	};

















