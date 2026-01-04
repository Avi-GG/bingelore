import { useEffect, useState } from "react";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/movies") // 👈 ONLY change that matters
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results || []);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
				gap: 16,
			}}
		>
			{movies.map((movie) => (
				<div key={movie.id}>
					<img
						src={movie.poster_path ? IMAGE_BASE + movie.poster_path : ""}
						alt={movie.title}
						style={{ width: "100%", borderRadius: 8 }}
					/>
					<h4>{movie.title}</h4>
					<p>⭐ {movie.vote_average}</p>
				</div>
			))}
		</div>
	);
}
