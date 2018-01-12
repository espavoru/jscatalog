window.onload = function() {

  /**
   * Grid with fade animation
   * @returns {Obj}
   */
  function Grid() {
    "use strict";
    /* @type Obj */
    let items = document.querySelectorAll('.grid__item');

    /*
     * Fade out animation
     * @param {Obj} elem - elements to animate
     * @param {number} t - time animation
     * @param {function} f  - callback function
     */
    function fade(elem, t, f) {
      let fps = 50,
          time = t || 500,
          steps = time / fps,
          opacity = 1,
          d0 = opacity / steps,
          callback = f || function() {};

      let timer = setInterval(function() {
        opacity -= d0;
        elem.style.opacity = opacity;
        steps--;

        if (steps === 0) {
          clearInterval(timer);
          callback.call(elem);  // callback
        }
      }, (1000 / fps));
    }

    /**
     * Callback function
     */
    function callback() {
      this.style.display = 'none';
      console.log(this);
    }

    /**
     * Start animation on event
     */
    this.run = function() {
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
          fade(this, 1000, callback);
        });
      }

      return this;
    };
  }

  /* @type Obj */
  let grid = new Grid();
//  grid.run();

};