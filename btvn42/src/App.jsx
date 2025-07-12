import ContactsList from './components/contacts/ContactsList';
import { Provider } from 'react-redux';
import { store } from './store.js';

function App() {
    return (
        <Provider store={store}>
            <ContactsList />
        </Provider>
    );
}

export default App;
