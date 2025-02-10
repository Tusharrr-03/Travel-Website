import React from 'react'
import { FaTwitter,FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube,FaSnowflake } from "react-icons/fa";
import LogoImages from 'D:/html tutorial/jcrCab/new/src/images/JCR_Logo_white.webp'

export default function NavBarSec() {
    return (
        <>
                <div className="container-fluid " style={{ padding: "0px 0px " }}>
                    <div className="header text-white d-flex justify-content-between" >
                    <div className="hc1">
                            Call us for Booking +919414137405 +919799735500 / jcrcab12@gmail.com
                    </div>
                    <div class= "hicon">
                            <div class="icon1">
                                <a href=""><FaFacebookF /></a>
                            </div>
                            <div class="icon1">
                                <a href=""><FaTwitter /></a>
                            </div>
                            <div class="icon1 Hover ">
                                <a href=""><FaInstagram /></a>
                            </div>    
                            <div class="icon1 Hover">
                                <a href=""><FaYoutube /></a>
                            </div>    
                        </div> 
                    </div>
                </div>
                <div className="container-fluid"> 
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div className="image">
                        <img src={LogoImages} alt="" className="w-100" />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="h2c2">
                            <ul>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Rajasthan 
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="rjsubmenu">
                                        <ul>
                                            <li>Jodhpur</li>
                                            <li>Jaipur</li>
                                            <li>Udaipur</li>
                                            <li>
                                                Jaislmer
                                                <div class="jssubmenu">
                                                    <ul>
                                                        <li>Camp Thar</li>
                                                        <li>Dessert Ride</li>
                                                        <li>Night Stay</li>
                                                        <li>Camel Safari</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                   Taxi Services
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="tsmenu">
                                        <ul>
                                            <li>Taxi in Jodhpur</li>
                                            <li>Taxi in udaipur</li>
                                            <li>Taxi in Sumerpur</li>
                                            <li>Taxi in Balotra</li>
                                            <li>Taxi in Ajmer</li>
                                            <li>Taxi in Sirohi</li>
                                            <li>Taxi in Kota</li>
                                            <li>Taxi in Dholpur</li>
                                            <li>Taxi in Bundi</li>
                                            <li>Taxi in Banswara</li>
                                        </ul>
                                        <ul>
                                            <li>Taxi in jaipur</li>
                                            <li>Taxi in Mount Abu</li>
                                            <li>Taxi in Pachpadra</li>
                                            <li>Taxi in Sikar</li>
                                            <li>Taxi in Sawai Madhopur</li>
                                            <li>Taxi in Karauli</li>
                                            <li>Taxi in Dungarpur</li>
                                            <li>Taxi in Chittorgarh</li>
                                            <li>Taxi in Tonk</li>
                                        </ul>
                                        <ul>
                                            <li>Taxi in Pali</li>
                                            <li>Taxi in Jaislmer</li>
                                            <li>Taxi in Nakoda Ji</li>
                                            <li>Taxi in Pushkar</li>
                                            <li>Taxi in Ramdevra</li>
                                            <li>Taxi in Rajasamand</li>
                                            <li>Taxi in Jhunjhunu</li>
                                            <li>Taxi in Hanumangarh</li>
                                            <li>Taxi in Churu</li>
                                            <li>Taxi in Nagaur</li>
                                        </ul>
                                        <ul>
                                            <li>Taxi in Bikaner</li>
                                            <li>Taxi in Falna</li>
                                            <li>Taxi in Osian</li>
                                            <li>Taxi in Jalore</li>
                                            <li>Taxi in Sri Ganganagar</li>
                                            <li>Taxi in Pratapgarh</li>
                                            <li>Taxi in Jhalawar</li>
                                            <li>Taxi in Dausa</li>
                                            <li>Taxi in Baran</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    One Way Taxi
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="way">
                                        <ul>
                                            <li>Jodhpur</li>
                                            <li>Bikaner</li>
                                            <li>Bharatpur</li>
                                        </ul>
                                        <ul>
                                            <li>Jaislmer</li>
                                            <li>Nakodaji</li>
                                            <li>Bhilwara</li>
                                        </ul>
                                        <ul>
                                            <li>Barmer</li>
                                            <li>Alwar</li>
                                        </ul> 
                                        <ul>
                                            <li>Udaipur</li>
                                            <li>Balotra</li>
                                        </ul>  
                                        <ul>
                                            <li>Jaipur</li>
                                            <li>Banswara</li>
                                        </ul>    
                                        <ul>
                                            <li>Ajmer</li>
                                            <li>Baran</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    Sight Seeing
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="ss">
                                        <ul>
                                            <li>ONE DAY SIGHTSEEING JODHPUR</li>
                                            <li>ONE DAY SIGHTSEEING JAISLMER</li>
                                            <li>ONE DAY SIGHTSEEING JAIPUR</li>
                                            <li>ONE DAY SIGHTSEEING UDAIPUR</li>
                                            <li>ONE DAY SIGHTSEEING AGRA</li>
                                            <li>ONE DAY SIGHTSEEING DELHI</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    JCR Fleet
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="jf">
                                        <ul>
                                            <li>Innova Crysta <i class="fa-solid fa-caret-down"></i></li>
                                            <li>JCR Innova Crysta – Bikaner</li>
                                            <li>JCR Innova Crysta – Jaipur</li>
                                            <li>JCR Innova Crysta – Jaislmer</li>
                                            <li>JCR Innova Crysta – Jodhpur</li>
                                            <li>JCR Innova Crysta – Udaipur</li>
                                        </ul> 
                                        <ul>
                                            <li> Innova <i class="fa-solid fa-caret-down"></i></li>
                                            <li>JCR Toyota Innova – Jodhpur</li>   
                                            <li>JCR Toyota Innova – Jaipur</li>
                                            <li>JCR Toyota Innova – Udaipur</li>
                                            <li>JCR Toyota Innova – Jaisalmer</li>
                                            <li>JCR Toyota Innova – Bikaner</li>
                                        </ul> 
                                        <ul>
                                            <li> Fortuner <i class="fa-solid fa-caret-down"></i></li>
                                            <li>JCR Toyota Fortuner – Jodhpur</li>   
                                            <li>JCR Toyota Fortuner – Jaipur</li>
                                            <li>JCR Toyota Fortuner – Udaipur</li>
                                            <li>JCR Toyota Fortuner – Jaisalmer</li>
                                            <li>JCR Toyota Fortuner – Bikaner</li>
                                        </ul>
                                        <ul>
                                            <li> Tempo Traveller <i class="fa-solid fa-caret-down"></i></li>
                                            <li>Tempo Traveller in – Jodhpur</li>   
                                            <li>Tempo Traveller in – Jaipur</li>
                                            <li>Tempo Traveller in – Udaipur</li>
                                            <li>Tempo Traveller in – Jaisalmer</li>
                                            <li>Tempo Traveller in – Bikaner</li>
                                            <li>Tempo Traveller in - Pali</li>
                                            <li>Tempo Traveller in - Delhi</li>
                                            <li>Tempo Traveller in - Agra</li>
                                        </ul>
                                        <ul>
                                            <li> Luxury Bus <i class="fa-solid fa-caret-down"></i></li>
                                            <li>JCR Toyota Innova – Jodhpur</li>   
                                            <li>JCR Toyota Innova – Jaipur</li>
                                            <li>JCR Toyota Innova – Udaipur</li>
                                            <li>JCR Toyota Innova – Jaisalmer</li>
                                            <li>JCR Toyota Innova – Bikaner</li>
                                        </ul>
                                    </div>
                                    
                                    
                                </li>
                                <li>
                                    Tour
                                    <i class="fa-solid fa-caret-down"></i>
                                    <div class="tway">
                                        <ul>
                                            <li>Char Dham Yatra</li>
                                            <li>Do Dham Yatra</li>
                                            <li>Bishnoi Village Safari Tour Jodhpur</li>
                                            <li>Golden Triangle Express : 5 - Day Adventure</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    Tariff Desert Safari
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                    </div>
                        <div class="text">
                            <label for=""> Language</label>
                                <select class="input" > 
                                    <option>Select Language</option>
                                        <option value="ab">Abkhaz</option>
                                        <option value="ace">Acehnese</option><option value="ach">Acholi</option>
                                        <option value="aa">Afar</option><option value="af">Afrikaans</option>
                                        <option value="sq">Albanian</option><option value="alz">Alur</option>
                                        <option value="am">Amharic</option><option value="ar">Arabic</option>
                                        <option value="hy">Armenian</option><option value="as">Assamese</option>
                                        <option value="av">Avar</option><option value="awa">Awadhi</option>
                                        <option value="ay">Aymara</option><option value="az">Azerbaijani</option>
                                        <option value="ban">Balinese</option><option value="bal">Baluchi</option>
                                        <option value="bm">Bambara</option><option value="bci">Baoulé</option>
                                        <option value="ba">Bashkir</option><option value="eu">Basque</option>
                                        <option value="btx">Batak Karo</option><option value="bts">Batak Simalungun</option>
                                        <option value="bbc">Batak Toba</option><option value="be">Belarusian</option>
                                        <option value="bem">Bemba</option><option value="bn">Bengali</option>
                                        <option value="bew">Betawi</option><option value="bho">Bhojpuri</option>
                                        <option value="bik">Bikol</option><option value="bs">Bosnian</option>
                                        <option value="br">Breton</option><option value="bg">Bulgarian</option>
                                        <option value="bua">Buryat</option><option value="yue">Cantonese</option>
                                        <option value="ca">Catalan</option><option value="ceb">Cebuano</option>
                                        <option value="ch">Chamorro</option><option value="ce">Chechen</option>
                                        <option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option>
                                        <option value="zh-TW">Chinese (Traditional)</option><option value="chk">Chuukese</option>
                                        <option value="cv">Chuvash</option><option value="co">Corsican</option>
                                        <option value="crh">Crimean Tatar</option><option value="hr">Croatian</option>
                                        <option value="cs">Czech</option><option value="da">Danish</option>
                                        <option value="fa-AF">Dari</option><option value="dv">Dhivehi</option>
                                        <option value="din">Dinka</option><option value="doi">Dogri</option>
                                        <option value="dov">Dombe</option><option value="nl">Dutch</option>
                                        <option value="dyu">Dyula</option><option value="dz">Dzongkha</option>
                                        <option value="eo">Esperanto</option><option value="et">Estonian</option>
                                        <option value="ee">Ewe</option><option value="fo">Faroese</option>
                                        <option value="fj">Fijian</option><option value="tl">Filipino</option>
                                        <option value="fi">Finnish</option><option value="fon">Fon</option>
                                        <option value="fr">French</option><option value="fy">Frisian</option>
                                        <option value="fur">Friulian</option><option value="ff">Fulani</option>
                                        <option value="gaa">Ga</option><option value="gl">Galician</option>
                                        <option value="ka">Georgian</option><option value="de">German</option>
                                        <option value="el">Greek</option><option value="gn">Guarani</option>
                                        <option value="gu">Gujarati</option><option value="ht">Haitian Creole</option>
                                        <option value="cnh">Hakha Chin</option><option value="ha">Hausa</option>
                                        <option value="haw">Hawaiian</option><option value="iw">Hebrew</option>
                                        <option value="hil">Hiligaynon</option><option value="hi">Hindi</option>
                                        <option value="hmn">Hmong</option><option value="hu">Hungarian</option>
                                        <option value="hrx">Hunsrik</option><option value="iba">Iban</option>
                                        <option value="is">Icelandic</option><option value="ig">Igbo</option>
                                        <option value="ilo">Ilocano</option><option value="id">Indonesian</option>
                                        <option value="ga">Irish Gaelic</option><option value="it">Italian</option>
                                        <option value="jam">Jamaican Patois</option><option value="ja">Japanese</option>
                                        <option value="jw">Javanese</option><option value="kac">Jingpo</option>
                                        <option value="kl">Kalaallisut</option><option value="kn">Kannada</option>
                                        <option value="kr">Kanuri</option><option value="pam">Kapampangan</option>
                                        <option value="kk">Kazakh</option><option value="kha">Khasi</option>
                                        <option value="km">Khmer</option><option value="cgg">Kiga</option>
                                        <option value="kg">Kikongo</option><option value="rw">Kinyarwanda</option>
                                        <option value="ktu">Kituba</option><option value="trp">Kokborok</option>
                                        <option value="kv">Komi</option><option value="gom">Konkani</option>
                                        <option value="ko">Korean</option><option value="kri">Krio</option>
                                        <option value="ku">Kurdish (Kurmanji)</option><option value="ckb">Kurdish (Sorani)</option>
                                        <option value="ky">Kyrgyz</option><option value="lo">Lao</option>
                                        <option value="ltg">Latgalian</option><option value="la">Latin</option>
                                        <option value="lv">Latvian</option><option value="lij">Ligurian</option>
                                        <option value="li">Limburgish</option><option value="ln">Lingala</option>
                                        <option value="lt">Lithuanian</option><option value="lmo">Lombard</option>
                                        <option value="lg">Luganda</option><option value="luo">Luo</option>
                                        <option value="lb">Luxembourgish</option><option value="mk">Macedonian</option>
                                        <option value="mad">Madurese</option><option value="mai">Maithili</option>
                                        <option value="mak">Makassar</option><option value="mg">Malagasy</option>
                                        <option value="ms">Malay</option><option value="ms-Arab">Malay (Jawi)</option>
                                        <option value="ml">Malayalam</option><option value="mt">Maltese</option>
                                        <option value="mam">Mam</option><option value="gv">Manx</option>
                                        <option value="mi">Maori</option><option value="mr">Marathi</option>
                                        <option value="mh">Marshallese</option><option value="mwr">Marwadi</option>
                                        <option value="mfe">Mauritian Creole</option><option value="chm">Meadow Mari</option>
                                        <option value="mni-Mtei">Meiteilon (Manipuri)</option><option value="min">Minang</option>
                                        <option value="lus">Mizo</option><option value="mn">Mongolian</option>
                                        <option value="my">Myanmar (Burmese)</option><option value="bm-Nkoo">N'Ko</option>
                                        <option value="nhe">Nahuatl (Eastern Huasteca)</option><option value="ndc-ZW">Ndau</option>
                                        <option value="nr">Ndebele (South)</option><option value="new">Nepal Bhasa (Newari)</option>
                                        <option value="ne">Nepali</option><option value="no">Norwegian</option>
                                        <option value="nus">Nuer</option><option value="oc">Occitan</option>
                                        <option value="or">Odia (Oriya)</option><option value="om">Oromo</option>
                                        <option value="os">Ossetian</option><option value="pag">Pangasinan</option>
                                        <option value="pap">Papiamento</option><option value="ps">Pashto</option>
                                        <option value="fa">Persian</option><option value="pl">Polish</option>
                                        <option value="pt">Portuguese (Brazil)</option><option value="pt-PT">Portuguese (Portugal)</option>
                                        <option value="pa">Punjabi (Gurmukhi)</option>
                                        <option value="pa-Arab">Punjabi (Shahmukhi)</option>
                                        <option value="qu">Quechua</option><option value="kek">Qʼeqchiʼ</option>
                                        <option value="rom">Romani</option><option value="ro">Romanian</option>
                                        <option value="rn">Rundi</option><option value="ru">Russian</option>
                                        <option value="se">Sami (North)</option><option value="sm">Samoan</option>
                                        <option value="sg">Sango</option><option value="sa">Sanskrit</option>
                                        <option value="sat-Latn">Santali</option><option value="gd">Scots Gaelic</option>
                                        <option value="nso">Sepedi</option><option value="sr">Serbian</option>
                                        <option value="st">Sesotho</option><option value="crs">Seychellois Creole</option>
                                        <option value="shn">Shan</option><option value="sn">Shona</option>
                                        <option value="scn">Sicilian</option><option value="szl">Silesian</option>
                                        <option value="sd">Sindhi</option><option value="si">Sinhala</option>
                                        <option value="sk">Slovak</option><option value="sl">Slovenian</option>
                                        <option value="so">Somali</option><option value="es">Spanish</option>
                                        <option value="su">Sundanese</option><option value="sus">Susu</option>
                                        <option value="sw">Swahili</option><option value="ss">Swati</option>
                                        <option value="sv">Swedish</option><option value="ty">Tahitian</option>
                                        <option value="tg">Tajik</option><option value="ber-Latn">Tamazight</option>
                                        <option value="ber">Tamazight (Tifinagh)</option><option value="ta">Tamil</option>
                                        <option value="tt">Tatar</option><option value="te">Telugu</option>
                                        <option value="tet">Tetum</option><option value="th">Thai</option>
                                        <option value="bo">Tibetan</option><option value="ti">Tigrinya</option>
                                        <option value="tiv">Tiv</option><option value="tpi">Tok Pisin</option>
                                        <option value="to">Tongan</option><option value="ts">Tsonga</option>
                                        <option value="tn">Tswana</option><option value="tcy">Tulu</option>
                                        <option value="tum">Tumbuka</option><option value="tr">Turkish</option>
                                        <option value="tk">Turkmen</option><option value="tyv">Tuvan</option>
                                        <option value="ak">Twi</option><option value="udm">Udmurt</option>
                                        <option value="uk">Ukrainian</option><option value="ur">Urdu</option>
                                        <option value="ug">Uyghur</option><option value="uz">Uzbek</option>
                                        <option value="ve">Venda</option><option value="vec">Venetian</option>
                                        <option value="vi">Vietnamese</option><option value="war">Waray</option>
                                        <option value="cy">Welsh</option><option value="wo">Wolof</option>
                                        <option value="xh">Xhosa</option><option value="sah">Yakut</option>
                                        <option value="yi">Yiddish</option><option value="yo">Yoruba</option>
                                        <option value="yua">Yucatec Maya</option><option value="zap">Zapotec</option>
                                        <option value="zu">Zulu</option></select>
                        </div>
            </div>
            
            </nav>
        
                </div>
               
                </>
    )
}


