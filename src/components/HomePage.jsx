import React from "react";
import millify from "millify";
import { Typography,Row, Col,Statistic} from "antd";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { useGetCryptosQuery} from "../services/cryptoApi";
import { Cryptocurrencies, News } from './index'

const {Title} = Typography;
const HomePage = () => {
    const { data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading...';

  return (
      <>
          <Title level={2} className="heading">Global Crypto Stats</Title>
          <Row>
              <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
              <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
              <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
              <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)} /></Col>
              <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
          </Row>
          <div className="home-heading-container">
              <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
              <Title level={3} className="show-more"><Router><Link to="/cryptocurrencies">Show more</Link></Router></Title>
          </div>
          <Cryptocurrencies simplified/>
          <div className="home-heading-container">
              <Title level={2} className="home-title">Latest Crypto News</Title>
              <Title level={3} className="show-more"><Router><Link to= '/news'>See More</Link></Router></Title>
          </div>
          <News simplified/>
      </>
  )
}

export default HomePage