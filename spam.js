function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
        function go() {}
        var amt = 1000;
        var cs = false;
        console.log("To set amount, type 'amt = XXXX' into the console. Default is 1000.\nFor consecutive, type 'cs = true' into the console.\nType 'go()' to start");
        function go() {
            var i = amt--;

while(i >= 0){
	if(cs == false){
        var rng = Math.floor((Math.random() * 1000000) + 1);
        const obj = JSON.parse(httpGet("https://fb.blooket.com/c/firebase/id?id="+rng));
        if(obj.success == "true" && obj.isRandomNames == "false"){
            console.log("Full: "+rng);
        }
        if(obj.success == "true" && obj.isRandomNames == "true"){
            console.log("No names: "+rng);
        }
    }
    i--;
}

        }
