export const Notif = {
    check: function () {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
            return console.log(Notification.permission);
    },
    sendNotif: function (title: string, body : string, icon : string, link : string) {
        const notification = new Notification(title, {
            body,
            icon
        })
    return null}
}