import { power } from "../scripts/mainHW-3";
import { getRandomNumber } from "../scripts/mainHW-4";
import { getModa } from "../scripts/mainHW-5";
import { getBestStudent } from "../scripts/mainHW-6";
import { students } from "../scripts/constants";
import { getMiddleTaxes } from "../scripts/mainHW-7";
import { ukraine } from "../scripts/constants";
import { generateBlocksInterval } from "../scripts/mainHW-9";
import { getRandomChinese } from "../scripts/mainHW-11";
import { createIdGenerator } from "../scripts/mainHW-13";

import Image from "../assets/bg.jpg";

import "../style/style.css";
import "../style/styleHW-10.css";
import "../style/styleHW-9.css";

//add image
const img = document.createElement("img");
img.setAttribute("src", Image);
document.body.append(img);

//HW-3
console.log(power(2, 3));
//HW-4
console.log(getRandomNumber(3, 100));
//HW-5
console.log(getModa(1, 5, 6, 4, 5, 6, 7, 5));
//HW-6
console.log(getBestStudent(students));
//HW-7
console.log(getMiddleTaxes.call(ukraine));
//HW-9
generateBlocksInterval();
//HW-11
getRandomChinese(3).then((result) => console.log(result));

//HW-13
const idGenerator = createIdGenerator(14);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
