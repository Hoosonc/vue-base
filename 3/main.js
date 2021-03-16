const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: '《算法导论》',
        date: '2006-9',
        price: 85,
        num: 1
      },
      {
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59,
        num: 1
      },
      {
        name: '《编程珠算》',
        date: '2008-10',
        price: 89,
        num: 1
      },
      {
        name: '《胡选成的成功之路》',
        date: '2006-3',
        price: 84,
        num: 1
      }
    ]
  },
  filters: {
    showprice(price){
      return '￥'+ price.toFixed(2)
    },
    showtotalprice(sum){
      return '￥' + sum.toFixed(2)
    }
  },
  computed: {
    totalprice(){
      let total = 0;
      // 1、普通的for循环
      /*for(let i = 0 ; i<this.books.length ; i++){
        total += this.books[i].price * this.books[i].num
      }*/
      // 2、for(let i in this.books)
      /*for(let i in this.books){
        total += this.books[i].price * this.books[i].num
      }*/
      // for(let book on this.books)
      /*for(let book of this.books){
       total += book.num * book.price
      }*/
      total = this.books.reduce(function (previousValue,book) {
        return previousValue + book.price*book.num
      } ,0)
      return total
    }
  },
  methods: {
    increment(key){
      this.books[key].num++
    },
    decrement(key){
      this.books[key].num--
    },
    removebook(key){
      this.books.splice(key,1)
    }
  }
});
// 高阶函数的使用
const nums = [10, 20, 50, 111, 150, 200, 75]
// 1、filter()
let newNums = nums.filter(function (n){
  return n<100
});
console.log(newNums)
// 2、map()
let newNums2 = newNums.map(function (n){
  return n*2
})
console.log(newNums2);
// 3、reduce()
let newNums3 = newNums2.reduce(function (preValue,n){
  return preValue + n
},0)
console.log(newNums3);

//组合三个函数
// 法1
let final1 = nums.filter(function (n){
  return n<100
}).map(function (n){
  return n*2
}).reduce(function (preValue,n){
  return preValue + n
},0)
console.log(final1);
// 法二： 箭头函数
let final2 = nums.filter(n => n<100).map(n => n*2).reduce((preValue,n) => preValue + n )
console.log(final2);