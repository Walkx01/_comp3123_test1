const fs = require("fs");

const dir = "./Logs";

if (fs.existsSync(dir)) {
  process.chdir(dir);
  fs.readdir(process.cwd(), (err, files) => {
    files.forEach((file) => {
      fs.unlink(file, (err) =>
        err
          ? console.error(`Error deleting file '${file}'`)
          : console.log(` now deleting files '${file}'`)
      );
    });
    fs.rmdir("./", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("directory deleted successfully");
      }
    });
  });
} else {
  fs.mkdirSync(dir);
  process.chdir(dir);

  for (let index = 0; index < 10; index++) {
    fs.writeFile(
      `mynewfile${index}.txt`,
      `This is my  file ${index} `,
      function (err) {
        if (err) throw err;
        console.log(`mynewfile${index}.txt`);
      }
    );
  }
}
