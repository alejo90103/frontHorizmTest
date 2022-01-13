export const apiDomain = 'https://horizm.codeals.es/back/public/'

// posts
export const posts = apiDomain + 'api/posts'
export const rating = apiDomain + 'api/rating'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
