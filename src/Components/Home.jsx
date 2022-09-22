import React, { Component } from 'react'
import '../assets/css/style.css'

const dataGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/g1.jpg",
        "vurl": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/g2.jpg",
        "vurl": "./img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/g3.jpg",
        "vurl": "./img/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/g4.jpg",
        "vurl": "./img/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/g5.jpg",
        "vurl": "./img/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/g6.jpg",
        "vurl": "./img/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/g7.jpg",
        "vurl": "./img/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/g8.jpg",
        "vurl": "./img/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/g9.jpg",
        "vurl": "./img/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class Home extends Component {
    state = {
        vurl: "./img/v1.png",
        name: "GUCCI G8850U",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    renderGlasses() {
        return dataGlasses.map((item) => {
            return (
                <div className="col-2 d-flex align-items-center" key={item.id}>
                    <img src={item.url} alt="" className='w-100' onClick={() => {
                        this.tryGlass(item)
                    }} />
                </div>
            )
        })
    }

    tryGlass(glass) {
        this.setState(
            {
                vurl: glass.vurl,
                name: glass.name,
                desc: glass.desc
            }
        )
        document.querySelector('.glass').style.display = 'block';
        document.querySelector('.detail').style.display = 'block';
    }

    render() {
        const {vurl, name, desc} = this.state;
        return (
            <div className='home'>
                <header className="header text-center py-4">
                    <h5>Try glasses app online</h5>
                </header>
                <section className='virtual-glasses'>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 py-5">
                                <div className="thumb text-center position-relative">
                                    <img src="./img/model.jpg" alt="" className='w-100' height={350} style={{ objectFit: 'cover' }} />
                                    <img src={vurl} alt="" className='position-absolute glass' />
                                    <div className="detail position-absolute text-start">
                                        <h4>{name}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 py-5">
                                <div className="thumb text-center">
                                    <img src="./img/model.jpg" alt="" className='w-100' height={350} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='glasses pb-5'>
                    <div className="container">
                        <div className="row bg-white">
                            {this.renderGlasses()}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
