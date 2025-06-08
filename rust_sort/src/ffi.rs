use crate::sort;

#[unsafe(no_mangle)]
pub extern "C" fn quick_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null in rust::quick_sort");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::quick::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn radix_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::radix::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn heap_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::heap::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn merge_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::merge::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn bubble_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::bubble::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn stalin_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let mut sorted=sort::stalin::number(slice.to_vec());
    sorted.resize(slice.len(),0);
    slice.copy_from_slice(&sorted);
}

#[unsafe(no_mangle)]
pub extern "C" fn bogo_sort(ptr: *mut i32, len: usize){
    let slice = unsafe{
        assert!(!ptr.is_null(),"pointer is null");
        std::slice::from_raw_parts_mut(ptr, len)
    };
    let sorted=sort::bogo::number(slice.to_vec());
    slice.copy_from_slice(&sorted);
}

