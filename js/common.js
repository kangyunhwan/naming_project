document.addEventListener('DOMContentLoaded',()=>{

  // # 메뉴 버튼 이벤트 주기
  const MenuBtn = document.querySelector('#header_main_menu')  // 메뉴 버튼 찾기
  const firstSpan = MenuBtn.children[0] // 첫번쨰 span 태그
  const secondSpan = MenuBtn.children[1] // 두번쨰 span 태그

  const mainMenuWrap = document.querySelector('#mainmenu_wrap')
  const mainMenuInner=document.querySelector("#mainmenu_list_box");

  const mainMenu=document.querySelectorAll("#mainmenu_list>li");

  

  let buttonClickState = false;
  let isMenuAni=false;
  let checkIndex=0;

  // gsap.set(mainMenu,{right:-mainMenuWidth,opacity:0,scale:(0,0)})

  // MenuBtn.addEventListener('mouseenter', enterWidth) 
  // MenuBtn.addEventListener('mouseleave', leaveWidth)
  MenuBtn.addEventListener('click',activateMainMenu)

  // function enterWidth(){
  //   gsap.to(firstSpan,{width:33,duration:0.3, ease:'power1.out'})
  //   gsap.to(secondSpan,{width:100+"%",duration:0.3, ease:'power1.out'})
  // }

  // function leaveWidth(){
  //   gsap.to(firstSpan,{width:100+"%",duration:0.3, ease:'power1.out'})
  //   gsap.to(secondSpan,{width:33,duration:0.3, ease:'power1.out'})
  // }

  // 메뉴 클릭했을경우 실행되는 함수
  function activateMainMenu(){
    if(buttonClickState==false){
      if(isMenuAni==false){
        isMenuAni=true;
        console.log('1')
        firstSpan.classList.add('selected')
        secondSpan.classList.add('selected')
        gsap.set(mainMenuWrap,{display:'block'})
        setTimeout(subMenuAni,250)
        gsap.to(mainMenuInner,{scale:(8),opacity:1,duration:0.7,onComplete:()=>{
          
          gsap.set('body,html',{overflow:'hidden'})
          
        }})

       
      }
      
    }else if(buttonClickState==true){
     if(isMenuAni==false){
      isMenuAni=true;
      console.log('2')
      firstSpan.classList.remove('selected')
      secondSpan.classList.remove('selected')
      // gsap.to(firstSpan,{width:100+"%",duration:0.3, ease:'power1.out'})
      // gsap.to(secondSpan,{width:33,bottom:0,duration:0.3, ease:'power1.out'})
      gsap.set(mainMenu,{opacity:0,left:-50})
      
      gsap.to(mainMenuInner,{scale:(1),opacity:0,duration:0.7,onComplete:()=>{
        gsap.set(mainMenuWrap,{display:'none'})
        gsap.set('body,html',{overflow:'visible'})
        isMenuAni=false;
        buttonClickState=false
        checkIndex=0
      }})
     }
    }
  }

  function subMenuAni(){
    for(i=0;i<mainMenu.length;i++){
      gsap.to(mainMenu[i],{left:0,opacity:1,delay:0.1*i,onComplete:()=>{
        checkIndex++;
        if(checkIndex==mainMenu.length){
          isMenuAni=false;
          buttonClickState=true;
        }
      }})
    }
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