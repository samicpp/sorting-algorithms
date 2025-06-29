import ctypes
import os
from typing import List

workdir:str=os.path.dirname(os.path.realpath(__file__))
sortlib:ctypes.CDLL=ctypes.CDLL(workdir+"/../target/release/libsorting_algorithm.so")

for i in ["quick_sort","radix_sort","heap_sort","merge_sort","bubble_sort","bogo_sort","stalin_sort","count_sort"]:
    func=getattr(sortlib,i)
    func.argtypes=[ctypes.POINTER(ctypes.c_int),ctypes.c_size_t]
    func.restype=None
    pass

sortlib.radix_sort.argtypes=[ctypes.POINTER(ctypes.c_int),ctypes.c_size_t,ctypes.c_int]

def __run_sort(name:str,data:List[int],base:int):
    arr=(ctypes.c_int*len(data))(*data)
    if name=="radix_sort":getattr(sortlib,name)(arr,len(data),base)
    else:getattr(sortlib,name)(arr,len(data))
    return list(arr)

# individual
def quick(data:List[int]):
    return __run_sort("quick_sort",data)

def merge(data:List[int]):
    return __run_sort("merge_sort",data)

def heap(data:List[int]):
    return __run_sort("heap_sort",data)

def radix(data:List[int],base:int=10):
    return __run_sort("radix_sort",data)

def bogo(data:List[int]):
    return __run_sort("bogo_sort",data)

def stalin(data:List[int]):
    return __run_sort("stalin_sort",data)

def bubble(data:List[int]):
    return __run_sort("bubble_sort",data)

def count(data:List[int]):
    return __run_sort("count_sort",data)
