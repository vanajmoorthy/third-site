var animation = bodymovin.loadAnimation({
    container: document.getElementById('spaceman'), // Required
    path: 'background-gifs/Spaceman/data.json', // Required
    renderer: 'canvas', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Space", // Name for future reference. Optional.
  })
