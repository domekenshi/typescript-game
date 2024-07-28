/**
 * スクリーンクラス
 */
export default class Screen {
  /**
   * 画面横幅取得
   * @returns 画面横幅
   */
  static get Width(): number {
    return document.body.clientWidth;
  }
  /**
   * 画面縦幅取得
   * @returns 画面縦幅
   */
  static get Height(): number {
    return document.body.clientHeight;
  }
}
