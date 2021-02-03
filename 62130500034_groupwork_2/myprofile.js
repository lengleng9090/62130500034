const app = {
    data() {
        return {
            firstname: 'Thanapat',
            lastname: 'Loharattanavisit',
            imageurl: './images/profile.jpg',
            age: 20,
            birthday: '08/05/2000',
            caption: 'I like a sandwich.'
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app');