export const Notif = {
    check: function () { // check if notification permission is granted
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
        return console.log(Notification.permission);
    },
    
    sendNotif: function (title: string, body: string, icon: string, link: string) { // send notification 
        Notif.check();
        const notification = new Notification(title, {
            body,
            icon
        })
        if (link) {
            notification.onclick = function () {
                window.open(link);
            }
        }
        return null
    }
}