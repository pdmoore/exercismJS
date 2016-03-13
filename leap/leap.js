
function Year(year) {
    this.year = year;
    this.isLeap = function() {
        return false;
    }
}

module.exports  = Year;
