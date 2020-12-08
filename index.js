// let p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('执行完成Promise');
//         resolve('需要返回的数据')
//     }, 2000)
// })
// p.then(res => {
//     console.log('p返回的数据', res);
// })
// console.log('p', p);



// ----------------------------------------------------------

// const PromiseHandle = () => {
//     let p = new Promise(function(resolve, reject) {
//         // 做一些异步操作
//         setTimeout(function() {
//             console.log('执行完成Promise');
//             resolve('执行成功后返回的数据');
//         }, 2000)
//     })
//     return p;
// }

// PromiseHandle().then(data => {
//     console.log(data, 'data');
// })

// // 2s 后执行PromiseHandle函数
// setTimeout(function() {
//     PromiseHandle();
// }, 2000)


// ----------------------------------------------------------
// reject的用法
// const PromiseHandle = () => {
//     let p = new Promise(function (resolve, reject) {
//         // 做一些异步操作
//         setTimeout(function () {
//             const num = Math.ceil(Math.random() * 20);
//             console.log('随机数生成的值：', num)

//             if (num <= 10) {
//                 resolve(num);
//             }
//             else {
//                 reject('数字太于10了即将执行失败回调');
//             }

//         }, 2000)
//     })
//     return p;
// }


// PromiseHandle().then(
//     function(data){
//         console.log('resolved成功回调');
//         console.log('成功回调接受的值：',data);
//     }, 
//     function(reason, data){
//         console.log('rejected失败回调');
//         console.log('失败执行回调抛出失败原因：',reason);
//     }
// );

// // 2s 后执行PromiseHandle函数
// setTimeout(function() {
//     PromiseHandle();
// }, 2000)



// ----------------------------------------------------------
// catch的用法

// const PromiseHandle = () => {
//     let p = new Promise(function (resolve, reject) {
//         // 做一些异步操作
//         setTimeout(function () {
//             const num = Math.ceil(Math.random() * 20);
//             console.log('随机数生成的值：', num)

//             if (num <= 10) {
//                 resolve(num);
//             }
//             else {
//                 reject('数字太于10了即将执行失败回调');
//             }

//         }, 2000)
//     })
//     return p;
// }



// PromiseHandle().then(
//     function(data){
//         console.log('resolved成功回调');
//         console.log('成功回调接受的值：',data);
//     }
// )
// .catch(function(reason, data){
//     console.log('catch到rejected失败回调');
//     console.log('catch失败执行回调抛出失败原因：',reason);
// });	

// 2s 后执行PromiseHandle函数
// setTimeout(function() {
//     PromiseHandle();
// }, 2000)


// ----------------------------------------------------------
// all的用法

// const PromiseHandle1 = () => {
//     let p = new Promise(function (resolve, reject) {
//         // 做一些异步操作
//         setTimeout(function () {
//             const num = Math.ceil(Math.random() * 20);
//             console.log('随机数生成的值：', num)

//             if (num <= 10) {
//                 resolve(num);
//             }
//             else {
//                 reject('数字太于10了即将执行失败回调');
//             }

//         }, 2000)
//     })
//     return p;
// }


// function PromiseHandle2() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
//             console.log('随机数生成的值：', num)
//             if (num <= 10) {
//                 resolve(num);
//             }
//             else {
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//     })
//     return p
// }
// function PromiseHandle3() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
//             console.log('随机数生成的值：', num)
//             if (num <= 10) {
//                 resolve(num);
//             }
//             else {
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//     })
//     return p
// }




// Promise
// .all([PromiseHandle1(), PromiseHandle2(), PromiseHandle3()])
// .then(
//     function (data) {
//         console.log('resolved成功回调');
//         console.log('成功回调接受的值：', data);
//     }
// )
//     .catch(function (reason, data) {
//         console.log('catch到rejected失败回调');
//         console.log('catch失败执行回调抛出失败原因：', reason);
//     });

// 2s 后执行PromiseHandle函数
// setTimeout(function () {
//     PromiseHandle();
// }, 2000)



function promiseClick1() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('2s随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            }
            else {
                reject('2s数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
    return p
}
function promiseClick2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('3s随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            }
            else {
                reject('3s数字太于10了即将执行失败回调');
            }
        }, 3000);
    })
    return p
}
function promiseClick3() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('4s随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            }
            else {
                reject('4s数字太于10了即将执行失败回调');
            }
        }, 4000);
    })
    return p
}

Promise
    .race([promiseClick3(), promiseClick2(), promiseClick1()])
    .then(function (results) {
        console.log('成功', results);
    }, function (reason) {
        console.log('失败', reason);
    });