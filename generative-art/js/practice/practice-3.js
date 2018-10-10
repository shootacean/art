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

        const step = 10;
        let border_x = 20;
        let border_y = 10;
        let last_x = -999;
        let last_y = -999;
        let y = 50;

        for (let x = border_x; x <= width - border_x; x += step) {
            y = border_y + random(height - 2 * border_y);
            if (last_x > -999) {
                line(x, y, last_x, last_y);
            }
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
