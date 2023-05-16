// ДЗ 16. Array compress
// Написать программу, которая сжимает серии массива, 
// состоящего из единиц и нулей по следующему принципу, например:
// массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1] преобразуется в [4,7,2,4]
// массив [0,0,1,1,1,1,0,1,1,1] преобразуется в [2,4,1,3]


let arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];

function getCompress() {
  let result = [1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      result[result.length - 1]++;
    } else {
      result.push(1);
    }
  }

  return result;
}

console.log('ДЗ 16. Array compress')
console.log(getCompress());

// var a = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1]
// var b = a.reduce((r,x,i,a) => ((x===a[i-1] ? ++r[r.length-1] : r.push(1)), r), [])
// console.log(b)


// ДЗ 17. массив объектов
// Создать массив объектов. В каждом объекте должна содержаться информация 
// о человеке: имя, пол, год рождения. Объектов должно быть 5-10.
// посчитать средний возраст
// определить представителей какого пола больше вывести ответы в консоль

let somePersons = [
  { name: 'Alex', gender: 'male', birthday: 2000 },

  { name: 'Angelina', gender: 'female', birthday: 2002 },

  { name: 'Luci', gender: 'female', birthday: 2005 },

  { name: 'Bob', gender: 'male', birthday: 1998 },

  { name: 'Casandra', gender: 'female', birthday: 1999 },
];

let currentYear = new Date().getFullYear();
let totalAge = 0;
let genderMale = 0;
let genderFemale = 0;
let whoMore

for (let i = 0; i < somePersons.length; i++) {
  if (somePersons[i].gender === 'male') {
    genderMale++;
  }

  if (somePersons[i].gender === 'female') {
    genderFemale++;
  }

  totalAge += currentYear - somePersons[i].birthday;
}

if (genderMale > genderFemale) {
  whoMore = 'Male';
}

if (genderMale < genderFemale) {
  whoMore = 'Female';
}

if (genderMale == genderFemale) {
  whoMore = 'Both'
}

console.log('ДЗ 17. массив объектов')
console.log('Average age: ' + Math.round(totalAge / somePersons.length) );
console.log('Which gender is more: ' + whoMore);

// ДЗ 18. Сортировка
// Написать функцию которая сортирует слова в строке по цифре которая
// находится в слове. В рамках данной задачи цифры НЕ могут быть
// двухзначные и больше.
// function sortWords(str) {
//   ??
// }
// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';


function sortOfNumber(sortWords) {
  let arr = sortWords.split(' ');

  arr.sort(function(a,b) {
    return getNumber(a) - getNumber(b);
  })

  return arr.join(' ');
}

function getNumber(str) {
  
    let number = str.split('').filter(function(item){
    return +item >= 0;
    });

    return +number[0];
}

console.log('ДЗ 18. Сортировка')
console.log(sortOfNumber('2Fiona Ig7or J1amila B3ob Ali5ce'));

// function sortOfNumber(sortWords) {
//   let arr = sortWords.split(' ');

//   arr.sort(function(a,b) {
//     return +a.match(/\d/) - +b.match(/\d/);
//   })

//   return arr.join(' ');
// }

// console.log(sortOfNumber('2Fiona Ig7or J1amila B3ob Ali5ce'));
