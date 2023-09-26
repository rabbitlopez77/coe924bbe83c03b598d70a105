import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
    const [currentVan, setCurrentVan] = useOutletContext()
    return (
        <h1><img src={currentVan.imageUrl} className="host-van-detail-image" /></h1>
    )
}