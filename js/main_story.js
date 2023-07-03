document.addEventListener("DOMContentLoaded",()=>{
  
  const storyShapeWrap=document.querySelectorAll('#story_shape_wrap');
  const storyVideoWrap=document.querySelector("#story_video_wrap");
  const storyVideoBox=document.querySelector("#story_video_box");

  gsap.set(storyShapeWrap,{height:window.innerHeight})
  

  gsap.set(storyVideoBox,{top:0})
  gsap.to(storyVideoBox,{top:-300,duration:1,scrollTrigger:{
    trigger:storyShapeWrap,
    // markers:true,
    start:'0% 0%',
    end:'50% 0%',
    pin:true,
    scrub:2,
  }})

  gsap.to(storyVideoBox,{scrollTrigger:{
    trigger:storyVideoWrap,
    // markers:true,
    start:'0% 40%',
    end:'bottom 40%',
    toggleClass:'activate'

  }})


  
})