const listBlack = [
  "el",
  "los",
  "la",
  "las",
  "un",
  "unos",
  "una",
  "unas",
  "y",
  "de",
  "del",
  "al",
  "a",
  "e",
  "i",
  "o",
  "u",
  "un",
  "uno",
];
export function capitalizeString(str: string): string {
  let letters = str.split(" ");
  letters = letters.map((letter, i) => {
    if (i === 0) {
      return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
    }
    const include = listBlack.includes(letter.toLowerCase());
    if (include) return letter.toLowerCase();

    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
  });

  return letters.join(" ");
}
