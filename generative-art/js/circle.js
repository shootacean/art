let center_x, center_y;

function setup() {

    setupCanvas();

    center_x = width / 2;
    center_y = height / 2;

    let radius = 100;

    // base circle.
    // stroke(0, 30);
    // ellipse(center_x, center_y, radius * 2, radius * 2);
    //
    // draw_circle_with_dot(center_x, center_y, radius, 30);
    // draw_rasen_100(center_x, center_y, 10);

    // Circle.draw(center_x, center_y, 150);
    // Circle.draw_with_dot(center_x, center_y, 150, 12);

}

function draw() {
    OpenClose.draw(center_x, center_y);
}

const Circle = {
    draw: (x, y, radius) => {
        ellipse(x, y, radius, radius);
    },
    draw_with_dot: (x, y, radius, step) => {
        for (let ang = 0; ang <= 360; ang += step) {
            let rad = radians(ang);
            let _x = x + (radius * cos(rad));
            let _y = y + (radius * sin(rad));
            point(_x, _y);
        }
    },
    draw_with_rect: (x, y, radius, step, length, is_fill = false) => {
        if (is_fill) fill(0);
        for (let ang = 0; ang <= 360; ang += step) {
            let rad = radians(ang);
            let _x = x + (radius * cos(rad));
            let _y = y + (radius * sin(rad));
            rect(_x, _y, length, length);
        }
    }
};

const setupCanvas = () => {
    createCanvas(800, 600);
    background(255);

    stroke(20, 50, 70);
    strokeWeight(3);

    frameRate(30);

    smooth();
};

const Effect = {
    blur: (width, height, depth = 100) => {
        noStroke();
        fill(255, depth);
        rect(0, 0, width, height);
    }
};

const OpenClose = {
    radius: 10,
    radius_min: 0,
    radius_max: 300,
    toggle: false,
    noise_scale: 0.05,
    draw: function (base_x, base_y) {

        // background(255);
        Effect.blur(width, height, 120);
        stroke(20, 50, 70);

        // Circle.draw(base_x, base_y, this.radius);
        Circle.draw_with_dot(base_x, base_y, this.radius, 12);
        // Circle.draw_with_rect(base_x, base_y, this.radius, 12, 5);

        if (this.toggle && this.radius >= this.radius_max) {
            this.toggle = false;
            this.noise_scale += 0.05;
            this.radius_max = noise((this.noise_scale * 10) ** 4) * (this.radius_max + 100);
        } else if (!this.toggle && this.radius <= this.radius_min) {
            this.toggle = true;
        }

        if (this.toggle) {
            this.radius += 10;
        } else {
            this.radius -= 10;
        }
    }
};

const draw_rasen_100 = (x, y, radius = 10) => {
    strokeWeight(0.5);
    for (let i = 0; i < 100; i++) {
        let last_x = -999;
        let last_y = -999;
        let radius_noise = random(10);
        let _radius = radius;
        for (let ang = 0; ang <= 1440; ang += 5) {
            radius_noise += 0.05;
            _radius += 0.5;
            let noised_radius = _radius + (noise(radius_noise) * 200) - 100;
            let rad = radians(ang);
            let _x = x + (noised_radius * cos(rad));
            let _y = y + (noised_radius * sin(rad));
            if (last_x > -999) {
                line(_x, _y, last_x, last_y);
            }
            last_x = _x;
            last_y = _y;
        }
    }
};

const draw_rasen = (x, y, radius = 10) => {
    let last_x = -999;
    let last_y = -999;
    let radius_noise = random(10);
    for (let ang = 0; ang <= 1440; ang += 5) {
        radius_noise += 0.4;
        radius += 0.5;
        let noised_radius = radius + (noise(radius_noise) * 200) - 100;
        let rad = radians(ang);
        let _x = x + (noised_radius * cos(rad));
        let _y = y + (noised_radius * sin(rad));
        if (last_x > -999) {
            line(_x, _y, last_x, last_y);
        }
        last_x = _x;
        last_y = _y;
    }
};
