const fetch = require("node-fetch");

getImgurUrl()


async function getImgurUrl(){

    const url = 'https://api.imgur.com/3/gallery/search/viral/?q=cats'; 

    fetch(url, {
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
    .then(function (images) {
      console.log(images.data[0].link)
      
    })

    // for loop to print out all links 
}



  
