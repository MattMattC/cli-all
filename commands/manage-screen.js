const prompts = require("prompts");
prompts.override(require("yargs").argv);
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const yargs = require("yargs");

yargs.command(
    "screen [where]",
    "manage screen position",
    (yargs) => {},
    (yargv) => {
        prompts({
            type: "select",
            name: "value",
            message: "Where es tu Matthieu ? ",
            choices: [
                { title: "Home", value: "home" },
                {
                    title: "Bureau",
                    value: "bureau",
                },
            ],
        }).then((screenResponse) => {
            console.log(screenResponse.value);
            if (screenResponse.value) {
                switch (screenResponse.value) {
                    case "home":
                        shExecute("~/.screenlayout/home.sh");
                        break;
                    case "bureau":
                        shExecute("~/.screenlayout/bureau-bg.sh");
                        break;
                }
            }
        });
    }
);

/**
 * Execute some shell file
 * @param {string} path of the executing shell
 */
async function shExecute(path) {
    try {
        const { stdout, stderr } = await exec(`sh ${path}`);
        console.log("stdout:", stdout);
        console.log("stderr:", stderr);
    } catch (error) {
        console.error(error);
    }
}
