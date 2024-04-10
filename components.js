// Define los componentes HTML
const headerComponent = `
    <header>
        <h1>W3D</h1>
    </header>
`;

const navComponent = `
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
`;

const mainComponent = `
    <main>
        <section>
            <h2>Sobre Nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
            <h2>Nuestros Servicios</h2>
            <ul>
                <li>Diseño WEB</li>
                <li>Video de Drones</li>
                <li>Impresión 3d</li>
            </ul>
        </section>
        <section>
            <h2>¡Contactanos!</h2>
            <p>¡Estamos aquí para ayudarte a hacer realidad tus ideas mas locas!</p>
            <form>
                <label for="nombre">Tu nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="mensaje">Danos una breve descriocion de tu idea:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
`;

const footerComponent = `
    <footer>
        <p>&copy; 2024 Mi Página Web</p>
    </footer>
`;

// Inserta los componentes en el documento HTML
document.getElementById('app').innerHTML = headerComponent + navComponent + mainComponent + footerComponent;
