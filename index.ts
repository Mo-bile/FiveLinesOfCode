
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

interface Tile2 {
  isAir(): boolean;
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isPlayer(): boolean;
  isStone(): boolean;
  isFallingStone(): boolean;
  isBox(): boolean;
  isFallingBox(): boolean;
  isKey1(): boolean;
  isLock1(): boolean;
  isKey2(): boolean;
  isLock2(): boolean;

  color(g: CanvasRenderingContext2D) : void
  draw(g : CanvasRenderingContext2D, x : number, y : number) : void;
  isEdible() : boolean;
  isPushable() : boolean;

}

class Air implements Tile2 {
  isAir() { return true; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    //모든 조건문이 false
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){

  }
  isEdible(){
    return true;
  };
  isPushable() { return false; }
}

class Flux implements Tile2 {
  isAir() { return false; }
  isFlux() { return true; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }

  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ccffcc";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#ccffcc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return true
  };
  isPushable() { return false; }
}

class Unbreakable implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return true; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }

  color(g: CanvasRenderingContext2D) {
      g.fillStyle = "#999999";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#999999";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Player implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return true; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }

  color(g: CanvasRenderingContext2D) {
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Stone implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return true; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#0000cc";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#0000cc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return true; }
}

class FallingStone implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return true; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#0000cc";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#0000cc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Box implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return true; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }

  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#8b4513";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#8b4513";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return true; }
}

class FallingBox implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return true; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#8b4513";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#8b4513";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Key1 implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return true; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ffcc00";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Lock1 implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return true; }
  isKey2() { return false; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ffcc00";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Key2 implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return true; }
  isLock2() { return false; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#00ccff";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}

class Lock2 implements Tile2 {
  isAir() { return false; }
  isFlux() { return false; }
  isUnbreakable() { return false; }
  isPlayer() { return false; }
  isStone() { return false; }
  isFallingStone() { return false; }
  isBox() { return false; }
  isFallingBox() { return false; }
  isKey1() { return false; }
  isLock1() { return false; }
  isKey2() { return false; }
  isLock2() { return true; }
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#00ccff";
  }
  draw(g : CanvasRenderingContext2D, x : number, y : number){
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  isEdible(){
    return false;
  };
  isPushable() { return false; }
}



enum RawInput {
  UP, DOWN, LEFT, RIGHT
}

interface Input {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;

  handle(): void;
}

class RIGHT implements Input {
  isRight(): boolean {
    return true
  }
  isLeft(): boolean {
    return false
  }
  isUp(): boolean {
    return false
  }
  isDown(): boolean {
    return false
  }

  handle() {
    moveHorizontal(1);
  }

}
class LEFT implements Input {
  isRight(): boolean {
    return false
  }
  isLeft(): boolean {
    return true
  }
  isUp(): boolean {
    return false
  }
  isDown(): boolean {
    return false
  }
  handle() {
    moveHorizontal(-1);
  }
}
class UP implements Input {
  isRight(): boolean {
    return false
  }
  isLeft(): boolean {
    return false
  }
  isUp(): boolean {
    return true
  }
  isDown(): boolean {
    return false
  }
  handle() {
    moveVertical(-1);
  }
}
class DOWN implements Input {
  isRight(): boolean {
    return false
  }
  isLeft(): boolean {
    return false
  }
  isUp(): boolean {
    return false
  }
  isDown(): boolean {
    return true
  }
  handle() {
    moveVertical(1);
  }
}

let playerx = 1;
let playery = 1;


let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

let map: Tile2[][] 
// = [
  // [2, 2, 2, 2, 2, 2, 2, 2],
  // [2, 3, 0, 1, 1, 2, 0, 2],
  // [2, 4, 2, 6, 1, 2, 0, 2],
  // [2, 8, 4, 1, 1, 2, 0, 2],
  // [2, 4, 1, 1, 1, 9, 0, 2],
  // [2, 2, 2, 2, 2, 2, 2, 2],
// ]
;

function assertExhausted(x : never) : never{
  throw new Error("Unexpected object : " + x);
}
//열거행을 Tile2 객체로 변환 메소드
function transformTile(tile : RawTile){
  switch(tile){
    // 모든 케이스에 return 지정 -> break 생략 여지 없앰
    case RawTile.AIR: return new Air();
    case RawTile.PLAYER: return new Player();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    case RawTile.STONE: return new Stone();
    case RawTile.FALLING_STONE: return new FallingStone();
    case RawTile.BOX: return new Box();
    case RawTile.FALLING_BOX: return new FallingBox();
    case RawTile.FLUX: return new Flux();
    case RawTile.KEY1: return new Key1();
    case RawTile.LOCK1: return new Lock1();
    case RawTile.KEY2: return new Key2();
    case RawTile.LOCK2: return new Lock2();
    default: assertExhausted(tile); //기능을 default 에 두지 않기
  }
}

//맵 전체 매핑하는 메서드
function transformMap(){
  map = new Array(rawMap.length);
  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);
    for (let x = 0; x < rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x]);
    }
  }
}

