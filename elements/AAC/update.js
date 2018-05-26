function(instance, properties, context) {
  
  // Set properties to instance variables
  instance.data.json_file = properties.json_file;
  instance.data.loop = properties.loop;
  instance.data.autoplay = properties.autoplay;
  instance.data.speed = properties.speed;
  if (properties.direction == "Forwards") {
    instance.data.direction = 1;
  } else {
    instance.data.direction = -1;
  }

}