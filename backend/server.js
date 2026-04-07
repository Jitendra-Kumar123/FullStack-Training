import http from "http"

const PORT = 3000;

// Step 3: Server create karo
const server = http.createServer(function(req, res) {

    // Yeh function har request pe chalega
    // req = browser se aayi request
    // res = hum kya jawab denge

    // Response ka header set karo
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Response bhejo
    res.end('Welcome to DK Server ;)');

});

// Step 4: Server ko PORT pe sunao
server.listen(PORT, function() {
    console.log('Server chal raha hai: http://localhost:' + PORT);
});