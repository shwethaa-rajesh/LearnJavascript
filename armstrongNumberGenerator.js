const n=500

function printArmstrong(range)
{
    if(range > Number.MAX_SAFE_INTEGER )
    {
        throw new Error('Integer range exceeded')
    }
    if(typeof range !== 'number')
    {
        throw new Error('Invalid input type')
    }
    if(range<0)
    {
        throw new Error('Range should be positive')
    }
    
    let armstrongNumberArray=[]
    for(let index=0;index<=range;index++)
    {
        if(isArmstrong(index))
            {
                armstrongNumberArray.push(index)
                //console.log(index)
            }
    }
    return armstrongNumberArray
    
}
function isArmstrong(number)
{
    if(typeof number !== 'number')
    {
        throw new Error('Invalid input type')
    }
    if(number<0)
    {
        throw new Error('Input type should be positive')
    }
    let temp=number
    let sum=0
    const length= number.toString().length
    while(temp>0)
        {
            const lastDigit=temp%10
            sum=sum+Math.pow(lastDigit,length)
           
            temp = parseInt(temp / 10);
        }
        //console.log(i,sum)
    return (number===sum)
        
}
console.log(printArmstrong(n))
module.exports = {
    printArmstrong,
    isArmstrong
}