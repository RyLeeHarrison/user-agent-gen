import UserAgentGenerator from '../index.mjs';

// We will masure the time it takes to generate 100k user agents

const generator = new UserAgentGenerator();

const start = Date.now();

generator.generateMultiple(100000);
const end = Date.now();

console.log(`Time taken: ${end - start}ms`);

// On A MacBook Pro ( M3 Pro | 18 GB ) it only took 82ms to generate 100k user agents!