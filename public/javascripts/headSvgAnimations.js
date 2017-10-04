
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
  }); // END svgExtHead




queue()
.defer(d3.xml, "../svg/svgHead.svg")
.await(ready);
   function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  d3.select(".pathAnimation").node().appendChild(importedNode);

  var svgTrace = d3.select("svg");

  var pathTrace = svgTrace.select("path#headPathOne"),
  startPoint = pathStartPoint(pathTrace);

  var checkbox = d3.selectAll("input[name=visibility]");

  checkbox.on("change", function() {
    if (this.checked) {
      pathTrace.style("visibility", "visible");
      this.value = "visible";
    } else {
      pathTrace.style("visibility", "hidden");
      this.value = "hidden";
    };
  });

  var markerTrace = svgTrace.append("image")
  .attr("xlink:href", "rocket.png")
  .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")")
  .attr("width", 48)
  .attr("height", 24);

  transition();

  //Get path start point for placing marker
  function pathStartPoint(pathTrace) {
    var d = pathTrace.attr("d"),
    dsplitted = d.split(" ");
    return dsplitted[1].split(",");
  };

  function transition() {
    markerTrace.transition()
        .duration(17000)
        .attrTween("transform", translateAlong(pathTrace.node()))
        .each("end", transition);// infinite loop
  };
  
  function translateAlong(pathTrace) {
    var l = pathTrace.getTotalLength();
    var t0 = 0;
    return function(i) {
      return function(t) {
        var p0 = pathTrace.getPointAtLength(t0 * l);//previous point
        var p = pathTrace.getPointAtLength(t * l);////current point
        var angle = Math.atan2(p.y - p0.y, p.x - p0.x) * 180 / Math.PI;//angle for tangent
        t0 = t;
        //Shifting center to center of rocket
        var centerX = p.x - 24,
        centerY = p.y - 12;
        return "translate(" + centerX + "," + centerY + ")rotate(" + angle + " 24" + " 12" +")";
      }
    }
  }
}


