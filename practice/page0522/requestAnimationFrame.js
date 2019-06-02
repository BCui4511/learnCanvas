if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = ( function() {
      return window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback, element) {
            window.setTimeout( callback, 1000 / 60 );
          };
    } )();
  }

  this.startTime = window.performance.now ?
                 (performance.now() + performance.timing.navigationStart) :
                 Date.now();