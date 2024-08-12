import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { educationData } from '@/data/educationData';

export default function Education() {
    return (
        <section className="bg-gray-100 relative py-5 z-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Education</h1>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here is a timeline of my educational journey</p>
            </div>
            <Timeline position="alternate" className="mt-10" data-aos="zoom-y-out" data-aos-delay="150">
                {educationData.map((education, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot>
                                <SchoolIcon/>
                            </TimelineDot>
                            {index < educationData.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" className="bg-clip-text text-transparent bg-gradient-to-r from-[#4895D1] to-[#78B1E5] font-bold">
                                <a href={education.link} target="_blank" rel="noopener noreferrer">
                                    {education.school}
                                </a>
                            </Typography>
                            <Typography>{education.degree}, {education.duration}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    );
}