document.addEventListener("DOMContentLoaded",()=>{
  const customerWrap=document.querySelector("#customer_wrap");
  const customerTag=document.querySelectorAll("#customer_tag_list>li");


  let randomIndex=[];
  let index=0;

  randomCount();
  
  function randomCount(){

    let count=parseInt(Math.random()*customerTag.length)
    randomIndex.push(count)

    while(randomIndex.length!=customerTag.length){
      
      count=parseInt(Math.random()*customerTag.length)

      if(randomIndex[0]!=count && randomIndex[1]!=count && randomIndex[2]!=count && randomIndex[3]!=count && randomIndex[4]!=count && randomIndex[5]!=count && randomIndex[6]!=count && randomIndex[7]!=count && randomIndex[8]!=count){
        randomIndex.push(count)
      }
    }
    // console.log(randomIndex)
  }
  
  for(i=0;i<customerTag.length;i++){
    gsap.to(customerTag[randomIndex[i]],{scale:(3),opacity:0,delay:0.15*i,onComplete:()=>{
      gsap.set(customerTag[randomIndex[index]],{display:'none'})
      index++;
    },scrollTrigger:{
      trigger:customerWrap,
      // markers:true,
      start:'top 60%',
      end:'20% 60%',
      // toggleActions:'play reverse play reverse'
      // scrub:1,
    }})
  }


  const customerListWrap=document.querySelector("#customer_list_wrap")
  const customerListBox=document.querySelector("#customer_autoplay_list_box");
  const customerList=document.querySelector("#customer_autoplay_list")
  const customerLi=document.querySelectorAll("#customer_autoplay_list>li")

  const nextBtn=document.querySelector("#customer_next_btn");
  const prevBtn=document.querySelector("#customer_prev_btn");

  let timer=null

  let currentIndex=3;
  let nextIndex=null

  let customerLength=customerLi.length;
  let customerLiWidth=customerLi[0].offsetWidth;

  let isSlide=false;

  

  autoPlay();

  gsap.set(customerListBox,{width:customerLiWidth*5,height:customerLiWidth})
  gsap.set(customerList,{width:customerLiWidth*customerLength,left:-customerLiWidth})

  nextBtn.addEventListener('click',slideNextCustomer)
  prevBtn.addEventListener('click',slidePrevCustomer)
  customerListWrap.addEventListener('mouseenter',stopAutoPlay)
  customerListWrap.addEventListener('mouseleave',autoPlay)

  function stopAutoPlay(){
    clearInterval(timer)
  }

  function autoPlay(){
    timer=setInterval(slideNextCustomer,3000)
  }

  function slideNextCustomer(){
    if(isSlide==false){
      isSlide=true;
      nextIndex=currentIndex+1;

      if(nextIndex>=customerLength){
        nextIndex=0;
      }

      customerLi[currentIndex].classList.remove('selected')
      customerLi[nextIndex].classList.add('selected')

      customerLi[currentIndex].children[0].children[0].src=`/naming_project/image/customer_company_logo${currentIndex}_gray.jpg`
      customerLi[nextIndex].children[0].children[0].src=`/naming_project/image/customer_company_logo${nextIndex}_color.jpg`


      currentIndex=nextIndex;
  
      let currentPosition=customerList.offsetLeft;
      gsap.to(customerList,{left:currentPosition-customerLiWidth,onComplete:()=>{
        customerList.append(customerList.firstElementChild)
        gsap.set(customerList,{left:-customerLiWidth})
        isSlide=false;
      }})
    }
  }


  function slidePrevCustomer(){
    if(isSlide==false){
      isSlide=true;
      nextIndex=currentIndex-1;
      if(nextIndex<0){
        nextIndex=customerLength-1;
      }

      customerLi[currentIndex].classList.remove('selected')
      customerLi[nextIndex].classList.add('selected')

      customerLi[currentIndex].children[0].children[0].src=`/naming_project/image/customer_company_logo${currentIndex}_gray.jpg`
      customerLi[nextIndex].children[0].children[0].src=`/naming_project/image/customer_company_logo${nextIndex}_color.jpg`

      currentIndex=nextIndex;
  
      let currentPosition=customerList.offsetLeft;
      gsap.to(customerList,{left:currentPosition+customerLiWidth,onComplete:()=>{
        customerList.prepend(customerList.lastElementChild)
        gsap.set(customerList,{left:-customerLiWidth})
        isSlide=false;
      }})
    }
  }


})


  // 랜덤으로 숫자가 나오는데 이미 나왔던 숫자나 같은숫자가 나올경우 태그가 늦게 사라진다.
  // 그래서 이미 나왔던 숫자는 나오면 안된다.
  // 랜덤으로 나온 숫자가 이미 나온 숫자라고 어떻게 판단???
  // 랜덤으로 나온 숫자를 배열안에 넣는다. 근데 배열안에 같은 숫자가 있으면 안된다.
  // 랜덤으로 나온 숫자랑 배열안에 있는 숫자랑 비교해서 다를때만 배열안에 저장?
  // random 숫자는 9개만 있으면 됨



  // 내가 원하는건 애니메이션이 끝난 대상은 display:none이 되는것
  // onComplete를 써서 gsap.set(customerTag[i],{display:'none'}) 
  // 이렇게 하면 애니메이션이 끝난 대상은 display:none 될거라고 생각했는데
  // for문은 애니메이션이 진행되는 시간을 기다려주지 않고 더 빨리 돌아가기 때문에
  // 애니메이션이 끝나면 실행하라는명령인 onComplete 안에서 i를 사용할수없음
  // onComplete안에서 i를 그대로 사용하면 i는 9가 된상태
  // onComplete안에서 사용할수있는 변수필요