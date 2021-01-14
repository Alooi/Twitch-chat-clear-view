import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Oneword from './oneword';
import Fivewords from './fivewords';
import Home from './home';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/oneword" component={Oneword} />
                <Route path="/fivewords" component={Fivewords} />
            </Switch>
        </main>
    )
}

export default App
;