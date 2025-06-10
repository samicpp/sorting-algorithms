#pragma once

#include<stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

void quick_sort(int* ptr, size_t len);
void radix_sort(int* ptr, size_t len);
void count_sort(int* ptr, size_t len);
void heap_sort(int* ptr, size_t len);
void merge_sort(int* ptr, size_t len);
void bubble_sort(int* ptr, size_t len);
void bogo_sort(int* ptr, size_t len);
void stalin_sort(int* ptr, size_t len);

#ifdef __cplusplus
}
#endif
