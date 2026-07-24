import { describe, it, expect } from 'vitest';
import { generateStealthHeaders } from '../src/index.js';

describe('stealth-headers', () => {
  it('should generate headers containing realistic user agents', () => {
    const headers = generateStealthHeaders({ browser: 'chrome', os: 'windows' });
    expect(headers['User-Agent']).toContain('Windows NT');
    expect(headers['User-Agent']).toContain('Chrome');
    expect(headers['sec-ch-ua-platform']).toBe('"Windows"');
  });
});