import React from 'react'

function iphone(props) {
    return (
        <div>
            <div className="gridConatiner" style={
                props.mystyle
            }>
                <div className="griditem">
                    <div className="mypng">
                        <img src="https://cartzilla.createx.studio/assets/img/intro/mobile-light.png" alt="" />
                    </div>
                </div>
                <div className="griditemtwo">
                    <div className="myqr" id='myqr'>

                        <h1>Mobile Friendly <br /> Interface. PWA ready</h1>
                        <br />

                        <span>Cartzilla ensures seamless interactions across all devices. With progressive web app (PWA) compatibility, users can enjoy the app-like experiences on their mobile browsers.</span>
                        <br /><br />
                        <strong>Scan QR code below to test on your device:</strong>
                        <br /><br />
                        <img src="https://cartzilla.createx.studio/assets/img/intro/qr-light.png" alt="" />
                    </div>
                </div>

            </div>
            <div style={
                props.mystyle} id='niche'>
                <h1 id='centerh1' style={
                    props.mystyle}>Theme Customizer</h1>
                <br />
            </div>

        </div>
    )
}

export default iphone
