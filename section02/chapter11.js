console.log(1);

setTimeout(()=>{
    console.log(2);
}, 3000);   // 1 3 출력되고 잠시후 2 출력(콜백함수 호출) => 비동기적으로 작동

console.log(3);