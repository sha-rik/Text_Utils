import React from 'react'

export default function About(props) {
    // ye ho gaya for toggling the color of the page...ye state uske liye use hua


    // const [mystyle, setmystyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black',
    // })

    let mystyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'#0f0f41':'white',
        border : '2px solid',
        borderColor : props.mode === 'dark'?'#0f0f41':'white',
    }


    // const toggleStyle = () => {
    //     if(mystyle.color === 'white'){
    //         setmystyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid black',
    //         })
    //         setbtntext('Enable Dark Mode')
    //     }
    //     else{
    //         setmystyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white',
    //         })
    //         setbtntext('Enable Light Mode')
    //     }
    // }
    // now we will make a state for changing the text of the button fron enable dark mode to disable dark mode and reverse

    // const [btntext, setbtntext] = useState("Enable Dark Mode")

    return (
        // agar ham koi bhi style dena chahte h to uske liye ham inline css ka use karenge... jaise hamne style={myStyle} likha h

        <div className='container my-3' style={mystyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyse you text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Brouse</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className='btn btn-danger'>{btntext}</button>
            </div> */}
        </div>
    )
}
