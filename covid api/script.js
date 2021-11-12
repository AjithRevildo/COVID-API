
function process(){
    let go=document.getElementById("country-name").value;
    console.log(go);

//async function....

    async function process()
    {
    let data=await fetch(`https://api.covid19api.com/dayone/country/${go}`);
    let result=await data.json();
    console.log(result);   
    
    for(var i in result){
        var compute=result[i].Date
        var code=result[i].CountryCode
        var date=result[i].Deaths
        var death=result[i].Confirmed

//document created in html in div

       var div=document.createElement('div');
       
  //innerhtml element can be be gived     

       div.innerHTML=`<div> Date: ${date},CountryCode:${code},Death: ${death},Confirmed cases:${compute}</div> `;
      
  //append the div     

       document.body.append(div);
    }
     
    }
    process();
}