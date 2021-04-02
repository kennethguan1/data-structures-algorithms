var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let chars = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (vowels.includes(char)) chars += char;
  }
  chars = chars.split("");
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (vowels.includes(char)) s[i] = chars.pop();
  }
  return s.join("");
};