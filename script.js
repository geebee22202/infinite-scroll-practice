// Unsplash API
const count = 10;
const apiKey = "MbwKGKa6GCTmg1OBDWSRhWQYqwtRebtxgPA_l7DvZLE";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

//On load
getPhotos()