const path = require("path");
const fs = require("fs");

/* //!update all rem values the base 16px font to a new size based on a multiplier 
Ex - update global style:
html {
  font - size: 16px
}
!to
html{
  font - size: 18px
}
!with multiplication factor of 0.8888 */
//* Example CLI command - `cat ./src/App.jsx | node utils/adjustBaseFontSize.js  0.88888 ./cssReCalc/App.jsx`

const startTime = Date.now();
console.log("startTime", new Date(Date.now()).toLocaleString());

let originalStyles = "";

process.stdin.on("data", function (chunk) {
  originalStyles += chunk.toString();
}); // incoming file or path to file as string containing css to be scrubbed

const multiplier = +process.argv[2]; // multiplication factor
const outputFile = process.argv[3]; // output filename or path to file relative to adjustBaseFontSize.js

fs.writeFileSync(path.resolve(__dirname, outputFile), "", () =>
  console.log(`file ${outputFile} created successfully!`)
);

// replacement function
const updateFont = (oldStyles, ratio) => {
  const regex = new RegExp(/(\-?\d+\.?\d*)(rem)/gm);
  const substitution = `calc(${ratio} * $1rem)`;
  return oldStyles.replace(regex, substitution);
};

process.stdin.on("end", function () {
  fs.writeFileSync(
    path.resolve(__dirname, outputFile),
    updateFont(originalStyles, multiplier),
    () => console.log(`file ${outputFile} updated successfully!`)
  );
  console.log(`Done (${Date.now() - startTime}ms)`);
});
