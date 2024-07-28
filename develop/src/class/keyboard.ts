export default class Keyboard {
  protected _key: Record<string, boolean>;

  constructor() {
    this._key = {};
    this.watchEvent();
  }
  watchEvent(): void {
    // keyupイベント
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this._key[e.key] = false;
      console.log(this._key);
    });
    // keydownイベント
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this._key[e.key] = true;
      console.log(this._key);
      //規定の動作をキャンセル
      e.preventDefault();
    });
  }
  get up(): boolean {
    return this._key["ArrowUp"] === true || this._key["8"] === true;
  }
  get down(): boolean {
    return this._key["ArroDown"] === true || this._key["2"] === true;
  }
  get left(): boolean {
    return this._key["ArrowLeft"] === true || this._key["4"] === true;
  }
  get right(): boolean {
    return this._key["ArrowRight"] === true || this._key["6"] === true;
  }
}
