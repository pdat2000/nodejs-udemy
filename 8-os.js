const os = require("os");

const user = os.userInfo();
console.log(user);
console.log(os.uptime());

const currenOs = {
  name: os.type(),
  release: os.release(),
  totaMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currenOs);
