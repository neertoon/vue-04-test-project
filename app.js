function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            bugHealth: 100,
            currentRound: 0,
            winner: null,
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

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.bugHealth <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'bug';
            }
        },

        bugHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'player';
            }
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
        },
        heal() {
            this.currentRound++;
            let heal = getRandomValue(8, 20);
            if (this.playerHealth + heal > 100) {
                return;
            }

            this.playerHealth += heal;
            this.bugKick();
        }
    }
});

app.mount('#game');