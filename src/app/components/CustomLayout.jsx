"use client"
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Preloader from './Preloader'
import GlobalContextProvider from '../context/GlobalContextProvider'

const CustomLayout = ({ children }) => {

    return (
        <GlobalContextProvider>
            <Navbar />
            {children}
            <Footer />
            <Preloader />
        </GlobalContextProvider>
    )
}

export default CustomLayout
