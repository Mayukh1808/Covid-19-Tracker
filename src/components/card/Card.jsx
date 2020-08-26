import React from 'react';
import{Card, CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Card.module.css';

const Info=({data: {confirmed,recovered,deaths,lastUpdate} })=>{
    if(!confirmed){
        return 'Loading...';
    }
    
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={3}
                            seperator=","
                            
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Active cases of covid_19</Typography>
                    </CardContent>

                

            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varient="h5">
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={3}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Recovered from covid_19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varient="h5">
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={3}
                            seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Deaths from covid_19</Typography>
                    </CardContent>

                </Grid>
                </Grid>



        </div>
    )

}
export default Info;