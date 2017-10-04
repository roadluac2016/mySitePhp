var marginPart = { top: 0, right: 0, bottom: 0, left: 0 },
                        widthPart = parseInt(d3.select("#collisionParticles").style('width'), 10),
                        widthPart = widthPart - marginPart.left - marginPart.right,
                        ratioPart = 0.82,
                        heightPart = widthPart * ratioPart;

                    var nodesPart = d3.range(200).map(function() { return {r: Math.random() * 2 + 4}; }),
                        root = nodesPart[0];
                    var colorPart = d3.scaleOrdinal().range(d3.schemeCategory20)

                    root.radius = 0;
                    root.fixed = true;

                    const forceXPart = d3.forceX(widthPart / 1.5).strength(0.15)
                    const forceYPart = d3.forceY(heightPart / 1.5).strength(0.15)

                    
                    var forcePart = d3.forceSimulation()
                    .velocityDecay(0.2)
                    .force("x", forceXPart)
                    .force("y", forceYPart)
                    .force("collide", d3.forceCollide().radius(function(d){
                      if(d === root){
                        return Math.random() * 50 + 10;
                      }
                      return d.r + 1;
                    }).iterations(50))
                    .nodes(nodesPart).on("tick", ticked);

                    var svgPart = d3.select("#collisionParticles").append("svg")
                    .attr("width", widthPart)
                    .attr("height", heightPart);

                    svgPart.selectAll("circle")
                        .data(nodesPart.slice(1))
                        .enter().append("circle")
                        .attr("r", function(d) { return d.r; })
                        .style("fill", function(d, i) { return colorPart(i % 3); });

                    function ticked(e) {
                        svgPart.selectAll("circle")
                            .attr("cx", function(d) { return d.x; })
                            .attr("cy", function(d) { return d.y; });
                    };

                    svgPart.on("mousemove", function() {
                        var p1 = d3.mouse(this);
                        root.fx = p1[0];
                        root.fy = p1[1];
                        forcePart.alphaTarget(0.03).restart();//reheat the simulation
                    });