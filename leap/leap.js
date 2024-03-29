
function Year(year) {
    this.year = year;
    this.isLeap = function() {
        var divisibleBy4 = ((year % 4) == 0);
        var divisibleBy100 = ((year % 100) == 0);
        var divisibleBy400 = ((year % 400) == 0);
        return divisibleBy400 || (divisibleBy4 && !divisibleBy100);
    }
}

module.exports  = Year;
