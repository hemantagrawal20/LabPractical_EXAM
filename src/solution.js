const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {

        if (err.code === 'ENOENT') {
            console.error('Error: input.txt not found.');
        } else {
            console.error('Error reading file:', err.message);
        }
        return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');


    const totalLines = lines.length;


    const totalWords = lines.reduce((count, line) => {
        return count + line.trim().split(/\s+/).filter(Boolean).length;
    }, 0);


    const output = `Total Lines: ${totalLines}\nTotal Words: ${totalWords}`;


    fs.writeFile('output.txt', output, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing to output.txt:', writeErr.message);
            return;
        }
        console.log(output);
    });
});