new Vue ({
    el: '#matador-de-monstros',

    data: {
        play: false,
        lifePlayer: 100,
        lifeMonster: 100,
        resultGame: false
    },

    computed: {
        result() {
            if (this.lifePlayer <= 0) {
                this.resultGame = true
                this.lifePlayer = 0
                return "JOGADOR PERDEU"
            } else if (this.lifeMonster <= 0) {
                this.resultGame = true
                this.lifeMonster = 0
                return "MONSTRO PERDEU"
            }
        },

        colorLife() {
            console.log('entrou')
            if(this.lifePlayer < 40) {
                return {
                    backgroundColor: '#952323',
                }
            } else if (this.lifeMonster < 40) {
                return {
                    backgroundColor: '#952323',
                }
            } else {
                return {
                    backgroundColor: '#32722D',
                }
            }
        },
    },

    methods: {
        playGame() {
            this.play = !this.play
            this.lifePlayer = 100
            this.lifeMonster = 100
        },

        attack() {
            var damage =  Math.round(Math.random() * (11 - 5) + 5)
            this.lifePlayer = this.lifePlayer  - damage - 3 
            this.lifeMonster = this.lifeMonster - damage
        },

        special() {
            var damage =  Math.round(Math.random() * (11 - 5) + 5)
            this.lifePlayer = this.lifePlayer  - damage - 1
            this.lifeMonster = this.lifeMonster - damage - 3
        },

        cure() {
            var damage = Math.round(Math.random() * (11 - 5) + 5)
            var moreLife = Math.round(Math.random() * (12 - 3) + 3)
            this.lifePlayer = this.lifePlayer + moreLife - damage

            if (this.lifePlayer > 100) {
                this.lifePlayer = 100
            }
        },

        giveUp() {
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.play = !this.play
        },

        close() {
            this.resultGame = false
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.play = !this.play
        }
    }
})