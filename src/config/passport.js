import passport from 'passport';
import GoogleStreategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import TwitterStrategy from 'passport-twitter';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStreategy(
    {
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        includeEmail: true,
        callbackUrl: `${process.env.BASE_URL}/api/social/login/google/redirect`
    },
    (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
));