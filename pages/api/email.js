import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verifyRecaptcha = async (token) => {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
  ).then((r) => r.json());

  return res.success;
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).send("404");

  const verified = await verifyRecaptcha(req.body["g-recaptcha-response"]);
  if (!verified) {
    res.status(400).json({
      success: false,
      message:
        "Sorry, Google Recaptcha detected suspicious behavior and the form cannot be completed at this time.",
    });
    return;
  }

  const msg = {
    to: "livmarolf@gmail.com", // Change to your recipient
    from: "livmarolf@gmail.com", // Change to your verified sender
    replyTo: req.body.email,
    subject: "Olivia Marolf Website Form Submission",
    text: `Name: ${req.body.name}
Email: ${req.body.email}
Phone number: ${req.body.phoneNumber}

Message:

${req.body.message}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.json({ success: false });
  }
}

/* export const config = {
  api: {
    externalResolver: true,
  },
}; */
