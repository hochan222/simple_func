function formatNumber(num)
{
    var i=0;
    var num = String(num);
    var result = "";
  
    while (num[i])
    {
        if (i % 3 == num.length % 3 && i !== 0)
            result += ","+num[i]
        else
            result += num[i]
        i++;
      }
    return result
}

console.log(formatNumber(1000))
console.log(formatNumber(123456))
console.log(formatNumber(1234567))
console.log(formatNumber(12345678))