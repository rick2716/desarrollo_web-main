import './Amazon.css';
import menu from './img/menu.png';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

function Amazon() {
  return (
    <div className="container">
      <div className="header">
        <div className="containerBuscador">
          <div className="logo">
            <p id="logoAmazon">AMAZON</p>
          </div>
          <div className="ubicacion">
            <p>Enviar a Ricardo</p>
            <p className="bold">Santiago ... 760032</p>
          </div>
          <div className="buscador">
            <input id="inputBuscar" name="inputBuscar" placeholder="phones" />
          </div>
          <div className="bandera">
            <p id="logoBandera">COL</p>
          </div>
          <div className="listas">
            <p>Hola Ricardo</p>
            <p className="bold">Cuenta y Listas</p>
          </div>
          <div className="pedidos">
            <p>Devoluciones</p>
            <p className="bold">y Pedidos</p>
          </div>
          <div className="carrito">
            <p className="bold">Carrito</p>
          </div>
        </div>
        <div className="opciones">
          <button className="botonOpciones"><img id="imgMenu" src={menu} /> Todo</button>
          <button className="botonOpciones">Ofertas del Día</button>
          <button className="botonOpciones">Comprar de Nuevo</button>
          <button className="botonOpciones">Tarjetas de Regalo</button>
          <button className="botonOpciones">Amazon de Ricardo</button>
          <button className="botonOpciones">Historial</button>
          <button className="botonOpciones">Servicio al Cliente</button>
          <button className="botonOpciones">Listas</button>
          <button className="botonOpciones">Vender</button>
        </div>
        <div className="resultado">
          <p>
            1 a 16 de más de 100,000 resultados para
            <span id="phone">"phone"</span>
          </p>
          <select name="Ordenar por:">
            <option value="value1">Destacados</option>
            <option value="value2">Precio</option>
            <option value="value3">A - Z</option>
          </select>
        </div>
      </div>
      <div className="filtro">
        <p>
          Envío Gratis por Amazon <br />
          Elegible para Envío Gratis <br />
          Inocuo para el clima
          <br />
          Climate Pledge Friendly
          <br />
          Departamento
          <br />
          Celulares
          <br />
          Teléfonos, VoIP y Accesorios
          <br />
          Teléfonos Fijos
          <br />
          Minutos Prepagados de Celulares
          <br />
          Accesorios de Celulares
          <br />
          Tarjetas SIM de Celulares
          <br />
          Electrónica
          <br />
          Fundas y Cubiertas para Celular
          <br />
          Ver los 23 departamentos
          <br />
          Reseña del Cliente
          <br />
          4 Estrellas o más o más
          <br />
          3 Estrellas o más o más
          <br />
          2 Estrellas o más o más
          <br />
          1 estrella o más o más
          <br />
          Brand
          <br />
          Samsung Electronics
          <br />
          Motorola
          <br />
          Apple
          <br />
          TCL
          <br />
          AT&T
          <br />
          Microsoft
          <br />
          Panasonic
          <br />
          Ver más
          <br />
          Cell Phone Price
          <br />
          Menos de $50
          <br />
          $50 a $100
          <br />
          $100 a $150
          <br />
          $150 a $250
          <br />
          $250 a $400
          <br />
          $400 a $600
        </p>
      </div>
      <div className="main">
        <h2>RESULTADOS</h2>
        <div className="containerResultados">
          <div className="img1">
            <img id="img1" src={img1} />
          </div>
          <div className="producto1">
            <p className="bold">
              Plan de teléfono móvil Ultra de $19, conversación y texto
              ilimitados + 2 GB 5 GB ● Datos 4G LTE (tarjeta SIM GSM 3 en 1)
            </p>
            <p>Calificacion</p>
            <p>
              US$<span className="dolares">19</span>00
            </p>
            <p className="bold">Envio GRATIS a Colombia</p>
          </div>
          <div className="img2">
            <img id="img2" src={img2} />
          </div>
          <div className="producto2">
            <p className="bold">
              Reloj inteligente para hombres y mujeres, rastreador de fitness con
              frecuencia cardíaca, presión arterial, monitor de sueño, ratreador
              de pasos, podómetro impermeable, 24 modos...
            </p>
            <p>Calificacion</p>
            <p>
              US$<span className="dolares">35</span>99
            </p>
            <p className="bold">Envio GRATIS a Colombia</p>
          </div>
          <div className="img3">
            <img id="img3" src={img3} />
          </div>
          <div className="producto3">
            <p className="bold">
              TrackFone Blu View 2 4G LTE - Smartphone prepago (bloqueado) -
              Negro - 32 GB - Tarjeta SIM incluida - CDMA
            </p>
            <p>Calificacion</p>
            <p>
              US$<span className="dolares">19</span>00
            </p>
            <p className="bold">Envio GRATIS a Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amazon;
