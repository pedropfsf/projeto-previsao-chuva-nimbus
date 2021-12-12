import { 
    RenderItensOfDistrictProps,
    ClimateArrayProps
} from "../@types";

export default function renderItensOfDistrict({ 
    value, 
    data 
}:RenderItensOfDistrictProps) {
const [ dataSelected ] = data.filter((item:ClimateArrayProps) => item.district === value);

return (
    dataSelected.days.map(({ date }) => (
            <span key={date}>{date}</span>
        ))
    )
}