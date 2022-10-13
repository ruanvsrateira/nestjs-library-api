import { AES } from 'crypto-js';

export const hashPassword = (password: string): string => {
  const key = 'password@123';

  const passwordEncrypted = AES.encrypt(password, key).toString();

  return passwordEncrypted;
};
