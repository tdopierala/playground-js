const app = Vue.createApp({
    data() {
        return {
            goalValue: '',
            goals: [],
            person: {
                firstname: 'Max',
                surname: 'Miller',
                gender: 'male',
                age: 33,
                city: 'Berlin',
                country: 'Germany'
            },
        }
    },
    methods: {
        addGoal() {
            if(this.goalValue !== '') {
                this.goals.push(this.goalValue);
                this.goalValue = '';
            }
        },
        removeGoal(idx) {
            //console.log(idx);
            this.goals.splice(idx, 1);
        }
    }
});

app.mount('#app');