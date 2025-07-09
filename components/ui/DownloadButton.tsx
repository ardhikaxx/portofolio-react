'use client';

import React from 'react';
import { toast } from 'react-toastify';
import Icon from '@mdi/react';
import { mdiTrayArrowDown } from '@mdi/js';

const DownloadButton: React.FC = () => {

    const handleDownload = () => {
        const downloadUrl = '/pdf/cv-kreatif.pdf';
        fetch(downloadUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'cv-ats.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

                toast.success('Download Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { width: '300px', marginLeft: 'auto'},
                });
            })
            .catch(error => {
                console.error('Error during download:', error);
                toast.error('Download Failed! There was an error downloading the file.', {
                    position: "top-center",
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
            className="bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={handleDownload}
            rel="noopener noreferrer"
        >
            Download CV
            <Icon path={mdiTrayArrowDown} className='ml-2' size={1} />
        </button>
    );
};

export default DownloadButton;