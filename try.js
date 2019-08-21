 var ToDOs= [];
 var x = document.getElementById("TodoInput");

 function myFunction() {
 
 ToDOs.push(x.value);
   var y = "";
  
   for( i=0; i<ToDOs.length; i++){ 

   
    y = y + "<input type='checkbox'>" + ToDOs[i] + "<br/>";
 }
  
 

document.getElementById("demo").innerHTML= y;
} 



