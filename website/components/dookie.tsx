export const Dookie = {
    set: function (name: string, value: string, days: number) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
    },

    get: function (name: string) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    getAll: function () {
        const cookies = document.cookie.split(";");
        const cookiesList = cookies.map((cookie) => {
            const [name, value] = cookie.split("=");
            return { name, value };
        });
        return cookiesList;
    },

    delete : function(name: string) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        return true;
    },

    deleteAll : function() {
        const cookies = document.cookie.split(";");
        cookies.forEach((cookie) => {
            const [name] = cookie.split("=");
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        });
        return undefined;
    }
}
