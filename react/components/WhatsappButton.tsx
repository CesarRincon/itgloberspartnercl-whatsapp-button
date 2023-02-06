import React from "react"
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    height: number
    width: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {

    const formatTextMessage = message.replace(/ /g, '20%');
    console.log(formatTextMessage)
    return (
        <>
            <div className="fixed bottom-2 left-5 flex flexColumn ph5">
                <a
                    href={`https://wa.me/${phone}?text=I'm%20interested%20in%20your%20car%20for%20sale`}
                    target='_blank'
                    rel="noreferrer noopener"
                    className={`bg-white br-50 flex justify-center items-center ph3 pv3`}
                >
                    <img src={logo} width={width} height={height} alt="Logo" />

                </a>
                <p className="no-underline bg-white br2 ph3 pv3 mh2">Chatea con nosotros</p>
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
}

WhatsappButton.defaultProps = {
    logo: "logo-whatsapp.png",
    phone: "3208041066",
    message: "Estás comunicándote con Julio Colombia, por favor ingresa tu duda.",
    width: 35,
    height: 35
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

    }
}

export default WhatsappButton;