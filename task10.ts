function sumOfNumericFields(obj: { [key: string]: any }): number {
    let sum = 0;
    for (const key in obj) {
      if (typeof obj[key] === 'number') {
        sum += obj[key];
      }
    }
    return sum;
  }
  
  const example1Object = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
  console.log(sumOfNumericFields(example1Object));

function sortedFieldNamesByValue(obj: { [key: string]: any }): string[] {
const numericFields = Object.keys(obj)
    .filter(key => typeof obj[key] === 'number')
    .sort((a, b) => obj[b] - obj[a]); // Сортировка по убыванию значений

return numericFields;
}


const example2Object = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sortedFieldNamesByValue(example2Object));