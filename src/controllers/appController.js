export const appRoot = (req, res) => {
  res.status(200).json({
    app: "SHARE",
    version: "1.0.0"
  });
};
