# stealth-headers

Generate realistic, statistical browser headers and fingerprint footprints to emulate human web browsers and reduce automated scraper detection.

## Features

- Generates life-like browser headers mapping real-world user-agent distributions.
- Supports dynamic platform overrides (e.g., Mac, Windows, Linux).
- Calculates matching viewport, platform, and navigator specs automatically.
- Zero dependencies, ultra-lightweight footprint.

## Installation

```bash
npm install stealth-headers
```

## Usage

```typescript
import { generateStealthHeaders } from 'stealth-headers';

// Generate standard stealth headers
const headers = generateStealthHeaders();
console.log(headers);
/*
Output:
{
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36...',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  ...
}
*/

// Generate headers with explicit platform overrides
const customHeaders = generateStealthHeaders({
  platform: 'windows',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...'
});
console.log(customHeaders);
```

## API Reference

### generateStealthHeaders(options?)

Generates a realistic set of HTTP headers.

**Parameters:**
- `options` *(optional)*: Object with:
  - `platform` *(optional)*: `'mac' | 'windows' | 'linux'`
  - `userAgent` *(optional)*: Custom User-Agent string.

**Returns:** `Record<string, string>` of headers.

## License

MIT
