const ngrok = require('ngrok');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

(async function() {
    try {
        const url = await ngrok.connect(3000); // Port de votre application
        console.log(`ngrok URL: ${url}`);

        const envPath = path.resolve(__dirname, '.env');
        const envFile = fs.readFileSync(envPath, 'utf8');

        const updatedEnvFile = envFile
            .split('\n')
            .map(line => {
                if (line.startsWith('API_URL_DEV')) {
                    return `API_URL_DEV=${url}`;
                }
                return line;
            })
            .join('\n');

        fs.writeFileSync(envPath, updatedEnvFile);
        console.log('Updated .env file with new ngrok URL');
    } catch (error) {
        console.error('Error starting ngrok:', error);
    }
})();
