// var result = null;

// // Get the results for spelling correction type 1. "Showing results for:"
// for (const tag of document.querySelectorAll("span")) {
//     if (tag.textContent.includes("Showing results for")) {
//       result = tag
//     }
//   }


// // If results is null then could be spelling is wrong and Google is displaying spelling correction type 2. "Did you mean:"
// if (result == null) {
//     for (const tag of document.querySelectorAll("span")) {
//         if (tag.textContent.includes("Did you mean:")) {
//         result = tag
//         }
//     }
// }

// if (result != null) {
//     var text = result.nextElementSibling.text
//     document.getElementsByName('q')[0].value=text
//     var element = document.querySelector('[aria-label="Google Search"]');
//     element.form.submit()
// }



// var element = document.querySelector('[aria-label="Play next song"]');

// var element = document.querySelector('[aria-label="Previous song"]');
// element.click()

// chrome.commands.onCommand.addListener(function (command) {
//   if (command === "save") {
//       alert("save");
//   } else if (command === "random") {
//       alert("random");
//   }
// });

// chrome.runtime.onMessage.addListener(function (message) {
//   console.log("HERER")
//   // alert(message);
// });




// chrome.runtime.onMessage.addListener(
//   function(message, sender, sendResponse) {
//     alert(message);
// });

// var element = document.querySelector('[aria-label="Play next song"]');

// var element = document.querySelector('[aria-label="Previous song"]');
// element.click()