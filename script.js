// NAV BAR
$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $(".sub-header").addClass('active');
        }else{
            $(".sub-header").removeClass('active');
        }
    });
});

//MODAL
const openBtn = document.getElementById('modalOpen');
const closeBtn = document.getElementById('modalClose');

const modal = document.getElementById('theModal');

openBtn.addEventListener('click', () =>{
  modal.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
})

// GOOGLE MAPS
