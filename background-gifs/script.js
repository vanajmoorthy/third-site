var animation = bodymovin.loadAnimation({
    container: document.getElementById('flag'), // Required
    path: 'background-gifs/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })
