#include "mypkg.h"
#include <iostream>
#include <algorithm>
#include <random>

int main() {
    const int size=10000;
    int arr[size];

    for(int i=0;i<size;i++){
        arr[i]=i;
    };

    std::random_device rd;
    std::mt19937 g(rd());
    std::shuffle(arr, arr + size, g);

    std::cout<<"shuffled array = { ";
    for(int i=0;i<10;i++)std::cout<<arr[i]<<", ";
    std::cout<<"}\n\n";

    quick_sort(arr,size);

    std::cout<<"quick sort array = { ";
    for(int i=0;i<10;i++)std::cout<<arr[i]<<", ";
    std::cout<<"}\n\n";

    return 0;
}
