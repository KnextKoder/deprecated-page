import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
export function Faq() {
    
    return (
        <Accordion type="single" collapsible className="w-full text-sm md:w-4/5 text-[#c4c7c5]">
            
            <AccordionItem value="item-1">
                <AccordionTrigger>What is AI tutoring and how does it work?</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                AI tutoring uses artificial intelligence to tailor learning materials like class notes and textbooks to each student&apos;s unique needs and pace. It adapts content, provides instant feedback, and evaluates performance to boost understanding, reinforce strengths, and address weaknesses.
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
                <AccordionTrigger>What qualifications do the Tutors have?</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                AI tutoring platforms use advanced AI algorithms as tutors, leveraging large language models and machine learning to customize educational experiences based on each student&apos;s learning style and needs, without the need for traditional educational qualifications.
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
                <AccordionTrigger>How much will it cost for each User?</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                    Rubix Class offers a subscription model where each user pays $25 per month or $280 per year Additionally, there are discounts available when multiple users from the same school or institution are signed up, making it more cost-effective for groups.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>Can I track my child&apos;s progress?</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                Rubix Class offers a dashboard for tracking user progress, displaying metrics on learning achievements, areas for improvement, overall performance, and comprehension rate. This information can also be shared with parents, teachers, and educational institutions, enhancing monitoring and support.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>How are student&apos;s learning personalized?</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm">
                Rubix Class uses uploaded materials to enhance learning by employing machine learning to analyze and tailor content to each user&apos;s comprehension level. This process adjusts materials based on identified strengths and vulnerabilities, creating more accessible educational content.
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}
  
export default Faq