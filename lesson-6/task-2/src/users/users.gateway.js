const baseUrl = 'https://api.github.com/users';

// Для получения данных используем URL https://api.github.com/users/USERNAME, где USERNAME - имя искомого пользователя

export function getUserData(userName) {
  return fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.ok) return response.json();
    throw new Error();
  });
}
