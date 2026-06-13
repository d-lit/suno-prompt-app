import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const PRESETS_DIR = path.resolve('./data/presets');

const slugify = (value) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

await fs.mkdir(PRESETS_DIR, {
  recursive: true,
});

const sendJson = (res, data) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
  });

  res.end(JSON.stringify(data, null, 2));
};

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    sendJson(res, { ok: true });

    return;
  }

  /**
   * GET /presets
   */
  if (req.url === '/presets' && req.method === 'GET') {
    const files = await fs.readdir(PRESETS_DIR);

    const presets = await Promise.all(
      files
        .filter((file) => file.endsWith('.json'))
        .map(async (file) => {
          const raw = await fs.readFile(path.join(PRESETS_DIR, file), 'utf-8');

          return JSON.parse(raw);
        })
    );

    sendJson(res, presets);

    return;
  }

  /**
   * POST /presets
   */
  if (req.url === '/presets' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      const preset = JSON.parse(body);

      const slug = preset.label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const fileName = `${slug}.json`;

      const nextPreset = {
        ...preset,
        fileName,
      };

      const filePath = path.join(PRESETS_DIR, fileName);

      await fs.writeFile(filePath, JSON.stringify(nextPreset, null, 2));

      sendJson(res, nextPreset);
    });

    return;
  }

  /**
   * DELETE /presets/:id
   */
  if (req.url?.startsWith('/presets/') && req.method === 'DELETE') {
    const presetId = req.url.split('/').pop();
    const filePath = path.join(PRESETS_DIR, `${presetId}`);

    await fs.rm(filePath, {
      force: true,
    });

    sendJson(res, {
      success: true,
    });

    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(7777, () => {
  console.log('Preset DB running on :7777');
});
