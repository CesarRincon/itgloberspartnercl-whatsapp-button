import React from "react"
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
}

const WhatsappButton = ({ logo, phone, message }: Props) => {

    const formatTextMessage = message.replace(/ /g, '20%');
    console.log(formatTextMessage)
    return (
        <>
            <div className="fixed bottom-2 left-5 flex flexColumn">
                <a
                    href={`https://wa.me/${phone}?text=I'm%20interested%20in%20your%20car%20for%20sale`}
                    target='_blank'
                    rel="noreferrer noopener"
                >
                    <img src={logo} alt="" />
                    <p className="no-underline">Chatea con nosotros</p>

                </a>
            </div>
        </>
    )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
}

WhatsappButton.defaultProps = {
    logo: "logo-whatsapp.png",
    phone: "3208041066",
    message: "Estás comunicándote con Julio Colombia, por favor ingresa tu duda."
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
        }

    }
}

export default WhatsappButton;