function Hamming() {
    this.compute = function(left, right) {
        var count = 0;
        for (i = 0; i < left.length; i++) {
            if (left.charAt(i) !== right.charAt(i)) count++;
        }

        return count;
    }
}

module.exports = Hamming;
