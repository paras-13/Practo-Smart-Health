import { BrowseCategoryMedicine } from "./BrowseCategoryMedicine";
import { IntroducingBelowCategory } from "./IntroducingBelowCategory";
import { ComprehensiveInfo } from "./ComprehensiveInfo";
import { WhatUserSays }  from "./WhatUserSays";
import { DownloadPracto } from "./DownloadPracto";
import  { SliderImage }  from "./SliderImage";

function Medicine() {
    return(
        <>
            <SliderImage /> 
            <BrowseCategoryMedicine/>
            <IntroducingBelowCategory/>
            <ComprehensiveInfo/>
            <WhatUserSays/>
            <DownloadPracto/>
        </>
    )
}
export default Medicine;