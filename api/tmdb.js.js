export default async function handler(req, res) {
	const { path, search = "" } = req.query;

	if (!path) {
		return res.status(400).json({ error: "Missing path" });
	}

	const url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.TMDB_API_KEY}&${search}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		res.status(200).json(data);
	} catch (err) {
		res.status(502).json({ error: "TMDB fetch failed" });
	}
}
