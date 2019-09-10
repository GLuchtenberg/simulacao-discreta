const fs = require("fs");
const contentFilePath = "./result.txt";
const contentFilePathExcel = "./resultExcel.txt";
const separator = "\r\n";
// const excelSeparator = ";";
function save(data) {
  const content = data.join(separator);
  const contentExcel = data.join(separator).replace(/\./g, ",");
  fs.writeFileSync(contentFilePathExcel, contentExcel);
  return fs.writeFileSync(contentFilePath, content);
}

function load() {
  const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
  const jsonContent = fileBuffer.split(separator);
  return jsonContent;
}

module.exports = {
  save,
  load
};
