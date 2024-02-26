// Get all elements with the specified class name
var phoneNumberElements = document.querySelectorAll("span.ggj6brxn"); // replace 'ggj6brxn' with the actual class name
let phoneNumberArr = [];
// Check if any elements are found
if (phoneNumberElements.length > 0) {
  // Loop through each element and add the phone number to the array
  phoneNumberElements.forEach(function (phoneNumberElement, index) {
    var phoneNumber = phoneNumberElement.textContent.trim();
    if ((phoneNumber.match(/\+91/g) || []).length > 2) {
      phoneNumberArr = phoneNumber.split(",");
    }
  });

  // Convert the array to JSON
  var jsonContent = JSON.stringify(phoneNumberArr, null, 2);

  // Create a Blob containing the JSON data
  var blob = new Blob([jsonContent], { type: "application/json" });

  // Create a download link
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "phoneNumbers.json";

  // Append the link to the document
  document.body.appendChild(a);

  // Trigger a click on the link to start the download
  a.click();

  // Remove the link from the document
  document.body.removeChild(a);
} else {
  console.log("No phone number elements found.");
}
