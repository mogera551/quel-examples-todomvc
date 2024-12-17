
//import importmap from "./importmap.json" with {type: 'json'};

//const importmap = await import("./importmap.json", { with: { type: "json" } });
const response = await fetch("./importmap.json");
const importmap = await response.json();
const script = document.createElement("script");
script.type = "importmap";
script.textContent = JSON.stringify(importmap);
document.head.appendChild(script);
