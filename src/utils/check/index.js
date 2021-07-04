
/**
 * 检测是否为手机号
 * returns { Boolean }
 * @param { String } str
 */
function isPhoneNumber(str) {
  var pattern = /^1\d{10}$/;
  return pattern.test(str);
}

/**
 * 检测是否为合格邮箱账号
 * returns { Boolean }
 * @param { String } email
 */
function isEmail(email) {
  var pattern = /^([\w_\.\-])+@([\w\-]+\.)+([\w]{2,10})+$/;
  return pattern.test(email);
}


/**
 * 字符转义
 * returns { String }
 * @param str
 */
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp')
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt')
}

