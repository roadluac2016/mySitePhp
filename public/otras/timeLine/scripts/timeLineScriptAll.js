$(document).ready(function () {

				$("body div:nth-child(4)").addClass( "fourNd" );

			    function checkWidth() {
			        var windowSize = $(window).width();
			        // init controller
					var controller = new ScrollMagic.Controller();

					
		                $(window).triggerHandler("100"); 
		        


			function mScroll(){
						// build scenes
						 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight').offset().right;
								$("#animateFromRight").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger1 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft').offset().left;
								$("#animateFromLeft").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe1").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger2 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight3').offset().right;
								$("#animateFromRight3").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe3").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger3 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft4').offset().left;
								$("#animateFromLeft4").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe4").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger4 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight5').offset().right;
								$("#animateFromRight5").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe5").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger5 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger6", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft6').offset().left;
								$("#animateFromLeft6").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe6").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger6 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger7", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight7').offset().right;
								$("#animateFromRight7").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe7").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger7 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft8').offset().left;
								$("#animateFromLeft8").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe8").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger8 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger9", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight9').offset().right;
								$("#animateFromRight9").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe9").addClass("bounceIn");
						      })
						      //.addIndicators({name: " Trigger9 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger10", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft10').offset().left;
								$("#animateFromLeft10").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe10").addClass("bounceIn");
						      })
						      //.addIndicators({name: " trigger10 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger11", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight11').offset().right;
								$("#animateFromRight11").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe11").addClass("bounceIn");
						      })
						      //.addIndicators({name: " trigger11 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger12", duration: 250})
						      .on("enter", function () {        
						        var left = $('#animateFromLeft12').offset().left;
								$("#animateFromLeft12").animate({
													    left: '0'
													  }, 'slow');
								$(".caaaremCircLe12").addClass("bounceIn");
						      })
						      //.addIndicators({name: " trigger12 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#trigger13", duration: 250})
						      .on("enter", function () {        
						        var right = $('#animateFromRight13').offset().right;
								$("#animateFromRight13").animate({
													    right: '0'
													  }, 'slow');
								$(".caaaremCircLe13").addClass("bounceIn");
						      })
						      //.addIndicators({name: " trigger13 (duration: 250px)"}) // add indicators (requires plugin)
							  .addTo(controller);

					  } // END mScroll()



			        if (windowSize <= 768) {
			            console.log("Nada por Ahora");
			            $(".animated").removeClass("bounceIn");
			        }

			        else { 
					  mScroll();
			        } // END else
			    } // END  checkWidth()


			    // Execute on load
				checkWidth();
			    // Bind event listener
			    $(window).resize(checkWidth);


	        }); // END documentReady