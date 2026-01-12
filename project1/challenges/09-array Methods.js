//separate file with data 10-data call first in index.html
// have access to students array from data file

const updatedStudents = students.map(function(student){
   // console.log(student);
   student.role = 'student';
   return student;
});
// map iterates over and keeps original array and adds new item
//console.log(updatedStudents);

const highScores = students.filter(function(student){
    // if (student.score >= 80){
    //     return student;
    // };
    // if (student.score >= 80) return student;
    return student.score >= 80;
});
//console.log(highScores);

const specificId = students.find(function(person){
    return person.id === 2;
});
//console.log(specificId);

const specificName = students.find(function(student){
    return student.name === 'maria';
});
//console.log(specificName);

//sum up all student.score values with reduce
//divide by the length of the students array
//assign to averageScore and log
const averageScore = students.reduce(function(scoresTotal, student){
    //console.log(student);
    //console.log(scoresTotal);
    return scoresTotal + student.score;   
}, 0) / students.length;

// console.log(averageScore);

const subject ='art';
const total ={};
total[subject] = 'some value';
//console.log(total);


const survey =  students.reduce(function(survey, student){
    //console.log(student.favouriteSubject);
    const favSubject = student.favouriteSubject;
    if (survey[favSubject]){
        //survey[favSubject] = survey[favSubject] + 1;
        survey[favSubject]++
    } else {
        survey[favSubject] = 1;
    }
    return survey;
}, {});

console.log(survey);