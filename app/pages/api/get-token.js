import jwt from "jsonwebtoken";

export default function handler(req, res) {
    if (req.method === "POST") generateToken(req, res);
}

async function generateToken(req, res) {
    const API_KEY = process.env.VIDEOSDK_API_KEY;
    const SECRET_KEY = process.env.VIDEOSDK_SECRET_KEY;
    const options = { expiresIn: "10m", algorithm: "HS256" };
    const payload = {
        apikey: API_KEY,
        permissions: ["allow_join", "allow_mod", "ask_join"], // Trigger permission.
    };
    const token = jwt.sign(payload, SECRET_KEY, options);
    console.log(token);
    return res.json({ token });
}
