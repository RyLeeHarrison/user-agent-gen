import UserAgentSmith from '../index.mjs';

// Example usage
const generator = new UserAgentSmith();

const howMany = 2;

const mobileUserAgents = generator.generateMobileMultiple(howMany);
const userAgents = generator.generateMobileMultiple(howMany);

console.log({ mobileUserAgents, userAgents });

// example output: {
//     mobileUserAgents: [
//         'Mozilla/5.0 (Linux; Android 14.0; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.8421.18 Mobile Safari/537.36',
//         'Mozilla/5.0 (Linux; Android 16.0; Xiaomi 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.5064.96 Mobile Safari/537.36'
//     ],
//     userAgents: [
//         'Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/605.1.15',
//         'Mozilla/5.0 (Android 11.0; Mobile; rv:120.0) Gecko/20230101 Firefox/120.0'
//     ]
// }