// import React from 'react';
// import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

// export default function NavBarSec() {
//     return (
//         <>
//             {/* Top Bar */}
//             <div className="container-fluid bg-dark py-2">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-12 col-md-8 text-center text-md-start text-white">
//                             <small>Call us for Booking +919414137405 +919799735500 / jcrcab12@gmail.com</small>
//                         </div>
//                         <div className="col-12 col-md-4">
//                             <div className="d-flex justify-content-center justify-content-md-end gap-3">
//                                 <a href="#" className="text-white"><FaFacebookF /></a>
//                                 <a href="#" className="text-white"><FaTwitter /></a>
//                                 <a href="#" className="text-white"><FaInstagram /></a>
//                                 <a href="#" className="text-white"><FaYoutube /></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <nav className="navbar navbar-expand-lg bg-white py-3">
//                 <div className="container">
//                     {/* Logo */}
//                     <div className="navbar-brand">
//                         <img src="src/images/JCR_Logo_white.webp" alt="JCR Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
//                     </div>

//                     {/* Mobile Toggle Button */}
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     {/* Navigation Items */}
//                     <div className="collapse navbar-collapse" id="navbarContent">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">About Us</a>
//                             </li>

//                             {/* Rajasthan Dropdown */}
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                                     Rajasthan
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#">Jodhpur</a></li>
//                                     <li><a className="dropdown-item" href="#">Jaipur</a></li>
//                                     <li><a className="dropdown-item" href="#">Udaipur</a></li>
//                                     <li className="dropdown-submenu">
//                                         <a className="dropdown-item dropdown-toggle" href="#">Jaislmer</a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#">Camp Thar</a></li>
//                                             <li><a className="dropdown-item" href="#">Dessert Ride</a></li>
//                                             <li><a className="dropdown-item" href="#">Night Stay</a></li>
//                                             <li><a className="dropdown-item" href="#">Camel Safari</a></li>
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </li>

//                             {/* Taxi Services Mega Menu */}
//                             <li className="nav-item dropdown position-static">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                                     Taxi Services
//                                 </a>
//                                 <div className="dropdown-menu w-100">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-3">
//                                                 <ul className="list-unstyled">
//                                                     <li><a className="dropdown-item" href="#">Taxi in Jodhpur</a></li>
//                                                     <li><a className="dropdown-item" href="#">Taxi in Udaipur</a></li>
//                                                     <li><a className="dropdown-item" href="#">Taxi in Sumerpur</a></li>
//                                                     {/* Add more items as needed */}
//                                                 </ul>
//                                             </div>
//                                             {/* Repeat for other columns */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>

//                             {/* Other Navigation Items */}
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">One Way Taxi</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Sight Seeing</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">JCR Fleet</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Tour</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Tariff Desert Safari</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Contact Us</a>
//                             </li>
//                         </ul>

//                         {/* Language Selector */}
//                         <div className="d-flex align-items-center">
//                             <label className="me-2">Language</label>
//                             <select className="form-select form-select-sm">
//                                 <option>Select Language</option>
//                                 <option value="ab">Abkhaz</option>
//                                 <option value="ace">Acehnese</option>
//                                 {/* Add all language options */}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }
