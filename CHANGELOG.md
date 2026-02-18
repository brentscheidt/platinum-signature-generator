# Changelog

## [1.0.0] - 2026-02-18

### Features
- **Signature Generator**: Create standardized email signatures with Name, Title, Phone, Email, and Headshot.
- **Copy to Clipboard**: One-click copy functionality (preserves HTML formatting for Gmail).
- **Live Preview**: Real-time visualization of the signature as data is entered.
- **Mobile Optimization**: Responsive layout that stacks inputs on small screens and adjusts padding.
- **Validation**: Auto-formatting for cell phone numbers `(XXX) XXX-XXXX`.
- **Link Handling**: 
  - Clickable `tel:` links for phone numbers.
  - Auto-converts Google Drive share links to direct image URLs.
  - Hotlinked Platinum Logo points to ensure brand consistency.
- **Help Resources**: 
  - Direct link to Gmail Settings.
  - Instructions for setup on Desktop/Mobile.

### Visuals
- **Branding**: Official Platinum Roofing logo (200x83) integrated.
- **Theme**: "Platinum Blue" (#1f6feb) accent color for actions.
- **Icons**: Sleek Black/White social media icons (Facebook, Instagram).
- **Layout**: Headshot positioned *above* the logo for better balance.

### Fixes
- **CORS/Permissions**: Added instructions for public Google Drive file sharing.
- **Asset Hosting**: Configured `assets/` directory for stable logo serving via GitHub Pages.
- **Mobile Refresh**: Added documentation for clearing mobile cache to see updates.
