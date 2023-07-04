document.addEventListener('DOMContentLoaded',()=>{

  portfolioTabMenuWork();


  function portfolioTabMenuWork(){
    const portfolioListWrap=document.querySelector("#portfolio_category_thumbnail_list")
    const portfolioTabMenu=document.querySelectorAll("#portfolio_category_title_list>li");
  
    let selectedTabMenu=portfolioTabMenu[0]
  
  
    for(item of portfolioTabMenu){
      item.addEventListener('click',clickPortfolioTabMenu)
    }
  
    showPortfolio(1)
  
    function clickPortfolioTabMenu(){
      let clickIndex=getIndex(this);
      activatePortfolioTabMenu(clickIndex);
      showPortfolio(clickIndex+1)
    }
    
  
    function showPortfolio(num){
      axios.get('/naming_project/sub/portfolio/portfolio_data'+num+'.html').then((response)=>{
        portfolioListWrap.innerHTML=response.data
      })
    }
    
    function activatePortfolioTabMenu(index){
      if(selectedTabMenu!=null && selectedTabMenu!=portfolioTabMenu[index]){
        selectedTabMenu.classList.remove('selected');
        
  
        selectedTabMenu=portfolioTabMenu[index];
        selectedTabMenu.classList.add('selected');
      }
    }
  
    function getIndex(menu){
      let selectedIndex=0;
      while((menu=menu.previousElementSibling)!=null){
        selectedIndex++;
      }
      return selectedIndex;
    }
  }
})
  