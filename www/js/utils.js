// This is a JavaScript file
/* 度数法(0-360)からradianへの変換関数 */
function deg2rad( deg ) {
    return (deg * Math.PI / 180);
}

/* minからmaxまでの範囲の乱数を生成 */
function random(min, max)
{
    return Math.random()*(max - min) + min;
}
