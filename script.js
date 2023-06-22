//your JS code here. If required.
 function updateSizeInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sizeHeading = document.getElementById('sizeHeading');
      sizeHeading.textContent = `Width: ${width}, Height: ${height}`;
    }

    // Update the size information when the window is resized
    window.addEventListener('resize', updateSizeInfo);

    // Call the updateSizeInfo() function initially to display the initial size
    updateSizeInfo();