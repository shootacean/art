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

        stroke(0, 30);
        line(20,50,480,50);

        stroke(20, 50, 70);
        // let step = 10;
        let step = 1;
        let last_x = -999;
        let last_y = -999;
        let noise_y = random(10);
        let y;

        for (let x = 20; x <= 480; x += step) {
            y = 10 + noise(noise_y) * 80;
            if (last_x > -999) {
                line(x, y, last_x, last_y);
            }
            last_x = x;
            last_y = y;
            // noise_y += 0.1;
            noise_y += 0.03;
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
