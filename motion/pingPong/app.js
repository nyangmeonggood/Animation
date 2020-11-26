import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 10);
    this.block = new Block(700, 30, 300, 450);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  /*
    항상 윈도우에 리사이즈 이벤트를 걸어두고 작업하신다고 함
    브라우저는 가변적이기 때문에 이런 작업을 해주는게 나중을 위해서도 편하다
  */

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

window.onload = () => {
  new App();
};

/*
  스크립트로 작업하는 걸 선호한다고 함
  이유는 코드로 전부 작업하기 때문에 제어 및 관리가 용이하기 때문
*/
