import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert"
export default function Home() {
    const params = useParams();

    return (
        <Alert variant = 'success'>
            Welcome {params.name}  
        </Alert>
    )
}