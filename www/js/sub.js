function genStar(imgName, sizex, sizey, r_max, r_min, num)
{
    var theta1;
    var theta2;
    var radius1;
    var radius2;
    var tmp;
    // generate star
    var scene = document.querySelector('a-scene');
    for (var i = 0; i < num; i++) {    
        theta1 = random(0, 360);
        theta2 = random(0, 360);
        
        var star = document.createElement('a-image');
        star.setAttribute('src', imgName);
        star.setAttribute('width', sizex);
        star.setAttribute('height', sizey);
        star.setAttribute('look-at', '#target');
        
        radius1 = r_min;
        var y = radius1 * Math.sin(deg2rad(theta1));
        radius2 = radius1 * Math.cos(deg2rad(theta1));
        var x = radius2 * Math.cos(deg2rad(theta2));
        var z = radius2 * Math.sin(deg2rad(theta2));
        var str = String(x) + " " + String(y) + " " + String(z);
        star.setAttribute('position', str);
        scene.appendChild(star);
    }
    
}

function setup() {
    genStar('#star2', '50', '50', 700, 1000, 500);
}

function init() {
    setup();
}