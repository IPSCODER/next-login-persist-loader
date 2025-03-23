export interface getloginTypes {
    email: string;
    password: string;
} 

export interface AsyncThunkConfig {
    baseUrl: string;
    headers: {
      Authorization: string;
    };
  }