spinner
=======

A simple ASCII loader indicator in JS.
Check [out the demo](http://estevaoam.github.io/spinner).

## How do I use this mofo?!

Supposing you have a `#loader` element in your page:

    Spinner.loader({
      element: document.getElementById('loader'),
      type: 'blink'
    });

That's it!

## Using custom animation

You can use custom animation by passing the frames as array to type instead:

    Spinner.loader({
      element: document.getElementById('loader'),
      type: ['a', 'b', 'c']
    });

## Custom time rate

You can define as fast the animation will occur if you want to.

    Spinner.loader({
      element: document.getElementById('loader'),
      type: 'circles',
      timerate: 500 // milliseconds
    });

