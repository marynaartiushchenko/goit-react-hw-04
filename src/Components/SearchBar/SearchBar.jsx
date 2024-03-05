import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
            toast.error('Please enter a search query!');
            return;
        }
        
        setIsSubmitting(true);
        try {
            await onSubmit(trimmedQuery);
            setQuery('');
        } catch (error) {
            toast.error('An error occurred while fetching images.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    ref={inputRef}
                />
                <button type="submit" disabled={isSubmitting}>Search</button>
                {isSubmitting && <span>Searching...</span>}
            </form>
        </header>
    );
}