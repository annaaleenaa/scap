const firebaseConfig = {
    apiKey: "AIzaSyCEuyJ3nqn3U1yTyttkof8CXBAC4T2l248",
    authDomain: "scap-c15aa.firebaseapp.com",
    databaseURL: "https://scap-c15aa-default-rtdb.firebaseio.com",
    projectId: "scap-c15aa",
    storageBucket: "scap-c15aa.appspot.com",
    messagingSenderId: "855321662754",
    appId: "1:855321662754:web:0e56d41928af7fefc7017b",
    measurementId: "G-FVSC96M8SF"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var RefistraionformDB = firebase.database().ref('Registrationform')

  document.getElementById('newregistration').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name1=getElementVal('name1');
    var name2=getElementVal('name2');
    var email=getElementVal('email');
    var phn=getElementVal('phn');
    var g1=getElementVal('g1');
    var g2=getElementVal('g2');
    var g3=getElementVal('g3');
    var dob=getElementVal('dob');
    var age=getElementVal('age');
    var addrs=getElementVal('addrs');
    var city=getElementVal('city');
    var pin=getElementVal('pin');
    var state=getElementVal('state');
    var contry=getElementVal('contry');
    var stop1=getElementVal('stop1');
    var stop2=getElementVal('stop2');
    var currentdate=getElementVal('currentdate');
    var adhr=getElementVal('adhr');
    var q1=getElementVal('q1');
    var q2=getElementVal('q2');
    var q3=getElementVal('q3');
    var q4=getElementVal('q4');
    var q5=getElementVal('q5');
    var study=getElementVal('study');
    var profile=getElementVal('profile');


   saveMessages(name1,name2,email,phn,g1,g2,g3,dob,age,addrs,city,pin,state,country,stop1,stop2,currentdate,adhr,q1,q2,q3,q4,q5,study,profile)

   //enable alert
   document.querySelector('.alert').style.display = "block";

   //remove the alert
   setTimeout(() =>{
    document.querySelector('.alert').style.display = "none";

   },3000);

   //reset the form
   document.getElementById('newregistration').reset();
  }
  const saveMessages=(name1,name2,email,phn,g1,g2,g3,dob,age,addrs,city,pin,state,country,stop1,stop2,currentdate,adhr,q1,q2,q3,q4,q5,study,profile)=>{
var newregform=RefistraionformDB.push();
newregform.set({
    name1:name1,
    name2:name2,
    email:email,
    phn:phn,
    g1:g1,
    g2:g2,
    g3:g3,
    dob:dob,
    age:age,
    addrs:addrs,
    city:city,
    pin:pin,
    state:state,
    country:country,
    stop1:stop1,
    stop2:stop2,
    currentdate:currentdate,
    adhr:adhr,
    q1:q1,
    q2:q2,
    q3:q3,
    q4:q4,
    q5:q5,
    study:study,
    profile:profile

});
  };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };