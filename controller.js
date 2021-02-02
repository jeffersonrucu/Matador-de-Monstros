new Vue ({
    el: '#matador-de-monstros',

    data: {
        play: false,
        resultGame: false,
        lifePlayer: 100,
        lifeMonster: 100,
        logs: []
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
            this.logs = []
        },

        //OK
        attack() {
            //tipo de ataque
            var attackPlayer = 'atacou'
            var attackMonster = 'atacou'
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
            // jogando no historico
            this.logsPlayers(damagePlayer, damageMonster, attackPlayer, attackMonster, 'Jogador', 'Monstro')
        },

        //OK
        special() {
            //tipo de ataque
            var attackPlayer = 'atacou'
            var attackMonster = 'atacou'
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
            // jogando no historico
            this.logsPlayers(damagePlayer, damageMonster, attackPlayer, attackMonster, 'Jogador', 'Monstro')
        },

        //OK
        cure() {
            //tipo de ataque
            var attackPlayer = 'curou'
            var attackMonster = 'atacou'
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
            // jogando no historico
            this.logsPlayers(curePlayer, damageMonster, attackPlayer, attackMonster, 'Jogador', 'Monstro')
        },

        //OK
        lifePlayers(damagePlayer, damageMonster) {
            this.lifePlayer = this.lifePlayer - damageMonster
            this.lifeMonster = this.lifeMonster - damagePlayer
        },

        logsPlayers(valueP, valueM, typeAttackP, typeAttackM, nameP, nameM){ 
            this.logs.unshift({valueP, valueM, typeAttackP, typeAttackM ,nameP, nameM})
        },

        //OK
        giveUp() {
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.play = !this.play
            this.logs = []
        },

        //OK
        close() {
            this.resultGame = false
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.play = !this.play
            this.logs = []
        }
    }
})