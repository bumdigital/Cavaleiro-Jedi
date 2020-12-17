import {Switch, Route} from 'react-router-dom';

import  Produtos from './Pages/produtos';
import Pedidos from './Pages/pedidos';
import Lojas from './Pages/nossas_lojas';
import Contato from './Pages/contato';
import Home from './Pages/home';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/pedidos" component={Pedidos}/>
            <Route exact path="/nossas_lojas" component={Lojas}/>
            <Route exact path="/contato" component={Contato}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    );
}

export default Rotas;