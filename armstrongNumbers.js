let n=500

function printArmstrong(number)
{
    for(let i=0;i<=number;i++)
    {
        if(isArmstrong(i))
            console.log(i)
    }
    
}
function isArmstrong(number)
{
    let temp=number
    let sum=0
    let len= n.toString().length
    while(temp>0)
        {
            let lastDigit=temp%10
            sum=sum+Math.pow(lastDigit,len)
           
            temp = parseInt(temp / 10);
        }
        //console.log(i,sum)
    return (number===sum)
        
}
printArmstrong(n)