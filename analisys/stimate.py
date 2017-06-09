#!/usr/bin/env python
# encoding: utf-8

import os
import sys
from PIL import Image

STIMATE=(3.3103280376840516,35)

if len(sys.argv)!=2:
    print("Tell me a file to work with!")
    sys.exit()
elif not os.path.exists(sys.argv[1]):
    print("I can not see your file '{}' arround!".format(sys.argv[1]))
    sys.exit()
else:
    filename=sys.argv[1]

img=Image.open(filename)
counter=0
total=0
for (r,g,b,a) in img.getdata():
    if a:
        if r or g or b:
            counter+=1
        total+=1

print("{}/{} = {}%".format(counter,total, float(counter/total)*100 * STIMATE[1] / STIMATE[0]))
