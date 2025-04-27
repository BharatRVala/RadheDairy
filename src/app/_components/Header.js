'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = (path) => {
    setMenuOpen(false)
    router.push(path)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsLoggedIn(true)

    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        try {
          const cartItems = JSON.parse(storedCart)
          if (Array.isArray(cartItems)) {
            setCartCount(cartItems.length)
          } else {
            setCartCount(0)
          }
        } catch (e) {
          console.error("Error parsing cart:", e)
          setCartCount(0)
        }
      } else {
        setCartCount(0)
      }
    }

    updateCartCount()
    window.addEventListener("cartUpdated", updateCartCount)

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/loginRegister')
  }

  const isActive = (link) => pathname === link ? 'active' : ''
  const isProfileActive = pathname === '/profile'
  const isCartActive = pathname === '/cart'

  return (
    <div className={`header ${isProfileActive ? 'pathname-is-profile' : ''} ${isCartActive ? 'pathname-is-cart' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <Link href="/" prefetch>
          <Image 
            src="/logo2.png" 
            alt="logo" 
            width={50} 
            height={50}
            priority
          />
        </Link>
      </div>
    
      {/* Mobile Menu Icon */}
      <div className="mobile-menu-container">
        <div 
          className={`mobile-menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </div>
    
      {/* Navigation Menu */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link href="/about" className={isActive('/about')} prefetch>About</Link></li>
          <li><Link href="/products" className={isActive('/products')} prefetch>Products</Link></li>
          <li><Link href="/gallery" className={isActive('/gallery')} prefetch>Gallery</Link></li>
          <li><Link href="/blogs" className={isActive('/blogs')} prefetch>Blogs</Link></li>
          <li><Link href="/contact" className={isActive('/contact')} prefetch>Contact Us</Link></li>
          {!isLoggedIn && (
            <li><Link href="/loginRegister" className={isActive('/loginRegister')} prefetch>Register/Login</Link></li>
          )}
        </ul>
    
        {/* Bottom Action Buttons - Only visible in mobile menu */}
        {isLoggedIn && (
          <div className="mobile-action-buttons">
            <button 
              className={`mobile-action-btn ${isProfileActive ? 'active' : ''}`}
              onClick={() => handleNavigation('/profile')}
            >
              <Image src="/profile.png" alt="profile" height={24} width={24} />
              <span>Profile</span>
            </button>
            <button 
              className={`mobile-action-btn ${isCartActive ? 'active' : ''}`}
              onClick={() => handleNavigation('/cart')}
            >
              <div className="cart-btn-wrapper">
                <Image src="/cart.png" alt="cart" width={24} height={24} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </div>
              <span>Cart</span>
            </button>
            <button className="mobile-action-btn" onClick={handleLogout}>
              <Image src="/logout.png" alt="logout" height={24} width={24} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    
      {/* Desktop Buttons */}
      {isLoggedIn && (
        <div className="header-btn-wrapper">
          <button 
            className={`header-btn ${isProfileActive ? 'active' : ''}`}
            onClick={() => handleNavigation('/profile')}
          >
            <Image src="/profile.png" alt="profile" height={30} width={30} />
          </button>
          <button 
            className={`header-btn ${isCartActive ? 'active' : ''}`} 
            onClick={() => handleNavigation('/cart')}
          >
            <div className="cart-btn-wrapper">
              <Image src="/cart.png" alt="cart" width={30} height={30} />
              <span className="cart-count">{cartCount}</span>
            </div>
          </button>
          <button className="header-btn" onClick={handleLogout}>
            <Image src="/logout.png" alt="logout" height={30} width={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Header