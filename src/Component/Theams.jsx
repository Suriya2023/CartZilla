import React from 'react'

function iphone(props) {
    return (
        <div style={
            props.mystyle}>
            <div className="gridConatiner" style={
                props.mystyle
            }>

                {/* <h1 id='center'>Theme /Customizer</h1> */}
                <div className="griditemtwote">
                    <div className="myq2r" id='myqr2'>
                        <button id='btn1'>Colors</button>
                        <br /><br />
                        <h4 id='mcseven'>Change theme brand colors <br />
                            quickly and easily</h4>

                        <span id="spanid">Customize theme colors to match your brand palette using the color picker or just type in the color hex. Supported colors: primary, warning, success, info, danger.</span>
                        <br /><br />
                        {/* <strong>Scan QR code below to test on your device:</strong> */}
                        <br /><br />
                    </div>
                </div>

                <div className="griditemtwote2">
                    <div className="nidnsi">
                        <button id='btn1'>Colors</button>

                        <h4 id='mcseven'>Change theme brand colors <br />
                            quickly and easily</h4>

                        <span id="spanid">Customize theme colors to match your brand palette using the color picker or just type in the color hex. Supported colors: primary, warning, success, info, danger.</span>
                        <br /><br />
                        {/* <strong>Scan QR code below to test on your device:</strong> */}
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default iphone
