import app from "./index";

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server running on http://127.0.0.1:${port}`));