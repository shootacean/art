/**
 * ジェネラティブ・アート Processing実践ガイド
 */

/**
 * p5.jsの初期処理
 */
function setup() {
    List_3_2.setup();
}

/**
 * Y座標がランダムな直線を描く
 * List_3_2
 */
const List_3_2 = {
    /**
     * 初期処理
     */
    setup: function () {
        createCanvas(500, 100);
        background(255);
        strokeWeight(5);
        smooth();

        let step_x = 10;
        let step_y = 10;
        let last_x = 20;
        let last_y = 50;
        let y = 50;

        for (let x = 20; x <= 480; x += step_x) {
            step_y = random(20) - 10;
            y += step_y;
            line(x, y, last_x, last_y);
            last_x = x;
            last_y = y;
        }
    }
};

/**
 * List_3_1
 */
const List_3_1 = {
    /**
     * X座標
     */
    rand_x: 0,
    /**
     * Y座標
     */
    rand_y: 0,
    /**
     * 初期処理
     */
    setup: function () {
        createCanvas(500, 100);
        background(255);
        strokeWeight(5);
        smooth();

        this.rand_x = random(width);
        this.rand_y = random(height);

        stroke(20, 50, 70);

        line(20, 50, this.rand_x, this.rand_y);
    },
};
