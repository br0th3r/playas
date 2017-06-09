#!/bin/bash
# Sature image to black
convert satelite2.png -level 70%,80% satelite3.png
# Invert colors to white
# convert satelite3.png -fuzz 10% -fill white -opaque black satelite4.png
