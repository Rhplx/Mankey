import React from "react"
import "../styles/Header.scss"
import { useTranslation } from "react-i18next"
import Logo from "../images/venis-logo.png"
import ShoppingCart from "../images/icons/shopping-cart.png"
import MenuIcon from "../images/icons/menu-icon.png"
import CloseMenu from "../images/icons/icon-close.png"
import { Jump } from "react-jump"
import Mexico from "../images/mx.png"

export default function Header({ switchLang }) {
  const [t] = useTranslation()
  function showMenu() {
    let menu = document.getElementById("menuDropdown")
    menu.classList.toggle("active")
  }
  return (
    <>
      <header>
        <div className="fixed">
          <nav>
            <img className="imagenLogo" src={Logo} alt="Logo" />
            <ul>
              <li>
                <Jump target={".points"}>{t("aboutUs")}</Jump>
              </li>
              <li>
                <Jump target={".howDo"}>{t("howWe")}</Jump>
              </li>
              <li>
                <Jump target={".benefits"}>{t("benefits")}</Jump>
              </li>
              <li>
                <Jump target={".partners"}>{t("clients")}</Jump>
              </li>
              <li>Blog</li>
              <li>
                {/* <button
                  onClick={() => {
                    switchLang("en")
                  }}
                >
                  EN
                </button>
                |
                <button
                  onClick={() => {
                    switchLang("es")
                  }}
                >
                  ES
                </button> */}
                <a href="/es">
                  <img className="languageIcon" src={Mexico} alt="Mexico" />
                </a>
              </li>
              <li>
                <img src={ShoppingCart} alt="Shopping Cart" />
              </li>
            </ul>
            <img
              onClick={e => showMenu()}
              src={MenuIcon}
              alt="Menu"
              className="menuIcon"
            />
          </nav>
        </div>
      </header>
      <div id="menuDropdown" className="mobileContainer">
        <button onClick={e => showMenu()} className="closeMenu">
          <img src={CloseMenu} alt="Close" />
        </button>
        <ul>
          <li onClick={e => showMenu()}>
            <Jump target={".points"}>{t("aboutUs")}</Jump>
          </li>
          <li onClick={e => showMenu()}>
            <Jump target={".howDo"}>{t("howWe")}</Jump>
          </li>
          <li onClick={e => showMenu()}>
            <Jump target={".benefits"}>{t("benefits")}</Jump>
          </li>
          <li onClick={e => showMenu()}>
            <Jump target={".partners"}>{t("clients")}</Jump>
          </li>
          <li>Blog</li>
          <li>
            <button
              onClick={() => {
                switchLang("en")
              }}
            >
              EN
            </button>
            <button>|</button>
            <button
              onClick={() => {
                switchLang("es")
              }}
            >
              ES
            </button>
          </li>
          <li>
            <img src={ShoppingCart} alt="Shopping Cart" />
          </li>
        </ul>
      </div>
    </>
  )
}
