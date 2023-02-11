import Navbar from '../components/Navbar'
import {MoviesList} from '@/Data_movie'
import Card from '../components/Card'
import Link from "next/link";
import Footer from '../components/Footer'
import React from "react";


export default function Home() {


  return (
      <>
          <Navbar/>
          <div className="flex flex-wrap justify-center">
              <div className="carousel w-full rounded-box">


                  {MoviesList.filter(x=>x.Type==="movie").slice(1,8).map((movies, index)=>(
                      <Link className="carousel-item " key={index} href={"/d/"+movies.imdb}>
                          <Card
                              img={movies.img}
                              imdb={movies.imdb}
                          />
                      </Link>
                  ))}

                  <div>
                      more
                  </div>
              </div>
          </div>
          <Footer/>

      </>
  )
}
