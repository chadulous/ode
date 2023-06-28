#!/usr/bin/env -S deno run --allow-env
import parser from "./parser.ts";
console.log(parser.parse(':(github/mavdotjs:odeFS) as filesystem;'))