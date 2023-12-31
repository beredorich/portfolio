import { Box, Card, Icon, Typography } from '@mui/material'
import React, { MutableRefObject, useEffect } from 'react'
import azure from './assets/skills/azure.png'
import css from './assets/skills/css.png'
import docker from './assets/skills/docker.png'
import express from './assets/skills/express.png'
import framer from './assets/skills/framer.png'
import git from './assets/skills/git.png'
import html5 from './assets/skills/html5.png'
import materialui from './assets/skills/materialui.png'
import mongodb from './assets/skills/mongodb.png'
import node from './assets/skills/node.png'
import powershell from './assets/skills/powershell.png'
import react from './assets/skills/react.png'
import scrum from './assets/skills/scrum.png'
import securityplus from './assets/skills/securityplus.png'
import typescript from './assets/skills/typescript.png'
import vscode from './assets/skills/vscode.png'
import { stagger, useAnimate, useInView } from 'framer-motion'


const SkillBox: React.FC<{ skill: string, icon: any }> = ({ skill, icon }) => {
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'
            flexBasis={{ xs: '50%', sm: '50%', md: '25%', lg: '12.5%', xl: '12.5%' }}
        >
            <Typography variant='h2'>
                <img src={icon} />
            </Typography>
            <Typography variant='h6'>{skill}</Typography>
        </Box>
    )


}

const skills = ['Security+', 'TypeScript', 'MongoDB', 'NodeJS', 'Azure', 'Git', 'PowerShell', 'React', 'Docker', 'ExpressJS', 'CSS', 'MaterialUI', 'Framer', 'HTML5', 'VSCode', 'Scrum']
const skillIcons = [securityplus, typescript, mongodb, node, azure, git, powershell, react, docker, express, css, materialui, framer, html5, vscode, scrum]

const SkillsPage: React.FC = () => {
    const [scope, animate] = useAnimate()

    const isInView = useInView(scope)
    useEffect(() => {
        if (isInView) {
            const enterAnimation = async () => {
                await animate("div", { opacity: [0.1, 1], x: [-10, 0] }, { delay: stagger(0.05), duration: 0.1 })
            }
            enterAnimation()
        }
    }, [isInView]);

    return (
        <Box ref={scope} width='100%' bgcolor='primary.main' color='primary.main' display='flex' position='relative' flexDirection='row' zIndex={-1} justifyContent='center'>
            <Card sx={{ width: '80%', border: 5, mt: -5, borderColor: 'turquoise', borderRadius: 10 }}>
                <Typography variant='h3' textAlign='center'>Skills</Typography>
                <Box display='flex' flexDirection='row' flexWrap='wrap'>
                    {skills.map((skill, index) => {
                        return (
                            <SkillBox skill={skill} icon={skillIcons[index]} />
                        )
                    }
                    )}
                </Box>
            </Card>
        </Box>)
}

export default SkillsPage