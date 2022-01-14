import fs from "fs";
import { addSpace } from "./spacing";

const filePath = process.argv[2];
const str = fs.readFileSync(filePath).toString();
const translatedStr = addSpace(str);
if (process.argv[3] === "write") {
    fs.writeFileSync(filePath, translatedStr);
    console.log("[*] Write");
}
