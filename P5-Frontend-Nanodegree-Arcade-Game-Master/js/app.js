var fixed = {
    START1: [-500, -400, -300, -200, -100],
    START2: [100, 200, 300, 400],
    FAST_SPEED: 300,
    SLOW_SPEED: 100,
    SCREEN_SIZE: 400,
    SCREEN_WIDTH: -90,
    BOY_POS1: 200,
    BOY_POS2: 400,
    LIVES: 3,
    KEY: 400,
    UP: 70,
    LEFT: 100,
    UP1:80,

};
var sum;
// Enemies our player must avoid
var Enemy = function(start11, start22) {
    this.sprite = 'images/enemy-bug.png';
    this.x = start11;
    this.y = start22;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < fixed.SCREEN_SIZE) {
        this.x = this.x + this.speed * dt;
    } else {
        this.x = fixed.SCREEN_WIDTH;
        this.speed = this.rivalSpeed();
    }
};
var allEnemies = [
    //new Enemy(0, 30),
    new Enemy(0, 135),
    new Enemy(0, 60),
    new Enemy(0, 200)
];
Enemy.prototype.rivalSpeed = function() {
    this.length = Math.floor((Math.random() * fixed.FAST_SPEED) + fixed.SLOW_SPEED);
    return this.length;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(pos1, pos2) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = pos1;
    this.y = pos2;
};
var player = new Player(200, 400);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.update = function() {
    for (var j = 0; j < allEnemies.length; j++) {
        if ((this.x > allEnemies[j].x - 72) && (this.x < allEnemies[j].x + 72) && (this.y < allEnemies[j].y + 72) && (this.y > allEnemies[j].y - 72)) {
            this.resetP();

        }
    }

};

Player.prototype.resetP = function() {
    this.x = fixed.BOY_POS1;
    this.y = fixed.BOY_POS2;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= fixed.LEFT;
    } else if (key === 'up'){
    if(this.y > fixed.UP) {
        this.y -= fixed.UP1;
    } else {
        this.resetP();
    }
  }
      if (key === 'right' && this.x < fixed.KEY) {
        this.x += fixed.LEFT;
    }  else if (key === 'down' && this.y < fixed.KEY) {
        this.y += fixed.LEFT;
    }

};


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
