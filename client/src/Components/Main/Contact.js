import React from 'react'
import contactImg from "../../assets/contactImg.png"

const Contact = () => {
    const data = [
        {
            title: "PulseConnect Support", body: [
                "123, Park Street",
                "Kolkata, West Bengal, India, 700016",
                "+91 1234567890",
                "support@pulseconnect.com"
            ]
        },
        {
            title: "Administrative Inquiries", body: [
                "456, Rabindra Sarani",
                "Kolkata, West Bengal, India, 700073",
                "+91 1234567891",
                "admin@pulseconnect.com"
            ]
        },
        {
            title: "Other Administrative Queries", body: [
                "789, Park Circus",
                "Kolkata, West Bengal, India, 700017",
                "+91 1234567892",
                "otheradmin@pulseconnect.com"
            ]
        }
    ];

    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={contactImg} draggable={false} width="80%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact