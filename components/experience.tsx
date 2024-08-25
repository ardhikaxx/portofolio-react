"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { experienceData } from '@/data/experienceData';

export default function Experience() {
    const [open, setOpen] = React.useState(false);
    const [selectedExperience, setSelectedExperience] = React.useState<any>(null);

    const handleClickOpen = (experience: any) => {
        setSelectedExperience(experience);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className="bg-gray-100 py-8 md:py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-aos="zoom-y-out">
                        My Experience
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 mb-6" data-aos="zoom-y-out" data-aos-delay="150">
                        Explore the milestones of my development journey.
                    </p>
                </div>
                <Timeline position="alternate" data-aos="fade-up" data-aos-delay="300">
                    {experienceData.map((experience, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <experience.icon className="text-white" />
                                </TimelineDot>
                                {index < experienceData.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer" onClick={() => handleClickOpen(experience)}>
                                    <Typography variant="h6" component="span" className="text-gray-800 font-semibold">
                                        {experience.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className="mt-2">
                                        {experience.company} - {experience.description}
                                    </Typography>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>

                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <DialogTitle>
                        <div className="flex justify-between items-center">
                            <Typography variant="h6" className="font-semibold">
                                {selectedExperience?.title}
                            </Typography>
                            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" className="absolute top-2 right-5">
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body1" color="textSecondary" className="mt-2">
                            <strong>{selectedExperience?.company} - {selectedExperience?.description}</strong>
                        </Typography>
                        <Typography variant="body1" color="text-gray-700" className="mt-4">
                            <p>{selectedExperience?.achievements}</p> 
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}