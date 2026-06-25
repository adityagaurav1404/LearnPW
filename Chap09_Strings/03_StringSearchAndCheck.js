let url = "https://staging.vwo.com/api/login?retry=true"

//includes()
console.log(url.includes('stag')); //true
console.log(url.includes('w')); //true

//startsWith() and endsWith()
console.log(url.startsWith('https')); //true
console.log(url.startsWith('http:')); //false
console.log(url.endsWith('ue')); //true

//indexOf
console.log(url.indexOf('ue')); //42
console.log(url.indexOf('u')); //42
console.log(url.indexOf('t')); //1
console.log(url.indexOf('none')); //-1 //-1 is no value in each case

//lastIndexOf
console.log(url.lastIndexOf('t')); //40

//search - accepts regex, returns indexx

console.log(url.search('ttp')); //1
console.log(url.search('none')); //-1