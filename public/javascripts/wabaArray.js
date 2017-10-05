$(document).ready(function () {
            $("#Capa_1 > g > g > path").attr("stroke" , "#000000");


        // Images for Array:
            var imagesUnoWaba = new Image();
            imagesUnoWaba.src = '././images/arrayWaba/Comp 1_00000.png';
            var imagesDosWaba = new Image();
            imagesDosWaba.src = '././images/arrayWaba/Comp 1_00001.png';
            var imagesTresWaba = new Image();
            imagesTresWaba.src = '././images/arrayWaba/Comp 1_00002.png';
            var imageCuatroWaba = new Image();
            imageCuatroWaba.src = '././images/arrayWaba/Comp 1_00003.png'; //imageCuatroWaba.src = '././images/retrato/retra' + xAumentaLoop + '.png';
            var imageCincoWaba = new Image();
            imageCincoWaba.src = '././images/arrayWaba/Comp 1_00004.png';
            var imageSeisWaba = new Image();
            imageSeisWaba.src = '././images/arrayWaba/Comp 1_00005.png';
            var imageSieteWaba = new Image();
            imageSieteWaba.src = '././images/arrayWaba/Comp 1_00006.png';
            var imageOchoWaba = new Image();
            imageOchoWaba.src = '././images/arrayWaba/Comp 1_00007.png';
            var imageNueveWaba = new Image();
            imageNueveWaba.src = '././images/arrayWaba/Comp 1_00008.png';
            var imageDiezWaba = new Image();
            imageDiezWaba.src = '././images/arrayWaba/Comp 1_00009.png';
            var imageOnceWaba = new Image();
            imageOnceWaba.src = '././images/arrayWaba/Comp 1_00010.png';
            var imageDoceWaba = new Image();
            imageDoceWaba.src = '././images/arrayWaba/Comp 1_00011.png';
            var imageTreceWaba = new Image();
            imageTreceWaba.src = '././images/arrayWaba/Comp 1_00012.png';
            var imageCatorceWaba = new Image();
            imageCatorceWaba.src = '././images/arrayWaba/Comp 1_00013.png';
            var imageQuinceWaba = new Image();
            imageQuinceWaba.src = '././images/arrayWaba/Comp 1_00014.png';
            var imageDiezSeisWaba = new Image();
            imageDiezSeisWaba.src = '././images/arrayWaba/Comp 1_00015.png';
            var image_17_Waba = new Image();
            image_17_Waba.src = '././images/arrayWaba/Comp 1_00016.png';
            var image_18_Waba = new Image();
            image_18_Waba.src = '././images/arrayWaba/Comp 1_00017.png';
            var image_19_Waba = new Image();
            image_19_Waba.src = '././images/arrayWaba/Comp 1_00018.png';
            var image_20_Waba = new Image();
            image_20_Waba.src = '././images/arrayWaba/Comp 1_00019.png';
            var image_21_Waba = new Image();
            image_21_Waba.src = '././images/arrayWaba/Comp 1_00020.png';
            var image_22_Waba = new Image();
            image_22_Waba.src = '././images/arrayWaba/Comp 1_00021.png';
            var image_23_Waba = new Image();
            image_23_Waba.src = '././images/arrayWaba/Comp 1_00022.png';
            var image_24_Waba = new Image();
            image_24_Waba.src = '././images/arrayWaba/Comp 1_00023.png';



        // Array of images:
            var arrayOfImagesWaba = [];
                arrayOfImagesWaba.push(    
                        imagesUnoWaba,
                        imagesDosWaba,
                        imagesTresWaba,
                        imageCuatroWaba,
                        imageCincoWaba,
                        imageSeisWaba,
                        imageSieteWaba,
                        imageOchoWaba,
                        imageNueveWaba,
                        imageDiezWaba,
                        imageOnceWaba,
                        imageDoceWaba,
                        imageTreceWaba,
                        imageCatorceWaba,
                        imageQuinceWaba,
                        imageDiezSeisWaba,
                        image_17_Waba,
                        image_18_Waba,
                        image_19_Waba,
                        image_20_Waba,
                        image_21_Waba,
                        image_22_Waba,
                        image_23_Waba,
                        image_24_Waba
                 );


        /* $div1 is a container within which we'll place our animation */
        var $div1Waba = $('.wabaBox');
        var $titleHomeWaba = $('.ipad');

        /* create a new SpritePlayer() to handle our animation */
        /* var player = new SpritePlayer(counterBoxxx, arrSprite1, 100); */
        var player2Waba = new SpritePlayerXX($div1Waba, arrayOfImagesWaba, 60);

        /* set the hover in/out event handler of our container. */
        $titleHomeWaba.hover(player2Waba.forward, player2Waba.reverse);
        $div1Waba.hover(player2Waba.forward, player2Waba.reverse);

        function SpritePlayerXX($container, arrSprite, speed) {
            var int, cur = 0, min = 0, max = arrSprite.length;

            /*give $container the first frame in our sprite (arrSprite)*/
            $container.html(getFrame(min));

            return {
                forward: function () { playSprite(true); },
                reverse: function () { playSprite(false); }
            }; 

            function getFrame(i) { return arrSprite[i]; }
            function playSprite(forward) {
                var limit = forward ? max : min;
                
                clearInterval(int); 
                int = setInterval(function() {
                    $container.html(getFrame(forward ? ++cur : --cur));
                    cur === limit && clearInterval(int); }, speed);
            }
        };
        function makeArrayWaba(obj) {
            return Array.prototype.slice.call(obj);
        } 











      var divWaba = document.getElementById('ipadBox');
      var containerWaba = document.getElementById('secWaba');
      var me = function(event) {
          var x = event.clientX,
              y = event.clientY,
              w = divWaba.offsetWidth,
              m = 380,
              square = divWaba.getBoundingClientRect(),
              pxToBox = (x - w),
              left =  m * pxToBox/this.offsetWidth;
          console.log(left);
          divWaba.style.left = left + 'px';
      };
      containerWaba.addEventListener('mousemove', me, false);







      /*
      var $win = $(window),
          ww = 0,hw = 0,
          rgb = [],
          getWidth = function() {
              ww = $win.width();
              hw = $win.height();
          };
      $win.resize(getWidth).mousemove(function(e) {
          rgb = [
              Math.round(e.pageX/ww * 255),
              Math.round(e.pageY/hw * 255),
              10
          ];
          $(".animateInside").css('background','rgb('+rgb.join(',')+')');
      }).resize(); */



      var colours = [
        ['#FC354C', '#6E48AA'],
        ['#FDFC47', '#30aae8']
      ];

      function hex2rgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')';
      }

      function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      }

      function rgbArray(rgb) {
        return rgb.split('(')[1].split(')')[0].split(',');
      }

      /* finds transition colour based on mouse position */
      function transitionColour(from, to, width, x) {

        var m = x / width;
        var r, g, b;

        r = Math.ceil(from[0] * m + to[0] * (1 - m));
        g = Math.ceil(from[1] * m + to[1] * (1 - m));
        b = Math.ceil(from[2] * m + to[2] * (1 - m));

        return rgb2hex('rgb(' + r + ', ' + g + ', ' + b + ')');

      }

      $(document).on("mousemove", function(e) {

        var xPos = e.pageX,
          width = window.innerWidth,

          //
          // convert hex to rgb
          topLeft = hex2rgb(colours[0][0]),
          topRight = hex2rgb(colours[1][0]),

          bottomLeft = hex2rgb(colours[0][1]),
          bottomRight = hex2rgb(colours[1][1]);

        //
        // get transition colour
        var bottomTransition = transitionColour(rgbArray(bottomRight), rgbArray(bottomLeft), width, xPos);
        var topTransition = transitionColour(rgbArray(topRight), rgbArray(topLeft), width, xPos);

        $('.animateInside').css({
          'background': 'linear-gradient(' + topTransition + ', ' + bottomTransition + ')'
        });

      });


      $( "#ipadBox" ).hover(
            function() {
              $( ".hand" )
              .animate({ bottom: "-50px" }, )
              .animate({ left: "100px" }, )
              .animate({ top: "460px" }, 690);
            }, 
            function() {
              $( ".hand" ) 
              .animate({ top: "230px" },).animate({ bottom: "710px" });
            }   
      );

      var mFirstTxt = "<div class='thinkIpad'>THINK WITH THE BODY AS A BRAIN ALL-IN ONE</div>";

       $( ".flex-container > .col-md-6  > .flex-item:nth-child(2)" ).hover( function() {
          $(".animateInside").append(mFirstTxt);
        });
      
$(".animateInside").append(mFirstTxt);
}); // END Document READY















