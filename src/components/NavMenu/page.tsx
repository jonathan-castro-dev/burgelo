import { CartWidget } from '../CartWidget/page'
import { FaFacebookF, FaPinterest, FaInstagram } from 'react-icons/fa'

import { Flex } from './styles'

export function NavMenu() {
  return (
    <Flex>
      <ul>
        <a href="">
          <li>home</li>
        </a>
        <a href="">
          <li>about</li>
        </a>
        <a href="">
          <li>food</li>
        </a>
        <a href="">
          <li>delivery</li>
        </a>
        <a href="">
          <li>contact</li>
        </a>
      </ul>
      <div className="social-menu">
        <a href="">
          <FaFacebookF color="#333333" size={19} />
        </a>
        <a href="">
          <FaPinterest color="#333333" size={19} />
        </a>
        <a href="">
          <FaInstagram color="#333333" size={19} />
        </a>
      </div>
      <CartWidget />
    </Flex>
  )
}
