new Vue ({
    el: '#matador-de-monstros',

    data: {
        play: false,
        lifePlayer: 100,
        lifeMonster: 100,
        damageCurrentPlayer: 0,
        damageCurrentMonster: 0,
        resultGame: false
    },

    computed: {
        //OK
        result() {
            if (this.lifePlayer <= 0) {
                this.resultGame = true
                this.lifePlayer = 0
                return "VOCÊ PERDEU"
            } else if (this.lifeMonster <= 0) {
                this.resultGame = true
                this.lifeMonster = 0
                return "MONSTRO PERDEU"
            }
        },

        //OK
        colorLifePlayer() {
            if(this.lifePlayer < 40) {
                return {
                    backgroundColor: '#952323',
                }
            } else{
                return {
                    backgroundColor: '#32722D',
                }
            }
        },

        //OK
        colorLifeMonster() {
            
            if(this.lifeMonster < 40) {
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
        //OK
        playGame() {
            this.play = !this.play
            this.lifePlayer = 100
            this.lifeMonster = 100
        },

        
        attack() {
            // dano minimo e dano máximo
            var min = 5
            var max = 11
            // dano padrão
            var damageDefauld = Math.random() * (max - min) + min
            // dano de cada jogador
            var damagePlayer = Math.round(damageDefauld)
            var damageMonster = Math.round(damageDefauld) +3
            // calculando dano - vida
            this.lifePlayers(damagePlayer, damageMonster)
        },

        special() {
            var damage =  Math.round(Math.random() * (11 - 5) + 5)
            this.lifePlayer = this.lifePlayer  - damage - 1
            this.lifeMonster = this.lifeMonster - damage - 3

            this.damageCurrentMonster = damage + 1
            this.damageCurrentPlayer = damage + 3
        },

        cure() {
            var damage = Math.round(Math.random() * (11 - 5) + 5)
            var moreLife = Math.round(Math.random() * (12 - 3) + 3)
            this.lifePlayer = this.lifePlayer + moreLife - damage

            if (this.lifePlayer > 100) {
                this.lifePlayer = 100
            }

            this.damageCurrentMonster = damage 
            this.damageCurrentPlayer = moreLife + 3
        },

        lifePlayers(damagePlayer, damageMonster) {
            this.lifePlayer = this.lifePlayer - damageMonster
            this.lifeMonster = this.lifeMonster - damagePlayer
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