'use client';

import React from 'react';
import { toast } from 'react-toastify';

const DownloadButton: React.FC = () => {

    const handleDownload = () => {
        const downloadUrl = '/pdf/cv-kreatif.pdf';
        fetch(downloadUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'cv-kreatif.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

                toast.success('Download Successful! Your download has completed.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                console.error('Error during download:', error);
                toast.error('Download Failed! There was an error downloading the file.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <button
            className="bg-gradient-to-r from-[#4895D1] to-[#78B1E5] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleDownload}
            rel="noopener noreferrer"
        >
            Download CV
        </button>
    );
};

export default DownloadButton;