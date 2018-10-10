/**
 * ジェネラティブ・アート Processing実践ガイド
 */

/**
 * p5.jsの初期処理
 */
function setup() {
    List_2_2.setup();
}

/**
 * List_2_2
 */
const List_2_2 = {
    /**
     * 初期処理
     */
    setup: function () {
        // 背景を変更
        createCanvas(500, 300);
        smooth();
        background(230, 230, 230);

        const center_x = width / 2;
        const center_y = height / 2;

        stroke(130, 0, 0);

        strokeWeight(4);
        this.writeCross(center_x, center_y);

        strokeWeight(6);
        this.writeCircle(center_x, center_y);
    },
    /**
     * 2本の交差した直線を描く
     */
    writeCross: function (x, y) {
        line(x - 70, y - 70, x + 70, y + 70);
        line(x + 70, y - 70, x - 70, y + 70);
    },
    /**
     * 円を描く
     */
    writeCircle: (x, y) => {
        fill(255, 150);
        ellipse(x, y, 50, 50);
    }
};
