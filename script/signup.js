// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set } from  "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA49sNT_Exqha6pivnVyAjGk-6Kh8DnYKo",
authDomain: "authentication-543a6.firebaseapp.com",
projectId: "authentication-543a6",
storageBucket: "authentication-543a6.appspot.com",
messagingSenderId: "742702348989",
appId: "1:742702348989:web:01969e2a8215be1ee395d4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

document.getElementById("register").addEventListener("click", function () {
    const checkbox = document.getElementById("check");
    if (!checkbox.checked) {
        alert("Please accept the privacy policy before creating an account.");
        return;
    }

    let email = document.getElementById("email").value;
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                username,
                email,
            });

            alert("Registered successfully");
            console.log(user);
            window.location.href = "login.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});
