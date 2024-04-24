// pages/api/images.ts
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/rounded-beach-towels');
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json(files);
  });
}
