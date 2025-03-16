import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: FormData = await request.json();
    const { firstName, lastName, email, phoneNumber, message } = body;

    // Log environment variables for debugging
    console.log('Mailtrap Host:', process.env.MAILTRAP_HOST);
    console.log('Mailtrap Port:', process.env.MAILTRAP_PORT);
    console.log('Mailtrap Username:', process.env.MAILTRAP_USERNAME);
    console.log('Mailtrap Password:', process.env.MAILTRAP_PASSWORD);

    // Configure Nodemailer with Mailtrap
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST as string,
      port: parseInt(process.env.MAILTRAP_PORT as string, 10),
      auth: {
        user: process.env.MAILTRAP_USERNAME as string,
        pass: process.env.MAILTRAP_PASSWORD as string,
      },
    });

    // Email options
    const mailOptions = {
      from: 'mailtrap@test.com',
      to: 'mailtrap@test.com',
      subject: `Portfolio Website`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
