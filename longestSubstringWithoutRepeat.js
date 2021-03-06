//#3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let beginning = 0
  let end = 1
  let maxLen = 0

  while (end < s.length) {
    if (isUnique(s, beginning, end)) {
      console.log(end - beginning)
      if ((end - beginning) > maxLen) {
        maxLen = end - beginning
      }
      end++
    } else {
      beginning++
    }
  }

  return maxLen
};

const isUnique = (string, start, stop) => {
  let seen = {}
  for (let i = start; i < stop; i++) {
    if (!!seen[string[i]]) {
      return false
    } else {
      seen[string[i]] = 1
    }
  }
  return true
}

//Linear sliding window
var lengthOfLongestSubstring = function (s) {
  let end = 0;
  let begin = 0;
  let hash = {};
  let max = 0;

  while (end < s.length) {
    if (!hash.hasOwnProperty(s[end])) {
      hash[s[end]] = true;
      end++;
      max = Math.max(max, end - begin);
    } else {
      while (hash[s[end]]) {
        delete hash[s[begin]];
        begin++;
      }
    }
  }
  return max;
}