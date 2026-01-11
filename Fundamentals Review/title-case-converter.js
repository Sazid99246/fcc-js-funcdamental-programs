function titleCase(str) {
    return str.split(" ").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));