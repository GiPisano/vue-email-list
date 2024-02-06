const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
            loading: false,
        }
    },

    methods: {
        generateMail(){
            const mailRequests = [];
            
            for (let i = 1; i <= 10; i++) {
                const request = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        return response.data.response;
                    });
                    this.loading = true;
                    mailRequests.push(request);
            }

            Promise.all(mailRequests)
                .then((mails) => {
                    this.mails = mails;
                    this.loading = false;
                });
        }
    },

    created() {
        this.generateMail();
    }

}).mount('#app')




