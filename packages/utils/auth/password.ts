import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string) => {
  console.time('salt');
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  console.time('salt');

  const hashPass = await bcrypt.hash(password, salt);
  return hashPass;
};
