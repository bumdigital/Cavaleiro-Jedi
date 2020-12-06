import {Switch, Route} from 'react-router-dom';

import  Produtos from './Pages/produtos';
import Pedidos from './Pages/pedidos';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/pedidos" component={Pedidos}/>
        </Switch>
    );
}

export default Rotas;