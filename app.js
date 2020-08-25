new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      let max = 10
      let min = 3
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min) // if 1 or 2, will take the min (3), otherwise will take 4-10
      this.monsterHealth -= damage

      if (this.monsterHealth <= 0) {
        alert('You win!')
        this.gameIsRunning = false
        return
      }

      max = 12
      min = 5
      damage = Math.max(Math.floor(Math.random() * max) + 1, min) // if 1 or 2, will take the min (3), otherwise will take 4-10
      this.playerHealth -= damage

      if (this.playerHealth <= 0) {
        alert('You lose!')
        this.gameIsRunning = false
      }
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
  },
})
