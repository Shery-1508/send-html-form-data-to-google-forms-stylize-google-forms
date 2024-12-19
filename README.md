![image](https://github.com/user-attachments/assets/f51613b7-0cca-4ed6-bc80-5a26db6200f9)# HTML Contact Form with Google Forms Integration
A beginner-friendly guide to create a contact form that sends data to Google Forms without any backend server.
check [Web version](https://shery-1508.github.io/send-html-form-data-to-google-forms-stylize-google-forms/)

## 🚀 Quick Setup Guide

### Step 1: Create Your Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Click the '+' button to create a new form
3. Add your form fields (Name, Email, Phone, Message)
4. Important Settings (⚙️ icon at top right):
   - Under "Responses" tab, turn OFF "Limit to 1 response"
   - Under "General" tab, uncheck "Collect email addresses"
   - Make sure all fields match your form exactly

### Step 2: Get Your Form URL and Field IDs
1. Click 'Send' button in your Google Form
2. Copy the form URL and modify it:
   - Original: `https://docs.google.com/forms/d/e/.../viewform`
   - Change to: `https://docs.google.com/forms/d/e/.../formResponse`

3. Get Field IDs (entry.xxxxxx):
   - Open form in browser
   - Right-click → View Page Source
   - Press Ctrl+F/Cmd+F
   - Search for "entry."
   - Copy IDs next to your field names

### Step 3: Setup Your Form
1. Download these files:
   - config.js (form settings)
   - index.html (form structure)
   - styles.css (form design)
   - sendform.js (form submission)

2. Edit config.js with your details:
   ```javascript
   formUrl: "YOUR_FORM_URL",
   fields: {
       name: "entry.2005620554",
       email: "entry.1045781291",
       phone: "entry.1166974658",
       message: "entry.839337160"
   }
   ```

## 💡 Pro Tips
1. Form Settings:
   - Always disable "Limit to 1 response"
   - Uncheck "Collect email addresses"
   - Make fields optional/required as needed

2. Testing:
   - Use incognito mode for testing
   - Check Google Form responses tab
   - Don't worry about error messages (CORS related)

3. Troubleshooting:
   - Form not working? Check entry IDs
   - No data received? Verify formResponse URL
   - Fields not matching? Check field names

4. Security:
   - Google Forms has spam protection
   - Consider adding reCAPTCHA
   - Use HTML5 form validation

## 🎨 Customization
- Edit styles.css for design changes
- Modify messages in config.js
- Add/remove fields as needed

## 📱 Mobile-Friendly
- Works on all devices
- Responsive design included
- Touch-friendly inputs
- Adaptive layout

## 📄 License
MIT License

## 🤝 Contributing
Issues and Pull Requests welcome!
