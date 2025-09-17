import { useState } from 'react'
import './App.css'

function App() {
  // 计算器状态管理
  const [displayValue, setDisplayValue] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)
  const [operator, setOperator] = useState(null)

  // 输入数字处理
  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit)
      setWaitingForSecondOperand(false)
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit)
    }
  }

  // 输入小数点处理
  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.')
      setWaitingForSecondOperand(false)
      return
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.')
    }
  }

  // 处理操作符
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue)

    if (firstOperand === null && !isNaN(inputValue)) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      setDisplayValue(String(result))
      setFirstOperand(result)
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  // 计算结果
  const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === '+') {
      return firstOperand + secondOperand
    } else if (operator === '-') {
      return firstOperand - secondOperand
    } else if (operator === '*') {
      return firstOperand * secondOperand
    } else if (operator === '/') {
      return secondOperand !== 0 ? firstOperand / secondOperand : 'Error'
    }
    return secondOperand
  }

  // 重置计算器
  const resetCalculator = () => {
    setDisplayValue('0')
    setFirstOperand(null)
    setWaitingForSecondOperand(false)
    setOperator(null)
  }

  // 按钮组件
  const Button = ({ label, onClick, className = '' }) => (
    <button
      className={`calculator-button ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="calculator-display">{displayValue}</div>
        <div className="calculator-keypad">
          <div className="calculator-row">
            <Button label="AC" onClick={() => resetCalculator()} className="function-button" />
            <Button label="+/-" onClick={() => setDisplayValue(String(-parseFloat(displayValue)))} className="function-button" />
            <Button label="%" onClick={() => setDisplayValue(String(parseFloat(displayValue) / 100))} className="function-button" />
            <Button label="/" onClick={handleOperator} className="operator-button" />
          </div>
          <div className="calculator-row">
            <Button label="7" onClick={inputDigit} />
            <Button label="8" onClick={inputDigit} />
            <Button label="9" onClick={inputDigit} />
            <Button label="*" onClick={handleOperator} className="operator-button" />
          </div>
          <div className="calculator-row">
            <Button label="4" onClick={inputDigit} />
            <Button label="5" onClick={inputDigit} />
            <Button label="6" onClick={inputDigit} />
            <Button label="-" onClick={handleOperator} className="operator-button" />
          </div>
          <div className="calculator-row">
            <Button label="1" onClick={inputDigit} />
            <Button label="2" onClick={inputDigit} />
            <Button label="3" onClick={inputDigit} />
            <Button label="+" onClick={handleOperator} className="operator-button" />
          </div>
          <div className="calculator-row">
            <Button label="0" onClick={inputDigit} className="zero-button" />
            <Button label="." onClick={inputDecimal} />
            <Button label="=" onClick={handleOperator} className="equals-button" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
