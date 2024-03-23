import React, { useContext, useState } from 'react';
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {


  const [expand, setExpand] = useState(false);
  const { onSent, prevPrompts, setRecentPrompts, newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompts(prompt)
    await onSent(prompt)
  }

  function handleToggle() {
    setExpand(prev => !prev)
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img className="menu" src={assets.menu_icon} alt="" onClick={handleToggle} />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {expand ? <p>New Chat</p> : null}
        </div>
        {expand ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 16)}...</p>
                </div>
              )
            })}

          </div>
          : null
        }
      </div>



      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {expand ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {expand ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {expand ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar