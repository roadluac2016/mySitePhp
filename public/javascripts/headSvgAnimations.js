
/* HEAD-COLLAGE SVG ANIMATIONS (MINI VIDEOGAME ON THE HEAD YELLOW BRIDGE) */
	var main_chart_div = d3.select(".boxHeadGral").append("object").attr("class", "headBox"),
	svgHead;
	 
	var svgExt =  d3.xml("svg/svgHead.svg", function(error, documentFragment) {
        if (error) {
              console.log(error); 
              return;
        }
        var svgNode = 
        	documentFragment.getElementsByTagName("svg")[0];
      
        main_chart_div.node().appendChild(svgNode);
        svgHead = main_chart_div.select("#Capa_1")
	}); /* END svgExtHead */




	queue()
	.defer(d3.xml, "../svg/svgHead.svg")
	.await(ready);
	function ready(error, xml) {


/* FORCE BUBBLES-CIRCLES */
    var widthHeadSv = 400;
    var heightHeadSv = 400;
    var svgHead = d3.select("#d3CanvasHead")
    	.append("svg")
	      .attr("width", widthHeadSv)
	      .attr("height", heightHeadSv)
	      .attr("class", "d3CanvasHeadClass");
    var dataHead = d3.range(100).map(function() { 
      return { radius: Math.random() * 14 + 4 }
    });
    var nodesHead = d3.range(1000).map(function(i) {
	  return { r: Math.random() * 14 + 4 };
	});
    var forceCollideHead = d3.forceCollide(function(d) { return d.radius; })
    	.strength(0.8);
    var sHead = 0.02;
    var forceXHead = d3.forceX(widthHeadSv/2).strength(sHead);
    var forceYHead = d3.forceY(heightHeadSv/2).strength(sHead);
    
    var forceHead = d3.forceSimulation(dataHead)
    	.force('x', forceXHead)
    	.force('y', forceYHead)
    	.force('center', d3.forceCenter(widthHeadSv/2, heightHeadSv/2))
    	.force('collide', forceCollideHead)
    	.on('tick', function() {
        svgHead.selectAll('.node')
        	.attr('cx', function(d) { return d.x; })
        	.attr('cy', function(d) { return d.y; })
      });
    
    svgHead.selectAll('.node')
    	.data(dataHead)
      .enter()
      .append('circle')
    	.classed('node', true)
    	.style('opacity', 0.5)
      	.attr('r', function(d) { return d.radius; });
    
    forceHead.nodes(dataHead)
    	.alpha(1)
    	.restart();
    
    d3.select(svgHead.node().parentNode).append('button').text('grow').attr("class","btnHead")
    	.on('click', switchRadius(100));
    
    d3.select(svgHead.node().parentNode).append('button').text('shrink').attr("class","btnHead")
    	.on('click', switchRadius(10));
    
   function switchRadius(newRadius) {
     return function() {
       d3.selectAll('.node')
          .filter(function(d,i) { return i === 5; })
        	.transition().duration(1000)
        	.tween('radius', function(d) {
          	var that = d3.select(this);
          	var i = d3.interpolate(d.radius, newRadius);
          	return function(t) {
              d.radius = i(t);
              that.attr('r', function(d) { return d.radius; });
              forceHead.nodes(dataHead)
            }
        	});
       forceHead.alpha(1).restart();
     }
   };












		var svgTrace = d3.select("#Capa_1");

		var pathTrace = svgTrace.select("path#headPathOne"),
		startPoint = pathStartPoint(pathTrace);

		var markerTrace = svgTrace.append("image")
		  .attr("xlink:href", "https://img00.deviantart.net/2d97/i/2010/266/4/1/planet_stock_png_by_ravenmaddartwork-d2zay40.png")
		  .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")")
		  .attr("width", 38)
		  .attr("height", 33);  

		var circleS = 
		    svgTrace.append("circle")
		      .attr("cx", 100)
		      .attr("cy", 350)
		      .attr("r", 30)
		      .attr("fill", "red")
		      .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")");

		var pathEl = path.node();
	    var pathLength = pathEl.getTotalLength();
	    var BBox = pathEl.getBBox();  // SIGUES IGUAL SIN ESTA LINEA
	    var scale = pathLength/BBox.width;  // SIGUES IGUAL SIN ESTA LINEA
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
	        };
	        if (pos.x > x)      end = target; // SIGUES IGUAL SIN ESTA LINEA
	        else if (pos.x < x) beginning = target; // SIGUES IGUAL SIN ESTA LINEA
	        else break; /* position found */
	      }
	      circleS
	        .attr("opacity", 1)
	        .attr("cx", x)
	        .attr("cy", pos.y);
	    });

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




$( "#anima" ).click(function() {
					/* Adding our svg file to HTML document 
		var importedNode = document.importNode(xml.documentElement, true);
		d3.select(".boxHeadGral").node().appendChild(importedNode); */

	   

		transition();



  
});


					
	} /*  END ready(error, xml) */






/*

var canvasHead =document.getElementById("d3CanvasHead"),
	contextHead = canvasHead.getContext("2d"),
	marginHead = { top: 0, right: 0, bottom: 0, left: 0 },
    widthHead = parseInt(d3.select("#d3CanvasHead").style('width'), 10),
    widthHead = widthHead - marginHead.left - marginHead.right,
    ratioHead = 0.82,
    heightHead = widthHead * ratioHead,
    tau = 2 * Math.PI;

	var nodesHead = d3.range(1000).map(function(i) {
	  return {
	    r: Math.random() * 14 + 4
	  };
	});

	var simulationHead = d3.forceSimulation(nodesHead)
	    .velocityDecay(0.2)
	    .force("x", d3.forceX().strength(0.0902))    
	    .force("y", d3.forceY().strength(0.0902))
	    .force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2))
	    .on("tick", tickedHead);

	function tickedHead() {
	  contextHead.clearRect(0, 0, widthHead, heightHead);
	  contextHead.save();
	  contextHead.translate(widthHead / 2, heightHead / 2);

	  contextHead.beginPath();
	  nodesHead.forEach(function(d) {
	    contextHead.moveTo(d.x + d.r, d.y);
	    contextHead.arc(d.x, d.y, d.r, 0, tau);
	  });
	  contextHead.fillStyle = "#ddd";
	  contextHead.fill();
	  contextHead.strokeStyle = "#333";
	  contextHead.stroke();

	  contextHead.restore();
	}

*/
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


