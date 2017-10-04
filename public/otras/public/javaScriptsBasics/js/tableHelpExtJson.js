$(document).ready(function () {
	$.getJSON('./data/metadataTable.json', function (dataX) {
		console.log(dataX)
	
	
		var metadataContext = {"Context":{ "itemscope":"itemscope",  "itemtype":"http://schema.org/VisualArtwork" }};
		var skillsTable = ["SEO","Front end Developemetnt","Story Telling"];

	  // Metadata variables //
		var itemscopeVar = 'itemscope';
		var itemtypeVar =' itemtype=';
		var itempropVar = 'itemprop=';

	  // Table Structuring Variable //
		var tableTagVar = '<table %metadataL0% id="table" class="table">%Inside%</table>';
		var theadVar = '<thead %metadataL1% ></thead>';
		var tbodyVar = '<tbody %metadataL2% ></tbody>';
		var tdColumnsVar = '<td>%tdDataColumns%</td>';

	  // Print Table + Metadata //
		function myFunction() {
			var formatTableTagVar = tableTagVar.replace('%metadataL0%', itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
			var formatTheadVar = theadVar.replace("%metadataL1%", itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
			var formattbodyVarVar = tbodyVar.replace("%metadataL2%", itemscopeVar + itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
			var formatTableTagVarIn = formatTableTagVar.replace("%Inside%", formatTheadVar );

			var tableInit = $('#tableBox').append(formatTableTagVarIn);
			var tbodyInit = $('#tableBox > table').append(formattbodyVarVar);

			var Pruebapppp = Object.keys(dataX.User1[0]).length-4;
			for (var headIncrement = 0; headIncrement < Pruebapppp; headIncrement++) {
				var thOnHeaderVar = "<th>"+ Object.keys(dataX.User1[0]) [headIncrement] +"</th>"; // Print Name
				$('thead').append(thOnHeaderVar);
			};
			
			/*alert(Pruebapppp);

			var thOnHeaderVar = "";
			thOnHeaderVar += '<tr>';	
			thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [0] +"</th>"; // Print Name
			thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [1] +"</th>"; // Print Role
			thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [4] +"</th>"; // Print Age
			thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [5] +"</th>"; // Print Skills
			thOnHeaderVar += "<th>"+ Object.keys(dataX.User1[0]) [7] +"</th>"; // Print bioPicURL
			thOnHeaderVar += '</tr>';	
			$('thead').append(thOnHeaderVar);
*/
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
					console.log( Object.keys(dataX[key][i]) [3] ); // Prints "Welcome Message" //
				}
			};

			console.log( itemtypeVar + "'" + metadataContext.Context.itemtype + "'" );
		}; myFunction();


	}); // END Get Json //
}); // END Document ready //