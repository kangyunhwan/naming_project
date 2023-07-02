document.addEventListener('DOMContentLoaded',()=>{
  const portfolioSildeWrap=document.querySelector('#portfolio_silde_wrap')
  const portfolioSildeList=document.querySelector('#portfolio_silde_list')
  const portfolioSildeLi=document.querySelectorAll('#portfolio_silde_list>li')
  const portfolioDot=document.querySelectorAll('#portfolio_silde_btn_list>li')
  
  let portfolioSildHeight=portfolioSildeWrap.offsetHeight;
  let portfolioLength=portfolioSildeLi.length;

  // let selectedDot=portfolioSildeDotBtn[0];
  let currentIndex=0;
  let selectedDot=portfolioDot[0]
  let nextIndex=null;
  
  let timer=setInterval(addPortfolioIndex,4000)

  initEvent()

  function initEvent(){

    for(item of portfolioDot){
      item.addEventListener('mouseenter',overDot)
    }
    
    for(item of portfolioDot){
      item.addEventListener('mouseenter',()=>{
        clearInterval(timer)
      })
    }

    for(item of portfolioDot){
      item.addEventListener('mouseleave',()=>{
        timer=setInterval(addPortfolioIndex,4000)
      })
    }
  }
  

  function addPortfolioIndex(){
    nextIndex=currentIndex+1;
    if(nextIndex>=portfolioLength){
      nextIndex=0;
    }
    slideNextImg(nextIndex);
    activateDot(nextIndex);

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

  gsap.set(portfolioSildeLi,{top:-portfolioSildHeight, opacity:0})
  gsap.set(portfolioSildeLi[0],{top:0, opacity:1})


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


  //Next => 밑에서 위로 올라오는 것 top -
  //Prev => 위에서 밑으로 내려오는 것 top +


  function slideNextImg(index){
    
    //다시 초기화
    gsap.to(portfolioSildeLi[currentIndex],{top:-portfolioSildHeight, opacity:0, duration:1, ease:'power1.out'})
    
    //다음에 들어올 순번 모션전 세팅
    gsap.set(portfolioSildeLi[index],{top:portfolioSildHeight, opacity:0})

    gsap.to(portfolioSildeLi[index],{top:0,opacity:1, duration:1, ease:'power1.out'})

    currentIndex=index;

  }

  function slidePrevImg(index){
        //다시 초기화
        gsap.to(portfolioSildeLi[currentIndex],{top:portfolioSildHeight, opacity:0, duration:1, ease:'power1.out'})
    
        //다음에 들어올 순번 모션전 세팅
        gsap.set(portfolioSildeLi[index],{top:-portfolioSildHeight, opacity:0})
    
        gsap.to(portfolioSildeLi[index],{top:0,opacity:1, duration:1, ease:'power1.out'})
    
        currentIndex=index;
  }


})