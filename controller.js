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
            // dano minimo e dano máximo
            var min = 5
            var max = 11
            // dano padrão
            var damageDefauld = Math.random() * (max - min) + min
            // dano de cada jogador
            var damagePlayer = Math.round(damageDefauld) + 3
            var damageMonster = Math.round(damageDefauld) + 2
            // calculando dano - vida
            this.lifePlayers(damagePlayer, damageMonster)
        },

        cure() {
            
            // dano minimo e dano máximo
            var min = 5
            var max = 11
            // dano padrão
            var damageDefauld = Math.random() * (max - min) + min
            var CureDefauld = Math.random() * (max - min) + min
            // dano de cada jogador
            var damageMonster = Math.round(damageDefauld)
            var curePlayer = Math.round(CureDefauld)
            // calculando dano - vida
            this.lifePlayer = this.lifePlayer - damageMonster + curePlayer

            // vida maxima 100%
            if (this.lifePlayer > 100) {
                this.lifePlayer = 100
            }
        },

        lifePlayers(damagePlayer, damageMonster) {
            this.lifePlayer = this.lifePlayer - damageMonster
            this.lifeMonster = this.lifeMonster - damagePlayer

            console.log ( damagePlayer, damageMonster )
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