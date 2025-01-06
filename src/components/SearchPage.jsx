import React, { useState } from 'react';
import { motion } from 'framer-motion';

const clientId = 'd29203bd77534133951f68c3e9c9010c';
const clientSecret = 'f733861134114fc78ac03064289241f4';

async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ grant_type: 'client_credentials' }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    return data.access_token;
}

async function searchArtists(query) {
    const accessToken = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch artists');
    }

    const data = await response.json();
    return data.artists.items;
}

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [artists, setArtists] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            setError(null);
            const results = await searchArtists(query);
            setArtists(results);
        } catch (error) {
            setError('An error occurred while fetching the artist data.');
        }
    };

    const handleClear = () => {
        setQuery('');
        setArtists([]);
        setFormVisible(false);
    };

    return (
        <section id="search" className="py-20 text-white  relative min-h-screen">
            <div className="container mx-auto px-6 text-center">
                <h2 className="sm:text-5xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 sm:tracking-wide font-semibold font-Tan-Nimbus  mb-6">Find Your Favorite Techno Artist</h2>
                <p className="sm:text-2xl font-semibold tracking-wider font-EFCO bg-gradient-to-r from-[#d12fea] to-gray-700  bg-clip-text text-transparent mb-12">Enter the name of your favorite artist to get more information.</p>

                {/* Search Buttons */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setFormVisible(!isFormVisible)}
                        className="bg-blue-600 py-2 px-4 tracking-wider rounded-md hover:bg-blue-500 focus:outline-none shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Search Artist
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-[#FF4848] py-2 px-4 tracking-wider rounded-md hover:bg-red-500 focus:outline-none shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Clear
                    </button>
                </div>

                {/* Search Form */}
                {isFormVisible && (
                    <div className="mt-8 text-center">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter Artist Name"
                            className="bg-gray-800 text-white py-2 tracking-widest px-4 rounded-md border border-gray-700 focus:outline-none w-full max-w-md"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-green-600 tracking-wider py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none ml-4 transform hover:scale-105 transition duration-300"
                        >
                            Search
                        </button>
                    </div>
                )}

                {/* Search Results */}
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {artists.length > 0 && (
                    <div id="search-results" className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {artists.map((artist) => (
                            <motion.div
                                key={artist.id}
                                className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col justify-between"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-center">{artist.name}</h3>
                                    <p className="text-gray-300 text-sm mb-2 text-center">Genres: {artist.genres.join(', ')}</p>
                                    <p className="text-gray-300 text-sm mb-4 text-center">Followers: {artist.followers.total.toLocaleString()}</p>
                                </div>
                                <div className="flex justify-center mt-4 z-10">
                                    <a
                                        href={artist.external_urls.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none text-sm"
                                    >
                                        View on Spotify
                                    </a>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-600 opacity-0 hover:opacity-20 transition duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchPage;
