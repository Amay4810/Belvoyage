// EmailJS Configuration
// Get these values from your EmailJS dashboard at https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_ne3mn8j',      // Replace with your EmailJS Service ID
    TEMPLATE_ID: 'template_cwd3vjb',    // Replace with your EmailJS Template ID
    PUBLIC_KEY: 'nqcyoyW9gD0DN1rw1',    // Replace with your EmailJS Public Key
    OPTIONS: {
        publicKey: 'nqcyoyW9gD0DN1rw1',
        // Add localhost to allowed origins
        origin: 'http://localhost:5173'
    }
};

// Instructions to get these values:
// 1. Go to https://www.emailjs.com/ and sign up/login with your Google Workspace
// 2. Add Email Service: Dashboard → Email Services → Add New Service → Select Gmail
// 3. Create Template: Dashboard → Email Templates → Create New Template
// 4. Get Service ID: Email Services → Your service → Copy Service ID
// 5. Get Template ID: Email Templates → Your template → Copy Template ID
// 6. Get Public Key: Account → General → Copy Public Key
