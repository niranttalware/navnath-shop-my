import React, { useEffect } from 'react'
import dp from "../../assets/dp.jpg"
import "./about.css"

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (<>
    <div className="about">
      <section className='banner'>
        <div className="text">
          About Us
        </div>
      </section>
      <div className="about-text">
      <div className="col">
        <div className="row">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi labore, assumenda repellendus vero, reprehenderit nisi alias iste architecto, sequi amet magni eius. Quod dolorem odit pariatur vero, dignissimos eligendi deserunt eum et sapiente harum, tempore dolore architecto? Temporibus consectetur voluptate quibusdam officiis eos officia ipsam ullam sequi fugit sit illo doloremque recusandae at, sunt nulla cum! Laborum porro tempore, necessitatibus iste itaque atque quo. <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum eligendi culpa dignissimos esse quae qui, saepe non animi! Totam ab exercitationem veniam libero, quod officia itaque corporis mollitia labore reiciendis maxime suscipit? Qui illum natus doloribus? Nam dolorum quia libero repudiandae adipisci dolorem nostrum vero exercitationem molestias repellendus sit quo ratione commodi porro iusto nisi, dolore ut accusamus. Rem consequatur deleniti reprehenderit nobis officiis!</p>
        </div>
        <div className="row">
          <img src={dp} alt="" />

        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default About