function areaAndVolumeCalculator(are, voll, input) {
    let objects = JSON.parse(input);

    function calc(obj) {
        let calcArea = Math.abs(are.call(obj));
        let calcVol = Math.abs(voll.call(obj));
        return {area: calcArea, volume: calcVol}
    }

    return objects.map(calc);
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(areaAndVolumeCalculator(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'));