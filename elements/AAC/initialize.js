function(instance, context) {

  // Generate random element ID
  var randomId = Math.floor((Math.random() * 100000) + 1);
  var elementId = 'lottieElement_' + randomId;
  // Create Lottie Div
  instance.canvas.append("<div style='width:100%;height:100%' id='" + elementId + "'></div>");

  $(document).ready(function() {
    // Load Lottie
    if (instance.data.json_file) {
      var animation = bodymovin.loadAnimation({
        container: document.getElementById(elementId), // Required
        path: instance.data.json_file, // Required
        loop: instance.data.loop, // Optional
        autoplay: instance.data.autoplay, // Optional
        name: elementId
      });
      instance.data.animation = animation;
      animation.setSpeed(instance.data.speed);
      animation.setDirection(instance.data.direction);
    } else {
      console.log("Lottie: No JSON file supplied")
    }

  })

}