import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Alternative implementation using Resend (more reliable for production)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <pangasmeshack@gmail.com>", // Use your verified domain
      to: ["pangasmeshack@gmail.com"],
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email, // FIXED: replyTo (not reply_to)
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Main email sent successfully:", data);

    // Send auto-reply to the user
    const autoReply = await resend.emails.send({
      from: "Meshack Kataboi <pangasmeshack@gmail.com>", // Use same Gmail address
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your message:</h3>
            <p style="margin-bottom: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p>Best regards,<br>
          <strong>Meshack Kataboi</strong><br>
          Full Stack Developer</p>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p style="color: #64748b; font-size: 14px;">
              📧 pangasmeshack@gmail.com<br>
              📱 +254 793057720<br>
              🌐 <a href="https://github.com/spookeyy" style="color: #3b82f6;">View My GitHub</a> | 
              <a href="https://www.linkedin.com/in/meshack-kataboi" style="color: #3b82f6;">View My LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    });

    // Check if auto-reply was sent successfully
    if (autoReply.error) {
      console.error("Auto-reply error:", autoReply.error);
      // Still return success since the main email was sent
    } else {
      console.log("Auto-reply sent successfully:", autoReply.data);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
