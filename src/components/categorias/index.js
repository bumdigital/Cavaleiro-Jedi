
import { Row } from 'react-bootstrap';

export default function Categorias() {
    return (
        <div className="mb-5">
            <Row>
                <div className="bg-success text-white rounded shadow">
                    <div className="produtos p-3">
                        <p className="text-center my-4 h3">Categorias</p>
                        <div className="">
                            <div className="d-flex justify-content-between mt-2">
                                <span>Todos</span> <span>16</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Gato filhote</span> <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Gato adulto</span> <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Cachorro filhote</span> <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Cachorro adulto</span> <span>4</span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </Row>

        </div>
    );
}