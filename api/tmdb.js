export default async function handler(req, res) {
	const { path } = req.query;

	if (!path) {
		return res.status(400).json({ error: "Missing path" });
	}

	const url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.TMDB_API_KEY}`;

	try {
		const r = await fetch(url);
		const data = await r.json();
		res.status(200).json(data);
	} catch {
		res.status(500).json({ error: "TMDB failed" });
	}
}
