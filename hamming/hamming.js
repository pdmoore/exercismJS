function Hamming() {
    this.compute = function(left, right) {
        if (left.length !== right.length) {
            throw "DNA strands must be of equal length.";
        }

        var count = 0;
        for (i = 0; i < left.length; i++) {
            if (left.charAt(i) !== right.charAt(i)) count++;
        }

        return count;
    }
}

module.exports = Hamming;
