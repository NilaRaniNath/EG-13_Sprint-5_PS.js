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

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

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






// 03. Search Insert Position


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
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
    return left; 
};


// console.log( searchInsert([1, 3, 5, 6], 5)); 







// 04. Maximum Depth of Binary Tree


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


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


// console.log(treeToArray(invertTree(arrayToTree([4, 2, 7, 1, 3, 6, 9])))); 




// 06. Product of Array Except Self



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    
  
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    
  
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    
    return res;
};


// console.log(productExceptSelf([1, 2, 3, 4]));



// 07. Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    const reverse = (start, end) => {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    };
    
    reverse(0, nums.length - 1); 
    reverse(0, k - 1);           
    reverse(k, nums.length - 1); 
};

// let rotArr = [1, 2, 3, 4, 5, 6, 7];
// rotate(rotArr, 3);
// console.log(rotArr); 






// 08. Min Stack


var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// let m1 = minStack.getMin();
// minStack.pop();
// let m2 = minStack.getMin();
// console.log([m1, m2]); 




// 09. Continuous Subarray Sum 


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const remainderMap = new Map();
    remainderMap.set(0, -1); 
    let runningSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        let remainder = runningSum % k;
        if (remainder < 0) remainder += k;
        
        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }
    return false;
};


// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));





// 10. Daily Temperatures 



/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return res;
};


// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); 
