// LOOPS

// Use loops wheneve ryou want ot repeat something

// Three main types: if, while, do... while

// FOR LOOPS

// for (
  // intialize an 'iterator' or counter which counts through;
// set the max range of the interator;
// set the direction and count of iteration (counting))
//)

// i++ means i = i+1
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`Current number = ${i}.`);
};


for (let i = 0; i < 15; i++) {
  if (i == 13) {
    console.log(`${i} is my favorite number!`);
  } else if (i == 8) {
    console.log("Will stop loop here soon...");
    break;
  } else {
    console.log(i);
  }
};

// Generally you se a for loop when you know how many times something will run

// But, if you don't, you use a...


// WHILE LOOP

let health = 100;

while (health > 0) {
  health -= 10; // means health = health - 10
  console.log("I've been hit! My health is now " + health + ".");
}

