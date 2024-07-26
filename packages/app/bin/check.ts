import { exec } from "node:child_process";

function runCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stdout + stderr);
      } else {
        resolve(stdout + stderr);
      }
    });
  });
}

async function main() {
  try {
    await runCommand("tsc --noEmit");
    await runCommand("eslint src/**/*.ts --fix");
    console.log("✅ No errors or warnings found");
  } catch (error) {
    console.error("⚠️ Errors or warnings detected:\n", error);
    process.exit(1);
  }
}

main();
