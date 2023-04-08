const Index = {};
Index.viewIndex = (req, res) => {
    res.render('index', {titulo: 'Lumagit'});
}

Index.viewAbout = (req, res) => {
    res.render('nosotros', {titulo: 'Quienes Somos'});
}

Index.viewServicios = (req, res) => {
    res.render('servicios'), {titulo: 'Servicios'};
}

Index.viewContacto = (req, res) => {
    res.render('contacto', {titulo: 'Contacto'});
}

Index.viewClientes = (req, res) => {
    res.render('clientes', {titulo: 'Clientes'});
}

module.exports = Index;