## Contact Form UI Updates

Make the following changes to the existing Contact Us section without redesigning the entire page.

### 1. Name Input Placeholder

- Change the Name input field placeholder to: **"Mr Damilola Awe"**
- Keep the existing label, validation, and input functionality.

### 2. Email Field and Contact Details

- Keep the email input field in the contact form.
- Change its placeholder to: **"enquires@centrifugegroup.com"**
- Keep the existing label, validation, and input functionality.
- Remove any standalone email address displayed alongside the form.
- Replace the displayed phone number with a **WhatsApp contact option**.
- Display a recognizable WhatsApp icon using Lucide-compatible WhatsApp branding or the official WhatsApp SVG icon.
- Make the icon clickable.
- Link it directly to WhatsApp using the existing phone number displayed in that section.

### 3. WhatsApp Integration

Use this URL structure:

`https://wa.me/234234 815 502 6555`

- Use the existing contact number.
- Ensure the number is formatted with the international country code (+234 for Nigeria), without spaces, brackets, or the leading zero.
- Open the link in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Support both mobile and WhatsApp Web on desktop.

### 4. Design Requirements

- Maintain the existing visual identity.
- Keep the contact section clean, professional, and minimal.
- Use the existing typography, spacing, and alignment.
- Give the WhatsApp icon a subtle hover effect.
- Make the icon accessible with an appropriate label, such as "Chat with us on WhatsApp".

### Important

Do not modify the form submission endpoint, backend functionality, other input fields, or the overall contact section layout. Only implement the requested changes.
