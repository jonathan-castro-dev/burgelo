import Image from 'next/image'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import burgeloImg from '../../app/icon.png'

import { Flex } from './styles'

export function Header() {
  return (
    <Flex>
      <a href="">
        <BsFillTelephoneFill size={24} color="#ffc139" />
        <strong>+1 (800) 312-2121</strong>
      </a>
      <div>
        <Image src={burgeloImg} alt="Burgelo" />
        <h1>burgelo</h1>
      </div>
      <div className="location">
        <FaLocationDot size={24} color="#ffc139" />
        <strong>172 14th Street, Office 503, NY</strong>
      </div>
      <button type="button" className="responsive-menu-button">
        <RxHamburgerMenu size={24} />
      </button>
    </Flex>
  )
}
