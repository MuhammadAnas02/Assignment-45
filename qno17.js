var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ["Lahore", "Islamabad", "Karachi", "Multan"];
console.log(place);
console.log(__spreadArray([], place, true).sort());
console.log(place);
console.log(__spreadArray([], place, true).sort().reverse());
console.log(place);
place.reverse();
console.log(place);
place.sort();
console.log(place);
place.sort(function (a, b) { return b.localeCompare(a); });
console.log(place);
