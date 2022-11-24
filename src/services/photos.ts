import { getDownloadURL, listAll, ref, uploadBytes, deleteObject  } from "firebase/storage";
import { storage } from "../libs/firebase";
import { Photo } from "../types/Photo"
import { v4 as createId } from 'uuid';


export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items){
        let photoURL = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        });
    }

    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoURL = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoURL } as Photo;
    }else {
        return new Error('Tipo de arquivo não permitido.');
    }
    
}

export const del = async (url:string) => {
    
    
    // Create a reference to the file to delete
    const desertRef = ref(storage, `${url}`);

    // Delete the file
    deleteObject(desertRef).then(() => {
        alert('Imagem deletada com sucesso!');
        return true;
    }).catch((error) => {
        alert('Erro ao excluir a imagem!');
        return false;
    });
    
}