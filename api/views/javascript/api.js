

fetch(`/app`, {
    method:"POST",
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})