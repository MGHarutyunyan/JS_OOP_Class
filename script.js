// class Stack{
//     constructor() {
//         this.stack = []
//     }
//     push(number){
//         this.stack.push(number)
//     }
//
//
//     peek (){
//         if(!this.stack.length){
//             return null
//         }
//         return this.stack[this.stack.length-1]
//     }
//
//     sum_of_numbers(){
//         let i = 0
//         if(this.stack.length){
//             this.stack.forEach(res=>{
//                 console.log(res)
//                i+=res
//             })
//
//         }
//         console.log(i)
//     }
//
//
// }
// let mystack = new Stack
// mystack.push(10)
// mystack.push(20)
// mystack.push(30)
// mystack.push(40)
// mystack.push(50)
// mystack.sum_of_numbers()


////////////////////////////////sum_of_minus
// class stack{
//     constructor() {
//         this.Stack = []
//     }
//
//     push(number){
//         this.Stack.push(number)
//     }
//
//
//     sum_of_minus(){
//         let i = 0
//         if(this.Stack.length){
//             this.Stack.forEach(res=>{
//               if(res<0){
//
//                   i += res
//
//               }
//
//             })
//             console.log(i)
//         }
//     }
//
//
// }
//
// let myStack = new stack()
//
// myStack.push(10)
// myStack.push(-10)
// myStack.push(210)
// myStack.push(-15)
// myStack.push(-25)
// myStack.push(15)
// console.log(myStack.Stack)
// myStack. sum_of_minus()


/////////////The arithmetic average /// mijin tvabanakan
//
// class stack{
//
//     constructor() {
//         this.Num = []
//     }
//
//     push(number){
//         this.Num.push(number)
//     }
//
//
//     MyNum_length(){
//
//        if( this.Num.length){
//            return this.Num.length
//        }else {
//            return null
//        }
//     }
//
//
//     The_arithmetic_average(){
//         let  i = 0
//         if(this.Num.length){
//         this.Num.forEach(res=>{
//             i+=res
//         })
//         }
//         return  console.log(i/this.Num.length)
//     }
//
// }
// let MySteack = new stack()
// console.log(MySteack)
// MySteack.push(15)
// MySteack.push(17)
// MySteack.push(3)
// MySteack.push(13)
// MySteack.The_arithmetic_average()


//////////arithmetic mean of minus numbers//մինուսով թվերի միջին թվաբանական
//
// let i = 0
//
// class User {
//
//     constructor() {
//         this.Array = []
//     }
//
//     push(number) {
//         this.Array.push(number)
//     }
//
//     sum_minus() {
//         let a
//         this.Array.forEach(res => {
//
//             if (res < 0) {
//                 i += res
//
//                 a = i / this.Array.length
//
//             }
//
//         })
//         console.log(a)
//
//
//     }
//
// }
//
//
// let myUser = new User()
// myUser.push(1)
// myUser.push(-5)
// myUser.push(-17)
// myUser.push(-25)
// myUser.push(-7)
// myUser.push(12)
// myUser.sum_minus()


// ////  ///մնացորդով բաժանում//division by remainder
// class user {
//     constructor() {
//         this.Array=[]
//     }
//
//     push(number){
//         this.Array.push(number)
//     }
//
//     ///մնացորդով բաժանում//division by remainder
//
//     division_by_remainder(){
//         let result = []
//         if(!this.Array.length){
//             return null
//         }else{
//
//             this.Array.forEach(res=>{
//                 if(res%2===0){
//                     result.push(res)
//                 }
//
//
//             })
//             return console.log(result)
//         }
//     }
//
//
//
// }
//
// let myuser = new user()
//
// myuser.push(1)
// myuser.push(2)
// myuser.push(3)
// myuser.push(4)
// myuser.push(5)
// myuser.push(6)
//
// myuser.division_by_remainder()


////////////////the arithmetic mean of the numbers being divided by the remainder
///////մնացորդով բաժանվող թվերի միջին թվաբանական
// class user {
//     constructor() {
//         this.Array = []
//     }
//
//     push(number) {
//         this.Array.push(number)
//     }
//
//
//     division_by_remainder() {
//         let result = []
//         let i = 0
//         if (!this.Array.length) {
//             return null
//         } else {
//
//             this.Array.forEach(res => {
//                 if (res % 2 === 0) {
//                     result.push(res)
//                 }
//             })
//
//         }
//
//         result.forEach(res => {
//             i += res
//         })
//         let sesultat = i / result.length
//         console.log(sesultat)
//
//
//     }
//
// }
//
// let myuser = new user()
//
// myuser.push(1)
// myuser.push(2)
// myuser.push(3)
// myuser.push(4)
// myuser.push(5)
// myuser.push(6)
// myuser.division_by_remainder()



//////////////array largest member

// class Array_larg{
//     constructor() {
//         this.Array=[]
//     }
//     push(number){
//         this.Array.push(number)
//     }
//
//     large_number(){
//         let x = 0
//         this.Array.forEach(res=>{
//             if(x<res){
//                 x=res
//             }
//         })
//         return console.log(x)
//     }
//
//
//
// }
//
//
// let NuwAray = new Array_larg()
//
// NuwAray.push(2)
// NuwAray.push(23)
// NuwAray.push(144)
// NuwAray.push(15)
// NuwAray. large_number()


