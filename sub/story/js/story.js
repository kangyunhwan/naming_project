window.addEventListener('load',()=>{
  const airPlane = document.querySelector('#logo_airplane') // 비행기 
  const storyBox2 = document.querySelector('#story_box2') // 스토리 박스 
  const storyBox3 = document.querySelector('#story_box3')
  const storyBox4 = document.querySelector('#story_box4')
  const storyBox5 = document.querySelector('#story_box5')
  

  gsap.set(airPlane, {top:-100, left: 640}) // 비행기처음위치
  gsap.to(airPlane, {top:260, left: 280, delay:1,duration:2,ease:'power4.out'})

  //비행기 움직임 좌표 근데 쉽지않음.. 
  // 라이브러리도 있긴한데 고민해봐야할듯 방향에 맞춰서 비행기 회전이 어려움
  // gsap.to(airPlane, {top: 0, right: 0, duration:0.1,ease:'linear', onComplete:()=>{
  //   gsap.to(airPlane, {top:5, right:10, duration:0.1,ease:'linear',onComplete:()=>{
  //     gsap.to(airPlane, {top:8, right:40, duration:0.1,ease:'linear',onComplete:()=>{
  //       gsap.to(airPlane, {top:11, right:70, duration:0.1,ease:'linear',onComplete:()=>{
  //         gsap.to(airPlane, {top:15, right:100, duration:0.1,ease:'linear',onComplete:()=>{
  //           gsap.to(airPlane, {top:15, right:130, duration:0.1,ease:'linear',onComplete:()=>{
  //             gsap.to(airPlane, {top:20, right:160, duration:0.1,ease:'linear',onComplete:()=>{
  //               gsap.to(airPlane, {top:20, right:180, duration:0.1,ease:'linear',onComplete:()=>{
  //                 gsap.to(airPlane, {top:80, right:120, duration:0.1,ease:'linear',onComplete:()=>{
  //                   gsap.to(airPlane, {top:50, right:75, duration:0.1,ease:'linear',onComplete:()=>{
  //                     gsap.to(airPlane, {top:50, right:75, duration:0.1,ease:'linear',onComplete:()=>{
  //                       gsap.to(airPlane, {top:180, right:270, duration:0.1,ease:'linear',onComplete:()=>{
              
  //                       }})
  //                     }})
  //                   }})
  //                 }})
  //               }})
  //             }})
  //           }})
  //         }})
  //       }})
  //     }})
  //   }})
  // }})

  


  gsap.set(storyBox2, {top:80})
  gsap.set(storyBox3, {top:80})
  gsap.set(storyBox4, {top:80})
  gsap.set(storyBox5, {top:80})

  window.addEventListener('scroll',scrollsize)

  function scrollsize(){
    let scrollHeight = window.pageYOffset;
    console.log(scrollHeight)
    if(scrollHeight>400){
      gsap.to(storyBox2, {top:0,opacity:1, duration:1.5, ease:'power1.out'})
    }
    if(scrollHeight>1100){
      gsap.to(storyBox3, {top:0,opacity:1, duration:1.5, ease:'power1.out'})
    }
    if(scrollHeight>1800){
      gsap.to(storyBox4, {top:0,opacity:1, duration:1.5, ease:'power1.out'})
    }
    if(scrollHeight>2500){
      gsap.to(storyBox5, {top:0,opacity:1, duration:1.5, ease:'power1.out'})
    }
  }












  
})