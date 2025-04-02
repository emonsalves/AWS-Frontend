import { useState } from 'react';

export const useJsonFileUpload = () => {
    const [jsonData, setJsonData] = useState(null);
    const [error, setError] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log("file", file);
        if (file && file.type === "application/json") {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsedData = JSON.parse(e.target.result);
                    setJsonData(parsedData);
                    setError(null);
                } catch (err) {
                    setError("El archivo no contiene un JSON válido.");
                    setJsonData(null);
                }
            };
            reader.readAsText(file);
        } else {
            setError("Por favor, sube un archivo JSON válido.");
            setJsonData(null);
        }
    };

    return { jsonData, error, handleFileUpload };
};