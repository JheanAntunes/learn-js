// Declaration Promises

try {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
} catch (error) {
  console.error(error);
} finally {
  console.log("finally");
}
console.log("Before promise");

// async await
async function asyncFunction() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
      }, 1000);
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
console.log("Before asyncFunction");
