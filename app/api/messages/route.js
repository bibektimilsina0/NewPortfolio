
import emailjs from "emailjs-com";

export const POST = async (req, res) => {
  try {
    const { name, email, project } = req.body;

    // Configure EmailJS service details
    const response = await emailjs.send(
      "portfolio",      // Your EmailJS Service ID
      "template_qtrgfft",     // Your EmailJS Template ID
      {
        name,
        email,
        project,
      },
      "bibektimilsina7857@gmail.com"          // Your EmailJS User ID
    );

    console.log("Email sent successfully:", response);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }),{status:200})
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({message:"Failed to send email"}));
  }
};
