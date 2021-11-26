function storeData(event) {
  event.preventDefault();
  try {
    //get user data
    let name = docuemnt.getElementById("name").value;
    let price = docuemnt.getElementById("price").value;
    console.log(name, price);
    let route = "";
    //store it via API
    fetch(route, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",  
      },
      body: JSON.stringify({id: `$(uuidv4()}`, price: price, name: name}),
    })
      .then((response) => {
        var autToke = response.autToke;
        //stores the auth credential in browser
        //navigate to authenticated page.
        console.log(response.json());
      })
      .catch((e)=> console.log(e));
  } catch(error) {
    console.log(error);
  }

}
//JSON
//JS Promise
//CORS
//UUID
function getData() {
  //send a get request to our API
  //if request if successful
  //use for loop to generate HTML tag string each data
  //use .innerHTML method from JS document to display the data
}
getData(); //immediately execute this function.

//create cookie
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() +  days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + ";path=/";

}
//Read cookie
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAi(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;

}
//erase cookie
function eraseCookie(name) {
  createCookie(name, "", -1);
}
createCookie("cookie-name", "cookie-value", 30);
readCookie("cookie-name");

//Auth
//How web app basic auth flow works?
//mydomain.com --> checks if use already have authentication cookies
//if user doesn't have cookies -->> navigate to login page

//login
//if use credentials are correct --> store authentication token (this authentication supposed to come from and auth API if user credential are valid)
//each time user wants to access some features --> check if user tokens are valid

//local storage
//cookie
//JWT
//Token auth flow


