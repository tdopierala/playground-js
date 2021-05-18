const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            increment: 0,
            decrement: 0,
            name: '',
            firstname: '',
            lastname: '',
            //fullname: '',
            submitName: '_default_value_',
            twoWayData: '',
            buttonBlink: false,
            buttonColor1: false,
            buttonColor2: false,
            buttonInterval: null,
            buttonStyle: 'btn-primary',
        }
    },
    computed: {
        computedData() {
            console.log('computedData() execution');

            if(this.twoWayData === '')
                return '';
            
            return this.twoWayData + ' -> from computed properties';
        },
        fullname() {
            console.log('fullname() execution');
            /* if(this.firstname === '' || this.lastname === '') {
                return '';
            } */

            return this.firstname + ' ' + this.lastname;
        }
    },
    watch: {
        /* firstname(value) {
            console.log('firstname watch executed');
            this.fullname = value + ' ' + this.lastname;
        }, */
        /* lastname(value) {
            console.log('lastname watch executed');
            this.fullname = this.firstname + ' ' + value;
        } */
        counter(value) {
            if(value > 50) {
                this.counter = 0;
            }

            if(value < -10) {
                this.counter = 0;
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event, lastName) {
            if(lastName !== undefined && event.target.value !== '') 
                this.name = event.target.value + ' ' + lastName;
            else
                this.name = event.target.value
        },
        submitForm(e) {
            console.log(e);
        },
        enterName(e) {
            e.preventDefault();
            this.submitName = e.target.value;
        },
        outputData() {
            //console.log('outputData() execution');

            if(this.twoWayData === '')
                return '';
            
            return this.twoWayData + ' -> from method';
        },
        toogleButtonBlink($e) {

            if(this.buttonBlink) {
                this.buttonBlink = false;
                clearInterval(this.buttonInterval);
            } else {
                this.buttonBlink = true;
                this.buttonInterval = setInterval(() => this.buttonColor1 = !this.buttonColor1, 500);
            }

            /* switch(button) {
                case 1: this.buttonColor1 = !this.buttonColor1; break;
                case 2: this.buttonColor2 = !this.buttonColor2; break;
            } */
        },
        toogleButtonColor() {
            this.buttonColor2 = !this.buttonColor2;
        },
        shuffleButtonStyle() {
            
            const styles = ['primary', 'danger', 'warning', 'success', 'light'];
            let rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
            this.buttonStyle = 'btn-' + styles[rand];
        }
    }
});

app.mount('#app');