import React from 'react';
import styled from 'styled-components'

const ContainerHeader = styled.div`
    background-color: #34af23;
    border-radius: 25px;
    color: white;
    text-align: center;
    padding:10px;
    margin-bottom: -20px;
`

class Header extends React.Component {
    render (){
        return(
            <ContainerHeader>
            <h1>Whats Lab Jaime</h1>
            </ContainerHeader>

            
        )
    }
}

export default Header;