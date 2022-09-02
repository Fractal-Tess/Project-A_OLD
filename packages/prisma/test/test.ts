import { prisma } from '../client/client';
// TOOD: Write test for the database
(async () => {
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: 'mymail@mail.com',
      password: 'password',
      username: 'username'
    }
  });

  const usr = await prisma.user.findFirst({});
  if (usr) console.log('DB test passed');
  else console.log('DB TEST FAILED');
})();
