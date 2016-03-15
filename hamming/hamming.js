function Hamming() {
    this.compute = function(left, right) {
        if (left === right ) {
            return 0;
        } else { 
            return 1;
        }
    }
}

module.exports = Hamming;
