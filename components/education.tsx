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
        <section className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800" data-aos="zoom-y-out">
                        My Education
                    </h1>
                    <p className="text-lg text-gray-600 mt-4" data-aos="zoom-y-out" data-aos-delay="150">
                        A timeline of my educational achievements.
                    </p>
                </div>
                <Timeline position="alternate"data-aos="fade-up" data-aos-delay="300">
                    {educationData.map((education, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                {index < educationData.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <Typography
                                        variant="h6"
                                        component="span"
                                        className="text-gray-800 font-semibold"
                                    >
                                        <a
                                            href={education.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {education.school}
                                        </a>
                                    </Typography>
                                    <Typography className="text-gray-600 mt-2">
                                        {education.degree}, {education.duration}
                                    </Typography>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}