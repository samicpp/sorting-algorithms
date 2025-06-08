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

    if(!infile){
        std::cerr<<"couldnt open input file\n";
        return 0;
    }if(!outfile){
        std::cerr<<"couldnt open output file\n";
        return 0;
    };

    json j;
    try{
        infile>>j;
    }catch(const json::parse_error e){
        std::cerr<<"couldnt parse json\n"<<e.what()<<std::endl;
        return 0;
    }

    if(!j.contains("type")&&!j.contains("list")){
        std::cerr<<"data didnt contain a list or a type\n";
        return 0;
    }

    if(j["type"]=="int"){
        std::vector<int> vec=j["list"].get<std::vector<int>>();

        quick_sort(vec.data(),vec.size());

        json outj={
            {"type","int"},
            {"arr",vec},
        };

        //write to file 
        outfile<<outj.dump(4)<<std::endl;
        return 0;
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
