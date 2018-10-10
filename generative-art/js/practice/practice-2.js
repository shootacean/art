/**
 * ジェネラティブ・アート Processing実践ガイド
 */

/**
 * p5.jsの初期処理
 */
function setup() {
    List_2_3.setup();
}

/**
 * p5.jsのフレーム処理
 */
function draw() {
    List_2_3.draw();
}

/**
 * List_2_3
 */
const List_2_3 = {
    /**
     * X座標センター
     */
    cent_x: 0,
    /**
     * Y座標センター
     */
    cent_y: 0,
    /**
     * 直径
     */
    diam: 10,
    /**
     * 初期処理
     */
    setup: function () {
        createCanvas(500, 300);
        frameRate(30);
        smooth();
        background(230, 230, 230);

        this.cent_x = width / 2;
        this.cent_y = height / 2;

        stroke(0);
        strokeWeight(1);
        // noFill();
        fill(255, 25);
    },
    /**
     * フレーム処理
     */
    draw: function () {
        if (this.diam <= 400) {
            // background(180);
            ellipse(this.cent_x, this.cent_y, this.diam, this.diam);
            this.diam += 10;
        }
    }
};
