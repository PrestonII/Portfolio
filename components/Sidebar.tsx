import React, { ReactNode } from 'react'
import Link from 'next/link'

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}

const Sidebar = ({children, title = 'Preston Smith', sectionTitle}: ISidebar) => (
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |{' '}
      <Link href="/users">
        <a>Users List</a>
      </Link>{' '}
      | <a href="/api/users">Users API</a>
    </nav>
  </header>
)

export default Sidebar;