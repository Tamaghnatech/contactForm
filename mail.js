
const firebaseConfig = {
    apiKey: "AIzaSyBzE9efapLYWpcnfgSj9dt_x5BroGt4oTY",
    authDomain: "contactform-4d478.firebaseapp.com",
    databaseURL: "https://contactform-4d478-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contactform-4d478",
    storageBucket: "contactform-4d478.appspot.com",
    messagingSenderId: "752987105400",
    appId: "1:752987105400:web:1bdd7fc0e1bc231eb1a58d",
    measurementId: "G-S1JQX60DVR"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var dpdparceluk = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
