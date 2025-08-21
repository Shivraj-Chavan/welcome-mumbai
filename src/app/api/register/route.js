import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

//   const requiredFields = ["location", "gst", "companyName", "address", "mobile", "email"];
//   for (let field of requiredFields) {
//     if (!body[field]) {
//       return Response.json({ message: `Missing required field: ${field}` }, { status: 400 });
//     }
//   }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
       user: 'mazhimumbaiinfo@gmail.com',
       pass: 'bqwyigmvdjjoyfvd',},
    });

    let content = `
- Company Name: ${body.companyName}
- Mobile: ${body.mobile}
- Email: ${body.email}
- Person Name :${body.personName}
- Address: ${body.address}
  - PinCode: ${body.pinCode}
   - Location: ${body.location}
   - Gst: ${body.gst}
   - Telephone: ${body.telephone}
   - Fax: ${body.fax}
   - Whatsapp: ${body.whatsapp}
   - Email: ${body.email}
   - Website: ${body.website}
   - Nature: ${body.nature}
   - Category: ${body.category}
   - SubCategory: ${body.subCategory}
   - WorkingDays: ${body.workingDays}
   - ClosedDays: ${body.closedDays}
 `;
 console.log(content);
 

    const mailOptions = {
      from: 'mazhimumbaiinfo@gmail.com',
      to: 'mazhimumbaidata@gmail.com',
      subject: 'New Registration For Mumbai',
      text: content,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
