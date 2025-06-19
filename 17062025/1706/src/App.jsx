import './App.css';
import FTable from './components/FTable';

function App() {
    const columns = [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Name' },
        { name: 'age', text: 'Age' },
        { name: 'adress', text: 'Address' },
        { name: 'action', text: 'Action' }
    ];

    const rows = [
        { id: 1, name: 'Viet', age: 23, adress: 'Ha Noi' },
        { id: 2, name: 'Nam', age: 24 },
        { id: 3, name: 'Lan', age: 22},
    ];

    return <FTable columns={columns} rows={rows} />;
}

export default App;
