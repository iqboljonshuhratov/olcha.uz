import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductCard from './Components/ProductCard/ProductCard';
import Sidebar from './Components/Sidebar';


const dataProducts = [
  {
    id : "1",
    productImg:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
    groupName:"smartfon",
    price:"14 034 234",
    priceMonth:"200 000",
    title:"Samsung Galaxy S23 Ultra 12/256 GB Кремовый"
  },
  {
    id : "2",
    productImg:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
    groupName:"smartfon",
    price:"15 034 234",
    priceMonth:"200 000",
    title:"Samsung Galaxy S23 Ultra 12/256 GB Кремовый"
  },
  {
    id : "3",
    productImg:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
    groupName:"smartfon",
    price:"16 034 234",
    priceMonth:"200 000",
    title:"Samsung Galaxy S23 Ultra 12/256 GB Кремовый"
  },
  {
    id : "4",
    productImg:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
    groupName:"smartfon",
    price:"17 034 234",
    priceMonth:"200 000",
    title:"Samsung Galaxy S23 Ultra 12/256 GB Кремовый"
  },
  {
    id : "5",
    productImg:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
    groupName:"smartfon",
    price:"18 034 234",
    priceMonth:"200 000",
    title:"Samsung Galaxy S23 Ultra 12/256 GB Кремовый"
  }
  
]


class App extends Component{

  constructor (){
    super();
    this.state = {
      basket:[],
      hide: true,
      tun: localStorage.getItem("tun")
    }
  }

  tunKun = (v) =>{
    return this.setState((state)=> {return {tun: state.tun = v}});
    
  }
  changeHide = (v) => this.setState({hide: v});

  buy = (product) => {

    this.setState((state)=>{
      let arr = [...state.basket];
      arr.push(product);
      return {basket: arr}
    })
  }


  render(){

     localStorage.setItem("tun", this.state.tun);
      let tun1 = localStorage.getItem('tun');
      tun1 = JSON.parse(tun1)
      
      return (
        <div>
        

{/*  Bu joyda Sidebar bor */}

      <Sidebar changeHide={this.changeHide} hide={this.state.hide}/>

        {/* Header qismi */}
        <Header tun1={tun1} basket={this.state.basket} changeHide={this.changeHide} tunKun={this.tunKun} tun={this.state.tun}/>
  
  {/* BU joyda mahsulotlar bor */}
        <section id="products" className={`py-5 ${ tun1 && "tun" || ""}`}>
          <div className="container-fluid">
            <div className="row">

            {
              dataProducts.map((v)=> 
              <div key={v.id} className="col-sm-6 colmd-4 col-lg-3 productCol">
                <ProductCard data={v} buy={() => this.buy(v)} />
                </div>
              )
            }

            
            </div>
          </div>
        </section>
  
      </div>
    );
  }
}


export default App;
