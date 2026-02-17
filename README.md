# Platinum Email Signature Generator

A simple web tool for generating standardized email signatures for Platinum Roofing employees.

## Features
- **Live Preview**: See your signature as you type.
- **Gmail Compatible**: Generates HTML with inline styles perfect for pasting into Gmail.
- **Branding**: Includes Platinum Roofing logo, colors, and social media links.
- **Photo Support**: Add a headshot via URL (optional).

## How to Use
1.  Open the app (link below).
2.  Fill in your details (Name, Title, Phone, etc.).
3.  (Optional) Paste a link to your headshot.
4.  Click **Copy Signature**.
5.  Go to Gmail Settings -> General -> Signature.
6.  Paste (Cmd+V) into the signature box.
7.  Save Changes.

## Deployment
This app is designed to be hosted on **GitHub Pages**.

1.  Go to the repository **Settings**.
2.  Click **Pages** in the left sidebar.
3.  Under **Build and deployment**, select **Source: Deploy from a branch**.
4.  Select **Branch: main** and folder **/ (root)**.
5.  Click **Save**.
6.  The URL will appear at the top (e.g., `https://brentscheidt.github.io/platinum-signature-generator/`).

## Development
- `index.html`: The main structure and the HTML template for the signature.
- `styles.css`: Styles for the generator UI (does not affect the signature itself).
- `app.js`: Logic for updating the preview and handling the clipboard copy.

**Note**: The signature itself uses inline CSS within the `index.html` template to ensure compatibility with email clients.
