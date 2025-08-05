var  userInp = +prompt("Enter any number ranges 1 to  6")
var  num = Math.ceil(Math.random()*7

);
console.log(num);

if(userInp== num && num == 6 && userInp == 6 ){
    document.write('<img src ="dice_6-removebg-preview.png" style = "margin-left:30%;">')
}else if(userInp== num && num == 5 && userInp == 5){
  document.write('<img src ="dice_5-removebg-preview.png" style = "margin-left:30%;">')
}else if(userInp== num && num == 4 && userInp == 4){
  document.write('<img src ="dice_4-removebg-preview.png" style = "margin-left:30%;">')
}else if(userInp== num && num == 3 && userInp == 3){
  document.write('<img src ="dice_3-removebg-preview.png" style = "margin-left:30%;">')
}else if(userInp== num && num == 2 && userInp == 2){
  document.write('<img src ="dice_2-removebg-preview.png" style = "margin-left:30%;">')
}else if(userInp== num && num == 1 && userInp == 1){
  document.write('<img src ="dice_1-removebg-preview.png" style = "margin-left:30%;">')
}else{
    document.write('<p style = "color: white;font-size: 30px;  padding-left:30px;">Opps! Try Again....' + '</p>' )
}