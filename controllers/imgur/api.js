const fetch = require("node-fetch");


// document.getElementById('postBtn').addEventListener("click", function(){


  async function getImgurUrl(){
  
      const url = 'https://api.imgur.com/3/gallery/search/viral/?q=cats'; 
  
     return fetch(url, {
          headers:{
            "Authorization": "Client-ID 827de48246db548" 
          },
          showViral:'true',
          showMature:'false',
          albumPreviews: 'false',
     
      })
  
      .then(function (response) {
        return response.json()
      })
      .then(function ({data: images}) {
        
        return images
  
      //  for (let i= 0; i < images.length; i++) {
      //      const allImages = images[i].link;   
      //      console.log(allImages)
      //  }
      })  
     }
 

    module.exports = 
      getImgurUrl
    