let inputs: Input[] = [];

// 더이상 호출되지 않으므로 삭제
// function remove2(tile: Tile) {
//   for (let y = 0; y < map.length; y++) {
//     for (let x = 0; x < map[y].length; x++) {
//       if (this === tile) {
//         this = new Air();
//       }
//     }
//   }
// }

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (this.isLock1()) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (this.isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isEdible()) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isPushable())
    && map[playery][playerx + dx + dx].isAir()
    && !map[playery + 1][playerx + dx].isAir()) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey1()) {
    // remove(new Lock());
    removeLock1();
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey2()) {
    // remove(new Lock2());
    removeLock2();
    moveToTile(playerx + dx, playery);
  }
}

function moveVertical(dy: number) {
  if (map[playery + dy][playerx].isEdible()) {
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isPushable()) {
    // remove(new Lock1());
    removeLock1();
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKey2()) {
    // remove(new Lock2());
    removeLock2();
    moveToTile(playerx, playery + dy);
  }
}

function update() {
  handleInputs();
  updateMap();
}

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    current.handle();
    // handleInput(current)
  }
}

// 2. 제거
// function handleInput2(input: Input){
//   input.handle(); // -> 1. 다섯줄 제한 지킬수 있게됨
//   // if (input.isLeft())
//   //   moveHorizontal(-1);
//   // else if (input.isRight())
//   //   moveHorizontal(1);
//   // else if (input.isUp())
//   //   moveVertical(-1);
//   // else if (input.isDown())
//   //   moveVertical(1);
// }

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
}

function updateTile(x: number, y: number) {
  if ((this.isStone() || this.isFallingStone())
    && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if ((this.isBox() || this.isFallingBox())
    && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingBox();
    map[y][x] = new Air();
  } else if (this.isFallingStone()) {
    map[y][x] = new Stone();
  } else if (this.isFallingBox()) {
    map[y][x] = new Box();
  }
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = createGraphics();
  drwaMap(g);
  drawPlayer(g);
}

function drwaMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      map[y][x].draw(g ,x, y);
      // drawTile(g,x,y)

    }
  }
}

// function drawTile(
//   g : CanvasRenderingContext2D,
//   x : number,
//   y : number){

//   // 클래스로 코드 이관-> 한줄로 다끝남
//   map[y][x].draw(g ,x, y);

//   //인라인화
//   // map[y][x].color(g); //인라인화 된 본문
//   // // colorOfTIle(g, x, y);
//   // if (!this.isAir() && this.isPlayer())
//   //   g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
// }



//else if 문 사용위반
// function colorOfTile(g: CanvasRenderingContext2D, y: number, x: number) {
//   map[y][x].color(g);
//   // if (this.isFlux())
//   //   g.fillStyle = "#ccffcc";
//   // else if (this.isUnbreakable())
//   //   g.fillStyle = "#999999";
//   // else if (this.isStone() || this.isFallingStone())
//   //   g.fillStyle = "#0000cc";
//   // else if (this.isBox() || this.isFallingBox())
//   //   g.fillStyle = "#8b4513";
//   // else if (this.isKey1() || this.isLock1())
//   //   g.fillStyle = "#ffcc00";
//   // else if (this.isKey2() || this.isLock2())
//   //   g.fillStyle = "#00ccff";
// }

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}


function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new LEFT());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new UP());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new RIGHT());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new DOWN());
});

