import { Form, Formik } from 'formik';
import { useRef } from 'react';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    const inputRef = useRef(null);

   const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        const query = values.query.trim();
        if (!query) {
            toast.error('Please enter a search query!');
            return;
        }
        
        try {
            await onSubmit(query);
            resetForm();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ query: '' }}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <header>
                        <input
                            type="text"
                            name="query"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            ref={inputRef}
                        />
                        <button type="submit" disabled={isSubmitting}>Search</button>
                        {isSubmitting && <span>Searching...</span>}
                    </header>
                </Form>
            )}
        </Formik>
    );
}