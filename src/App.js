import React from "react";

import {Card,Chart,Countrypicker} from './components';
import styles from './App.module.css';
import{ fetchData} from './api';
import image from './image/image.png'

class App extends React.Component{
    state={
        data:{},
        country: '',
    }
   async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData , country:country});
    }
    render(){
        const{data, country}= this.state;
        return(
            
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Card data={data}/>
                <Countrypicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
                <h4>Mayukh(Practice Website)</h4>
            </div>
        )
    }
}
export default App; 