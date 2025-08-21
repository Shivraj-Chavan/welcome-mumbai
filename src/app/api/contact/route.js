import nodemailer from 'nodemailer';

export async function POST(request) {
    const body = await request.json();
    const { email, name, phone, enquiry } = body;

    if (!phone) {
        return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        // Configure Nodemailer transport for Gmail
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mazhimumbaiinfo@gmail.com',
                pass: 'bqwyigmvdjjoyfvd',},
        });

        // Email content
        let mailOptions = {
            from: 'mazhimumbaiinfo@gmail.com',
            to: 'mazhimumbaidata@gmail.com',
            subject: 'New Contact Form Submission',
            text: ` Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Enquiry: ${enquiry}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return Response.json({ message: "Error sending email", error }, { status: 500 });
    }
}
