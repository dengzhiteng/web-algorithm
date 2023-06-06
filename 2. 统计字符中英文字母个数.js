//统计字符中英文字母、空格、数字和其它字符的个数
//读取字符串每一项的 unicode 码

let str = "hedsj112 sdf @";
const az_code = [97, 122]
const AZ_code = [65, 90]
const d_code = [48, 57]
const space_code = 32
let letters = 0
let digit = 0;
let space = 0
let others = 0;

for (let i = 0; i < str.length; i++) {
  const unicode = str.charCodeAt(i)
  if (unicode >= 97 && unicode <= 122) {
    letters++;
    continue;
  }
  if (unicode >= 65 && unicode <= 90) {
    letters++;
    continue;
  }
  if (unicode >= 48 && unicode <= 57) {
    digit++;
    continue;
  }
  if (unicode == 32) {
    space++;
    continue;
  }
  others++
}
console.log('letters:', letters, 'digit:', digit, 'space:', space, 'others:', others);
