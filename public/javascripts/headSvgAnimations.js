
/* HEAD-COLLAGE SVG ANIMATIONS (MINI VIDEOGAME ON THE HEAD YELLOW BRIDGE) */
	var main_chart_div = d3.select(".boxHeadGral").append("object").attr("class", "headBox"),
	svgHead;
	 
	var svgExt =  d3.xml("svg/svgHead.svg", function(error, documentFragment) {
        if (error) {
              console.log(error); 
              return;
        }
        var svgNode = documentFragment
                      .getElementsByTagName("svg")[0];
      
        main_chart_div.node().appendChild(svgNode);
        svgHead = main_chart_div.select("svg")
	}); /* END svgExtHead */




	queue()
	.defer(d3.xml, "../svg/svgHead.svg")
	.await(ready);
	function ready(error, xml) {

		/* Adding our svg file to HTML document */
		var importedNode = document.importNode(xml.documentElement, true);
		/* d3.select(".boxHeadGral").node().appendChild(importedNode); */
		var svgTrace = d3.select("svg");

		var pathTrace = svgTrace.select("path#headPathOne"),
		startPoint = pathStartPoint(pathTrace);

		var markerTrace = svgTrace.append("image")
		  .attr("xlink:href", "./images/uiUx.png")
		  .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")")
		  .attr("width", 148)
		  .attr("height", 124);








		var circleS = 
		    svgTrace.append("circle")
		      .attr("cx", 100)
		      .attr("cy", 350)
		      .attr("r", 30)
		      .attr("fill", "red")
		      .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")");
		var pathEl = path.node();
	    var pathLength = pathEl.getTotalLength();
	    var BBox = pathEl.getBBox();
	    var scale = pathLength/BBox.width;
	    var offsetLeft = document.getElementById("boxHeadGral").offsetLeft;

	   /* CIRCLE MOVEMENT - MOUSE MOVE - FOLLOW THE CURSOR */
	    svgTrace.on("mousemove", function() {
	      var x = d3.event.pageX - offsetLeft; 
	      var beginning = x, end = pathLength, target;
	      while (true) {
	        target = Math.floor((beginning + end) / 2);
	        pos = pathEl.getPointAtLength(target);
	        if ((target === end || target === beginning) && pos.x !== x) {
	            break;
	        }
	        if (pos.x > x)      end = target;
	        else if (pos.x < x) beginning = target;
	        else break; /* position found */
	      }
	      circleS
	        .attr("opacity", 1)
	        .attr("cx", x)
	        .attr("cy", pos.y);
	    });








		transition();

		/* Get path start point for placing marker */
		function pathStartPoint(pathTrace) {
		    var d = pathTrace.attr("d"),
		    dsplitted = d.split(" ");
		    return dsplitted[0].split(",");
		};

		function transition() {
		    markerTrace.transition()
		        .duration(17000)
		        .attrTween("transform", translateAlong(pathTrace.node()))
		        .each("end", transition); /* infinite loop */
		};

		function translateAlong(pathTrace) {
		    var l = pathTrace.getTotalLength();
		    var t0 = 0;
		    return function(i) {
		      return function(t) {
		        var p0 = pathTrace.getPointAtLength(t0 * l); /* previous point */
		        var p = pathTrace.getPointAtLength(t * l); /* current point */
		        var angle = Math.atan2(p.y - p0.y, p.x - p0.x) * 180 / Math.PI; /* Angle to rotate image */
		        t0 = t;
		        /* Shifting center to center of rocket */
		        var centerX = p.x - 24,
		        centerY = p.y - 12;
		        return "translate(" + centerX + "," + centerY + ")rotate(" + angle + " 24" + " 12" +")";
		      }
		    }
		}			
	} /*  END ready(error, xml) */







/*var checkbox = d3.selectAll("input[name=visibility]");

		  checkbox.on("change", function() {
		    if (this.checked) {
		      pathTrace.style("visibility", "visible");
		      this.value = "visible";
		    } else {
		      pathTrace.style("visibility", "hidden");
		      this.value = "hidden";
		    };
		  });*/


