import "./style.css";
import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

const app = document.getElementById("app");
const loginBtn = document.getElementById("btn-siwg");

const loginSIWG = async () => {
    account.createOAuth2Session(
        OAuthProvider.Google,
        "https://try.malikv.com/",
        "https://try.malikv.com/fail"
    );
};

loginBtn.addEventListener("click", loginSIWG);
