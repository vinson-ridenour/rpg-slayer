new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns = []
    },
    attack: function () {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + damage,
      })
      if (this.checkWin()) {
        return
      }

      this.monsterAttacks()
      // if (this.monsterHealth <= 0) {
      //   alert('You win!')
      //   this.gameIsRunning = false
      //   return
      // }
      // this.playerHealth -= this.calculateDamage(5, 12)

      // if (this.playerHealth <= 0) {
      //   alert('You lose!')
      //   this.gameIsRunning = false
      // }
      // this.checkWin() // no need to return after this since nothing else is happening afterwards
    },
    specialAttack: function () {
      let damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster hard for ' + damage,
      })
      if (this.checkWin()) {
        return
      }

      this.monsterAttacks()
      // this.playerHealth -= this.calculateDamage(5, 12)
      // this.checkWin()
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10',
      })
      this.monsterAttacks()
    },
    giveUp: function () {
      // this.startGame()
      // this.turns = []
      this.gameIsRunning = false
    },
    monsterAttacks: function () {
      let damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + damage,
      })
      this.checkWin()
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min) // if 1 or 2, will take the min (3), otherwise will take 4-10
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    },
  },
})

// notes for future additions:
// don't show old log after hitting Give Up
// show heals in green text
// randomize a critical hit fxn
