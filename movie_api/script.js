url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"

function status(response) {
    console.log(response.status + " " + response.statusText);
    return Promise.resolve(response)
}

function parseText(res) {
    return res.text()
}

function getBody(data) {
    var result = JSON.parse(data).boxOfficeResult;
    var movielist;

    console.log(result.boxofficeType)
    // document.getElementById("boxofficeType").innerText = result.boxofficeType;
    for (let i=0; i<result.dailyBoxOfficeList.length; i++)
    {
        document.getElementById("boxofficeType").innerText += result.dailyBoxOfficeList[i]["movieNm"] + '\n';
    }
    // console.log(result.dailyBoxOfficeList[0]["movieNm"]);
}

fetch(url)
.then(status)
.then(parseText)
.then(getBody)