# Fankuio
Email survey web app for Node with React Udemy course

# Getting Started

Requires a MongoDB database, and signing up for Google Developer, Stripe and SendGrid.
Create a `dev.js` file in `/config` with:
```
module.exports = {
  googleClientID: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  mongoURI: MONGO_URI,
  cookieKey: COOKIE_KEY,
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: STRIPE_SECRET_KEY,
  sendGridKey: SEND_GRID_KEY,
  redirectDomain: REDIRECT_DOMAIN
};
```

Requires node and npm/yarn.
```
npm install
cd client
npm install
cd ..
npm run dev
```
