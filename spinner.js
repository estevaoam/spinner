var Spinner = Spinner || {
  spinners: {
    'default': ['-', '\\', '|', '/'],
    'squares': ['▖', '▘', '▝', '▗'],
    'circles': ['◐', '◓', '◑', '◒'],
    'blink': ['▊',' ']
  },

  loader: function(opts){
    this.el = opts.element;
    this.type = opts.type || 'default';
    this.timerate = opts.timerate || 200;

    if (typeof this.type == 'object') {
      this.spinner = this.type;
    } else {
      this.spinner = this.spinners[this.type];
    }

    this.el.innerHTML = '';

    var frame = 0;

    setInterval(function() {
      this.el.textContent = this.spinner[frame];

      frame++;

      if (frame === this.spinner.length) {
        frame = 0;
      }
    }.bind(this), timerate);
  }
}
