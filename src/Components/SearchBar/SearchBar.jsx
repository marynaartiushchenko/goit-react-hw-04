import {Form, Formik} from 'formik'
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({onSearch} ) {
    return (
        <Formik initialValues={{ query: "" }}
            onSubmit={(values, actions) => {
            onSearch(values.query);
            actions.resetForm();
        }}>
            <Form>
                <header>
                    <form>
                        <input
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                        />
                        <button type="submit">Search</button>
                    </form>
                </header>
            </Form>
        </Formik>
    );
}