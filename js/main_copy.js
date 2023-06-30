document.addEventListener("DOMContentLoaded",()=>{
  const copyWrap=document.querySelector("#copy_wrap")
  const copyHi=document.querySelector(".copy_hi");
  const copyTitle=document.querySelector(".copy_title");
  const copyArrow=document.querySelector(".copy_arrow")

  


  gsap.to(copyHi,{opacity:1,left:200,duration:1,scrollTrigger:{
    trigger:copyHi,
    // markers:true,
    start:'0% 50%',
    end:'bottom 0%',
    toggleActions:'play reverse play reverse',
  }})
  gsap.to(copyTitle,{opacity:1,right:100,duration:1,scrollTrigger:{
      trigger:copyTitle,
      // markers:true,
      start:'0% 50%',
      end:'bottom 0%',
      toggleActions:'play reverse play reverse',
      toggleClass:'activate'
    }})

  gsap.to(copyArrow,{scrollTrigger:{
    trigger:copyArrow,
    // markers:true,
    start:'-154% 50%',
    end:'top top',
    toggleClass:'arrow_activate'
    
    
  }})

})