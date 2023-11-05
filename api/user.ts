import type { SearchParameters } from 'ofetch'
import type { UserInfo } from '~/types/user'

/**
 *
 * @param username
 * @param params
 */
export function getUserInfo(username: string, params?: SearchParameters) {
  return request<UserInfo>(`/github/users/${username}`, {
    method: 'get',
    params,
  })
}
