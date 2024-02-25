let place : string[] = ["Lahore","Islamabad","Karachi","Multan"]
console.log(place);
console.log([...place].sort());
console.log(place);
console.log([...place].sort().reverse());
console.log(place);
place.reverse();
console.log(place);
place.sort();
console.log(place);
place.sort((a, b) => b.localeCompare(a));
console.log(place);