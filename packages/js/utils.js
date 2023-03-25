// 公共方法

let utils = {};

/**
 * 失去焦点时格式化数字
 * @param {*} val 需要格式化的数字
 * @returns 
 */
utils.numberFormat = function (val) {
    //输入非空
    if (val && val != null) {
      let money = String(val).replace(/,/g, "");
      let zeroTest = /[0-9]*?[1-9][0-9]*/;
      // 判断是不是全为零
      if(!zeroTest.test(money)) {
        return "0.00";
      }
      //判断有没有输入'.'
      if (money.includes(".")) {
        let left = money.split(".")[0].replace(/^[0]+/, ''),
          right = money.split(".")[1];
        //判断'.'左边没输或者右边没输
        if (left === "" && right != "") {
          return ("0" + "." + (right.length >= 2 ? right.split("")[0] + right.split("")[1] : right + "0"));
        }
        else if (left != "" && right === "") {
          left = left.split(".")[0].replace(/0*([1-9]\d*|0\.\d+)/, '$1')
          let temp = left.split("").reverse().join("").match(/(\d{1,3})/g);
          return ((Number(money) < 0 ? "-" : "") + temp.join(",").split("").reverse().join("") + ".00");
        }
        else if (left != "" && right != "") {
          let temp = left.split("").reverse().join("").match(/(\d{1,3})/g);
          return ((Number(money) < 0 ? "-" : "") + temp.join(",").split("").reverse().join("") + "." + (right.length >= 2 ? right.split("")[0] + right.split("")[1] : right + "0"));
        }
        else return '0.00'
      } else {
          money = money.split(".")[0].replace(/^[0]+/, '')
          let temp = money.split("").reverse().join("").match(/(\d{1,3})/g);
          return ((Number(money) < 0 ? "-" : "") + temp.join(",").split("").reverse().join("") + ".00");
      }
    } else if (val === 0) {
        return "0.00";
    } else return '';
  }

  /**
   * 金额转大写汉字
   * @param {*} money 
   * @returns 
   */
  utils.numToCny = function(money) {
    // 汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆',
    '柒', '捌', '玖');
    // 基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    // 对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    // 对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    // 整数金额时后面跟的字符
    var cnInteger = '整';
    // 整型完以后的单位
    var cnIntLast = '圆';
    // 最大处理的数字
    var maxNum = 9999999999999999.99;
    // 金额整数部分
    var integerNum;
    // 金额小数部分
    var decimalNum;
    // 输出的中文金额字符串
    var chineseStr = '';
    // 分离金额后用的数组，预定义
    var parts;
    if (money == '') {
        return '';
    }
    // money = parseFloat(money);
    // if (money >= maxNum) {
    //     // 超出最大处理数字
    //     return '';
    // }
    if (money == '0.00' || money == '0.0' || money == '0') {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    // 转换为字符串
    // money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    // if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n == '0') {
            zeroCount++;
        } else {
            if (zeroCount > 0) {
                chineseStr += cnNums[0];
            }
            // 归零
            zeroCount = 0;
            chineseStr += cnNums[parseInt(n)]
                + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
            chineseStr += cnIntUnits[q];
        }
    }
    chineseStr += cnIntLast;
    // }
    // 小数部分
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (let i = 0; i < decLen; i++) {
            let n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}
/**
 * 账号脱敏
 * @param {*} 6212136666668855
 * @returns 6212 13** **** 8855
 */
 utils.acctMiss = function(acct){
    let reg = /^(.{4})(.{2})(?:\d+)(.{4})$/
    return acct.replace(reg, "$1 $2** **** $3")
 }
 /**
  * 根据币种代码找到对应的币种符号
  */
 utils.getSymByCur=function(current){
    if(current=='CNY'){
        return '￥'
    }else if(current=='USD'){
        return '＄'
    }
 }
 //后台返回(yyyymmdd)日期格式化为(yyyy-mm-dd)
utils.returnDateFormat= function(returnDate) {
    if (returnDate == null || returnDate == "") {
        return "";
    }
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    var formatDate = returnDate.replace(pattern, '$1-$2-$3');
    return formatDate;
}

export default utils;