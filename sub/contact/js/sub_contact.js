document.addEventListener('DOMContentLoaded',()=>{

  const contactCheck = document.querySelector('#contact_check_btn')


  gsap.set(contactCheck.children[0],{opacity:0})

  let checkState = false

  contactCheck.addEventListener('click',activateCheckBox)

  // # 체크박스 이벤트 주기

  function activateCheckBox(){
    if(checkState==false){
      gsap.set(contactCheck.children[0],{opacity:1})
      checkState=true;
    }
    else{
      gsap.set(contactCheck.children[0],{opacity:0})
      checkState=false
    }
    
  }


})