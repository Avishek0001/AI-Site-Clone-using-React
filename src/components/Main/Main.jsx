import React, { useContext } from 'react';
import "./Main.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';


const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    const handleClick = (text) => {
        setInput(text);
    };

    return (
        <div className='main'>
            <div className="nav">


                <p><span style={{ fontSize: "30px", color: "#3103a3" }}>AI</span> Website </p>

                <img src={assets.user_icon} alt='' />
            </div>

            <div className="main-container">

                {!showResult ?
                    <>

                        <div className="greet">
                            <img className='title_logo' src="https://cdn.scite.ai/assets/images/icons/assistant.svg" alt="" />
                            <p><span>Ask and Discover</span></p>


                        </div>



                        <div className="cards">
                            <div className="card" onClick={() => handleClick('Write an email')}>
                                <p>Write an email</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleClick('Recommend a Dish')}>
                                <p>Recommend a Dish</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleClick('Write a Python Script')}>
                                <p>Write a Python Script</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleClick('Create a Personal WebPage For me')}>
                                <p>Create a Personal WebPage For me</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>


                    </>

                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ?
                                <div className="loading">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            }
                        </div>


                    </div>

                }




                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>


                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>

                    <p className="bottom-info">
                        This site may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Main