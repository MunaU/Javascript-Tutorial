function checkage()
{
    var userType;
    var age=21
    if(age < 18){
    userType = 'chied'
}
  else{
 userType = 'adult'
  }
  alert(userType)
}
 function newage()
 {
   var age =21
   var userType = age < 18 ? 'Child' : 'Adult';
   alert(userType)
 }
   function checkday(){
    var d = new Date;
    switch(d.getDay()) {
        case 0:
            alert("Today is Sunday.");
            break;
   }
   switch(d.getDay()) {
    case 1:
        alert("Today is Monday.");
        break;
}
  switch(d.getDay()) {
    case 2:
        alert("Today is Tuesday.");
        break;
}
 switch(d.getDay()) {
    case 3:
        alert("Today is Wendesday.");
        break;
}
  switch(d.getDay()) {
    case 4:
        alert("Today is Thursday.");
        break;
}
switch(d.getDay()) {
    case 5:
        alert("Today is Friday.");
        break;
}
 switch(d.getDay()) {
    case 6:
        alert("Today is Saturday.");
        break;
}
  }
 


