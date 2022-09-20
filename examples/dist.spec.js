const { BadwordsFilter } = require("../dist/src");
const badwords = new BadwordsFilter();

console.log(badwords.filter("I'm a badword!"));
console.log(badwords.detect("I'm a badword!"));
badwords.addWords("badword");
console.log(badwords.filter("I'm a badword!"));
console.log(badwords.detect("I'm a badword!"));