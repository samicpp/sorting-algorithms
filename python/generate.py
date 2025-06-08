import sys
import json
import random


modes:list[str]=["shuffled","best","worst","random"]
argc:int=sys.argv.__len__()

len:int=100
mode:str=modes[0]
out:str="./output.json"

if argc>3:
    mode=sys.argv[3]
    pass
if argc>2:
    try:
        len=int(sys.argv[2])
        pass
    except:
        
        pass
    pass
if argc>1:
    out=sys.argv[1]
    pass


if not(mode in modes):
    mode=modes[0]
    pass


print(f"making \033[36m{mode}\033[0m list with length \033[32m{len}\033[0m and writing it to \033[33m{out}\033[0m")


arr:list[int]=list(range(len))

if mode=="shuffled":
    random.shuffle(arr)
    pass
elif mode=="random":
    for i in range(len):
        arr[i]=random.randint(0,len)
        pass
    pass
elif mode=="worst":
    arr=arr[::-1]
    pass

try:
    with open(out,"w") as f:
        json.dump({"type":"int","list":arr},f,indent=4)
        pass
    pass
except Exception as err:
    print("couldnt write output file")
    print(err)
    pass

