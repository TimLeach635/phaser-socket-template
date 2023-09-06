import Phaser from "phaser";

class TemplateScene extends Phaser.Scene {
  // Simply draw a circle to the screen that can be controlled with WASD or the arrow keys
  playerCircle: Phaser.GameObjects.Arc;
  leftKeys: Phaser.Input.Keyboard.Key[];
  rightKeys: Phaser.Input.Keyboard.Key[];
  upKeys: Phaser.Input.Keyboard.Key[];
  downKeys: Phaser.Input.Keyboard.Key[];
  
  create(): void {
    // Input keys
    this.leftKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
    ];
    this.rightKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
    ];
    this.upKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
    ];
    this.downKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
    ];
    
    // Draw circle
    this.playerCircle = this.add.circle(0, 0, 25, 0xff0000);
  }
  
  update(_: number, delta: number): void {
    const playerSpeed = 300 / 1000;  // pixels per ms
    
    for (let leftKey of this.leftKeys) {
      if (leftKey.isDown) {
        this.playerCircle.setX(this.playerCircle.x - playerSpeed * delta);
        break;
      }
    }
    for (let rightKey of this.rightKeys) {
      if (rightKey.isDown) {
        this.playerCircle.setX(this.playerCircle.x + playerSpeed * delta);
        break;
      }
    }
    for (let upKey of this.upKeys) {
      if (upKey.isDown) {
        this.playerCircle.setY(this.playerCircle.y - playerSpeed * delta);
        break;
      }
    }
    for (let downKey of this.downKeys) {
      if (downKey.isDown) {
        this.playerCircle.setY(this.playerCircle.y + playerSpeed * delta);
        break;
      }
    }
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: new TemplateScene(),
}

new Phaser.Game(config);
