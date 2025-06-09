use crate::sort;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn quick_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr=sort::quick::number(arr);
    arr
}

#[wasm_bindgen]
pub fn merge_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::merge::number(arr);
    arr
}

#[wasm_bindgen]
pub fn bubble_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::bubble::number(arr);
    arr
}

#[wasm_bindgen]
pub fn radix_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::radix::number(arr);
    arr
}

#[wasm_bindgen]
pub fn heap_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::heap::number(arr);
    arr
}

#[wasm_bindgen]
pub fn bogo_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::bogo::number(arr);
    arr
}

#[wasm_bindgen]
pub fn stalin_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::stalin::number(arr);
    arr
}

