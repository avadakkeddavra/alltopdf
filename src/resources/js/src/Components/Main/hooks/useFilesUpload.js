import {useCallback, useEffect, useState} from "react";
import useFileInput from "../../../hooks/useFileInput";
import service  from "../../../services/files";
import {useDispatch} from "redux-react-hook";

const ALLOWED_TYPES = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/x-msexcel',
    'application/excel',
    'application/vnd.ms-excel',
    'application/x-excel',
    'application/mspowerpoint',
    'application/powerpoint',
    'application/vnd.ms-powerpoint',
    'application/x-mspowerpoint'
];

const useFilesUpload = () => {
    const [disabled, setDisabled] = useState(true);
    const [processed, setProcessed] = useState(0);
    const dispatch = useDispatch();
    
    const filesInput = useFileInput({
        label: 'Files',
        type: 'file',
        multiple: true,
        accept: ALLOWED_TYPES.join(',')
    });
    
    useEffect(() => {
        console.log(filesInput.files);
        const empty = filesInput.files.length === 0;
        if(empty) {
            setDisabled(true);
            return;
        }
        for(let item of filesInput.files) {
            const {type} = item;
            const isValidType = ALLOWED_TYPES.includes(type);
            console.log(ALLOWED_TYPES, isValidType);
            if(!isValidType) {
                setDisabled(true);
                console.log(item);
                return;
            }
        }
        setDisabled(false);
    }, [filesInput]);
    
    
    const upload = useCallback(async () => {
        dispatch({
            type: 'UPLOAD_FILES',
            payload: {
                files: filesInput.files,
                sideEffect: filesInput.clear
            }
        })
    }, [filesInput]);
    
    return {
        disabled,
        filesInput,
        upload
    }
};

export default useFilesUpload;
