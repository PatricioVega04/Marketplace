async function mostrarCantidadArticulos(){
    const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    const datos = await response.json();
    const cantidadArticulos = datos.amount_of_products;
    document.getElementById('cantArticulos').textContent = cantidadArticulos;
}
mostrarCantidadArticulos();


const inputs = document.querySelectorAll('input[name="puntaje-ingresado"]');
inputs.forEach(input => {
    input.addEventListener("change", function () {
        const puntaje = this.value;
        alert(`Has seleccionado ${puntaje} estrella(s).`);
    });
});
