import React, {useEffect, useState} from 'react'

const PaymentIframe = ({paymentUrl}) => {
    const [iframeSrc, setIframeSrc] = useState('');

    useEffect(() => {
        if(paymentUrl){
            setIframeSrc(paymentUrl);
        }
    }, [paymentUrl])
    return (
    <div>
        {iframeSrc && <iframe title="Payment Iframe" src={iframeSrc} width="100%" height="500px"></iframe>}
    </div>
    )
}

export default PaymentIframe