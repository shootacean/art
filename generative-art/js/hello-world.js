
/**
 * p5.jsの初期処理
 */
function setup() {
    HelloWorld.setup();
}

/**
 * 共通関数群
 */
const fn = {
    /**
     * ランダムな色を生成する
     *
     * ### Example
     * fill(fn.randomColorRGB(), fn.randomColorRGB(), fn.randomColorRGB());
     *
     * @returns {Number}
     */
    "randomColorRGB": () => {
        return random(0, 255);
    },
};

/**
 * Hello, World!
 */
const HelloWorld = {
    "setup": () => {
        // 背景色を変更
        background(0);
        // 枠線を描画しないように設定する
        noStroke();
        // 円を描画する
        ellipse(25, 25, 50, 50);
    }
};
