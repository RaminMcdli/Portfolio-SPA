import React from 'react'

export default function ContactUs() {
    return (
        <div className='contact-us'>
            <h1>Əlaqə məlumatları</h1>
            <br />
            <div className='contacts-page'>
                <div>
                    <h3>Tel:</h3>
                    <p>+99477 777 77 77 (Whatsapp)</p>
                    <br />
                    <h3>E-mail:</h3>
                    <p>algoritm@yahoo.com</p>
                </div>
                <div>
                    <h3>İş saatları:</h3>
                    <p>I-V 10:00 - 20:00</p>
                    <p>Fasilə: 13:00 - 14:00</p>
                    <h3>Ünvan:</h3>
                    <p>Azərbaycan, Bakı</p>
                </div>
            </div>
            <hr />
            <div className='request'>
                <h4>Bizimlə əlaqə</h4>
                <input type="text" placeholder='Ad soyad'></input>
                <br />
                <input type="text" placeholder='Telefon'></input>
                <br />
                <input type="text" placeholder='E-mail'></input>
                <br />
                <textarea rows="10" cols="30" placeholder='Sorğunuzu bura yazın'></textarea>
                <br />
                <button>Göndər</button>
            </div>
        </div >
    )
}
