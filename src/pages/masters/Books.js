import React from 'react';

function Books() {
    <h2>Gestionde Libros</h2>
    {('title','author','description','publishDate').map(
        (campo)=>{
            <input>
                key={campo}
                name = {campo}
                value = {Form(campo)}
                onChange = {()=>{}}
                placeholder={campo}
                className ={"form-control nb-2"}
            </input>
        }
    )}
}

export default Books;
