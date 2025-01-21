function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            bugHealth: 100,
            currentRound: 0,
        }
    },

    computed: {
        bugHealthStyles() {
          return {width: this.bugHealth + '%'}
        },

        playerHealthStyles() {
            return {width: this.playerHealth + '%'}
        },

        mayUseSpecialKick() {
            return this.currentRound % 3 !== 0;
        }
    },

    methods: {
        ourKick() {
            this.currentRound++;
            const kickValue = getRandomValue(5, 12);
            this.bugHealth -= kickValue;
            this.bugKick();
        },
        bugKick() {
            const kickValue = getRandomValue(5, 12);
            this.playerHealth -= kickValue;
        },
        specialKick() {
            this.currentRound++;
            const kickValue = getRandomValue(10, 25);
            this.bugHealth -= kickValue;
            this.bugKick();
        }
    }
});

app.mount('#game');