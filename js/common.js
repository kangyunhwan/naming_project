document.addEventListener('DOMContentLoaded',()=>{

  // # 메뉴 버튼 이벤트 주기
  const MenuBtn = document.querySelector('#header_main_menu')  // 메뉴 버튼 찾기
  const firstSpan = MenuBtn.children[0] // 첫번쨰 span 태그
  const secondSpan = MenuBtn.children[1] // 두번쨰 span 태그
  const mainMenu = document.querySelector('#mainmenu_wrap')
  const mainMenuLi = document.querySelectorAll('#mainmenu_list>li>a')

  let mainMenuWidth = mainMenu.offsetWidth

  let buttonClickState = false;

  gsap.set(mainMenu,{right:-mainMenuWidth,opacity:0,scale:(0,0)})



  // MenuBtn.addEventListener('mouseenter', enterWidth) 
  // MenuBtn.addEventListener('mouseleave', leaveWidth)
  MenuBtn.addEventListener('click',activateMainMenu)
  for(item of mainMenuLi){
    item.addEventListener('mouseenter',activateMenuColor)
  }

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
      firstSpan.classList.add('selected')
      secondSpan.classList.add('selected')
      gsap.to(mainMenu, {right:-481,opacity:1,scale:(5,5),duration:1, ease:'power1.out'})
      buttonClickState=true;
    }else{
      firstSpan.classList.remove('selected')
      secondSpan.classList.remove('selected')
        gsap.to(mainMenu,{right:-mainMenuWidth,opacity:0,scale:(0,0),duration:1, ease:'power1.out'})
        gsap.set(mainMenuLi,{color: `#0A013D`})
        gsap.set(mainMenu,{backgroundColor: `#C37C3B`})
      buttonClickState=false;
    }
  }

  function activateMenuColor(){
    gsap.to(mainMenu,{backgroundColor:`#1E1E1E`,duration:0.5,ease:'power1.out',onComplete:()=>{
      gsap.to(mainMenuLi,{color:'white',duration:0.5,ease:'power1.out'})
    }})
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