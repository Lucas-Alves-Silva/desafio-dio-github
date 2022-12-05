import styled from "styled-components";

export const Main = styled.div`
    margin: 0;
    padding: 0;
    font-family: Roboto;
`

export const Nav = styled.div`
    background-color: #151515;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 10px;
    margin-top: 5px;
    padding-top: 10px;
`

export const Logotipo = styled.div`
    width: 10%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-left: 60px;
    padding-top: 7px;
`

export const Menu = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    li {
        font-family: Roboto;
        width: 100px;
        height: 20px;
        font-size: 16px;
        background-color: #565656;
        border: 1px solid #565656;
        border-radius: 20px;
        text-align: center;
        list-style: none;
        float: left;
        margin-left: 20px;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    a:link {
    text-decoration: none;
    color: #FFFFFF;
    }

    a:hover {
    text-decoration: none;
    color: #FFFFFF;
}
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1E192C;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .texto {
        font-size: 50px;
        padding-left: 69px;
        padding-top: 120px;
    }

    .tituloFormulario {
        font-size: 50px;
        padding-left: 69px;
        padding-top: 120px;
        margin-right: 250px;
        text-align: left;
    }

    .subtituloFormulario {
        font-size: 23px;
        text-align: left;
        margin-top: 12px;
    }

    .formulario {
        font-size: 12px;
        margin-top: 30px;
    }

    .formulario img {
        width: 25px;
        height: 25px;
        float: left;
        margin-top: 14px;
}

    input {
        font-size: 17px;
        color: #FFFFFF;
        background-color: #1E192C;
        border-bottom: 1px solid #3B3450;
        border-right: none;
        border-top: none;
        border-left: none;
        width: 250px;
        height: 40px;
        padding-left: 10px;
        padding-top: 10px;
        outline: none;
    }

    input::placeholder {
        color: #FFFFFF;
    }

    .botao {
    background-color: #E4105D;
    font-size: 18px;
    color: #FFFFFF;
    width: 280px;
    height: 40px;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    border: 1px solid #E4105D;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
}

    .botao:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        transition-duration: 0.4s;
    }

    .botaoBorda {
        background-color: #1E192C;
        border: 1px solid #E4105D;
        border-radius: 40px;
        width: 300px;
        height: 60px;
        margin-top: 40px;
    }

    .textoAbaixoBotao {
        font-size: 23px;
        text-align: left;
        margin-top: 30px;
    }

    .textoAbaixoTextoBotao {
        font-size: 15px;
        text-align: left;
        margin-top: 20px;

        a {
            color: #23DD7A;
            text-decoration: none;
        }
    }
`