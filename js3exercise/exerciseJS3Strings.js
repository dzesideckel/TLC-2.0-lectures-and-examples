// /* JavaScript 3 Exercise - Strings, String Methods, & Project Setup

// DIRECTIONS: Use only Visual Studio Code file editing, the console, and string methods & properties to solve these problems. NO LOOPS! >:D

// ---

// 1) Make a template string with 5 variables inside of it and at least 3 escape characters.

let val = `Butthole:\n\t1) Where's my seratonin?\n\t2) Cry\n\t3 Ass\t\t4) Enjoy the weekend!`;

console.log(val);

// 2) Give an example of each property and method in the lecture (the sections given in CAPS). The work for this problem should be split across group members.
// 3) Write the results of the following operations, and how you found them (brief explanation is okay):

//   a) The character at index 12 of "I have this string..."

string = "I have this string...";
  
index = string[12];

console.log(index);

//   b) The character at index 27 of "Changing case (capitalization and uncapitalization)"

string2 = "Changing case (capitalization and uncapitalization)";

index2 = string2[27];

console.log(index2);

//   c) The 1000th character of the Gettysburg Address.

gettysburg = "Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

gettysburg_1000 = gettysburg[1000];

console.log(gettysburg_1000);

//   d) The 401st through 457th characters of the Gettysburg Address.

// gettysburg_401to457 = gettysburg['401', '...', '457']; 

const set1 = new Set (['401', '...', '457']);

console.log(set1.has(401));


//   e) The 200th word of the Gettysburg Address.

// gettysburg_200word = gettysburg[]

//   f) The index of the first occurrence of the word 'a' in the Gettysburg Address.

//   g) The index of the last occurrence of the word 'a' in the Gettysburg Address. 

//   h) The character length of the original app.js file for this lecture. Hard and you should work with the whole team, if necessary.

// 4) Here's how to replace a substring in JavaScript:

//   longString.replace(oldSubstring, newSubstring);

//   For example:

//   "Cincinnati".replace('cin', 'sen');

//   yields:

//   "Cinsennati"

//   since 'C' != 'c' (C is not equal to c) from the point of view of JS. 

//   Even still, this unfortunately only replaces the first 'cin' that occurs:

//   "cincinnati".replace('cin', 'cent'); // "centcinnati"

// Using the Internet, find an easy way to replace ALL occurrences of a substring with another substring. The method, not including the longString, oldSubstring, and newSubstring, should be less than 20 characters long.

// 5) Replicate the effect of the long s (en.wikipedia.org/wiki/Long_s) in the Gettysburg Address. That is, replace each single s with an f, and each first s in a double s with an f.