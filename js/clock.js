
let timeDivDOM = document.getElementById("myClock");

const d = new Date();
d.getHours();
d.getDay();
timeDivDOM.innerHTML = d;