//초기 코드
// function deposit(to: string, amount: number)
// {
//     let accountId = database.find(to);
//     database.updateOne(
//         accountId,
//         { $inc: {balance: amount }});
// }

//1단계 : 마지막 실행 메서드에 캡술화 적용
// class Transfer{
//     deposit(to: string, amount: number)
//     {
//         let accountId = database.find(to);
//         database.updateOne(
//             accountId,
//             { $inc: {balance: amount }});
//     }
// }

//2단계 : 생성자에 첫 실행 메서드 호출
// class Transfer{
//     constructor(from: string, amount:number){
//         this.deposit(from, -amount);
//     }

//     deposit(to: string, amount: number){
//         let accountId = database.find(to);
//         database.updateOne(
//             accountId,
//             { $inc: {balance: amount }});
//     }
// }

//3단계 : 개선
class Transfer{
    constructor(from: string, private amount:number){
        this.depositHelper(from, -this.amount);
    }

    deposit(to: string){
        this.depositHelper(to, this.amount);
    }

    //도우미 메서드
    private depositHelper(to: string, amount: number){
        let accountId = database.find(to);
        database.updateOne(accountId, {$inc: {balance: amount }});
    }
    

}