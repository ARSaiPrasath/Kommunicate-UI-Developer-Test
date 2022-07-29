var num = prompt("Enter the number: ");
function reverse(num)
{
    let rev = 0;
    let digit;
    while(num != 0)
    {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num/10);
    }
console.log("Reverse number: "+rev);
}
reverse(num);