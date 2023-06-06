// 有一对兔子，从出生后第 3个月起每个月都生一对兔子，小兔子长到第四个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少
// 分析：兔子的规律为数列 1,1,2,3,5,8,13,21....
let arr = [1, 1]
for (let i = 2; i < 12; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr);// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]