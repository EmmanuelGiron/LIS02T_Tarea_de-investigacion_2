//let url='http://127.0.0.1:8000/api/cupon/';
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".cupon-container");

const estado= 1;


button.addEventListener('click',(e)=>{
    e.preventDefault();
    update_cupon(input.value,estado);
    swal({
        title: "¿Estas Seguro de canjear el cupon?",
        text: "Una vez canjeado",
        text: "Canjeado, No se podra deshacer el cambio de este mismo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Cupon Canjeado Con exito!", "Cupon Canjeado Con ID " + input.value, {
            icon: "success",
            timer:1700,
          });
        } else {
          swal("Revisa el codigo de cupon primero.",{
            timer:1700,
          });
        }
      });  
})

function update_cupon(cupon, estado){
    fetch(`http://127.0.0.1:8000/api/cupon/${cupon}/${estado}/`, {
        method: 'PUT',
        headers: {
          'api_key': '$2y$10$q1JzcIL7MhAttVxtDbSUpOdzMqepnKNyjM.WlKTR0VSJSD.QHLslW'
      }
    })
    .then(res => res.json())    
}





/*Para mostrar*/
button.addEventListener('click',(e)=>{
    e.preventDefault();
    traercupon(input.value);
    
})

function traercupon(cupon){
  fetch(`http://127.0.0.1:8000/api/cupon/${cupon}/`, {
    headers: {
        'api_key': '$2y$10$q1JzcIL7MhAttVxtDbSUpOdzMqepnKNyjM.WlKTR0VSJSD.QHLslW'
    }
})  
    .then((res)=>
    res.json())

    .then(data=>{
        mostrarCupon(data);
        //console.log(data);
    });
}




function mostrarCupon(cupon){

   const tabla = document.querySelector('#tabla-datos tbody');
   const row = document.createElement('tr');

   const one =document.createElement('td');
   one.textContent=cupon[0].ID_Cupon;
   row.appendChild(one);

   const two =document.createElement('td');
   two.textContent=cupon[0].DUI;
   row.appendChild(two);

   const three =document.createElement('td');
   three.textContent=cupon[0].ID_Oferta;
   row.appendChild(three);

   const four =document.createElement('td');
   four.textContent=cupon[0].Estado;
   row.appendChild(four);

   /*const four =document.createElement('td');
   four.textContent=cupon[0].ID_Estado_Cupon;
   row.appendChild(four);*/
   
   /*Aqui agrega los datos de row a la tabla*/
   tabla.appendChild(row);   
}



traercupon();
update_cupon();