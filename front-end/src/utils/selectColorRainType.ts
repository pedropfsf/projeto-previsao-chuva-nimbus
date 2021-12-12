export default function selectColorRainType(rainType:string) {
    const rainTypeUpperCase = rainType.toUpperCase();
    
    switch(rainTypeUpperCase) {
        default:
        case "SEM CHUVA": 
            return {
                color: "var(--subtitle-whithout-rain)"
            }

        case "CHUVA FRACA": 
            return {
                color: "var(--subtitle-light-rain)"
            }
            
        case "CHUVA MODERADA": 
            return {
                color: "var(--subtitle-moderate-rain)"
            }
            
        case "CHUVA FORTE": 
            return {
                color: "var(--subtitle-heavy-rain)"
            }
    }
}