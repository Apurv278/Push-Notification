document.addEventListener('deviceready',callnotify, false)

function callnotify(){
    var push = PushNotification.init({"android":{"senderID":"913380816024"}});
    push.on('registration',function(regID){
        console.log("Registration ID : "+ regID);
    });

    push.on('notification',function(msg){
        alert("title:"+msg.title + "message:"+msg.message);
    });
    push.on('error',function(err){
        console.log("Show Error MSG: " + err);
    });
}