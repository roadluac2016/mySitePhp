

$(document).ready(function () {
// JSON Metadata Structure //

	var skillsTable = ["SEO","Front end Developemetnt","Story Telling"];
	var metadataContext = {"Context" : { "itemscope":"itemscope",  "itemtype":"http://schema.org/VisualArtwork" } };

	var dataX = {

		"User1":[
			{
				"Name" : "Usuario 1",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User2":[
			{
				"Name" : "Usuario 2",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User3":[
			{
				"Name" : "Usuario 3",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User4":[
			{
				"Name" : "Usuario 4",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User5":[
			{
				"Name" : "Usuario 5",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User6":[
			{
				"Name" : "Usuario 6",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User7":[
			{
				"Name" : "Usuario 7",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		],

		"User8":[
			{
				"Name" : "Usuario 8",
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
				"Skills" : skillsTable,
				"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
				"bioPicURL" : "../images/fry.jpg"	
			}
		]
	};




// ___________________________________________________________________Pints ATTRIBUTES from JSON technique
		var dataXx = [
			{
						"Name" : "Usuario 8",
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
						"skillsTable" : skillsTable,
						"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
						"bioPicURL" : "../images/fry.jpg"	
			},
			{
						"Aplication" : "Usuario 7",
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
						"skillsTable" : skillsTable,
						"skillsTable2" : ["SEO","Front end Developemetnt","Story Telling"],
						"bioPicURL" : "../images/fry.jpg"	
			}
		];

		//alert(Object.keys(dataXx[1])[3]); // prints "Welcome Message"
// ___________________________________________________________________Pints ATTRIBUTES from JSON technique





// Metadata variables //
	var itemscopeVar = 'itemscope';
	var itemtypeVar =' itemtype=';
	var itempropVar = 'itemprop=';

  // Table Structuring Variable //
	var tableTagVar = '<table %metadataL0% id="table" class="table">%Inside%</table>';
	var theadVar = '<thead %metadataL1% ></thead>';
	var tbodyVar = '<tbody %metadataL2% ></tbody>';
	var tdHeaderVar = '<th>%tdDataHeader%</th>';
	var tdColumnsVar = '<td>%tdDataColumns%</td>';

	
  // Print Table + Metadata //
	function myFunction() {
	    
		var formatTableTagVar = tableTagVar.replace('%metadataL0%', itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
		var formatTheadVar = theadVar.replace("%metadataL1%", itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
		var formattbodyVarVar = tbodyVar.replace("%metadataL2%", itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
		var formatTableTagVarIn = formatTableTagVar.replace("%Inside%", formatTheadVar );

		var tableInit = $('#tableBox').append(formatTableTagVarIn);
		var tbodyInit = $('#tableBox > table').append(formattbodyVarVar);

		var thOnHeaderVar = "";
		thOnHeaderVar += '<tr>';	
		thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [0] +"</th>";
		thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [1] +"</th>";
		thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [4] +"</th>";
		thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [5] +"</th>";
		thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [7] +"</th>";
		thOnHeaderVar += '</tr>';	
				$('thead').append(thOnHeaderVar);

		for (var key in dataX) {
			for (var i = 0; i < dataX[key].length; i++) {

			    var tdOnTbodyVar = "";
			    tdOnTbodyVar += '<tr>';	
				tdOnTbodyVar += "<td>"+ dataX[key][i].Name +"</td>";
				tdOnTbodyVar += "<td>"+ dataX[key][i].Role +"</td>";
				tdOnTbodyVar += "<td>"+ dataX[key][i].Age +"</td>";
				tdOnTbodyVar += "<td>"+ dataX[key][i].Skills[1] +"</td>";
				tdOnTbodyVar += "<td>"+ dataX[key][i].bioPicURL +"</td>";
				tdOnTbodyVar += '</tr>';
				$('tbody').append(tdOnTbodyVar);

				console.log( tdOnTbodyVar );
				console.log( "XXXXXXXXX" + " " + dataX[key][0].Contacts.Location );
				console.log( Object.keys(dataX[key][i]) [3] ); // Prints "Welcome Message"
			}
		};
/*
			$.each(dataX, function (key, value) {
				var trThead = $('#tableHeader');

				 $.each(value, function (index, titleObj) {
				    console.log( index + titleObj );
				 });
				trThead.prepend('<th>' + value[0].Name + '</th>');	// Header
				console.log( value + key);
			});
*/


		console.log( itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );

	}; myFunction();
});




















































































