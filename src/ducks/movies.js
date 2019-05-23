import { createSlice } from "redux-starter-kit"

const movies = createSlice({
  slice: "movies",
  initialState: [
    {
			"vote_count": 298,
			"id": 458156,
			"video": false,
			"vote_average": 7.5,
			"title": "John Wick: Chapter 5 – Parabellum",
			"popularity": 563.584,
			"poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
			"original_language": "en",
			"original_title": "John Wick: Chapter 3 – Parabellum",
			"genre_ids": [
				80,
				28,
				53
			],
			"backdrop_path": "/kcga7xuiQVqM9WHfWnAbidxU7hd.jpg",
			"adult": false,
			"overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "release_date": "2019-05-15",
      "image_path": "http://image.tmdb.org/t/p/w342/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "genres": [
        "Crime",
        "Action",
        "Thriller"
      ]
    },
    {
			"vote_count": 693,
			"id": 447404,
			"video": false,
			"vote_average": 7,
			"title": "Pokémon Detective Pikachu",
			"popularity": 219.774,
			"poster_path": "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
			"original_language": "en",
			"original_title": "Pokémon Detective Pikachu",
			"genre_ids": [
				9648,
				10751,
				35
			],
			"backdrop_path": "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
			"adult": false,
			"overview": "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
      "release_date": "2019-05-03",
      "image_path": "http://image.tmdb.org/t/p/w342/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
      "genres": [
        "Mystery",
        "Family",
        "Comedy"
      ]
    },
    {
			"vote_count": 79,
			"id": 449562,
			"video": false,
			"vote_average": 6.1,
			"title": "The Hustle",
			"popularity": 116.759,
			"poster_path": "/qibqW5Dnvqp4hcEnoTARbQgxwJy.jpg",
			"original_language": "en",
			"original_title": "The Hustle",
			"genre_ids": [
				35
			],
			"backdrop_path": "/s6awXOxTKYQLSktiIJfI3969dZH.jpg",
			"adult": false,
			"overview": "Two female scam artists, one low rent and the other high class, compete to swindle a naïve tech prodigy out of his fortune. A remake of the 1988 comedy \"Dirty Rotten Scoundrels.\"",
      "release_date": "2019-05-09",
      "image_path": "http://image.tmdb.org/t/p/w342/qibqW5Dnvqp4hcEnoTARbQgxwJy.jpg",
      "genres": [
        "Comedy"
      ]
		}
  ],
  reducers: {}
})

export { movies }