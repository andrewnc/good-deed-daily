var goodDeeds = ["Help a friend in need",
"Buy a gift for your mother or grandmother - just because.",
"Save electricity by unplugging your devices when not in use.",
"Plant a tree.",
"Write a thank-you note to someone who won’t expect it."];

var randomValue = goodDeeds[Math.floor(Math.random() * goodDeeds.length)];

var body = document.getElementById("body");
body.append(randomValue);
console.log(randomValue);
