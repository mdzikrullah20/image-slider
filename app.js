let slideIndex = 0;
const slider =  document.querySelectorAll('.slid')
const totaleSlides = slider.length

function showSlide(){
    slider.forEach((slider,index)=>{
        if(index === slideIndex){
            slider.style.display = "block"
        }
        else{
            slider.style.display = "none"
        }
    })
}

function preSlid(){
   slideIndex--
   showSlide()
}

function nextSlid(){
  slideIndex++
  showSlide()
}
showSlide()