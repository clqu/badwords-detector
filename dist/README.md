# [badwords-detector](https://npmjs.com/package/badwords-detector)
[Do you need my help? Visit our Discord server.](https://voiddevs.org/discord)

![NPM Downloads](https://img.shields.io/npm/dm/badwords-detector?style=for-the-badge)
![License](https://img.shields.io/npm/l/badwords-detector?style=for-the-badge)
```bash
Node Version >= 16.16.0
```

### Installation
```bash
npm i badwords-detector --save
# or
yarn add badwords-detector
```

<br>

### Importing

```js
// CJS
const { Detector } = require("badwords-detector");
const badwords = new Detector();

// ESM
import { Detector } from "badwords-detector";
const badwords = new Detector();
```

<br>

# Usage

```js
console.log(badwords.filter("I'm a badword!")); // String
console.log(badwords.detect("I'm a badword!")); // Boolean
/*
    Output:
        I'm a badword!
        false
*/

badwords.addWords("badword"); // String or Array

console.log(badwords.filter("I'm a badword!"));
console.log(badwords.detect("I'm a badword!"));
/*
    Output:
        I'm a ****!
        true
*/

// All Functions
badwords.filter(text: string) // Censore the badword
badwords.detect(text: string) // Detect the badword
badwords.addWords(...words: string[]) // Add a new word(s)
badwords.removeWords(...words: string[]) // Remove word(s)
badwords.setWords(...words: string[]) // Set words to [string]
badwords.clearWords() // Reset all words (with defaults)
badwords.getWords() // Get all words
```

<br>

---
<h6 align="center">Developed with ❤️ by clqu</h6>
