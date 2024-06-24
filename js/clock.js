const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date(); //데이트 오브젝트는 이걸 호출하는 당시의 현재 날짜랑 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, '0'); //두자리가 아니면 앞에 0을 붙여줌, padStart는 string이어야 쓸 수 있음
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //00:00:00 표시 안 하고 즉시 함수 호출
setInterval(getClock, 1000);
