export default class UserAgentSmith {
  constructor() {
    this.browsers = {
      chrome: {
        name: 'Chrome',
        minVersion: 120,
        maxVersion: 145,
        engineVersion: '537.36'
      },
      firefox: {
        name: 'Firefox',
        minVersion: 115,
        maxVersion: 134,
        geckoVersion: '20230101'
      },
      edge: {
        name: 'Edg',
        minVersion: 120,
        maxVersion: 145,
        engineVersion: '537.36'
      },
      safari: {
        name: 'Safari',
        minVersion: 17,
        maxVersion: 22,
        engineVersion: '605.1.15'
      },
      opera: {
        name: 'OPR',
        minVersion: 100,
        maxVersion: 118,
        engineVersion: '537.36'
      }
    };
    
    this.operatingSystems = {
      windows: {
        name: 'Windows NT',
        versions: ['10.0', '11.0']
      },
      macOS: {
        name: 'Macintosh; Intel Mac OS X',
        versions: ['10_15', '11_0', '12_0', '13_0', '14_0', '15_0']
      },
      macOSApple: {
        name: 'Macintosh; Apple Silicon Mac OS X',
        versions: ['11_0', '12_0', '13_0', '14_0', '15_0']
      },
      linux: {
        name: 'X11; Linux',
        architectures: ['x86_64', 'aarch64']
      },
      android: {
        name: 'Android',
        versions: ['11.0', '12.0', '13.0', '14.0', '15.0', '16.0'],
        devices: ['SM-G998B', 'Pixel 9', 'Pixel 10', 'OnePlus 13', 'Xiaomi 15']
      },
      iOS: {
        name: 'iPhone; CPU iPhone OS',
        versions: ['16_0', '17_0', '18_0', '19_0']
      }
    };
  }

  /**
   * Generate a random number between min and max
   */
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Choose a random item from an array
   */
  randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Generate a random probability (0-1)
   */
  randomProbability() {
    return Math.random();
  }

  /**
   * Generate a Chrome user agent
   */
  generateChrome() {
    const browser = this.browsers.chrome;
    const major = this.randomNum(browser.minVersion, browser.maxVersion);
    const build = this.randomNum(1000, 9999);
    const patch = this.randomNum(10, 99);
    const version = `${major}.0.${build}.${patch}`;
    let os;
    const platform = this.randomProbability();

    if (platform < 0.45) {
      // Windows
      const windowsOS = this.operatingSystems.windows;
      const windowsVersion = this.randomChoice(windowsOS.versions);
      const wow64 = this.randomProbability() < 0.7 ? 'Win64; x64' : 'WOW64';
      os = `(${windowsOS.name} ${windowsVersion}; ${wow64})`;
    } else if (platform < 0.75) {
      // Mac
      const macProb = this.randomProbability();
      let macOS;
      if (macProb < 0.4) {
        macOS = this.operatingSystems.macOS;
      } else {
        macOS = this.operatingSystems.macOSApple;
      }
      const macVersion = this.randomChoice(macOS.versions);
      os = `(${macOS.name} ${macVersion})`;
    } else {
      // Linux
      const linuxOS = this.operatingSystems.linux;
      const architecture = this.randomChoice(linuxOS.architectures);
      os = `(${linuxOS.name} ${architecture})`;
    }

    return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Chrome/${version} Safari/${browser.engineVersion}`;
  }

  /**
   * Generate a Firefox user agent
   */
  generateFirefox() {
    const browser = this.browsers.firefox;
    const version = this.randomNum(browser.minVersion, browser.maxVersion);
    let os;
    const platform = this.randomProbability();

    if (platform < 0.5) {
      // Windows
      const windowsOS = this.operatingSystems.windows;
      const windowsVersion = this.randomChoice(windowsOS.versions);
      const wow64 = this.randomProbability() < 0.8 ? 'Win64; x64' : 'WOW64';
      os = `(Windows NT ${windowsVersion}; ${wow64}; rv:${version}.0)`;
    } else if (platform < 0.8) {
      // Mac
      const macProb = this.randomProbability();
      let macOS;
      if (macProb < 0.4) {
        macOS = this.operatingSystems.macOS;
      } else {
        macOS = this.operatingSystems.macOSApple;
      }
      const macVersion = this.randomChoice(macOS.versions);
      os = `(${macOS.name} ${macVersion}; rv:${version}.0)`;
    } else {
      // Linux
      const linuxOS = this.operatingSystems.linux;
      const architecture = this.randomChoice(linuxOS.architectures);
      const ubuntuPrefix = this.randomProbability() < 0.6 ? 'Ubuntu; ' : '';
      os = `(X11; ${ubuntuPrefix}Linux ${architecture}; rv:${version}.0)`;
    }

    return `Mozilla/5.0 ${os} Gecko/${browser.geckoVersion} Firefox/${version}.0`;
  }

  /**
   * Generate an Edge user agent
   */
  generateEdge() {
    const browser = this.browsers.edge;
    const version = this.randomNum(browser.minVersion, browser.maxVersion);
    let os;
    const platform = this.randomProbability();

    if (platform < 0.6) {
      // Windows (more common for Edge)
      const windowsOS = this.operatingSystems.windows;
      const windowsVersion = this.randomChoice(windowsOS.versions);
      os = `(Windows NT ${windowsVersion}; Win64; x64)`;
    } else if (platform < 0.9) {
      // Mac
      const macProb = this.randomProbability();
      let macOS;
      if (macProb < 0.4) {
        macOS = this.operatingSystems.macOS;
      } else {
        macOS = this.operatingSystems.macOSApple;
      }
      const macVersion = this.randomChoice(macOS.versions);
      os = `(${macOS.name} ${macVersion})`;
    } else {
      // Linux
      const linuxOS = this.operatingSystems.linux;
      const architecture = this.randomChoice(linuxOS.architectures);
      os = `(X11; Linux ${architecture})`;
    }

    return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/${browser.engineVersion} Edg/${version}.0.${this.randomNum(100, 999)}.${this.randomNum(10, 99)}`;
  }

