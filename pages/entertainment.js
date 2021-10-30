import React from 'react'
import { withHeadTitle } from '../components/hoc/withHeadTitle';
import Newz from '../components/Newz';
import NewsService from "../service/NewsService";

function Entertainment({ news }) {
    return <Newz news={news} />
}

export default withHeadTitle(Entertainment, "Entertainment");

export async function getServerSideProps(context) {
    const response = await NewsService.GET_ENTERTAINMENT_NEWZ()
    return {
        props: {
            news: response.data ? response.data.articles : [],
        },
    };
}