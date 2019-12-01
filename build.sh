#!/bin/bash

cd /proxy
npm i -g nexe
#nexe -t linux-x86-10.16.0 index.js
nexe -t alpine-x86-8.9.4 index.js
