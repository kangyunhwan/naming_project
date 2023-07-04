document.addEventListener("DOMContentLoaded",()=>{
  const portfolioWrap=document.querySelector("#portfolio_wrap");
  const portfolioList=document.querySelector("#portfolio_list");

  gsap.set(portfolioWrap,{height:window.innerHeight})

  let endY=portfolioList.offsetHeight-window.innerHeight+500;

  gsap.to(portfolioList,{top:-endY,scrollTrigger:{
    trigger:portfolioWrap,
    // markers:true,
    start:'top top',
    end:`${endY} top`,
    pin:true,
    scrub:1,
  }})


  const textWrap1=document.querySelector(".portfolio_bg_text1");
  const bgText1=document.querySelectorAll(".portfolio_bg_text1 p");

  const textWrap2=document.querySelector(".portfolio_bg_text2");
  const bgText2=document.querySelectorAll(".portfolio_bg_text2 p");

  let textWidth=bgText1[0].offsetWidth;
  // console.log(bgText1[0].offsetWidth)
  
  gsap.set(textWrap1,{width:textWidth*2})
  gsap.to(textWrap1,{left:-textWidth,duration:15,repeat:-1,ease:'linear'})

  gsap.set(textWrap2,{left:-textWidth,width:textWidth*2})
  gsap.to(textWrap2,{left:0,duration:15,repeat:-1,ease:'linear'})


})