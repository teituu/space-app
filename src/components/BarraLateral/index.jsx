import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"
const ListaEstilizada = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   width: 236px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion 
                        iconoActivo="public/img/iconos/home-activo.png" 
                        iconoInactivo="public/img/iconos/home-inactivo.png"
                        activo={true}
                    >
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="public/img/iconos/mas-vistas-activo.png" 
                        iconoInactivo="public/img/iconos/mas-vistas-inactivo.png"
                    >
                        Más vistas
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="public/img/iconos/me-gusta-activo.png" 
                        iconoInactivo="public/img/iconos/me-gusta-inactivo.png"
                    >
                        Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="public/img/iconos/nuevas-activo.png" 
                        iconoInactivo="public/img/iconos/nuevas-inactivo.png"
                    >
                        Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="public/img/iconos/sorprendeme-activo.png" 
                        iconoInactivo="public/img/iconos/sorprendeme-inactivo.png"
                    >
                        Sorpréndeme
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral