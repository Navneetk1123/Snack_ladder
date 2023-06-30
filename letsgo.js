const btn=this.document.getElementById("btn");
btn.addEventListener("click",store);

function store()
{   
    var y = document.getElementById('textbox_id').value;
    localStorage.setItem("name",y);
    console.log(y);
    window.location.href="snake.js"
   
}