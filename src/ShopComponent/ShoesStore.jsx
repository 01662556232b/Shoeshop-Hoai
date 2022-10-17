import React, { Component } from 'react'
import ComponentModal from './ComponentModal'
import HomePage from './HomePage'
import './store.css'

export default class ShoesStore extends Component {

    arrayShoes = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": '350.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 6,
            "name": "Nike Air Force 1",
            "alias": "adidas-tenisky-super-star",
            "price": '4550.000',
            "description": "The Nike Air Force 1 upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "https://sneakerholicvietnam.vn/wp-content/uploads/2021/07/nike-air-force-1-shadow-all-white-ci0919-100.jpg"
        },
        {
            "id": 3,
            "name": "MLB Boston",
            "alias": "adidas-prophere-customize",
            "price": '540.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/32shc601143l.png?v=1612214639640"
        },
        {
            "id": 4,
            "name": "Adidas Super Star WHITE",
            "alias": "adidas-super-star-white",
            "price": '550.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/giay-adidas-superstar-fv3284-eg4958-mau-trang-size-38-62de444b61971-25072022142043.jpg"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": '450.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 5,
            "name": "Adidas EQT Static",
            "alias": "adidas-swift-run",
            "price": '550.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "https://cf.shopee.vn/file/1fa8994dd4fb1244e43090dadaaacf4e"
        },
        
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": '450.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": '540.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Balenciaga Speed Trainer All Black",
            "alias": "balen-black",
            "price": '850.000',
            "description": "Balenciaga shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "https://neverstopshop.com/image/catalog/Balenciaga%20Triple%20S/Giay-Balenciaga-Triple-S-All-Black--nam-nu-super-fake-replica-gia-re-tot-HCM-BL011-2.jpg"
        },
        {
            "id": 10,
            "name": "Adidas Superstart Das",
            "alias": "adidas-das",
            "price": '470.000',
            "description": "Adidas shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "https://cf.shopee.vn/file/ea4b06d266d44010c79f5e31a7eef184"
        },
        {
            "id": 11,
            "name": "Nike Air Jordan 4",
            "alias": "nike-air-jordan",
            "price": '450.000',
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGbgnFLlc8OzE4Bqu0DquK-3Hu7v94FGRhA&usqp=CAU"
        },
        {
            "id": 12,
            "name": "Adidas AplaBounce",
            "alias": "adidas-apla-bounce",
            "price": '500.000',
            "description": "Adidas shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "https://giaygiare.vn/upload/sanpham/adidas-alphabounce-instinct-m-white-red-blue-1-1.jpg"
        }
    ]

    state = {
        chiTietShoes: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": '350.000',
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    }



    showDetail = (shoes) => {
        console.log(shoes)
        this.setState({
            chiTietShoes: shoes
        })
    }


    render() {
        let { chiTietShoes } = this.state
        return (
            <div className='p'>
                <div className="row">
                    <div className="product">
                        {/*  */}

                    </div>
                    <HomePage showDetail={this.showDetail} arrayShoes={this.arrayShoes} />
                    <ComponentModal chiTietShoes={chiTietShoes} />
                    
                </div>
            </div>
        )
    }
}




