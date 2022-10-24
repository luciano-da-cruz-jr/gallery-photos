import { del } from '../../services/photos';
import * as C from './styles';


type Props = {
    url: string;
    name: string;
}



export const PhotoItem = ({ url, name }: Props) => {

    const handleDelete = () => {
        return del(url);
    }

    return (
        <C.Container>
            <img src={url} alt={name}/>
            {name}
            <button onClick={handleDelete}>Delete</button>
        </C.Container>
    );
}