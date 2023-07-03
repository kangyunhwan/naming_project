document.addEventListener('DOMContentLoaded',()=>{

  
  const subPageGnb=document.querySelectorAll("#sub_gnb>li")

  let pathName=window.location.pathname;

  let aboutFile=pathName.indexOf('about');
  let storyFile=pathName.indexOf('story');
  let contactFile=pathName.indexOf('contact');
  let portfolioFile=pathName.indexOf('portfolio'); 

  if(aboutFile!=-1){
    subPageGnb[1].classList.add('selected')
  }
  if(storyFile!=-1){
    subPageGnb[2].classList.add('selected')
  }
  if(contactFile!=-1){
    subPageGnb[3].classList.add('selected')
  }
  if(portfolioFile!=-1){
    subPageGnb[4].classList.add('selected')
  }


  const checkMenuBtn = document.querySelector('#footer_check_btn')

  gsap.set(checkMenuBtn.children[0],{opacity:0})

  let checkState = false

  checkMenuBtn.addEventListener('click',activateCheckBox)

  // # 체크박스 이벤트 주기

  function activateCheckBox(){
    if(checkState==false){
      gsap.set(checkMenuBtn.children[0],{opacity:1})
      checkState=true;
    }
    else{
      gsap.set(checkMenuBtn.children[0],{opacity:0})
      checkState=false
    }
    
  }


  


})