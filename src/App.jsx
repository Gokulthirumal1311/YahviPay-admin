import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './screens/Button'
import IntegratedExample from './screens/IntegratedExample'
import { TableContent } from './screens/TableContent'
import { Layout } from './screens/Layout'

function App() {
    const [count, setCount] = useState(0)

    return (

        <div className = 'p-5'>
            {/* <div>
                <h1 className = ''>New</h1>                
                <Button />

                <IntegratedExample />
                <TableContent />
            </div>  */}
        
            <Layout />
        </div>
    )
}

export default App
