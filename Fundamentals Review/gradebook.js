function getAverage(arr) {
    let sum = 0;
    for (const n of arr) {
        sum += n;
    }

    return sum / arr.length;
}

function getGrade(score) {
    if (score == 100)
        return "A+";
    else if (score >= 90)
        return "A";
    else if (score >= 80)
        return "B";
    else if (score >= 70)
        return "C";
    else if (score >= 60)
        return "D";
    else
        return "F";
}

function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade != "F";
}

function studentMsg(scores, score) {
    const average = getAverage(scores);
    const grade = getGrade(score);
    let result = `Class average: ${average}. Your grade: ${grade}. `;
    const isPassed = hasPassingGrade(score);
    result += isPassed ? "You passed the course." : "You failed the course.";
    return result;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getGrade(100));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));