/*
 * @Author: Umaru 573112924@qq.com
 * @Date: 2023-08-25 16:34:30
 * @LastEditors: Umaru 573112924@qq.com
 * @LastEditTime: 2023-08-28 10:59:08
 * @FilePath: /vite-project/src/types/request.d.ts
 * @Description: 接口类型描述
 */
export type IUserInfo = {
  username: string
  roles: Array<string>
  routes: Array<any>
  permission: Array<string>
}
