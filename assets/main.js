let open = document.querySelector('.open');
let menu = document.querySelector('#menu-bar');
let  close = document.querySelector('#close');


//A and B represent (open and close)
//The reason for formatting the function this way is......
 //to avoid repitition incase i have  many buttons i want to use same function for!
common = (a,b,c) => {
  a.addEventListener('click', () => { 
    //I  created a property(.hide) in css and i set the value to(hidden)
    //That is what i will be using to (hide) and at the same time (display) the open menu and close ICONs
    a.classList.toggle('hide');  
    b.classList.toggle('hide');   

    if(c == 'slide-in'){
      menu.classList.toggle('slide')
    }

    if(c == 'slide-out'){
      menu.classList.toggle('slide')
    }
  })
}

//if you dont repeat the call vice-versa it wont work
common(open,close,'slide-in'); //when i click on (open menu) = i want you to display the close button
common(close,open,'slide-out');//when i click on (close) = i want you to display the open menu button



/* let countDownDate = new Date("oct 9, 2023 00:00:00").getTime();
let a = setInterval(function(){
    let now =new Date().getTime();
    let distance = countDownDate -now;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000); */
