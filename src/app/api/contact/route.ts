import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment variables.");
      return NextResponse.json(
        { error: "Email service is currently misconfigured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Using Resend's default sender since the custom domain is not verified.
    // Resend's free tier allows sending to your own registered account email.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tonmoytr0110@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2563eb; font-size: 24px; font-weight: 700; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #475569; font-size: 14px; text-transform: uppercase;">Sender Name:</strong>
            <p style="color: #0f172a; font-size: 16px; margin: 4px 0 0 0; font-weight: 500;">${name}</p>
          </div>
          <div style="margin-bottom: 25px;">
            <strong style="color: #475569; font-size: 14px; text-transform: uppercase;">Sender Email:</strong>
            <p style="color: #0f172a; font-size: 16px; margin: 4px 0 0 0; font-weight: 500;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </p>
          </div>
          <div style="margin-bottom: 20px; padding: 16px; border-radius: 8px; background-color: #f8fafc; border-left: 4px solid #2563eb;">
            <strong style="color: #475569; font-size: 14px; text-transform: uppercase; display: block; margin-bottom: 8px;">Message:</strong>
            <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0 15px 0;" />
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 0;">
            This email was automatically generated and sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Sending Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: error?.message || "An internal server error occurred." },
      { status: 500 }
    );
  }
}
