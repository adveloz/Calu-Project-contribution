import "../static/shine.css"
function ShineItem(props){
    return(
                <svg
                    id = {props.id}
                    width="8vw"
                    height="8vw"
                    viewBox="0 0 300 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Definición del gradiente radial */}
                        <radialGradient id="gradienteBrillo" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ stopColor: '#ffcfbc', stopOpacity: 1}} />
                            <stop offset="100%" style={{ stopColor: '#FE6D36', stopOpacity: 0}} />
                        </radialGradient>
                        <filter id="brillo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Aplicar el gradiente radial al círculo */}
                    <circle cx={props.posX} cy={props.posY} r={props.radius} fill="url(#gradienteBrillo)" filter="url(#brillo)" />
                </svg>
    );
}
export default ShineItem;