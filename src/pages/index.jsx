import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import "../styles/index.scss"
import JelessiProducts from "../images/venis-products-jelessi.png"
import DeepDive from "../images/image-deepdive.webp"
import VenisLed from "../images/venis-ledlight.png"
import VenisAnalysis from "../images/venis-analysis.png"
import VenisSkincare from "../images/venis-skincare.png"
import Celestolite from "../images/partner-celestolite.png"
import Elevatione from "../images/partner-elevatione.png"
import Jelessi from "../images/partner-jelessi.png"
import Orogold from "../images/partner-orogold.png"
import Predire from "../images/partner-predire.png"
import Lavelier from "../images/Lavelier.png"
import ComputerImage from "../images/venis-mockups.webp"
import VenisBenefits from "../images/venis-group-benefits.png"
import VenisBenefitsMobile from "../images/image-benefits-center.png"
import IconLuxury from "../images/icons/icon-luxury.png"
import IconLavish from "../images/icons/icon-cost.png"
import IconService from "../images/icons/icon-service.png"
import IconSolution from "../images/icons/icon-solutions.png"
import ResultOne from "../images/result-1.png"
import ResultTwo from "../images/result-2.png"
import ResultThree from "../images/result-3.png"
import ResultFour from "../images/result-4.png"
import GalleryOne from "../images/galery1.png"
import GalleryTwo from "../images/galery2.png"
import GalleryThree from "../images/galery3.png"
import GalleryFour from "../images/galery4.png"
import GalleryFive from "../images/galery5.png"
import PlusIcon from "../images/icons/plus.png"
import LessIcon from "../images/icons/less.png"
import LogoWhite from "../images/venis-logo-white.png"
import WhatsApp from "../images/icons/icon-wa.png"
import Instagram from "../images/icons/icon-ig.png"
import Facebook from "../images/icons/icon-fb.png"
import Share from "../images/icons/icon-share.png"
import Quotes from "../images/comillas.png"
import ExpertMobile from "../images/expert-banner-mobile.png"
import { Jump } from "react-jump"

