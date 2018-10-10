
/**
 * p5.jsの初期処理
 */
function setup() {
    HelloWorld.setup();
}

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
