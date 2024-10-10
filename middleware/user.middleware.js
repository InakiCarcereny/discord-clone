export const isValidate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json(err.errors.map((err) => err.message));
  }
};
