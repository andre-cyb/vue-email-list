Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {

        mailList: [],
        pendingRequests: 0,
        mailCreated: "",


    },
    methods: {
        generateMailOnClick() {
            let urlMail = "https://flynn.boolean.careers/exercises/api/random/mail";
            this.mailList = [];
            this.pendingRequests = 0;

            for (let i = 0; i < 10; i++) {
                axios.get(urlMail).then((prova) => {
                    let mail = prova.data.response;
                    console.log(mail);
                    this.mailCreated = mail;
                    this.mailList.push(mail);

                    this.pendingRequests++;
                });

            }
            console.log(this.requestCounter);

        }
    },


});