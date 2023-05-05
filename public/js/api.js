
fetch(`http://127.0.0.1:8000/api/cupon/`, {
    headers: {
        'api-key': '$2y$10$q1JzcIL7MhAttVxtDbSUpOdzMqepnKNyjM.WlKTR0VSJSD.QHLslW'
    }
})
        .then(response => response.json())
            .then(data => {
                const tabla = document.querySelector('#tabla-datos tbody');

                data.forEach(dato => {
                    const row = document.createElement('tr');

                    const idCuponCell = document.createElement('td');
                    idCuponCell.textContent = dato.ID_Cupon;
                    row.appendChild(idCuponCell);

                    const duiCell = document.createElement('td');
                    duiCell.textContent = dato.DUI;
                    row.appendChild(duiCell);

                    const idOfertaCell = document.createElement('td');
                    idOfertaCell.textContent = dato.ID_Oferta;
                    row.appendChild(idOfertaCell);
                
                    /*const idEstadoCuponCell = document.createElement('td');
                    idEstadoCuponCell.textContent = dato.ID_Estado_Cupon;
                    row.appendChild(idEstadoCuponCell);*/

                    const idEstadoCell = document.createElement('td');
                    idEstadoCell.textContent = dato.Estado;
                    row.appendChild(idEstadoCell);
                    

                    tabla.appendChild(row);
                });
            })
        .catch(error => console.log(error))
        
