import { Menu } from '@headlessui/react'
import Hamburguer from '../../../assets/hamburguer.svg'

export function DropdownMenu() {
  return (
    <Menu>
      <Menu.Button>
        <Hamburguer className="w-16" />
      </Menu.Button>
      <Menu.Items className="absolute z-50 right-0 w-56 mt-2 flex-col origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-primary-light">
        <Menu.Item className="flex w-full text-xl py-3 pl-6">
          <button>Início</button>
        </Menu.Item>
        <Menu.Item className="flex w-full text-xl py-3 pl-6">
          <button>Serviços</button>
        </Menu.Item>
        <Menu.Item className="flex w-full text-xl py-3 pl-6">
          <button>Contato</button>
        </Menu.Item>
        <Menu.Item className="flex w-full text-xl py-3 pl-6">
          <button>Missão</button>
        </Menu.Item>
        <Menu.Item className="flex w-full text-xl py-3 pl-6">
          <button>Sobre a empresa</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
