const fetch = require("node-fetch");


// document.getElementById('postBtn').addEventListener("click", function(){


  async function getImgurUrl(){
      const url = 'https://api.imgur.com/3/gallery/hot/?album_previews=true'; 
     return fetch(url, {
          headers:{
            "Authorization": "Client-ID 827de48246db548" 
          },
      })
  
      .then(async function (response) {
        let images = await response.json() 
        // images= images.data
        images.data= images.data.filter(image => image.link.includes("i.imgur.com"))
        // images = { data: images }

        console.log(images)
        return images
      })
    
     }
    module.exports = getImgurUrl
    