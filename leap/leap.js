
function Year(year) {
    this.year = year;
    this.isLeap = function() {
        return ((year % 4) == 0);
    }
}

module.exports  = Year;
