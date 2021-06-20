var screenDiV = document.getElementById('imagesDiv')
var images = screenDiV.getElementsByTagName('img')
var sources = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpeg","7.png","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg",]
for (var i = 0; i < images.length ; i++){
   images[i].src = sources[i]
}
function showModel(image){
  var model = document.getElementById('modal')
  model.classList.add('modal-open')
  model.classList.remove('modal-close')
  model.style.display = 'block'
  document.getElementById("modal-img").src = image.src;
}
function onClosedImagModal(){
    var model = document.getElementById('modal')
    model.classList.remove('modal-open')
    model.classList.add('modal-close')
    model.style.display = 'block'
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
  }


  var fontsize = 16
  function zoomin() {
    if(fontsize !== 56){  
    fontsize += 10
      document.getElementById('para').style.fontSize = fontsize + 'px'
    }
    }
    function zoomout() {
        if(fontsize !== 16){  
        fontsize -= 10
          document.getElementById('para').style.fontSize = fontsize + 'px'
        }
        }
