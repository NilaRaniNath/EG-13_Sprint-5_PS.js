function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


function arrayToTree(arr) {
    if (!arr || arr.length === 0) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (i < arr.length) {
        let current = queue.shift();
        if (i < arr.length && arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}




function treeToArray(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) result.pop();
    return result;
}


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

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1; 
//         }
//     }
//     return -1;
// };


// console.log(search([-1, 0, 3, 5, 9, 12], 9)); 






// 03. Search Insert Position


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return left; 
// };


// console.log( searchInsert([1, 3, 5, 6], 5)); 







// 04. Maximum Depth of Binary Tree


// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function(root) {
//     if (root === null) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };


// console.log(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 1, 7])));






// 05. Invert Binary Tree


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    
    
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
};


// console.log("05. Output:", treeToArray(invertTree(arrayToTree([4, 2, 7, 1, 3, 6, 9])))); 