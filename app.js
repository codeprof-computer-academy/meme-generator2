// target the text inputs
let top_text = document.querySelector('.top-text-value')
let bottom_text = document.querySelector('.bottom-text-value')

top_text.addEventListener('input', function(){
    //    target the h1 to display the top text
    document.querySelector('.top-text').innerHTML = top_text.value
})


bottom_text.addEventListener('input', function(){
    //    target the h1 to display the top text
    document.querySelector('.bottom-text').innerHTML = bottom_text.value
})


// target the generate meme btn
document.querySelector('.gen-btn').addEventListener('click', function(){
       let random_number = Math.floor(Math.random() * 99) + 1
       fetch('https://api.imgflip.com/get_memes').then(function(response){
               return response.json()
       }).then(function(result){
              let img_url = result.data.memes[random_number].url
              document.querySelector('.meme-image').src = img_url
       })
})


// target the div
document.querySelector('.meme-container').addEventListener('mouseenter', function(){
       document.querySelector('.download-btn').classList.add('show-download-btn')
})

// target the div
document.querySelector('.meme-container').addEventListener('mouseleave', function(){
       document.querySelector('.download-btn').classList.remove('show-download-btn')
})

