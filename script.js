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

module.exports = formatNumber;