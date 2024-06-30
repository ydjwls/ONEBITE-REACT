// 1. 대입 연산자
let var1 = 1;

// 2. 상술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
console.log(num8++);  // 해당 선이 지나고 더해지므로 10출력 (후위 연산)
console.log(++num8);  // 해당 선에서 더해지므로 12 출력 (전위 연산)

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자 (== : 타입(자료형)은 비교X)
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 1 < 2;

let comp5 = 2 >= 1;
let comp6 = 1 >= 1;
