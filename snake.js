//window.onload = alert(localStorage.getItem("name"));
this.document.getElementById('para1').innerText='welcome champ '+localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();       

localStorage.setItem('cp',0);

const btn=this.document.getElementById('rollbtn');

btn.addEventListener("click",game)

function game()
{  if(Number(localStorage.getItem('cp'))<=20)
   {

    var rd=random();
    document.getElementById('p1').innerText="your dice value is "+rd;
    var cpval=Number(localStorage.getItem('cp'))+rd;
    if(cpval==20)
    {
        alert("winner")
    }
    localStorage.setItem('cp',cpval);
    checkpostion(Number(localStorage.getItem('cp')));
    document.getElementById('p2').innerText="your current position value is "+localStorage.getItem('cp');
    
    //checkpostion(localStorage.getItem('cp'));
   }
   

} 
function random()
{
 return(Math.floor(Math.random() * (6-1) + 1));
}
function checkpostion(cpval)
{
    console.log(cpval)
    switch(cpval)
    {
        case 19:localStorage.setItem('cp',4); break;
        case 14:localStorage.setItem('cp',11);break;
        case 5:localStorage.setItem('cp',15);break;
        case 2:localStorage.setItem('cp',18);break;
    }
    
}
