
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
