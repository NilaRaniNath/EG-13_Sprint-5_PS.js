// 01. Remove Duplicates from Sorted Array

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;
//     let k = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// };

// let arr1 = [1,1,2,2,5];
// console.log(removeDuplicates(arr1));



// 02. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return -1;
};


// console.log(search([-1, 0, 3, 5, 9, 12], 9)); 
