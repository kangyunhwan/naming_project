document.addEventListener('DOMContentLoaded',()=>{
  
  const portfolioSildeWrap=document.querySelector('#portfolio_silde_wrap')
  const portfolioSildeList=document.querySelector('#portfolio_silde_list')
  const portfolioSildeLi=document.querySelectorAll('#portfolio_silde_list>li')
  const portfolioDot=document.querySelectorAll('#portfolio_silde_btn_list>li')
  
  let portfolioSildHeight=portfolioSildeList.offsetHeight;
  let portfolioLength=portfolioSildeLi.length;

  // let selectedDot=portfolioSildeDotBtn[0];
  let currentIndex=0;
  let selectedDot=portfolioDot[0]
  let nextIndex=1;
  
  initEvent()

  function initEvent(){
    for(item of portfolioDot){
      item.addEventListener('mouseenter',overDot)
    }
  }

  function overDot(){
    nextIndex=getIndex(this)
    activateDot(nextIndex);
    // alert(nextIndex)
    
    if(nextIndex>currentIndex){
      slideNextImg(nextIndex)
    }else if(nextIndex<currentIndex){
      slidePrevImg(nextIndex)
    }
  }

  function getIndex(checkMenu){
    let selectedIndex=0;
    while((checkMenu=checkMenu.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }

  function activateDot(index){
    if(selectedDot!=null && selectedDot!=portfolioDot[index]){
      selectedDot.classList.remove('selected')
    }

    if(selectedDot!=portfolioDot[index]){
      selectedDot=portfolioDot[index];
      selectedDot.classList.add('selected')
    }
  }





})