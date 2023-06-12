// 把下列数组对象按多字段排序，name升序，age降序
let listData = [
  { name: "张三", age: 38, num: 123 },
  { name: "李四", age: 15, num: 678 },
  { name: "王王", age: 16, num: 256 },
  { name: "老六", age: 28, num: 256 },
  { name: "老王", age: 16, num: 789 },
  { name: "大一", age: 23, num: 678 },
  { name: "大二", age: 20, num: 123 },
  { name: "大三", age: 40, num: 989 }
];

listData.sort((a, b) => a.name[0].localeCompare(b.name[0], 'zh-CN') || b.age - a.age);