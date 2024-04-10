// Aplica los estilos CSS
const styles = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 20px;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    nav ul li {
        display: inline;
        margin: 0 10px;
    }

    nav ul li a {
        text-decoration: none;
        color: #333;
    }

    main {
        padding: 20px;
    }

    section {
        margin-bottom: 20px;
    }

    section h2 {
        color: #333;
    }

    form {
        margin-top: 10px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    button[type="submit"] {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: #555;
    }

    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;

// Inserta los estilos en el documento HTML
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);