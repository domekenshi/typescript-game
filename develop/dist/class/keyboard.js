export default class Keyboard {
    _key;
    constructor() {
        this._key = {};
        this.watchEvent();
    }
    watchEvent() {
        // keyupイベント
        document.addEventListener("keyup", (e) => {
            this._key[e.key] = false;
            console.log(this._key);
        });
        // keydownイベント
        document.addEventListener("keydown", (e) => {
            this._key[e.key] = true;
            console.log(this._key);
            //規定の動作を解除
            e.preventDefault();
        });
    }
    get up() {
        return this._key["ArrowUp"] === true || this._key["8"] === true;
    }
    get down() {
        return this._key["ArroDown"] === true || this._key["2"] === true;
    }
    get left() {
        return this._key["ArrowLeft"] === true || this._key["4"] === true;
    }
    get right() {
        return this._key["ArrowRight"] === true || this._key["6"] === true;
    }
}
