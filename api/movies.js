export default async function handler(req, res) {
	const r = await fetch("https://api.themoviedb.org/3/movie/popular", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	res.status(200).json(await r.json());
}
