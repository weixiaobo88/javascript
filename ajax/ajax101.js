// JavaScript 编程、错误处理、条件编译

// var xmlHttp = false;
// try {
//   xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
// } catch (e) {
//   try {
//     /// code for IE6, IE5
//     xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//   } catch (e2) {
//     xmlHttp = false;
//   }
// }

// // code for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp = new XMLHttpRequest();



/* Create a new XMLHttpRequest object to talk to the Web server */
var xmlHttp = false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
try {
  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttp = false;
  }
}
@end @*/
// code for IE7+, Firefox, Chrome, Opera, Safari
if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
  xmlHttp = new XMLHttpRequest();
}

function getCustomerInfo() {
  var phone = document.getElementById("phone").value;
  // var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
  var url = "ajax102.html" ;
  xmlHttp.open("GET", url, true);
  // xmlHttp.open("HEAD", url, true);
  xmlHttp.onreadystatechange = updatePage;
  xmlHttp.send(null);
}

function updatePage(){
  if (xmlHttp.readyState == 4) {
    if (xmlHttp.status == 200) {
      // alert("Server is done!");
      var response = xmlHttp.responseText.split("|");
      document.getElementById("order").value = response[0];
      document.getElementById("address").innerHTML = response[1].replace(/\n/g, "");
    }
    else if (xmlHttp.status == 404) {
      alert("Request URL does not exist");
    }
    else {
      alert("Error: status code is " + xmlHttp.status);
    }
  }
  // Output the current ready state
     // alert("updatePage() called with ready state of " + xmlHttp.readyState + " and response text of '" + xmlHttp.responseText + "'");
    if (xmlHttp.readyState == 4) {
       alert(xmlHttp.getAllResponseHeaders());
     }
     // var xmlDoc = xmlHttp.responseText;
     // var xmlDoc = xmlHttp.responseXML;
     // var showElements = xmlDoc.getElementsByTagName("show");
}

  // function getSalesData() {
  //  // Create a request object
  //  createRequest();   
  //  alert("Ready state is: " + request.readyState);

  //  // Setup (initialize) the request
  //  var url = "/boards/servlet/UpdateBoardSales";
  //  request.open("GET", url, true);
  //  request.onreadystatechange = updatePage;
  //  request.send(null);
  // }

  // function getJSON(url, successHandler) {
  //   xhr = new XMLHttpRequest
  //   xhr.open 'get', url, true
  //   xhr.onreadystatechange = function (evt) {
  //     if xhr.readyState == 4 and xhr.status == 200
  //       xhr.setHeader 'Content-type', 'application/json'
  //       response = JSON.parse xhr.responseText
  //       successHandler.apply xhr, [response, xhr]
  //   }
  //   xhr.send null
  // }

  // getJSON('/boards/servlet/UpdateBoardSales', function (json, xhr) {
  //   console.log json
  //   console.log json.property
  // });

  // // 4 urls
  // // async
  // // callback only when 4 urls request are done
  // function requestJSON(){
  //   var args = Array.prototype.slice(arguments);
  //   var urls = args.slice(args, args.length - 1);
  //   var callback = args[args.length - 1];

  //   results = {};

  //   function ajaxHandler(json, xhr) {
  //     results[xhr.url] = json
  //     if Object.getOwnPropertyNames(results).length == urls.length // check if 4 urls are done
  //       responses = []
  //       for url in Object.getOwnPropertyNames(results)
  //         responses.push results[a]

  //       callback responses
  //   }
  //   for (var i = urls.length - 1; i >= 0; i--) {
  //     getJSON(urls[i], ajaxHandler);
  //   }
  // }

  // requestJSON('/a', '/b', '/c', '/d', function (jsonA, jsonB, jsonC, jsonD) {
    
  // });







