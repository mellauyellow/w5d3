function range(start, end) {
  if (end < start) {
    return [];
  }

  if (start + 1 === end) {
    return [];
  }

  return [start + 1].concat(range(start + 1, end));
}

// console.log(range(0, 10));

function exponent(base, n) {
  if (n === 0) {
    return 1;
  }
  return base * exponent(base, n - 1);
}

function exponent2(base, n) {
  if (n === 0 ) {
    return 1;
  }
  if (n === 1 ) {
    return base;
  }
  if (n % 2 === 0){
    return Math.pow(exponent2(base, n/2), 2);
  } else {
    return base * Math.pow(exponent2(base, (n-1)/2), 2);
  }
}

// console.log(exponent(5, 2))
// console.log(exponent2(5, 4))
// returns the first n fib #s
function fibonacci(n){
  if (n === 1){
    return [0];
  }
  if (n === 2) {
    return [0, 1]
  }
  let prev_fibs = fibonacci(n-1);
  // console.log(prev_fibs);
  next_fib = 0
  next_fib = [prev_fibs.slice(-2).reduce((a, b) => (a + b))];
  return prev_fibs.concat(next_fib);
}

// console.log(fibonacci(4));

function bsearch(array, target) {
  let mid_idx = Math.floor(array.length / 2);
  let mid_val = array[mid_idx];
  if (mid_val === target) {
    return mid_idx;
  }

  let left = array.slice(0, mid_idx);
  let right = array.slice(mid_idx + 1);

  if (mid_val > target) {
    return bsearch(left, target);
  } else {
    let search_result = bsearch(right, target);
    if (!search_result && search_result !== 0) {
      return null;
    }
    return mid_idx + search_result + 1;
  }
}

// console.log(bsearch([1, 2, 3, 4, 5, 6], 6));

function makeChange(total, coins) {
  if (total === 0) {
    return [];
  }

  for (let i = 0; i < coins.length; i++) {
    if (total - coins[i] >= 0) {
      return [coins[i]].concat(makeChange(total - coins[i], coins));
    }
  }
}

// console.log(makeChange(14, [10, 7, 1]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid_idx = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid_idx);
  let right = arr.slice(mid_idx);
  // let sorted_left = mergeSort(left);
  // let sorted_right = mergeSort(right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged_array = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged_array.push(left.shift());
    } else {
      merged_array.push(right.shift());
    }
  }

  // let merged = merged_array.concat(left).concat(right);
  // console.log(merged);
  return merged_array.concat(left).concat(right);
}

console.log(mergeSort([9, 65, 2, 3, 6, 87]));

function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}


Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
}

let pickles = new Cat('jefferson', 'munyo');

console.log(pickles.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return `Everyone hates ${this.name}`;
}


Cat.prototype.meow = function() {
  return "Meow"
}

console.log(pickles.meow());

pickles.meow = function() {
  return "Meownyo"
}

let melissa = new Cat('mello', 'Twitter')

console.log(melissa.meow());
console.log(pickles.meow());
