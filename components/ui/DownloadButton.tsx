'use client';

import React from 'react';
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
                link.setAttribute('download', 'cv-kreatif.pdf');
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading CV:', error));
    };

    return (
        <button
            className="btn text-white bg-gray-900 hover:bg-gray-800 py-3 px-4 sm:py-3 sm:px-6 text-xs sm:text-base"
            onClick={handleDownload}
            rel="noopener noreferrer"
        >
            Download CV
            <Icon path={mdiTrayArrowDown} className='ml-2' size={1} />
        </button>
    );
};

export default DownloadButton;