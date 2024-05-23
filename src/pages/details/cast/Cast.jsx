import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";


import { ContentWrapper, LazyLoading } from "../../../components/component";
import avatar from "../../../assets/avatar.png";


import "./style.scss";


const Cast = ({ data, loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    const navigation = (dir) => {
        const container = carouselContainer.current
        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)
        container.scrollTo({ left: scrollAmount, behavior: "smooth" })

    }
    return (
        <div className="castSection">
            <ContentWrapper>

                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")} />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")} />
                <div

                    className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div
                        ref={carouselContainer}
                        className="listItems">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path ? `${url.profile}/${item.profile_path}` : avatar
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        <LazyLoading
                                            src={imgUrl}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="character">
                                        {item.character}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;