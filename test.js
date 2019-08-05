// 一些很常见的使用方式

const getPromise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000);
  })
}

const getPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 1000);
  })
}

const test = () => {
  getPromise1().then((res) => {
    console.log(res);
    getPromise2().then(res2 => {
      console.log(res2);
    })
  })
}

const test2 = async () => {
  await getPromise1().then(res => {
    console.log(res);
  })
}

const sleep = () => {
  setTimeout(() => {
    console.log(1)
  }, 1000);
}
const test3 = async () => {
  console.log(0)
  await sleep()
  console.log(2)
}
test3()