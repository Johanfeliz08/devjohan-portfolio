import { Resend } from 'resend';

const resend = new Resend('re_L5yeZ67r_8bQABxNSERFEa8PdzB8eLSwA');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['johanefelizu@gmail.com'],
    subject: 'Hi front backend',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();