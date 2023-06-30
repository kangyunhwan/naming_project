document.addEventListener("DOMContentLoaded",()=>{

  aboutAttention();
  aboutCopy();
  aboutIdentity();
  aboutInfo();


  function aboutAttention(){
    const aboutAttentionWrap=document.querySelector(".about_attention_wrap");
    const aboutAttentionSec=document.querySelector(".about_attention_title>span")
    const aboutAttentionText=document.querySelector(".about_attention_text")

    gsap.set(aboutAttentionSec,{opacity:0})
    gsap.set(aboutAttentionWrap,{opacity:0})
    gsap.set(aboutAttentionText,{left:-150,opacity:0})
    
  

    gsap.to(aboutAttentionWrap,{opacity:1,duration:1,onComplete:()=>{
      gsap.to(aboutAttentionSec,{opacity:1,onComplete:()=>{
        gsap.to(aboutAttentionText,{left:0,opacity:1,duration:1})
      }})
    }})
  }
  
  function aboutCopy(){
    const aboutCopy=document.querySelector("#about_copy")

    gsap.set(aboutCopy,{top:100,opacity:0})
  
    gsap.to(aboutCopy,{top:0,opacity:1,scrollTrigger:{
      trigger:aboutCopy,
      // markers:true,
      start:'top 90%',
      end:'bottom 90%',
    }})
  }

  function aboutIdentity(){
    const aboutIdentityWrap=document.querySelector(".about_identity_wrap");

    gsap.set(aboutIdentityWrap,{left:200,opacity:0})

    gsap.to(aboutIdentityWrap,{left:0,opacity:1,scrollTrigger:{
      trigger:aboutIdentityWrap,
      // markers:true,
      start:'top 65%',
      end:'bottom 65%',
    }})
  }

  function aboutInfo(){
    const aboutLineWrap=document.querySelector(".about_line");
    const aboutLine=document.querySelector(".about_line>span");
  
    gsap.set(aboutLine,{height:0})
  
    gsap.to(aboutLine,{height:100+'%',duration:0.7,scrollTrigger:{
      trigger:aboutLineWrap,
      // markers:true,
      start:'top 70%',
      end:'bottom 70%',
    }})
  
  
  
    const aboutInfoBottomWrap=document.querySelector("#about_info_bottom");
  
    gsap.set(aboutInfoBottomWrap,{top:150,opacity:0})
  
    gsap.to(aboutInfoBottomWrap,{top:0,opacity:1,scrollTrigger:{
      trigger:aboutInfoBottomWrap,
      // markers:true,
      start:'top 90%',
      end:'bottom 90%',
    }})
  
  }
 


})