const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_previous');
const next_btn=document.querySelector('.control_next');
let n=0;
function changeSlide(){
   for(let i=0;i<imgs.length;i++)
   {
      imgs[i].style.display='none';
   }
   imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
   if(n>0){
      n--;
   }
   else{
      n=imgs.length-1;
   }
   changeSlide();
})
next_btn.addEventListener('click',(e)=>{
   if(n<imgs.length-1){
      n++;
   }
   else{
      n=0;
   }
   changeSlide();
})
const scrollContainer=document.querySelectorAll('.Products');
for(const item of scrollContainer){
   item.addEventListener('wheel',(evt)=>{
      evt.preventDefault();
      item.scrollLeft+=evt.deltaY;
   })
}
// Drag-to-scroll for product sliders
document.querySelectorAll('.Products, .products').forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });
});
