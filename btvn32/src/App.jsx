import { useState } from 'react'
import './App.css'
    function CalculatorUI() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
        const styles = {
            container: {
                padding: '30px',
                maxWidth: '400px',
                margin: '50px auto',
                textAlign: 'center',
                backgroundColor: '#f4f4f4',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
            title: {
                marginBottom: '20px',
                color: '#333',
            },
            input: {
                width: '80%',
                padding: '10px',
                margin: '8px 0',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '6px',
            },
            buttonGroup: {
                marginTop: '15px',
            },
            button: {
                padding: '10px 20px',
                margin: '6px',
                fontSize: '18px',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '6px',
                transition: 'background-color 0.3s',
            },
            clearButton: {
                marginTop: '15px',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                backgroundColor: '#f44336',
                color: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
            },
            result: {
                marginTop: '20px',
                fontSize: '18px',
                color: '#222',
            },
        };
        const calculate = () => {
            const n1= parseFloat(num1);
            const n2= parseFloat(num2);

            if(isNaN(n1)||isNaN(n2)) {
                setResult('NHap so vo ');
                return null;
            }
            return[n1, n2];
        }
        const operation =(operator) => {
            const values = calculate();
            if(!values) return null;
            const [n1, n2] = values;
            let result ;
            switch(operator) {
                case '+':
                    result = n1 + n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                    case '/':
                     if(n2 === 0) {
                         setResult('ko the chia cho 0')
                         return ;
                     }
                     result = n1 / n2;
                     break;
                     default:
                         return null;
            }
            setResult(result);
        }
        const clear = () => {
            setNum1('');
            setNum2('');
            setResult('');
        }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

            <input
                type="number"
                placeholder="Số thứ nhất"
                style={styles.input}
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Số thứ hai"
                style={styles.input}
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <div style={styles.buttonGroup}>
                <button style={styles.button} onClick={() => operation('+')}>+</button>
                <button style={styles.button} onClick={() => operation('-')}>−</button>
                <button style={styles.button} onClick={() => operation('*')}>×</button>
                <button style={styles.button} onClick={() => operation('/')}>÷</button>
            </div>

            <div style={styles.result}>
                <strong>Kết quả:</strong> <span>{result || 'Chưa có kết quả'}</span>
            </div>

            <button style={styles.clearButton} onClick={clear}>Clear</button>
        </div>
    );
}
export default CalculatorUI;
