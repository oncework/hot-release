const _ = require("lodash");
const Zekrom = require("zekrom/lib/iohook").default;

const zekrom = new Zekrom();

zekrom.setSnippet = async snippetTrigger => {
  if (!_.isEmpty(snippetTrigger)) {
    zekrom.setTriggerList(snippetTrigger);
  }
  zekrom.run();
};

process.on(
  "message",
  async ({ funcName, funcSecondName, funcArg, funcArgs }) => {
    // console.log(funcName, funcSecondName, funcArg, funcArgs);
    if (funcArgs) {
      await zekrom[funcName].bind(funcArgs);
    } else if (funcSecondName) {
      console.log("quit app", zekrom[funcName][funcSecondName]);
      await zekrom[funcName][funcSecondName]();
    } else {
      await zekrom[funcName](funcArg);
    }
  }
);

process.on("exit", () => {
  zekrom.iohook.unload();
});
