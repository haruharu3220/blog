import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Button} from '../components/about'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Hero } from '../components/hero'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    </>
  )
}
