import { getDatabase, ref, set, get, update, remove, onValue } from "firebase/database";


// Firebase config
    const firebaseConfig = {
    apiKey: "AIzaSyBeYjuWsRDvhISX8aggGDfpxf-UOUx6Q8M",
    authDomain: "ispo-airs.firebaseapp.com",
    databaseURL: "https://ispo-airs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ispo-airs",
    storageBucket: "ispo-airs.firebasestorage.app",
    messagingSenderId: "689053322782",
    appId: "1:689053322782:web:ba557bdd45006b01e6280f",
    measurementId: "G-851MBY6G3S"
};

firebase.initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(db);

const TemperatureRef = ref(db, '/Temperature');
onValue(TemperatureRef, (snapshot) => {
    const TemperatureValue = snapshot.val();
    document.getElementById("TemperatureValue").innerHTML = TemperatureValue;
});

const HumidityRef = ref(db, '/Humidity');
onValue(HumidityRef, (snapshot) => {
    const HumidityValue = snapshot.val();
    document.getElementById("HumidityValue").innerHTML = HumidityValue;
});

const StatusRef = ref(db, '.info/connected');
onValue(StatusRef, (snapshot) => {
    const isConnected = snapshot.val();
    var Status = document.getElementById("Status");
    Status.innerHTML = isConnected ? "<p>Connected</p>" : "<p>Not connected</p>";
    if (isConnected) {
        Status.style.color = "var(--success)";
    } else {
        Status.style.color = "var(--unsuccess)";
    }
});

// function CheckStatus() {
//     var Status = document.getElementById("Status");
//     if (firebase.auth().currentUser) {
//         Status.innerHTML = "<p>Connected</p>";
//         Status.style.color = "var(--success)";
//         Status.style.background = "rgba(34, 197, 94, 0.15)";
//     } else {
//         Status.innerHTML = "<p>Not connected</p>";
//         Status.style.color = "var(--unsuccess)";
//         Status.style.background = "rgba(255, 92, 92, 0.15)";
//     }
// }
