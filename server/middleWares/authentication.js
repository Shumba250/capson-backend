import passport from "passport";
import "../authentication/auth.js";

const authorized = passport.authenticate("jwt", { session: false });

const authorizedUserLogin = passport.authenticate("local", { session: false });

export { authorized, authorizedUserLogin };