export default function index() {
  const [windowLoaded, setWindowLoaded] = useState(undefined)
  useEffect(() => {
    if (!windowLoaded) {
      if (typeof window !== "undefined" && window) {
        setWindowLoaded(true)
        i18n.use(initReactI18next).init({
          lng: "en",
        })
      }
    }
  }, [windowLoaded])
  const [t, i18n] = useTranslation()
  function switchLang(lang) {
    i18n.use(initReactI18next).init({ lng: lang })
    localStorage.setItem("i18nextLng", lang)
  }
  function showFaq(id) {
    let firstBlock = document.getElementById("faqOne")
    let firstTitle = document.getElementById("titleOne")
    let secondBlock = document.getElementById("faqTwo")
    let secondTitle = document.getElementById("titleTwo")
    let thirdBlock = document.getElementById("faqThree")
    let thirdTitle = document.getElementById("titleThree")
    let fourBlock = document.getElementById("faqFour")
    let fourTitle = document.getElementById("titleFour")
    firstBlock.classList.remove("active")
    firstTitle.classList.remove("active")
    secondBlock.classList.remove("active")
    secondTitle.classList.remove("active")
    thirdBlock.classList.remove("active")
    thirdTitle.classList.remove("active")
    fourBlock.classList.remove("active")
    fourTitle.classList.remove("active")
    let activeBlock = document.getElementById("faq" + id)
    let activeTitle = document.getElementById("title" + id)
    activeBlock.classList.add("active")
    activeTitle.classList.add("active")
  }
  return (
    <>
      <Layout switchLang={switchLang}>
        <SEO title="Home" />
        <section className="seoParagraphs">
          <h1>Venis Hydrafacial & Non surgical face lifting</h1>

          <p>
            At Venis we want to provide you with unique experiences in skin
            care, we have cutting-edge skincare treatments, guaranteeing results
            from the first appointment. Our treatments are personalized and
            specialized depending on the needs and concerns of each of our
            patients, we offer results without the need for operating rooms,
            without the need for recovery time. Luxurious Advanced Skin Care
            Service Near You
          </p>
          <p>
            we revolutionize skin care at the hands of the most exclusive Spas
            in the country and the most prestigious products on the market. Some
            of our are Hydrafacial, generating Facelifting effects without
            surgery. Remove red spots on the skin, acne, cloth, bags, dark
            circles, phototherapy, anti-aging, etc. Venis Hydrafacial y
            Hollywood Peel
          </p>
          <p>Venis creates experiences that rewind time on your skin.</p>
          <h2>Hydrafacial</h2>
          <p>
            Hydrafacial: The treatment to hydrate and rejuvenate the skin of
            your face. The Hydrafacial is a non-invasive treatment for the face
            that combines cleansing, removal of impurities and peeling, and
            infiltration of serums in a single session to obtain fresh, healthy,
            radiant and glowing skin.
          </p>
          <p>
            This treatment has benefits that help improve skin hydration and
            eliminate the appearance of fine lines, hyperpigmentation, oily skin
            control, and wrinkles.
          </p>
          <p>
            The suggested cost to the public in Mexico varies according to the
            geographic area and the additional services that the specialist adds
            to the treatment.
          </p>
          <p>
            First, a deep cleaning is carried out where all the impurities from
            the skin of the face are removed. Once the face is completely clean,
            a bath of vitamins, antioxidants, and moisturizers is applied,
            through serums. Luxurious Advanced Skin Care Service Near You
          </p>
          <h2>Non surgical face lifting</h2>
          <p>
            At Venis we want to provide you with the best treatments, one of
            them is the lifting without surgery.
          </p>
          <h3>What is a non surgical face lifting? </h3>
          <p>
            It is a minimally invasive non-surgical face lift that aims to
            improve the appearance of wrinkles and fine lines, giving patients a
            more youthful appearance. We personalize the treatment, adjusting to
            the needs of each of our clients to guarantee and maximize the
            desired results.
          </p>
          <p>
            This treatment is used to enjoy a younger appearance without having
            to undergo surgery, obtaining multiple advantages since the
            application requires a few minutes and practically does not require
            a recovery period. In addition, one of the great advantages of a
            non-surgical facelift is its reduced cost. We recommend the
            treatment for both men and women between 40 and 60 years of age to
            prevent skin loss and to be able to reinforce elasticity in time
            without damaging the skin. Venis Hydrafacial & Non surgical face
            lifting
          </p>
          <p>
            This ultrasound-based treatment is used to improve wrinkles and
            cleavage lines, lift the skin of the neck, eyebrow and lower chin,
            it can also be applied on the cheeks, jaw profile, expression lines
            of the eyes, narrowing and elevation of the nose, lifting of
            eyebrows, perfection of the appearance of the neck, rejuvenation of
            hands and feet, improvement of flaccidity in arms, legs and Venis
            Hydrafacial y Hollywood Peel buttocks.
          </p>
        </section>
        <section className="hero">
          <div className="fixed">
            <div className="heroText">
              <h2>{t("heroTitle")}</h2>
              <p>{t("heroParagraph")}</p>
              <p>{t("heroParagraphTwo")}</p>
              <span>
                <Jump target={".call"}>
                  <button className="primaryButton">{t("heroButton")}</button>
                </Jump>
              </span>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="fixed">
            <div
              className="contactForm"
              data-sal="zoom-in"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <h3>{t("contactTitle")}</h3>
              <form action="">
                <span>
                  <article>
                    <label htmlFor="name">{t("contactName")}:</label>
                    <input id="name" type="text" />
                  </article>
                  <article>
                    <label htmlFor="email">{t("contactEmail")}:</label>
                    <input id="email" type="email" />
                  </article>
                  <article>
                    <label htmlFor="phone">{t("contactPhone")}:</label>
                    <input id="tel" type="tel" />
                  </article>
                </span>
                <span>
                  <article className="termsCheck">
                    <input
                      type="radio"
                      className="option-input radio"
                      name="terms"
                    />
                    <label htmlFor="terms">{t("contactTerms")}</label>
                  </article>
                  <article>
                    <button className="secondaryButton">
                      {t("contactSubmit")}
                    </button>
                  </article>
                </span>
              </form>
            </div>
          </div>
        </section>
        <section className="howDo">
          <article>
            <img src={JelessiProducts} alt="Jelessi Products" />
          </article>
          <article>
            <span className="titleShadow">
              <p
                className="shadowEffect"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                {t("howTitle")}
              </p>
              <h5 className="shadowMain">{t("howTitle")}</h5>
            </span>
            <h2 className="howSubtitle">{t("howSubtitle")}</h2>
            <p className="generalParagraph">{t("howParagraph")}</p>
            <p className="generalParagraph">{t("howParagraphTwo")}</p>
          </article>
        </section>
        <section className="deepDive">
          <div className="deepContainer">
            <article>
              <span className="titleShadow">
                <p className="shadowEffect">{t("deepTitle")}</p>
                <h3 className="shadowMain">{t("deepTitle")}</h3>
              </span>
              <h3 className="deepSubtitle">{t("deepSubtitle")}</h3>
              <p className="generalParagraph">{t("deepParagraph")}</p>
              <p className="generalParagraph">{t("deepParagraphTwo")}</p>
              <span className="buttonContainer">
                <Jump target={".call"}>
                  <button className="primaryButton">{t("deepButton")}</button>{" "}
                </Jump>
              </span>
            </article>
            <article>
              <img src={DeepDive} alt="Deep Dive" />
            </article>
          </div>
        </section>
        <section className="points">
          <div className="fixed">
            <div className="pointsContainer">
              <article>
                <img src={VenisAnalysis} alt="Digital Analysis Device" />
                <h6>{t("pointsTwo")}</h6>
                <p>{t("pointsTwoP")}</p>
              </article>
              <article>
                <img src={VenisLed} alt="Led Light Therapy" />
                <h3>{t("pointsOne")}</h3>
                <p>{t("pointsOneP")}</p>
              </article>
              <article>
                <img
                  src={VenisSkincare}
                  alt="Ultramodern equipment and Skincare"
                />
                <h2>{t("pointsThree")}</h2>
                <p>{t("pointsThreeP")}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="fixed">
            <div className="partnersContainer">
              <span className="titleShadow">
                <p
                  className="shadowEffect"
                  data-sal="fade"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                >
                  {t("partnersTitle")}
                </p>
                <h2 className="shadowMain">{t("partnersTitle")}</h2>
              </span>
              <h3 className="partnersSub">{t("partnersSubtitle")}</h3>
              <p>{t("partnersSubtitleTwo")}</p>
              <div className="partnersImage">
                <img src={Celestolite} alt="Celestolite" />
                <img src={Elevatione} alt="Elevatione" />
                <img src={Jelessi} alt="Jelessi" />
                <img src={Orogold} alt="Orogold" />
                <img src={Predire} alt="Predire" />
                <img src={Lavelier} alt="Predire" />
              </div>
              <div className="computer">
                <h6>{t("partnersParagraph")}</h6>
                <p>{t("partnersParagraphTwo")}</p>
                <p>{t("partnersParagraphThree")}</p>
                <img src={ComputerImage} alt="Computer" />
              </div>
            </div>
          </div>
        </section>
        <section className="ageless">
          <div className="fixed">
            <h2>{t("ageless")}</h2>
            <Jump target={".call"}>
              <button className="primaryButton">{t("agelessButton")}</button>{" "}
            </Jump>
          </div>
        </section>
        <section className="benefits">
          <div className="textBenefits">
            <span className="titleShadow">
              <p
                className="shadowEffect"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                {t("benefitsTitle")}
              </p>
              <h3 className="shadowMain">{t("benefitsTitle")}</h3>
            </span>
            <div className="benefitsContainer">
              <article>
                <h2>
                  <img src={IconLuxury} alt="Luxury" /> {t("benefitsOne")}
                </h2>
                <p>{t("benefitsOneP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconLavish} alt="Luxury" />
                  {t("benefitsTwo")}
                </h2>
                <p>{t("benefitsTwoP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconService} alt="Luxury" />
                  {t("benefitsThree")}
                </h2>
                <p>{t("benefitsThreeP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconSolution} alt="Luxury" />
                  {t("benefitsFour")}
                </h2>
                <p>{t("benefitsFourP")}</p>
              </article>
            </div>
          </div>
          <div className="imageBenefits">
            <img src={VenisBenefits} alt="Beneficios" />
            <img src={VenisBenefitsMobile} alt="Beneficios" />
          </div>
        </section>
        <section className="expert">
          <article>
            <img src={ExpertMobile} alt="Expert" />
          </article>
          <article>
            <h2>{t("skincareTitle")}</h2>
            <p>{t("skincareSubtitle")}</p>
            <Jump target={".call"}>
              <button className="primaryButton">{t("skincareButton")}</button>{" "}
            </Jump>
          </article>
        </section>
        <section className="results">
          <div className="fixed">
            <span className="titleShadow">
              <p
                className="shadowEffect"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                {t("resultsTitle")}
              </p>
              <h3 className="shadowMain">{t("resultsTitle")}</h3>
            </span>
            <div className="reviewContainer">
              <article>
                <img className="user" src={ResultOne} alt="Alicia" />
                <p>Alicia Hernandez</p>
                <p>43 Años</p>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyOne")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultTwo} alt="Martha" />
                <p>Martha Muñoz</p>
                <p>57 Años</p>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyTwo")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultThree} alt="Carlos" />
                <p>Carlos</p>
                <p>25 Años</p>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyThree")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultFour} alt="Luz Maria" />
                <p>Luz Maria</p>
                <p>61 Años</p>
                <span>
                  <img src={Quotes} alt="Comillas" />

                  <p>{t("testimonyFour")}</p>
                </span>
              </article>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="fixed">
            <span className="titleShadow">
              <p
                className="shadowEffect"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                {t("gallery")}
              </p>
              <h6 className="shadowMain">{t("gallery")}</h6>
            </span>
            <div className="galleryContainer">
              <article>
                <img src={GalleryOne} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryTwo} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryThree} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryFour} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryFive} alt="Galeria" />
              </article>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="fixed">
            <div className="faqContainer">
              <article>
                <span className="titleShadow">
                  <p
                    className="shadowEffect"
                    data-sal="fade"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                  >
                    FAQ
                  </p>
                  <h6 className="shadowMain">FAQ</h6>
                </span>
              </article>
              <article>
                <div className="faqUnique">
                  <span id="titleOne" onClick={e => showFaq("One")}>
                    <h6>{t("faqOne")}</h6>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqOne">{t("faqOneP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleTwo" onClick={e => showFaq("Two")}>
                    <h4>{t("faqTwo")}</h4>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqTwo">{t("faqTwoP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleThree" onClick={e => showFaq("Three")}>
                    <h4>{t("faqThree")}</h4>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqThree">{t("faqThreeP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleFour" onClick={e => showFaq("Four")}>
                    <h4>{t("faqFour")}</h4>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqFour">{t("faqFourP")}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="call">
          <article className="callImage"></article>
          <article className="callForm">
            <h5>{t("call")}</h5>
            <p>{t("callSubtitle")}</p>
            <form action="">
              <span>
                <article>
                  <label htmlFor="nameFooter">{t("contactName")}:</label>
                  <input id="nameFooter" type="text" />
                </article>
                <article>
                  <label htmlFor="emailFooter">{t("contactEmail")}:</label>
                  <input id="emailFooter" type="email" />
                </article>
                <article>
                  <label htmlFor="phoneFooter">{t("contactPhone")}:</label>
                  <input id="telFooter" type="tel" />
                </article>
              </span>
              <span>
                <article className="termsCheck">
                  <input
                    type="radio"
                    className="option-input radio"
                    name="terms"
                  />
                  <label htmlFor="terms">{t("contactTerms")}</label>
                </article>
                <article>
                  <button className="primaryButton">{t("call")}</button>
                </article>
              </span>
            </form>
          </article>
        </section>
        <footer>
          <div className="fixed">
            <div className="footerContainer">
              <span>
                <img src={LogoWhite} alt="Logo Blanco" />
                <p>Venis © Copyright 2020</p>
              </span>
              <span>
                <ul>
                  <li>
                    <Link to="/#">{t("privacity")}</Link>
                  </li>
                  <li>
                    <Link to="/#">{t("terms")}</Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/veniskinmx/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/veniskin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img src={Facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <img src={WhatsApp} alt="WhatsApp" />
                  </li>
                  <li>
                    <img src={Share} alt="Share" />
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  )
}
