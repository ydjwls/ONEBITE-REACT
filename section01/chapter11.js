// 함수 
let area1 = getArea(10, 20); // 10, 20 - 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 호아스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
    // 중첩 함수
    function another(){
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}