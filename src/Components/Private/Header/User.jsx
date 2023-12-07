import React, { useContext } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHelpCircle, BiTransferAlt } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import fady from '../../../Assets/Fady.jpg'
import { AuthContext } from '../../../Contexts/AuthContext'

function User() {
  const redirectTo = useNavigate()
  const auth = useContext(AuthContext)
  const handleSignningOut = () => {
    document.body.classList.remove('noscroll')
    auth.setIsLoggedInL(false)
    window.sessionStorage.setItem('isLoggedIn', false)
    redirectTo('/')
  }
  return (
    <div className='user'>
      <div className='icon'>
        <img src={fady} alt='Ram' />
        <IoMdArrowDropdown size={20} />
      </div>
      <div className='user-popup'>
        <div
          className='user-item'
          onClick={() =>
            toast.info('انت فيه اهو يسطا', {
              rtl: true,
            })
          }
        >
          <img src={fady} alt='FADY' />
          <span>fadyGHAndy</span>
        </div>
        <div className='controls'>
          <div className='control-item'>
            <BsPencil size={24} />
            Manage profiles
          </div>
          <div className='control-item'>
            <BiTransferAlt size={24} />
            Transfer Profiles
          </div>
          <div className='control-item'>
            <AiOutlineUser size={24} />
            Account
          </div>
          <div className='control-item'>
            <BiHelpCircle size={24} />
            Help center
          </div>
        </div>
        <div id='signout' onClick={handleSignningOut}>
          Sign Out of Netflix
        </div>
      </div>
    </div>
  )
}

export default User
