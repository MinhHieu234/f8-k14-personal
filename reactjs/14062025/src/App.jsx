import './App.css'
import {} from './components'

const Cell = (props) => {
    const {id,name,age } = props;
    return (
        <td>
            {id}
            {name}
            {age}
        </td>
    )
}
const Row = () => {
    return (
        <tr>
            <Cell/>
            <Cell/>
            <Cell/>
        </tr>
    )
}
function App() {
    const columns = ['id', 'name', 'age']
    const rows = [
        {id: 1, name: 'viet', age: 23},
        {id: 2, name: 'viet nam', age: 23},
        {id: 3, name: 'nam viet', age: 23},
    ]

    return (
        <>
            <table width={'100%'} border={1} cellSpacing={0}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
                </thead>
                <tbody>
                <Row/>
                <Row/>
                <Row/>
                </tbody>
            </table>
        </>
    )
}
export default App