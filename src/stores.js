import { writable } from "svelte/store";

export var count = writable(1);
export var current = writable(0);
