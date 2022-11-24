import { del } from '../../services/photos';
import * as C from './styles';


type Props = {
    url: string;
    name: string;
    handleDelete: (url: string) => void
}

export const PhotoItem = ({ url, name, handleDelete }: Props) => {

    //const handleDelete = () => {
      //  return del(url);
    //}

    return (
        <C.Container>
            <img src={url} alt={name}/>
            {name}
            <button onClick={handleDelete}>Delete</button>
        </C.Container>
    );
}