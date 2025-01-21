function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            bugHealth: 100,
        }
    },

    computed: {
        bugHealthStyles() {
          return {width: this.bugHealth + '%'}
        },

        playerHealthStyles() {
            return {width: this.playerHealth + '%'}
        },
    },

    methods: {
        ourKick() {
            const kickValue = getRandomValue(5, 12);
            this.bugHealth -= kickValue;
            this.bugKick();
        },
        bugKick() {
            const kickValue = getRandomValue(5, 12);
            this.playerHealth -= kickValue;
        },
    }
});

app.mount('#game');