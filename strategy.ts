// // 초기 코드
// // 최솟값 찾는 일괄처리 프로세서
// class ArrayMinium{
//     constructor(private accumulator : number){

//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//             if(this.accumulator > arr[i])
//                 this.accumulator = arr[i];
//         return this.accumulator;
//     }
// }

// class ArraySum{
//     constructor(private accumulator : number){
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.accumulator += arr[i];
//         return this.accumulator;
//     }
// }

// 1 메서드 추출
// class ArrayMinium{
//     constructor(private accumulator : number){

//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//         this.processElement(arr[i]);

//     return this.accumulator;
//     }
//     processElement(e : number){
//         if(this.accumulator > e)
//             this.accumulator = e;
//     }
// }

// class ArraySum{
//     constructor(private accumulator : number){
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.accumulator += arr[i];
//         return this.accumulator;
//     }
//     processElement(e : number){
//         this.accumulator += e;
//     }
// }

// 2. 새로운 클래스 만들기
// class MiniumProcessor{
// }
// class SumProcesssor{

// }

// // 3. 생성자에 새로운 클래스를 초기화 함
// class ArrayMinium{
//     private processor: MiniumProcessor;
//     constructor(private accumulator : number){
//         this.processor = new MiniumProcessor();
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//         this.processElement(arr[i]);

//     return this.accumulator;
//     }
//     processElement(e : number){
//         if(this.accumulator > e)
//             this.accumulator = e;
//     }
// }

// class ArraySum{
//     private processor: SumProcesssor;
//     constructor(private accumulator : number){
//         this.processor = new SumProcesssor();
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.accumulator += arr[i];
//         return this.accumulator;
//     }
//     processElement(e : number){
//         this.accumulator += e;
//     }
// }

// // 4. 메서드를 각각 MiniumProcessor, SumProcesssor로 옮김
// class MiniumProcessor{
//     processElement(e : number){
//         if(this.accumulator > e)
//             this.accumulator = e;
//     }
// }
// class SumProcesssor{
//     processElement(e : number){
//         this.accumulator += e;
//     }
// }

// class ArrayMinium{
//     private processor: MiniumProcessor;
//     constructor(private accumulator : number){
//         this.processor = new MiniumProcessor();
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//         this.processElement(arr[i]);

//     return this.accumulator;
//     }
//     processElement(e : number){
//         this.processor.processElement(e);
//     }
// }

// class ArraySum{
//     private processor: SumProcesssor;
//     constructor(private accumulator : number){
//         this.processor = new SumProcesssor();
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.accumulator += arr[i];
//         return this.accumulator;
//     }
//     processElement(e : number){
//         this.processor.processElement(e);
//     }
// }


// 5. 두 경우 모두 accumulator 필드에 의존하므로 다음단계 수행함
// a. accumulator 필드를 MiniumProcessor, SumProcesssor 클래스로 옮기고 접근자를 만듬
// b. 새로운 접근자를 사용해서 원래 클래스에 발생하는 오류를 바로잡음
// class MiniumProcessor{
//     constructor(private accumulator : number){
//     }
//     processElement(e : number){
//         if(this.accumulator > e)
//             this.accumulator = e;
//     }
//     getAaccumulator(){
//         return this.accumulator;
//     }
// }
// class SumProcesssor{
//     constructor(private accumulator : number){
//     }
//     processElement(e : number){
//         this.accumulator += e;
//     }
//     getAaccumulator(){
//         return this.accumulator;
//     }
// }

// class ArrayMinium{
//     private processor: MiniumProcessor;
//     constructor(accumulator : number){
//         this.processor = new MiniumProcessor(accumulator);
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//             this.processElement(arr[i]);

//         return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
//     }
//     processElement(e : number){
//         this.processor.processElement(e);
//     }
// }

// class ArraySum{
//     private processor: SumProcesssor;
//     constructor(accumulator : number){
//         this.processor = new SumProcesssor(accumulator);
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.processor.processElement(arr[i]);

//         return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
//     }
//     processElement(e : number){
//         this.processor.processElement(e);
//     }
// }

// 7 메서드 인라인화를 사용해서 1단계의 추출을 반대로 함
// class MiniumProcessor{
//     constructor(private accumulator : number){
//     }
//     processElement(e : number){
//         if(this.accumulator > e)
//             this.accumulator = e;
//     }
//     getAaccumulator(){
//         return this.accumulator;
//     }
// }
// class SumProcesssor{
//     constructor(private accumulator : number){
//     }
//     processElement(e : number){
//         this.accumulator += e;
//     }
//     getAaccumulator(){
//         return this.accumulator;
//     }
// }

// class ArrayMinium{
//     private processor: MiniumProcessor;
//     constructor(accumulator : number){
//         this.processor = new MiniumProcessor(accumulator);
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//             this.processor.processElement(arr[i]);

//         return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
//     }
//     // processElement(e : number){
//     //     this.processor.processElement(e);
//     // }
// }

// class ArraySum{
//     private processor: SumProcesssor;
//     constructor(accumulator : number){
//         this.processor = new SumProcesssor(accumulator);
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//                 this.processor.processElement(arr[i]);

//         return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
//     }
//     // processElement(e : number){
//     //     this.processor.processElement(e);
//     // }
// }
/**

다른 부분임

**/

// 구현에서 인터페이스 추출

// class ArrayMinium{
//     private processor: MiniumProcessor;
//     constructor(accumulator : number){
//         this.processor = new MiniumProcessor(accumulator);
//     }
//     process(arr : number[]){
//         for(let i = 0 ; i < arr.length ; i++)
//             this.processor.processElement(arr[i]);

//         return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
//     }
//     // processElement(e : number){
//     //     this.processor.processElement(e);
//     // }
// }



class BatchProcessor{
    // private processor: ElementProcesssor;
    constructor(private processor : ElementProcesssor){
        // this.processor = new SumProcesssor(accumulator); //인터페이스 대신 클래스를 인스턴스화
    }
    process(arr : number[]){
        for(let i = 0 ; i < arr.length ; i++)
            this.processor.processElement(arr[i]);
        return this.processor.getAaccumulator(); //접근자 사용해서 필드 획득
    }
    // processElement(e : number){
    //     this.processor.processElement(e);
    // }
}

interface ElementProcesssor{
    processElement(e : number): void;
    getAaccumulator() : number;
}

class SumProcesssor implements ElementProcesssor{
    constructor(private accumulator : number){
    }
    processElement(e : number){
        this.accumulator += e;
    }
    getAaccumulator(){
        return this.accumulator;
    }
}

class MiniumProcessor implements ElementProcesssor{
    constructor(private accumulator : number){
    }
    processElement(e : number){
        if(this.accumulator > e)
            this.accumulator = e;
    }
    getAaccumulator(){
        return this.accumulator;
    }
}

