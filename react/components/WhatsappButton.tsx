import React from "react"
import PropTypes from 'prop-types'


type Props = {
    logo: string
    phone: string
    message: string
    height: number
    width: number
    font: string
}

const WhatsappButton = ({ logo, phone, message, width, height, font }: Props) => {

    const formatTextMessage = message.replace(/ /g, '20%');

    return (
        <>
            <div className={`fixed bottom-2 left-5 flex flexColumn ph5 z-5 items-center `}>
                <a
                    href={`https://wa.me/${phone}?text=${formatTextMessage}`}
                    target='_blank'
                    rel="noreferrer noopener"
                    className={`bg-white br-50 flex justify-center items-center ph3 pv3`}
                    style={{ borderRadius: "50%", height: "50px" }}
                >
                    <img src={logo} width={width} height={height} alt="Logo" />

                </a>
                <p className={`no-underline bg-white br2 ph3 pv3 mh2 ${font}`}>Chatea con nosotros</p>
            </div>
        </>
    )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    font: PropTypes.string
}

WhatsappButton.defaultProps = {
    logo: "logo-whatsapp.png",
    phone: "3208041066",
    message: "Estás comunicándote con Julio Colombia, por favor ingresa tu duda.",
    width: 35,
    height: 35,
    font: "t-body"
}

WhatsappButton.schema = {
    title: 'Boton de Whatsapp',
    type: 'object',
    properties: {
        logo: {
            title: 'Logo de WhatsApp que se relacione con la marca',
            type: {
                'ui:widget': 'image-uploader'
            }
        },
        phone: {
            title: 'Telefono',
            description: 'Agrega por favor el numero de telefono',
            type: 'string'
        },
        message: {
            title: 'Telefono',
            description: 'Agrega por favor el mensaje que vera su cliente',
            type: 'string',
            widget: {
                'ui.widget': 'textarea'
            }
        },
        width: {
            title: 'Ancho',
            description: 'Agrega por favor el numero de telefono',
            type: 'number'
        },
        height: {
            title: 'Alto',
            description: 'Agrega por favor el numero de telefono',
            type: 'number'
        },
        font: {
            title: 'Fuente',
            description: 'Agrega por la fuente del texto',
            type: 'string'
        },

    }
}

export default WhatsappButton;