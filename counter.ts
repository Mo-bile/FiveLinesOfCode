// // 초기코드
// let counter = 0;
// function incrementCunter(){
//     counter++;
// }

// function main(){
//     for(let i = 0 ; i < 20 ; i++){
//         incrementCunter();
//         console.log(counter);
//     }
// }

// //1단계 , 2단계


// function main(){
//     for(let i = 0 ; i < 20 ; i++){
//         incrementCunter();
//         console.log(counter);
//     }
// }

// class Counter{
//     private counter = 0;
//     getcounter() {return = 0;}
//     setcounter(c : number){
//         this.counter = c;
//     }
// }

// 3단계
class Counter{
    private counter = 0;
    getCounter() {return 0;}
    setCounter(c : number){
        this.counter = c;
    }
}

function incrementCunter(counter : Counter){
    counter.setCounter(
        counter.getCounter() + 1 //setter로 대체
    )
}

function main(){
    let counter = new Counter();

    for(let i = 0 ; i < 20 ; i++){
        incrementCunter(counter); //인자로 전달되는 가장변수 (이후 만들어줌)
        console.log(counter.getCounter());
    }
}
