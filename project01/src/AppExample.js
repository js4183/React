function AppExample(){

    // 1. 사용자에게 이름을 입력 받아준다
    // prompt ('이름을 말해주세요!')
    let name = prompt("이름을 입력해주세요!")
    // 2. 현재 날짜를 가지고 올 것
    // 현재 몇월? getMonth()
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let mon = "";
    // 3. 
    // 조건1) 3~5월 : 봄
    // 조건2) 6~8월 : 여름
    // 조건3) 9~11월 : 가을
    // 조건 4) 12월1,2월 : 겨울
    if(month>=3&&month<=5){
        mon = "봄";
    }else if(month>=6&&month<=8){
        mon = "여름";
    }else if(month>=9&&month<=11){
        mon = "가을";
    }else{
        mon = "겨울";
    }
    return(
        // 결과창
        // 2022.9.27
        // <hr></hr>
        // 000님 지금은 가을입니다. 좋은 하루보내세요!
        <>
        <h1>
            {year}. {month}. {day}.
        </h1>
        <hr/>
        <h4>{name}님 지금은 {mon}입니다. 좋은 하루 보내세요!</h4>
        </>
    )
}

export default AppExample;