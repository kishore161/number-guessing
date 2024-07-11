var num = Math.floor(Math.random()*101);
var count = 0;
console.log(num);

function findnum()
{
    var gn= parseInt(document.getElementById("n1").value);
    count+=1;
    if(gn==num)
    {
        document.getElementById("result").textContent = "Congratulations!!! for your winning!!!";
    }
    else if(gn>num)
    {
        document.getElementById("result").textContent = "Try with smaller number";
    }
    else
    {
        document.getElementById("result").textContent = "Try with greater number";
    }
    document.getElementById("count").textContent = count;
}