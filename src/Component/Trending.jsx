import React from 'react'

function iphone(props) {
    return (
        <div style={
            props.mystyle}>
            <div className="gridConatiner" style={
                props.mystyle
            }>

                {/* <h1 id='center'>Theme /Customizer</h1> */}


                <div className="griditemtwote3">
                    <div className="nidnsi">
                        <button id='btn1'>Colors</button>

                        <h4>Change theme brand colors <br />
                            quickly and easily</h4>

                        <span id="spanid">Customize theme colors to match your brand palette using the color picker or just type in the color hex. Supported colors: primary, warning, success, info, danger.</span>
                        <br /><br />
                        {/* <strong>Scan QR code below to test on your device:</strong> */}
                        <br /><br />
                    </div>
                </div>



                <div className="griditemtwote">
                    <div className="myq2r" id='myqr2'>
                        <button id='btn12'>Typography</button>
                        <br /><br />
                        <h4>Set up fonts from the huge Google font collection</h4>

                        <span id="spanid">Easily change the font to your liking. Choose the font from Google Fonts library of 1,600+ open source font families. Update headings and body font sizes right from customizer..</span>
                        <br /><br />
                        {/* <strong>Scan QR code below to test on your device:</strong> */}
                        <br /><br />
                    </div>
                </div>

                
            </div>

            <br />
            <div className="gridConatiner" style={
                props.mystyle
            }>

                {/* <h1 id='center'>Theme /Customizer</h1> */}
                <div className="griditemtwote">
                    <div className="myq2r" id='myqr2'>
                        <button id='btn13'>Borders</button>
                        <br /><br />
                        <h4>Rounded or square? Customize borders as you wish</h4>

                        <span id="spanid">It's up to you to make your website soft and friendly with increased border radius or add business vibes with less rounded shapes. Additionally, you can adjust the border width.</span>
                        <br /><br />
                        {/* <strong>Scan QR code below to test on your device:</strong> */}
                        <br /><br />
                    </div>
                </div>

                <div className="griditemtwote22">
                    <div className="nidnsi">
                        <button id='btn1'>Colors</button>

                        <h4>Change theme brand colors <br />
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
