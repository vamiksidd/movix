import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { ContentWrapper, LazyLoading } from "../component";
import PosterFallback from "../../assets/no-poster.png";



import "./style.scss";
const Carousel = ({ data, loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state?.home)
    const navigate = useNavigate()
    const navigation = (dir) => {

    }


    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")} />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")} />
                {!loading ? (<div className="carouselItems">
                    {data?.map((item) => {
                        const posterUrl = url.backdrop + item?.backdrop_path
                        return (
                            <div
                                key={item?.id}
                                onClick={() => navigate(`/movie/${item.id}`)}
                                className="carouselItem">
                                    <div className="posterBlock">
                                        <LazyLoading src={posterUrl} />
                                    </div>
                            </div>
                        )
                    })}</div>) : (<span>Loading...</span>)}
            </ContentWrapper>
        </div>
    )
}

export default Carousel