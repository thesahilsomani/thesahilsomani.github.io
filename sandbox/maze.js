function setup()
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#99c0c9";
    ctx.fillRect(0,0,250,150);
    
    ctx.fillStyle = "#000000";
    for (i = 0; i < 9; i++)
    {
        for(j = 0; j < 19; j++)
        {
            setTimeout(function(){}, j*1000);
            drawNode(10*j + 10, 10*i + 10);
            //setInterval(function(){ drawNode(100, 100); }, 500);
        }
    }
}

function drawNode(x, y)
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fill();
}

