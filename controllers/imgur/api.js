const fetch = require("node-fetch");


// document.getElementById('postBtn').addEventListener("click", function(){


  async function getImgurUrl(){
      const url = 'https://api.imgur.com/3/gallery/search/viral/?q=cats&q_type'; 
     return fetch(url, {
          headers:{
            "Authorization": "Client-ID 827de48246db548" 
          },
          showViral:'true',
          showMature:'false',
          albumPreviews: 'false',
          // q_type: "true"
      })
  
      .then(function (response) {
        return response.json()
      })
      .then(function ({data: images}) {
        console.log(images)
        // return images
        // goal: get one image from the api at a time based on number of clicks on the button. 

        // display 5 images from api 
        // click on a image to select --> post it 
        // once the image is posted it can be updated with text/a comment it gets posted to profile page 


        // for (let i= 0; i < 6; i++) {
        //   const allImages = images[i].link;   
        //   console.log(allImages)
        //   return images 
        // }
      })  
     }
 

    module.exports = getImgurUrl
    