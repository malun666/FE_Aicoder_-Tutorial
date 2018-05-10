#!/bin/bash
a=1
for i in `ls ./*.jpg`
  do
    echo "修改文件：${i}"
    a=`expr $a + 1`
    mv $i `echo "a${a}.jpg"`   
  done
