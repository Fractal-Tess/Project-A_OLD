import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env';

sgMail.setApiKey(SENDGRID_API_KEY);

const msg: sgMail.MailDataRequired = {
  to: 'vgfractal@gmail.com', // Change to your recipient
  from: 'Jet-Black@jet-black.xyz', // Change to your verified sender
  subject: 'Testing email services',
  templateId: 'd-be3e981e6bd14af6b23731dd18426693'
};

export const testSend = async () => {
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch(error => {
      console.error(error);
    });
};
