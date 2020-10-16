 //click button
 // read values
 // push values to array
 // return the sum or reduce or total 
var array=[];
 $("#bt1").click(function(){
array.push($("#bt1").val());
 });

$("#bt2").click(function(){
array.push($("#bt2").val());
});

 $("#bt3").click(function(){
array.push($("#bt3").val());
 });

 $("#bt4").click(function(){
array.push($("#bt4").val());
 });
$("#bt5").click(function(){
array.push($("#bt5").val());
 });
$("#bt6").click(function(){
array.push($("#bt6").val());
 });


var total=0;
function arr(array1){
   for (var i=0;i<array1.length;i++){
    total=total+parseInt(array[i]);
  }
  return total;
}

$("#f").click(function(){
  alert("$"+total)
});