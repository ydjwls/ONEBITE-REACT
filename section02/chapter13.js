const promise1 = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
        const num = 10;

        if(typeof num === 'number') {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다");
        }}, 2000);
});
// then 메서드 -> 성공일 떄 실행
// catch 메서드 -> 실패할 때 실행
// -> 그 후에
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
            const num = 10;
    
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });