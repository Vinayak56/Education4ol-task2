// use your firebase credentials
// create 2 new database inside firebase firestore named as userr and user-course

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
const myModel = document.querySelectorAll('.container');


async function signup(e){
    e.preventDefault();
    const email = document.querySelector("#signupEmail");
    const password = document.querySelector("#signupPassword");
    try{
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        window.alert("User created Succesfully!!");
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                window.location.href = "profile.html";
            }
        });
    }catch(err){
        window.alert("Please Input correct details");
    }
    email.value = "";
    password.value = "";
}

async function login(e){
    e.preventDefault();
    const email = document.querySelector("#loginEmail");
    const password = document.querySelector("#loginPassword"); 
    try{
        const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                window.location.href="home.html";
            }
        });
        window.alert("User loggedin Succesfully!!");
    }catch(err){
        window.alert("Please Input correct details");
    }

    email.value = "";
    password.value = "";
}

function getDetail(user){

    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "none";
    })
    var docRef = db.collection("userr").doc(firebase.auth().currentUser.uid);
    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#firbs-inp").innerHTML = "<br><br><h1> Name : "+doc.data()["FirstName"]+" "+doc.data()["LastName"]+"</h1><br>"+"<h1> Phone : "+doc.data()["Phone"]+"</h1><br>"+"<h1> Address : "+doc.data()["Address"]+"</h1><br>"+"<h1> Country : "+doc.data()["Country"]+"</h1>";
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href="signin.html"
      }).catch((error) => {
            window.alert(error);
      });
}


function uploadData(e){
    e.preventDefault();
    const form = document.querySelector("#add-data");
    db.collection("userr").doc(firebase.auth().currentUser.uid).set({
        FirstName: form.firstName.value,
        LastName: form.lastName.value,
        Phone: form.phoneNum.value,
        Address: form.location.value,
        Country: form.country.value 
    }).then(function (docRef){
        console.log("document with id ",docRef.id);
    }).catch(function(error){
        alert("Data Uploaded Successfully!!");
    });

    db.collection("user-course").doc(firebase.auth().currentUser.uid).set({
        Python: "",
        Java:"",
        C:"",
        Cpp:"",
        Php:"",
        Frontend:"",
        Backend:"",
        Datascience:"",
        Machinelearning:""

    }).then(function (docRef){
        console.log("document with id ",docRef.id);
    }).catch(function(error){
        window.location.href = "home.html";
    });

}

function uploadCourse(e){
    const course = document.getElementById(e.target.id).parentNode.children[0].textContent;
    if(course === "Python Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Python : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Java Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Java : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "C Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            C : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "C++ Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Cpp : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Php Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Php : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Frontend Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Frontend : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Backend Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Backend : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Datascience Course"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Datascience : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
    else if(course === "Machine learning"){
        db.collection("user-course").doc(firebase.auth().currentUser.uid).update({
            Machinelearning : 1
        }).then(function (docRef){
            console.log("document with id ",docRef.id);
        }).catch(function(error){
            alert("You have Enrolled for "+course);
        });
    
    }
}

function getHistory(){
    document.querySelector(".history").style.display = "flex";
    document.querySelector(".close1").addEventListener("click",function(){
        document.querySelector(".history").style.display = "none";
    })
    
    var docRef = db.collection("user-course").doc(firebase.auth().currentUser.uid);
    docRef.get().then((doc) => {
        if (doc.exists) {
            var tb = document.getElementById("tabl");
            if(doc.data()["Python"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Python Course";
            }
            if(doc.data()["Php"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Php Course";
            }
            if(doc.data()["Cpp"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Cpp Course";
            }

            if(doc.data()["Backend"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Backend Course";
            }
            if(doc.data()["Datascience"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Datascience Course";
            }
            if(doc.data()["Frontend"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Frontend Course";
            }
            if(doc.data()["Machinelearning"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Machine learning";
            }
            if(doc.data()["Java"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "Java Course";
            }
            if(doc.data()["C"]==1){
                var row = tb.insertRow(-1);
                row.insertCell().textContent = "C Course";
            }
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}