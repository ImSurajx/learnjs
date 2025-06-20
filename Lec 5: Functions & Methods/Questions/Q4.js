// Q4. We are given array of marks of students filter out of the marks of students that scored 90+.

let marks = [89, 86, 44, 90, 99];

let scored = marks.filter((student) => {
    return student>=90;
})
console.log(scored);