
/**
 * Công dụng của Reduce :
 * Tổng hợp tất cả các giá trị của một mảng
 * Tổng các giá trị trong một mảng đối tượng
 * Làm phẳng mảng
 * Đếm các instances của các giá trị trong một đối tượng
 * Nhóm đối tượng theo thuộc tính
 * Các mảng liên kết chứa trong một mảng các đối tượng sử dụng toán tử spread và initialValue
 */
const colors = ['red', 'blue', 'green'];
const tempColor = [];
const result = colors.map((color) => color);
console.log(result.join('-'));

const stringColor = colors.reduce((color, crr) => color.concat('-' + crr));
console.log(stringColor);


var initialValue = 0;
const sum = [{
    x: 1
}, {
    x: 2
}, {
    x: 3
}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x, initialValue
);

console.log(sum)

const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(flattened);

const animals = [{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];
console.log(animals.map((animal, index, animals) => animal.name));


const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, []);
console.log(countedNames);


const people = [{
        name: 'Alice',
        age: 21
    },
    {
        name: 'Max',
        age: 20
    },
    {
        name: 'Jane',
        age: 20
    }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);




const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
const allbooks = friends.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.books], ['Alphabet']);
console.log(allbooks);


/**
 * Xóa các mục trùng lặp trong mảng
 */
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let resultX = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(resultX);


/**
 * Thực thi promise theo tuần tự
 */

let itemIDs = [1, 2, 3, 4, 5].reduce((promise, itemID) => {
    return promise.then(_ => api.deleteItem(itemID));
}, Promise.resolve());

console.log(itemIDs);