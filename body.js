//Get the toggle button 
let toggle_button = document.getElementById("toggle_button");
let menuBar = document.querySelector("nav > div:nth-child(4)> ul");
let menuBar1 = document.querySelector("nav > div:nth-child(5)> ul");
//register the click event here
toggle_button.addEventListener('click', function(){
    //check what icon the button has now
    if(toggle_button.innerHTML == '☰'){
        //The ☰ clicked means the user want to see navigation bar 
        menuBar.style.display = 'flex';
        menuBar.style.flexDirection = 'column';
        menuBar1.style.display = 'flex';
        menuBar1.style.flexDirection = 'column';
        
        //change the ☰ to ☓
        toggle_button.innerHTML = '☓';
     }else{
        //The ☓ clicked means the user want to hide navigation bar
        menuBar.style.display = 'none';
        menuBar1.style.display = 'none';
        //change the ☓ to ☰ 
        toggle_button.innerHTML = '☰';
     }
});

//variable to maintain status of navigation bar collapse
let isNaviationbarCollapsed = null;

//set the status of isNaviationbarCollapsed when page loads
window.addEventListener('load', function(){
    if(this.window.innerWidth > 900){
        isNaviationbarCollapsed = false;
        toggle_button.style.display = 'none';
    }else{
        isNaviationbarCollapsed = true;
        toggle_button.style.display = 'intial';
    }
});

window.addEventListener('resize', function(event){
    //console.log(this.window.innerWidth)
    if(this.window.innerWidth > 900 && isNaviationbarCollapsed){
        //you are here means width of window is more than 900
        //and; navigation bar is collapsed

        //for expansion of navigation bar; the media query will fo the job

        //hide the toggle button
        toggle_button.style.display = 'none';

        menuBar.style.display = 'flex';
        menuBar.style.flexDirection = 'initial';
        menuBar1.style.display = 'flex';
        menuBar1.style.flexDirection = 'column';

        //set the status of navigation bar collapse status to false
        isNaviationbarCollapsed = false;
    }else if(this.window.innerWidth <900 && !isNaviationbarCollapsed){
        //you are here means width is 900 or less
        //and; navigation bar is expanded
        menuBar1.style.display = 'none';
        menuBar.style.display = 'none';
        //for collapsing of navigation bar; the media query will be removed by browser

        //display the toggle button
        toggle_button.style.display = 'initial';

        //set the status of navigation bar collapse to true
        isNaviationbarCollapsed = true;
    }
})