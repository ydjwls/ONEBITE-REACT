// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three); // 1 2 3

let [one2, two2, three2, four2] = arr;
console.log(one2, two2, three2, four2) // 1 2 3 undefined

// 2. 객체의 구조 분해 할당
let person = {
    name: "양어진",
    age: 27,
    hobby: "보드",
};

let {
    age: myAge,
    hhobby,
    name,
    extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person); // 양어진 27 보드 undefined

