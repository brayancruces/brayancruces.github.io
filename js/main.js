
/**
 * main.js
 * brayancru.com
 * 2015
 */

'use strict';

$( function () {
    

    var $body = $( "body" )
    .addClass( "loaded" );

    // Navegacion

    $( "#menu-button" ).click( function () {
        $body.toggleClass( "transition" )
    } );

    
    var blocksShown = 0;
    var scrollStep = 10;
    var scrollBlockSize = 10;
    var scrollClass = '.project-thumbnail';
    var $scrollItems = $( scrollClass ).each( function () {
        $( this ).data( 'top', this.offsetTop );
    } );

    $( window ).scroll( function () {
        var top = document.body.scrollTop;
        $scrollItems.each( function () {

                if( $( this ).offset().top + scrollStep < top ) {
                    $( this ).addClass( 'scroll-after' )
                } else {
                    $( this ).removeClass( 'scroll-after' )
                }
            }
        );

        var blocks = Math.floor( top / scrollBlockSize );
        if( blocks >= 0 ) {

            if( blocksShown < blocks ) {
                for( var i = blocksShown; i < blocks; i++ ) {
                    $body.addClass( 'scroll-' + scrollBlockSize * (i + 1) );
                }
            }

            if( blocksShown > blocks ) {
                for( var x = blocks; x < blocksShown; x++ ) {
                    $body.removeClass( 'scroll-' + scrollBlockSize * (x + 1) );
                }
            }

            blocksShown = blocks;
        }

    } );


} );

// carga 

$(window).load(function() {
setTimeout(function() { $("#preloader").fadeOut("slow", function() { $("body").addClass("loaded"); });  }, 0);
})


// Particulas

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#4F6F8E'
  });
  $('#fadein').css({
    'margin-top': -($('#fadein').height()+95)
  });
});