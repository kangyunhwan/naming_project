document.addEventListener('DOMContentLoaded',()=>{

  const mainFooterWrap=document.querySelector('#main_footer_wrap')
  const mainFooterInnerWrap1=document.querySelector("#main_footer_inner_wrap1");
  const mainFooterInnerWrap2=document.querySelector('#main_footer_inner_wrap2');
  const mainFooterSmile=document.querySelector('#main_footer_smile');
  
  gsap.set(mainFooterSmile,{top:170,opacity:0})//283

  // gsap.to(mainFooterSmile,{top:283,opacity:1,scrollTrigger:{
  //   trigger:mainFooterInnerWrap1,
  //   markers:true,
  //   start:'0% 0%',
  //   end:'100% 0%',
    
    
  // },onComplete:()=>{
  //   mainFooterInnerWrap1.classList.add('activate')
  // }})
  
  
  gsap.to(mainFooterInnerWrap1,{scrollTrigger:{
    trigger:mainFooterInnerWrap1,
    markers:true,
    start:'0% 0%',
    end:'100% 0%',
    toggleClass:'activate'
  },onComplete:()=>{
    gsap.to(mainFooterSmile,{top:293,opacity:1,onComplete:()=>{
      mainFooterSmile.classList.add('activate');
      gsap.to(mainFooterInnerWrap2,{top:100, opacity:1, duration:0.7,})
    },scrollTrigger:{
        trigger:mainFooterInnerWrap1,
        markers:true,
        start:'0% 0%',
        end:'100% 0%',
        // toggleActions:'play reverse play reverse'
      }})  
  }})

  
  // gsap.to(mainFooterInnerWrap2,{top:0, opacity:1, duration:0.5, scrollTrigger:{
  //     trigger:mainFooterInnerWrap1,
  //     markers:true,
  //     start:'50% 0%',
  //     end:'50% 0%',
  //     toggleActions:'play play reverse reverse'
      
  // }})

})