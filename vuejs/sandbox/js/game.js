function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialAttack: 0,
            healCounter: 5,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarWidth() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        monsterBarStyle() {
            if (this.monsterHealth >= 60) {
                return 'bg-success';
            } else if (this.monsterHealth >= 20 && this.monsterHealth < 60) {
                return 'bg-warning';
            } else {
                return 'bg-danger';
            }
        },
        playerBarWidth() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        playerBarStyle() {
            if (this.playerHealth >= 60) {
                return 'bg-success';
            } else if (this.playerHealth >= 20 && this.playerHealth < 60) {
                return 'bg-warning';
            } else {
                return 'bg-danger';
            }
        },
        useSpecialAttack() {
            //return this.currentRound % 3 !== 0;
            return this.specialAttack !== 0;
        },
        useHeal() {
            return this.healCounter <= 0;
        },
    },
    watch: {
        specialAttack(value) {
            // console.log(value);
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = 'player';
            }
        },
    },
    methods: {
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialAttack = 0;
            this.healCounter = 5;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.specialAttack = this.specialAttack - 1 < 0 ? 0 : this.specialAttack - 1;

            const damage = getRandomValue(5, 12);

            if (this.monsterHealth - damage < 0) {
                this.monsterHealth = 0;
            } else {
                this.monsterHealth -= damage;
            }

            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);

            if (this.playerHealth - damage < 0) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= damage;
            }

            this.addLogMessage('monster', 'attack', damage);
        },
        specialAttackMonster() {
            this.specialAttack = 3;

            const damage = getRandomValue(10, 25);
            this.monsterHealth -= damage;

            this.addLogMessage('player', 'special-attack', damage);
            this.attackPlayer();
        },
        healPlayer() {
            console.log(this.healCounter);
            if (this.healCounter > 0) {
                const healPoints = getRandomValue(8, 20);

                if (this.playerHealth + healPoints > 100) {
                    this.playerHealth = 100;
                } else {
                    this.playerHealth += healPoints;
                }

                this.healCounter--;
                this.addLogMessage('player', 'heal', healPoints);
                this.attackPlayer();
            }
        },
        surrender() {
            this.playerHealth = 0;
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount('#app');
