use crate::sort;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wquick_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr=sort::quick::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wmerge_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::merge::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wbubble_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::bubble::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wradix_sort(arr: Vec<i32>, base: i32) -> Vec<i32> {
    let arr = sort::radix::number(arr,base);
    arr
}

#[wasm_bindgen]
pub fn wcount_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::count::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wheap_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::heap::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wbogo_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::bogo::number(arr);
    arr
}

#[wasm_bindgen]
pub fn wstalin_sort(arr: Vec<i32>) -> Vec<i32> {
    let arr = sort::stalin::number(arr);
    arr
}

