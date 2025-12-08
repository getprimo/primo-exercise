export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

// Simulate a login API call
// Validate if email === 'test@test.com' and password === 'password'
export const loginApi = async (email: string, password: string): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === 'password') {
        resolve({
          token: 'fake-jwt-token-' + Math.random().toString(36).substr(2),
          user: {
            id: '1',
            name: 'John Doe',
            email: email
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

