function getAjax(){
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange= function() {
    if(xhttp.readyState==4 &&xhttp.status==200){
      processResult(xhttp);
    }
  };

  xhttp.open("GET","http://localhost/contact16.json",true);
xhttp.send();

function processResult(xhttp){
 var jsonText=xhttp.responseText;
 var itemObject=JSON.parse(jsonText);
 display(itemObject);
}


function display(itemObject){
 var html="";
 html+="<table border='1'>";
   html+="<tr><th>Name</th><th>Conatct</th></tr>";
   for(var i=0;i<itemObject.contactemergency.length;i++){

     html+="<tr>";
   html+="<td>"+itemObject.contactemergency[i].name+"</td>";
   html+="<td>"+ itemObject.contactemergency[i].number+"</td></tr>";

}

   html+="</table>";

   var show=document.getElementById("disp");
   show.innerHTML=html;
}
}


  function Cleardiv(){
    var divclear=document.getElementById("disp");
    divclear.innerHTML="";
  }


  // // 2nd div starts here


    function getAjax1(){
      var xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange= function() {
        if(xhttp.readyState==4 &&xhttp.status==200){
          processResult(xhttp);
        }
      };

      xhttp.open("GET","http://localhost/contact16.json",true);
    xhttp.send();

    function processResult(xhttp){
     var jsonText=xhttp.responseText;
     var itemObject=JSON.parse(jsonText);
     display(itemObject);
    }


    function display(itemObject){
     var html="";
     html+="<table border='1'>";
       html+="<tr><th>Name</th><th>Conatct</th></tr>";
       for(var i=0;i<itemObject.crime.length;i++){

         html+="<tr>";
       html+="<td>"+itemObject.crime[i].name+"</td>";
       html+="<td>"+ itemObject.crime[i].number+"</td></tr>";

    }

       html+="</table>";

       var show=document.getElementById("demo1");
       show.innerHTML=html;
    }
    }


      function Cleardiv1(){
        var divclear=document.getElementById("demo1");
        divclear.innerHTML="";
      }



   //3rd div starts Here
   function getAjax2(){
     var xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange= function() {
       if(xhttp.readyState==4 &&xhttp.status==200){
         processResult(xhttp);
       }
     };

     xhttp.open("GET","http://localhost/contact16.json",true);
   xhttp.send();

   function processResult(xhttp){
    var jsonText=xhttp.responseText;
    var itemObject=JSON.parse(jsonText);
    display(itemObject);
   }


   function display(itemObject){
    var html="";
    html+="<table border='1'>";
      html+="<tr><th>Name</th><th>Conatct</th></tr>";
      for(var i=0;i<itemObject.networkproviders.length;i++){

        html+="<tr>";
      html+="<td>"+itemObject.networkproviders[i].name+"</td>";
      html+="<td>"+ itemObject.networkproviders[i].number+"</td></tr>";

   }

      html+="</table>";

      var show=document.getElementById("demo2");
      show.innerHTML=html;
   }
   }


     function Cleardiv2(){
       var divclear=document.getElementById("demo2");
       divclear.innerHTML="";
     }

  // //4th div starts here

  function getAjax3(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function() {
      if(xhttp.readyState==4 &&xhttp.status==200){
        processResult(xhttp);
      }
    };

    xhttp.open("GET","http://localhost/contact16.json",true);
  xhttp.send();

  function processResult(xhttp){
   var jsonText=xhttp.responseText;
   var itemObject=JSON.parse(jsonText);
   display(itemObject);
  }


  function display(itemObject){
   var html="";
   html+="<table border='1'>";
     html+="<tr><th>Name</th><th>Conatct</th></tr>";


       html+="<tr>";
     html+="<td>"+itemObject.vatrefund.name+"</td>";
     html+="<td>"+ itemObject.vatrefund.number+"</td></tr>";



     html+="</table>";

     var show=document.getElementById("demo3");
     show.innerHTML=html;
  }
  }


    function Cleardiv3(){
      var divclear=document.getElementById("demo3");
      divclear.innerHTML="";
    }
