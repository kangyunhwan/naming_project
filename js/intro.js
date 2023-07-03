window.addEventListener('load',()=>{

  
  // 윤환
  const body=document.querySelector('body')
  const introWrap=document.querySelector("#intro_wrap");
  const box=document.querySelector(".intro_box1");
  const logo=document.querySelector("#intro_logo");
  const messageWrap=document.querySelector('#intro_message')
  const cursor=document.querySelector(".intro_cursor");

  let message="첫인상 형성에 걸리는 시간 7초"
  let index=0;
  let typingPlay=null;
  let cursorPlay=null;

  let isCursor=false;


  

  

  // 샛별
  const logoimgWrap=document.querySelector('#header_logo')
  const logoImg=logoimgWrap.children[0].children[0]
  const logoTitle=logoimgWrap.children[0].children[1].children[0]

  // 상혁
  const MenuBtn = document.querySelector('#header_main_menu')  // 메뉴 버튼 찾기
  const firstSpan = MenuBtn.children[0] // 첫번쨰 span 태그
  const secondSpan = MenuBtn.children[1] // 두번쨰 span 태그

  
  
  

  gsap.set(introWrap,{height:window.innerHeight})
  
  
  



  gsap.set(logoImg,{opacity:0})
  gsap.set(logoTitle,{left:-196})
  gsap.set(MenuBtn,{opacity:0})
  
  gsap.to(box,{left:`45%`,top:`28%`,duration:0.6,delay:0.5,onComplete:()=>{
    gsap.to(box,{left:`54%`,top:`44%`,duration:0.6,onComplete:()=>{
      gsap.to(box,{left:`45%`,top:`37%`,onComplete:()=>{
        gsap.to(box,{scale:12,duration:0.8,onComplete:()=>{
          introWrap.removeChild(box)
          gsap.set(introWrap,{backgroundColor:`#0A013D`})
          gsap.to(logo,{opacity:0,display:'none'})
          gsap.set('body,html',{overflow:'visible'})
          /*intro 모션 끝*/
          typingPlay=setInterval(messageTyping,120)
          cursorPlay=setInterval(cursorBlink,500)
          gsap.to(logoImg,{opacity:1, duration:0.5, ease:"power1.out", onComplete:()=>{
            gsap.to(logoTitle,{left:0, duration:1, ease:"power1.out"})
            gsap.to(MenuBtn,{opacity:1, duration:1, ease:"power1.out"})
            gsap.to(introWrap,{backgroundColor:'#22226B', duration:1, ease:"power1.out"})
          }})
          /*왼쪽로고 모션 끝*/

        }})
      }})
    }})  
  }})
  

  // 타이핑 효과 함수
  function messageTyping(){
    let text=message.charAt(index)
    let span=document.createElement('span')
    span.innerHTML=text;
    messageWrap.append(span)
    index++;
    if(index>=message.length){
      clearInterval(typingPlay)
      typingPlay=null;
    }
  }

  // # 커서 깜빡임 효과 함수
  function cursorBlink(){
    if(typingPlay==null){
      if(isCursor==false){
        cursor.classList.add('blink')
        isCursor=true;
      }else if(isCursor==true){
        cursor.classList.remove('blink')
        isCursor=false;
      }
    }
  }

  window.addEventListener('scroll',scrollWindow)

  let mainHeight=introWrap.offsetHeight;
  
  const logoPath=document.querySelectorAll("#header_logo path")
  
      gsap.set(firstSpan,{backgroundColor:`#fff`})
      gsap.set(secondSpan,{backgroundColor:`#fff`})
      gsap.set(logoPath,{fill:`#fff`})
  

  function scrollWindow(){
    let scrollHeight=window.pageYOffset;
    // console.log(scrollHeight)
    if(scrollHeight>=mainHeight-110 && scrollHeight<=8099){
      gsap.set(firstSpan,{backgroundColor:`#22226b`})
      gsap.set(secondSpan,{backgroundColor:`#22226b`})
      gsap.set(logoPath,{fill:`#22226b`})

    }else if(scrollHeight>=8100 && scrollHeight<=9500){
      gsap.set(firstSpan,{backgroundColor:`#fff`})
      gsap.set(secondSpan,{backgroundColor:`#fff`})
      gsap.set(logoPath,{fill:`#fff`})
    }else if(scrollHeight>=9501){
      gsap.set(firstSpan,{backgroundColor:`#22226b`})
      gsap.set(secondSpan,{backgroundColor:`#22226b`})
      gsap.set(logoPath,{fill:`#22226b`})
    }else{
      gsap.set(firstSpan,{backgroundColor:`#fff`})
      gsap.set(secondSpan,{backgroundColor:`#fff`})
      gsap.set(logoPath,{fill:`#fff`})
    }

  }


})

  



