import React from "react";

function isSafe(arr, r, c, n) {
    if (r === 0 && c === 0) {
        return true;
    }
    for (let i = 0; i < c; i++) {
        if (arr[r][i] === "*") {
            return false;
        }
    }
    let i = r;
    let j = c;
    while (i >= 0 && j >= 0) {
        if (arr[i][j] === "*") {
            return false;
        }
        i--;
        j--;
    }
    i = r;
    j = c;
    while (i < n && j >= 0) {
        if (arr[i][j] === "*") {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

export default function nQueen(col, arr, ans) {
    let n = arr.length;
    if (n === 1) {
        return 1;
    }
    if (col === n) {
        ans.push(arr.map(row => row.join('')));
        return ans;
    }
    for (let row = 0; row < n; row++) {
        if (isSafe(arr, row, col, n)) {
            arr[row][col] = "*";
            nQueen(col + 1, arr, ans);
            arr[row][col] = ".";
        }
    }
}

// Test the function
// let n = 4;
// let arr = Array.from({ length: n }, () => Array(n).fill("."));
// let solutions = [];
// nQueen(0, arr, solutions);
// console.log(solutions[0]);
// console.log("Total solutions:", solutions.length);
