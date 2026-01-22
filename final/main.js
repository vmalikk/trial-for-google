import "./style.css";
import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

const app = document.getElementById("app");
const loginBtn = document.getElementById("btn-siwg");

// Use current origin for OAuth redirects (works for both localhost and Vercel)
const successUrl = window.location.origin;
const failureUrl = `${window.location.origin}/fail`;

const loginSIWG = async () => {
    account.createOAuth2Session(
        OAuthProvider.Google,
        successUrl,
        failureUrl
    );
};

const init = async () => {
    try {
        const user = await account.get();
        app.innerHTML = `<h3>Hi ${user.name || user.email} 👋</h3>`;
    } catch (error) {
        console.error(error);
    }
};

init();

loginBtn.addEventListener("click", loginSIWG);
