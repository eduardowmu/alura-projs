type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string,
  password: string
};

export const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (user.username === sentValue.username && 
          user.password === sentValue.password); 
}

const dbUser = {
  username: 'edu',
  password: '123'
}

const myUser = {
  username: 'edu',
  password: '123',
  /**
   * Lembrando que o typescript não é
   * 100% fortemente tipado como o java.
   */
  enabled: ''
}

console.log(verifyUser(myUser, dbUser));