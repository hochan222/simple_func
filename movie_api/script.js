// http://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"

function status(response) {
    /* Err Handling */
    console.log(response.status + " " + response.statusText);
    return Promise.resolve(response)
}

function parseText(res) {
    return res.text()
}

function getBody(data) {
    var result = JSON.parse(data).boxOfficeResult;

    // console.log(result.boxofficeType)
    for (let i=0; i<result.dailyBoxOfficeList.length; i++)
    {
        document.getElementById("boxofficeType").innerText += result.dailyBoxOfficeList[i]["movieNm"] + '\n';
    }
}

fetch(url)
.then(status)
.then(parseText)
.then(getBody)