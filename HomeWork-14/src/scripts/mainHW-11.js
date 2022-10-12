export function resolveAfter50(a) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(String.fromCharCode(a)), 50);
  });
}

export async function getRandomChinese(length) {
  let word = "";
  while (length >= 1) {
    let fiveNumbers = Date.now().toString().slice(-5);
    let chineseWord = await resolveAfter50(fiveNumbers);
    word += chineseWord;
    length = length - 1;
  }
  return word;
}
// getRandomChinese(6);
