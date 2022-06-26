const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = {};

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

// Creat elements for links & photos; add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    })

    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })
    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img)
    imageContainer.appendChild(item)
  });
}

// Unsplash API
const count = 10;
const apiKey = "MbwKGKa6GCTmg1OBDWSRhWQYqwtRebtxgPA_l7DvZLE";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray)
    displayPhotos();
  } catch (error) {}
}

//On load
getPhotos();
