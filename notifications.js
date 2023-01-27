

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}



ready(() => { 
/* Do things after DOM has fully loaded */ 
    
    let showAsUndread = true;
    
    let unreadCount = document.querySelector(".msg-count-icon");
    unreadCount.innerText = "3";

    document.querySelector(".mark-as-read-link").addEventListener("click", (e) => { 
        if(showAsUndread){
            let unreadMsgs = document.querySelectorAll(".unread");
            unreadMsgs.forEach(elem =>{ elem.classList.replace("unread","read")});

            let unreadMsgText = document.querySelectorAll(".unread-msg");
            unreadMsgText.forEach(elem => { elem.classList.replace("unread-msg","read-msg")});

            console.log(unreadMsgs);
            
            unreadCount.innerText = "0";

            showAsUndread = false;
        }else{
            let msgs = document.querySelectorAll(".read");
            msgs.forEach(elem => { elem.classList.replace("read","unread")});

            let msgText = document.querySelectorAll(".read-msg");
            msgText.forEach(elem => { elem.classList.replace("read-msg","unread-msg")});

            showAsUndread = true;
        }
        
    });
});
