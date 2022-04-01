// container 
let container = document.createElement("div");
container.className = "container";
document.body.append(container);

// container > row
let row = document.createElement("div");
row.className = "row";
container.append(row);

// container > row > column
let col = document.createElement("div");
col.className = "col text-center";
row.append(col);

// container > row > column > span
let span = document.createElement("span");
span.className = "span";
span.innerHTML = "10";
col.appendChild(span);

// countdown 
let count = 10;
setTimeout(() => {
    count = count - 1
    span.innerHTML = count
    setTimeout(() => {
        count = count - 1
        span.innerHTML = count
        setTimeout(() => {
            count = count - 1
            span.innerHTML = count
            setTimeout(() => {
                count = count - 1
                span.innerHTML = count
                setTimeout(() => {
                    count = count - 1
                    span.innerHTML = count
                    setTimeout(() => {
                        count = count - 1
                        span.innerHTML = count
                        setTimeout(() => {
                            count = count - 1
                            span.innerHTML = count
                            setTimeout(() => {
                                count = count - 1
                                span.innerHTML = count
                                setTimeout(() => {
                                    count = count - 1
                                    span.innerHTML = count
                                    setTimeout(() => {
                                        count = count - 1
                                        span.innerHTML = count
                                        setTimeout(() => {
                                            count = count - 1
                                            span.innerHTML = "!! HAPPY INDEPENDENCE DAY !!"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
