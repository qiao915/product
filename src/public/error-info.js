import {
  Message
} from 'element-ui'

let errorList = {
  'not_empty': '不能为空',
  'dissatisfy-password-rule': '不满足密码规则，字母和数字组合最少8个字符',
  'mismatch-newpassword-comfirmpassword': '新密码与确认密码不一致。',
  'dissatisfy-email-rule': '邮箱格式有误',
  'dissatisfy-tenantcode-rule': '企业号格式有误：需要字母或数字，最少5个字符、最多12个字符。',
  'no-found-tenant': '找不到此企业号',
  'already-exists-tenantcode': '企业号已被占用',
  'no-found-tenantuser': '找不到该用户',
  'already-email-confirmed': '邮箱已激活',
  'invalid-email-confirmed-token': '无效的邮箱激活Token',
  'already-bind-PhoneNumber': '手机号已经完成绑定，如果需要变更手机号，请选择变更手机号流程',
  'already-exists-subaccount': '该邮箱已添加',
  'not-match-phoneNumber-and-code': '验证码和手机号不匹配,验证失败',
  'already-set-password': '已设置密码,请登录',
  'password-mismatch': '密码错误',
  'phoneNumber-unconfirmed': '未绑定手机号',
  'email-not-confirmed': '邮箱未激活',
  'already-exists-subservicemodule': '子服务已存在',
  'no-found-tenantgroup': '找不到此员工分组',
  'already-exists-tenantgroup': '员工分组名称已存在',
  'not-allow-edit-tenantOwner': '不允许修改主账号',
  'least-select-one': '最少选择一条权限',
  'already-exists-user': '该邮箱已被使用',
  'no-found-user': '找不到此用户',
  'no-found-group': '找不到此用户分组',
  'already-exists-group': '此分组已存在',
  'disallowed-update-group': '系统分组不允许操作'
}

export function handleError (err) {
  let isExit = ''
  for (let key in errorList) {
    if (err.errors[key]) {
      isExit = errorList[key]
      break
    }
  }
  if (isExit) {
    Message.error({
      message: isExit,
      customClass:'messageErr',
      type: 'error'
    })
  }
}

export default errorList
