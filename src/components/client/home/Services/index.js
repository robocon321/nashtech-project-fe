import {Container} from '@mui/material';
import React from "react";

import styles from "@components/client/home/Home.module.css";
import {Grid} from '@mui/material';
import {FaDropbox, FaRegCalendar, FaShippingFast} from 'react-icons/fa';
import {TiMessages} from 'react-icons/ti';
import {useContext} from 'react';
import {ClientLayoutContext} from '@providers/client/ClientLayoutProvider';

import Service from "@components/client/home/Services/Service/index";

const Index = props => {
    const {t} = useContext(ClientLayoutContext);

    return (
        <div className={styles["services"]}>
            <Container>
                <Grid container="container" spacing={5}>
                    <Grid item="item" md={3} sm={6} xs={12}>
                        <Service
                            title={t('free_shipping')}
                            detail={t('give_special_gift')}
                            loadIcon={() => <FaDropbox/>
                            }
                        />
                    </Grid>
                    <Grid item="item" md={3} sm={6} xs={12}>
                        <Service
                            title={t('special_gift')}
                            detail={t('one_order_over')}
                            loadIcon={() => <FaShippingFast/>
                            }
                        />
                    </Grid>
                    <Grid item="item" md={3} sm={6} xs={12}>
                        <Service
                            title={t('daily_promotion')}
                            detail={t('setup_unde')}
                            loadIcon={() => <FaRegCalendar/>
                            }
                        />
                    </Grid>
                    <Grid item="item" md={3} sm={6} xs={12}>
                        <Service
                            title={t('24/7_care')}
                            detail={t('phone') + ': 04.0987 654 321'}
                            loadIcon={() => <TiMessages/>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Index;