// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 -> 현재 지금 시각

let date2 = new Date("1997-01-07"); // 날짜 지정 => 1997/01/07
date2 = new Date(1997, 1, 7, 23, 59, 59) // 시간 까지 지정

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime(); // 1970.01.01 00시 00분 00초부터 지금 현재 시각까지 몇ms 지났는지 반환
let date4 = new Date(ts1); // date4 = date1

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월이 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullTear(2023);
date1.setMonth(2); // 0부터 1월이므로 3월로 수정한것이다
date1.detDate(30);
date1.detHours(23);
date1.detMinutes(59);
date1.detSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간 빼고 날짜만 문구로 출력
console.log(date1.toLocaleString()); // 시간 포함해서 문구로 출력