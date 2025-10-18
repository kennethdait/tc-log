function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Code")
    .addItem("Greet", "greet")
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
}

function greet() {
  SpreadsheetApp.getUi().alert("Greetings, Earthling!");
}

function renderIndex() {
  const template = HtmlService.createTemplateFromFile("html/index");
  template.pageTitle = "Case Editor";
  template.data = "<NULL>";
  return template
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setTitle("tc-log");
}

function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(renderIndex());
}
