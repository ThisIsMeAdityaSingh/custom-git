const fs = require("fs");
const path = require("path");

const command = process.argv[2];

function createGitDirectory() {
    // this creates a .git directory.
    fs.mkdirSync(path.join(process.cwd(), ".git"), {recursive: true});

    // this would create an object directory inside .git directory
    fs.mkdirSync(path.join(process.cwd(), ".git", "objects"), {recursive: true});

    // this would create an ref directory inside .git directory
    fs.mkdirSync(path.join(process.cwd(), ".git", "refs"), {recursive: true});

    // this would create an HEAD directory inside .git directory and write something in it
    fs.writeFileSync(
        path.join(process.cwd(), ".git", "HEAD"),
        "ref: refs/heads/main\n"
    );

    console.log("Initialized git directory");
}

switch (command) {
  case "init":
    createGitDirectory();
    break;
  default:
    throw new Error(`Unknown command ${command}`);
}
