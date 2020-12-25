var username= prompt(' Please enter your name ');
alert(' Hi ' + username + ' welcome to my website ')
console.log(username);

var age= prompt('enter your age')
alert(' your age is ' + age )
console.log(age);

var time = prompt('what time is now?');
if(time<12){
    document.write(' its '+ time +' Good morning ');
}
else if  (time>12 && time <24){
    document.write(' its '+ time + ' Good evening ' );
}
else{
    document.write('something wrong');
}

