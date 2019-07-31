const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emailsString => {
  let cleanedEmailsString = emailsString.trim();
  if (cleanedEmailsString.charAt(cleanedEmailsString.length - 1) == ",") {
    cleanedEmailsString = cleanedEmailsString.substring(
      0,
      cleanedEmailsString.length - 1
    );
  }

  const invalidEmails = cleanedEmailsString
    .split(",")
    .map(email => email.trim())
    .filter(email => !re.test(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};
