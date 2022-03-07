import React, {useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from  "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobre, setSobre] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    
    return (
        <form
            onSubmit = {(event) => {
                event.preventDefault();
                aoEnviar({nome, sobre, cpf, promocoes, novidades} );
            }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpnome = event.target.value;
                    if(tmpnome.length >= 10){
                        tmpnome = tmpnome.substr(0, 10);}
                    setNome(tmpnome);
                    }}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth 
            />
            <TextField
                value={sobre}
                onChange={(event) => {
                    let tmpsobre = event.target.value;
                    if(tmpsobre.length >= 10){
                        tmpsobre = tmpsobre.substr(0, 10);}
                    setSobre(tmpsobre);
                    }}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth 
            />
            <TextField  
                value={cpf}
                onChange={(event) => {
                    let tmpcpf = event.target.value;
                    if(tmpcpf.length >= 11){
                        tmpcpf = tmpcpf.substr(0, 11);}
                    setCpf(tmpcpf)
                    }}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth 
            />
            
            <FormControlLabel 
                label="Promoções" 
                control={<Switch 
                            checked = {promocoes}
                            onChange = {(event) => {
                                setPromocoes(event.target.checked)
                            }}
                            name="promocoes" 
                            defaultChecked = {promocoes}
                            color="primary" />} 
            />
            <FormControlLabel 
                label="Novidades" 
                control={<Switch 
                            checked = {novidades}
                            onChange = {(event) => {
                                setNovidades(event.target.checked)
                            }}
                            name="novidades" 
                            defaultChecked = {novidades}
                             color="primary" />} 
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                    Cadastrar
            </Button>

        </form>
    );
}

export default FormularioCadastro;