import os
import sys
import json

argc:int=sys.argv.__len__()

for a in sys.argv[1:argc]:
    # print(f"looking at {a}")

    if not os.path.exists(a):
        print(f"\033[31m{a} does not exist\033[0m")
        continue

    with open(a) as f:
        try:
            j=json.load(f)
            jlist=j.get("list")
            sort:bool=True
            for i in range(1,jlist.__len__()): 
                sort=(jlist[i]>=jlist[i-1]) and sort
                pass
            if sort:print(f"\033[32m{a} is sorted\033[0m")
            else:print(f"\033[31m{a} is not sorted\033[0m")
            pass
        except Exception as err:
            print(f"\033[31mcouldnt parse {a}\033[0m\n{err}")
            pass
    pass

