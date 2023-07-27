import React, {useState} from 'react'
// jab tum button me click karoge to ye handleuUpClick function call hoga
// aur uske andar hamne set_text (variable) use kiya jisse ham state ka content jo phele Enter text here blah blah
// usko change karcdenge...(You have clicked on the button) se
export default function Textform(props) {

    // we have made a state for toggling the color of the page


    // const [mystyle,setmystyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black'
    // })


    // const toggle = () => {
    //     if(mystyle.color==='white')
    //     {
    //         setmystyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid black',
    //         })
    //         setbtntext('Enable Dark Mode')
    //     }
    //     else
    //     {
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


    // now we will make a function... arrow function
    const handleuUpClick = () => {
        // ye console.log ko tum hata bhi sakte ho... ye bas samajhne ke liye h ki jab bhi tum button par click karoge
        // to ye function call hoga

        // console.log("Uppercase was clicked" + text);

        // hamne text ko uppercase me convert kar diya h
        let newtext= text.toUpperCase();
        // ham jo kuch bhi text area me likhenge wo text variable me store ho jayega...
        // aur fir ham usko uppercase me convert karke newtext me store kar lenge.... toUpperCase()... is function ke help se
        // aur fir ham usko set_text(newtext) se state me change kar denge
        set_text(newtext);
        // and this how we change the state... by using set_text
        // this is the correct way to change the state

        props.showAlert("Converted to uppercase", "success");
    }
    const HandleOnChange = (event) => {
        // ye console.log ko tum hata bhi sakte ho... ye bas samajhne ke liye h ki jab bhi tum text area me kuch change karoge
        // to ye function call hoga

        // console.log("On change function... par abhi iska kya kaam h... kuch samajh nahi aaya");

        // event variable se ham.... jab function ke andar set_text(event.target.value) likhte h to a ham text area(main wwebsite me) 
        // likh sakhte h
        set_text(event.target.value);

    }


    // ab hamloog ek aur function banayenge... jo ki lowercase me convert karega
    const handleLoClick = () => {
        let newtext= text.toLowerCase();
        set_text(newtext);

        props.showAlert("Converted to lowercase", "success")
    }
    // how to control speed of reading
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        // slow down the speed
        msg.rate = 1.0;
        // change the voice
        msg.voice = window.speechSynthesis.getVoices()[1];
        // for output voice
        window.speechSynthesis.speak(msg);
        props.showAlert("Bool basanti", "success")

    }
    // add a pause button
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause
    const pause = () => {
        window.speechSynthesis.pause();
        props.showAlert("chup ho ja", "success")
    }
    const resume = () => {
        window.speechSynthesis.resume();
        props.showAlert("fir se bolna start kar", "success")
    }
    const stop = () => {
        window.speechSynthesis.cancel();
        props.showAlert("Chup ,Bilkul chup", "success")
    }

    //counting the number of vowels
    // https://stackoverflow.com/questions/29451507/counting-the-number-of-vowels-in-a-string-with-javascript

    // ye state h... iske bare me abhi jaya kuch samajh snahi aaya .... so baad me dekhte h
    // state ek aisha vairable jisko react automatically watch karega... iska kafi faida hoga aage...

    const [text,set_text] = useState('Enter text here blah blah');

    const Copy_text = () => {
        // text copy
        let t = document.getElementById("mybox");
        // t.select se sara text select ho jata h
        t.select();
        navigator.clipboard.writeText(t.value);
        // text copy karne ke baad ham chahte h ki text select na rahe...
        // to ham usko remove kar denge.. whit the help of below line
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success")
    }

    const Remove = () => {
        // ek ya ek se zayada spaces h to usko ham split kar dengen... aur unka array bana denge
        let newtext = text.split(/[ ]+/);
        // fir ham un sare array ko join  kar denge with only single space
        set_text(newtext.join(" "))
    }

    return (
        <>
        <div className='container' style={{color : props.mode==='dark' ? 'white' : 'black'}}>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                {/* jab bhi kuch change karoge text ke area me to... HandleOnChange function call hoga */}
                <textarea className="form-control" value ={text} onChange={HandleOnChange} 
                style={{backgroundColor : props.mode==='dark'?'#1652a3':'white',color : props.mode==='dark' ? 'white' : 'black'}}    id="mybox" rows="8"></textarea>
            </div>
            {/* we had made a button to change the input to upper case */}
            <button disabled ={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleuUpClick} >Convert to uppercase</button>
            {/* Now we will make a button to change i/p to lowercase */}
            {/* outline hatane ke liye btn btn-success/primary/danger lihko sirf */}
            <buttom disabled={text.length===0} className="btn btn-outline-danger my-3 mx-2" onClick={handleLoClick}>Convert to lowercase</buttom>

            {/* speaking button */}
            <buttom disabled={text.length===0} className="btn btn-outline-warning my-3 mx-2" onClick={speak}>Screen reader</buttom>
            {/* pause button */}
            <buttom disabled={text.length===0} className="btn btn-outline-warning my-3 mx-2" onClick={pause}>Pause</buttom>
            {/* resume button */}
            <buttom disabled={text.length===0} className="btn btn-outline-warning my-3 mx-2" onClick={resume}>Resume</buttom>
            {/* stoping */}
            <buttom disabled={text.length===0} className="btn btn-outline-info my-3 mx-2" onClick={stop}>stoping</buttom>
            {/* copying button */}
            <button disabled={text.length===0} className="btn btn-outline-danger my-3 mx-2" onClick={Copy_text}>Copy Text </button>
            {/* Removing extra spaces */}
            <button disabled={text.length===0} className="btn btn-outline-danger my-3 mx-2" onClick={Remove}>Remove Extra spaces</button>
        </div>

        <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
            {/* ab hamloog count rakehge total number of words aur tital number of charecter ka */}
            <h2>Your text details</h2>

            {/* hame filter ka use karke blank spaces remove kar sakte h */}
            {/* filter true false return karta h */}
            {/* jis bhi element ke liye filter true return karega wo element rahega aur jiske liye false return karega wo nahi rahega */}

            <p>{text.length} <b> characters</b> and {text.split(" ").filter((element)=>{return element.length!==0}).length} <b>words</b></p>

            {/* ham sath me _____ miniute read bhi likhnge */}
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

            {/* ham previw ka bhi option denge */}
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>


        {/* <div className='container' style={mystyle}>
            <button type='button' onClick={toggle} className='btn btn-success'>{btntext}</button>
        </div> */}


        </>
    )
    
}
