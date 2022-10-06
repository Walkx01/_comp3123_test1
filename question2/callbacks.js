
function resolvedPromise() {
  var p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(" message:delayed success ! ");
    }, 500);
  });
  return p1;
}

const rejectedPromise = () => {
  var p1 = new Promise((reject) => {
    setTimeout(() => {
      reject(" message:delayed exception ! ");
    }, 500);
  });
  return p1;
};

async function getData() {
  try {
    console.log("-- START --");
    let r1 = await resolvedPromise();
    console.log(r1);

    let r2 = await rejectedPromise();
    console.log(r2);

    console.log("-- END --");
  } catch (e) {
    console.log(e);
  }
}
getData();
