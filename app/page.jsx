import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ToDoList from './components/ToDoList'
import Search from './components/search'
import AddToDo from './components/AddToDo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=' ml-2'>
      <Search/>
      <AddToDo/>
      <ToDoList/>
      </div>
    </>
  )
}
