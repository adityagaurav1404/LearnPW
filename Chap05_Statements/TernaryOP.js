let status = "active";

// let msg = status == "active"; // true


let msg = status === "active" ? "user is active"
    : status == "inactive" ? "user is inactive"
        : status == "banned" ? "user is banned"
            : "user is unknown"

console.log(msg); // here ternary used as switch