  /**
   * Generate a Safari user agent
   */
  generateSafari() {
    const browser = this.browsers.safari;
    const platform = this.randomProbability();
    let os;

    if (platform < 0.7) {
      // macOS
      const major = this.randomNum(browser.minVersion, browser.maxVersion);
      const minor = this.randomNum(0, 9);
      const version = `${major}.${minor}`;
      const macProb = this.randomProbability();
      let macOS;
      if (macProb < 0.3) {
        macOS = this.operatingSystems.macOS;
      } else {
        macOS = this.operatingSystems.macOSApple;
      }
      const macVersion = this.randomChoice(macOS.versions);
      os = `(${macOS.name} ${macVersion})`;
      return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Version/${version} Safari/${browser.engineVersion}`;
    } else {
      // iOS
      const iosOS = this.operatingSystems.iOS;
      const iosVersion = this.randomChoice(iosOS.versions);
      const safariMajorVersion = iosVersion.split('_')[0];
      os = `(${iosOS.name} ${iosVersion} like Mac OS X)`;
      return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Version/${safariMajorVersion}.0 Mobile/15E148 Safari/${browser.engineVersion}`;
    }
  }

  /**
   * Generate an Opera user agent
   */
  generateOpera() {
    const browser = this.browsers.opera;
    const chromeMajor = this.randomNum(this.browsers.chrome.minVersion, this.browsers.chrome.maxVersion);
    const operaVersion = this.randomNum(browser.minVersion, browser.maxVersion);
    let os;
    const platform = this.randomProbability();

    if (platform < 0.5) {
      // Windows
      const windowsOS = this.operatingSystems.windows;
      const windowsVersion = this.randomChoice(windowsOS.versions);
      os = `(Windows NT ${windowsVersion}; Win64; x64)`;
    } else if (platform < 0.8) {
      // Mac
      const macProb = this.randomProbability();
      let macOS;
      if (macProb < 0.4) {
        macOS = this.operatingSystems.macOS;
      } else {
        macOS = this.operatingSystems.macOSApple;
      }
      const macVersion = this.randomChoice(macOS.versions);
      os = `(${macOS.name} ${macVersion})`;
    } else {
      // Linux
      const linuxOS = this.operatingSystems.linux;
      const architecture = this.randomChoice(linuxOS.architectures);
      os = `(X11; Linux ${architecture})`;
    }

    return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Chrome/${chromeMajor}.0.0.0 Safari/${browser.engineVersion} OPR/${operaVersion}.0.${this.randomNum(1000, 9999)}.${this.randomNum(10, 99)}`;
  }

  /**
   * Generate a mobile Chrome user agent
   */
  generateMobileChrome() {
    const browser = this.browsers.chrome;
    const major = this.randomNum(browser.minVersion, browser.maxVersion);
    const build = this.randomNum(1000, 9999);
    const patch = this.randomNum(10, 99);
    const version = `${major}.0.${build}.${patch}`;
    const androidOS = this.operatingSystems.android;
    const androidVersion = this.randomChoice(androidOS.versions);
    const device = this.randomChoice(androidOS.devices);

    return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${device}) AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Chrome/${version} Mobile Safari/${browser.engineVersion}`;
  }

  generateMobileSafari() {
    const browser = this.browsers.safari;
    const iosOS = this.operatingSystems.iOS;
    const iosVersion = this.randomChoice(iosOS.versions);
    const safariMajorVersion = iosVersion.split('_')[0];
    const os = `(${iosOS.name} ${iosVersion} like Mac OS X)`;
    return `Mozilla/5.0 ${os} AppleWebKit/${browser.engineVersion} (KHTML, like Gecko) Version/${safariMajorVersion}.0 Mobile/15E148 Safari/${browser.engineVersion}`;
  }

  generateMobileFirefox() {
    const browser = this.browsers.firefox;
    const version = this.randomNum(browser.minVersion, browser.maxVersion);
    const androidOS = this.operatingSystems.android;
    const androidVersion = this.randomChoice(androidOS.versions);
    const os = `(Android ${androidVersion}; Mobile; rv:${version}.0)`;
    return `Mozilla/5.0 ${os} Gecko/${browser.geckoVersion} Firefox/${version}.0`;
  }

  generateMobile() {
    const prob = this.randomProbability();
    if (prob < 0.6) {
      return this.generateMobileChrome();
    } else if (prob < 0.9) {
      return this.generateMobileSafari();
    } else {
      return this.generateMobileFirefox();
    }
  }

  generateMobileMultiple(count) {
    const userAgents = new Set();
    while (userAgents.size < count) {
      userAgents.add(this.generateMobile());
    }
    return Array.from(userAgents);
  }

  /**
   * Generate a random user agent string
   */
  generate() {
    const browserType = this.randomProbability();

    if (browserType < 0.55) {
      if (this.randomProbability() < 0.25) {
        return this.generateMobileChrome();
      } else {
        return this.generateChrome();
      }
    } else if (browserType < 0.75) {
      return this.generateFirefox();
    } else if (browserType < 0.85) {
      return this.generateEdge();
    } else if (browserType < 0.95) {
      return this.generateSafari();
    } else {
      return this.generateOpera();
    }
  }

  generateMultiple(count) {
    const userAgents = new Set();

    while (userAgents.size < count) {
      userAgents.add(this.generate());
    }

    return Array.from(userAgents);
  }
}
