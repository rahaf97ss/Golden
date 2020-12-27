var username = getvalidationinformation(username , ' please insert your name.. ')

var userage = getvalidationinformation(userage , ' please insert your age ')

var time = getvalidationinformation (time , 'please insert the time now.. ')

displaycustomizedmessage( username, userage , time);

function takeuserinput(message){
    return prompt(message)
}

function displaycustomizedmessage(username, userage, time){
    alert(' Hello '+username+ ' your age is '+ userage+ ' and the time is '+ time);
    }
function getvalidationinformation(userinput, message){
    while(userinput === undefined || userinput === ''|| userinput === null){
        userinput=takeuserinput(message);
    }
    return userinput;
}
