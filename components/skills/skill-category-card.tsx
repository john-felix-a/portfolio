"use client";

import { motion } from "framer-motion";
import { skillsInterface } from "@/config/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SkillCategoryCardProps {
    title: string;
    skills: skillsInterface[];
    index: number;
}

export default function SkillCategoryCard({
    title,
    skills,
    index,
}: SkillCategoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-tight text-primary">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <HoverCard key={skill.name}>
                            <HoverCardTrigger asChild>
                                <Badge
                                    variant="secondary"
                                    className="flex items-center gap-3 px-3 text-sm transition-colors hover:bg-primary hover:text-primary-foreground select-none"
                                >
                                    <skill.icon className="h-4 w-4" />
                                    <span>{skill.name}</span>
                                </Badge>
                            </HoverCardTrigger>
                            {/* <HoverCardContent className="w-80" side="top" align="center" sideOffset={4}>
                                <div className="flex justify-between space-x-4">
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">{skill.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </HoverCardContent> */}
                        </HoverCard>
                    ))}
                </CardContent>
            </Card>
        </motion.div>
    );
}
