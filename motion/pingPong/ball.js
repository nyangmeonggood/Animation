export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    /*
        vx, vy는 X, Y 좌표값을 움직이는 속도라고 정해주면 됨
    */

    const diameter = this.radius * 2;
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
    /*
        스테이지에 랜덤으로 위치하도록 함수 정의
    */
  }

  draw(ctx, stageWidth, stageHeight, block) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceBlock(block);

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius,
      maxX = stageWidth - this.radius;
    const minY = this.radius,
      maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceBlock(block) {
    const minX = block.x - this.radius,
      maxX = block.maxX + this.radius;
    const minY = block.y - this.radius,
      maxY = block.maxY + this.radius;

    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      const x1 = Math.abs(minX - this.x),
        x2 = Math.abs(this.x - maxX);
      const y1 = Math.abs(minY - this.y),
        y2 = Math.abs(this.y - maxY);
      const min1 = Math.min(x1, x2),
        min2 = Math.min(y1, y2),
        min = Math.min(min1, min2);

      if (min == min1) {
        this.vx *= -1;
        this.x += this.vx;
      } else if (min == min2) {
        this.vy *= -1;
        this.y += this.vy;
      }
    }
  }
}
