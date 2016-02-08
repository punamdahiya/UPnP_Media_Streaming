var tabs = require("sdk/tabs");
var self = require("sdk/self");

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  tabs.open({
    url: self.data.url("app.html"),
    inBackground: false,  // This can also be: inNewWindow: true
  });
}