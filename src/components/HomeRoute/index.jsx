import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {LuRefrigerator} from 'react-icons/lu'
import {TbAirConditioning} from 'react-icons/tb'
import {PiTelevisionBold} from 'react-icons/pi'
import {GiGasStove} from 'react-icons/gi'
import {BsArrowRightSquareFill} from 'react-icons/bs'
import {TiSocialLinkedinCircular, TiSocialTwitterCircular} from 'react-icons/ti'
import {RiFacebookCircleLine} from 'react-icons/ri'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('Pune')
  const [suggestion, setSuggestion] = useState(
    'Just Example only in Ameerpet, Gachibowli, & Madhapur',
  )

  const suggestions = {
    Pune: 'Just Example only in Ameerpet, Gachibowli, & Madhapur (Pune)',
    Hyderabad:
      'Just Example only in Ameerpet, Gachibowli, & Madhapur (Hyderabad)',
    Bangalore:
      'Just Example only in Ameerpet, Gachibowli, & Madhapur (Bangalore)',
  }

  const images = [
    {
      id: '1',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Pune',
    },
    {
      id: '2',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Pune',
    },
    {
      id: '3',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Pune',
    },
    {
      id: '4',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Hyderabad',
    },
    {
      id: '5',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Hyderabad',
    },
    {
      id: '6',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Hyderabad',
    },
    {
      id: '7',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Bangalore',
    },
    {
      id: '8',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Bangalore',
    },
    {
      id: '9',
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      name: 'Metro Hardware',
      service: '22',
      rating: '8/10',
      review: '89',
      location: 'Bangalore',
    },
  ]

  const commentText = [
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
    // Add more comments as needed
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724815802/Avatar_2_tmcii5.png',
      altText: 'User profile picture',
      name: 'Peter Breis',
      star: 'https://via.placeholder.com/20x20?text=****',
      post: '3 days ago',
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.Couldn’t be happier.',
    },
  ]

  const handleSelectChange = event => {
    const location = event.target.value
    setSelectedLocation(location)
    setSuggestion(suggestions[location])
  }

  return (
    <div>
      <header className="header-container">
        <img
          src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724809888/blue_logo_cs6ywc.png"
          alt="website logo"
        />
        <div className="button-container">
          <button type="button" className="biz-button">
            Biz Login
          </button>
          <button type="button" className="log-button">
            Login
          </button>
        </div>
      </header>

      <div className="input-container">
        <div>
          <h1>Take care of your home needs now!</h1>
          <p>
            ServicePro is your one-stop solution to troubleshoot, choose a
            vendor, and book a technician.
          </p>
          <div className="dropdown-container">
            <select value={selectedLocation} onChange={handleSelectChange}>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
            </select>
            <span className="suggestion-text">{suggestion}</span>
          </div>
          <div>
            <input type="text" placeholder="🔍 Search Home Appliances" />
            <button type="button" className="search-button">
              Search
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724811222/Group_34_nosstj.png"
          alt="home appliances"
          className="appliance-image"
        />
      </div>

      <article>
        <h2>All Services</h2>
        <p>
          The time is now for it to be okay to be great. For being a bright
          color. For standing out
        </p>
        <div className="service-option">
          <section className="section-container">
            <LuRefrigerator />
            <h5 className="service-heading">Fridge</h5>
            <p>
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </section>
          <section className="section-container">
            <TbAirConditioning />
            <h5 className="service-heading">Air Conditioner</h5>
            <p>
              Don't get your heart broken by people we love, even that we give
              them all we have. Then we lose family over time. As we live, our
              hearts turn colder.
            </p>
          </section>
          <section className="section-container">
            <PiTelevisionBold />
            <h5 className="service-heading">Television</h5>
            <p>
              What else could rust the heart more over time? Blackgold. The time
              is now for it to be okay to be great. or being a bright color. For
              standing out.
            </p>
          </section>
          <section className="section-container">
            <GiGasStove />
            <h5 className="service-heading">Gas Stove</h5>
            <p>
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </section>
          <section className="section-container">
            <TbAirConditioning />
            <h5 className="service-heading">Air Conditioner</h5>
            <p>
              Don't get your heart broken by people we love, even that we give
              them all we have. Then we lose family over time. As we live, our
              hearts turn colder.
            </p>
          </section>
          <section className="section-container">
            <PiTelevisionBold />
            <h5 className="service-heading">Television</h5>
            <p>
              What else could rust the heart more over time? Blackgold. The time
              is now for it to be okay to be great. or being a bright color. For
              standing out.
            </p>
          </section>
        </div>
      </article>

      <article className="steps-container">
        <h1>Book a request in 3 simple steps</h1>
        <Carousel className="carousel-items">
          <Carousel.Item>
            <figure>
              <img
                className="d-block w-90"
                src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724817749/undraw_forms_re_pkrt_1_h7b7te.png"
                alt="First slide"
              />
              <figcaption>
                <h4>Provide your appliance details</h4>
                <p>Let us know your appliance details and your issue.</p>
                <p>Step 1</p>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item>
            <figure>
              <img
                className="d-block w-90"
                src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724824287/Untitled_1_wgkg1t.png"
                alt="Second slide"
              />
              <figcaption>
                <h4>Choose your technician</h4>
                <p>Choose from a wide variety of technicians and vendors.</p>
                <p>Step 2</p>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item>
            <figure>
              <img
                className="d-block w-80"
                src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724825971/undraw_certification_re_ifll_1_prgh1b.png"
                alt="Third slide"
              />
              <figcaption>
                <h4>Get it fixed</h4>
                <p>
                  The technician will arrive at your doorstep shortly to fix it!
                </p>
                <p>Step 3</p>
              </figcaption>
            </figure>
          </Carousel.Item>
        </Carousel>
      </article>

      {/* VENDOR SECTION*/}

      <article className="vendor-head-container">
        <h1>Featured Vendors</h1>
        {images.map(each => (
          <div className="card-container">
            <div className="logo-name" key={each.id}>
              <img src={each.imgUrl} alt="vendor-logo" className="logos" />
              <h5>{each.name}</h5>
            </div>
            <div className="rating-container">
              <div>
                <p>{each.service}</p>
                <p>services</p>
              </div>
              <div>
                <p>{each.rating}</p>
                <p>Rating</p>
              </div>
              <div>
                <p>{each.review}</p>
                <p>Reviews</p>
              </div>
              <a href="#">Show more</a>
            </div>
          </div>
        ))}
      </article>

      {/* CUSTOMER COMMENTS  customer-review */}

      <div>
        <h1>See what our happy customers have to say about us</h1>
        <div className="customer-review">
          {commentText.map((eachComment, index) => (
            <div className="card" key={index}>
              <img
                src={eachComment.imgUrl}
                alt={eachComment.altText}
                className="customer-logo"
              />
              <div>
                <div>
                  <h2>{eachComment.name}</h2>
                  <img src={eachComment.star} alt="Rating stars" />
                </div>
                <p>{eachComment.post}</p>
                <p>{eachComment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*FOOTER SECTION */}

      <footer className="footer-section">
        <div className="mini-container">
          <div>
            <h2 className="text-white">Get in touch with us</h2>
            <div>
              <input type="email" placeholder="Email address" />
              <BsArrowRightSquareFill />
            </div>
            <p className="text-white">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
          <button type="button" className="button-service">
            Book a service
          </button>
          <ul className="list-item">
            <li className="list-name">Terms</li>
            <li className="list-name">Privacy</li>
            <li className="list-name">Cookies</li>
            <li className="list-name">Business Login</li>
          </ul>
        </div>
        <hr />
        <div className="link-container">
          <img
            src="https://res.cloudinary.com/dqvvpyz72/image/upload/b_rgb:FFFFFF/v1724809888/blue_logo_cs6ywc.png"
            alt="Logo"
          />
          <div>
            <TiSocialLinkedinCircular />
            <RiFacebookCircleLine />
            <TiSocialTwitterCircular />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
