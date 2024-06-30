function returnFalse() {
    console.log("False 함수");
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
}

// 단락평가 : 앞에서 이미 결과를 알기에 뒤에까지 가지 않는다 
// => "False 함수" 만 출력 
console.log(returnFalse() && returnTrue())

// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음"); // T||T이면 앞에 Truesy한 값 출력
}

printName(); // person의 값이 없음
printName({name: "양어진"}); // 양어진 