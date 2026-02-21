import NavLink from '@core/components/atoms/NavLink';

export default function NavMenu() {
    return (
        <nav className="flex items-center gap-2">
            <NavLink to="/catalogo" end>Catalogo</NavLink>
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/info/sobre-nosotros" end>Nosotros</NavLink>
        </nav>
    );
}
