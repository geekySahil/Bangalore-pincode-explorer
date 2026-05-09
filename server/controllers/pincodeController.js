import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '..', 'data', 'pincodes.json');

const normalize = (value = '') => value.trim().toLowerCase();

const loadPincodes = async () => {
  const fileContents = await readFile(dataPath, 'utf-8');
  return JSON.parse(fileContents);
};

export const getByPincode = async (req, res) => {
  const pincodes = await loadPincodes();
  const code = req.params.code.trim();
  const result = pincodes.find((item) => item.pincode === code);

  console.log(result , "RESULT")

  if (!result) {
    return res.status(404).json({ message: 'No matching pincode found' });
  }

  return res.json(result);
};

export const getByArea = async (req, res) => {
  const pincodes = await loadPincodes();
  const areaName = normalize(req.params.name);

  const results = pincodes.filter((item) =>
    normalize(item.area).includes(areaName)
  );

  if (results.length === 0) {
    return res.status(404).json({ message: 'No matching areas found' });
  }

  return res.json(results);
};

export const getSuggestions = async (req, res) => {
  const pincodes = await loadPincodes();
  const query = normalize(req.query.q);

  if (!query) {
    return res.json([]);
  }

  const suggestions = [
    ...new Set(
      pincodes
        .filter((item) => normalize(item.area).includes(query))
        .map((item) => item.area)
    )
  ].slice(0, 5);

  return res.json(suggestions);
};
