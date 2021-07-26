//Database

//create our Database

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

  //Create a Table CLASSNOTES and display all records in table
  // is called when the webpage is opened
function createAndDisplayDB(){
  db.transaction(function (tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY , NAME TEXT,EMAIL TEXT,COMMENTS VARCHAR2)');
  });

    //display all records in table
  db.transaction( function (tx) {
    tx.executeSql('SELECT * FROM User', [], function (tx, results) {
          //number of records
        var len = results.rows.length;

        for (var i = 0; i < len; i++)
        {
              //this function will write the TOPIC and NOTE to the webpage
          createNewNote(results.rows.item(i).NAME,results.rows.item(i).EMAIL,results.rows.item(i).COMMENTS);
        }

    }, null);

  });
}

function createNewNote(name,email,comments)
{
var paragraph = document.createElement("li");
paragraph.innerHTML = '<b>'+name+'</b><br>'+email+'<br>'+comments+'<br></li>';

  //display topic and note to webpage
document.getElementById("OutputSection").appendChild(paragraph);

  //debug to check
console.log("Output Section: "+document.getElementById("OutputSection").innerHTML);
}

function addNote()
{ var check="true";
var name = document.getElementById("name").value;
if(/^([A-Z]|[a-z])[a-z]{1,}((\s{1,}([A-Z]|[a-z])[a-z]{1,})+)?$/.test(name)==false){
  document.getElementById("nameerror").innerHTML="Re-enter Name in words";
  check="false";
}
else{
  document.getElementById("nameerror").innerHTML="";
}
var email = document.getElementById("email").value;
if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)==false){
  document.getElementById("emailerror").innerHTML="Re-enter valid Email";
  check="false";
}
else{
  document.getElementById("emailerror").innerHTML="";
}
var comments = document.getElementById("comments").value;

if(check=="false"){
  alert("Incorrect data entered");
}
else{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comments = document.getElementById("comments").value;



  // When creating a var query, use the ` ` characters. Not apostrophes: ' '
var query = `INSERT INTO User (NAME,EMAIL,COMMENTS) VALUES ("${name}","${email}","${comments}")`;

alert(query);	//alert msg of what user typed into the form ^

db.transaction(function (tx) {
    tx.executeSql(query);	//place TOPIC and NOTE in db table
});

    //create new note; creates <p> that displays my TOPIC and NOTE below the form
createNewNote(name,email,comments);

resetInput();	//reset the form
}
}
function sortByName(){
document.getElementById("OutputSection").innerHTML ="";
//var msg="";
db.transaction(function (tx) {
 tx.executeSql('SELECT * FROM User ORDER BY NAME', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      createNewNote(results.rows.item(i).NAME,results.rows.item(i).EMAIL,results.rows.item(i).COMMENTS);

    }
 }, null);
});
}

function sortByComment(){
document.getElementById("OutputSection").innerHTML ="";
//var msg="";
db.transaction(function (tx) {
 tx.executeSql('SELECT * FROM User ORDER BY COMMENTS', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      createNewNote(results.rows.item(i).NAME,results.rows.item(i).EMAIL,results.rows.item(i).COMMENTS);

    }
 }, null);
});
}


function resetInput()	//rest my form
{
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("comments").value = "";

}

function clearDatabase()	//empty out Db
{
  db.transaction(function (tx) {
    tx.executeSql('DELETE FROM User');
  document.getElementById("OutputSection").innerHTML = "";
});
}
