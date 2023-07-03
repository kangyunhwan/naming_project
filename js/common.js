document.addEventListener('DOMContentLoaded',()=>{

  
  const subPageGnb=document.querySelectorAll("#sub_gnb>li")
 
  let pathName=window.location.pathname;
  console.log(pathName)
  let startLine=pathName.lastIndexOf("/");
  console.log(startLine)
  let fileName=pathName.slice(startLine+1);
  console.log(fileName)

  console.log(subPageGnb[1])
  if(fileName=='about.html'){
    subPageGnb[1].classList.add('selected')
  }else if(fileName=='story.html'){
    subPageGnb[2].classList.add('selected')
  }else if(fileName=='contact.html'){
    subPageGnb[3].classList.add('selected')
  }else if(fileName=='portfolio.html'){
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