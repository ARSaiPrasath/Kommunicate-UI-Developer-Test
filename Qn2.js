function getUrlParameterValue(url, parameter) {
    const urlParams = new URLSearchParams(url);
    value = urlParams.get(`${parameter}`);
    return value;
    }
    //var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
    var url = prompt("Enter the url");
    var params = prompt("Enter the parameter");
    console.log(getUrlParameterValue(url, params));