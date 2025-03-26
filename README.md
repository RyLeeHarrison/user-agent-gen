# User Agent Smith

The `UserAgentSmith` class is a JavaScript utility designed to generate random user agent strings for various browsers and operating systems. This can be useful for testing web applications, simulating browser requests, or web scraping scenarios where diverse user agents are needed.

![Agent Smith](https://upload.wikimedia.org/wikipedia/en/1/1f/Agent_Smith_%28The_Matrix_series_character%29.jpg)

## Install

To install the `user-agent-smith` package, use one of the following commands:

```bash
npm install user-agent-smith
```

Or via Yarn:

```bash
yarn add user-agent-smith
```

**Note:** The Yarn command uses `yarn add` instead of `yarn install` because `yarn add` is the standard way to add a new package to your project dependencies, while `yarn install` is typically used to install all dependencies listed in `package.json`.

## Usage

Here’s how to import and instantiate the `UserAgentSmith` class:

```javascript
import UserAgentSmith from 'user-agent-smith';

const generator = new UserAgentSmith();
```

You can then call its methods to generate user agent strings. Run your script with:

```bash
node example.mjs
```

## Methods

### `generate()`

Generates a random user agent string with a bias towards popular browsers (e.g., Chrome, Firefox).

#### Example
```javascript
console.log(generator.generate());
```

#### Sample Output
```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6789.12 Safari/537.36
```

### `generateMobile()`

Generates a random mobile user agent string (e.g., Chrome on Android, Safari on iOS).

#### Example
```javascript
console.log(generator.generateMobile());
```

#### Sample Output
```
Mozilla/5.0 (Linux; Android 13.0; OnePlus 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.3456.78 Mobile Safari/537.36
```

### `generateMultiple(count)`

Generates a specified number of unique user agent strings.

#### Parameters
- `count`: The number of unique user agents to generate (integer).

#### Example
```javascript
console.log(generator.generateMultiple(3));
```

#### Sample Output
```
[
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.5678.90 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0; rv:127.0) Gecko/20230101 Firefox/127.0",
  "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.567.89"
]
```

## Full Usage Example

Here’s a complete example demonstrating how to use the `UserAgentSmith` class in a modern Node.js script with MJS syntax:

```javascript
// example.mjs
import UserAgentSmith from 'user-agent-smith';

const generator = new UserAgentSmith();

// Generate a single random user agent
console.log("Random User Agent:");
console.log(generator.generate());

// Generate a single mobile user agent
console.log("\nRandom Mobile User Agent:");
console.log(generator.generateMobile());

// Generate multiple unique user agents
console.log("\nMultiple User Agents:");
console.log(generator.generateMultiple(3));
```

To run this script:

```bash
node example.mjs
```

### Sample Output
```
Random User Agent:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6789.12 Safari/537.36

Random Mobile User Agent:
Mozilla/5.0 (Linux; Android 13.0; OnePlus 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.3456.78 Mobile Safari/537.36

Multiple User Agents:
[
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.5678.90 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0; rv:127.0) Gecko/20230101 Firefox/127.0",
  "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.567.89"
]
```
