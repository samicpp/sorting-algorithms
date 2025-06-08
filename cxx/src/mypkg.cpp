#include "mypkg.h"
#include "json.hpp"
#include <iostream>
#include <algorithm>
#include <random>
#include <vector>
#include <fstream>

using json = nlohmann::json;

int main(int argc, char* argv[]){

    std::string input="/dev/stdin";
    std::string output="/dev/stdout";
    if(argc==1){
        std::cerr<<argv[0]<<" requires atleast 1 argument\n";
        return 0;
    }else if(argc==2){
        char c=0;
        std::cout<<"only one argument provided.\nwrite to input?(y/N) ";
        std::cin>>c;
        if(c!='y'){
            std::cout<<"\naborting.\n";
            return 0;
        };
        input=output=argv[1];
    }else if(argc>2){
        input=argv[1];
        output=argv[2];
    };

    std::ifstream infile(input);
    std::ofstream outfile(output);

    std::ostringstream buff;
    buff<<infile.rdbuf();
    std::string jstr=buff.str()/*R"({
        "type":"int",
        "list": [5,4,1,2,3,4,2,4,5,678,123]
    })"*/;

    json j=json::parse(jstr);

    if(j.contains("type")&&j["type"]=="int"){
        std::vector<int> vec=j["list"].get<std::vector<int>>();
        int* arr=vec.data();
        size_t len=vec.size();

        quick_sort(arr,len);

        //write to file 
        outfile<<"{\n\t\"type\": \"int\",\n\t\"arr\": [";
        for(int i=0;i<len;i++){
            if(i!=0)outfile<<",";
            outfile<<"\n\t\t"<<arr[i];
        };
        outfile<<"\n\t]\n}\n";
    }
}

int sortRand() {
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
